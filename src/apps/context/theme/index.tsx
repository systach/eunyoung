import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext, ReactNode } from 'react'
type ThemeType = 'light' | 'dark'
type ThemeContextType = {
    theme: ThemeType
    onClickChangeTheme: null | (() => void)
}
const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    onClickChangeTheme: null,
})
const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>('dark')

    const onClickChangeTheme = () => {
        setTheme((current) => {
            window.localStorage.setItem(
                'theme',
                current === 'light' ? 'dark' : 'light'
            )
            return current === 'light' ? 'dark' : 'light'
        })
    }

    useEffect(() => {
        if (
            !window.localStorage.getItem('theme') ||
            typeof window.localStorage.getItem('theme') !== typeof theme
        ) {
            window.localStorage.setItem('theme', theme)
            setTheme(theme)
            return
        }
        setTheme(window.localStorage.getItem('theme') as ThemeType)
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, onClickChangeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeContextProvider

import { UI } from '@app/types/components'
import { classnames } from '@pkg/utils'
import { useTheme } from 'apps/context'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { MdOutlineLightbulb, MdNightlight } from 'react-icons/md'
interface IThemeButton {}
const ThemeButton: UI<IThemeButton> = () => {
    const router = useRouter()
    const { theme, onClickChangeTheme } = useTheme()
    return (
        <button
            onClick={onClickChangeTheme}
            className={classnames(
                'transition-smooth flex items-center text-xl hover:opacity-75',
                router.pathname === '/about'
                    ? 'p-2 rounded-full shadow'
                    : 'p-0',
                theme === 'dark'
                    ? router.pathname === '/about'
                        ? 'bg-ddark text-white'
                        : 'bg-ddark/0'
                    : router.pathname === '/about'
                    ? 'bg-white text-ddark'
                    : 'bg-white/0 text-ddark'
            )}
        >
            {theme === 'dark' ? <MdOutlineLightbulb /> : <MdNightlight />}
        </button>
    )
}

export default ThemeButton

import '@css'
import { ThemeContextProvider } from 'apps/context'
import type { AppProps } from 'next/app'
import type { PageWithLayout } from './pages'

interface PageWithLayoutProps extends AppProps {
    Component: PageWithLayout
}

const App = (props: PageWithLayoutProps) => {
    const { Component, pageProps } = props
    const getLayout = Component.getLayout || ((page) => page)
    return (
        <ThemeContextProvider>
            {getLayout(<Component {...pageProps} />)}
        </ThemeContextProvider>
    )
}

export default App

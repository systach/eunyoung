import { H1, Menu, MenuButton, Nav, ThemeButton } from '@app/modules/Header'
import type { UI } from '@app/types/components'
import { classnames } from '@pkg/utils'
import { useTheme } from 'apps/context'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const HeaderLayout: UI = () => {
    const { theme } = useTheme()
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const onMenuClose = () => setIsMenuOpen(false)
    const onMenuOpen = () => setIsMenuOpen(true)
    useEffect(() => {
        setIsMenuOpen(false)
    }, [router])
    return (
        <>
            <header
                className={classnames(
                    'w-full fixed top-0 z-40',
                    router.pathname === '/about'
                        ? 'bg-white/0'
                        : theme === 'dark'
                        ? 'bg-ddark/0 text-white'
                        : 'bg-white/0 text-ddark'
                )}
            >
                <div className="w-full px-8 py-4 max-w-cutoff mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <H1 />
                    </div>
                    <div className="flex items-center space-x-4 lg:space-x-6">
                        <Nav />
                        <ThemeButton />
                        <MenuButton
                            isMenuOpen={isMenuOpen}
                            onMenuOpen={onMenuOpen}
                        />
                    </div>
                </div>
            </header>
            <Menu isMenuOpen={isMenuOpen} onMenuClose={onMenuClose} />
        </>
    )
}

export default HeaderLayout

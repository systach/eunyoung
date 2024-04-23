import { UI } from '@app/types/components'
import { classnames } from '@pkg/utils'
import { useTheme } from 'apps/context'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'

interface IMenu {
    isMenuOpen: boolean
    onMenuClose: () => void
}
interface IRoute {
    href: string
    text: string
    isHrefCurrentPath: boolean
}
const Menu: UI<IMenu> = ({ isMenuOpen, onMenuClose }) => {
    const { theme } = useTheme()
    const router = useRouter()
    const [routes, setRoutes] = useState<IRoute[]>([
        {
            href: '/',
            text: 'Home',
            isHrefCurrentPath: router.pathname === '/',
        },
        {
            href: '/about',
            text: 'About',
            isHrefCurrentPath: router.pathname === '/about',
        },
        {
            href: '/research',
            text: 'Research',
            isHrefCurrentPath: router.pathname.includes('/research'),
        },
        {
            href: '/publications',
            text: 'Publications',
            isHrefCurrentPath: router.pathname.includes('/publications'),
        },
        {
            href: '/personal',
            text: 'Personal',
            isHrefCurrentPath: router.pathname.includes('/personal'),
        },
    ])
    useEffect(() => {
        setRoutes([
            {
                href: '/',
                text: 'Home',
                isHrefCurrentPath: router.pathname === '/',
            },
            {
                href: '/about',
                text: 'About',
                isHrefCurrentPath: router.pathname.includes('/about'),
            },
            {
                href: '/research',
                text: 'Research',
                isHrefCurrentPath: router.pathname.includes('/research'),
            },
            {
                href: '/publications',
                text: 'Publications',
                isHrefCurrentPath: router.pathname.includes('/publications'),
            },
            {
                href: '/personal',
                text: 'Personal',
                isHrefCurrentPath: router.pathname.includes('/personal'),
            },
        ])
    }, [router])
    return (
        <aside
            className={classnames(
                'transition-smooth transform fixed top-0 h-screen z-50 lg:hidden flex flex-col justify-center',
                isMenuOpen
                    ? '-translate-x-0 w-full left-0'
                    : '-translate-x-full w-0 -left-full',
                theme === 'dark' ? 'bg-ddark text-white' : 'bg-white text-ddark'
            )}
        >
            <div className="fixed top-0 flex justify-between items-center px-8 py-4 w-full">
                <p className="font-nunito text-lg">Hi, I&apos;m Eunyoung</p>
                <button className="font-medium text-lg" onClick={onMenuClose}>
                    X
                </button>
            </div>
            <div className="px-8 py-24">
                <nav className="flex flex-col items-start space-y-4 font-nunito">
                    {routes.map((route, index) => (
                        <Link href={route.href} key={index}>
                            <a
                                className={classnames(
                                    'transition-smooth inline-flex space-x-2 items-center',
                                    route.isHrefCurrentPath
                                        ? theme === 'dark'
                                            ? 'text-neutral-100 font-light'
                                            : 'text-neutral-500 font-light'
                                        : theme === 'dark'
                                        ? 'text-neutral-400 font-light'
                                        : 'text-neutral-800 font-medium'
                                )}
                            >
                                <HiOutlineArrowRight />
                                <span>{route.text}</span>
                            </a>
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    )
}

export default Menu

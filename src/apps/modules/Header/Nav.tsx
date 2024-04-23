import { UI } from '@app/types/components'
import { classnames } from '@pkg/utils'
import { useTheme } from 'apps/context'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface INav {}
interface IRoute {
    href: string
    text: string
    isHrefCurrentPath: boolean
}
const Nav: UI<INav> = () => {
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
        <nav
            className={classnames(
                'transition-smooth hidden lg:flex items-center space-x-4 font-nunito',
                router.pathname === '/about'
                    ? 'px-6 py-2 rounded-full shadow-md '
                    : '',
                theme === 'dark'
                    ? router.pathname === '/about'
                        ? 'bg-ddark/100'
                        : 'bg-ddark/0'
                    : router.pathname === '/about'
                    ? 'bg-white/100'
                    : 'bg-white/0'
            )}
        >
            {routes.map((route, index) => (
                <Link href={route.href} key={index}>
                    <a
                        className={classnames(
                            'transition-smooth',
                            route.isHrefCurrentPath
                                ? theme === 'dark'
                                    ? 'text-neutral-100 font-medium hover:text-neutral-300'
                                    : 'text-neutral-800 font-medium hover:text-neutral-400'
                                : theme === 'dark'
                                ? 'text-neutral-400 font-medium hover:text-neutral-200'
                                : 'text-neutral-700 font-light hover:text-neutral-400'
                        )}
                    >
                        {route.text}
                    </a>
                </Link>
            ))}
        </nav>
    )
}

export default Nav

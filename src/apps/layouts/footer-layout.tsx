import type { UI } from '@app/types/components'
import { classnames } from '@pkg/utils'
import { useTheme } from 'apps/context'
import { useRouter } from 'next/router'

const FooterLayout: UI = () => {
    const router = useRouter()
    const { theme } = useTheme()
    return (
        <footer
            className={classnames(
                'transition-smooth w-full z-10 relative',
                theme === 'dark'
                    ? router.pathname === '/'
                        ? 'bg-dpink/5 text-white/80'
                        : 'bg-ddark text-white/80'
                    : router.pathname === '/'
                    ? 'bg-white text-ddark/80'
                    : 'bg-white text-ddark/80'
            )}
        >
            <div className="px-8 py-16 max-w-cutoff mx-auto">
                <p className="text-center font-work-sans text-sm lg:text-base ">
                    Eunyoung Park &copy; 2022. All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default FooterLayout

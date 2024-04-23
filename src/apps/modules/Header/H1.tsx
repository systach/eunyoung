import { UI } from '@app/types/components'
import { classnames } from '@pkg/utils'
import { useTheme } from 'apps/context'
import Link from 'next/link'

interface IH1 {}
const H1: UI<IH1> = () => {
    const { theme } = useTheme()
    return (
        <Link href={'/'}>
            <a
                className={classnames(
                    'transition-smooth font-medium font-nunito text-lg lg:text-xl hover:opacity-60 backdrop-blur-sm',
                    theme === 'dark' ? 'text-white' : 'text-ddark'
                )}
            >
                Eunyoung Park
            </a>
        </Link>
    )
}

export default H1

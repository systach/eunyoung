import { UI } from '@app/types/components'
import { classnames } from '@pkg/utils'
import { useTheme } from 'apps/context'
import { HiMenu } from 'react-icons/hi'
interface IMenuButton {
    isMenuOpen: boolean
    onMenuOpen: () => void
}

const MenuButton: UI<IMenuButton> = ({ isMenuOpen, onMenuOpen }) => {
    const { theme } = useTheme()
    return (
        <button
            className={classnames(
                'transition-smooth inline-flex lg:hidden items-center space-x-2 transform relative',
                isMenuOpen ? 'translate-x-full' : 'translate-x-0',
                theme === 'dark' ? 'text-white' : 'text-ddark'
            )}
            onClick={onMenuOpen}
        >
            <HiMenu className="text-2xl" />
        </button>
    )
}

export default MenuButton

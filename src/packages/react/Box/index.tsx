import { classnames } from '@pkg/utils'
import { ReactNode } from 'react'

interface IBox {
    className?: string
    label?: string

    children: ReactNode
}

const Box: React.FC<IBox> = ({ className, label, children }) => {
    const boxLabel = label ? `section__${label}` : ''

    return (
        <section
            className={classnames(
                'w-full min-h-screen flex flex-col',
                className ? className : '',
                label
            )}
        >
            <div className="px-8 py-20 lg:py-24 w-full max-w-cutoff mx-auto">
                {children}
            </div>
        </section>
    )
}

export default Box

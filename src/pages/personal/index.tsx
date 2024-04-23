// PAGE IMPORTS
import PrimaryLayout from '@app/layouts/primary-layout'
import { Box } from '@pkg/react'
import { classnames } from '@pkg/utils'
import { useTheme } from 'apps/context'
import type { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import type { PageWithLayout } from '../pages'

// SSR
export const getServerSideProps = (_context: GetServerSidePropsContext) => {
    return { props: {} }
}

// PAGE
const PersonalPage: PageWithLayout = () => {
    const { theme } = useTheme()
    return (
        <Box
            className={classnames(
                'transition-smooth justify-center items-center',
                theme === 'dark' ? 'bg-ddark text-white' : 'bg-white text-ddark'
            )}
        >
            <article className="w-full max-w-lg mx-auto flex flex-col items-center space-y-4">
                <p className="text-center text-dblue font-medium font-nunito text-lg leading-7">
                    This page is currently being prepared. If you&apos;d like to
                    see my personal page, please visit in the future.
                </p>
                <Link href="/">
                    <a className="inline-block font-bold font-nunito text-blue-500 transition-smooth hover:text-dblue">
                        Go Back to Main
                    </a>
                </Link>
            </article>
        </Box>
    )
}

// PAGE LAYOUT
PersonalPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

// PAGE EXPORT
export default PersonalPage

// PAGE IMPORTS
import PrimaryLayout from '@app/layouts/primary-layout'
import { research } from '@app/_constants'
import { Box } from '@pkg/react'
import { classnames } from '@pkg/utils'
import { useTheme } from 'apps/context'
import type { GetServerSidePropsContext } from 'next'
import type { PageWithLayout } from '../pages'
import { HiArrowLongRight } from 'react-icons/hi2'
import Link from 'next/link'
import { RiArticleLine } from 'react-icons/ri'
import { TfiWrite } from 'react-icons/tfi'
// SSR
export const getServerSideProps = (_context: GetServerSidePropsContext) => {
    return { props: {} }
}

// PAGE
const ResearchPage: PageWithLayout = () => {
    const { theme } = useTheme()
    return (
        <>
            <Box
                className={classnames(
                    'transition-smooth justify-center items-center relative',
                    theme === 'dark'
                        ? 'bg-ddark text-white'
                        : 'bg-white text-ddark'
                )}
            >
                <div className="mb-8 lg:mb-12 flex justify-center items-center space-x-4">
                    <TfiWrite className="text-2xl md:text-3xl lg:text-4xl" />
                    <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">
                        Research Experiences
                    </h3>
                </div>
                <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                    {Object.values(research).map((each, index) => (
                        <div
                            key={index}
                            className={classnames(
                                'transition-smooth w-full overflow-x-scroll p-8 border rounded shadow-xl border-ddark/10 hover:shadow-2xl',
                                theme === 'dark' ? 'bg-[#111]/50' : ''
                            )}
                        >
                            <h3 className="mb-4 text-lg lg:text-xl font-work-sans">
                                {index + 1} {each.title}
                            </h3>
                            {each.descriptions && (
                                <p className="flex flex-col space-y-4 font-nunito text-sm lg:text-base font-light">
                                    {each.descriptions.map(
                                        (description, jndex) => (
                                            <span
                                                key={jndex}
                                                className="pl-4 border-l-2 border-neutral-400 text-neutral-400 leading-7"
                                            >
                                                <span>{description}</span>
                                            </span>
                                        )
                                    )}
                                </p>
                            )}
                        </div>
                    ))}
                </ul>
            </Box>
            <div
                className={classnames(
                    'transition-smooth w-full px-8 pt-8 text-center border-t ',
                    theme === 'dark'
                        ? 'bg-ddark text-white border-[#111]/50'
                        : 'bg-white text-ddark/90 border-[#999]/50'
                )}
            >
                <div className="flex flex-col items-center space-y-2 mb-4">
                    <RiArticleLine className="text-2xl md:text-3xl lg:text-4xl" />
                    <p className="text-center font-medium text-lg lg:text-xl xl:text-2xl font-nunito">
                        Looking For My Publications?
                    </p>
                </div>
                <Link href={'/publications'}>
                    <a className="inline-block w-max mx-auto text-blue-500 transition-smooth hover:text-dblue font-nunito font-light">
                        Eunyoung&apos;s Publications
                    </a>
                </Link>
            </div>
        </>
    )
}

// PAGE LAYOUT
ResearchPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

// PAGE EXPORT
export default ResearchPage

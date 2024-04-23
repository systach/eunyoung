// PAGE IMPORTS
import PrimaryLayout from '@app/layouts/primary-layout'
import { publications } from '@app/_constants'
import { Box } from '@pkg/react'
import { classnames } from '@pkg/utils'
import { useTheme } from 'apps/context'
import type { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import type { PageWithLayout } from '../pages'
import { TfiWrite } from 'react-icons/tfi'
import { RiArticleLine } from 'react-icons/ri'
// SSR
export const getServerSideProps = (_context: GetServerSidePropsContext) => {
    return { props: {} }
}

// PAGE
const PublicationsPage: PageWithLayout = () => {
    const { theme } = useTheme()

    return (
        <>
            <Box
                className={classnames(
                    'transition-smooth justify-center items-center',
                    theme === 'dark'
                        ? 'bg-ddark text-white'
                        : 'bg-white text-ddark'
                )}
            >
                <div className="mb-8 lg:mb-12 flex justify-center items-center space-x-4">
                    <RiArticleLine className="text-2xl md:text-3xl lg:text-4xl" />
                    <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">
                        Publications
                    </h3>
                </div>
                <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                    {Object.values(publications).map((publication, index) => (
                        <div
                            key={index}
                            className={classnames(
                                'transition-smooth w-full overflow-x-scroll p-8 border rounded shadow-xl border-ddark/10 hover:shadow-2xl',
                                theme === 'dark' ? 'bg-[#111]/50 ' : ''
                            )}
                        >
                            <p className="flex leading-7">
                                {Array.isArray(publication) ? (
                                    <>
                                        <span className="inline-block">
                                            {publication[0]}{' '}
                                            <a
                                                className="text-blue-500 transition-smooth hover:text-dblue"
                                                href={publication[1]}
                                            >
                                                {publication[1]}
                                            </a>{' '}
                                            {publication[2]}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <span>{publication}</span>
                                    </>
                                )}
                            </p>
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
                    <TfiWrite className="text-2xl md:text-3xl lg:text-4xl" />
                    <p className="text-center font-medium text-lg lg:text-xl xl:text-2xl font-nunito">
                        Looking For My Research Experiences?
                    </p>
                </div>
                <Link href={'/research'}>
                    <a className="inline-block w-max mx-auto text-blue-500 transition-smooth hover:text-dblue font-nunito font-light">
                        Eunyoung&apos;s Research Experiences
                    </a>
                </Link>
            </div>
        </>
    )
}

// PAGE LAYOUT
PublicationsPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

// PAGE EXPORT
export default PublicationsPage

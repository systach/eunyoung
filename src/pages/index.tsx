// PAGE IMPORTS
import PrimaryLayout from '@app/layouts/primary-layout'
import type { GetServerSidePropsContext } from 'next'
import type { PageWithLayout } from './pages'
import { SlPaperClip } from 'react-icons/sl'
import { IoSchoolOutline } from 'react-icons/io5'
import Link from 'next/link'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { Box } from '@pkg/react'
import { classnames } from '@pkg/utils'
import { useTheme } from 'apps/context'

// PAGE
const HomePage: PageWithLayout = () => {
    const { theme } = useTheme()
    return (
        <>
            {/* <aside className="h-screen w-full fixed top-0 z-0 overflow-hidden flex flex-col lg:flex-row items-center opacity-30">
                <picture className="overfloh-hidden w-full lg:transform h-full">
                    <Image
                        src={EunyoungProfileImage4}
                        alt="Eunyoung Park Profile Image"
                    />
                </picture>
                <picture className="w-full h-full">
                    <Image
                        src={EunyoungProfileImage1}
                        alt="Eunyoung Park Profile Image"
                    />
                </picture>
            </aside> */}
            {/* <aside className="fixed top-0 w-full h-screen bg-gradient-to-t from-dblue to-dpink"></aside> */}
            <Box
                className={classnames(
                    'transition-smooth w-full justify-center relative z-10',
                    theme === 'dark'
                        ? 'from-dblue/5 to-dpink/5 bg-gradient-to-b'
                        : 'bg-white'
                )}
            >
                <article>
                    <h2
                        className={classnames(
                            'transition-smooth text-center font-medium font-work-sans text-2xl md:text-3xl lg:text-4xl mb-2',
                            theme === 'dark' ? 'text-white' : ''
                        )}
                    >
                        Hi, I am Eunyoung Park.
                    </h2>
                    <p
                        className={classnames(
                            'transition-smooth text-center font-medium font-nunito text-base lg:text-lg',
                            theme === 'dark'
                                ? 'text-neutral-300'
                                : 'text-ddark/60'
                        )}
                    >
                        I&apos;m a post-doctoral researcher at University of
                        California, Davis.
                    </p>
                    <ul className="w-full max-w-md mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 mt-8 mb-8">
                        <Link href={'/publications'}>
                            <a
                                className={classnames(
                                    'col-span-1 px-6 py-3 w-full text-base border rounded shadow inline-flex items-center justify-center space-x-4 transition-smooth',
                                    theme === 'dark'
                                        ? 'text-neutral-200 hover:text-neutral-300/70 hover:border-neutral-300/70 hover:shadow-ddark/10'
                                        : 'text-neutral-500 border-neutral-500/50 hover:border-neutral-700 hover:text-neutral-700 hover:shadow-ddark/10'
                                )}
                            >
                                <SlPaperClip />
                                <span>See Publications</span>
                            </a>
                        </Link>
                        <Link href={'/about'}>
                            <a
                                className={classnames(
                                    'col-span-1 px-6 py-3 w-full text-base border rounded shadow inline-flex items-center justify-center space-x-4 transition-smooth',
                                    theme === 'dark'
                                        ? 'text-neutral-200 hover:text-neutral-300/70 hover:border-neutral-300/70 hover:shadow-ddark/10'
                                        : 'text-neutral-500 border-neutral-500/50 hover:border-neutral-700 hover:text-neutral-700 hover:shadow-ddark/10'
                                )}
                            >
                                <IoSchoolOutline />
                                <span>About Eunyoung</span>
                            </a>
                        </Link>
                    </ul>
                    <p className="font-light font-nunito bg-clip-text text-transparent bg-gradient-to-r from-dpink/75 to-dblue/75 text-center">
                        Or learn about my current research
                    </p>
                    <ul className="w-full max-w-md mx-auto grid grid-cols-1 mt-4 transition-smooth">
                        <Link href={'/research'}>
                            <a className="col-span-1 w-full text-base inline-flex items-start justify-center space-x-4 transition-smooth bg-gradient-to-r from-dblue/0 to-dpink/0  rounded overflow-hidden">
                                <span
                                    className={classnames(
                                        'transition-smooth flex items-center space-x-2  w-full h-[97.5%] px-6 py-3 justify-center',
                                        theme === 'dark'
                                            ? 'bg-ddark/0 hover:bg-ddark/75 backdrop-blur-sm'
                                            : 'bg-white/0 hover:bg-white/100 backdrop-blur-sm'
                                    )}
                                >
                                    <span className="inline-flex justify-center items-center space-x-2 bg-clip-text text-transparent bg-gradient-to-r from-dpink to-dblue transition-smooth hover:from-dblue hover:to-dpink">
                                        <span>Eunyoung&apos;s Research</span>
                                        <HiOutlineArrowRight className="text-dblue" />
                                    </span>
                                </span>
                            </a>
                        </Link>
                    </ul>
                </article>
            </Box>
        </>
    )
}

// PAGE LAYOUT
HomePage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

// PAGE EXPORT
export default HomePage

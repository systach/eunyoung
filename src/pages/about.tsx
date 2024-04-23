// PAGE IMPORTS
import PrimaryLayout from '@app/layouts/primary-layout'
import type { GetServerSidePropsContext } from 'next'
import type { PageWithLayout } from './pages'
import { SlPaperClip } from 'react-icons/sl'
import { IoSchoolOutline } from 'react-icons/io5'
import Link from 'next/link'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { Box } from '@pkg/react'
import EunyoungProfileImage1 from 'public/eunyoung_profile_image1.jpg'
import EunyoungProfileImage2 from 'public/eunyoung_profile_image2.jpg'
import EunyoungProfileImage3 from 'public/eunyoung_profile_image3.jpg'
import EunyoungProfileImage4 from 'public/eunyoung_profile_image4.jpg'
import Image from 'next/image'
import { classnames } from '@pkg/utils'
import { useTheme } from 'apps/context'
import EunyoungCV from 'public/Eunyoung_Park_CV_2022.pdf'
// SSR
export const getServerSideProps = (_context: GetServerSidePropsContext) => {
    return { props: {} }
}

// PAGE
const AboutPage: PageWithLayout = () => {
    const { theme } = useTheme()
    return (
        <>
            <div
                className={classnames(
                    'transition-smooth min-h-screen w-full',
                    theme === 'dark'
                        ? 'bg-ddark text-white'
                        : 'bg-white text-ddark'
                )}
            >
                <div className="min-h-[50vh] lg:h-max lg:max-h-max grid grid-cols-2 lg:grid-cols-4 overflow-hidden px-8 pt-8 lg:px-0 lg:pt-0 lg:gap-0 gap-8">
                    <picture className="lg:relative max-h-[65vh] overflow-hidden">
                        <Image
                            src={EunyoungProfileImage1}
                            alt="Eunyoung Park Profile Image 1"
                        />
                    </picture>
                    <picture className="lg:relative max-h-[65vh] overflow-hidden">
                        <Image
                            src={EunyoungProfileImage2}
                            alt="Eunyoung Park Profile Image 2"
                        />
                    </picture>
                    <picture className="lg:relative max-h-[65vh] overflow-hidden">
                        <Image
                            src={EunyoungProfileImage3}
                            alt="Eunyoung Park Profile Image 3"
                        />
                    </picture>
                    <picture className="lg:relative max-h-[65vh] overflow-hidden">
                        <Image
                            src={EunyoungProfileImage4}
                            alt="Eunyoung Park Profile Image 4"
                        />
                    </picture>
                </div>
                <div
                    className={classnames(
                        'transition-smooth min-h-[50vh] lg:h-max lg:min-h-min      flex flex-col justify-center',
                        theme === 'dark'
                            ? 'bg-ddark text-white'
                            : 'bg-white text-ddark'
                    )}
                >
                    <section className="px-8 pt-16 max-w-cutoff mx-auto">
                        <article className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
                            <div className="lg:col-span-7">
                                <h3 className="font-work-sans font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">
                                    About Me
                                </h3>
                                <p className="leading-7 lg:text-lg lg:leading-8 mb-2">
                                    <span>
                                        I am a post-doctoral researcher at UC
                                        Davis in the{' '}
                                        <em>
                                            Department of Food Science and
                                            Technology.
                                        </em>
                                    </span>{' '}
                                    <span>
                                        My current research is{' '}
                                        <em>
                                            Metabolomics and proteomics for
                                            toxicological interpretation of
                                            plant toxin ‘mesaconitine’ in zebra
                                            fish.
                                        </em>
                                    </span>
                                </p>
                                <p className="leading-7 lg:text-lg lg:leading-8">
                                    I also enjoy traveling, taking photos, and
                                    cooking various cuisines. To explore my
                                    personal life things, you can visit{' '}
                                    <Link href={'/personal'}>
                                        <a
                                            href="#"
                                            className="text-blue-500 transition-smooth hover:text-dblue"
                                        >
                                            here.
                                        </a>
                                    </Link>
                                </p>
                            </div>
                            <div className="lg:col-span-5">
                                <h4 className="font-medium text-xl lg:text-2xl font-work-sans mb-4">
                                    Useful Links
                                </h4>
                                <ul className="flex flex-col space-y-2">
                                    <Link href={'/publications'}>
                                        <a className="w-max font-medium inline-flex items-center space-x-2 text-blue-500 hover:text-dblue cursor-pointer">
                                            <HiOutlineArrowRight />
                                            <span>My Publications</span>
                                        </a>
                                    </Link>
                                    <Link href={'/research'}>
                                        <a className="w-max font-medium inline-flex items-center space-x-2 text-blue-500 hover:text-dblue cursor-pointer">
                                            <HiOutlineArrowRight />
                                            <span>My Research</span>
                                        </a>
                                    </Link>
                                    <a
                                        href={EunyoungCV}
                                        target={'_blank'}
                                        className="w-max font-medium inline-flex items-center space-x-2 text-blue-500 hover:text-dblue cursor-pointer"
                                        rel="noopener noreferrer"
                                    >
                                        <HiOutlineArrowRight />
                                        <span>My CV</span>
                                    </a>
                                    <Link href={'/personal'}>
                                        <a className="w-max font-medium inline-flex items-center space-x-2 text-blue-500 hover:text-dblue cursor-pointer">
                                            <HiOutlineArrowRight />
                                            <span>My Personal</span>
                                        </a>
                                    </Link>
                                </ul>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
            <Box
                className={classnames(
                    'transition-smooth w-full overflow-hidden',
                    theme === 'dark'
                        ? 'bg-ddark text-white'
                        : 'bg-white text-ddark'
                )}
            >
                <article>
                    <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-12">
                        <section className="col-span-1 lg:col-span-7">
                            <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-8">
                                Educations
                            </h3>
                            <ul className="flex flex-col space-y-4">
                                <div className="flex flex-col space-y-2 ">
                                    <p className="flex justify-between items-center space-x-4 font-work-sans">
                                        <span className="text-dblue">
                                            Post-doc
                                        </span>
                                        <span className="text-sm opacity-75">
                                            09.2022 - Current
                                        </span>
                                    </p>
                                    <p className="flex flex-col leading-7 max-w-md">
                                        <span className="font-medium">
                                            Department of Food Science and
                                            Technology, University of
                                            California, Davis, USA
                                        </span>
                                        <em className="font-light">
                                            Advisor - Dr. Ameer taha
                                        </em>
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-2 ">
                                    <p className="flex justify-between items-center space-x-4 font-work-sans">
                                        <span className="text-dblue">
                                            Post-doc
                                        </span>
                                        <span className="text-sm opacity-75">
                                            09.2021 - 08.2022
                                        </span>
                                    </p>
                                    <p className="flex flex-col leading-7 max-w-md">
                                        <span className="font-medium">
                                            Department of Food Science and
                                            Technology, Chung-Ang University,
                                            Korea
                                        </span>
                                        <em className="font-light">
                                            Advisor - Dr. Jihyun Lee
                                        </em>
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-2 ">
                                    <p className="flex justify-between items-center space-x-4 font-work-sans">
                                        <span className="text-dblue">
                                            Ph.D.{' '}
                                            <em className="font-light">
                                                (Combined M.S./Ph.D. program
                                                research)
                                            </em>
                                        </span>
                                        <span className="text-sm opacity-75 text-right w-full sm:w-max self-start">
                                            03.2017 - 08.2021
                                        </span>
                                    </p>
                                    <p className="flex flex-col leading-7 max-w-md">
                                        <span className="font-medium">
                                            Department of Agricultural
                                            Biotechnology, Seoul National
                                            University, Seoul, South Korea
                                        </span>
                                        <em className="font-light">
                                            Advisor - Dr. Jeong-Han Kim
                                        </em>
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-2 ">
                                    <p className="flex justify-between items-center space-x-4 font-work-sans">
                                        <span className="text-dblue">B.Sc</span>
                                        <span className="text-sm opacity-75 text-right w-full sm:w-max">
                                            03.2013 - 02.2017
                                        </span>
                                    </p>
                                    <p className="flex flex-col leading-7 max-w-md">
                                        <span className="font-medium">
                                            Bioresources & Food science, Life &
                                            Environmental Sciences Konkuk
                                            University, Seoul, South Korea
                                        </span>
                                    </p>
                                </div>
                            </ul>
                        </section>
                        <section className="col-span-1 lg:col-span-5">
                            <h3 className="font-bold text-2xl lg:text-3xl mb-8">
                                Academic Society & Affiliations
                            </h3>
                            <ul className="flex flex-col space-y-4">
                                <div className="flex flex-col space-y-2 pl-4 border-l-2 border-dblue">
                                    <p className="flex justify-between items-center space-x-4 font-work-sans">
                                        <span className="text-dblue">
                                            Member
                                        </span>
                                        <span className="text-sm opacity-75 text-right w-full sm:w-max">
                                            03.2017 - Current
                                        </span>
                                    </p>
                                    <p className="flex flex-col leading-7 max-w-md">
                                        <span className="font-medium">
                                            The Korean Society for Applied
                                            Biological Chemistry
                                        </span>
                                    </p>
                                </div>
                                <div className="flex flex-col space-y-2 pl-4 border-l-2 border-dblue">
                                    <p className="flex justify-between items-center space-x-4 font-work-sans">
                                        <span className="text-dblue">
                                            Member
                                        </span>
                                        <span className="text-sm opacity-75 text-right w-full sm:w-max">
                                            03.2017 - Current
                                        </span>
                                    </p>
                                    <p className="flex flex-col leading-7 max-w-md">
                                        <span className="font-medium">
                                            The Korean Society of Pesticide
                                            Science
                                        </span>
                                    </p>
                                </div>
                            </ul>
                        </section>

                        <section className="col-span-1 lg:col-span-12 flex flex-col space-y-16 mx-auto relative w-full h-full backdrop-blur-sm bg-transparent">
                            <div className="relative z-10 backdrop-blur-sm">
                                <h3 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 text-center">
                                    Scholarships
                                </h3>
                                <ul className="flex flex-col w-full divide-y-2 divide-dblue/50 divide">
                                    <div className="flex flex-col text-center lg:text-left py-4">
                                        <p className="flex flex-col lg:flex-row justify-between items-center lg:space-x-4  font-work-sans">
                                            <span className="text-dblue">
                                                Lecture & Research Scholarship
                                            </span>
                                            <span className="text-sm opacity-75 lg:text-right w-full sm:w-max">
                                                02.2019
                                            </span>
                                        </p>
                                        <p className="flex flex-col max-w-md text-sm">
                                            <span className="font-light">
                                                Seoul National University,
                                                Seoul, South Korea
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col text-center lg:text-left py-4">
                                        <p className="flex flex-col lg:flex-row justify-between items-center lg:space-x-4 font-work-sans">
                                            <span className="text-dblue">
                                                Brain Korea 21 Plus
                                            </span>
                                            <span className="text-sm opacity-75 lg:text-right w-full sm:w-max">
                                                2017, 2018, 2019, 2020, and 2021
                                            </span>
                                        </p>
                                        <p className="flex flex-col max-w-md text-sm">
                                            <span className="font-light">
                                                National Research Foundation of
                                                Korea, South Korea
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col text-center lg:text-left py-4">
                                        <p className="flex flex-col lg:flex-row justify-between items-center lg:space-x-4 font-work-sans">
                                            <span className="text-dblue">
                                                Academic Excellence Scholarship
                                            </span>
                                            <span className="text-sm opacity-75 lg:text-right w-full sm:w-max">
                                                03.2016
                                            </span>
                                        </p>
                                        <p className="flex flex-col max-w-md text-sm">
                                            <span className="font-light">
                                                Konkuk University, Seoul, South
                                                Korea
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col text-center lg:text-left py-4">
                                        <p className="flex flex-col lg:flex-row justify-between items-center lg:space-x-4 font-work-sans">
                                            <span className="text-dblue">
                                                Winter Internship Scholarship
                                            </span>
                                            <span className="text-sm opacity-75 lg:text-right w-full sm:w-max">
                                                08.2015
                                            </span>
                                        </p>
                                        <p className="flex flex-col max-w-md text-sm">
                                            <span className="font-light">
                                                Konkuk University, Seoul, South
                                                Korea
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col text-center lg:text-left py-4">
                                        <p className="flex flex-col lg:flex-row justify-between items-center lg:space-x-4 font-work-sans">
                                            <span className="text-dblue">
                                                Academic Excellence Scholarship
                                            </span>
                                            <span className="text-sm opacity-75 lg:text-right w-full sm:w-max">
                                                08.2015
                                            </span>
                                        </p>
                                        <p className="flex flex-col max-w-md text-sm">
                                            <span className="font-light">
                                                Konkuk University, Seoul, South
                                                Korea
                                            </span>
                                        </p>
                                    </div>
                                </ul>
                            </div>
                            <div className="relative z-10 backdrop-blur-sm">
                                <h3 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 text-center">
                                    Academic Awards
                                </h3>
                                <ul className="flex flex-col divide-y-2 divide-dblue/50">
                                    <div className="flex flex-col text-center lg:text-left py-4">
                                        <p className="flex flex-col lg:flex-row justify-between items-center lg:space-x-4 font-work-sans">
                                            <span className="text-dblue">
                                                Best Research Award
                                            </span>
                                            <span className="text-sm opacity-75 lg:text-right w-full sm:w-max">
                                                08.2021
                                            </span>
                                        </p>
                                        <p className="flex flex-col max-w-md text-sm">
                                            <span className="font-light">
                                                Brain Korea 21 Plus
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col text-center lg:text-left py-4">
                                        <p className="flex flex-col lg:flex-row justify-between items-center lg:space-x-4 font-work-sans">
                                            <span className="text-dblue">
                                                Poster Presentation Award
                                            </span>
                                            <span className="text-sm opacity-75 lg:text-right w-full sm:w-max">
                                                10.2019
                                            </span>
                                        </p>
                                        <p className="flex flex-col max-w-md text-sm">
                                            <span className="font-light">
                                                The Korean Society of Forensic
                                                Sciences
                                            </span>
                                        </p>
                                    </div>
                                </ul>
                            </div>
                        </section>
                    </div>
                </article>
            </Box>
        </>
    )
}

// PAGE LAYOUT
AboutPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

// PAGE EXPORT
export default AboutPage

// PAGE IMPORTS
import PrimaryLayout from '@app/layouts/primary-layout'
import { research } from '@app/_constants'
import { Box } from '@pkg/react'
import { classnames } from '@pkg/utils'
import { useTheme } from 'apps/context'
import type { GetServerSidePropsContext } from 'next'
import type { PageWithLayout } from '../pages'
import Link from 'next/link'
import { RiArticleLine } from 'react-icons/ri'
import { TfiWrite } from 'react-icons/tfi'
import {google} from "googleapis"

type ResearchSchema = {
    title: string;
    briefs: [string] | [string, string] | [string, string, string]
}

export const getServerSideProps = async (_context: GetServerSidePropsContext) => {

    const CLIENT_EMAIL=process.env.GOOGLE_CLIENT_EMAIL;
    const CLIENT_PRIVATE_KEY=process.env.GOOGLE_PRIVATE_KEY;
    const DATABASE_ID=process.env.DATABASE_RESEARCH_ID;
    const DATABASE_READ_RANGE='A2:D2';

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: CLIENT_EMAIL,
            private_key: CLIENT_PRIVATE_KEY?.replace(/\\n/g, '\n')
        },
        scopes: [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/spreadsheets',
        ]
    })

    const sheets = google.sheets({
        auth,
        version: 'v4'
    })

    const response = await sheets.spreadsheets.values.get({spreadsheetId: DATABASE_ID, range: DATABASE_READ_RANGE})
    const values = response.data.values;

    const data = values.filter(each => each.length >=1 && each[0]).map(each => {

        const title = each[0]
        const briefs = each.splice(1).filter(Boolean)

        return {
            title, briefs
        } as unknown as ResearchSchema
        
    })


    return { props: {data} }
}

// PAGE
const ResearchPage: PageWithLayout<{data: ResearchSchema[]}> = ({data}) => {

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
                    {data.map((each, index) => (
                        <div
                            key={index}
                            className={classnames(
                                'transition-smooth w-full overflow-x-scroll p-8 border rounded shadow-xl border-ddark/10 hover:shadow-2xl',
                                theme === 'dark' ? 'bg-[#111]/50' : ''
                            )}
                        >
                            <h3 className="mb-4 text-lg lg:text-xl font-work-sans">
                              {each.title}
                            </h3>
                            {each.briefs && (
                                <div className="flex flex-col space-y-4 font-nunito text-sm lg:text-base font-light">
                                    {each.briefs.map(
                                        (brief, jndex) => (
                                            <p
                                                key={jndex}
                                                className="pl-4 border-l-2 border-neutral-400 text-neutral-400 leading-7"
                                            >
                                                <span>{brief}</span>
                                            </p>
                                        )
                                    )}
                                </div>
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

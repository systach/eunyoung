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

import {google} from "googleapis"

type ResearchSchema = {
    title: string;
    link?: string
}

export const getServerSideProps = async (_context: GetServerSidePropsContext) => {

    const CLIENT_EMAIL=process.env.GOOGLE_CLIENT_EMAIL;
    const CLIENT_PRIVATE_KEY=process.env.GOOGLE_PRIVATE_KEY;
    const DATABASE_ID=process.env.DATABASE_PUBLICATIONS_ID;
    const DATABASE_READ_RANGE='A2:B4';

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
        const link =each[1] ?? ""

        return {
            title, link
        } as unknown as ResearchSchema
        
    })


    return { props: {data} }
}

// PAGE
const PublicationsPage: PageWithLayout<{data: ResearchSchema[]}> = ({data}) => {
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
                    {data.map((each, index) => (
                        <div
                            key={index}
                            className={classnames(
                                'transition-smooth w-full p-8 border rounded shadow-xl border-ddark/10 hover:shadow-2xl flex flex-col justify-between gap-y-10',
                                theme === 'dark' ? 'bg-[#111]/50 ' : ''
                            )}
                        >
                           <p className='text-wrap break-words w-full'>
                            {each.title}
                           </p>
                       {each.link && (
                            <a href={each.link} target='_blank'  className='font-medium uppercase tracking-[0.075rem] flex justify-center items-center w-full px-5 py-3 rounded-md bg-neutral-900 border text-white lg:hover:bg-neutral-600' rel="noreferrer">
                            Visit Publication
                       </a>
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

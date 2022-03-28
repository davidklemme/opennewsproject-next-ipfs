import React from 'react';
import MainNewsPage from '../components/news/MainNewsPage';
import { getBBCGlobal } from '../data/newsfeeds/en/bbcGlobal';
import { getMeduza } from '../data/newsfeeds/en/meduza';

export default function Home({ newsData }) {
    const content = [
        {
            id: 1,
            pic: '',
            headline: 'FCKPTN',
            summary: '"Special" Operation',
        },
        {
            id: 2,
            pic: '',
            headline: 'FCKVLD',
            summary:
                '"Special" Operation, Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
        },
    ];
    return (
        <div style={{ minHeight: '400px', padding: '20px' }}>
            <MainNewsPage content={newsData ? newsData : content} />
        </div>
    );
}

export async function getStaticProps(context) {
    //TODO insert global way to fetch data sources dynamically
    const bbcData = await getBBCGlobal();
    const meduzaData = await getMeduza();
    const newsData = [...bbcData, ...meduzaData];
    return {
        props: { newsData },
        revalidate: 3600,
    };
}

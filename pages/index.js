import React from 'react';
import MainNewsPage from '../components/news/MainNewsPage';
import { getBBCGlobal } from '../data/newsfeeds/latin/bbcGlobal';

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
    const newsData = await getBBCGlobal();
    return {
        props: { newsData },
    };
}
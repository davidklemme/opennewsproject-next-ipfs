import React from 'react';
import MainNewsPage from '../../components/news/MainNewsPage';
import { collectFeedData } from '../../data/collectFeedData';

export default function Home({ newsData }) {
    return (
        <div style={{ minHeight: '400px', padding: '20px' }}>
            <MainNewsPage content={newsData} />
        </div>
    );
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { lang: 'de' } }, { params: { lang: 'en' } }],
        fallback: true,
    };
}
export async function getStaticProps({ params }) {
    const newsData = await collectFeedData(params.lang);
    return {
        props: { newsData },
    };
}

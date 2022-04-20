import React from 'react';
import MainNewsPage from '../components/news/MainNewsPage';
import { collectFeedData } from '../data/collectFeedData';

export default function Home({ newsData }) {
    return (
        <div style={{ minHeight: '400px', padding: '20px' }}>
            <MainNewsPage content={newsData} />
        </div>
    );
}

export async function getStaticProps() {
    const newsData = await collectFeedData('en');
    return {
        props: { newsData },
        revalidate: 500,
    };
}

const feeds = [
    {
        name: 'bbc',
        data: {
            url: 'http://feeds.bbci.co.uk/news/rss.xml?edition=int',
            dataMap: {
                id: 'guid',
                pic: 'null',
                headline: 'title',
                summary: 'content',
                date: 'pubDate',
                attribution: 'BBC',
            },
        },
    },
    {
        name: 'meduza',
        data: {
            url: 'https://meduza.io/rss/en/all',
            dataMap: {
                id: 'guid',
                pic: 'null',
                headline: 'title',
                summary: 'content',
                date: 'pubDate',
                attribution: 'Meduza.io',
            },
        },
    },
];
export default feeds;

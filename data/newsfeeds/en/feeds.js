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
    {
        name: 'rfe',
        data: {
            url: 'https://www.rferl.org/api/z$qimetkiy',
            dataMap: {
                id: 'guid',
                pic: 'null',
                headline: 'title',
                summary: 'content',
                date: 'pubDate',
                attribution: 'RFE/RL',
            },
        },
    },
    {
        name: 'DW',
        data: {
            url: 'https://rss.dw.com/rdf/rss-en-all',
            dataMap: {
                id: 'link',
                pic: 'null',
                headline: 'title',
                summary: 'content',
                date: 'date',
                attribution: 'DW',
            },
        },
    },
];
export default feeds;

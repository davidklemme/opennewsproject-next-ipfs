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
                attribution: 'BBC News',
                link: 'link',
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
                link: 'link',
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
                link: 'link',
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
                link: 'link',
            },
        },
    },
    {
        name: 'CNN',
        data: {
            url: 'http://rss.cnn.com/rss/edition.rss',
            dataMap: {
                id: 'link',
                pic: 'image',
                headline: 'title',
                summary: 'contentSnippet',
                date: 'pubDate',
                attribution: 'CNN',
                link: 'link',
            },
        },
    },
];
export default feeds;

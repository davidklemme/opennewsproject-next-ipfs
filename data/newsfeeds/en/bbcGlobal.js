import Parser from 'rss-parser';

export const getBBCGlobal = async () => {
    const parser = new Parser();
    let feed = await parser.parseURL('http://feeds.bbci.co.uk/news/rss.xml?edition=int');
    const result = feed.items.map((it) => {
        return {
            id: it.guid,
            pic: null,
            headline: it.title,
            summary: it.content,
            date: it.pubDate,
            source: 'BBC',
        };
    });
    return result;
};

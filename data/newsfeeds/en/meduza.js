import Parser from 'rss-parser';

export const getMeduza = async () => {
    const parser = new Parser();
    let feed = await parser.parseURL('https://meduza.io/rss/en/all');
    const result = feed.items.map((it) => {
        return {
            id: it.guid,
            pic: null,
            headline: it.title,
            summary: it.content,
            date: it.pubDate,
            source: 'Meduza.io',
        };
    });
    return result;
};

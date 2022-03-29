import Parser from 'rss-parser';
import feeds from './newsfeeds/en/feeds';

const getKeyValueFromJSONObject = (obj, searchItem) => {
    for (const [key, value] of Object.entries(obj)) {
        if (key === searchItem) {
            return value;
        }
    }
};
const getFeed = async (source) => {
    const parser = new Parser();
    let feed = await parser.parseURL(source.url);
    const result = feed.items.map((it) => {
        return {
            id: getKeyValueFromJSONObject(it, source.dataMap.id),
            pic: getKeyValueFromJSONObject(it, source.dataMap.pic) || null,
            headline: getKeyValueFromJSONObject(it, source.dataMap.headline),
            summary: getKeyValueFromJSONObject(it, source.dataMap.summary),
            date: getKeyValueFromJSONObject(it, source.dataMap.date),
            attribution: source.dataMap.attribution,
        };
    });
    return result;
};

export const collectFeedData = async () => {
    const data = feeds.map(async (element) => {
        const feed = (await getFeed(element.data)).flat(2);
        return feed;
    });
    return Promise.all(data);
};

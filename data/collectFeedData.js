import Parser from 'rss-parser';
import feeds from './newsfeeds/en/feeds';

const getKeyValueFromJSONObject = (obj, searchItem) => {
    for (const [key, value] of Object.entries(obj)) {
        if (key === searchItem) {
            return value;
        }
    }
};

const orderFeed = (feed) => {
    const ordered = feed.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
    });
    return ordered;
};
const getFeed = async (source) => {
    const parser = new Parser();
    let feed = await parser.parseURL(source.url);
    const result = feed.items.map((it) => {
        return {
            id: getKeyValueFromJSONObject(it, source.dataMap.id),
            pic: getKeyValueFromJSONObject(it, source.dataMap.pic) || null,
            headline: getKeyValueFromJSONObject(it, source.dataMap.headline),
            summary: getKeyValueFromJSONObject(it, source.dataMap.summary) || null,
            date: getKeyValueFromJSONObject(it, source.dataMap.date) || null,
            attribution: source.dataMap.attribution,
        };
    });
    return result;
};

const getAllFeedData = async () => {
    const data = feeds.map(async (element) => {
        const feed = await getFeed(element.data);
        return feed;
    });
    return Promise.all(data);
};
export const collectFeedData = async () => {
    const flatFeeds = (await getAllFeedData()).flat(2);
    const orderedFeedByDate = orderFeed(flatFeeds);
    return orderedFeedByDate;
};

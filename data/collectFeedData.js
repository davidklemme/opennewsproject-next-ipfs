import Parser from 'rss-parser';
import feedsEn from './newsfeeds/en/feeds';
import feedsDe from './newsfeeds/de/feeds';

const feeds = [...feedsEn, ...feedsDe];

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
    try {
        let feed = await parser.parseURL(source.url);
        const result = feed.items.map((it) => {
            return {
                id: getKeyValueFromJSONObject(it, source.dataMap.id),
                pic: getKeyValueFromJSONObject(it, source.dataMap.pic) || null,
                headline: getKeyValueFromJSONObject(it, source.dataMap.headline),
                summary: getKeyValueFromJSONObject(it, source.dataMap.summary) || null,
                date: getKeyValueFromJSONObject(it, source.dataMap.date) || null,
                attribution: source.dataMap.attribution,
                link: getKeyValueFromJSONObject(it, source.dataMap.link),
            };
        });
        return result;
    } catch (e) {
        console.error(e);
    }
};

const getAllFeedData = async (lang) => {
    const data = feeds
        .filter((el) => el.type === lang)
        .map(async (element) => {
            const feed = await getFeed(element.data);
            return feed;
        });
    return Promise.all(data);
};
export const collectFeedData = async (lang) => {
    const flatFeeds = (await getAllFeedData(lang)).flat(2);
    const orderedFeedByDate = orderFeed(flatFeeds);
    return orderedFeedByDate;
};

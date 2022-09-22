import NodeCache from 'node-cache';

class NodeCacheService {
    constructor() {
        this.myCache = new NodeCache({ stdTTL: 100 });
    }

    storeFilmInCache(film) {
        return this.myCache.set(`${film.title}`, film, 5);
    }

    getFilmFromCache(title) {
        return this.myCache.get(title);
    }
}

export const nodeCacheService = new NodeCacheService();

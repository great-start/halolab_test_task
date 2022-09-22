import NodeCache from 'node-cache';

class NodeCacheService {
    constructor() {
        this.myCache = new NodeCache({ stdTTL: 100 });
    }

    storeFilmInCache(film) {
        return this.myCache.set(`${film.title}`, film, 15);
    }

    getFilmFromCache(film) {
        return this.myCache.get(`${film.title}`);
    }
}

export const nodeCacheService = new NodeCacheService();

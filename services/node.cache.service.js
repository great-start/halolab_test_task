import NodeCache from 'node-cache';

import { config } from '../config/config.js';

class NodeCacheService {
    constructor() {
        this.myCache = new NodeCache();
    }

    async storeFilmInCache(film) {
        return this.myCache.set(film.title, film, config.NODE_TTL);
    }

    async getFilmFromCache(title) {
        return this.myCache.get(title);
    }
}

export const nodeCacheService = new NodeCacheService();

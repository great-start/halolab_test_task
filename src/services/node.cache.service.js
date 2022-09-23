import NodeCache from 'node-cache';

import { config } from '../config/config.js';

class NodeCacheService {
    constructor() {
        this.myCache = new NodeCache();
    }

    async saveFilm(film) {
        return this.myCache.set(film.title, film, config.NODE_TTL);
    }

    async getFilm(title) {
        return this.myCache.get(title);
    }
}

export const nodeCacheService = new NodeCacheService();

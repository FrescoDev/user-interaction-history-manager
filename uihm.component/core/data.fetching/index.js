require('babel-polyfill');
import cache from '../../cache/'
import { mockThread } from './mock.data'

class DataFetchingModule {
    constructor(parameters) {
        this._queryParams = parameters
        this._mockData = JSON.stringify(mockThread)
        cache.set(this._queryParams.userId, this._mockData)
    }

    async fetchAsync() {
        let reply = await cache.getAsync(this._queryParams.userId)
        let data = JSON.parse(reply)

        return data;
    }
}

export default DataFetchingModule
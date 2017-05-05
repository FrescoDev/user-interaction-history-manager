import config from '../configuration';
import bluebird from 'bluebird';

const redis = (process.env.NODE_ENV === 'production') ? require('redis') : require('redis-mock');

bluebird.promisifyAll(redis);
bluebird.promisifyAll(redis.createClient());

const cachingClient = redis.createClient(config.redis.url, { no_ready_check: true });

cachingClient.on('error', (err) => {
    console.log('   Error connecting to Redis :(' + err)
});

cachingClient.on('connect', () => {
    console.log('    Woo Hoo! Redis connected!\n')
});

export default cachingClient;
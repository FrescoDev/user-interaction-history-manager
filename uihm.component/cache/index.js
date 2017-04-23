import config from '../configuration';

const redis = (process.env.NODE_ENV === 'production') ? require('redis') : require('redis-mock');
const cachingClient = redis.createClient(config.redis.url, { no_ready_check: true });

cachingClient.on('error', (err) => {
    // eslint-disable-next-line no-console      
    console.log('   Error connecting to Redis cache :(' + err)
});

cachingClient.on('connect', () => {
    // eslint-disable-next-line no-console  
    console.log('    Woo Hoo! Redis connected!\n')
});

export default cachingClient;
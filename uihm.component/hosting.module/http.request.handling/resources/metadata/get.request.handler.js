import BaseHandler from 'fresco-http-service-utilities';

class GetMetaHandler extends BaseHandler {
    handle(req, res) {
        res.json({
            description: 'user-interaction-history-manager',
            health: 'ok'
        });
    }
}

export default new GetMetaHandler();
import BaseHandler from 'fresco-http-service-utilities';

class MetaHandler extends BaseHandler {
  index(req, res) {
		res.json({
			description: 'user-interaction-history-manager',
			health: 'ok'
		});
	}
}

export default new MetaHandler();
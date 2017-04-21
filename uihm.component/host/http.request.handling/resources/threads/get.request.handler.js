import BaseHandler from 'fresco-http-service-utilities';
import DataFetchingModule from '../../../../core/data.fetching';

class GetThreadHandler extends BaseHandler {
    handle(req, res) {
        let dataFetchingModule = new DataFetchingModule();
        let data = dataFetchingModule.fetch();

        res.json({
            'thread': data
        })
    }
}

export default new GetThreadHandler()
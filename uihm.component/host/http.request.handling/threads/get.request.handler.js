import BaseHandler from 'fresco-http-service-utilities';
import DataFetchingModule from '../../../core/data.fetching';

class GetThreadHandler extends BaseHandler {
    async handle(req, res) {

        const parameters = {
            userId: req.params.userId || 'both',
            threadSize: req.query.size || 'max',
            threadInteractorId: req.query.interactor || 'all'
        };

        const dataFetchingModule = new DataFetchingModule(parameters);

        try {
            const data = await dataFetchingModule.fetchAsync();
            res.json({'data': data})
        } catch (error) {
            console.log(error);
        }
    }
}

export default new GetThreadHandler()
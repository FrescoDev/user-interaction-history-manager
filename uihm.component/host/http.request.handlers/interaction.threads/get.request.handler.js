import BaseHandler from 'fresco-http-service-utilities'
import DataFetchingModule from '../../../logic'

class GetThreadHandler extends BaseHandler {
    handle(req, res) {
        let data = DataFetchingModule.fetch()

        res.json({
            'thread': data
        })
    }
}

export default new GetThreadHandler()
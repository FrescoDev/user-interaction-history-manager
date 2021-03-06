import GetMetaHandler from '../http.request.handling/metadata/get.request.handler'
import GetThreadHandler from '../http.request.handling/threads/get.request.handler'
import { Router } from 'express'

const routes = new Router()

routes.get('/meta', GetMetaHandler.handle)
routes.get('/thread/:userId/', GetThreadHandler.handle)

export default routes
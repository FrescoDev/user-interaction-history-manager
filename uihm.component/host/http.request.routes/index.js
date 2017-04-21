import GetMetaHandler from '../http.request.handlers/metadata/get.request.handler'
import GetThreadHandler from '../http.request.handlers/interaction.threads/get.request.handler'
import { Router } from 'express'

const routes = new Router()

routes.get('/meta', GetMetaHandler.handle)
routes.get('/thread', GetThreadHandler.handle)

export default routes
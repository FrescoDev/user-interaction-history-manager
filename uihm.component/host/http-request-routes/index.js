import MetaHandler from '../http-request-handlers/meta.handler'
import { Router } from 'express'

const routes = new Router()

routes.get('/meta', MetaHandler.index)

export default routes

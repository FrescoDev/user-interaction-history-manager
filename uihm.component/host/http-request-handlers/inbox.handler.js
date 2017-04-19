import BaseHandler from 'fresco-http-service-utilities'

class InboxHandler extends BaseHandler {
  index (req, res) {
    res.json({
      'res': response
    })
  }
}

export default new InboxHandler()

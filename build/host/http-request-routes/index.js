'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inbox = require('../http-request-handlers/inbox.handler');

var _inbox2 = _interopRequireDefault(_inbox);

var _meta = require('../http-request-handlers/meta.handler');

var _meta2 = _interopRequireDefault(_meta);

var _express = require('express');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = new _express.Router();

routes.post('/inbox', _inbox2.default.index);
routes.get('/meta', _meta2.default.index);

exports.default = routes;
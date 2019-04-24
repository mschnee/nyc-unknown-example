const supertest = require('supertest')

exports.beforeEach = async t => {
  const app = require('../../../app')
  t.context.app = app
  t.context.client = supertest(app)
}

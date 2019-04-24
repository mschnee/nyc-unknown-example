const test = require('ava')
const request = require('supertest')

const { beforeEach } = require('../lib')

test.beforeEach(beforeEach)

test('test 1 gives me an OK', async t => {
  const res = await t.context.client.get('/test1/foo').expect(200)
  t.is(res.text, 'OK')
  console.log('test 1 done')
})

test('test 2 gives me an foo-echo', async t => {
  const res = await t.context.client.get('/test2/foo').expect(200)
  t.is(res.text, 'foo')
  console.log('test 2 done')
})

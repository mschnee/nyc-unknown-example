import test from 'ava'

test('this will pass', t => {
  t.pass()
})

test('app can be initialized', async t => {
  const app = require('../app')

  t.truthy(app)
  console.log('test 3 done')
})

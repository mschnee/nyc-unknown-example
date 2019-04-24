const router = require('express').Router()

router.get('/test1/:param', async (req, res) => {
  res.send('OK')
})

router.get('/test2/:param', async (req, res) => {
  const { param } = req.params
  res.send(param)
})

module.exports = router

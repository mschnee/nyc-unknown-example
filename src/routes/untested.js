const router = require('express').Router()

router.get('/bar1/:param', async (req, res) => {
  res.send('OK')
})

router.get('/bar1/:param', async (req, res) => {
  const { param } = req.params
  res.send(param)
})

module.exports = router

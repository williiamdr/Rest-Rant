const router = require('express').Router()
const express = require('express')
const app = express()

router.get('/', (req, res) => {
    res.render('./places/index')
})

// GET /places
app.get('/', (req, res) => {
    res.render('places/index')
  })
  

module.exports = router

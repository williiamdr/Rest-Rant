const router = require('express').Router()
const db = require('../models')

// retrieves all places
router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(error => {
            console.log('error:', error)
            res.render('error404')
        })
})

// posts a new place
router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(error => {
            if (error && error.name == 'ValidationError') {
                let message = 'Validation Error: '
                for (var field in error.errors) {
                    message += `${field} was ${error.errors[field].value}. `
                    message += `${error.errors[field].message}`
                }
                res.render('places/new', { message })
            }
            else {
                res.render('error404')
            }
        })
})

// new place form
router.get('/new', (req, res) => {
    res.render('places/new')
})

// place show page
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/show', { place })
        })
        .catch(error => {
            console.log('error:', error)
            res.render('error404')
        })
})

// update existing place
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/places/${req.params.id}`)
        })
        .catch(error => {
            console.log('error:', error)
            res.render('error404')
        })
})

// delete place
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/places')
        })
        .catch(error => {
            console.log('error:', error)
            res.render('error404')
        })
})

// edit place page
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/edit', { place })
        })
        .catch(error => {
            console.log('error:', error)
            res.render('error404')
        })
})

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router






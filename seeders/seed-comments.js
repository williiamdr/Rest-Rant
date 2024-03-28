const db = require('../models')

async function seed() {
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommend!'
    })
    // adds comments to the place's (H-Thai-ML) comment array
    place.comments.push(comment.id)

    //saves the place now that it has the comment
    await place.save()

    //exit the program/function
    process.exit
}

seed()
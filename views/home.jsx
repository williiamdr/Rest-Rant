const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <h1>Coding Cat Cafe</h1>
              <h2>Rating</h2>
              <p>Not Rated</p>
              <h1>Description</h1>
              <p>Located in Phoenix, AZ and serving Coffee, Bakery</p>
              <img src="/images/charcuterie-board.jpg" alt="Charcuterie board" />
              <div>
              Photo by <a href="https://unsplash.com/@ellaolsson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ella Olsson</a> on <a href="https://unsplash.com/photos/assorted-fruits-and-vegetable-on-brown-wooden-chopping-board-2IxTgsgFi-s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> 
              </div>
              <h2>Comments</h2>
              <p>No comments yet!</p>
              <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
          </main>
      </Def>
    )
  }
  

module.exports = home

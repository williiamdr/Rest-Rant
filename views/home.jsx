const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>Rest-Rant</h1>
              <img src="/images/charcuterie-board.jpg" alt="Charcuterie board" />
              <div>
              Photo by <a href="https://unsplash.com/@ellaolsson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ella Olsson</a> on <a href="https://unsplash.com/photos/assorted-fruits-and-vegetable-on-brown-wooden-chopping-board-2IxTgsgFi-s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> 
              </div>
              <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
          </main>
      </Def>
    )
  }
  

module.exports = home

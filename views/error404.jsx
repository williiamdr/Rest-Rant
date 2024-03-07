const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="/images/404error.jpg" alt="Sad pug puppy"/>
              <div>
              Photo by <a href="https://unsplash.com/@matthewhenry?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Matthew Henry</a> on <a href="https://unsplash.com/photos/pug-covered-with-blanket-on-bedspread-2Ts5HnA67k8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> 
              </div>
          </main>
      </Def>
    )
  }
  
  

module.exports = error404

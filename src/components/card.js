  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

import axios from "axios"

  //
const Card = (article) => {
  const card = document.createElement('div')
  card.classList.add('card')

  const headline = document.createElement('div')
  headline.classList.add('headline')
  headline.textContent = article.headline
  card.appendChild(headline)

  const author = document.createElement('div')
  author.classList.add('author')
  card.appendChild(author)

  const imgContainer = document.createElement('div')
  imgContainer.classList.add('img-container')
  author.appendChild(imgContainer)

  const image = document.createElement('img')
  image.setAttribute('src', article.authorPhoto)
  imgContainer.appendChild(image)

  const authorName = document.createElement('span')
  authorName.textContent = `By ${article.authorName}`

  card.addEventListener('click', () => {
    console.log(article.headline)
  })

  return card
}

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
const cardAppender = (selector) => {
  const entry = document.querySelector(selector)

  axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => {
      const articleTopics = Object.keys(response.data.articles) // this is only grabbing the keys from the object, ie javascript bootstrap etc
      articleTopics.forEach(topic => { // now looping over the keys that we just defined. the keys are actually arrays that are full of objects that correspond to card above
        response.data.articles[topic].forEach(actualArticle => { // bc it's an array, response.data.articles[topic] is now going into the array to find an object (actualArticle is an object)
          entry.appendChild(Card(actualArticle)) // actualArticle is an object that is passed into Card
        })
      })
    })
    .catch(error => {console.log(error)})
    .finally(fin => {console.log('card fin')})
}

export { Card, cardAppender }

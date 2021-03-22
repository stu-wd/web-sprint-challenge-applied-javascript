import axios from "axios";

const Card = (article) => {
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

  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const newHeadline = document.createElement("div");
  newHeadline.classList.add("headline");
  newHeadline.textContent = article.headline;

  const newAuthor = document.createElement("div");
  newAuthor.classList.add("author");

  const newImgContainer = document.createElement("div");
  newImg.classList.add("img-container");
  
  const newImage = document.createElement("img");
  newImage.src = article.authorPhoto;

  const authorName = document.createElement("span");
  authorName.textContent = `By ${article.authorName}`;

  newCard.appendChild(newHeadline);
  newCard.appendChild(newAuthor);
  newAuthor.appendChild(newImgContainer);
  newAuthor.appendChild(authorName);

  newCard.addEventListener("click", event => {
    console.log(`${newHeadline.textContent}`);
  })

  return newCard;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const entryPoint = document.createElement(selector);

  axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then(res => {
      const response = Object.keys(res.data.articles);
      response.forEach(topic => {
        const articles = res.data.articles[topic];
        articles.forEach(articleObject => {
          const newCard = Card(articleObject);
          entryPoint.appendChild(newCard);
        })
      })
    })
}

export { Card, cardAppender }

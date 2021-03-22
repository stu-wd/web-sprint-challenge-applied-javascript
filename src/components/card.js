import axios from "axios";

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

  console.log(`this is here at least`)
  
  const Card = (article) => {

  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const newHeadline = document.createElement("div");
  newHeadline.classList.add("headline");
  newHeadline.textContent = article.headline;

  const newAuthor = document.createElement("div");
  newAuthor.classList.add("author");

  const newImgContainer = document.createElement("div");
  newImgContainer.classList.add("img-container");
  
  const newImage = document.createElement("img");
  newImage.setAttribute("src", article.authorPhoto)

  const authorName = document.createElement("span");
  authorName.textContent = `By ${article.authorName}`;

  newCard.appendChild(newHeadline);
  newCard.appendChild(newAuthor);
  newAuthor.appendChild(newImgContainer);
  newImgContainer.appendChild(newImage);
  newAuthor.appendChild(authorName);

  newCard.addEventListener("click", event => {
    console.log(`${newHeadline.textContent}`);
  })

  return newCard;
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

  const entryPoint = document.querySelector(selector);

  // console.log(entryPoint);

  axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then(res => {
      console.log('yep')
      const response = Object.keys(res.data.articles);
      response.forEach(topic => {
        res.data.articles[topic].forEach(entry => {
          document.querySelector(selector).appendChild(Card(entry))
        })
      })
    .catch(err => console.log(`error`))
    .finally(fin => console.log(`fin cards`))
})

}


export { Card, cardAppender }

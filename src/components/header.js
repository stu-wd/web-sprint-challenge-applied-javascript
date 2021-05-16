  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

const Header = (title, date, temp) => {

  const header = document.createElement('div')
  header.classList.add('header')

  const dateThing = document.createElement('span')
  dateThing.classList.add('date')
  dateThing.textContent = date
  header.appendChild(dateThing)

  const titleThing = document.createElement('h1')
  titleThing.textContent = title
  header.appendChild(titleThing)
  

  const tempThing = document.createElement('span')
  tempThing.classList.add('temp')
  tempThing.textContent = temp
  header.appendChild(tempThing)

  console.log('Header console log')

  return header
}

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

const headerAppender = (selector) => {

  const entry = document.querySelector(selector)
  const newHeader = Header('Phish', '10.22.2016', 'Sizzling')
  entry.appendChild(newHeader)
}

export { Header, headerAppender }

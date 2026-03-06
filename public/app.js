
//GET
fetch('api/books')
    .then(res => res.json())
    .then(books => console.log(books));

//POST
fetch('/api/books', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'My Book', author: 'Me' })
})
    .then(res => res.json())
    .then(newBook => console.log(newBook));
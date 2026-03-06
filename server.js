const express = require('express')
const app = express();

app.use(express.json());
app.use(express.static('public'));

const booksRouter = require('./api/routes/books')
app.use('/api/books', booksRouter)

app.listen(3000, () => {
    console.log('server runnin ova heeya http://localhost:3000');
})
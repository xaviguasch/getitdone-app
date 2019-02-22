const express = require('express')
const bodyParser = require('body-parser')

const app = express()

let items = ['buy food', 'cook food', 'eat the food']


app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', function (req, res) {
    const today = new Date()

    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    const day = today.toLocaleDateString('en-US', options)

    res.render('list', {
        kindOfDay: day,
        newListItems: items
    })
})

app.post('/', function (req, res) {
    const item = req.body.newItem
    items.push(item)

    res.redirect('/')


})


app.listen(process.env.PORT || 3000, function () {
    console.log('Server is running on port 3000');
})
const app = require ('./app.js')
const port = 3000

app.listen(3000, () => {
    console.log(`Server running at http://localhost:${port}/`)
})
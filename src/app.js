const express = require('express')
const Routes = require('./router')
const bodyParser = require('body-parser')


class App {
    constructor() {
        this.app = express()
        this.configureMiddleware()
    }
    
    configureMiddleware() {
        const routes = new Routes()
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(express.static('src/view'))
        this.app.use(bodyParser.json())
        this.app.use(routes.router)
    }
    

}

module.exports = new App().app
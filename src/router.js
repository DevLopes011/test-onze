const CaseController = require('./Controller/caseController')
const express = require('express')
const router = express.Router()
const path = require('path')


class Routes {
    constructor() {
        this.router = router
        this.formData()
    }

    formData() {
        this.router.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, 'View', 'HTML', 'index.html'))
        })
        
        this.router.post('/cadForm', CaseController.create)
    }
}

module.exports = Routes
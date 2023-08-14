const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Routes()
//export all objects
const {users} = require('../model')

//========= user routes ==========
routes.get('/users', (req, res) => {
    users.fetchUsers(req, res)
})
routes.get('/user/:id', (req, res) => {
    users.fetchUsers(req, res)
})
routes.post('/register', bodyParser.json(), (req, res) => {
    users.register(req, res)
})
routes.put('/user/:id', bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
})

module.exports = {
    express,
    routes
} 
const users = require("../models/users");
const express = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class homeController {
    home(req, res, next) {
        res.render('home');
    }

    login(req, res, next) {
        res.render('users/login');
    }

    trylogin(req, res, next) {
        res.json(req.body);
    }

    register(req, res, next) {
        res.render('users/register');
    }

    tryregister(req, res, next) {
        req.body.password = bcrypt.hashSync(req.body.password, saltRounds);  
        const users_data = new users(req.body);
        users_data.save()
            .then(() => res.redirect('home'))
            .catch(next);
    }

}
module.exports = new homeController
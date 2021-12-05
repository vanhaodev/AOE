const users = require('../../models/users');
const bcrypt = require("bcrypt");
const saltRounds = 10;
module.exports = function loginMiddleware(req, res, next) {

    users.findOne({ username: req.body.username }, function (err, user) {
        let loginLogs = {
            loginFailed: ''
        }
        if (err) {
            loginLogs.loginFailed = 'Đăng nhập thất bại!';
            res.render('users/login', { loginLogs });
        }
        if(user && bcrypt.compareSync(req.body.password, user.password))
        {
            res.send('đúng');
        }
        else
        {
            res.send('Sai');
        }
    });

}


const users = require('../../models/users');

module.exports = function registerMiddleware(req, res, next) {
    users.findOne({ username: req.body.username }, function (err, user) {
        var maxlength = 25;
        var minlength = 6;
        var usernameFormat = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var passwordFormat = / /;
        let errors = [];
        if (err) {
            errors.push('Có lỗi xảy ra, hãy kết nối lại trang!');
        }
        if (req.body.username.length < minlength || req.body.username.length > maxlength) {
            //tên tài khoản quá dài hoặc quá ngắn
            errors.push('Username quá dài hoặc quá ngắn');
        }
        if (req.body.password.length < minlength || req.body.password.length > maxlength) {
            //mk quá dài hoặc quá ngắn
            errors.push('Password quá dài hoặc quá ngắn');
        }
        if (usernameFormat.test(req.body.username)) {
            errors.push('Username không được chứa ký tự đặc biệt!');
        }
        if (passwordFormat.test(req.body.password)) {
            errors.push('Password có thể chứa ký tự đặc biệt nhưng không được chứa khoảng trắng!');
        }
        if (user && user.username === req.body.username) {
            errors.push('Username đã tồn tại, hãy chọn username khác!');
        }
        if (req.body.email.indexOf('@') > -1) {}
        else {
            errors.push('Email không hợp lệ!');
        }
        //Kiểm tra điều kiện lỗi
        if (errors.length > 0) {
            let exportErrors = errors.slice(); //Khởi tạo lưu trữ lỗi
            errors.splice(0,errors.length); //Clear lỗi để lần sau tránh gặp phải
            
            res.render('users/register', {exportErrors})
        }
        else {
            next();
        }
    });
}


(function () {
    var SimpleFormsApp = angular.module("SimpleFormsApp", []);
    SimpleFormsApp.controller("LoginController", LoginController);

    function LoginController() {
        var login = this;
        // login.submit = function() {
        //     login.completed = true;
        // }
    }
    SimpleFormsApp.controller("redisterController", registerController);

    function registerController() {
        var register = this;
        // login.submit = function() {
        //     login.completed = true;
        // }
    }
})();
"use strict";
exports.__esModule = true;
var express_1 = require("express");
var Server = /** @class */ (function () {
    function Server(port) {
        this.port = port;
    }
    Server.prototype.start = function () {
        var _this = this;
        var app = express_1["default"]();
        app.get('/', function (req, res) {
            res.send('test');
        });
        app.listen(this.port, function () {
            console.log("Server run on port: " + _this.port);
        });
    };
    return Server;
}());
exports["default"] = Server;

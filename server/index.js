"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var PORT = 8080;
app.listen(PORT, function () {
    console.log("listening on port ".concat(PORT));
});

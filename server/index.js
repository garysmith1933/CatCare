"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var db_1 = __importDefault(require("./config/db"));
require("dotenv").config();
var app = (0, express_1["default"])();
var PORT = 8080;
(0, db_1["default"])();
app.listen(PORT, function () {
    console.log("listening on port ".concat(PORT));
});

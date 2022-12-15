"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var app = (0, express_1["default"])();
var PORT = 8080;
mongoose_1["default"].connect("mongodb://localhost/appdb");
app.listen(PORT, function () {
    console.log("listening on port ".concat(PORT));
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesController = exports.connectDB = void 0;
require("dotenv/config");
const config_1 = require("./database/config");
Object.defineProperty(exports, "connectDB", { enumerable: true, get: function () { return config_1.connectDB; } });
const controllers_1 = require("./controllers");
Object.defineProperty(exports, "EmployeesController", { enumerable: true, get: function () { return controllers_1.EmployeesController; } });
exports.default = { connectDB: config_1.connectDB, EmployeesController: controllers_1.EmployeesController };

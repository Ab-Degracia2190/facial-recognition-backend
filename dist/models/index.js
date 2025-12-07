"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaceProfile = exports.Employees = void 0;
const employees_1 = __importDefault(require("./employees"));
exports.Employees = employees_1.default;
const face_profile_1 = __importDefault(require("./face-profile"));
exports.FaceProfile = face_profile_1.default;
exports.default = { Employees: employees_1.default, FaceProfile: face_profile_1.default };

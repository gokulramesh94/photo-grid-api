"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const ErrorHandler_1 = require("./middleware/ErrorHandler");
const index_1 = require("./routes/index");
dotenv_1.default.config();
const MONGO_URI = ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.MONGO_URI) || '';
const PORT = ((_b = process === null || process === void 0 ? void 0 : process.env) === null || _b === void 0 ? void 0 : _b.PORT) || 80;
const app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ limit: '30mb', extended: true }));
app.use(express_1.default.json({ limit: '30mb' }));
app.use('/api', index_1.router);
app.use(ErrorHandler_1.errorLogger);
app.use(ErrorHandler_1.invalidPathHandler);
mongoose_1.default
    .connect(MONGO_URI)
    .then((response) => {
    console.log('mongoose connection response : ', response);
    console.log('listening on port : ', PORT);
    app.listen(PORT);
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map
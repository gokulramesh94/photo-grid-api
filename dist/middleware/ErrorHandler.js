"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidPathHandler = exports.errorLogger = void 0;
const errorLogger = (err, req, res, next) => {
    console.error('\x1b[31m', err);
    next(err);
};
exports.errorLogger = errorLogger;
const invalidPathHandler = (req, res, next) => {
    res.redirect('/error');
};
exports.invalidPathHandler = invalidPathHandler;
//# sourceMappingURL=ErrorHandler.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const photo_controller_1 = require("../controllers/photo.controller");
const router = express_1.default.Router();
exports.router = router;
const PhotoControllerInstance = new photo_controller_1.PhotoController();
router.get('/photos', PhotoControllerInstance.fetchPhotos);
router.post('/insert-photos', PhotoControllerInstance.insertPhotos);
router.get('/error', (req, res) => {
    res.send('The URL you are trying to reach does not exist!');
});
//# sourceMappingURL=index.js.map
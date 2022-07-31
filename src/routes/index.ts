import express from 'express';
import { PhotoController } from '../controllers/photo.controller';

const router = express.Router();

const PhotoControllerInstance = new PhotoController();

router.get('/photos', PhotoControllerInstance.fetchPhotos);

export { router };

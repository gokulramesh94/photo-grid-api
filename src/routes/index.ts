import express from 'express';
import { PhotoController } from '../controllers/photo.controller';

const router = express.Router();

const PhotoControllerInstance = new PhotoController();

router.get('/photos', PhotoControllerInstance.fetchPhotos);
router.post('/insert-photos', PhotoControllerInstance.insertPhotos);
router.get('/error', (req, res) => {
  res.send('The URL you are trying to reach does not exist!');
});

export { router };

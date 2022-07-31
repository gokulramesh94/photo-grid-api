import { Photo } from '../models/Photo';
import dotenv from 'dotenv';

dotenv.config();

export class PhotoService {
  /**
   * @function fetchPhotos
   * @description This method fetches photos from the DB
   * @param {Number} page_number Page Number
   * @returns {Array} Returns an array of Photos
   */
  public fetchPhotos = async (page_number: any) => {
    try {
      //Find photos based on page number
      const photos = await Photo.find()
        .skip((page_number - 1) * 10)
        .limit(10);
      return photos;
    } catch (error: any) {
      console.log(error);
      return [];
    }
  };
}

import { Request, Response } from 'express';
import { PhotoService } from '../services/photo.service';

export class PhotoController {
  private service: PhotoService;

  constructor() {
    this.service = new PhotoService();
  }

  /**
   * @function fetchPhotos
   * @description This method fetches photos from the DB
   * @param {object} req Request Object
   * @param {object} res Response Object
   * @returns {Array} Returns an array of Photos
   */
  fetchPhotos = async (req: Request, res: Response) => {
    try {
      const page = req?.query?.page || 1;
      const response = await this.service.fetchPhotos(page);
      return res.send(response);
    } catch (error) {
      console.log(error);
      return res.send(error);
    }
  };

  /**
   * @function insertPhotos
   * @description This method inserts photos in to the DB
   * @param {object} req Request Object
   * @param {object} res Response Object
   * @returns {String} Returns a confirmation message
   */
  insertPhotos = async (req: Request, res: Response) => {
    try {
      const { count } = req?.body;
      const response = await this.service.insertPhotos(count);
      return res.send(response);
    } catch (error) {
      console.log(error);
      return res.send(error);
    }
  };
}

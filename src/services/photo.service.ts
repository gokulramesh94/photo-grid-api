import { Photo } from '../models/Photo';
import { IPhoto } from '../types/Models';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export class PhotoService {
  private UNSPLASH_CLIENT_ID: string;

  constructor() {
    this.UNSPLASH_CLIENT_ID = process?.env?.UNSPLASH_CLIENT_ID || '';
  }
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

  /**
   * @function insertPhotos
   * @description This method inserts photos in to the DB
   * @param {Number} count Number of photos
   * @returns {String} Returns a confirmation message
   */
  public insertPhotos = async (count: any) => {
    try {
      count = count ? count : 10;
      const photos = await this.createPhotos(count);
      const response = await Photo.create(photos);
      return response;
    } catch (error: any) {
      console.log(error);
      return [];
    }
  };

  public createPhotos = async (count: any) => {
    let photos: Array<IPhoto> = [];
    return axios
      .get(
        `https://api.unsplash.com/photos?client_id=${this.UNSPLASH_CLIENT_ID}&per_page=${count}`
      )
      .then((response: any) => {
        response.data.forEach((item: any) => {
          let photo: IPhoto = {
            id: item.id,
            width: item.width,
            height: item.height,
            description: item.description,
            urls: {
              raw: item.urls.raw,
              full: item.urls.full,
              regular: item.urls.regular,
              small: item.urls.small,
              thumb: item.urls.thumb,
              small_s3: item.urls.small_s3,
            },
            links: {
              self: item.links.self,
              html: item.links.html,
              download: item.links.download,
              download_location: item.links.download_location,
            },
            likes: item.likes,
            user: {
              id: item.user.id,
              updated_at: item.user.updated_at,
              username: item.user.username,
              name: item.user.name,
              first_name: item.user.first_name,
              last_name: item.user.last_name,
              twitter_username: item.user.twitter_username,
              portfolio_url: item.user.portfolio_url,
              bio: item.user.bio,
              profile_image: {
                small: item.user.profile_image.small,
                medium: item.user.profile_image.medium,
                large: item.user.profile_image.large,
              },
              instagram_username: item.user.instagram_username,
              social: {
                instagram_username: item.user.social.instagram_username,
                portfolio_url: item.user.social.portfolio_url,
              },
            },
            views: item.views,
            downloads: item.downloads,
          };
          photos.push(photo);
        });
        return photos;
      })
      .catch((error) => {
        console.error(error);
        return photos;
      });
  };
}

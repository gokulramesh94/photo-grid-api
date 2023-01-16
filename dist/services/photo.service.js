"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoService = void 0;
const Photo_1 = require("../models/Photo");
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class PhotoService {
    constructor() {
        var _a;
        this.fetchPhotos = (page_number) => __awaiter(this, void 0, void 0, function* () {
            try {
                const photos = yield Photo_1.Photo.find()
                    .skip((page_number - 1) * 10)
                    .limit(10);
                return photos;
            }
            catch (error) {
                console.log(error);
                return [];
            }
        });
        this.insertPhotos = (count) => __awaiter(this, void 0, void 0, function* () {
            try {
                count = count ? count : 10;
                const photos = yield this.createPhotos(count);
                const response = yield Photo_1.Photo.create(photos);
                return response;
            }
            catch (error) {
                console.log(error);
                return [];
            }
        });
        this.createPhotos = (count) => __awaiter(this, void 0, void 0, function* () {
            let photos = [];
            return axios_1.default
                .get(`https://api.unsplash.com/photos?client_id=${this.UNSPLASH_CLIENT_ID}&per_page=${count}`)
                .then((response) => {
                response.data.forEach((item) => {
                    let photo = {
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
        });
        this.UNSPLASH_CLIENT_ID = ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.UNSPLASH_CLIENT_ID) || '';
    }
}
exports.PhotoService = PhotoService;
//# sourceMappingURL=photo.service.js.map
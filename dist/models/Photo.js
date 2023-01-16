"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Photo = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const PhotoSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
    },
    width: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    urls: {
        raw: {
            type: String,
        },
        full: {
            type: String,
        },
        regular: {
            type: String,
        },
        small: {
            type: String,
        },
        thumb: {
            type: String,
        },
        small_s3: {
            type: String,
        },
    },
    links: {
        self: {
            type: String,
        },
        html: {
            type: String,
        },
        download: {
            type: String,
        },
        download_location: {
            type: String,
        },
    },
    likes: {
        type: Number,
        required: true,
    },
    user: {
        id: {
            type: String,
            required: true,
        },
        updated_at: {
            type: String,
        },
        username: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        first_name: {
            type: String,
        },
        last_name: {
            type: String,
        },
        twitter_username: {
            type: String,
        },
        portfolio_url: {
            type: String,
        },
        bio: {
            type: String,
        },
        profile_image: {
            small: {
                type: String,
            },
            medium: {
                type: String,
            },
            large: {
                type: String,
            },
        },
        instagram_username: {
            type: String,
        },
        social: {
            instagram_username: {
                type: String,
            },
            portfolio_url: {
                type: String,
            },
        },
    },
    views: {
        type: Number,
    },
    downloads: {
        type: Number,
    },
});
const Photo = mongoose_1.default.model('Photo', PhotoSchema);
exports.Photo = Photo;
//# sourceMappingURL=Photo.js.map
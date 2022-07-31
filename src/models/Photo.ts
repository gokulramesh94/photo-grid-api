import mongoose, { Schema } from 'mongoose';
import { IPhoto } from '../types/Models';

const PhotoSchema = new Schema<IPhoto>({
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

const Photo = mongoose.model('Photo', PhotoSchema);

export { Photo };

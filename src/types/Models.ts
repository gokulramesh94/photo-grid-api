export interface IPhoto {
  id: string;
  width: number;
  height: number;
  description?: string;
  urls?: Urls;
  links?: Links;
  likes: number;
  user: User;
  views?: number;
  downloads?: number;
}

interface User {
  id: string;
  updated_at?: string;
  username: string;
  name: string;
  first_name?: string;
  last_name?: string;
  twitter_username?: string;
  portfolio_url?: string;
  bio?: string;
  profile_image?: {
    small?: string;
    medium?: string;
    large?: string;
  };
  instagram_username?: string;
  social?: {
    instagram_username?: string;
    portfolio_url?: string;
  };
}

interface Links {
  self?: string;
  html?: string;
  download?: string;
  download_location?: string;
}

interface Urls {
  raw?: string;
  full?: string;
  regular?: string;
  small?: string;
  thumb?: string;
  small_s3?: string;
}

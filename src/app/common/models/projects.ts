export interface Project {
  id: number;
  title: string;
  category: string;
  slug: string;
  description: string;
  images: string[];
  model: string;
  photographer: string;
}

export interface HomeProject {
  id: number;
  title: string;
  category: string;
  slug: string;
  description: string;
  images: HomeImage[];
  model: string;
  photographer: string;
}

export interface HomeImage {
  image: string;
  link: string;
}

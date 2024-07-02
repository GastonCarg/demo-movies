export interface IProgram {
  name: string;
}

export interface ITitle {
  name: string;
  href: string;
}

export interface IProgram {
  title: string;
  programType: string;
  releaseYear: number;
  description: string;
  images: IImages
}

export interface IImages {
  posterArt: PosterArt;
}

export interface PosterArt {
  height: number;
  width: number;
  url: string;
}

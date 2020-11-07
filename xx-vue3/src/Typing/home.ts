export interface ISlider {
    url: string
}

export interface IList {
    title: string,
    video: string,
    poster: string,
    price: number,
    category?: string
}

export interface ILessons {
    hasMore: boolean,
    loading: boolean,
    offset: number,
    limit: number,
    list: IList[]
}

export interface IHomestate {
    currentCategory: CATEGORY;
    slider: ISlider[];
    lessons: ILessons
}

export enum CATEGORY {
    ALL,
    REACT,
    VUE,
    NODE
}
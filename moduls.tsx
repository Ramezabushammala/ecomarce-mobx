
export interface Category{
    _id:string,
    name: string,
    slug: string,
    image: string,
    createdAt: string,
    updatedAt: string,
}

export interface NewResponse{
    data:Category[],
}
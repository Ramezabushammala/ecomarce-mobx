import axiosInstance from "@/axiosinstance";
import { action, makeObservable, observable,computed } from "mobx";
import { IRootStore } from "./RootStore";

interface Category{
    _id:string,
    name: string,
    slug: string,
    image: string,
    createdAt: string,
    updatedAt: string,
}

export class CategoryStore  {
   
 allcategory:Category={} as Category;
 rootStore: IRootStore;
   constructor(rootStore: IRootStore){

     makeObservable(this,{
        allcategory:observable,
        fetchAllCategory:action,
        allcategoryresponse :computed,
     }) 

     this.rootStore = rootStore;
   }
  
   async fetchAllCategory(){
    const response= await axiosInstance.get(`/api/v1/categories`);
    this.allcategory= response?.data;
   }
   get allcategoryresponse (){
    return this.allcategory;
   }
}
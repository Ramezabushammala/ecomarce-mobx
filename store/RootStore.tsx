
import { CategoryStore } from "./CategoreStore";



export interface IRootStore{
    categoryStore:CategoryStore; 
}

class RootStore implements IRootStore{
    categoryStore:CategoryStore;
    
    constructor(){
    this.categoryStore =new CategoryStore(this);
    }
}

export default RootStore;
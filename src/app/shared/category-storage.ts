export class CategoryStorage {

    //This class is used as a temporary storage to store categoryName
    category:string;

    setcategory(category){
        this.category=category;
    }


    getCategory(){
        return this.category;
    }
}

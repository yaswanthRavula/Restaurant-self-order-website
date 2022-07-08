export class Item {
 
    name:String;
    price: number;
    quantity:number=1;
    availability:boolean=true;
    constructor(){
        this.quantity=1;
        this.availability=true;
    }
}

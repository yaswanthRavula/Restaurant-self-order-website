import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../shared/http-service.service';
import { Item } from '../shared/item';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor( private httpService:HttpServiceService) { }

  ngOnInit(): void {
  }

  categoryList=["Veg Starters","Non-Veg Starters","Veg Rice Items","Non-veg Rice Items" ,"Cool Drink"];
  selectedItems=[];
  chipList:any;
  chipListSelectable=true;

  ItemsList:Item[]=null;//Array to store all available items of a category
  Veg_Starters_Url="http://localhost:1234/items/Veg-Starters";
  Non_Veg_Starters_Url="http://localhost:1234/items/Non-Veg-Starters";
  Veg_Rice_Items_Url="http://localhost:1234/items/Veg-Rice-Items";
  Non_Veg_Rice_Items_Url="http://localhost:1234/items/Non-Veg-Rice-Items";
  Cool_Drinks_Url="http://localhost:1234/items/CoolDrinks";
  url:string;
  
  
 showItems( categoryItemName: string){
   this.makeDeselectedAll();//a method to un select all so that all items style changes to unselected
   this.makeSelected(categoryItemName); //a method to select item so that seleted item style changes to selected
   this.displayList(categoryItemName);
  
  }


 //To make all items disbled style
 makeDeselectedAll(){
  //iterating trough each and every element
   for(let i=0;i<this.categoryList.length;i++){
     document.getElementById(this.categoryList[i]).style['background-color']="black";
     document.getElementById(this.categoryList[i]).style['color']="white";
   }
 }
 //To apply style to the selected chip
 makeSelected(categoryItemName){
   document.getElementById(categoryItemName).style['background-color']="deepskyblue";
   document.getElementById(categoryItemName).style['color']="white !important";
   document.getElementById(categoryItemName).style['border-bottom']="3px solid white"
 }




displayList(categoryItemName){
  console.log("In Itemslist "+categoryItemName);
  switch(categoryItemName){
    case "Veg Starters": this.url=this.Veg_Starters_Url;
                         break;
    case "Non-Veg Starters": this.url=this.Non_Veg_Starters_Url;
                         break; 
    case "Veg Rice Items": this.url=this.Veg_Rice_Items_Url;
                         break;                 
    case "Non-Veg Rice Items": this.url=this.Non_Veg_Rice_Items_Url;
                         break;
    case "Cool Drinks": this.url=this.Cool_Drinks_Url;
                         break;                                                                          
  }
  this.httpService.get(this.url).subscribe(data=>{
    this.ItemsList=data
  })
  
}


//Function to handle on clicking ORDER button
 onOrder(item){
    alert("Are You sure You want to Order "+ item.name+" : "+item.quantity +" Items ")
 }

//Function to decrease the quantity
decrementQuantity(item){
  if(item.quantity>1)
    item.quantity-=1;

}

//Function to inrease the quantity
incrementQuantity(item){
 
  item.quantity+=1;

}
}

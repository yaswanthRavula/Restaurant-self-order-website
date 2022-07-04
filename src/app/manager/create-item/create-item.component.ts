import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/http-service.service';
import { Item } from 'src/app/shared/item';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {


  Veg_Starters_Url="http://localhost:1234/items/Veg-Starters";
  Non_Veg_Starters_Url="http://localhost:1234/items/Non-Veg-Starters";
  Veg_Rice_Items_Url="http://localhost:1234/items/Veg-Rice-Items";
  Non_Veg_Rice_Items_Url="http://localhost:1234/items/Non-Veg-Rice-Items";
  Cool_Drinks_Url="http://localhost:1234/items/CoolDrinks"
  url:string;
  
  item:Item;
  categoryName:string;
  itemName:any='';
  itemPrice:any='';
  categoryList=["Veg Starters","Non-Veg Starters","Veg Rice Items","Non-Veg Rice Items" ,"Cool Drinks"];
  
  constructor(private httpService:HttpServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  addItem(){
    if(this.itemName.length<=4 || this.itemPrice==''){
      alert("Please Enter all the details");
    }
     else{
          this.item={name:this.itemName,price:this.itemPrice,quantity:1,availability:true}
          this.setUrl();
          console.log(this.url);
          this.httpService.post(this.url,this.item).subscribe(data=>{
            console.log(data)
                console.log("navigated");
          })
          this.router.navigate(['/manager']);
     } 
    }

    setUrl(){
      switch(this.categoryName){
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
    }


    showItems( categoryItemName: string){
      this.makeDeselectedAll();//a method to un select all so that all items style changes to unselected
      this.makeSelected(categoryItemName); //a method to select item so that seleted item style changes to selected
      this.categoryName=categoryItemName;
     
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
   
  }

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/shared/http-service.service';
import { Item } from 'src/app/shared/item';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public ItemsList:Item[]=null;//Array to store all available items of a category
  Veg_Starters_Url="http://localhost:1234/items/Veg-Starters";
  Non_Veg_Starters_Url="http://localhost:1234/items/Non-Veg-Starters";
  Veg_Rice_Items_Url="http://localhost:1234/items/Veg-Rice-Items";
  Non_Veg_Rice_Items_Url="http://localhost:1234/items/Non-Veg-Rice-Items";
  Cool_Drinks_Url="http://localhost:1234/items/CoolDrinks"
  url:string;

  constructor(private route:Router, private changDetector: ChangeDetectorRef, private httpService:HttpServiceService) { }

  ngOnInit(): void {
  }

  categoryList=["Veg Starters","Non-Veg Starters","Veg Rice Items","Non-Veg Rice Items" ,"Cool Drinks"];
  selectedItems=[];
  chipList:any;
  chipListSelectable=true;
  
  
 showItems( categoryItemName: string){
  console.log(0)
   this.makeDeselectedAll();//a method to un select all so that all items style changes to unselecteds
   this.makeSelected(categoryItemName); //a method to select item so that seleted item style changes to selected
   this.displayList(categoryItemName);
  
  }



  addNewItem(){
    this.route.navigate(['/manager/create-item']);
}

   displayList(categoryItemName)/*Promise<Item[]>*/{
    console.log("\nfrom Items List Componenet "+categoryItemName+"\n");
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
    this.httpService.get(this.url).subscribe((data)=>{
      this.ItemsList=data;
    })
    /*
    this.ItemsList= await this.httpService.get(this.url).toPromise();
   console.log(this.ItemsList);
    return this.ItemsList;*/
   
   
  }


  updateAvailabilityStatus(item){
    item.availability=!item.availability;
    console.log(item.name+" is "+item.availability);
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
  console.log("2");
   document.getElementById(categoryItemName).style['background-color']="deepskyblue";
   document.getElementById(categoryItemName).style['color']="white !important";
   document.getElementById(categoryItemName).style['border-bottom']="3px solid white"
 }


}

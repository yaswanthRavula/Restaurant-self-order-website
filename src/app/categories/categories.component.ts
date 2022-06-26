import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categoryList=["Veg Starters","Non-Veg Starters","Veg Rice Items","Non-veg Rice Items" ,"Cool Drink"];
  selectedItems=[];
  chipList:any;
  chipListSelectable=true;
  
 showItems( categoryItemName: string){
   
   console.log(categoryItemName)
   this.makeDeselectedAll();//a method to un select all so that all items style changes to unselected
   this.makeSelected(categoryItemName); //a method to select item so that seleted item style changes to selected
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
   document.getElementById(categoryItemName).style['color']="black";
   document.getElementById(categoryItemName).style['border-bottom']="3px solid black"
 }

}

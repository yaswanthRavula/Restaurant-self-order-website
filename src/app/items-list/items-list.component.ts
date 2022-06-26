import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CategoryStorage } from '../shared/category-storage';
import { Item } from '../shared/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  item1:Item={name:"Chicken Biryani",price:265,quantity:1}
  item2:Item={name:"Veg Biryani",price:235,quantity:1}

  ItemsList:Item[]=[this.item1,this.item1,this.item1,this.item1,this.item1,this.item1]
  categoryItemName:string=null;
  constructor( private categoryStorage : CategoryStorage) { }

  ngOnInit(): void {
      this.categoryItemName=this.categoryStorage.getCategory();
      if(this.categoryItemName=="Veg Starters"){
        this.item1={name:"Panneer 65",price:265,quantity:1};
        this.ItemsList=[this.item1,this.item1,this.item1,this.item1,this.item1,this.item1]
      }
      else if(this.categoryItemName=="Non-Veg Starters"){
        this.item1={name:"Chicken Lollipop",price:265,quantity:1};
        this.ItemsList=[this.item1,this.item1,this.item1,this.item1,this.item1,this.item1]

      }
      else if(this.categoryItemName=="Veg Rice Items"){
        this.item1={name:"Panneer Biryani",price:265,quantity:1};
        this.ItemsList=[this.item1,this.item1,this.item1,this.item1,this.item1,this.item1]

      }
  }


}

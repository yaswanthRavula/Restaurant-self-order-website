import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  item1:Item={name:"Chicken Biryani",price:265,quantity:1}
  vegItemsList:Item[]=[this.item1,this.item1,this.item1,this.item1,this.item1,this.item1]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { StarRatingComponent } from '../shared/star/star.component';
import { Hero } from './hero';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgIf} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.scss'],
   
})
export class ProductListComponent implements OnInit{
  
   pageTitle ="Searching";
   imageWidth  = 60;
   imageMargin  =5;
   showImage :boolean =false;
   private _filterWord ='';
   filterdHeroes :Hero[]=[];
   
   ngOnInit(): void {
    this._filterWord ='';
    this.filterdHeroes = this.products;
    console.log(this._filterWord);
   }

   get filterWord ():string{
    return this._filterWord;
   }
   
   set filterWord (value :string){
    this._filterWord=value;
    this.filterdHeroes = this.filteringList(value);
   }

   products :Hero[] =[
    {
        "heroId": 1,
        "heroName": "Yuxin Tong",
        "heroRace": "Dragonborn",
        "heroDob": "March 19, 2021",
        "description": "Leaf rake with 48-inch wooden handle.",
        "hirePrice": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
      },
      {
        "heroId": 2,
        "heroName": "Shaun",
        "heroRace": "Dwarf",
        "heroDob": "March 18, 2021",
        "description": "15 gallon capacity rolling garden cart",
        "hirePrice": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/images/garden_cart.png"
      },
      {
        "heroId": 5,
        "heroName": "Emil",
        "heroRace": "Elf",
        "heroDob": "May 21, 2021",
        "description": "Curved claw steel hammer",
        "hirePrice": 0.9,
        "starRating": 4.8,
        "imageUrl": "assets/images/hammer.png"
      },
      {
        "heroId": 8,
        "heroName": "Bo",
        "heroRace": "Human",
        "heroDob": "May 15, 2021",
        "description": "15-inch steel blade hand saw",
        "hirePrice": 11.55,
        "starRating": 3.7,
        "imageUrl": "assets/images/saw.png"
      },
      {
        "heroId": 10,
        "heroName": "David",
        "heroRace": "Orc",
        "heroDob": "October 15, 2020",
        "description": "Standard two-button video game controller",
        "hirePrice": 35.95,
        "starRating": 4.6,
        "imageUrl": "assets/images/xbox-controller.png"
      }
   ]
   
    filteringList(keywords: string) : Hero[]{
     return this.products.filter(product=>product.heroName.toUpperCase().includes(keywords.toUpperCase()));      
   }
   toggleImage() :void{
     this.showImage = !this.showImage;
     console.log(this.showImage);
   }

   openDetails() :void{
         
   }

   telOptions = {initialCountry: 'au', preferredCountries: ['au', 'gb']};
   
  //  onPhoneNumberChange(event: any) {
  //   this.phone_number_standard = event;
  //   console.log("phone_number_standard " +this.phone_number_standard);
  // }
}

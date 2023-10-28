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
import { HeroService } from './hero.service';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.scss'],
   
})
export class ProductListComponent implements OnInit{
  parentStarRating: number = 0; 
   pageTitle ="Searching";
   imageWidth  = 60;
   imageMargin  =5;
   showImage :boolean =false;
   filterdHeroes :Hero[]=[];
   private _filterWord ='';

   
   
   constructor(private heroservice:HeroService){
  

   }
   ngOnInit(): void {
    this._filterWord ='';
   this.heroservice.getHero().subscribe({
      next:heroes=>this.filterdHeroes=heroes
    });
    console.log(this._filterWord);

   }

   get filterWord ():string{
    return this._filterWord;
   }

   
   set filterWord (value :string){
    this._filterWord=value;
    this.filterdHeroes = this.filteringList(value);
   }
  
   
    filteringList(keywords: string) : Hero[]{
     return this.filterdHeroes.filter(product=>product.heroName.toUpperCase().includes(keywords.toUpperCase()));      
   }
   toggleImage() :void{
     this.showImage = !this.showImage;
     console.log(this.showImage);
   }
   notifyParent(message:string):void{
     this.pageTitle=message;
   }

   openDetails() :void{
         
   }

}

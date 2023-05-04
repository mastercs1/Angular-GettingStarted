import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { StarRatingComponent } from '../shared/star/star.component';
import { IProduct } from './product';




@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.scss']

})
export class ProductListComponent implements OnInit{
  
   pageTitle ="Searching";
   imageWidth  = 50;
   imageMargin  =2;
   showImage :boolean =false;
   private _filterWord ='';
   filterdProducts :IProduct[]=[];
   phone_number_standard="";

 

   ngOnInit(): void {
    this._filterWord ='';
    this.filterdProducts = this.products;
    console.log(this._filterWord);
   }
  

   get filterWord ():string{
    return this._filterWord;
   }
   
   set filterWord (_filterWord :string){
    this._filterWord=_filterWord;
    this.filterdProducts = this.filteringList(_filterWord);
   }




   
   products :IProduct[] =[
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2021",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
      },
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2021",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/images/garden_cart.png"
      },
      {
        "productId": 5,
        "productName": "hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2021",
        "description": "Curved claw steel hammer",
        "price": 0.9,
        "starRating": 4.8,
        "imageUrl": "assets/images/hammer.png"
      },
      {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2021",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "assets/images/saw.png"
      },
      {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2020",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "assets/images/xbox-controller.png"
      }
   ]
   
    filteringList(keywords: string) : IProduct[]{
     return this.products.filter(product=>product.productName.toUpperCase().includes(keywords.toUpperCase()));      
   }
   toggleImage() :void{
     this.showImage = !this.showImage;
     console.log(this.showImage);
   }

   openDetails() :void{
         
   }

   telOptions = {initialCountry: 'au', preferredCountries: ['au', 'gb']};
   
   onPhoneNumberChange(event: any) {
    this.phone_number_standard = event;
    console.log("phone_number_standard " +this.phone_number_standard);
  }
}

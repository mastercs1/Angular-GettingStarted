import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";




@Component({
    selector: 'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarRatingComponent implements OnChanges{

    cropWidth=75;
    
    @Input()
    starRating=0;

    @Output() ratingClicked :EventEmitter<string> = new EventEmitter<string>();
    
    ngOnChanges(): void {
        console.log('it called');
        this.cropWidth = this.starRating * 15; 
    }

    
    addStar () : void{
       let totalWidth :number;
       this.starRating =this.starRating+0.3;
       this.starRating = parseFloat(this.starRating.toFixed(1));
       totalWidth = this.starRating * 15 >=75 ? 75:this.starRating * 15;
        this.cropWidth = totalWidth;
        this.ratingClicked.emit(`current rating is ${this.starRating} thanks for voting`);
        console.log("starRating =" + this.starRating);
        console.log("cropWidth =" + this.cropWidth);
      }

}
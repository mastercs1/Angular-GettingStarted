import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";




@Component({
    selector: 'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarRatingComponent implements OnInit{

    @Input()
    cropWidth =0;
    
    @Input()
    starRating=0;

    private oneStarWidth =75/15;

    ngOnInit(): void {
     
        this.cropWidth = this.starRating * this.oneStarWidth;
        console.log("width=" +this.cropWidth);
    }

    
    addStar () : void{
       let totalWidth :number;
       this.starRating +=this.starRating;
        totalWidth = this.starRating * this.oneStarWidth >=75 ? 75:this.starRating * this.oneStarWidth;
        this.cropWidth = totalWidth;
        console.log("starRating =" + this.starRating);
        console.log("cropWidth =" + this.cropWidth);
      }

}
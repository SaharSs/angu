import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StarService } from '../star.service';

@Component({
  selector: 'app-star-review',
  templateUrl: './star-review.component.html',
  styleUrls: ['./star-review.component.css']
})
export class StarReviewComponent implements OnInit {
@Input() usId;
@Input() prId;
ratings:any
stars:Observable<any>
avgRating:Observable<any>
  constructor(private st:StarService) { }

  ngOnInit(): void {
  this.stars=this.st.getprStar(this.prId);
  this.stars.subscribe(arr=>{
    this.ratings=arr.map(v=>v.value)
    return this.ratings.length?this.ratings.reduce((total,val)=>total+val)/arr.length:'not';
  })
  }
  starhandler(value){
    this.st.setStar(this.usId,this.prId,value)
  }


}

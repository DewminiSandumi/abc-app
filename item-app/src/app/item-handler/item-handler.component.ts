import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-item-handler',
  templateUrl: './item-handler.component.html',
  styleUrls: ['./item-handler.component.css']
})

export class ItemHandlerComponent implements OnInit {
  public url='http://localhost:81/abc/abc.php';
  public items:Item[];

  constructor(private http: Http) { }

  ngOnInit() {

    this.loadComments();

  }
  public loadComments(){
    this.getComments().subscribe(a=>{
    console.log(a);
  this.items=a;
    }
);
  }
  getComments() : Observable<Item[]> {

    // ...using get request
    return this.http.get(this.url)
                   // ...and calling .json() on the response to return data
                    .map((res:Response) => res.json())
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}

}

interface Item{
  id:number;
  name: string;
  price:number;
  availability: any;
}

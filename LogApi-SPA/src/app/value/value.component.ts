import { Component, OnInit } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Value} from '../models/value';
import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {PostService} from './../post.service';

export interface value {
  mes: string;
}

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  // postUrl: string ="http://localhost:53962/api/values";
   //values:Value[]=[];
   values:Value[];

  httpOpsions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  }
  headers: HttpHeaders;
  logmessage:string='';
  
  constructor(private postService: PostService) { }


  ngOnInit() {
   this.postService.GetAll()
   .subscribe((resp: Value[])=> this.values=resp);
   // .subscribe({resp:Value[]} => this.values.resp);
    //alert ("basladi");
   // this.getValues().subscribe(data=>{
     // this.values=data;
   // })

  }

  Create(val: HTMLInputElement){
    const newPost: Value ={
      message: val.value
    };
    this.postService.Create(newPost)
    .subscribe((resp:Value)=>{
      console.log(resp);
      this.values.push(resp);
    })
  }
 /*
  postValues(val:HTMLInputElement){
    const newPost: Post = {
      body=val.value;
    };
    this.postS
  }
*/
  getLog(){
   // console.log(this.logmessage);
   // alert(this.logmessage);
  }
    
    
 /* onSubmit(){
    return this.http.post("http://localhost:53962/api/values",).subscribe(data=> {
      this.values=data;
    });
  }*/

  onNameKeyUp(event:any){
  
    this.logmessage=event.target.value;
  }
  
  postValues(val: Value ){

    var body = {

      de: this.logmessage,

  }
    
    //const url="http://localhost:53962/api/values";
   // return this.http.post(this.postUrl,val, this.httpOpsions)
    
  }
    getValues(){
    //return this.http.get<Value[]>("http://localhost:53962/api/values")
  }


}

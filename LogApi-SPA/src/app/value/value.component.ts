import { Component, OnInit } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Value} from '../models/value';
import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {PostService} from './../post.service';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})

export class ValueComponent implements OnInit {
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
 
  onNameKeyUp(event:any){
  
    this.logmessage=event.target.value;
  }
  
  postValues(val: Value ){
    var body = {
      de: this.logmessage,
    }  
  }
 
}

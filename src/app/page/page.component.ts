import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Me} from '../me'
import {Search} from '../search'
import {HttpService} from '../http.service'

@Component({
 selector: 'Page',
 templateUrl: './page.component.html',
 providers:[HttpService],
 styleUrls: ['./page.component.css'],

})
export class PageComponent implements OnInit {

 public user:Me;
 constructor(private httpClient:HttpService, private http:HttpClient) { }
 locateUserProfile(){
   this.httpClient.updateProfile(this.username)
   this.httpClient.userRequest()
   this.user=this.httpClient.user
 }


 ngOnInit() {

   this.httpClient.userRequest()
   this.user=this.httpClient.user




}
}

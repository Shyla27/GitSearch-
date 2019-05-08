import { Component, OnInit } from '@angular/core';
import {Me} from '../me'
import {Search} from '../search'
import {HttpService} from '../http.service'
import { HttpClient } from '@angular/common/http';

@Component({
 selector: 'app-git-name',
 templateUrl: './git-name.component.html',
 providers:[HttpService],
 styleUrls: ['./git-name.component.css'],

})
export class GitNameComponent implements OnInit {

 public user:Me;
 constructor(private httpClient:HttpService, private http:HttpClient) { }
 locateUserProfile(){
 }


 ngOnInit() {



}
}
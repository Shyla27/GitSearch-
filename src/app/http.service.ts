import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {Me} from './me'
import {Search} from './search'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  user:Me;
private username:string;

  constructor(private http:HttpService) {
  this.user=new Me("","","",0,0);
  this.username="Shyla27";
}
userRequest(){
  interface ApiResponse{
    login:string;
    avatar_url;
    html_url;
    followers:number;
    following:number;
  }

  let promise = new Promise((resolve,reject) =>{
          return this.http.get<ApiResponse>("https://api.github.com/users/"+this.username+"?access_token=" +environment.apiToken).toPromise().then(response=>{


              this.user.login = response.login
              this.user.avatar_url = response.avatar_url
              this.user.html_url = response.html_url
              this.user.followers = response.followers
              this.user.following = response.following
              resolve()
          },
          )
      })

      return promise
    }
    updateProfile(username:string){
      this.username=username;
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private clientid= '87924';
  private clientsecret='Iv1.622330d2d96a5b78';


  constructor( public httpClient:HttpClient) { 
    console.log("service is ready");
    this.username ='umunadine';
  }
  getProfileInfo(){
    return this.httpClient.get("https://api.github.com/users/"+ this.username + "?client_id="+ this.clientid+"&client_secret="+ this.clientsecret )
    // .map(res => res.json());
    // .map(res => res );
    // .pipe(map((res => res.json());
  }
  getProfileRepos(){
    return this.httpClient.get("https://api.github.com/users/"+ this.username + "/repos?client_id="+ this.clientid+"&client_secret="+ this.clientsecret )
    // .map(res => res.json());
    // .map(res => res );
    // .pipe(map((res => res.json());
  }
  updateProfile(username:string){
 this.username = username;
  }
}
import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../../services/profile.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   profile : any[];
   repos: any[];
   username: string;
  constructor( public ProfileService:  ProfileService) { 
    
  }
  findProfile(){
    this.ProfileService.updateProfile(this.username);
    this.ProfileService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
      // this.profile.push();
    })
    this.ProfileService.getProfileRepos().subscribe(repos=>{
      console.log(repos);
      this.repos = repos;
      // this.repos.push();
    })
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from "../../../src/app/shared/user.model"
import { MatSidenav } from '@angular/material';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public user: User,
    public userService: UserService
    ) { }

  isLoggedIn:boolean;
  isOrganization = localStorage.getItem("Is_Organization");
  isCandidate = localStorage.getItem("Is_Candidate");

  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  ngOnInit() {

  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  checkIfOrganization(){
    if(localStorage.getItem("Is_Organization") != null)
      return true;
    else
      return false;
  }

  checkIfCandidate(){
    if(localStorage.getItem("Is_Candidate") != null)
      return true;
    else
      return false;
  }

  checkifLoggedIn(){
  if(localStorage.getItem('token') != null){
    this.isLoggedIn=true;
    return true;
  }
  else 
  // this.router.navigate(["/login"])
    return false;
  }

  getAppliedJobs(){
    this.router.navigate(['/applied-jobs'])
  }

  // goToProfile(){
  //   if(this.isCandidate)
  //   {
  //     this.router.navigate(['/canview']);
  //   }
  //   else if(this.isOrganization)
  //   {
  //     this.router.navigate(['/orview']);
  //   }
  //   else
  //     alert("Unsuccessful!")
  // }

  SignOut() {
    this.router.navigate(['/register']);

  }
  Logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    localStorage.removeItem('Is_University');
    localStorage.removeItem('Is_Candidate');
    localStorage.removeItem('Is_Organization');

    console.log('You Are Logged Out');
    this.router.navigate(['/login']);
  }
}

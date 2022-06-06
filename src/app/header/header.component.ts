import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user;
  constructor(private router: Router, private accountService: AccountService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('course'))[0];
  }

  logout() {
    this.accountService.logout();
  }

}

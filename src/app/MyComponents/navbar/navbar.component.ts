import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Website } from 'src/Website';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {}

  // onClick() {
  //   if (document.querySelector('.collapse')) {
  //     let hamburgerclose = document.getElementById('navbarSupportedContent');
  //     hamburgerclose?.classList.remove('collapse');
  //   } else {
  //     let hamburgerMenu = document.getElementById('navbarSupportedContent');
  //     hamburgerMenu?.classList.add('collapse');
  //   }
  // }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  myFunc() {
    document
      .querySelector('.mobilemenucontainer')
      ?.classList.add('mobilemenucontainer-active');
  }

  myFunc1() {
    document
      .querySelector('.mobilemenucontainer')
      ?.classList.remove('mobilemenucontainer-active');
  }
}

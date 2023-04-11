import { Component, OnInit } from '@angular/core';
import * as sgMail from '@sendgrid/mail';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  constructor() {
    sgMail.setApiKey('YOUR_API_KEY_HERE');
  }

  ngOnInit(): void {}
}

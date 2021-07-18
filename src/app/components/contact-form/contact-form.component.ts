import { ContactService } from '../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { ContactMethod } from '../../ContactMethods';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  constructor(private service: ContactService) {
    this.isChecked = true;
  }

  contactMethods: ContactMethod[] = [];
  isChecked: boolean;

  ngOnInit(): void {
    this.contactMethods = this.service.getContactMethods();
  }

  submit(form: any) {
    console.log(form);
  }
}

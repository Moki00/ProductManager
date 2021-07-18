import { Injectable } from '@angular/core';
import { ContactMethod } from '../ContactMethods';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  getContactMethods(): ContactMethod[] {
    return [
      { id: 1, name: 'email' },
      { id: 2, name: 'phone' },
      // { id: 3, name: 'mail' },
    ];
  }
}

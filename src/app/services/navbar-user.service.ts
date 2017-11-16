import { Injectable } from '@angular/core';

@Injectable()
export class NavbarUserService {

navbarVisible: boolean;

  constructor() { this.navbarVisible = true; }

  hide() { this.navbarVisible = false; }

  show() { this.navbarVisible = true; }

  toggle() { this.navbarVisible = !this.navbarVisible; }
  
}

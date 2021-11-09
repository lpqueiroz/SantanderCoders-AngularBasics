import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Larissa';

  username: string = '';

  checkUsername() {
    return this.username === '';
  }

  resetUsername() {
    this.username = '';
  }
}

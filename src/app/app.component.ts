import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Larissa';

  username: string = '';
  showPassword = false;
  log: Array<Date> = []; 
  oddNumbers: number[] =[];
  evenNumbers: number[] = [];

  checkUsername() {
    return this.username === '';
  }

  resetUsername() {
    this.username = '';
  }

  onToggleDetails() {
    this.showPassword = !this.showPassword;
    this.log.push(new Date());


    for (let i = 0; i < this.log.length ; i++) {
       this.log[i + 1]
    }
  }

  onIntervalFired(firedNumber: number) {
    console.log('firedNumber ' + firedNumber);

    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }

  
}

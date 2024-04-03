import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  showDiv1: boolean = true;
  showDiv2: boolean = false;
  showDiv3: boolean = false;
  showDiv4: boolean = false;

  toggleDiv(divId: string) {
    if (divId === 'div1') {
      this.showDiv1 = !this.showDiv1;
      // Automatically hide the other div
      this.showDiv2 = false;
      this.showDiv3 = false;
      this.showDiv4 = false;
    } 
    else if (divId === 'div2') {
      this.showDiv2 = !this.showDiv2;
      // Automatically hide the other div
      this.showDiv1 = false;
      this.showDiv3 = false;
      this.showDiv4 = false;

    }

    else if (divId === 'div3') {
      this.showDiv3 = !this.showDiv3;
      // Automatically hide the other div
      this.showDiv1 = false;
      this.showDiv2 = false;
      this.showDiv4 = false;
    }

    else if (divId === 'div4') {
      this.showDiv4 = !this.showDiv4;
      // Automatically hide the other div
      this.showDiv1 = false;
      this.showDiv2 = false;
      this.showDiv3 = false;
    }
  }

}

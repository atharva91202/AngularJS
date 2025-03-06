import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 imagePath = 'assets/Logo.png';
 userName: string = '';
 errorMessage = '';

 openBridgeLabz() {
  window.open('https://www.bridgelabz.com', '_blank');
}
validateUserName() {
  const regex = /^[A-Z][a-zA-Z\s]*$/;
  if (!this.userName.match(regex)) {
    this.errorMessage = 'Name should start with a capital letter and contain only alphabets.';
  } else {
    this.errorMessage = '';
  }
}
}

import { Component, OnInit } from '@angular/core';
import { User } from '/Users/mac/Desktop/metwork/src/app/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor() { }

  userModel = new User('Anurag Acharya', 'anuragsayshelloworld@gmail.com', 'anuragironside', 'Rasengan12345');
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userModel);
  }
}

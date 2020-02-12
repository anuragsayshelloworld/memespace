import { Component, Output } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'metwork';
 @Output() userModel = new User('anurag', 'anura@gmail.com', 'anuragaa', 'rasengan');
}

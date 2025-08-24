import { Component } from '@angular/core';
import { ServicesComponent } from '../../components/services/services';
import { About } from '../../components/about/about';
import { Contact } from '../../components/contact/contact';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServicesComponent,

    About,
    Contact,
  
  ],
  
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}

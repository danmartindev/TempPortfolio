import { Component} from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  openResume(){
    window.open('../assets/Martin_ResumeF.pdf', '_blank');
  }

}

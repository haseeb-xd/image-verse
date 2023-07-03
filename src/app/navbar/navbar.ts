import { Component } from '@angular/core';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
  
})
export class NavbarComponent {
  title = 'image-verse';

   openGithubLink(link: string) {
    window.open(link, '_blank');
}
}


  


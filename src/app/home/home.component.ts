import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor() { }

  onFindNow() {
    // Add your logic here, e.g., navigating to a search results page
    console.log('Find Now button clicked!');
    // this.router.navigate(['/search-results']); // Uncomment this if you have a router
  }
}

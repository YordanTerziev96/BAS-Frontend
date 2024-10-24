import { Component } from '@angular/core';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent {
  agents = [
    {
      id: 1,
      name: 'John Smith',
      image: '1.jpg',
      description: 'Collaboratively administrate empowered markets via plug-and-play networks.',
      email: 'abc@realestate.com',
      phone: '(9009) 899 889'
    },
    {
      id: 2,
      name: 'Jane Doe',
      image: '2.jpg',
      description: 'Dynamically procrastinate B2C users after installed base benefits.',
      email: 'jane@realestate.com',
      phone: '(9009) 899 990'
    },
    // Add more agents as needed
  ];
}

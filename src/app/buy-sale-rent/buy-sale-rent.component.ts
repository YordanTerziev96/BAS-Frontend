import { Component } from '@angular/core';

interface Property {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
  status: string;
  details: {
    bedrooms: number;
    livingRooms: number;
    parking: number;
    kitchens: number;
  };
}

@Component({
  selector: 'app-buy-sale-rent',
  templateUrl: './buy-sale-rent.component.html',
  styleUrls: ['./buy-sale-rent.component.css']
})
export class BuySaleRentComponent {
  
  searchQuery: string = '';
  properties: Property[] = [
    {
      id: 1,
      title: 'Royal Inn',
      price: '$234,900',
      imageUrl: 'images/properties/1.jpg',
      status: 'Sold',
      details: { bedrooms: 5, livingRooms: 2, parking: 2, kitchens: 1 },
    },
    // Add more properties as needed
  ];

}

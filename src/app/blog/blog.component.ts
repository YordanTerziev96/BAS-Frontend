import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogs = [
    {
      id: 1,
      title: 'Creative business to takeover the market',
      image: '4.jpg',
      postedDate: 'Jan 20, 2013',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 2,
      title: 'Market update on new apartments',
      image: '2.jpg',
      postedDate: 'Jan 20, 2013',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 3,
      title: 'Real estate marketing growing',
      image: '1.jpg',
      postedDate: 'Jan 20, 2013',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 4,
      title: 'Innovative strategies for real estate',
      image: '3.jpg',
      postedDate: 'Jan 20, 2013',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      id: 5,
      title: 'Tips for first-time homebuyers',
      image: '4.jpg',
      postedDate: 'Jan 20, 2013',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
  ];

  recentPosts = this.blogs.slice(0, 3); // You can customize this to fetch real data
  popularPosts = this.blogs.slice(0, 3); // Customize accordingly
  commentedPosts = this.blogs.slice(0, 3); // Customize accordingly
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AgentsComponent } from './agents/agents.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BuySaleRentComponent } from './buy-sale-rent/buy-sale-rent.component';
import { ContactComponent } from './contact/contact.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'agents', component: AgentsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-detail', component: BlogDetailComponent },
  { path: 'buy-sell-rent', component: BuySaleRentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

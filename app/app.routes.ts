import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts.component';

const routes = [
  {path: '', component:HomeComponent},
  {path: 'contacts', component:ContactsComponent}
];

export default RouterModule.forRoot(routes);
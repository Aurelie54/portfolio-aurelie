import { Routes } from '@angular/router';
import { Home } from './+home/pages/home/home';
import { Contact } from './+home/pages/contact/contact';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'contact',
        component: Contact
    }
];

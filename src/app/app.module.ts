import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AvailableBooksComponent } from './available-books/available-books.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { LibrarianNavigationComponent } from './librarian-navigation/librarian-navigation.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { LoginComponent } from './login/login.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AvailableBooksComponent,
    AdminDashboardComponent,
    AdminNavigationComponent,
    LibrarianNavigationComponent,
    AdminSidebarComponent,
    ManageAccountComponent,
    LoginComponent,
    ManageBooksComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}

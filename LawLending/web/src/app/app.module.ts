import { NgModule }       from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }   from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent }        from './app.component';
import { HomeComponent }     from './home/home.component';
import { AttorneysComponent }     from './attorneys/attorneys.component';
import { ContactformComponent }     from './attorneys/contactform/contactform.component';
import { ResourcesComponent }     from './resources/resources.component';
import { LendingformComponent } from './lendingform/lendingform.component';
import { MenuComponent } from './menu/menu.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MoneyComponent } from './lendingform/money/money.component';
import { StateComponent } from './lendingform/state/state.component';
import { AttorneyComponent } from './lendingform/attorney/attorney.component';
import { YournameComponent } from './lendingform/yourname/yourname.component';
import { YouremailComponent } from './lendingform/youremail/youremail.component';
import { AccidenttimeComponent } from './lendingform/accidenttime/accidenttime.component';
import { ContactComponent } from './lendingform/contact/contact.component';
import { WizardModule } from "ng2-archwizard/dist";
import { ConfirmationComponent } from './lendingform/confirmation/confirmation.component';
import { PhoneComponent } from './lendingform/phone/phone.component';
import { LoginComponent } from './login/login.component';
import { ModalsComponent } from './modals/modals.component';
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileformComponent } from './profile/profileform/profileform.component';
import { LoanrequestsComponent } from './loanrequests/loanrequests.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    WizardModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'welcome',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
      },
      {
        path: 'attorneys',
        component: AttorneysComponent
      },
      {
        path: 'resources',
        component: ResourcesComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'loan-requests',
        component: LoanrequestsComponent
      },
      {
        path: '**',
        component: NotfoundComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AttorneysComponent,
    ContactformComponent,
    ResourcesComponent,
    LendingformComponent,
    MenuComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    MoneyComponent,
    StateComponent,
    AttorneyComponent,
    YournameComponent,
    YouremailComponent,
    AccidenttimeComponent,
    ContactComponent,
    ConfirmationComponent,
    PhoneComponent,
    LoginComponent,
    ModalsComponent,
    ForgotpasswordComponent,
    ProfileComponent,
    ProfileformComponent,
    LoanrequestsComponent,
    NewsletterComponent
  ],
  providers: [
    Title
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

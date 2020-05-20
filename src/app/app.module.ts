import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './table-component/user-table.component';
import { UserFormComponent } from './form-component/user-form.component';
import { NumberDirective } from './number-only.directive';
import { PhonePipe } from './phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UserFormComponent,
    NumberDirective,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

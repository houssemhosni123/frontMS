import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProgrammeComponent } from './create-programme/create-programme.component';
import { ListProgrammeComponent } from './list-programme/list-programme.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModifProgrammeComponent } from './modif-programme/modif-programme.component';
import { ReclamationAddComponent } from './reclamation-add/reclamation-add.component';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';
import { ModifierReclamationComponent } from './modifier-reclamation/modifier-reclamation.component';

@NgModule({
  declarations: [
    AppComponent,               // Components go here
    CreateProgrammeComponent,
    ListProgrammeComponent,
    ModifProgrammeComponent,
    ReclamationAddComponent,
    ListReclamationComponent,
    ModifierReclamationComponent
  ],
  imports: [
    BrowserModule,              // Modules go here
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

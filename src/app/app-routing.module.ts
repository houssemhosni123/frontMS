import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProgrammeComponent } from './create-programme/create-programme.component';
import { ListProgrammeComponent } from './list-programme/list-programme.component';
import { ModifProgrammeComponent } from './modif-programme/modif-programme.component';
import { ReclamationAddComponent } from './reclamation-add/reclamation-add.component';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';
import { ModifierReclamationComponent } from './modifier-reclamation/modifier-reclamation.component';

const routes: Routes = [
  { path: 'create-programme', component: CreateProgrammeComponent },
  { path: 'list-programme', component: ListProgrammeComponent }, // Route for the list of programmes
  { path: 'modif-programme/:id', component: ModifProgrammeComponent },  // Dynamic route for the modifier page
  { path: 'add-reclamation', component: ReclamationAddComponent },
  { path: 'list-reclamations', component: ListReclamationComponent },
  { path: 'modifier-reclamation/:id', component: ModifierReclamationComponent },  // Add the route for the modifier page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

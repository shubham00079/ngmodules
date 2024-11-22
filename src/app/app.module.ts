import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  bootstrap: [AppComponent], //entry point of application main node
  imports: [BrowserModule, FormsModule, SharedModule], // we need to tell what componets we are using
    // here the imports is used to get all the default functionalities of Angular 
    // to be used into all the components. 
})

// we can use standalone components or module components based on our choice.
// Here stanalone comp are passed as imports

// With app.module.ts files we have all the components declared at a single place.
export class AppModule {}

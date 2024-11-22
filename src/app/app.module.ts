import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent], //entry point of application main node
  imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent], // we need to tell what componets we are using
})

// we can use standalone components or module components based on our choice.
// Here stanalone comp are passed as imports
export class AppModule {}

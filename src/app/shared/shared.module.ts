import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
})

// so here we are telling angular that whereever this sharedModule is used
// So that I'm declaring it and I'm then telling Angular
// that it should be available to any other modules
// that use the shared module.


export class SharedModule {}

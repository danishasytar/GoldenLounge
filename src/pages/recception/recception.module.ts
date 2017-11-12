import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { RecceptionPage } from './recception';

@NgModule({
  declarations: [
    RecceptionPage,
  ],
  imports: [
    IonicPageModule.forChild(RecceptionPage),
  ],
  entryComponents: [
    RecceptionPage,
  ]
})
export class RecceptionModule {}

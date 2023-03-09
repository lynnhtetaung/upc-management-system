import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';

import { PCManageRoutingModule, routedComponents } from './pc-manage-routing.module';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    Ng2SmartTableModule,
    PCManageRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class PCManageModule { }

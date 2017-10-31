import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', redirectTo: '/inbox', pathMatch: 'full'},
  { path: 'inbox',
    children: [
      { path: 'view', redirectTo: '/inbox', pathMatch: 'full' },
      { path: 'view/:messageId' },
      { path: 'compose' }
    ]
  },
  { path: 'outbox',
    children: [
      { path: 'view', redirectTo: '/outbox', pathMatch: 'full' },
      { path: 'view/:messageId' },
      { path: 'compose' }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule {}

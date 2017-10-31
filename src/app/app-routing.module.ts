import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import {MailboxComponent} from './mailbox/mailbox.component';

const routes = [
  { path: '', redirectTo: '/inbox', pathMatch: 'full'},
  { path: 'inbox', component: MailboxComponent,
    children: [
      { path: 'view', redirectTo: '/inbox', pathMatch: 'full' },
      /*{ path: 'view/:messageId' },
      { path: 'compose' }*/
    ]
  },
  { path: 'outbox', component: MailboxComponent,
    children: [
      { path: 'view', redirectTo: '/outbox', pathMatch: 'full' },
      /*{ path: 'view/:messageId' },
      { path: 'compose' }*/
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule {}

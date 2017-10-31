import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { MailboxComponent } from './mailbox/mailbox.component';
import { OutboxResolver } from './mailbox/outbox.resolver';
import { InboxResolver } from './mailbox/inbox.resolver';
import {MessageReaderComponent} from './message-reader/message-reader.component';

const routes = [
  { path: '', redirectTo: '/inbox', pathMatch: 'full'},
  { path: 'inbox', component: MailboxComponent, resolve: { messages: InboxResolver },
    children: [
      { path: 'view', redirectTo: '/inbox', pathMatch: 'full' },
      { path: 'view/:messageId', component: MessageReaderComponent },
      /*{ path: 'compose' }*/
    ]
  },
  { path: 'outbox', component: MailboxComponent, resolve: { messages: OutboxResolver },
    children: [
      { path: 'view', redirectTo: '/outbox', pathMatch: 'full' },
      { path: 'view/:messageId', component: MessageReaderComponent },
      /*{ path: 'compose' }*/
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ InboxResolver, OutboxResolver ]
})
export class AppRoutingModule {}

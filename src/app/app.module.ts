import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailService } from './mail.service';
import { AppRoutingModule } from './app-routing.module';
import { MailboxComponent } from './mailbox/mailbox.component';
import { MailboxListComponent } from './mailbox/mailbox-list/mailbox-list.component';
import { MailboxControlsComponent } from './mailbox/mailbox-controls/mailbox-controls.component';
import { MessageReaderComponent } from './message-reader/message-reader.component';
import { MessageDetailComponent } from './message-reader/message-detail/message-detail.component';
import { MailboxService } from './mailbox.service';

@NgModule({
  declarations: [
    AppComponent,
    MailboxComponent,
    MailboxListComponent,
    MailboxControlsComponent,
    MessageReaderComponent,
    MessageDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule
  ],
  providers: [
    MailService,
    MailboxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

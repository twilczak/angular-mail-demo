import { Component, Input } from '@angular/core';

import { MailMessage } from '../../mail-message';
import {MailboxService} from '../../mailbox.service';

@Component({
  selector: 'tw-mailbox-list',
  templateUrl: './mailbox-list.component.html',
  styleUrls: ['./mailbox-list.component.scss']
})
export class MailboxListComponent {

  @Input() mailbox: MailboxService;

  constructor() { }

  inboxActive() {
    return this.mailbox.name === 'inbox';
  }

  outboxActive() {
    return this.mailbox.name === 'outbox';
  }
}

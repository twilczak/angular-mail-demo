import { Component, Input } from '@angular/core';

import { MailMessage } from '../../mail-message';

@Component({
  selector: 'tw-mailbox-list',
  templateUrl: './mailbox-list.component.html',
  styleUrls: ['./mailbox-list.component.scss']
})
export class MailboxListComponent {

  @Input() messages: MailMessage[];

  @Input() mailbox: string;

  constructor() { }

  inboxActive() {
    return this.mailbox === 'inbox';
  }

  outboxActive() {
    return this.mailbox === 'outbox';
  }
}

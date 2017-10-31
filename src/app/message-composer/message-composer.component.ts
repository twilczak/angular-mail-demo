import { Component } from '@angular/core';
import { MailService } from '../mail.service';
import { MailboxService } from '../mailbox.service';

@Component({
  selector: 'tw-message-composer',
  templateUrl: './message-composer.component.html',
  styleUrls: ['./message-composer.component.scss']
})
export class MessageComposerComponent {

  constructor(private mailService: MailService, private mailboxService: MailboxService) { }

  sendMessage(message) {

  }

}

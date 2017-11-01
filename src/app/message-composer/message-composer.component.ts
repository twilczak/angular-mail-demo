import { Component } from '@angular/core';
import { MailService } from '../mail.service';
import { MailboxService } from '../mailbox.service';
import { MailMessage } from '../mail-message';
import { Router } from '@angular/router';

@Component({
  selector: 'tw-message-composer',
  templateUrl: './message-composer.component.html',
  styleUrls: ['./message-composer.component.scss']
})
export class MessageComposerComponent {

  constructor(private mailService: MailService, private mailbox: MailboxService, private router: Router) { }

  sendMessage(message: MailMessage) {
    this.mailService
      .sendMessage(message)
      .subscribe((response) => {
        if (this.mailbox.name === 'outbox') {
          this.mailbox.messages.push(response);
          this.router.navigateByUrl(`outbox/view/${response.id}`);
        } else {
          this.router.navigateByUrl(`inbox`);
        }
    });
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MailMessage } from '../../mail-message';

@Component({
  selector: 'tw-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent {

  @Input() message: MailMessage;
  @Output() deleteMessage: EventEmitter<MailMessage> = new EventEmitter();

}

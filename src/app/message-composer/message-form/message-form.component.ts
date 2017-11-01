import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailMessage } from '../../mail-message';

@Component({
  selector: 'tw-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  messageForm: FormGroup;
  @Output() sendMessage: EventEmitter<MailMessage> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      recipient: ['', Validators.required],
      subject: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  sendDisabled() {
    return this.messageForm.status !== 'VALID';
  }

  send() {
    const message = new MailMessage();
    message.sender = 'Me';
    message.recipient = this.messageForm.value.recipient;
    message.subject = this.messageForm.value.subject;
    this.sendMessage.emit(message);
  }
}

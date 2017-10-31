import {Component, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MailboxService } from '../mailbox.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'tw-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {

  mailboxService$: Observable<MailboxService>;
  constructor( private route: ActivatedRoute, private mailbox: MailboxService ) {}

  ngOnInit() {
    this.mailboxService$ = Observable.combineLatest(this.route.url, this.route.data, (url, data) => {
      this.mailbox.name = url[0].path;
      this.mailbox.messages = data.messages;
      return this.mailbox;
    });
  }
}

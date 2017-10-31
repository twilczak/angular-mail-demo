import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MailMessage } from '../mail-message';

@Component({
  selector: 'tw-message-reader',
  templateUrl: './message-reader.component.html',
  styleUrls: ['./message-reader.component.scss']
})
export class MessageReaderComponent implements OnInit {

  routeData$: Observable<Data>;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeData$ = this.route.data;
  }

  deleteMessage(message: MailMessage) {}

}

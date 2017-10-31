import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MailMessage } from '../mail-message';
import { MailService}  from '../mail.service';

@Component({
  selector: 'tw-message-reader',
  templateUrl: './message-reader.component.html',
  styleUrls: ['./message-reader.component.scss']
})
export class MessageReaderComponent implements OnInit {

  routeData$: Observable<Data>;
  constructor(private route: ActivatedRoute, private router: Router, private mailService: MailService) { }

  ngOnInit() {
    this.routeData$ = this.route.data;
  }

  deleteMessage(message: MailMessage) {
    const mailbox: string = this.route.snapshot.parent.url[0].path;
    const id: string = message.id;

    this.mailService.deleteMessage(mailbox, id).subscribe(() => {
      this.router.navigateByUrl(mailbox);
    });
  }

}

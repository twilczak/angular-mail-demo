import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Url } from 'url';

@Component({
  selector: 'tw-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {

  routeData$: Observable<Data>;
  routeUrl$: Observable<Url[]>;

  constructor( private route: ActivatedRoute ) {}

  ngOnInit() {
    this.routeUrl$ = this.route.url;
    this.routeData$ = this.route.data;
  }

}

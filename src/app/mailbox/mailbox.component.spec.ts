import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MailboxComponent } from './mailbox.component';
import { MailboxListComponent } from './mailbox-list/mailbox-list.component';
import { MailboxControlsComponent } from './mailbox-controls/mailbox-controls.component';

const MockRoutes = {
  url: Observable.of([{path: '/inbox'}]),
  data: Observable.of({messages: []}),
  snapshot: {}
};

describe('MailboxComponent', () => {
  let component: MailboxComponent;
  let fixture: ComponentFixture<MailboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      providers: [
        { provide: ActivatedRoute, useValue: MockRoutes }
      ],
      declarations: [ MailboxComponent, MailboxListComponent, MailboxControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

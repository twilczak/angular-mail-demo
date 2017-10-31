import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailboxListComponent } from './mailbox-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MailboxService } from '../../mailbox.service';

const mockMailboxService = {
  name: 'test',
  messages: []
} as MailboxService;

describe('MailboxListComponent', () => {
  let component: MailboxListComponent;
  let fixture: ComponentFixture<MailboxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailboxListComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailboxListComponent);
    component = fixture.componentInstance;
    component.mailbox = mockMailboxService;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

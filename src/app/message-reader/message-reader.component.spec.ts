import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageReaderComponent } from './message-reader.component';
import { RouterTestingModule } from '@angular/router/testing';
import {MessageDetailComponent} from './message-detail/message-detail.component';

describe('MessageReaderComponent', () => {
  let component: MessageReaderComponent;
  let fixture: ComponentFixture<MessageReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageReaderComponent, MessageDetailComponent ],
      imports: [ RouterTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

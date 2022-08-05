import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmailandsmsalertsPage } from './emailandsmsalerts.page';

describe('EmailandsmsalertsPage', () => {
  let component: EmailandsmsalertsPage;
  let fixture: ComponentFixture<EmailandsmsalertsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailandsmsalertsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmailandsmsalertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

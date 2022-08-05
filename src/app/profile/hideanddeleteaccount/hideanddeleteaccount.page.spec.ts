import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HideanddeleteaccountPage } from './hideanddeleteaccount.page';

describe('HideanddeleteaccountPage', () => {
  let component: HideanddeleteaccountPage;
  let fixture: ComponentFixture<HideanddeleteaccountPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HideanddeleteaccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HideanddeleteaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

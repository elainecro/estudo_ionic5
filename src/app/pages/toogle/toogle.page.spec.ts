import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TooglePage } from './toogle.page';

describe('TooglePage', () => {
  let component: TooglePage;
  let fixture: ComponentFixture<TooglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TooglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerExampleComponent } from './banner-example.component';

describe('BannerExampleComponent', () => {
  let component: BannerExampleComponent;
  let fixture: ComponentFixture<BannerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

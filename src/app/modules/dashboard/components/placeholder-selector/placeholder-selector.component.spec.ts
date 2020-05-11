import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderSelectorComponent } from './placeholder-selector.component';

describe('PlaceholderSelectorComponent', () => {
  let component: PlaceholderSelectorComponent;
  let fixture: ComponentFixture<PlaceholderSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

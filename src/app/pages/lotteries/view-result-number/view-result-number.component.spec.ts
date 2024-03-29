import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResultNumberComponent } from './view-result-number.component';

describe('ViewResultNumberComponent', () => {
  let component: ViewResultNumberComponent;
  let fixture: ComponentFixture<ViewResultNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewResultNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewResultNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

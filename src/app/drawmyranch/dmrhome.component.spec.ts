import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MMPHomeComponent } from './mmphome.component';

describe('HomepageComponent', () => {
  let component: MMPHomeComponent;
  let fixture: ComponentFixture<MMPHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MMPHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MMPHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

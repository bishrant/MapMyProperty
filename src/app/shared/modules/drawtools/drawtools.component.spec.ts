import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawtoolsComponent } from './drawtools.component';

describe('DrawtoolsComponent', () => {
  let component: DrawtoolsComponent;
  let fixture: ComponentFixture<DrawtoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawtoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

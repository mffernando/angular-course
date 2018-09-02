import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Components01Component } from './components01.component';

describe('Components01Component', () => {
  let component: Components01Component;
  let fixture: ComponentFixture<Components01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Components01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Components01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

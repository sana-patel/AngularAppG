import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagentfoundComponent } from './pagentfound.component';

describe('PagentfoundComponent', () => {
  let component: PagentfoundComponent;
  let fixture: ComponentFixture<PagentfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagentfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagentfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

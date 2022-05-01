import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancifymytextComponent } from './fancifymytext.component';

describe('FancifymytextComponent', () => {
  let component: FancifymytextComponent;
  let fixture: ComponentFixture<FancifymytextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancifymytextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FancifymytextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

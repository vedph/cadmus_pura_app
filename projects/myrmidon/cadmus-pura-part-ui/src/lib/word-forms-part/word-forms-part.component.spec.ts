import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordFormsPartComponent } from './word-forms-part.component';

describe('WordFormsPartComponent', () => {
  let component: WordFormsPartComponent;
  let fixture: ComponentFixture<WordFormsPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordFormsPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordFormsPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

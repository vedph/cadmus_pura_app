import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordFormsPartFeatureComponent } from './word-forms-part-feature.component';

describe('WordFormsPartFeatureComponent', () => {
  let component: WordFormsPartFeatureComponent;
  let fixture: ComponentFixture<WordFormsPartFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordFormsPartFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordFormsPartFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

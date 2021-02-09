import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemmaTagFragmentFeatureComponent } from './lemma-tag-fragment-feature.component';

describe('LemmaTagFragmentFeatureComponent', () => {
  let component: LemmaTagFragmentFeatureComponent;
  let fixture: ComponentFixture<LemmaTagFragmentFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemmaTagFragmentFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LemmaTagFragmentFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

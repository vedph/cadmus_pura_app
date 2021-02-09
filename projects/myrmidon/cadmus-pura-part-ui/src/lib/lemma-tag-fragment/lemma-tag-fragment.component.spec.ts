import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemmaTagFragmentComponent } from './lemma-tag-fragment.component';

describe('LemmaTagFragmentComponent', () => {
  let component: LemmaTagFragmentComponent;
  let fixture: ComponentFixture<LemmaTagFragmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemmaTagFragmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LemmaTagFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

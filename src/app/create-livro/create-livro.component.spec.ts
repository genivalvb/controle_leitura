import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLivroComponent } from './create-livro.component';

describe('CreateLivroComponent', () => {
  let component: CreateLivroComponent;
  let fixture: ComponentFixture<CreateLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

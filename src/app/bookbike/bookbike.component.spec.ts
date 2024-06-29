import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbikeComponent } from './bookbike.component';

describe('BookbikeComponent', () => {
  let component: BookbikeComponent;
  let fixture: ComponentFixture<BookbikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookbikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookbikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

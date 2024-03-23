import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianNavigationComponent } from './librarian-navigation.component';

describe('LibrarianNavigationComponent', () => {
  let component: LibrarianNavigationComponent;
  let fixture: ComponentFixture<LibrarianNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibrarianNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrarianNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

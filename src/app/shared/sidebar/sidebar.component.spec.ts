import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar.component';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { RouterModule } from '@angular/router';
import { FormControl } from '@angular/forms';
describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormControl,
        HttpClientModule,
        RouterModule,
        NgMaterialModule,
      ],
      declarations: [SidebarComponent, MatAutocomplete],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

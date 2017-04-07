/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GeneTableComponent } from './gene-table.component';

describe('GeneTableComponent', () => {
  let component: GeneTableComponent;
  let fixture: ComponentFixture<GeneTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

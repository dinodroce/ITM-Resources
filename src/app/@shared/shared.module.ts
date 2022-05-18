import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoaderComponent } from './loader/loader.component';
import { FormDateComponent } from './form-date/form-date.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [TranslateModule, CommonModule, NgbModule, FormsModule, ReactiveFormsModule],
  declarations: [LoaderComponent, FormDateComponent],
  exports: [LoaderComponent, FormDateComponent],
})
export class SharedModule {}

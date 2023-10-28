import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product.component';
import { FormsModule } from '@angular/forms';
import { ReplaceChar } from './shared/common-pipe/pipe.replace-char.pipe';
import { StarRatingComponent } from './shared/star/star.component';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ReplaceChar,
    StarRatingComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

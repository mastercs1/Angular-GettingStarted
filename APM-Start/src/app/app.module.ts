import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product.component';
import { FormsModule } from '@angular/forms';
import { ReplaceChar } from './shared/common-pipe/pipe.replace-char.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ReplaceChar
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { AppComponent} from './app.component';
import { TrackDummyComponent } from './track-dummy/track-dummy.component';

@NgModule({
  declarations: [
    AppComponent, TrackDummyComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

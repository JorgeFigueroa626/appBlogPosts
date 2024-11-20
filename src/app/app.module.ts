import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreatePostComponent } from './pages/post/create-post/create-post.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostListComponent } from './pages/post/post-list/post-list.component';
import { ViewPostComponent } from './pages/post/view-post/view-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    NavbarComponent,
    PostListComponent,
    ViewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

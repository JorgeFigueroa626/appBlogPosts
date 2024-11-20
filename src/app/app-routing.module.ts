import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './pages/post/create-post/create-post.component';
import { PostListComponent } from './pages/post/post-list/post-list.component';
import { ViewPostComponent } from './pages/post/view-post/view-post.component';

const routes: Routes = [
  {path: 'create-post', component: CreatePostComponent},
  {path: 'post-list', component: PostListComponent},
  {path: 'view-post/:id', component: ViewPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http'
import {RouterModule,Routes} from '@angular/router'
//引入的组件需要在这里添加
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component'

//服务
//2、引入服务
import { DataService } from './services/data.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

//创建路由，带参数，注意是数组
const appRoutes:Routes = [
  {path : '',component:HomeComponent},
  {path : 'user',component:UserComponent},
  {path : 'user/:id',component:UserDetailComponent}
]

@NgModule({
  //自己创建的组件会在这里出现

  declarations: [
    AppComponent,
    UserDetailComponent ,
    UserComponent,
    HomeComponent,
    NavbarComponent
  ],
  //模块放在这里，比如说httpModule
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //执行路由
    RouterModule.forRoot(appRoutes)
  ],
  //有关服务的放在这里
  //2-1、加载dataService服务
  providers: [DataService],
  //引到跟组件
  bootstrap: [AppComponent]
})
export class AppModule { }

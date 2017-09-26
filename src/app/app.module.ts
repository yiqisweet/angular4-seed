import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//引入的组件需要在这里添加
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component'

//服务
//2、引入服务
import { DataService } from './services/data.service';

@NgModule({
  //自己创建的组件会在这里出现

    declarations: [
    AppComponent,
    UserComponent,
    HomeComponent
  ],
  //模块放在这里，比如说httpModule
  imports: [
    BrowserModule,
    FormsModule
  ],
  //有关服务的放在这里
  //2-1、加载dataService服务
  providers: [DataService],
  //引到跟组件
  bootstrap: [AppComponent]
})
export class AppModule { }

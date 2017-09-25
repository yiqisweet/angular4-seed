import { Component } from '@angular/core';

//这里写逻辑处理
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  //也可以改成template，写标签 template : '<div>hello world</div>'
  styleUrls: ['./app.component.css'] //也可以直接写样式 style ： ['div:{color:red}']
})
export class AppComponent {
  title = 'hello world'; // title指变量 在页面内{{title}} 可使用
}

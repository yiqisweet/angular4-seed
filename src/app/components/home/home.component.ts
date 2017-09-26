import { Component, OnInit } from '@angular/core';
//3、在当前模块下引入服务
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //在当前定义属性
  users : any[];
  //4、创建dataService对象并使用
  constructor(public dataService:DataService) {
    //这个方法是观察者的对象，就必须要使用订阅者模式subscribe
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  ngOnInit() {
  }

}

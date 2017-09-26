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
  users : string[];
  //4、创建dataService对象并使用
  constructor(public dataService:DataService) {
    //服务拿到的值赋给当前定义的属性
    this.users = this.dataService.getUsers();
  }

  ngOnInit() {
  }

}

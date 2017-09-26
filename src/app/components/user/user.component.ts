import { Component, OnInit } from '@angular/core';
// import {Address} from "cluster";

//服务
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    name:string;
    age:number;
    email:string;

    //对象写法,
  address : Address;
  //任意类型
  hello:any;
  //数组写法
  hobbies:string[];
  isEdit:boolean = false;
  users : string[];
  constructor(public dataService:DataService) {
    console.log('constructor');
    // this.users = this.dataService.getUsers();
  }



  ngOnInit() {
    console.log('init');
    this.name = "randy";
    this.age = 30;
    this.email = "test@test.com";
    this.address = {
      street : '学清路',
      city : '北京',
      state : '海淀区'
    };
    //必须全都要string
    this.hobbies = ['写代码','看电影','听音乐'];
  }
  onClick(){
    this.name = 'Bob';
    this.hobbies.push("new Item")
  }
  //增加爱好
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby)
    return false;
  }
  //删除爱好
  deleteHobby(index){
    this.hobbies.splice(index,1);
  }
  //切换可编辑状态
  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}
//接口，对应的对象类型
interface Address{
   street:string,
   city:string,
   state:string
}

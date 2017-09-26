import { Injectable } from '@angular/core';
//1、创建服务
@Injectable()
export class DataService{
  users:string[];
  constructor(){
      this.users = ['张三','李四','王五']
  }
  getUsers(){
    return this.users;
  }
}

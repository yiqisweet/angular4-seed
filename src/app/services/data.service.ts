import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

import 'rxjs/add/operator/map';
//1、创建服务
@Injectable()
export class DataService{
  users:string[];


  constructor(public http:Http){

  }
  getUsers(){
    //返回的数据是观察者对象
    //get请求
    return this.http.get('http://jsonplaceholder.typicode.com/users')
      .map(res => res.json())
  }
}

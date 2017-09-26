import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
//路由
import {Router, ActivatedRoute, Params, Data} from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id:number;
  user:object = {};
  //定义参数，设置类型
  constructor(private route:ActivatedRoute,
               private router:Router,
              public dataService:DataService) {
    //订阅者 回调params
    this.route.params.subscribe((params:Params) => {
      // console.log(params.id);
      this.id = params.id;
    })
  }
  ngOnInit() {
    console.log('进入init')
    this.dataService.getSingleUser(this.id).subscribe(user => {
      // console.log(user);
      this.user = user;

    })
  }

}

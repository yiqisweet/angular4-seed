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
  user = {
    id:'',
    name:'',
    email:'',
    phone:''
  }
  isEdit:boolean = false
  //4、创建dataService对象并使用
  constructor(public dataService:DataService) {
    //这个方法是观察者的对象，就必须要使用订阅者模式subscribe
    this.dataService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;

    })
  }
  onSubmit(isEdit){
    //订阅者模式
    if(isEdit){
      this.dataService.updateUser(this.user).subscribe(user =>{
        console.log(user);
        //删除当前的
        for(let i = 0; i < this.users.length; i++){
          if(this.users[i].id === user.id){
            this.users.splice(i,1);
          }
        }

        this.user.phone = '123';
        //添加更新的
        this.users.unshift(this.user);
      })
    }else{
      this.dataService.addUser(this.user).subscribe(user=>{
        console.log(user);
        this.users.unshift(user)
      })
    }
  }
  onDeleteClick(id){
    console.log(id);
    this.dataService.deleteUser(id).subscribe(res => {
      for(let i = 0; i < this.users.length; i++){
        if(this.users[i].id === id){
          this.users.splice(i,1);
        }
      }
    })
  }
  onEditClick(user){
    this.isEdit = true;
    this.user = user;
  }

  ngOnInit() {
  }

}

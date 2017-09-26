# angular4-seed

## 这里面包含了ng4的基本增删改查，还有更加完整版的增删改查，涉及到了ng4的各个新属性和核心模块，定期更新



## 需要掌握的姿势：
1、HTML  
2、Css  
3、JavaScript  
4、拥有语言逻辑基础  

## 什么是angular
1、前端最流行的主流JavaScript框架  
2、由谷歌倾情打造并维护  
3、致力于构造单页面应用（SPA）  
4、是主流M(mongodb)E(express)A(angular)N(node)综合框架中的一部分  
5、打破HTML静态，创建动态的Web应用  

## angular不是什么  
1、不是一个服务端的框架或者技术  
2、不是JavaScript的一个库，列入jquery和react等  
3、不是用于谁家  
4、不是一个平台或一门语言  
5、不是一个插件  

## 为什么要使用angular
1、可以快速开发及代码迭代  
2、所有代码都通过组件实现（模块化）  
3、动态获取数据内容  
4、跨平台  

## 核心特征及常用术语
1、Components 组件  
2、Data Binding 数据绑定  
3、Directives 指令  
4、Services 服务  
5、Template 模板  
6、Pipes 管道    
7、Routing 路由  
8、HTTP Module 请求  
9、Events 事件  
10、Testing 测试  
11、Observables 提供对应的方法  
12、Animation 动画  
13、Build Tools 构建工具  
14、Forms Module 制定表单内容  
15、TypeScript JavaScript的超集  

## 脚手架

安装cnpm     
按照cli.angular.io指示操作  
ng serve 运行 localhost 4200  
ng build 编译文件  

.angular-cli.json 里面的style 和script可以设置主样式和js库的路径，比如bs和jq，最后打包的时候会打包到项目中   
environment.ts 对当前环境的配置  
assets 本地json等等，放在这里才可以正常的被请求  
app下对应着组件文件，其中spec是测试文件  

app /  下存放组件  

如果想要一次生成全部并自动引导 那么在命令行中使用 ng generate component 组件名称，如果带文件目录加 / ，最后会连带生成相同名字的文件夹   缩写 > ng g c  
创建的组件根据component.ts里面selector的值，在其他组件中使用，前提是 在app.modules.ts里面的declarations里加入引用的组件  
 
组件js里面对外暴露的类中是写逻辑的地方，ngOnInit 初始化方法，constructor 优先级高于 onInit  

截止user组件 都是最基本的 增删改功能，代码内标有注释  

## service
服务是什么？  
1、服务主要应用于多个组件中数据的管理  
2、可以让组件更干净   
3、DRY -- Don't Repeat Yourself  
4、通过HTTP Module对数据进行增删改查  

创建服务的步骤  
1、创建一个新的文件 /service/dataService.service.ts  
2、import @Injectable 并创建class  
3、引入Service 并添加到provider中  
4、任何组件需要使用的话 ，那么就需要在组件中引入服务，创建对象》调用方法  
 
使用命令创建Serice  
ng g service service/my-service  
会自动帮我创建文件已及写入对应的class  
我们需要手动将Service添加到provider中  


## ES7观察者对象Observable
observable.next 传输数据  
observable.complete 终止  
subscribe订阅者  

## 如果使用GET请求，引入Http Module  
在app.module中引入  
import { HttpModule } from '@angular/http'   
放到imports中  
在service中引入http，在方法中直接使用this.http.get()方法，   
这次请求返回的是观察者模式，所以用map处理（提前引入'rxjs/add/operator/map'）  

## post传递数据
跟get没有什么区别，改成post即可一样用订阅者模式接受返回参数
## delete删除数据
没区别，一样data.service中定义，改成delete



## angular4路由 

## 路由是做什么的？
1、解决从一个视图到另一个视图  

## 路由的基本步骤
1、index.html设置<base href>  
2、引入路由模块
3、创建路由  
4、设置路由出口  
5、添加路由链接  

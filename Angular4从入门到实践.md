

###脚手架

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

###service
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


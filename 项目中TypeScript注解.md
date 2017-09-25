
基本ts知识：

变量:类型 =  对应类型的值
name:string = "randy";  ||  name:string;              在方法中 this.name = "randy"
如果规定了某种类型，但是值并不符合当前设定的类型，那么会报错
再举例对象：
address:{
  street:string,
  city : string,
  state : string
}
对象写法
this.address = {
  street : '三元桥',
  city : '北京',
  state : '朝阳区'
}

但不建议这么写，会出现冗余
所以可以使用接口，来定义
address:Address;
interface Address{
   street:string,
   city:string,
   state:string
}
然后在方法中正常使用即可
this.address = {
  street : ...,
  ... : ...,
  ... : ...
}

数组写法，数组的内容必须都是字符串
hobbies : string[];

任意类型 
hello : any;

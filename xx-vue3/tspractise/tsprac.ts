// 类型注解
// 类型推断、

// 基础类型可以推断的让他自己推断，不可以推断的需要注解

const numberArr: number[] = [1, 2, 3]

const undefinedArr: undefined[] = [undefined, undefined]


// 多种类型的   
const tuple: (number | string)[] = [1, 'nihao', 2]

// 元组，不常用  
const tuple2: [number, string, number] = [1, 'nihao', 2]     //其中数组中元素位置需按注解的来排

// csv格式可能用到，例如
const csvs: [number, string, number][] = [
    [1, '', 2],
    [3, '', 4],
    [5, '', 6]
]

//包含对象的数组，定义类型别名  type alias    很想接口  interface

type duix = { name: string, age: number }    //或者  

class Duixi {
    name: string;      //  const duixiang : Duixi [] = [...]    也可以这样表示
    age: number
}

const duixiang: duix[] = [
    { name: 'nihao', age: 19 },
    { name: 'hello', age: 20 }
]



// 接口
interface Jiekou {
    name: string,
    age: number,
    size?: number,    //可选
    [propname: string]: any,   //key 是string类型， value 是any类型
    func(): string    //有一个方法func  ，他的返回值是string
}


const boy = {
    name: 'haah',
    age: 12,
    size: 12,
    sex: 'female',     //any   
    func() {
        return 'haha'
    }

}

// a function
const foo = (something: Jiekou) => {
    console.log(something)
}

foo(boy)    //调用


//类实现接口   implements
class xiaoming implements Jiekou {
    name: 'haha';
    age: 14;
    func() {
        return 'hello world'
    };
}

//接口间的继承， 用来扩展接口的功能
interface Jiekou2 extends Jiekou {
    func2(): string    //添加了一个新的functiong

}

const xiaohua = {
    name: 'haha',
    age: 14,
    func() {
        return 'hello world'
    },
    func2() {
        return 'hello world agian'
    }
}

//方法
const bar = (something: Jiekou2) => {
    return 'hello hi'
}

// 调用方法 

bar(xiaohua)


//类的继承和重写

class Lei {
    content = 'hi,nihao';
    func1() {
        return 'nihao ,haha'
    }
}

class Leison extends Lei {
    //重写
    func1() {
        return 'change fathers function '
    }



    //添加自己的方法
    func2() {
        return 'add other one'
    }

    //super 
    func3() {
        return super.func1 + 'add other '
    }
}

const boo = new Leison()
console.log(boo.func3())     //func1 还是父类的func1 ，而不是我们重写的自己的func1 ，因为super


//类的属性  public private  protect

// public 公有的
// private 私有的  不允许外部使用， 只允许内部使用
// protect 受保护的，   不允许外部使用，但在继承中可以被使用


//类的构造函数    (在类初始化的时候,自动执行的方法)

class Gouzao {
    public name: string;
    constructor(name: string) {
        this.name = name
    }
}

const douzao1 = new Gouzao('haha')

//关于类的继承中,构造函数的理解
class Gouzaoson extends Gouzao {
    constructor(public age: number) {      //我自己的构造函数
        super('nihao')     //父类的构造函数中需要传string类型的参数,不然父类中的name属性就没有值 ,这样我们也继承不到name这个值 ,会出错  (父类不写构造函数,是默认有个空的构造函数 )
    }
}



//类的set 和get 方法
class Onelei {
    constructor(private _age: number) {

    }

    get age() {
        return this._age
    }

    set age(age: number) {
        this._age + age
    }
}

const oneleison = new Onelei(25)
console.log(oneleison.age)   //25        拿到的是get 中的age属性

//如果
oneleison.age = 20           //      赋值调用了 set 中的age属性
console.log(oneleison.age)    //返回的是新的get中age属性返回的被改变的私有age 值,

//静态类 ,类名直接调用

class Jingtai {
    static sayHi() {
        return 'hi'
    }
}

console.log(Jingtai.sayHi())      //不需要实例化了,直接通过类名调用

//类的readonly  只读属性

//抽象类   抽象方法,继承必须实现
abstract class absLei {
    abstract skill()   //不需要大括号
}

//类型保护
interface Waiter {
    wait: boolean;
    say: () => {}
}

interface Teacher {
    wait: boolean;
    teach: () => {}
}

function personskill(person: Waiter | Teacher) {

    // 断言
    if (person.wait) {
        (person as Teacher).teach()
    } else {
        (person as Waiter).say()
    }


    // or
    if ('say' in person) {
        person.say()
    } else {
        person.teach()
    }

    //or   typeof    同样可以使用 instanceof   这里不多赘述
    function foofunc(first: string | number, second: string | number) {
        if (typeof (first) === "number" && typeof (second) === "number") {
            return first + second
        }
    }

}


//枚举          枚举拥有自动索引    0,1,2, ,如果第一个ONE = 1,  后面会一次延申     1,2,3,
enum Meiju {
    ONE, TWO, THREE
}



// 说的好   类型注释就是在函数定义时候确定类型          泛型就是在函数使用时确定类型


//泛型     
class Fanxing<T>{             //在这个类中,我们有一个泛型,那他用在哪里呢
    constructor(private person: T[]) {         //这个泛型用在构造函数的参数上  ,他接受一个类型为T 的 数组 

    }

    getPerson(index: number): T {
        return this.person[index]
    }
}

const fanxing2 = new Fanxing<string>(['nihao', 'hello', 'hi'])      //这里面泛型就是string,   ,他用在了,构造函数参数的string数组上,  以及getPerson 的返回值上


//泛型的继承  


class extendsFanxing {
    name: string
}


class Fanxing3<T extends extendsFanxing>{              //他继承子extendsFanxing   ,所以 该泛型作为新建的对象参数泛型,这个参数中,必须包含 继承了的属性name
    constructor(private person: T[]) {
    }

    getPerson(index: number): T {
        return this.person[index]
    }
}


const jichenFX = new Fanxing3([{ name: 'nihao ', nihao: 'nihao ' }, { name: 'hello' }])     //必须有属性为name :string  的对象


//泛型的约束

class Fanxing4<T extends number | string>{              //约束,泛型要么是number ,要么是string
    constructor(private person: T[]) {
    }

    getPerson(index: number): T {
        return this.person[index]
    }
}

const newFx = new Fanxing4<string>(['nihao', 'hello'])
const newFx2 = new Fanxing4<number>([1, 2, 3])


//namespace      以及命名空间的嵌套
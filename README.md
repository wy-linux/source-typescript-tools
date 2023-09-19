### Typescript中常用的关键字与工具类型，提高TS类型理解与类型编码能力
##### decorators
```javascript
/**
装饰器执行顺序：
    参数装饰器
    方法（访问符）装饰器
    属性装饰器
    类装饰器
 */
```

##### keywords
```javascript
// typeof 获取一个值的类型
// keyof 获取一个对象的属性的联合类型
// in 遍历一个联合类型
// extends:
//      1. 类型继承(interface)
//      2. 泛型约束
//      3. 条件匹配(工具类型)
// infer 获取Type的类型推断，常用于类型推断表达式中
// as 类型断言
```
##### tools
```javascript
// Parameters<Type> 获取函数参数类型，返回一个元组
// ReturnType<Type> 获取函数返回值类型
// Awaited<Type> 获取Promise的结果类型
// Readonly<Type> Type设置为只读
// Pick<Type, Members> 获取Type中的选中的属性
// Require<Type> Type设置为必选
// Omit<Type, Members> 获取Type中忽略的属性
// Record<Keys, Type> 返回一个Keys为属性Type为值的对象类型
// Partial<Type> Type设置为可选
// Exclude<Type, Members> Type中排除Members类型
// Extract<Type, Members> Type中提取Members类型
// NonNullable<Type> Type排除null与undefined类型
```


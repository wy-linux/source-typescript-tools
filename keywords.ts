const wy = {
    name: 'wangyu',
    age: 23,
    occupation: '前端开发'
}
// typeof 获取一个值的类型
type WyType = typeof wy;  
/**
 * 
 * 
 */
interface Point {
    x: number;
    y: number;
}
// keyof 获取一个对象的属性的联合类型
type keys = keyof Point
/**
 * 
 *
 */

// in 遍历一个联合类型
type TSPartial<T> = {
    [P in keyof T]?: T[P];
};
type WyPartialType = TSPartial<typeof wy>
/**
extends:
    1. 类型继承(interface)
    2. 泛型约束
    3. 条件匹配(工具类型)
 */
type TsReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
/**
infer:
    获取Type的类型推断，常用于类型推断表达式中
 */
type TsParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
/**
as:
    类型断言
 */
type OmitProp<T, R> = { // 排除特定属性名
    [K in keyof T as K extends R ? never : K]: T[K];
    // [K in keyof T as (K extends R ? never : K)]: T[K];
}
type OmitValue<T, R> = { // 排除特定属性值
    [K in keyof T as T[K] extends R ? never : K]: T[K];
    // [K in keyof T as (T[K] extends R ? never : K)]: T[K];
}
type WyOmitProp = OmitProp<WyType, 'age'>
type WyOmitValue = OmitValue<WyType, number>

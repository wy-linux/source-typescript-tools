const requiredParams: number[] = []
const RequiredDecorator: ParameterDecorator = (target: Object, propertyKey: string | symbol | undefined, parameterIndex: number) => {
    requiredParams.push(parameterIndex)
}
const validateDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const method = descriptor.value
    descriptor.value = (...args: any) => {
        requiredParams.forEach((valIndex) => {
            if(valIndex > args.length || args[valIndex] === undefined) {
                throw new Error('请传递需要的参数')
            }
        })
        method(args)
    }
}
/**
装饰器执行顺序：
    参数装饰器
    方法（访问符）装饰器
    属性装饰器
    类装饰器
 */
class User {
    @validateDecorator
    find(name: string, @RequiredDecorator id?: number) {
        console.log('传参成功')
    }
}
new User().find('wy')
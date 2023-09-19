const USER = {
    name: 'wangyu',
    isLogin: true,
    permissions: ['store', 'show', 'admin']
}
//装饰器工厂
const accessDecorator = (keys: string[]): MethodDecorator => (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const method = descriptor.value

    const validate = () => {
        return keys.every(key => USER.permissions.includes(key))
    }
    descriptor.value = () => {
        if(USER.isLogin === true ) {
            if(validate()) {
                return method()
            }
            console.log('暂无权限')
        } else {
            console.log('请先登录')
        }
    }
}

class Article {
    show() {
        console.log('显示文章')
    }

    @accessDecorator(['admin', 'access'])
    store() {
        console.log('保存文章')
    }
}
new Article().store()
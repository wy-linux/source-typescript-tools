const messageDecorator: ClassDecorator = (target: Function) => {
    target.prototype.message = (message: string) => {
        console.log(message)
    }
}

@messageDecorator
class LoginController {
    public message: any
    public login() {
        console.log('登录')
        this.message('登录成功！')
    }
}
new LoginController().login()
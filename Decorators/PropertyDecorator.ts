const randomColorDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {
    const colors: string[] = ['red', 'blue', 'yellow', 'green', 'black']
    Object.defineProperty(target, propertyKey, {
        get() {
            return colors[Math.floor(Math.random() * colors.length)]
        }
    })
}

class Hd {
    @randomColorDecorator
    public color: string | undefined
}
console.log(new Hd().color)
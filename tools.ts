function get(url: string) {
    return fetch(url).then(response => response.json() as Promise<{ok: boolean}>)
}
// typeof 获取一个值的类型
type GetFunc = typeof get
// Parameters<Type> 获取函数参数类型，返回一个元组
type Param = Parameters<GetFunc>
// ReturnType<Type> 获取函数返回值类型
type Return = ReturnType<GetFunc>
// Awaited<Type> 获取Promise的结果类型
type Data = Awaited<Return>
/**
 * 
 * 
 */
// Readonly<Type> Type设置为只读
type Options = Readonly<{
    method?: 'GET' | 'POST',
    url: string,
    data?: any
}>
// Pick<Type, Members> 获取Type中的选中的属性
// Require<Type> Type设置为必选
// let defaultOptions: Required<Pick<Options, 'method'>> = {method: 'GET'}
// Omit<Type, Members> 获取Type中忽略的属性
let defaultOptions: Required<Omit<Options, 'url' | 'data'>> = {method: 'GET'}
function mergeOptions(options: Options) {
    // options.method = 'POST'
    return {...defaultOptions, ...options}
}
/**
 * 
 * 
 */
type Language = 'zh' | 'en' | 'jp'
type Trans = {you: string, and: string, me: string}
// Record<Keys, Type> 返回一个Keys为属性Type为值的对象类型
type I18n  = Record<Language, Trans>
/**
 * 
 * 
 */
interface Todo {
    id: number,
    title: string,
    description: string
}
// Partial<Type> Type设置为可选
function updateTodo(todo: Todo, filedsToUpdate: Partial<Omit<Todo, 'id'>>) {
    return {...todo, ...filedsToUpdate}
}
updateTodo({id: 1, title: 'a', description: 'b'}, {title: 'c'})
/**
 * 
 * 
 */
type Topics = 'js' | 'css' | 'html' | 'typescript' | 'go' | 'rust'
// Exclude<Type, Members> Type中排除Members类型
type FeTopics = Exclude<Topics, 'go' | 'rust' | 'c#'>
// Extract<Type, Members> Type中提取Members类型
type BeTopics = Extract<Topics, 'go' | 'rust' | 'c#'>
type T0 = string | number | undefined | null
// NonNullable<Type> Type排除null与undefined类型
type T00 = NonNullable<T0>



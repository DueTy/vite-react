


(function () {
    
    interface labeledValue {
        label: string,
        value?: string
    }

    function printLabel(labeledObject: labeledValue) {
        console.log(labeledObject.label)
    }

    let testObj = { size: 10, label: 'this is a label' }

    printLabel(testObj)

    interface SquareConfig {
        color?: string 
        width?: number
        [propName: string]: any
    }

    function createSquere(config: SquareConfig): { color: string, area: number } {
        let result = { color: 'white', area: 100 }
        config.color && (result.color = config.color);
        config.width && (result.area = config.width * config.width)
        return result
    }
    
    const square = createSquere({ color: 'black', width: 30, opacity: .2})
    console.log(square);

    interface Point {
        readonly x: number
        readonly y: number
    }

    let p1: Point = { x: 1, y: 1 }
    // p1.x = 2 // 无法分配到 "x" ，因为它是只读属性。

    let roa: ReadonlyArray<number> = [1,2,3,4]
    // roa[0] = 1 // 类型“readonly number[]”中的索引签名仅允许读取
    // roa.push(1) // 类型“readonly number[]”上不存在属性“push”
    // 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。

    interface SearchFn {
        ( str: string, subStr: string ): boolean
    }

    let mySearch: SearchFn

    mySearch = function(str: string, sss: string): boolean {
        let result = str.search(sss)
        return result > -1
    }
})()
 
export default class Strategy {}
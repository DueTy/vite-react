interface State {
    doAction(context: Context):void
}

class Context{
    state: State = { doAction() {} }
    name: string = ''
    
    constructor(name: string) {
        this.name = name
    }

    setState(state: State) {
        this.state = state
    }

    getState(): State {
        return this.state
    }
}

class StartState implements State{
    doAction(context: Context) {
        console.log(context.name + '开始')
        context.setState(this)
    }

    toString(): string {
        return 'start'
    }
}

class StopState implements State {
    doAction(context: Context) {
        console.log(context.name + '停止')
        context.setState(this)
    }
    
    toString() {
        return 'stop'
    }
}

const context = new Context('播放器')
const startState = new StartState()
const stopState = new StopState()

startState.doAction(context)
stopState.doAction(context)

export default {}
export class Adder {
    private readonly a: number;

    constructor(a: number) {
        this.a = a;
    }

    public add(b: number): number {
        return this.a+b;
    }
}

export function authorizedFor(hasRole: Array<UserRole>) {
    return hasRole.includes("admin");
}

const app = express()
app.use(authTokenMiddleware)
app.get('/path1', authorizedFor(['admin']), handlePath1)
app.get('/path2', authorizedFor(['user']), handlePath2)

const testCallee = (arg: string) =>{
    console.log("Called with arg:", arg);
}

const testMethod1 = (arg1: string) =>{
    testCallee(arg1);
}

function testMethod2(arg2: string){
    testCallee(arg2);
}
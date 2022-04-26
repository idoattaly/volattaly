import { Adder } from "./methodCallsExample";


const adder = new Adder(3);
const result = adder.add(4);

export function myMethod(a: number, b: number) : number {
    return new Adder(a).add(b);
}

export function isAuthorized(role: string): boolean{ // Authorization
    return role === "admin";
}

export function authenticate(token: string){ // Non authorization
    doNothing();
}

export function authenticate(role: string){ // Authorization
    doNothingWithRole(role);
}
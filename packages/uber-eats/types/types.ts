export type Validator = (...args: any[]) => string[] | Promise<any>

export type Validators = Array<(...args: any[]) => string>

export type SelectOptionsType = {
    name: string,
    value: string
}


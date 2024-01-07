import { Validator, Validators } from "./types";

export interface FormType {
    bind: (name: string, validator: Validator) => void
    formName: string
    impressionId: string
    placement: string
    unbind: (name: string) => void
    validateField: (name: string, value: any) => Promise<boolean>
    validateFields: (values: Record<string, any>, fields?: string[]) => Promise<boolean>
}

export interface FormElementProps {
    name: string
    form?: FormType
    label?: string
    tooltip?: string
    className?: string
    disabled?: string
    placeholder?: string
    validators?: Validators
    value: string
}
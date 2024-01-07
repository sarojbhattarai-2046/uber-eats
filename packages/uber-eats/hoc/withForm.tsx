import React from 'react'
import { v4 as uuid } from 'uuid'

import { Validator } from '@/types/types'

interface FormProps  {
    formName: string
}

export const cleanFalsy = (values: Array<any>) => {
    return values.filter(value => (
        value != undefined
        && value.trim() != ''
    ))
}

const withForm = (WrappedComponent: React.FC<any>) => {
  return function FormComponent(props: FormProps) {
    const validatorRef = React.useRef<Record<string, Validator>>({})
    const { formName } = props

    const form: any = {
        bind,
        formName,
        impressionId: uuid(),
        unbind,
        validateField,
        validateFields,
    }

    async function validateFields(values: Record<string, any>, fields = Object.keys(validatorRef.current)) {
        const errors = await Promise.all(
            Object.entries(validatorRef.current).map(async([name, validator]) => {
                if(!validator || !fields?.includes(name)) return undefined
                const errors = await validator(values[name])
                return errors?.[0]
            }),
        )
        return !errors.filter(Boolean).length
    }

    async function validateField(name: string, value: any) {
        if(!validatorRef.current[name]) return true
        const errors = await validatorRef.current[name](value)
        return !errors?.[0]        
    }

    function bind(name: string, validator: Validator) {
        validatorRef.current[name] = validator
        return validatorRef.current[name]
    }

    function unbind(name: string) {
        delete validatorRef.current[name]
    }

    return <WrappedComponent form={form} {...props} />
  }
}

export default withForm
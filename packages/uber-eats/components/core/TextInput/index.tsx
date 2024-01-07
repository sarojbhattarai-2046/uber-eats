import React, { ChangeEvent } from 'react'
import { v4 as uuid } from 'uuid'

import { Validators } from '@/types/types'
import { FormElementProps } from '@/types/interfaces'
import { cleanFalsy } from '@/hoc/withForm'

interface TextInputProps extends FormElementProps {
    label?: string
    placement?: string
    formName?: string,
    value: string,
    onChange: (value: string, name: string, errors?: string[]) => void
    type?: string
    validators?: Validators
    id?: string
}

export default function TextInput ({ 
    label: labelText, 
    value, 
    onChange, 
    type = 'text', 
    validators, 
    name, 
    form,
    id,
    placeholder,
}: TextInputProps) {
    const [errors, setErrors] = React.useState<string[]>([])

    const validate = React.useCallback(async(value: string) => {
        let errors = await Promise.all(validators?.map(validator => validator(value)) as any[])
        errors = cleanFalsy(errors)
        setErrors(errors)
        return errors
    }, [ validators ])

    const handleChange = (async (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value 
        const errors = await validate(value) as string[]
        onChange(value, name, errors)
    })

    React.useEffect(() => {
        if(typeof form !== 'undefined') {
            form.bind(name, validate)
        }
    }, [ form, name, validate ])


  return (
    <div>
        {labelText ? <label>{labelText}</label> : null}
        <input
            id={id} 
            type={type} 
            value={value} 
            onChange={handleChange} 
            placeholder={placeholder}
            className="w-full border h-11 outline-none px-3 rounded" 
        />
        {errors.length ? <span className='text-red-600 text-xs'> {errors[0]} </span> : null}
    </div>
  )
}

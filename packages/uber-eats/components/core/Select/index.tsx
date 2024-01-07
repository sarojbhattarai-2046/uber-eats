

import React from 'react'

import { FormElementProps } from '@/types/interfaces'
import { SelectOptionsType } from '@/types/types'

interface SelectProps extends FormElementProps {
    onChange?: (value: string, name: string) => void
    options?: SelectOptionsType[]
}

const Select = ({
    form,
    name,
    label: labelText,
    options,
    onChange,
    validators = [],
    value,
    placeholder,
}: SelectProps) => {

    // const isMounted = useIsMounted()

    const [errors, setErrors] = React.useState<string[]>([])

    React.useEffect(() => {
        if(typeof form !=='undefined') {
            form.bind(name, validate)
        }
    }, [ validators ])

    const validate = (value: string) => {
        // if(!isMounted.current) return undefined
        const errors = validators.map(validator => validator(value))
        setErrors(errors)
        return errors
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        validate(value)
        if(onChange) onChange(value, name)
    }

    const id = `select = ${name}`
    const error = errors[0]


  return (
    <div>
       {labelText ? <label>{labelText}</label> : null} 
       <div className="px-3 border rounded">
        <select className="w-full h-11 outline-none">
            {options?.map(option => (
                <option key={option.value} value={option.value}>{option.name}</option>
            ))}
        </select>
       </div>
    </div>
  )
}

export default Select
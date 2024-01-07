"use client"

import React from 'react'

import Select from "@/components/core/Select";
import Form from "@/components/core/Form";
import TextInput from "@/components/core/TextInput";
import Button from "@/components/core/Button";
import { required } from '@/libs/validators';
import withForm from '@/hoc/withForm';
import { FormType } from '@/types/interfaces';



const loginRoleOptions = [
    { name: 'Admin', value: 'admin' },
    { name: 'User', value: 'user' },
  ]

  interface LoginProps {
    form: FormType
  }
  

const Login = ({ form }: LoginProps) => {

    const [ isSubmitting, setIsSubmitting ] = React.useState<boolean>(false)
    const [ formState, setFormState ] = React.useState({
        username: "",
        password: "",
        loginAs: "admin"
    })

    const handleOnSubmit = async() => {
        setIsSubmitting(true)
        const isValid = await form.validateFields(formState)
        setIsSubmitting(false)
        if(!isValid) return
    }

    const handleOnChange = (value: string, key: string) => {
        setFormState(prev => ({ ...prev, [key]: value }))
    }

  return (
    <Form onSubmit={handleOnSubmit}>
        <TextInput
            type="text"
            name="username"
            placeholder="Email"
            form={form}
            value={formState.username}
            onChange={handleOnChange}
            validators={[ required ]}
        />
        <TextInput
            type="password"
            name="password"
            placeholder="Password"
            form={form}
            value={formState.password}
            onChange={handleOnChange}
            validators={[ required ]}
        />
        <Select
            name="loginAs"
            options={loginRoleOptions}
            form={form}
            value={formState.loginAs}
            onChange={handleOnChange}
        />
        <Button disabled={isSubmitting}>Login</Button>
    </Form>
  )
}

export default withForm(Login)
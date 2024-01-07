interface FormProps {
    onSubmit: () => Promise<any> | void
    children: React.ReactNode
}

const Form = ({ onSubmit, children }: FormProps) => {
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(onSubmit) {
            const response = await onSubmit()
        }
    }

  return (
    <form className={`flex flex-col gap-3 w-full`} onSubmit={handleSubmit}>
        {children}
    </form>
  )
}

export default Form
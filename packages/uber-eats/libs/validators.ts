

export const required = (value: string, message: string = 'Required'): string => {
    let msg = ''
    if(value.trim() === '') msg = message
    console.log(msg)
    return msg
}
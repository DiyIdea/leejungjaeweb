import { ChangeEvent, useState } from 'react'

const useInput = (initialValues: any) => {
    const [values, setValues] = useState(initialValues)
    console.log("여기!!",setValues)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    return [values, onChange]
}

export default useInput
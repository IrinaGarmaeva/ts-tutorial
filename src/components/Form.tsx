import {type FormEvent, type ComponentPropsWithoutRef, useRef} from 'react'

type FormProps =  ComponentPropsWithoutRef<'form'> & {
	onSave: (value: unknown) => void
}

const Form = ({onSave, children, ...otherProps}: FormProps) => {
	const formRef = useRef<HTMLFormElement>(null);
	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const data = Object.fromEntries(formData)
		onSave(data)
	
	  formRef.current?.reset();
	}

	return (
		<form onSubmit={handleSubmit} ref={formRef} {...otherProps}>{children}</form>
	)
}

export default Form
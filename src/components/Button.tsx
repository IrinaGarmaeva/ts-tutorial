import { type ComponentPropsWithoutRef } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {href?: never}
type LinkProps = ComponentPropsWithoutRef<'a'> & {href?: string}

function isLinkProps (props: ButtonProps | LinkProps) : props is LinkProps {
	return 'href' in props
}

const Button = (props: ButtonProps | LinkProps) => {
	if(isLinkProps(props)) {
		return <a className='button' {...props}></a>
	}
	

	return (
		<button className='button' {...props}></button>
	)
}

export default Button
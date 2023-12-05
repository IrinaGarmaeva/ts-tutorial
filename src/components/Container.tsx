import {type ElementType, type ReactNode, type ComponentPropsWithoutRef} from 'react'

type ContainerProps<T extends ElementType> = {
	as?: T,
	children: ReactNode
} & ComponentPropsWithoutRef<T>

const Container = <N extends ElementType>({as, children, ...props}: ContainerProps<N>) => {
	const Component = as || 'div'
	return (
		<Component {...props}>{children}</Component>
	)
}

export default Container
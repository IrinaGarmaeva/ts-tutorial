import React, { ChangeEvent, FC, useState, DragEvent, MouseEvent, useRef } from 'react';

const EventsExample: FC = () => {
	const [value, setValue] = useState<string>('')
	const [isDrag, setIsDrag] = useState<boolean>(false)
	const inputRef = useRef<HTMLInputElement>(null)

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setValue(e.target.value)
	}	

	function handleButtonClick(e: MouseEvent<HTMLButtonElement>) {
		console.log(inputRef.current?.value)
	}

	function dragHandler(e: DragEvent<HTMLDivElement>) {
		console.log('Drag')
	}

	function dragWithPreventHandler(e: DragEvent<HTMLDivElement>) {
		e.preventDefault()
		setIsDrag(true)
	}

	function leaveHandler(e: DragEvent<HTMLDivElement>) {
		e.preventDefault()
		setIsDrag(false)
	}

	function dropHandler(e: DragEvent<HTMLDivElement>) {
		e.preventDefault()
		setIsDrag(false)
	}

	return (
		<div>
			<input type="text" value={value} onChange={handleChange} placeholder='управляемый'/>
			<input type="text" ref={inputRef} placeholder='неуправляемый'/>
			<button onClick={handleButtonClick}>click</button>
			<div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
			<div onDrop={dropHandler} onDragLeave={leaveHandler} onDragOver={dragWithPreventHandler} style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: '20px'}}></div>
		</div>
	)
}

export default EventsExample
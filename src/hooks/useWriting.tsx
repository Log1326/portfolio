import { useEffect, useState } from 'react'

type TUserWritingProps = {
	speed: number
	text: string
}

export const useWriting = ({ text, speed }: TUserWritingProps) => {
	const [displayedText, setDisplayedText] = useState('')
	const [index, setIndex] = useState(0)

	useEffect(() => {
		setDisplayedText('')
		setIndex(0)
	}, [text])

	useEffect(() => {
		if (index < text.length) {
			const timeout = setTimeout(() => {
				setDisplayedText(prev => prev + text[index])
				setIndex(index + 1)
			}, speed)

			return () => clearTimeout(timeout)
		}
	}, [index, text, speed])

	return displayedText
}

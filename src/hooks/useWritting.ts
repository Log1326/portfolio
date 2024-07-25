import { useEffect, useState } from 'react'

type TUserWritingProps = {
	speed: number
	text: string
}
export const useWriting = ({ text, speed }: TUserWritingProps) => {
	const [displayedText, setDisplayedText] = useState<string | null>('')
	useEffect(() => {
		setDisplayedText('')
		let index = 0

		const intervalId = setInterval(() => {
			if (index < text.length - 1) {
				setDisplayedText(prev => prev + text[index])
				index += 1
			} else clearInterval(intervalId)
		}, speed)
		return () => clearInterval(intervalId)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [text, speed])
	return displayedText
}

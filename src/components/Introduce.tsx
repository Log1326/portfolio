import { useWriting } from '@/hooks/useWritting'
const TEXT: string = `  Experienced Software Developer specializing in full-stack web
				development with a strong pro ciency in JavaScript, React NextJ NodeJS
				NestJS, and databases. Skilled professional with a robust background in
				software engineering. Passionate about building scalable and secure
				applications, leveraging Agile methodologies and continuous integration
				practices. Detail- oriented problem solver with expertise in
				object-oriented programming and a proven ability to collaborate
				effectively in cross- functional teams. Seeking to contribute to
				innovative projects and drive technological advancements in my next
				role.`
const SPEED = 15
export const Introduce = () => {
	const displayText = useWriting({ speed: SPEED, text: TEXT })
	return (
		<div className='flex flex-col items-center justify-center'>
			<strong className='text-3xl text-center w-full py-4'>Introduction</strong>
			<p className='w-[70%]'>{displayText}</p>
		</div>
	)
}

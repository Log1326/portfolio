import { useWriting } from '@/hooks/useWriting'

const TEXT = `
Experienced Full-Stack Developer with strong proficiency in JavaScript, React, Next.js, Node.js, NestJS, and relational/non-relational databases.
Skilled in building scalable, secure, and user-friendly applications using modern frameworks and tools.
Background in software engineering, with hands-on experience applying Agile methodologies, TDD, and CI/CD pipelines.
Detail-oriented and analytical, with solid expertise in object-oriented programming and a proven ability to collaborate effectively in cross-functional teams.
Eager to contribute to innovative, impactful projects and help drive technological progress in a fast-paced development environment.
`
const SPEED = 15

export const Introduce = () => {
	const displayText = useWriting({ speed: SPEED, text: TEXT })
	return (
		<div className='cursor-not-allowed select-none flex flex-col items-start justify-center px-4 w-4/5 mx-auto'>
			<strong className='text-3xl text-center w-full py-4'>Introduction</strong>
			<p className='min-h-[9rem] whitespace-pre-wrap text-start'>
				{displayText}
			</p>
		</div>
	)
}

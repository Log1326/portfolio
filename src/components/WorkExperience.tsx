import native from '@/assets/Group 1935.svg'
import nest from '@/assets/NestJS.svg'
import next from '@/assets/Icons.svg'
import react from '@/assets/Group 1938.svg'
import { useWriting } from '@/hooks/useWriting'
const TEXT_NEST: string =
	'  Nest JS is a progressive Node.js framework for building efficient and scalable server-side applications using TypeScript'
const TEXT_NEXT: string =
	'  Next.js is a React framework that enables server-side rendering and static site generation for building highly optimized web applications.'
const TEXT_REACT: string =
	'  React is a popular JavaScript library for building user interfaces, particularly single-page applications, using a component-based architecture.	'
const TEXT_NATIVE: string =
	'  React Native is a framework for building cross-platform mobile applications using JavaScript and React.'

const SPEED = 30
export const WorkExperience = () => {
	const displayReact = useWriting({ speed: SPEED, text: TEXT_REACT })
	const displayNext = useWriting({ speed: SPEED, text: TEXT_NEXT })
	const displayNest = useWriting({ speed: SPEED, text: TEXT_NEST })
	const displayNative = useWriting({ speed: SPEED, text: TEXT_NATIVE })
	return (
		<div className=' elect-none w-full flex flex-col items-center justify-center'>
			<strong className='text-3xl text-center w-full py-4'>
				Work Experience
			</strong>
			<div className='bg-background grid grid-cols-1 lg:grid-cols-2 gap-4'>
				<div className='flex flew-row items-center gap-4'>
					<img className='w-40 h-40' src={react} alt='react-text' />
					<p className='w-80'>{displayReact}</p>
				</div>
				<div className='flex flew-row items-center gap-4'>
					<img className='w-40 h-40' src={next} alt='next-text' />
					<p className='w-80'>{displayNext}</p>
				</div>
				<div className='flex flew-row items-center gap-4'>
					<img className='w-40 h-40' src={nest} alt='nest-text' />
					<p className='w-80'>{displayNest}</p>
				</div>
				<div className='flex flew-row items-center gap-4'>
					<img className='w-40 h-40' src={native} alt='native-text' />
					<p className='w-80'>{displayNative}</p>
				</div>
			</div>
		</div>
	)
}

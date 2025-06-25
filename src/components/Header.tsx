import me from '@/assets/Me.svg'
import { Button } from './ui/button'

export const Header = () => {
	return (
		<div className='flex justify-center items-center pt-20 '>
			<div className='h-full'>
				<p className='text-center'>Like a developer</p>
				<img src={me} alt='me' />
			</div>
			<div className='flex flex-col justify-between h-32 '>
				<div>
					<p>Hello! I am Pavel Motovilov</p>
					<p>I am a software developer with 6 years of experience.</p>
				</div>
				<Button variant='secondary' asChild>
					<a
						href='https://github.com/Log1326'
						target='_blank'
						rel='noopener noreferrer'
					>
						GitHub Repo
					</a>
				</Button>
			</div>
		</div>
	)
}

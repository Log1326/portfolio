import me from '@/assets/Me.svg'

export const Header = () => {
	return (
		<div className='flex justify-center items-center pt-20'>
			<div>
				<p className='text-center'>Like a developer</p>
				<img src={me} alt='me' />
			</div>
			<div>
				<div>Hello! I am Pavel Motovilov</div>
				<div>I am a software developer with 5 years of experience.</div>
			</div>
		</div>
	)
}

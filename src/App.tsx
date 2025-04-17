import { useCallback, useEffect, useState } from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { Drawer, DrawerContent, DrawerTrigger } from './components/ui/drawer'

import Skills from '@/assets/Skills.svg'
import { Pointer } from 'lucide-react'
import { FeedbackForm } from './components/Feedback'
import { Header } from './components/Header'
import { Introduce } from './components/Introduce'
import { MainFocus } from './components/MainFocus'
import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'
import { Button } from './components/ui/button'
import { WorkExperience } from './components/WorkExperience'
import { useWindowWidth } from './hooks/useWidth'
import { cn } from './lib/utils'

function App() {
	const windowWidth = useWindowWidth()
	const isSmallScreen = windowWidth < 600
	const isMediumScreen = windowWidth >= 600 && windowWidth < 900
	const [showHint, setShowHint] = useState(false)
	const [cursorPosition, setCursorPosition] = useState({ x: '0', y: '50%' })
	const [animationFinished, setAnimationFinished] = useState(false)
	const startCursorAnimation = useCallback(() => {
		const button = document.getElementById('download-button')
		if (button) {
			const rect = button.getBoundingClientRect()
			const buttonCenterX = Math.round(rect.x - rect.width)
			const buttonCenterY = Math.round(rect.y + rect.height + 20)
			const animateCursor = () =>
				setCursorPosition(() => ({
					x: `${buttonCenterX}px`,
					y: `${buttonCenterY}px`
				}))

			if (!animationFinished) requestAnimationFrame(animateCursor)
			setTimeout(() => {
				setAnimationFinished(false)
			}, 3000)
		}
	}, [animationFinished])
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowHint(true)
			startCursorAnimation()
		}, 1000)

		return () => clearTimeout(timer)
	}, [startCursorAnimation])
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<div
				onClick={() => setShowHint(false)}
				className={cn({
					'fixed inset-0 z-10 bg-black/90 ': showHint
				})}
			/>
			{showHint && (
				<div
					className={cn(
						showHint &&
							'fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-50'
					)}
					aria-hidden={showHint}
				>
					<div
						className={`absolute top-[-10%] left-[10%] text-primary text-sm animate-fall duration-1000 delay-1000 ease-linear`}
					>
						❄️
					</div>
					<div
						className={`absolute top-[-10%] left-[30%] text-primary text-sm animate-fall duration-700 delay-500 ease-linear`}
					>
						❄️
					</div>
					<div
						className={`absolute top-[-10%] left-[40%] text-primary text-sm animate-fall duration-1000 delay-500 ease-linear`}
					>
						❄️
					</div>
					<div
						className={`absolute top-[-10%] left-[60%] text-primary text-sm animate-fall duration-500 delay-1000 ease-linear`}
					>
						❄️
					</div>
					<div
						className={`absolute top-[-10%] left-[80%] text-primary text-sm animate-fall duration-700 delay-1000 ease-linear`}
					>
						❄️
					</div>
				</div>
			)}

			{showHint && (
				<div
					className={cn(
						'text-white bg-emerald-300 p-10 shadow-lg shadow-emerald-300/50 hover:shadow-emerald-300/100 transition-all z-50 absolute w-72 h-20 flex justify-center items-center gap-4 rounded-xl border cursor-pointer'
					)}
					style={{
						left: cursorPosition.x,
						top: cursorPosition.y,
						transition: 'left 1s ease, top 1s ease'
					}}
				>
					<p className='brightness-200'>Don&apos;t forget to download cv</p>
					<Pointer size={40} />
				</div>
			)}

			<div className='absolute top-10 right-10 flex items-center  bg-background'>
				<a
					href='/Pavel_M_CV.pdf'
					download='Pavel_M_CV.pdf'
					id='download-button'
				>
					<Button variant='outline' className='text-primary'>
						Download cv
					</Button>
				</a>

				<ModeToggle />
			</div>

			<ParallaxProvider>
				<div className='bg-background flex flex-col items-center gap-20 text-text min-h-screen w-full'>
					<Parallax
						translateY={
							isSmallScreen ? [0, 5] : isMediumScreen ? [0, 10] : [0, 20]
						}
					>
						<Header />
						<Introduce />
					</Parallax>
					<Parallax
						className={cn(
							'flex items-center justify-center bg-background w-full mb-40 relative',
							{
								'mt-40': isMediumScreen
							}
						)}
						translateY={isMediumScreen ? [160, 50] : [100, 40]}
					>
						<Button
							onClick={() =>
								window.open(
									'https://66f28a8b3e2f51d89c0723be--deluxe-crostata-97c822.netlify.app/',
									'_blank'
								)
							}
							variant='link'
							className='absolute right-32 -top-10'
						>
							Open game
						</Button>
						<iframe
							src='https://66f28a8b3e2f51d89c0723be--deluxe-crostata-97c822.netlify.app/'
							width={windowWidth * 0.8}
							height='600'
							style={{ border: 'none', borderRadius: '15px' }}
						/>
					</Parallax>
					<Parallax
						className={cn({ isSmallScreen: 'mb-40' })}
						scale={
							isSmallScreen ? [0, 1.1] : isMediumScreen ? [0, 1.2] : [0.9, 1.2]
						}
						translateY={
							isSmallScreen ? [0, 20] : isMediumScreen ? [50, 10] : [50, 10]
						}
					>
						<WorkExperience />
					</Parallax>
					{!isSmallScreen && (
						<Parallax
							translateY={
								isSmallScreen ? [10, 30] : isMediumScreen ? [5, 30] : [0, 40]
							}
						>
							<MainFocus />
						</Parallax>
					)}
					<Parallax
						className={cn('flex  justify-center bg-background w-full', {
							'mt-80': isMediumScreen
						})}
						translateY={isMediumScreen ? [160, 50] : [100, 40]}
					>
						<img src={Skills} alt='skills' />
					</Parallax>

					<Parallax
						startScroll={-100}
						speed={isSmallScreen ? 5 : isMediumScreen ? 7 : 11}
						rotate={
							isSmallScreen ? [0, 50] : isMediumScreen ? [0, 1200] : [0, 1200]
						}
						translateX={
							isSmallScreen
								? [-500, 500]
								: isMediumScreen
									? [-300, 900]
									: [-700, 1100]
						}
					>
						<Drawer>
							<DrawerTrigger>
								<Button
									type='button'
									className='text-xl z-50'
									variant='outline'
								>
									Leave a feedback
								</Button>
							</DrawerTrigger>
							<DrawerContent className='flex justify-center items-center'>
								<FeedbackForm />
							</DrawerContent>
						</Drawer>
					</Parallax>
				</div>
			</ParallaxProvider>
		</ThemeProvider>
	)
}

export default App

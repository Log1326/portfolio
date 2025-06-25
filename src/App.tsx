import { useCallback, useEffect, useState } from 'react'
import { Drawer, DrawerContent, DrawerTrigger } from './components/ui/drawer'

import Skills from '@/assets/Skills.svg'
import { Pointer } from 'lucide-react'
import { FeedbackForm } from './components/Feedback'
import { Header } from './components/Header'
import { Introduce } from './components/Introduce'
import { MainFocus } from './components/MainFocus'
import { ThemeProvider } from './components/theme-provider'
import { Button } from './components/ui/button'
import { WorkExperience } from './components/WorkExperience'
import { useWindowWidth } from './hooks/useWidth'
import { cn } from './lib/utils'

function App() {
	const windowWidth = useWindowWidth()
	const isSmallScreen = windowWidth < 600
	const [showHint, setShowHint] = useState(false)
	const [cursorPosition, setCursorPosition] = useState({ x: '0', y: '50%' })
	const [animationFinished, setAnimationFinished] = useState(false)
	const startCursorAnimation = useCallback(() => {
		const button = document.getElementById('download-button')
		if (button) {
			const rect = button.getBoundingClientRect()
			const buttonCenterX = Math.round(rect.x - rect.width - 40)
			const buttonCenterY = Math.round(rect.y + rect.height + 10)
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
			<div className='flex bg-background flex-col gap-10 overflow-x-hidden py-4 px-2 md:px-10'>
				<div className='flex justify-end items-center bg-background'>
					<div className='flex items-center gap-2'>
						<Drawer>
							<DrawerTrigger>
								<Button
									type='button'
									className='md:text-xl text-xs z-50'
									variant='outline'
								>
									Leave a feedback
								</Button>
							</DrawerTrigger>
							<DrawerContent className='flex justify-center items-center'>
								<FeedbackForm />
							</DrawerContent>
						</Drawer>
						<a
							href='/Pavel_M_CV.pdf'
							download='Pavel_M_CV.pdf'
							id='download-button'
						>
							<Button variant='outline' className='text-primary'>
								Download cv
							</Button>
						</a>
					</div>
				</div>

				<Header />
				<Introduce />

				<div className='flex w-full flex-col items-start justify-center p-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl gap-4 bg-white dark:bg-zinc-900 shadow-sm'>
					<p className='text-zinc-700 dark:text-zinc-300'>
						An interactive typing experience with a virtual keyboard and smart
						input. Type a 5-letter word — valid words are highlighted in{' '}
						<span className='text-green-600 font-medium'>green</span>, , invalid
						ones in <span className='text-red-600 font-medium'>red</span>. Great
						for quick vocabulary checks or typing practice.
					</p>
					<Button
						onClick={() =>
							window.open(
								'https://wondrous-daifuku-eb831f.netlify.app/',
								'_blank'
							)
						}
					>
						🔗 Open Project
					</Button>
				</div>
				<div className='flex w-full flex-col items-start justify-center p-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl gap-4 bg-white dark:bg-zinc-900 shadow-sm'>
					<h2 className='text-xl font-semibold text-zinc-900 dark:text-white'>
						📦 QR Code Recipes — Fullstack Platform Built with Next.js
					</h2>
					<p className='text-zinc-700 dark:text-zinc-300'>
						An interactive platform for creating recipes with customizable
						parameters and generating QR codes.
						<br />
						Integrations: Telegram bot, Kanban board, order map, analytics,
						calendar.
						<br />
						Technologies:{' '}
						<span className='font-medium'>
							Next.js App Router, Tailwind CSS, React Query, Socket.IO, Leaflet,
							Telegram API, Vercel Blob
						</span>
						.
					</p>
					<button
						onClick={() =>
							window.open('https://qr-code-six-blush.vercel.app', '_blank')
						}
						className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors'
					>
						🔗 Open Project
					</button>
				</div>
				<div className='flex flex-col items-end'>
					<Button
						onClick={() =>
							window.open(
								'https://deluxe-crostata-97c822.netlify.app/',
								'_blank'
							)
						}
						variant='link'
						className=''
					>
						Open game
					</Button>
					<iframe
						src='https://deluxe-crostata-97c822.netlify.app'
						className='w-full h-[39rem] rounded-xl'
					/>
				</div>

				<WorkExperience />

				{!isSmallScreen && <MainFocus />}

				<img src={Skills} alt='skills' />
			</div>
		</ThemeProvider>
	)
}

export default App

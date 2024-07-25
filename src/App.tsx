import { Drawer, DrawerContent, DrawerTrigger } from './components/ui/drawer'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

import { Button } from './components/ui/button'
import { FeedbackForm } from './components/Feedback'
import { Header } from './components/Header'
import { Introduce } from './components/Introduce'
import { MainFocus } from './components/MainFocus'
import { ModeToggle } from './components/mode-toggle'
import Skills from '@/assets/Skills.svg'
import { ThemeProvider } from './components/theme-provider'
import { WorkExperience } from './components/WorkExperience'
import { cn } from './lib/utils'
import { useWindowWidth } from './hooks/useWidth'

function App() {
	const windowWidth = useWindowWidth()
	const isSmallScreen = windowWidth < 600
	const isMediumScreen = windowWidth >= 600 && windowWidth < 900
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<div className='flex justify-end bg-background'>
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

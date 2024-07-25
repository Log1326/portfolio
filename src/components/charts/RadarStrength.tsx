import { TrendingUp } from 'lucide-react'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from '@/components/ui/chart'
const chartData = [
	{ month: 'React', desktop: 90 },
	{ month: 'NextJS', desktop: 60 },
	{ month: 'NodeJS', desktop: 60 },
	{ month: 'NestJS', desktop: 80 },
	{ month: 'React-Native', desktop: 70 }
]

const chartConfig = {
	desktop: {
		label: 'Improving per cent',
		color: 'hsl(var(--chart-1))'
	}
} satisfies ChartConfig

export const RadarStrenght = () => {
	return (
		<Card className='h-96 w-[22rem]'>
			<CardHeader className='items-center pb-4'>
				<CardTitle>Radar Chart - Strenght</CardTitle>
			</CardHeader>
			<CardContent className='pb-0'>
				<ChartContainer
					config={chartConfig}
					className='mx-auto aspect-square w-[16rem]'
				>
					<RadarChart data={chartData}>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent additionalString='%' hideLabel />}
						/>
						<PolarGrid className='fill-[--color-desktop] opacity-20' />
						<PolarAngleAxis dataKey='month' />
						<Radar
							dataKey='desktop'
							fill='var(--color-desktop)'
							fillOpacity={0.5}
						/>
					</RadarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className='flex-col gap-2 text-sm'>
				<div className='flex items-center gap-2 font-medium leading-none'>
					Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
				</div>
				<div className='flex items-center gap-2 leading-none text-muted-foreground'>
					January - June 2024
				</div>
			</CardFooter>
		</Card>
	)
}

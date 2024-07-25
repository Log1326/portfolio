import { Label, Pie, PieChart } from 'recharts'

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
import { useMemo } from 'react'
const chartData = [
	{ tech: 'react', users: 25, fill: 'var(--color-react)' },
	{ tech: 'nextjs', users: 2, fill: 'var(--color-nextjs)' },
	{ tech: 'node', users: 20, fill: 'var(--color-node)' },
	{ tech: 'nestjs', users: 0.5, fill: 'var(--color-nestjs)' },
	{ tech: 'react-native', users: 2, fill: 'var(--color-react-native)' }
]

const chartConfig = {
	tech: {
		label: 'Tech'
	},
	'react-native': {
		label: 'React-native',
		color: 'hsl(var(--chart-1))'
	},
	nestjs: {
		label: 'NestJS',
		color: 'hsl(var(--chart-2))'
	},
	node: {
		label: 'Node',
		color: 'hsl(var(--chart-3))'
	},
	nextjs: {
		label: 'NextJS',
		color: 'hsl(var(--chart-4))'
	},
	react: {
		label: 'React',
		color: 'hsl(var(--chart-5))'
	}
} satisfies ChartConfig

export const PieChartWithTech = () => {
	const totalUsers = useMemo(() => {
		return chartData.reduce((acc, curr) => acc + curr.users, 0)
	}, [])

	return (
		<Card className='flex flex-col h-96 w-[22rem]'>
			<CardHeader className='items-center pb-0'>
				<CardTitle className='text-xl '>Technologies</CardTitle>
			</CardHeader>
			<CardContent className='flex-1 pb-0'>
				<ChartContainer
					config={chartConfig}
					className='mx-auto aspect-square max-w-[16rem]'
				>
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel additionalString='m' />}
						/>
						<Pie
							data={chartData}
							dataKey='users'
							nameKey='tech'
							innerRadius={60}
							strokeWidth={5}
						>
							<Label
								content={({ viewBox }) => {
									if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor='middle'
												dominantBaseline='middle'
											>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className='fill-foreground text-3xl font-bold text-text'
												>
													{totalUsers.toLocaleString()}m
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className='fill-muted-foreground'
												>
													Tech
												</tspan>
											</text>
										)
									}
								}}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className='flex-col gap-2 text-sm'>
				<div className='leading-none text-muted-foreground'>
					All the technologies that are trending now
				</div>
			</CardFooter>
		</Card>
	)
}

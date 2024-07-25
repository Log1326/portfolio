'use client'

import { GitCommitVertical } from 'lucide-react'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from '@/components/ui/chart'
const chartData = [
	{ month: 'January', desktop: 186, mobile: 80 },
	{ month: 'February', desktop: 270, mobile: 200 },
	{ month: 'March', desktop: 237, mobile: 120 },
	{ month: 'April', desktop: 140, mobile: 190 },
	{ month: 'May', desktop: 209, mobile: 130 },
	{ month: 'June', desktop: 214, mobile: 140 }
]

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: 'hsl(var(--chart-1))'
	},
	mobile: {
		label: 'Mobile',
		color: 'hsl(var(--chart-2))'
	}
} satisfies ChartConfig

export const LineChartWithDots = () => {
	return (
		<Card className='h-96 w-[30rem]'>
			<CardHeader>
				<CardTitle>Line Chart - Custom Dots</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer className='w-[28rem]' config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='month'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={value => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Line
							dataKey='desktop'
							type='natural'
							stroke='var(--color-desktop)'
							strokeWidth={2}
							dot={({ cx, cy, payload }) => {
								const r = 24
								return (
									<GitCommitVertical
										key={payload.month}
										x={cx - r / 2}
										y={cy - r / 2}
										width={r}
										height={r}
										fill='hsl(var(--background))'
										stroke='var(--color-desktop)'
									/>
								)
							}}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}

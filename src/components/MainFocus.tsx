import { useState } from 'react'
import { DraggableGrid } from './DraggableGrid'

export const MainFocus = () => {
	const [items, setItems] = useState<string[]>([
		'PieChartWithTech',
		'LineChartWithBrowsers',
		'LineChartWithDataMobileAndDesktop',
		'RadarStrenght',
		'LineChartWithDots',
		'LineChartWithCondition'
	])

	return (
		<div>
			<p className='text-center text-3xl py-4'>Draggble chart</p>
			<DraggableGrid items={items} setItems={setItems} />
		</div>
	)
}

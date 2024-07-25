import { LineChartWithBrowsers } from './charts/LineChartWithBrowser'
import { LineChartWithCondition } from './charts/LineChartWithCondition'
import { LineChartWithDataMobileAndDesktop } from './charts/LineChartWithDataMobileAndDesktop'
import { LineChartWithDots } from './charts/LineChartWithDots'
import { PieChartWithTech } from './charts/PieChartWithTech'
import { RadarStrenght } from './charts/RadarStrength'

export const componentsMapping: Record<string, React.ReactNode> = {
	PieChartWithTech: <PieChartWithTech />,
	LineChartWithBrowsers: <LineChartWithBrowsers />,
	LineChartWithDataMobileAndDesktop: <LineChartWithDataMobileAndDesktop />,
	RadarStrenght: <RadarStrenght />,
	LineChartWithDots: <LineChartWithDots />,
	LineChartWithCondition: <LineChartWithCondition />
}

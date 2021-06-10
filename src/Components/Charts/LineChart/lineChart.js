import { ResponsiveLine } from '@nivo/line'
const colors = [
    '#82D197',
    '#FFCF5C',
    '#F57272',
]

const MyLineChart = ({ data }) => (
    <ResponsiveLine
        colors={colors}
        data={data}
        margin={{ top: 30, right: 60, bottom: 80, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
    />
)

export default MyLineChart
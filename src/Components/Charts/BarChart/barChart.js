import { ResponsiveBar } from '@nivo/bar'
const colors = [
    '#82D197',
    '#FFCF5C',
    '#F57272',
]

const MyResponsiveBar = ({data}) => (
    <ResponsiveBar
        data={data}
        keys={[ 'baixa', 'média', 'alta' ]}
        indexBy="local"
        margin={{ top: 50, right: 60, bottom: 70, left: 60 }}
        padding={0.3}
        colors={colors}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        axisTop={null}
        axisRight={null}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
)
export default MyResponsiveBar;
import React from 'react';
import {
	ResponsiveContainer,
	LineChart,
	Line,
	YAxis,
	Tooltip,
	Legend,
	XAxis,
} from 'recharts';
import colors from '../../utils/colors';

import './style.scss';

type IProps = {
	data: any[];
	dataKey: string;
	unit: string;
};

function Chart({ data, dataKey, unit }: IProps) {
	return (
		<div className="chart">
			<ResponsiveContainer width="100%" height="100%">
				<LineChart data={data}>
					<Line type="monotone" dataKey={dataKey} stroke={colors.secondary} />
					<YAxis unit={unit} />
					<Tooltip
						contentStyle={{ backgroundColor: colors.gray, border: 'none' }}
					/>
					<Legend />
					<XAxis hide dataKey="name" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

export default Chart;

import { useBookingsQuery, useServicesQuery } from '@graphql/history/history';
import { Stack, Typography } from '@mui/material';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fontStyles } from '../styles/styles';

const data = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100
  },
  {
    name: 'Page F',
    uv: 1400,
    numServices: 680,
    amt: 1700
  }
];
export interface Props {}

/**
 * formats valueHistory data to format best fit for AreaChart
 * @param data
 * @returns
 */
const getFormattedValueHistoryData = (servicesData: { value: number; date: string }[], bookingsData: { value: number; date: string }[]) => {
  console.log(
    'history',
    servicesData.map(({ value, date }, index) => {
      console.log('date', date);

      if (bookingsData.length > index) {
        return { date: new Date(date).toDateString(), numServices: value, numBookings: bookingsData[index].value };
      }
    })
  );

  return servicesData.map(({ value, date }, index) => {
    if (bookingsData.length > index) {
      return { date: new Date(date).toDateString().replace(/^\S+\s/, ''), numServices: value, numBookings: bookingsData[index].value };
    }
  });
};

const BookingsAndServicesHistoryChart: React.FC<Props> = (props) => {
  const { data: servicesData } = useServicesQuery();
  const { data: bookingsData } = useBookingsQuery();

  if (!servicesData || !servicesData.services) {
    return <>Loading</>;
  }

  if (!bookingsData || !bookingsData.bookings) {
    return <>Loading</>;
  }

  return (
    <Stack
      style={{
        width: '100%',
        height: '350px'
      }}
    >
      <Typography
        display="inline"
        style={{
          ...fontStyles.avenirBold,
          fontSize: 16,
          marginBottom: '20px'
        }}
      >
        Bookings and Services by Date
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={380}
          height={300}
          data={getFormattedValueHistoryData(servicesData.services.history, bookingsData.bookings.history)}
          margin={{
            top: 20,
            right: 80,
            bottom: 20
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="date"
            label={{
              value: 'Date of Service/Booking',
              position: 'insideBottomRight',
              offset: -15
            }}
            scale="band"
          ></XAxis>
          <YAxis
            label={{
              value: 'Jobs Serviced | Bookings made',
              angle: -90,
              position: 'insideLeft'
            }}
          />
          <Tooltip />
          <Legend
            verticalAlign="top"
            formatter={(value: any, _: any) => (
              <Typography display="inline" style={{ ...fontStyles.avenirRegular }}>
                {value == 'numServices' ? 'Jobs Serviced' : 'Acres Serviced'}
              </Typography>
            )}
          />
          <Bar dataKey="numBookings" barSize={20} fill="#0074f9" />
          <Line type="linear" dataKey="numServices" stroke="#00bcd0" dot={false} strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
    </Stack>
  );
};

export default BookingsAndServicesHistoryChart;

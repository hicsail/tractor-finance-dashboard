import { useBookingsAndServicesQuery } from '@graphql/history/history';
import { Stack, Typography } from '@mui/material';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fontStyles } from '@styles/styles';

/**
 * formats valueHistory data to format best fit for AreaChart
 * @param data
 * @returns
 */
const getFormattedValueHistoryData = (servicesData: { value: number; date: string }[], bookingsData: { value: number; date: string }[]) => {
  return servicesData.map(({ value, date }, index) => {
    if (bookingsData.length > index) {
      //replace(/^\S+\s/, '') removes day from date string
      return { date: new Date(date).toDateString().replace(/^\S+\s/, ''), numServices: value, numBookings: bookingsData[index].value };
    }
  });
};

const BookingsAndServicesHistoryChart: React.FC = () => {
  const { data } = useBookingsAndServicesQuery();

  if (!data || !data.bookingsAndServices) {
    return <>Loading</>;
  }

  if (!data.bookingsAndServices.bookings || !data.bookingsAndServices.services) {
    return <>No data found</>;
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
          data={getFormattedValueHistoryData(data.bookingsAndServices.services.history, data.bookingsAndServices.bookings.history)}
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

import { FC } from 'react';
import { useAuth } from '@context/auth.context';
import { Avatar, Box, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import { DefaultCopyField } from '@components/molecules/CopyField';
import { Form, Formik } from 'formik';
import { TextInput } from '@components/forms/text-input';
import { SubmitButton } from '@components/forms/submit-button';
import * as Yup from 'yup';

const ProfileUpdateSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required')
});

export const Profile: FC = () => {
  const { user, setUser } = useAuth();

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Stack direction={{ xs: 'column', md: 'row' }}>
          <Avatar
            src={user?.photo || ''}
            sx={{
              height: 160,
              width: 160,
              marginRight: 2,
              backgroundColor: 'primary.main',
              border: '2px solid #aaa'
            }}
          />
          <Stack>
            <Box
              sx={{
                marginBottom: 2
              }}
            >
              <Typography variant="h5">{user?.name}</Typography>
              <Typography variant="h6">{user?.email}</Typography>
            </Box>
            <Typography variant="subtitle1">Referral Code</Typography>
            <DefaultCopyField value={user?.referralCode} />
          </Stack>
        </Stack>
        <Card
          sx={{
            marginTop: 4,
            width: 1
          }}
        >
          <CardContent>
            <Formik
              initialValues={{
                name: user?.name,
                email: user?.email,
                phone: user?.phone
              }}
              validationSchema={ProfileUpdateSchema}
              enableReinitialize={true}
              onSubmit={(values, formikHelpers) => {
                setUser({ ...user, ...values });
                formikHelpers.setSubmitting(false);
              }}
            >
              <Form>
                <Stack spacing={2}>
                  <Typography>Update your Profile</Typography>
                  <TextInput margin="normal" required fullWidth name="name" label="Full Name" autoComplete="fullName" />
                  <TextInput margin="normal" required fullWidth name="email" type="email" label="Email" autoComplete="email" />
                  <TextInput margin="normal" required fullWidth name="phone" type="phone" label="Phone" autoComplete="phone" />
                  <SubmitButton variant="contained">Update</SubmitButton>
                </Stack>
              </Form>
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

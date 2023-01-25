import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from '@pages/dashboard';
import { GraphqlProvider } from '@graphql/graphql-provider';
import { Login } from '@pages/login';
import { ThemeProvider } from '@theme/theme.provider';
import { SettingsProvider } from '@context/settings.context';
import { Paths } from '@constants/paths';
import { Profile } from '@pages/profile';
import { AuthProvider } from '@context/auth.context';

function App() {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <GraphqlProvider>
          <AuthProvider>
            <Router>
              <Routes>
                <Route path={Paths.Profile} element={<Profile />} />
                <Route path={Paths.Login} element={<Login />} />
                <Route path={Paths.Home} element={<Dashboard />} />
              </Routes>
            </Router>
          </AuthProvider>
        </GraphqlProvider>
      </ThemeProvider>
    </SettingsProvider>
  );
}

export default App;

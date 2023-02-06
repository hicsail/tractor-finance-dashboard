import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from '@pages/dashboard';
import { GraphqlProvider } from '@graphql/graphql-provider';
import { Login } from '@pages/login';
import { ThemeProvider } from '@theme/theme.provider';
import { SettingsProvider } from '@context/settings.context';
import { Paths } from '@constants/paths';
import { Profile } from '@pages/profile';
import { AuthProvider } from '@context/auth.context';
import MainLayout from '@components/layout/MainLayout';
import routes from './routes';

function App() {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <GraphqlProvider>
          <AuthProvider>
            <Router>
              <Routes>
                <Route path={Paths.Home} element={<MainLayout />}>
                  {routes}
                </Route>
              </Routes>
            </Router>
          </AuthProvider>
        </GraphqlProvider>
      </ThemeProvider>
    </SettingsProvider>
  );
}

export default App;

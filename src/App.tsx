import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from '@pages/dashboard';
import { GraphqlProvider } from '@graphql/graphql-provider';
import { Login } from '@pages/login';
import { ThemeProvider } from '@theme/theme.provider';
import { SettingsProvider } from '@context/settings.context';
import MainLayout from '@components/layout/MainLayout';
import routes from './routes';

function App() {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <GraphqlProvider>
          <Router>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                {routes}
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </GraphqlProvider>
      </ThemeProvider>
    </SettingsProvider>
  );
}

export default App;

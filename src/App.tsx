import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from '@pages/dashboard';
import { GraphqlProvider } from '@graphql/graphql-provider';
import { Login } from '@pages/login';
import { ThemeProvider } from '@theme/theme.provider';
import { SettingsProvider } from '@context/settings.context';

function App() {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <GraphqlProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </GraphqlProvider>
      </ThemeProvider>
    </SettingsProvider>
  );
}

export default App;

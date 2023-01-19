import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from '@pages/dashboard';
import { GraphqlProvider } from '@graphql/graphql-provider';
import { Login } from '@pages/login';

function App() {
  return (
    <GraphqlProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </GraphqlProvider>
  );
}

export default App;

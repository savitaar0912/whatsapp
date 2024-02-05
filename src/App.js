import './App.css';
import Messenger from './compnents/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId='821752939542-8gru1g7n8clf51gg5ntn7v7f8e48j61f.apps.googleusercontent.com'>
        <Messenger />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;

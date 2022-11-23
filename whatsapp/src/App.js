
import { Messanger } from './components/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AccProvider } from './context/Provider';

function App() {
  const id = "558297196514-872f7ab71lodqveg9f6usi66eig28uec.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={id}>
      <AccProvider>
        <Messanger />
      </AccProvider>
    </GoogleOAuthProvider>
  );
}

export default App;

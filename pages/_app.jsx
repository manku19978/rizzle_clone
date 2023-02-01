import NavBar from '../components/NavBar/NavBar';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => (
  <>
    <NavBar />
    <Component {...pageProps} />
  </>
);

export default App;

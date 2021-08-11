  
import { BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './pages/Landing';

function Routes(){
    return(
      <BrowserRouter>
        <Route path="/landing" exact component={LandingPage} />
      </BrowserRouter>
    );
}

export default Routes;
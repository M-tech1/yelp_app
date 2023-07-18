import { Amplify } from "aws-amplify";
import "./App.scss";
import { Authenticator} from "@aws-amplify/ui-react";
import Landing from './components/Home';
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateNewRestaurant from "./components/Restaurant";
Amplify.configure(awsExports);

function App() {
  const components = {
    Header() {
      return (
      <header/>
      );
    }
  }  
  return (
    <Authenticator components={components} >
      {({ signOut }) => (
          <div>
            <BrowserRouter>
            <Landing signOut={signOut} />
              <Routes>
                <Route path="/account" element={<CreateNewRestaurant/>} />
              </Routes>
             </BrowserRouter>
            <CreateNewRestaurant/>
          </div>
          
      )}
    </Authenticator>
  );
}
export default App;
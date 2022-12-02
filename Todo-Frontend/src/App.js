

import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";
import { AppWrapper } from "./styles/app.styled";


function App() {
  return (
      <AppWrapper>
      <Navbar/>
        <AllRoutes/>
      </AppWrapper>
 
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import CustomRoutes from "./utils/CustomRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <CustomRoutes />
    </BrowserRouter>
  );
}

export default App;

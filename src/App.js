import './App.css';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import swaggerJson from "./swagger.json"

function App() {
  return (
    <SwaggerUI spec={swaggerJson} />
  );
}

export default App;

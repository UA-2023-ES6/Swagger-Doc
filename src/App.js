import logo from './logo.svg';
import './App.css';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function App() {
  return (
    <div className="App">
      <SwaggerUI url="/webApi/swagger.json" />
      </div>
  );
}

export default App;

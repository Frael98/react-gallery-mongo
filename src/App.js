import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ImageForm from "./pages/imageForm";
import ImageDetails from "./pages/imageDetails";
import ImageGallery from "./pages/imageGallery";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="bg-dark text-light">
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route path="/" component={ImageGallery} exact />
          <Route path="/upload" component={ImageForm} exact />
          <Route path="/images/:id" component={ImageDetails} exact />
        </Switch>
      </div>
    </div>
  );
}

export default App;

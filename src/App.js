import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route exact path="/" element={<h1>hello</h1>} />
          <Route path="/users" />
          <Route path="/:userId/podcasts" />
          <Route path="/addpodcast/new" />
          <Route path="/auth" element={<h1>hello</h1>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

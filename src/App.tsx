import React, { FC } from "react";
import Users from "./modules/users";
import { Switch, Route } from "react-router-dom";
import Comments from "./modules/comments";

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/" exact render={() => <Users />} />
          <Route path="/comments/:id" exact render={() => <Comments />} />
        </Switch>
      </header>
    </div>
  );
};

export default App;

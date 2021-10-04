import "./App.css";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import UserList from "./components/UserList/UserList";
import AddUsers from "./components/AddUsers/AddUsers";
import EditUser from "./components/EditUser/EditUser";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/add-user" component={AddUsers} />
        <Route exact path="/edit-user/:id" component={EditUser} />
      </Switch>
    </div>
  );
}

export default App;

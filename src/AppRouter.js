import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './pages/Index'
import List from './pages/List'
import My from './pages/My'
// function Index() {
//   return <h2>JSPang.com</h2>;
// }

// function List() {
//   return <h2>List-Page</h2>;
// }
// function My() {
//     return <h2>My</h2>;
//   }
function AppRouter() {
  return (
    <Router>
        <ul>
            <li> <Link to="/">首页</Link> </li>
            <li><Link to="/list/11111">列表</Link> </li>
            <li><Link to="/my/">我的</Link></li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/:id" component={List} />
        <Route path="/my/" component={My} />
    </Router>
  );
}
export default AppRouter;
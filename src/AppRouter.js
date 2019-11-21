import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import List from "./pages/List";
import My from "./pages/My";
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
  let routeConfig = [
    { path: "/", title: "博客首页", exact: true, component: Index },
    { path: "/list/:id", title: "视频教程", exact: false, component:List },
    {
      path: "/my/",
      title: "职场技能",
      exact: false,
      component: My
    }
  ];
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/list/11111">列表</Link>
        </li>
        <li>
          <Link to="/my/">我的</Link>
        </li>
      </ul>
      {/* <Route path="/" exact component={Index} />
      <Route path="/list/:id" component={List} />
      <Route path="/my/" component={My} /> */}
      {routeConfig.map((item, index) => {
        return (
          <Route
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      })}
    </Router>
  );
}
export default AppRouter;

import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";


const Home = React.lazy(() => import("./components/home"));
const Debouncing = React.lazy(() => import("./components/debouncing"));
const InfiniteScroll = React.lazy(() => import("./components/infiniteScroll"));
const ProgressBar = React.lazy(() => import("./components/progressBar"));
const Tictactoe = React.lazy(() => import("./components/tictactoe"));
const SodukuSolver = React.lazy(() => import("./components/sodukuSolve"));
const HOCImp = React.lazy(() => import("./components/HOC/HOCExample"));
const Playground = React.lazy(() => import("./components/playground"));
const Section = React.lazy(() => import("./components/Section"));
const Timer = React.lazy(() => import("./components/timer"));
const ErrorBoundry = React.lazy(() => import("./components/ErrorComponent"));
const ContextApi = React.lazy(() => import("./components/ContextApi"));
const CustomHookUse = React.lazy(() => import("./components/CustomHookUse"));
const Pagination = React.lazy(() => import("./components/Pagination"));
const FileStructure = React.lazy(() => import("./components/fileStructure"));
const TabComponent = React.lazy(() => import("./components/Tab/TabComponent"));
const Accordian = React.lazy(() => import("./components/Accordian"));
const Slider = React.lazy(() => import("./components/Slider/Slider"));
const Modal = React.lazy(() => import("./components/Modal/Modal"));
const SolidPrincipless = React.lazy(() => import("./SolidPrinciples"));

const Routes = withRouter(({ location }) => {
  const routes = [
    {
      component: Home,
      path: "/",
    },
    {
      component: Debouncing,
      path: "/debouncing",
    },
    {
      component: InfiniteScroll,
      path: "/infiniteScroll",
    },
    {
      component: ProgressBar,
      path: "/progressbar",
    },
    {
      component: Tictactoe,
      path: "/tictactoe",
    },
    {
      component: SodukuSolver,
      path: "/sodukuSolver",
    },
    {
      component: HOCImp,
      path: "/hoc",
    },
    {
      component: Playground,
      path: "/playground",
    },
    {
      component: Section,
      path: "/section",
    },
    {
      component: Timer,
      path: "/timer",
    },
    {
      component: ErrorBoundry,
      path: "/errorBoundry",
    },
    {
      component: ContextApi,
      path: "/contextApi",
    },
    {
      component: CustomHookUse,
      path: "/customHookUse",
    },
    {
      component: Pagination,
      path: "/pagination",
    },
    {
      component: FileStructure,
      path: "/fileStructure",
    },
    {
      component: TabComponent,
      path: "/tabs",
    },
    {
      component: Accordian,
      path: "/accordian",
    },
    {
      component: Slider,
      path: "/slider",
    },
    {
      component: Modal,
      path: "/modal",
    },
    {
      component: SolidPrincipless,
      path: "/solid",
    },
  ];

  return (
    <Switch location={location}>
      {routes.map((route) => {
        return (
          <Route
            exact
            key={route.path}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </Switch>
  );
});

export default Routes;

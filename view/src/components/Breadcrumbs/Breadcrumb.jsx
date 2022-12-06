import React from 'react';
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "./breadcrumb.scss";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const routes = [
  { path: "/calendar", breadcrumb: "Month" },
  { path: "/calendar/day/:dayth", breadcrumb: "Tasks-List" },
  { path: "/calendar/day/:dayth/task/:taskId", breadcrumb: "Task"},
  { path: "/teams", breadcrumb: "Teams-List" },
  { path: "/teams/:teamId", breadcrumb: "Team" },
  { path: "/resources", breadcrumb: "Resources-List" },
  { path: "/areas", breadcrumb: "Areas-List"}
];

function setActive(path, curPath){
  return curPath == path ? "active" : "";
}

function Breadcrumb() {
  const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: true });
  const curPath = useLocation();

  return (
    <div className='breadcrumb-container'>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink key={match.pathname} to={match.pathname} className = {'crumb ' + setActive(match.pathname, curPath)}>
          <DoubleArrowIcon/>
          {breadcrumb}
        </NavLink>
      ))}
    </div>
  )
}

export default Breadcrumb
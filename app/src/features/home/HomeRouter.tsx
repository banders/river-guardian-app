import ActivitiesPage from 'features/home/activities/ActivitiesPage';
import ActivityPage from 'features/home/activity/ActivityPage';
import HomeLayout from 'features/home/HomeLayout';
import MapPage from 'features/home/map/MapPage';
import PlanPage from 'features/home/plan/PlanPage';
import ReferencesActivityPage from 'features/home/references/ReferencesActivityPage';
import ReferencesPage from 'features/home/references/ReferencesPage';
import SearchActivityPage from 'features/home/search/SearchActivityPage';
import SearchPage from 'features/home/search/SearchPage';
import React from 'react';
import { Redirect, Switch } from 'react-router';
import AppRoute from 'utils/AppRoute';
import PrivateRoute from 'utils/PrivateRoute';

interface IHomeRouterProps {
  classes: any;
}

const HomeRouter: React.FC<IHomeRouterProps> = (props) => {
  const getTitle = (page: string) => {
    return `InvasivesBC - ${page}`;
  };

  return (
    <Switch>
      <Redirect exact from="/home" to="/home/activities" />
      <PrivateRoute
        exact
        layout={HomeLayout}
        path="/home/search"
        title={getTitle('Search')}
        component={SearchPage}
        componentProps={props}
      />
      <PrivateRoute
        layout={HomeLayout}
        path="/home/search/activity/:id?"
        title={getTitle('Edit')}
        component={SearchActivityPage}
        componentProps={props}
      />
      <PrivateRoute
        exact
        layout={HomeLayout}
        path="/home/plan"
        title={getTitle('Plan')}
        component={PlanPage}
        componentProps={props}
      />
      <PrivateRoute
        exact
        layout={HomeLayout}
        path="/home/references"
        title={getTitle('Reference')}
        component={ReferencesPage}
        componentProps={props}
      />
      <PrivateRoute
        layout={HomeLayout}
        path="/home/references/activity/:id?"
        title={getTitle('Activity')}
        component={ReferencesActivityPage}
        componentProps={props}
      />
      <PrivateRoute
        exact
        layout={HomeLayout}
        path="/home/activities"
        title={getTitle('Activities')}
        component={ActivitiesPage}
        componentProps={props}
      />
      <PrivateRoute
        exact
        layout={HomeLayout}
        path="/home/map"
        title={getTitle('Map')}
        component={MapPage}
        componentProps={props}
      />
      <PrivateRoute
        exact
        layout={HomeLayout}
        path="/home/activity"
        title={getTitle('Activity')}
        component={ActivityPage}
        componentProps={props}
      />
      {/*  Catch any unknown routes, and re-direct to the not found page */}
      <AppRoute title="*" path="/home/*" component={() => <Redirect to="/page-not-found" />} />
    </Switch>
  );
};

export default HomeRouter;

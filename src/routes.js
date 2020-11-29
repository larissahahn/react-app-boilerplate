import HomeComponent from './client/components/home';
import BooksListComponent from './client/components/books/books-list';
import SettingsComponent from './client/components/settings';

export const routes = [
  {
    path: '/',
    exact: true,
    component: HomeComponent
  },
  {
    path: '/books',
    component: BooksListComponent
  },
  {
    path: '/settings',
    component: SettingsComponent
  }
  // {
  //   path: "/testroute",
  //   component: TestRoute,
  //   routes: [
  //     {
  //       path: "/testroute/subroute",
  //       component: SubTestRoute
  //     },
  //     {
  //       path: "/testroute/subroute2",
  //       component: SubTestRoute2
  //     }
  //   ]
  // }
];

export default routes;

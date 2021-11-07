/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: {
  currentUser?: API.CurrentUser | undefined;
  hasRoutes: string[];
}) {
  const { currentUser, hasRoutes = [] } = initialState || {};
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
    normalRouteFilter: (route: any) => {
      return hasRoutes.includes(route.name);
    },
  };
}

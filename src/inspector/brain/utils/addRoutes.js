module.exports = (server, routes = {}) => {
  Object.keys(routes).forEach(routeName => {
    const route = routes[routeName]
    Object.keys(route).forEach(method => {
      const handler = route[method]
      server[method](routeName, handler)
    })
  })
}

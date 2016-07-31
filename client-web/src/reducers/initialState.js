export default {
  auth: {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
  },
  users: {
    isFetching: false,
    data: []
  }
}

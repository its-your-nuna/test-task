import data from './listusers.js'
const users = (state=data, action) => {
    switch (action.type) {
      case 'REGISTER':
        console.log('register')
        return [
          ...state,
          {
          id:action.id,
          avatar:action.avatar,
          email: action.email,
          password: action.password,
          first_name: action.first_name,
          last_name: action.last_name
          }]
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
  }

  
  export default users;

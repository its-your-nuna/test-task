import data from './listusers.js'
// add new user
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
      
      default:
        return state
    }
  }

  
  export default users;

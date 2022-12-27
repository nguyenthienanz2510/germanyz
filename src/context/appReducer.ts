interface initialStateInterface {
  user?: object
}

export const initialState:initialStateInterface = {
}

export const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "INIT_STATE": {
      return action.value
    }
    case "SET_USER_INFO": {
      return {
        ...state,
        user: action.value,
      }
    }
    case "REMOVE_USER_INFO": {
      let updateState = initialState
      delete updateState?.user
      return {
        ...updateState
      }
    }
  }
}

const reducer = (state, data) => {

  switch (data.type) {

    case 'error':
      return { ...state, error: data.error }
    break
  }
}

export default reducer

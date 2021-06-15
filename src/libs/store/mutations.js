const mutations = (state, data) => {

  switch (data.type) {

    case 'error':
      return { ...state, error: data.error }
  }
}

export default mutations

const initialState = {
  status: 0
}

const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return {
        ...state
      }
    }
  }

};

export default productDetailsReducer;

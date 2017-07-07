const initialState = {
  tab:'none'
}

const Reduser = (state = initialState, action) => {
	switch(action.type){
    case 'select/about':
		return Object.assign({}, state, {
			tab: action.payload.tab
		})
  }
	return state;
}
export default Reduser;

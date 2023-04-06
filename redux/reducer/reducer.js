const initialState = {
  rechargePlan: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'RECHARGEPLAN':
      console.log(payload);

    default:
      return state;
  }
};

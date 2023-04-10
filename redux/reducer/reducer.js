const initialState = {
  rechargePlan: [
    {
      _id: 1,
      isLastRecharge: true,
      finalPrice: 589,
      speed: 40,
      validity: 1,
      premium: 'Xstream Premium',
      isOfferApplied: false,
    },
    {
      _id: 2,
      isLastRecharge: false,
      maximumPrice: 7008,
      finalPrice: 7008,
      speed: 100,
      validity: 2,
      premium: 'Xstream Premium',
      isOfferApplied: true,
    },
    {
      _id: 3,
      isLastRecharge: false,
      finalPrice: 808,
      speed: 60,
      validity: 2,
      premium: 'Xstream Premium',
      isOfferApplied: true,
    },
    {
      _id: 4,
      isLastRecharge: false,
      finalPrice: 608,
      speed: 60,
      validity: 2,
      premium: 'Xstream Premium',
      isOfferApplied: true,
    },
    {
      _id: 5,
      isLastRecharge: false,
      finalPrice: 488,
      speed: 60,
      validity: 2,
      premium: 'Xstream Premium',
      isOfferApplied: true,
    },
    {
      _id: 6,
      isLastRecharge: false,
      finalPrice: 510,
      speed: 60,
      validity: 2,
      premium: 'Xstream Premium',
      isOfferApplied: true,
    },
    {
      _id: 7,
      isLastRecharge: false,
      finalPrice: 2000,
      speed: 200,
      validity: 2,
      premium: 'Xstream Premium',
      isOfferApplied: true,
    },
    {
      _id: 8,
      isLastRecharge: false,
      finalPrice: 3200,
      speed: 250,
      validity: 2,
      premium: 'Xstream Premium',
      isOfferApplied: true,
    },
  ],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'RECHARGEPLAN':
      console.log(payload);

    default:
      return state;
  }
};

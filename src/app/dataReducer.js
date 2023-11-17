const initialState = {
  cards: [
    { id: 1, isRedClassAdded: false, value: 0, commentval:0 , shareval:0},
    { id: 2, isRedClassAdded: false, value: 0, commentval:0 , shareval:0 },
    { id: 3, isRedClassAdded: false, value: 0, commentval:0 , shareval:0 },
    { id: 4, isRedClassAdded: false, value: 0, commentval:0 , shareval:0 },
    { id: 5, isRedClassAdded: false, value: 0, commentval:0 , shareval:0 },
  ],
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RED_CLASS":
      console.log(`Adding red class for card ${action.payload.id}`);
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload.id
            ? { ...card, isRedClassAdded: true }
            : card
        ),
      };

    case "INC_VALUE":
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload.id
            ? { ...card, value: card.value + 1 }
            : card
        ),
      };
      case "COMMENT_VAL":
        return{
          ...state,
          cards: state.cards.map((card)=>
          card.id===action.payload.id
          ? {...card, commentval:card.commentval+ 1}
          : card
          ),
        };
        case "SHARE_VAL":
          return{
            ...state,
            cards: state.cards.map((card)=>
            card.id===action.payload.id
            ? {...card, shareval:card.shareval+ 1}
            : card
            ),
          };
    default:
      return state;
  }
};

export default dataReducer;

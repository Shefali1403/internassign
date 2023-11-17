export const addRedClass = (cardId) => {
  console.log(`Dispatching addRedClass for card ${cardId}`);
  return {
    type: 'ADD_RED_CLASS',
    payload: {
      id: cardId,
    },
  };
};

export const increm = (cardId) => {
  return {
    type: 'INC_VALUE',
    payload: {
      id: cardId,
    },
  };
};
export const commentvalue=(cardId)=>{
  return{
    type:'COMMENT_VAL',
    payload:{
      id:cardId,
    },
  };
};
export const sharevalue=(cardId)=>{
  return{
    type:'SHARE_VAL',
    payload:{
      id:cardId,
    },
  };
};
  
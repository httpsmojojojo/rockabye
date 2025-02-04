import { SET_CARD_DATA } from '../ActionType';

export const setCardData = (cardData) => ({
  type: SET_CARD_DATA,
  payload: cardData,
});

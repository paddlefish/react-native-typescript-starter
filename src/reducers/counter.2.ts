const { REHYDRATE } = require("redux-persist/constants");
import ACTION_TYPES from "../constants";
import * as SI from "seamless-immutable";

const defaultState = SI.from({
    counter: 0
});

const counter2 = (state: any = defaultState, action: any) => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload.counter2) {
        console.log(action);
        return state.merge({
          counter: action.payload.counter2.counter
        });
      }
      return state;
    case ACTION_TYPES.INCREASE_ITEM_C2:
      return state.merge({
        counter: state.counter + 1
      });
    default:
      return state;
  }
};

export default counter2;
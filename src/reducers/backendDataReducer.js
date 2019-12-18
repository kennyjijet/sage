import {
  FETCH_DATA_FROM_BACKEND,
  FETCH_DATA_FROM_BACKEND_PHOTO
} from "../actions/types";

const initialState = {
  items: [],
  itemsPhotos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_FROM_BACKEND:
      return {
        ...state,
        items: action.payload
      };
    case FETCH_DATA_FROM_BACKEND_PHOTO:
      return {
        ...state,
        itemsPhotos: action.payload
      };
    default:
      return state;
  }
}

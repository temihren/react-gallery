import consts from "./constants";
const {
  SET_GALLERY_ITEMS,
  TOGGLE_LOADING
} = consts;

const initialState = {
    gallery: {},
    loading: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_GALLERY_ITEMS: {
      const {items, page, collection} = action.payload;
      return {
        ...state,
        gallery: {
            [collection]: {
                [page]: items
            }
        }
      };
    }
    case TOGGLE_LOADING:
        return {
            ...state,
            loading: action.payload
        };
    default:
      return state;
  }
}
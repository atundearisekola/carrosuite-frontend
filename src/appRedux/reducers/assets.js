import { handleAction, combineActions } from 'redux-actions';
import {
  ADD_ASSET_RESULT,
  ADD_ASSET_CATEGORY_RESULT,
  FETCH_ASSET_RESULT,
  addAssetCategoryResult,
  fetchAssetResult,
  addAssetResult,
} from '../actions/AssetAction';

const initialState = {
  Allassets: [],
  newAsset: {},
  loading: false,
  error: null,
};

const assetReducers = handleAction(
  combineActions(addAssetCategoryResult, fetchAssetResult, addAssetResult),

  {
    next(state, action) {
      switch (action.type) {
        case ADD_ASSET_RESULT:
          return {
            ...state,
            Allassets: [...state.Allassets, action.payload.data],
          };
          break;

        case FETCH_ASSET_RESULT:
          return {
            ...state,
            Allassets: [action.payload],
            loading: false,
          };

          break;

        default:
          return state;
          break;
      }
    },
    throw(state, action) {
      switch (action.type) {
        case ADD_ASSET_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: false,
          };

          break;
        case FETCH_ASSET_RESULT:
          return {
            ...state,
            error: action.payload,
            loading: false,
          };

          break;

        default:
          return state;
          break;
      }
    },
  },
  initialState
);

export default assetReducers;

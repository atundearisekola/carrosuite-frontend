import { createAction } from 'redux-actions';
export const ADD_ASSET_CATEGORY = 'ADD_ASSET_CATEGORY';
export const ADD_ASSET_CATEGORY_RESULT = 'ADD_ASSET_CATEGORY_RESULT';

export const FETCH_ASSET = 'FETCH_ASSET';
export const FETCH_ASSET_RESULT = 'FETCH_ASSET_RESULT';

export const ADD_ASSET = 'ASSET';
export const ADD_ASSET_RESULT = 'ADD_ASSET_RESULT';

export const addAssetCategory = createAction(ADD_ASSET_CATEGORY);
export const addAssetCategoryResult = createAction(ADD_ASSET_CATEGORY_RESULT);
export const fetchAsset = createAction(FETCH_ASSET);
export const fetchAssetResult = createAction(FETCH_ASSET_RESULT);
export const addAsset = createAction(ADD_ASSET);
export const addAssetResult = createAction(ADD_ASSET_RESULT);

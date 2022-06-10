import { CATEGORIES_ACTION_STYLES } from './category.type';
import { createAction } from './../../utils/reducer/reducer.utils';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_STYLES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_STYLES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_STYLES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_STYLES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};

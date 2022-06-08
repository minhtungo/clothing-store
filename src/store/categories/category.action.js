import { CATEGORIES_ACTION_STYLES } from './category.type';
import { createAction } from './../../utils/reducer/reducer.utils';

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_STYLES.SET_CATEGORIES_MAP, categoriesMap);

import { createSelector } from 'reselect';

const selectCateroryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCateroryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

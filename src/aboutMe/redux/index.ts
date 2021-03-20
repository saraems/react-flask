import { ActionsUnion, createAction } from '@martin_hotell/rex-tils';
import produce from 'immer';
import { Reducer } from 'redux';

export const CHANGE_FLAG_FOR_TESTING = 'aboutMe/OPEN_EDIT_PRODUCT_DIALOG';

export const aboutMeActions = {
  changeFlagForTesting: () => createAction(CHANGE_FLAG_FOR_TESTING),
};

export type AboutMeAction = ActionsUnion<typeof aboutMeActions>;

interface IAboutMeState {
  flag: boolean
}

const defaultState: IAboutMeState = {
  flag: false
};

export const aboutMeStateReducer: Reducer<typeof defaultState> = (
  state: IAboutMeState = defaultState,
  action: AboutMeAction
): IAboutMeState =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_FLAG_FOR_TESTING: {
        draft.flag = true;
        return;
      }
      default: {
        return state;
      }
    }
  });

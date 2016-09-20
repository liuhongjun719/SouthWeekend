
import * as types from '../constants/ActionTypes';

const initialState = {
  isRefreshing: false,
  loading: false,
  isLoadMore: false,
  noMore: false,
  bannerList: [],

};

export default function read(state = initialState, action) {
  switch (action.type) {
      case types.FETCH_BANNER_LIST:

          return Object.assign({}, state, {
            isRefreshing: action.isRefreshing,
            loading: action.loading,
            isLoadMore: action.isLoadMore
          });
      case types.RECEIVE_BANNER_LIST:
          return Object.assign({}, state, {
            isRefreshing: false,
            isLoadMore: false,
            noMore: action.bannerList.length === 0,
            bannerList: state.isLoadMore ? loadMoreLeftCell(state, action) : refreshLeftCell(state, action),
            loading: false,
          });
    default:
      return state;
  }
}

// TODO: 针对侧边栏cell
function refreshLeftCell(state, action) {
  state.bannerList = action.bannerList;
  return state.bannerList;
}

function loadMoreLeftCell(state, action) {
  state.bannerList = state.bannerList.concat(action.bannerList);
  return state.bannerList;
}

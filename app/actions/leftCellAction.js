/**
 *
 * Copyright 2016-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import * as types from '../constants/ActionTypes';
import Util from '../utils/utils';




// TODO: LeftMenu中的点击cell后的界面获取数据的接口
export let fetchLeftMenuCell = (isRefreshing, loading, cat_id, isLoadMore, page = 0) => {
    let URL = 'http://www.infzm.com/mobile/get_list_by_cat_ids?count=11&click=1&platform=ireader&device=Unknown%20iPhone&version=5.1.0&system_version=9.3&hash=f2cdde51e779dd63b44690b9c86b216b&format=json&cat_id%5B%5D=';
    URL += cat_id;
    URL += '&';
    URL += 'start=';
    URL += page;

    console.log('URL=======:' + URL);
    return dispatch => {
        dispatch(fetchLeftMenuCellList(isRefreshing, loading, isLoadMore));
        return Util.get(URL,(response) => {
            dispatch(receiveLeftMenuCellList(response));
        },(error) => {
            console.log('分类数据error==>' + error);
            dispatch(receiveLeftMenuCellList([]));
        });
    }
}

function fetchLeftMenuCellList(isRefreshing, loading, isLoadMore = false) {
  return {
      type: types.FETCH_BANNER_LIST,
  }
}

function receiveLeftMenuCellList(bannerList) {
  return {
      type: types.RECEIVE_BANNER_LIST,
      bannerList: bannerList,
  }
}

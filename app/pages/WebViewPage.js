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
import React from 'react';
import {
  StyleSheet,
  WebView,
  BackAndroid,
  Text,
  Image,
  TouchableWithoutFeedback,
  View,
  Modal,
  Dimensions,
  TouchableOpacity,
  Navigator,
  DeviceEventEmitter,
} from 'react-native';

import ReadingToolbar from '../components/ReadingToolbar';
import LoadingView from '../components/LoadingView';
import { naviGoBack } from '../utils/CommonUtil';


let canGoBack = false;
const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;

class WebViewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
      transparentState: true,
      isShowFromWriteComment: true,//点击‘写评论’图标时是true,进入MessagePage界面后直接弹出写评论弹出框；
                                  //点击‘message图标’时为false,进入MessagePage界面后不直接弹出写评论弹出框，点击页面下方后会弹出；
    };
    this.onNavigationStateChange = this.onNavigationStateChange.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }


  onNavigationStateChange(navState) {
    canGoBack = navState.canGoBack;
  }

  goBack() {
    if (canGoBack) {
      this.webview.goBack();
      return true;
    }
    return naviGoBack(this.props.navigator);
  }

  renderLoading() {
    return <LoadingView />;
  }


  render() {
    const { navigator, route } = this.props;
    return (
      <View style={styles.container}>
        <ReadingToolbar
          title={route.article.short_subject}
          navigator={navigator}
        />
        <WebView
          ref={(ref) => { this.webview = ref; }}
          automaticallyAdjustContentInsets={false}
          style={{ flex: 1 }}
          source={{ uri: route.article.snsShare.url }}
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
          scalesPageToFit
          decelerationRate="normal"
          onShouldStartLoadWithRequest={() => {
            const shouldStartLoad = true;
            return shouldStartLoad;
          }}
          onNavigationStateChange={this.onNavigationStateChange}
          renderLoading={this.renderLoading}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  bottom_tool: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: 'rgb(254, 253, 254)',
    width: maxWidth,
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 60,
    borderTopColor: 'rgb(106, 106, 106)',
    borderTopWidth: 0.5,
    paddingBottom: 15,
  },
  modal_top: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'rgb(244, 244, 244)',
    paddingLeft: 10,
    paddingRight: 10,
  },
  modal_title: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 10,
  },
  modal_close: {
    height: 40,
    alignSelf: 'center',
    marginTop: 10
  },
});

export default WebViewPage;

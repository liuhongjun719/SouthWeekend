import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    WebView,
    ListView,
    TouchableOpacity,
    Switch,
    InteractionManager,
    DeviceEventEmitter,
    ScrollView,
} from 'react-native';

import Common from '../utils/common';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class LeftBottomTab extends Component {
  constructor(props) {
    super(props);
    this.clickSetting = this.clickSetting.bind(this);
    this.clickCollect = this.clickCollect.bind(this);
      this.state = {
      };
  }

  clickSetting() {

  }

  clickCollect() {

  }


  render() {
      return (
        <View style = {styles.bottom_tab}>
           <TouchableOpacity
           activeOpacity={0.75}
           style = {styles.touch}
           onPress={this.clickSetting}>
             <View style = {styles.tab_item}>
                 <Icon color="gray" size={20} name='cog'/>
                 <Text style = {styles.title_text}>设置</Text>
             </View>
           </TouchableOpacity>

           <TouchableOpacity
           activeOpacity={0.75}
           style = {styles.touch}
           onPress={this.clickCollect}>
             <View style = {styles.tab_item}>
               <Icon color="gray" size={20} name='star-o'/>
               <Text style = {styles.title_text}>收藏</Text>
             </View>
           </TouchableOpacity>
        </View>
      );
  }
}



const styles = StyleSheet.create({
  bottom_tab: {
    paddingHorizontal: 20,
    height: 40,
    width: Common.window.width-150,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderTopColor: 'rgb(182,182,182)',
  },
  touch: {
    paddingVertical: 10,
  },

  tab_item: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },

  title_text: {
    alignSelf: 'center',
    marginLeft: 10,
    color: 'rgb(182,182,182)',
  },



})

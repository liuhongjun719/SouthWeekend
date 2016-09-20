import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    WebView,
    TouchableOpacity,
    InteractionManager,
    DeviceEventEmitter,
    ScrollView,
} from 'react-native';
import Common from '../utils/common';
import LeftMenuData from '../constants/LeftMenuData.json';
import MenuList from  '../pages/MenuList';
import LeftBottomTab from '../components/LeftBottomTab';


export default class HomeDetil extends Component {
  constructor(props) {
    super(props);
    this.clickUserHeader = this.clickUserHeader.bind(this);
      this.state = {
      };
  }

  // TODO: 点击登录
  clickUserHeader() {

  }

    render() {
        return (
          <View style = {styles.left_back_view}>
            <View style = {styles.user_header_view}>
             <TouchableOpacity
             activeOpacity={0.75}
             onPress={this.clickUserHeader.bind(this)}>
               <View style = {{flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', marginTop: 40}}>
                   <Image style = {styles.user_header} source = {require('../img/user_header.png')}></Image>
                   <Text style = {{alignSelf: 'center', marginVertical: 10, marginRight: 30}}>登录</Text>
               </View>
             </TouchableOpacity>

             <TouchableOpacity
             activeOpacity={0.75}
             style = {{marginTop: 20, paddingVertical: 10}}>
               <View style = {{flexDirection: 'row', backgroundColor: 'white'}}>
                 <Image style = {styles.user_add} source = {require('../img/user_add.png')}></Image>
                 <Text style = {{alignSelf: 'center'}}>我定制</Text>
               </View>
             </TouchableOpacity>
            </View>

            <MenuList data={LeftMenuData.sections}/>
            <LeftBottomTab/>
          </View>
        );
    }
}


const styles = StyleSheet.create({
    // TODO: header
    user_header_view: {
      height: 200,
      width: Common.window.width-150,
      backgroundColor: 'white',
    },
    user_header: {
      height: 60,
      width: 60,
      borderRadius: 30,
      alignSelf: 'center',
      marginRight: 30,
    },
    user_add: {
      height: 20,
      width: 20,
      marginLeft: 20,
      marginRight: 15,
    },
    left_back_view: {
      height: Common.window.height-40,
      width: Common.window.width-150,
      backgroundColor: 'white',
      flex: 1,
      shadowColor: 'black',
      shadowRadius: 10,
    },
    user_header_touch: {
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'white',
      marginTop: 40,
    },
    user_add_view: {
      flexDirection: 'row',
      backgroundColor: 'white',
    }
})

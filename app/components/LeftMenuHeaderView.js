/**
 * 导航栏标题
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Common from '../utils/common';

import { toastShort } from '../utils/ToastUtil';




export default class Header extends React.Component {
  constructor(props) {
      super(props);
  }



    render() {
      var myDate = new Date();
      let year = myDate.getFullYear();
      let month = myDate.getMonth() + 1;
      let day = myDate.getDate();
      return (
          <View style={styles.navigationBarContainer}>
            <TouchableOpacity
                key={'rightRepeatIcon'}
                activeOpacity={1.0}
                style={styles.header_view_left}
                onPress={this.props.clickUserHeader}
                >
                <View style = {{flexDirection: 'column'}}>
                  <Image style = {styles.user_header} source = {{uri: 'header.png'}}></Image>
                  <Text style = {styles.user_name}>{year + '年' + month + '月' + day + '日'}</Text>
                </View>
            </TouchableOpacity>
          </View>
      )

    }
}

const styles = StyleSheet.create({

    navigationBarContainer: {
        flexDirection: 'row',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(241,241,241)',
        width: Common.window.width - 100,
    },



    user_header: {
      borderRadius: 50,
      borderColor: 'white',
      width: 100,
      height:100,
      marginTop: 25,
      backgroundColor: 'white',
      marginLeft: 10,
      alignSelf: 'center',
    },

    user_name: {
      fontSize: 18,
      color: 'black',
      marginLeft: 10,
      marginTop: 30,
      alignSelf: 'center',
      marginLeft: 30,

    },


    header_view_left: {
      flex: 1,
    },

    header_view_right: {
      width: 60,
      marginTop: 35,
    },

    image_message: {

    },
    text_message: {
      color: 'white',
      marginTop: 3,
      marginLeft: 5,
    },


})

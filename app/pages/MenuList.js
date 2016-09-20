
  import React, {
      Component
  } from 'react';
  import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    DeviceEventEmitter,
    InteractionManager,
  } from 'react-native';


export default class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  // TODO:  click section
  sectionPress() {
    console.log('indicator----------:' );
    InteractionManager.runAfterInteractions(() => {
      DeviceEventEmitter.emit('CloseOrOpen', false);
    });
  }
  pressRightIndicator(i, data) {
    console.log('i----------:' +i);
    var isOpened = data.isOpened;
    data.isOpened = !isOpened;
    this.setState({});
  }
  onPressInSection(i, sectionItem) {
    sectionItem.pressSectionColor = "red";
    this.setState({});
  }

  onPressOutSection(i, sectionItem) {
    sectionItem.pressSectionColor = "black";
    this.setState({});
  }



  // TODO:  click cell
  cellPress(i, k, data) {
    console.log('i-----k-----:' +i + '---->' + k);
    InteractionManager.runAfterInteractions(() => {
      DeviceEventEmitter.emit('ClickCell', false, data);
    });
  }

  onPressInCell(i, k, cellItem) {
    cellItem.pressCellColor = "red";
    this.setState({});
  }

  onPressOutCell(i, k, cellItem) {
    cellItem.pressCellColor = "rgb(182,182,182)";
    this.setState({});
  }

  render(){
    var cellContainer = [];
    for (var i = 0; i < this.props.data.length; i++) {
      cellContainer.push(
        <TouchableOpacity
        activeOpacity={0.75}
        key = {'section'+this.props.data[i].id}
        onPress={this.sectionPress.bind(this)}
        onPressIn = {this.onPressInSection.bind(this, i, this.props.data[i])}
        onPressOut = {this.onPressOutSection.bind(this, i, this.props.data[i])}
        >
          <View style = {styles.section_back_view}>
            <View style = {styles.section_back_left_view}>
                <Image style = {styles.section_left_image} source = {{uri: this.props.data[i].image}}></Image>
                <Text
                 style = {{height: 50, marginLeft: 10, marginTop: 15, color: this.props.data[i].pressSectionColor}}>
                 {this.props.data[i].sectionName}
                </Text>
            </View>
            <TouchableOpacity
            activeOpacity={0.75}
            style = {styles.section_right_touch}
            onPress={this.pressRightIndicator.bind(this, i, this.props.data[i])}
            >
             <Image
              style = {styles.section_right_image}
              source = {this.props.data[i].isOpened ? require('../img/left_up_indicator.png') : require('../img/left_down_indicator.png')}>
              </Image>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );

      for (var k = 0; k < this.props.data[i].items.length; k++) {
        // console.log('count---------:'+this.props.data[i].items[k].title);
        cellContainer.push(this.props.data[i].isOpened ?
          <TouchableOpacity
          activeOpacity={0.75}
          onPress={this.cellPress.bind(this, i, k, this.props.data[i].items[k])}
          key = {this.props.data[i].items[k].title}
          onPressIn = {this.onPressInCell.bind(this, i, k, this.props.data[i].items[k])}
          onPressOut = {this.onPressOutCell.bind(this, i, k, this.props.data[i].items[k])}
          >
           <Text
             style = {{height: 40, color: this.props.data[i].items[k].pressCellColor, marginLeft: 50}}>
             {this.props.data[i].items[k].title}
           </Text>
          </TouchableOpacity> : null
        );
      }

    }//for i

    return (
      <ScrollView
      contentContainerStyle={styles.container}
      automaticallyAdjustContentInsets = {true}
      showsVerticalScrollIndicator = {false}>
        {cellContainer}
      </ScrollView>
    );
  }

}






var styles = StyleSheet.create({
  container:{
    paddingTop: 20,
    backgroundColor: 'white',
  },
  // TODO: section
  section_back_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
  },
  section_back_left_view: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginLeft: 20,
  },

  section_left_image: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },

  section_left_title: {
    height: 50,
    marginLeft: 10,
    marginTop: 15,
  },
  section_right_touch: {
    alignSelf: 'center',
    marginRight: 20,
  },

  section_right_image: {
    height: 20,
    width: 20,
  },


  // TODO: cell
  cell_title: {
    height: 40,
    color: 'rgb(182,182,182)',
    marginLeft: 50,
  },

})

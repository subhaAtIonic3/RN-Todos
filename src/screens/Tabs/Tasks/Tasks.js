import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {SwipeListView} from 'react-native-swipe-list-view';

const DATA = [
  {
    title: 'Meeting with Jerry',
    time: '9:00 AM',
    showMenu: false,
    _id: '1',
  },
  {
    title: 'Code review',
    time: '12:00 PM',
    showMenu: false,
    _id: '2',
  },
  {
    title: 'Complete task z02-718',
    time: '4:30 PM',
    showMenu: false,
    _id: '3',
  },
  {
    title: 'Scrum call',
    time: '6:00 PM',
    showMenu: false,
    _id: '4',
  }
];

const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      showMenu: false,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <View style={{
            paddingHorizontal: 15
          }}>
            <MaterialIcons name="playlist-add" size={24} color="white" />
          </View>
        </TouchableOpacity>
      )
    });
  }

  handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  };

  render() {
    const Item = ({data}) => {
      return (
        <View style={styles.taskContainer}>
          <View
            style={{
              alignSelf: 'center',
              paddingRight: 20,
            }}>
            <TouchableOpacity>
              <Feather name="circle" size={24} color="blue" />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.taskName}>{data.title}</Text>
            <Text style={styles.taskTime}>{data.time}</Text>
          </View>
          <View style={{alignSelf: 'center'}}>
            <TouchableOpacity>
              <Ionicons name="ios-arrow-dropright" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      );
    };

    const renderHiddenItem = (data, rowMap) => (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => {
            console.log("Delete");
          }}>
          <Feather name="trash" size={20} color="rgb(255, 79, 82)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft_2]}
          onPress={() => {
            console.log("Edit");
          }}>
          <Feather name="edit" size={20} color="rgb(255, 79, 82)" />
        </TouchableOpacity>
      </View>
    );

    return (
      <View>
        <SegmentedControlTab
          values={['Today', 'Month']}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
          borderRadius={0}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          tabTextStyle={styles.tabTextStyle}
          activeTabTextStyle={
            Platform.OS === 'ios'
              ? styles.activeTabTextStyle_iOS
              : styles.activeTabTextStyle
          }
        />
        <View style={styles.listContainer}>
          {this.state.selectedIndex === 0 ? (
            <View
              style={{
                  paddingBottom: 105,
                  paddingVertical: 10,
              }}
            >
              <Text style={styles.sectionTitle}>MAY 30, 2020</Text>
              <SwipeListView
                data={DATA}
                keyExtractor={(item, index) => item._id}
                renderItem={(data, rowMap) => <Item data={data.item} />}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-140}
                disableRightSwipe
                showsVerticalScrollIndicator={false}
              />
            </View>
          ) : (
            <View>
              <Calendar
                markedDates={{
                  '2020-05-25': {
                    dots: [vacation, massage, workout],
                  },
                  '2020-05-26': {dots: [massage, workout]},
                }}
                markingType={'multi-dot'}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: 'rgb(255, 79, 82)',
    borderColor: 'rgb(255, 79, 82)',
  },
  tabTextStyle: {
    color: 'white',
    padding: 10,
  },
  activeTabStyle: {
    backgroundColor: 'rgb(255, 79, 82)',
  },
  activeTabTextStyle: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  activeTabTextStyle_iOS: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 105,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  taskContainer: {
    backgroundColor: 'rgb(255, 255, 255)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    flexDirection: 'row',
    borderColor: 'blue',
    borderRightWidth: 2,
  },
  sectionTitle: {
    color: 'rgb(187, 187, 187)',
    fontWeight: 'bold',
    fontSize: 14,
    paddingVertical: 10,
    backgroundColor: 'rgb(242, 242, 242)',
  },
  taskName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskTime: {
    fontSize: 14,
    color: 'rgb(173, 173, 173)',
  },
  rowBack: {
    alignItems: 'center',
    flex: 1,
    marginVertical: 10,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 60,
  },
  backRightBtnLeft: {
    backgroundColor: 'white',
    right: 0,
  },
  backRightBtnLeft_2: {
    backgroundColor: 'white',
    right: 65,
  },
});

export default Tasks;

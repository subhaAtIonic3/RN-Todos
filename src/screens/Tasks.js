import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Calendar } from 'react-native-calendars';

import TextViewer from "../components/TaskViewer/TaskViewer";
import QuickAction from "../components/QuickAction/QuickAction";

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
      togglePopup: false
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={this.toggleAddTaskPopup}>
          <View style={{
            paddingHorizontal: 15
          }}>
            <MaterialIcons name="playlist-add" size={24} color="white" />
          </View>
        </TouchableOpacity>
      )
    });
  }

  toggleAddTaskPopup = () => {
    this.setState((prevState) => ({
      togglePopup: !prevState.togglePopup
    }));
  }

  handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  };

  popupItemClickHandler = (type) => {
    console.log(type);
    
    if (type === "quickNote") {
      // go to quick notes screen
    } else {
      // go tot create task screen
    }
    this.setState((prevState) => ({
      togglePopup: !prevState.togglePopup
    }));
  }

  render() {
    return (
      <View>
        {
          this.state.togglePopup ?
          <QuickAction isVisible={true} clicked={this.popupItemClickHandler} />
          : null
        }
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
              <TextViewer listData={DATA} />
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
  }
});

export default Tasks;

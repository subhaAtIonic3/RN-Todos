import React, {Component} from "react";
import {View, StyleSheet, Text} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";

class Tasks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0
        };
    }

    handleIndexChange = index => {
        this.setState({
            ...this.state,
            selectedIndex: index
        });
    };
    render() {
        return (
            <View>
                <SegmentedControlTab
                    values={["First", "Second"]}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default Tasks;
import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";

import ColorPalette from "../components/ColorPalette/ColorPalette";


class CreateNotes extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.notesContainer}>
                    <View style={styles.notesCard}>
                        <Text style={styles.descriptionLabel}>Description</Text>
                        <View style={styles.notesDescription}>
                            <TextInput style={styles.notesInput} multiline placeholder="Take notes..." />
                        </View>
                        <View style={styles.selectColorContainer}>
                            <Text style={styles.chooseColorLabel}>Choose Color</Text>
                            <View style={styles.colorsContainer}>
                                <ColorPalette color="green" />
                                <ColorPalette color="red" />
                                <ColorPalette color="yellow" />
                                <ColorPalette color="black" />
                                <ColorPalette color="orange" />
                            </View>
                        </View>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity style={styles.doneBtn}>
                                <Text style={styles.doneBtnText}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        marginVertical: 20
    },
    notesContainer: {
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        backgroundColor: "#fff",
        borderRadius: 3
    },
    descriptionLabel: {
        fontSize: 18,
        fontWeight: "bold"
    },
    notesCard: {},
    notesDescription: {},
    notesInput: {
        maxHeight: 200,
        marginTop: 5,
        marginBottom: 30,
        fontSize: 18,

    },
    selectColorContainer: {},
    chooseColorLabel: {
        fontSize: 18,
        fontWeight: "bold"
    },
    colorsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 15
    },
    btnContainer: {
        marginVertical: 30,
    },
    doneBtn: {
        padding: 15,
        backgroundColor: 'rgb(146, 65, 255)',
        borderRadius: 10,
        alignItems: 'center',
    },
    doneBtnText: {
        color: "white",
        fontSize: 18
    }
});

export default CreateNotes;



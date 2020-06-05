import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from "react-native";

import ColorMeter from "./ColorMeter";

class CreateNotes extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    selectedColorPalette = (colorName) => {
        console.log(colorName); 
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
                        <ColorMeter getSelectedColorPalette={this.selectedColorPalette} />
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



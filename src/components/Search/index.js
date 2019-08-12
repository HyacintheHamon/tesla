import React, { Component } from 'react';
import { Platform, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Search extends Component {

    state = {
        searchFocused: false,
    }

    render() {

        const { searchFocused } = this.state;
        const { onLocationSelected } = this.props;

         
        return <View  style={{
                position: 'absolute',
                top: Platform.select({ ios: 0, android: 0 }),
                height: 100,
                backgroundColor: '#15191E',
                width: "100%",
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: "space-between"               
                }}>
                    <View>
                        <TouchableOpacity style={styles.closeButton} onPress={this.props.onCloseMap}>
                            <Icon name="times" size={34} color="#fff" />
                        </TouchableOpacity>                        
                    </View>
                    <View style={{
                                    top: Platform.select({ ios: 42, android: 42 }),
                                    width: "85%"
                                }}>
                        <GooglePlacesAutocomplete
                            placeholder="Where to?"
                            placeholderTextColor="#777"
                            onPress={onLocationSelected}
                            query={{
                                key: 'AIzaSyBI_lZSOEBQz7a1RwFS6qWTyhoIJkvOvyA',
                                language: 'en'
                            }}
                            textInputProps={{
                                onFocus: () => { this.setState({ searchFocused: true }) },
                                onBlur: () => { this.setState({ searchFocused: false }) },
                                autoCapitalize: "none",
                                autoCorrect: false
                            }}
                            listViewDisplayed={searchFocused}
                            fetchDetails
                            enablePoweredByContainer={false}
                            textInputContainer
                            styles={{
                                container: {
                                    position: 'absolute',
                                    top: Platform.select({ ios: -50, android: -50 }),
                                    left: "-5%",
                                    width: "110%",
                                },
                                textInput: {
                                    backgroundColor: 'rgb(32,32,38)',
                                    height: 42,
                                    fontSize: 21,
                                    color: 'white'
                                },
                                textInputContainer: {
                                    flex: 1,
                                    backgroundColor: 'transparent',
                                    height: 54,
                                    marginHorizontal: 20,
                                    borderTopWidth: 0,
                                    borderBottomWidth: 0
                                },
                                textView: {
                                    height: 54,
                                    margin: 0,
                                    borderRadius: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    marginTop: 0,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    elevation: 5,
                                    shadowColor: '#000',
                                    shadowOpacity: 0.1,
                                    shadowOffset: { x: 0, y: 0 },
                                    shadowRadius: 15,
                                    borderWidth: 1,
                                    borderColor: '#DDD',
                                    fontFamily: 'Montserrat-Medium',
                                    fontSize: 18
                                },
                                listView: {
                                    borderWidth: 1,
                                    borderColor: '#DDD',
                                    backgroundColor: '#FFF',
                                    marginHorizontal: 20,
                                    elevation: 5,
                                    shadowColor: '#000',
                                    shadowOpacity: 0.1,
                                    shadowOffset: { x: 0, y: 0 },
                                    shadowRadius: 15,
                                    marginTop: 10
                                },
                                description: {
                                    fontFamily: 'Montserrat-Medium',
                                    fontSize: 16
                                },
                                row: {
                                    padding: 20,
                                    height: 58
                                }
                            }}
                        />                        
                    </View>
                    <View>
                        <TouchableOpacity style={styles.rightButton} onPress={this.props.onCloseMap}>
                            <MaterialIcons name="filter-center-focus" size={39} color="#fff" />
                        </TouchableOpacity>                        
                    </View>
                </View>;
    }
}


const styles = StyleSheet.create({
    closeButton: {
        position: 'absolute',
        left: 9,
        top: 4
    },
    rightButton: {
        position: 'absolute',
        right: 7,
        top: 2
    }
})
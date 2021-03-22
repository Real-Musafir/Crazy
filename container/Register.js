import React, { Component } from 'react';
import { ScrollView, View, Dimensions, StyleSheet } from "react-native";
import { Text, Button, Input, Divider } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CloseHeader from "../component/CloseHeader";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Typography, Buttons, Colors } from "../styles";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "landing"
        }
    }

    changePage = (pageName) => {
        this.setState({
            page: pageName
        });
    }

    titleStyle = {
        ...Typography.title,
        marginBottom: 5
    };

    roundButton = {
        ...Buttons.roundBlue.buttonStyle,
        marginBottom: 10
    }

    roundButtonTitle = {
        ...Buttons.roundBlue.titleStyle,
    }

    googleButton = {
        ...Buttons.roundClear.buttonStyle,
        marginBottom: 10
    }

    googleButtonTitle = {
        ...Buttons.roundClear.titleStyle
    }

    registerButton = {
        ...Buttons.roundClear.buttonStyle,
        borderColor: Colors.blue,
        marginBottom: 10
    }

    registerButtonTitle = {
        ...Buttons.roundClear.titleStyle,
        color: Colors.blue
    }
    
    linkButton = {
        ...Typography.link,
        marginTop: 10,
        marginBottom: 10
    }

    dividerStyle = {
        flex: 1, 
        backgroundColor: Colors.lightGray, 
        height: 1, 
        marginBottom: 10, 
        marginTop: 10
    }

    render() {
        const windowWidth = Dimensions.get('window').width;

        let mainArea = <View></View>

        if (this.state.page == "form") {
            mainArea = (<View style={{flex: 10, width: windowWidth, alignSelf: "stretch", padding: 10, backgroundColor: "#fff"}}>
                                <Text style={this.titleStyle}>Let's Get Started</Text>
                                <Text style={{marginBottom: 10}}>Register with your email to get started</Text>
                                <Input placeholder="Email" />
                                <Input placeholder="First Name" />
                                <Input placeholder="Last Name" />
                                <Button buttonStyle={this.roundButton} titleStyle={this.roundButtonTitle} title="Continue" />
                                <Text style={this.linkButton} onPress={()=>{console.log('clicked')}}>Reset Your Password</Text>
                                <Text style={this.linkButton} onPress={()=>{console.log('clicked')}}>Sign in</Text>
                        </View>);
        }

        if (this.state.page == "landing") {
            mainArea = <View style={{flex: 10, width: windowWidth, alignSelf: "stretch", padding: 10, backgroundColor: "#fff", flexDirection: "column", justifyContent: "space-between"}}>
                            <View>
                                <Text style={this.titleStyle}>Let's Get Started</Text>
                                <Text>You can use your email or continue with your social media accounts</Text>
                            </View>
                            <View>
                                <Button onPress={()=>{this.changePage("form")}} buttonStyle={this.roundButton} titleStyle={this.roundButtonTitle} title="Use your email address" />
                                <View style={{flexDirection: "row", padding: 10}}>
                                    <Divider style={this.dividerStyle} />
                                    <Text style={{flex: 0, marginBottom: 10, paddingLeft: 10, paddingRight: 10}}>or</Text>
                                    <Divider style={this.dividerStyle} />
                                </View>
                                <Button type="outline" buttonStyle={this.googleButton} titleStyle={this.googleButtonTitle} title="Continue with Google" icon={<Icon name="google" size={20} color="#333333" />} />
                                <Button buttonStyle={this.roundButton} titleStyle={this.roundButtonTitle} title="Continue with Facebook" icon={<Icon name="facebook-f" size={20} color="#fff" />} />
                            </View>
                        </View>;
        }

        return(
            <SafeAreaProvider>
                <ScrollView style={{flexDirection: "row"}}>
                    <View style={{flex: 0, width: windowWidth}}>
                        <CloseHeader navigation={this.props.navigation} text="Sign In" />
                    </View>
                    {mainArea}
                </ScrollView>
            </SafeAreaProvider>
        );
    }
}

export default Register;
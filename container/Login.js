import React, { Component } from 'react';
import { ScrollView, View, Dimensions, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CloseHeader from "../component/CloseHeader";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Typography, Buttons, Colors } from "../styles";

class Login extends Component {
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

    render() {
        const windowWidth = Dimensions.get('window').width;

        let mainArea = <View></View>

        if (this.state.page == "form") {
            mainArea = (<View style={{flex: 10, width: windowWidth, alignSelf: "stretch", padding: 10, backgroundColor: "#fff"}}>
                                <Text style={this.titleStyle}>Welcome</Text>
                                <Text style={{marginBottom: 10}}>You can use your email to login, or can use your social media accounts</Text>
                                <Input placeholder="Email" leftIcon={<Icon name="envelope" size={20} color="#818181" />} />
                                <Input placeholder="Password" secureTextEntry={true} leftIcon={<Icon name="unlock" size={20} color="#818181" />} />
                                <Button buttonStyle={this.roundButton} titleStyle={this.roundButtonTitle} title="Sign in" />
                                <Text style={this.linkButton} onPress={()=>{console.log('clicked')}}>Reset Your Password</Text>
                                <Text style={this.linkButton} onPress={()=>{console.log('clicked')}}>Create An Account</Text>
                        </View>);
        }

        if (this.state.page == "landing") {
            mainArea = <View style={{flex: 10, width: windowWidth, alignSelf: "stretch", padding: 10, backgroundColor: "#fff", flexDirection: "column", justifyContent: "space-between"}}>
                            <View>
                                <Text style={this.titleStyle}>Login</Text>
                                <Text>Please enter your email & password to login</Text>
                            </View>
                            <View>
                                <Button onPress={()=>{this.changePage("form")}} buttonStyle={this.roundButton} titleStyle={this.roundButtonTitle} title="Use email or username" />
                                <Button type="outline" buttonStyle={this.googleButton} titleStyle={this.googleButtonTitle} title="Sign in with Google" icon={<Icon name="google" size={20} color="#333333" />} />
                                <Button buttonStyle={this.roundButton} titleStyle={this.roundButtonTitle} title="Sign in with Facebook" icon={<Icon name="facebook-f" size={20} color="#fff" />} />
                                <Button onPress={() => {this.props.navigation.navigate("Register")}} type="outline" buttonStyle={this.registerButton} titleStyle={this.registerButtonTitle} title="Create an account" />
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

export default Login;
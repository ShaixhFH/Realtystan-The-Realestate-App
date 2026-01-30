import React from 'react'
import { View,StyleSheet, Text, AppRegistry, TextInput, ScrollView, Button, Pressable } from 'react-native'

function Contact(){
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         lastRefresh: Date(Date.now()).toString(),
    //     }
    //     this.refreshScreen = this.refreshScreen.bind(this)
    // }

    // refreshScreen() {
    //     this.setState({ lastRefresh: Date(Date.now()).toString() })
    // }

    // export default class PizzaTranslator extends Component {  
    //         constructor(props) {  
    //     super(props);  
    //     this.state = {text: ''};  
    // }  
  return (
    <ScrollView>
        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.infoText}>To get more information about RealtyPaaS, you can drop your contact details, Our representative will contact you soon.</Text>
        <TextInput  
            style={styles.inputName}  
            placeholder="Your Name"  
            // onChangeText={(text) => this.setState({text})}  
        />  
        <TextInput  
            style={styles.inputEmail}  
            placeholder="Your email"  
            // onChangeText={(text) => this.setState({text})}  
        />  
        <TextInput  
            style={styles.inputNumber}  
            placeholder="Phone no"  
            keyboardType="numeric"
            // onChangeText={(text) => this.setState({text})}  
        />  
        <TextInput  
            style={styles.inputMessage}  
            placeholder="Enter Your Message..."  
            // rows={5}
            // maxLength={50}
            multiline
            numberOfLines={4}
            // onChangeText={(text) => this.setState({text})}  
        />  
        <View style={styles.Button}>
            <Pressable                // style={styles.Button}
                onPress={()=> {{console.warn('Thanks! Your Message has been Sent')} ('Contact')}}      //onPress()   {console.warn("Hey There")}} [styles.Text, {color:textColor}]
                // onPress={()=>('')}
                >
                <Text style={styles.Text}>Send Message</Text>  
            </Pressable>
        </View>
        {/* <Button style={styles.button}>Submit</Button> */}
        {/* <Text style={{padding: 100, fontSize: 50}}>  
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}  
        </Text>*   */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: '900',
        padding: 20,
        color: '#4b4b4b',
    },
    infoText: {
        fontSize: 15,
        // fontWeight: '600',
        padding: 20,
        paddingTop: -30,
        width: '90%',
        color: '#4b4b4b'
    },
    inputName: {
        width: '85%',
        height: 50,
        backgroundColor: '#fff', 
        fontSize: 17,
        margin: 20,
        paddingLeft: 10,
        borderRadius: 5,
    },
    inputEmail: {
        width: '85%',
        height: 50,
        backgroundColor: '#fff', 
        fontSize: 16,
        margin: 20,
        borderRadius: 5,
        paddingLeft: 10,
    },
    inputNumber: {
        width: '85%',
        height: 50,
        backgroundColor: '#fff', 
        fontSize: 17,
        margin: 20,
        borderRadius: 5,
        paddingLeft: 10,
    },
    inputMessage: {
        width: '85%',
        height: 110,
        backgroundColor: '#fff', 
        fontSize: 17,
        margin: 20,
        borderRadius: 5,
        padding: 10,
        textAlignVertical: 'top',
    },
    Button: {
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#cb022c',
        width: 150,
        height: 40,
        margin: 20,
    },
    Text: {
        textAlign:'center',
        fontSize: 15,
        fontWeight: '800',
        color: '#fff'
    }
});

export default Contact;



        // justifyContent: 'flex-start',
        // alignContent: 'flex-start',
        // textAlign: ''
        // justifyContent: 'flex-start',

        
        // textAlign: -30,
        // paddingTop: '-25%',
        // textAlign: 'top'
        // paddingTop: -50,
        // padding: 20,
        // paddingTop: -30,
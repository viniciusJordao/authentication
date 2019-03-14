import React,{ Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
    state = { loggedIn: null };

    componentWillMount() {

        firebase.initializeApp({            
            apiKey: 'AIzaSyAjssSWuF5ZpQb2XRzgFUWivB6Ab-lLjDA',
            authDomain: 'authentication-b3c5a.firebaseapp.com',
            databaseURL: 'https://authentication-b3c5a.firebaseio.com',
            projectId: 'authentication-b3c5a',
            storageBucket: 'authentication-b3c5a.appspot.com',
            messagingSenderId: '684148447293'
            
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ loggedIn:true })
            } else{
              this.setState({ loggedIn: false })
            }
        })
    }

    renderContent () {

        switch (this.state.loggedIn){

            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onTap={() => firebase.auth().signOut()}>
                                Log out
                            </Button>
                        </CardSection>
                    </Card>
                );

            case false:
                return <LoginForm />;

            default:
                return (
                    <Card>
                        <CardSection>
                            <Spinner size="large" />
                        </CardSection>
                    </Card>
                );
        }     
    }

    render(){
        return(
            <View>
                <Header headerText="Autenticação"/>
                {this.renderContent()}
            </View>
        );       
    }
}

export default App;
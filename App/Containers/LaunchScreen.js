import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { StackNavigator } from 'react-navigation';

import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>

          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Hello World, MotherFuckers!
              This is finally fucking working!
            </Text>
            <RoundedButton onPress={() => navigate('SecondScreen', { user: 'Lucy' })} text="Don't click this"> 
            </RoundedButton>
          </View>
          
        </ScrollView>
      </View>
    )
  }
}

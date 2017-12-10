import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { StackNavigator } from 'react-navigation';

import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class SecondScreen extends Component {
  render () {
    const { navigate } = this.props.navigation;    
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>

          <View style={styles.section} >
            <View>
              <Text style={styles.sectionText}>
                Eat a Dick Android Studio!
              </Text>
              <RoundedButton onPress={() => navigate('LaunchScreen')} text="Go back"> 
            </RoundedButton>
            </View>
          </View>

        </ScrollView>
      </View>
    )
  }
}

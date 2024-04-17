import { StyleSheet, Text, View,Image, SafeAreaView, Pressable, Linking, TouchableOpacity, Alert } from 'react-native'
import React from 'react'




export default function App() {
  function openWebsite(openlink) {
    Linking.openURL(openlink)
  }  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require('./components/Profile.jpeg')} style={styles.pfp}/>
      </View>
    <View style={styles.name}>
      <Text style={styles.txt1}>Rachit Singh </Text>
    </View>
    <View style={styles.location}>
      <Text style={styles.txt2}>Ghaziabad-UP, India </Text>
    </View>
    <View style={styles.bio}>
      <Text style={styles.txt3}>"Wanna be Mobile dev and avid reader" </Text>
    </View>
    <View style={styles.githubcontainer}>
      <TouchableOpacity onPress={() => openWebsite('https://github.com/RachitSinghh')}>
        <Text style={styles.linkTxt}> Github </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.linkedinContainer}>
      <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com/in/rachittsingh/')}>
        <Text style={styles.linkTxt}> Linkedin </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.twitterContainer} >
      <TouchableOpacity onPress={() => openWebsite('https://twitter.com/ioftenchangeit')}>
        <Text style={styles.linkTxt}> X "Formaly Twitter" </Text>
      </TouchableOpacity>
    </View>
    <View  style={styles.emailContainer}>
      <TouchableOpacity onPress={() => openWebsite("mailto:singhrachit@outlook.in")}>
        <Text style={styles.linkTxt}> Email </Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      justifyContent: 'center',
      alignItems: 'center',
    },
    imgContainer:{
      marginTop:100,
      marginBottom: 50,
      flexDirection: 'row',
    },
    pfp:{
      height:150,
      width: 150,
      borderRadius: 100,
    },
    name:{
      marginBottom: 10
    },
    txt1:{
      fontSize: 24
    },
    location:{
      marginBottom: 10
    },
    txt2:{
      fontSize: 22
    },
    bio:{
      marginBottom:10,
    },
    txt3:{
      fontSize: 18
    },
    githubcontainer:{
      backgroundColor: '#B3C8CF',

      padding: 20,
      width: 350,
      marginTop: 50,
      marginBottom: 10,
      alignItems: 'center',
      borderRadius: 10
    },
    linkedinContainer:{
      backgroundColor: '#B3C8CF',

      padding: 20,
      width: 350,
      // marginTop: 20,
      marginBottom: 10,
      alignItems: 'center',
      borderRadius: 10
    },
    twitterContainer:{
      backgroundColor: '#B3C8CF',

      padding: 20,
      width: 350,
      // marginTop: 20,
      marginBottom: 10,
      alignItems: 'center',
      borderRadius: 10
    },
    emailContainer:{
      backgroundColor: '#B3C8CF',

      padding: 20,
      width: 350,
      // marginTop: 20,
      marginBottom: 8,
      alignItems: 'center',
      borderRadius: 10
    },
    linkTxt:{
      color: '#000000',
      fontWeight: 'bold'
    }
})
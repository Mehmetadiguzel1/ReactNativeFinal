import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WillSmith() {
    return (
        <View style={styles.container} >
            <View style={{alignItems:'center', }}>
                <Text style={styles.title} >Will Smith</Text>
            </View>
            <View style={styles.paragraphContainer}>
                <Text style={styles.paragraph}>
                    Willard Carroll Smith II[1] (born September 25, 1968), also known by his stage name The Fresh Prince, is an American actor, rapper, and film producer. Often cited as a groundbreaking entertainer in music, television and film, Smith is the recipient of numerous accolades, including four Grammy Awards and a Golden Globe Award; and has been nominated for four Academy Awards (including one for Best Picture), and a Primetime Emmy Award for Outstanding Comedy Series. In 2006, Time magazine named him one of the 100 most influential people in the world; Furthermore Esquire named him one of the 75 most influential people of the 21st century, two years later. As of 2021, his films have grossed over $9.3 billion at the global box office, and Smith holds several US and international box office records.Smith first achieved recognition as part of a hip hop duo with DJ Jazzy Jeff, with whom he released five studio albums and the US Billboard Hot 100 top 20 singles "Parents Just Don't Understand", "A Nightmare on My Street", "Summertime", "Ring My Bell", and "Boom! Shake the Room" from 1984 and 1994. Smith released the solo albums Big Willie Style (1997), Willennium (1999), Born to Reign (2002), and Lost and Found (2005), which contained the US number one singles "Gettin' Jiggy wit It" and "Wild Wild West".
                </Text>
            </View>
        
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 450,
        height: 700,
        backgroundColor: '#333',
    },
    title:{
        color:'white',
        fontWeight:'bold',
        fontSize: 30,
    },
    paragraphContainer:{
        width: 400,
        height: 620,
        marginLeft:5,
        marginTop:15,
        backgroundColor:'#222',
        borderWidth:2,
        borderColor:'#000',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 4},
        elevation: 6,
    },
    paragraph:{
        color:'white',
        marginLeft:5,
        marginTop:5,
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DwayneJohnson() {
    return (
        <View style={styles.container} >
            <View style={{alignItems:'center', }}>
                <Text style={styles.title} >Dwayne Johnson</Text>
            </View>
            <View style={styles.paragraphContainer}>
                <Text style={styles.paragraph}>Dwayne Douglas Johnson (born May 2, 1972), also known by his ring name The Rock, is an American actor, businessman, and former professional wrestler. Widely regarded as one of the greatest professional wrestlers of all time,he wrestled for WWE for eight years prior to pursuing an acting career. His films have grossed over $3.5 billion in North America and over $10.5 billion worldwide, making him one of the world's highest-grossing and highest-paid actors.
                Born in the San Francisco Bay Area to a Samoan mother and a Black Nova Scotian father, Johnson played college football at the University of Miami, and won a national championship in 1991. He aspired to a professional career in football, but went undrafted in the 1995 NFL Draft. He signed with the Calgary Stampeders of the Canadian Football League (CFL), but was cut from the team in his first season. Part of the Anoa'i family, Johnson's father Rocky and maternal grandfather Peter Maivia were professional wrestlers, and he secured a contract with the World Wrestling Federation (WWF, now WWE) in 1996.He rose to prominence after developing the gimmick of a charismatic trash-talker and helped usher in the Attitude Era, an industry boom period in the late 1990s and early 2000s. Johnson left WWE in 2004 and returned in 2011 as a part-time performer until 2013, making sporadic appearances until retiring in 2019. A 10-time world champion, including the promotion's first of African-American descent, he is also a two-time Intercontinental Champion, a five-time Tag Team Champion, the 2000 Royal Rumble winner, and WWE's sixth Triple Crown champion. Johnson headlined the most-bought professional wrestling pay-per-view (WrestleMania XXVIII) and was featured among the most watched episodes of WWE's flagship television series (Raw and SmackDown).
                </Text>
            </View>
        
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 450,
        height: 900,
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
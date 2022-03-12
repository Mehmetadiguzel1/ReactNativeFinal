import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AdamDriver() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Adam Driver</Text>
      </View>
      <View style={styles.paragraphContainer}>
        <Text style={styles.paragraph}>
          Adam Douglas Driver (born November 19, 1983) is an American actor. He
          is the recipient of various accolades, including the Venice Film
          Festival Volpi Cup for Best Actor, in addition to nominations for a
          Tony Award, two Academy Awards, two British Academy Film Awards, two
          Golden Globe Awards, four Primetime Emmy Awards, and four Screen
          Actors Guild Awards. Martin Scorsese has called Driver "one of the
          finest, if not the finest" actors of his generation. Driver made his
          Broadway debut in Mrs. Warren's Profession (2010) and subsequently
          appeared in Man and Boy (2011). He rose to prominence with a
          supporting role in the HBO comedy-drama series Girls (2012–2017), for
          which he received three consecutive Primetime Emmy nominations. Driver
          began his film career in supporting roles in Steven Spielberg's
          Lincoln (2012), Noah Baumbach's Frances Ha (2012), and the Coen
          Brothers' Inside Llewyn Davis (2013). He won the Volpi Cup for Best
          Actor for his lead role in the drama Hungry Hearts (2014) and starred
          as a poet in Jim Jarmusch's Paterson (2016), the missionary in
          Scorsese's religious epic Silence (2016), and Steven Soderbergh's
          heist comedy Logan Lucky (2017). Driver gained wider recognition for
          playing Ben Solo / Kylo Ren in the Star Wars sequel trilogy
          (2015–2019). In 2019, he returned to theater in the Broadway revival
          of Burn This, for which he was nominated for the Tony Award for Best
          Actor in a Play. He garnered consecutive Academy Award nominations;
          Best Supporting Actor for Spike Lee's BlacKkKlansman (2018), and Best
          Actor for Noah Baumbach's Marriage Story (2019). In 2021, he starred
          in the musical Annette and two films directed by Ridley Scott, the
          medieval drama The Last Duel and the crime drama House of Gucci.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 450,
    height: 900,
    backgroundColor: "#252331",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  paragraphContainer: {
    width: 400,
    height: 620,
    marginLeft: 5,
    marginTop: 15,
    backgroundColor: "#222",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  paragraph: {
    color: "white",
    marginLeft: 5,
    marginTop: 5,
  },
});

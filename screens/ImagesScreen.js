import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function ImagesScreen({ navigation }) {
  return (
    <SafeAreaView showHorizontalScrollIndicator={false}>
      <ScrollView
        horizontal={true}
        style={{ backgroundColor: "#252331", height: 700 }}
      >
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Dwayne Johnson")}
            style={{ padding: 5 }}
          >
            <View style={styles.containerRow}>
              <Image
                style={styles.imagesContainer}
                source={{
                  uri: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
                }}
              />
              <Text style={styles.personInfo}> Dwayne Johnson </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Will Smith")}
            style={{ padding: 5 }}
          >
            <View style={styles.containerRow}>
              <Image
                style={styles.imagesContainer}
                source={{
                  uri: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-360x700,f_auto,q_auto:best/newscms/2016_01/921591/ss-160104-will-smith-tease.jpg",
                }}
              />
              <Text style={styles.personInfo}> Will Smith </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Adam Driver")}
            style={{ padding: 5 }}
          >
            <View style={styles.containerRow}>
              <Image
                style={styles.imagesContainer}
                source={{
                  uri: "https://images01.military.com/sites/default/files/styles/full/public/2021-10/1time%20adam%20driver%20marine%20corps%20veteran%201200.jpg",
                }}
              />
              <Text style={styles.personInfo}> Adam Driver </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 10,
  },
  personInfo: {
    marginTop: 5,
    color: "white",
    fontSize: 20,
  },
  containerRow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagesContainer: {
    width: 300,
    height: 400,
    marginLeft: 10,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
  },
});

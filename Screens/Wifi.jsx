import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MaterialHeader12 from "./components/MaterialHeader12";
import MaterialButtonViolet2 from "./components/MaterialButtonViolet2";
import MaterialIconButtonsFooter2 from "./components/MaterialIconButtonsFooter2";

function Index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialHeader12 style={styles.headerWifi}></MaterialHeader12>
      </View>
      <View style={styles.btn}>
        <MaterialButtonViolet2 style={styles.btnScan}></MaterialButtonViolet2>
      </View>
      <View style={styles.scrollView}>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          ></ScrollView>
        </View>
      </View>
      <View style={styles.footer}>
        <MaterialIconButtonsFooter2
          style={styles.footerWifi}
        ></MaterialIconButtonsFooter2>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    width: 360,
    height: 737
  },
  header: {
    width: 360,
    height: 56
  },
  headerWifi: {
    height: 56,
    width: 360
  },
  btn: {
    width: 113,
    height: 57
  },
  btnScan: {
    height: 57,
    width: 113,
    borderRadius: 15
  },
  scrollView: {
    width: 274,
    height: 443
  },
  scrollArea: {
    width: 274,
    height: 443,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 443,
    width: 274
  },
  footer: {
    width: 360,
    height: 56
  },
  footerWifi: {
    height: 56,
    width: 360
  }
});

export default Index;

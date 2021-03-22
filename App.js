import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, Image, Button, ScrollView } from 'react-native';

//import statement for slider
import Slider from '@react-native-community/slider';

import Header from './components/Header';

const Separator=() => (<View style={styles.separator} />);

export default function App() {
  const [unitNumber, setUnitNumber] = useState(0); 
  const [unitName, setUnitName] = useState('');
  const [imagepath, setImagePath] = useState();
  const [screenNumber, setScreenNumber] = useState(1);
  
  //the value of the slider should be between 0 and 1
  const [sliderValue, setSliderValue] = useState(0);

  const button_Clicked = (number, screen, name, path) => {
    setScreenNumber(screen);
    if(screen == 2)
    {
      setUnitNumber(number);
      setUnitName(name);
      setImagePath(path);
    }
  };

  if(screenNumber == 1){
    return (
      <ScrollView style={{backgroundColor: '#7CA1B4'}}>
        <Header title="PHYSICS ROCKS"/>
        <View style={styles.listButtons}>
          <Separator />
          <Button 
              title="THE MOTION HIGHWAY"
              onPress={() => button_Clicked(1, 2, "THE MOTION HIGHWAY", require("./assets/dummy_pic.jpg"))}   
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="FREE FALL"
              onPress={() => button_Clicked(2, 2, "FREE FALL", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="TRIGOMETRIC BLUES"
              onPress={() => button_Clicked(3, 2, "TRIGOMETRIC BLUES", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="THE FORCE"
              onPress={() => button_Clicked(4, 2, "THE FORCE", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="ENERGY IS CONSERVED"
              onPress={() => button_Clicked(5, 2, "ENERGY IS CONSERVED", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="MOMENTUM"
              onPress={() => button_Clicked(6, 2, "MOMENTUM", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="IT'S GOING ROUND IN CIRCLES"
              onPress={() => button_Clicked(7, 2, "IT'S GOING ROUND IN CIRCLES", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="ELECTROSTATIC SHUFFLE"
              onPress={() => button_Clicked(8, 2, "ELECTROSTATIC SHUFFLE", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="OHM'S LAW"
              onPress={() => button_Clicked(9, 2, "OHM'S LAW", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="THE RIGHT HAND RULES"
              onPress={() => button_Clicked(10, 2, "THE RIGHT HAND RULES", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="WAVES"
              onPress={() => button_Clicked(11, 2, "WAVES", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="LET THERE BE LIGHT"
              onPress={() => button_Clicked(12, 2, "LET THERE BE LIGHT", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
        </View>
      </ScrollView>
    );
  }
  else if(screenNumber == 2 || screenNumber == 23)
  {
    return (
      <View style={styles.topadjust}>
        <View style={styles.backButton}>
          <Button 
              title="< Back"
              onPress={() => button_Clicked(0, 1, "Unit 0", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
        </View>
        <Text style={styles.textTitle}>{unitName}</Text>
        <View style={{justifyContent: 'center', alignItems:'center', paddingTop: 20}}>
          <Image
            style={{ width: 300, height: 300}}
            source={imagepath}
          />
        </View>
        <View style={{justifyContent: 'center', marginVertical: 50, marginHorizontal: 50}}>
          <Button
              title="Lyrics"
              onPress={() => button_Clicked(0, 3, 'Unit 0', require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
        </View>
        <Slider
          style={{marginLeft: 10, marginRight:10, width: '95%', height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{paddingLeft: 10}}>00:00</Text>
          <Text style={{marginLeft: 'auto', paddingRight: 10}}>00:00</Text>
        </View>
        <View style={styles.musicControl}>
          <Button
            title="Play"
            onPress={() => {Alert.alert('Music Not added.')}}
            color = "#ff4500"
          />
          <Button
            title="Pause"
            onPress={() => {Alert.alert('Music Not added.')}}
            color = "#ff4500"
          />
        </View>
      </View>
    );
  }
  else
  {
    return(
      <ScrollView style={styles.topadjust}>
        <View style={styles.backButton}>
          <Button 
              title="< Back"
              onPress={() => button_Clicked(0, 23, 'Unit 0', require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
        </View>
        <Text style={styles.textTitle}>{unitName}</Text>
        switch(unitName) { 
          case "THE MOTION HIGHWAY": 
            <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>{require("./assets/01.txt")}</Text>;
            break;
          
          case "FREE FALL": 
            <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>{require("./assets/02.txt")}</Text>;
            break;

          case "TRIGOMETRIC BLUES": 
            <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>{require("./assets/03.txt")}</Text>;
            break;
          
          case "THE FORCE": 
            <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>{require("./assets/04.txt")}</Text>;
            break;
          
          case "ENERGY IS CONSERVED": 
            <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>{require("./assets/05.txt")}</Text>;
            break;
          
          case "MOMENTUM": 
            <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>{require("./assets/06.txt")}</Text>;
            break;
          
          case "IT'S GOING ROUND IN CIRCLES": 
            <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>{require("./assets/07.txt")}</Text>;
            break;

          case "ELECTROSTATIC SHUFFLE": 
            <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>{require("./assets/08.txt")}</Text>;
            break;
          
          case "OHM'S LAW": 
            <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>{require("./assets/09.txt")}</Text>;
            break;
          
          case "THE RIGHT HAND RULES": 
            <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>{require("./assets/10.txt")}</Text>;
            break;
          
          case "WAVES": 
            <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>{require("./assets/11.txt")}</Text>;
            break;
          
          case "LET THERE BE LIGHT": 
            <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>{require("./assets/12.txt")}</Text>;
            break;
          
          default: <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>{"No Lyrics to display."}</Text>;
        }
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  listButtons: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 50
  },
  musicControl: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textTitle: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20

  },
  topadjust: {
    flex: 1,
    paddingVertical: 45,
    backgroundColor: '#7CA1B4'
  },
  backButton: {
    paddingHorizontal: 45,
    flexDirection: 'row'
  },
  separator: {
    marginVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#737373'
  }
});
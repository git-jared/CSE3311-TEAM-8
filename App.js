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
              title="Unit 1"
              onPress={() => button_Clicked(1, 2, "Unit 1", require("./assets/dummy_pic.jpg"))}   
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="Unit 2"
              onPress={() => button_Clicked(2, 2, "Unit 2", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="Unit 3"
              onPress={() => button_Clicked(3, 2, "Unit 3", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="Unit 4"
              onPress={() => button_Clicked(4, 2, "Unit 4", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="Unit 5"
              onPress={() => button_Clicked(5, 2, "Unit 5", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="Unit 6"
              onPress={() => button_Clicked(6, 2, "Unit 6", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="Unit 7"
              onPress={() => button_Clicked(7, 2, "Unit 7", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="Unit 8"
              onPress={() => button_Clicked(8, 2, "Unit 8", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="Unit 9"
              onPress={() => button_Clicked(9, 2, "Unit 9", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="Unit 10"
              onPress={() => button_Clicked(10, 2, "Unit 10", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="Unit 11"
              onPress={() => button_Clicked(11, 2, "Unit 11", require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="Unit 12"
              onPress={() => button_Clicked(12, 2, "Unit 12", require("./assets/dummy_pic.jpg"))}
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
        <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>{'a'.repeat(3000)}</Text>
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

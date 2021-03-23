import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert, Image, Button, ScrollView } from 'react-native';

//import statement for slider
import Slider from '@react-native-community/slider';

import Header from './components/Header';

import {Audio} from 'expo-av';

const Separator=() => (<View style={styles.separator} />);


export default function App() {

  const [unitNumber, setUnitNumber] = useState(0); 
  const [unitName, setUnitName] = useState('');
  const [imagepath, setImagePath] = useState();
  const [screenNumber, setScreenNumber] = useState(1);

  const [isPlaying, setisPlaying] = useState(false); 
  const [volume, setvolume] = useState(1.0);

  const [sound, setSound] = useState();
  
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

  //Prints the current state of isPlaying when it is rendered or re-rendered.
  //useEffect(() => {console.log("re-render because isPlaying changed:", isPlaying), [isPlaying];
//   useEffect(() => {
//     return sound
//     ? () => {
//         console.log('Unloading Sound');
//         sound.unloadAsync(); }
//     : undefined;
// }, [sound]);
  

//   // if(isPlaying) {
//   //   const sound = new Audio.Sound.createAsync(require('./songs/01 The Motion Highway 9-11-10.wav'));
//   //   sound.loadAsync();
//   // }
//   //this.loadAudio();
// });
function getSongName(){
  var song_name = '';
  switch(unitNumber)
  {
    case 1:
      song_name = './songs/01 The Motion Highway 9-11-10.wav'; 
      break;

    
    case 2:
      song_name = './songs/02 FREE FALL 9-13-10.wav'; 
      break;

      
    case 3:
      song_name = './songs/03 Trigonometric Blues 9-13-10.wav'; 
      break;

    
    case 4:
      song_name = './songs/04 THE FORCE - 10-21-10.wav'; 
      break;

      
    case 5:
      song_name = './songs/05 ENERGY 10-15-11.wav'; 
      break;

    
    case 6:
      song_name = './songs/06 MOMENTUM-Momentum 12-7.wav'; 
      break;

    case 7:
      song_name = './songs/07 CENTRALPETAL FORCE - Circles.wav'; 
      break;

    case 8:
      song_name = './songs/08 STATIC ELECTRICITY - Electrostatic Shuffle 5-10-10.wav'; 
      break;

    case 9:
      song_name = './songs/09 CURRENT ELECTRICITY - Ohms Law 10-10-11'; 
      break;

    case 10:
      song_name = './songs/10 MAGNETISM-The Right Hand Rules'; 
      break;

    case 11:
      song_name = './songs/11 WAVES & SOUND-Frequently1 4-19-10'; 
      break;

    default:
      song_name = './songs/01 The Motion Highway 9-11-10.wav'; 
}
console.log(song_name);
return song_name;
};

//called from play btn plays teh audio sound for the respective unit.
async function playSound(){
  console.log('Loading Sound');
  const song = getSongName();
  const {sound} = await Audio.Sound.createAsync(require(song));
  setSound(sound);

  await sound.playAsync();
};

function pauseSound(){
  console.log('Stopping Sound');
  sound.unloadAsync();
};
/*
function loadAudio() {
const playbackInstance = new Audio.Sound();
const source = "./songs/01 The Motion Highway 9-11-10";
await playbackInstance.loadAsync(source, status, false)
};
*/
//onClick function for PAUSE btn that sets the state of isPlaying to false using hooks.
function handlePause () {
  
  setisPlaying(false);
  
};


//onClick function for PLAY btn that sets the state of isPlaying to true using hooks.
function handlePlay () {
  
  setisPlaying(true);
  
};
//Displays the front page of our app with all of the available units.
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
  //Displays the playmusic window with buttons "Play", "Back" and "Lyrics", and seek slider.
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
            onPress={() => playSound()}
            color = "#ff4500"
          />
          <Button
            title="Pause"
            onPress={() => pauseSound()}
            color = "#ff4500"
          />
        </View>
      </View>
    );
  }
  //Displys our dummy lyrics and includes button "Back" which redirects to the previous window.
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

//Layouts for containers.
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
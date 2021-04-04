import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Button, ScrollView } from 'react-native';

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
  const [songTitle, setSongTitle] = useState();
  const [musicPath, setMusicPath] = useState();

  const [isPlaying, setisPlaying] = useState(false); 
  const [volume, setvolume] = useState(1.0);
  const [isBuffering, setisBuffering] = useState(false);

  const [sound, setSound] = useState();
  
  //the value of the slider should be between 0 and 1
  const [sliderValue, setSliderValue] = useState(0);

  //Guards quick button taps
  //Allows one music function to complete before next one is called
  const [musicInitiated, setMusicInitiated] = useState(false);

  //json object contains all lyrics for thier respective unit songs.
  const lyricsData = require('./assets/lyrics.json');
  
  const button_Clicked = (number, screen, name, curr_title, path, curr_Music) => {
    if(musicInitiated == false)
    {
      setScreenNumber(screen);
      if(screen == 1 && isBuffering == true)
      {
        stopSound();
      }
      if(screen == 2)
      {
        setUnitNumber(number);
        setUnitName(name);
        setImagePath(path);
        setSongTitle(curr_title);
        setMusicPath(curr_Music);
      }
    }
  };

  //Plays respective unit song on Play button click.
  async function playSound(){
    if(isPlaying == false)
    {
      if(isBuffering == false && musicInitiated == false)
      {
        setMusicInitiated(true);
        //Load the music if "sound" is empty or unloaded
        console.log('Loading Sound');
        const {sound} = await Audio.Sound.createAsync(musicPath);
        setSound(sound);
        console.log('Playing Music')
        await sound.playAsync();
        setisBuffering(true);
        setisPlaying(true);
        setMusicInitiated(false);
      }
      else
      {
        if(musicInitiated == false)
        {
          setMusicInitiated(true);
          //Play the song
          console.log('Playing Music');
          await sound.playAsync();
          setisPlaying(true);
          setMusicInitiated(false);
        }
      }
    }
  };

  //Pauses current loaded song on Pause btn click.
  async function pauseSound(){
    if(isPlaying == true && musicInitiated == false)
    {
      setMusicInitiated(true);
      console.log('Pausing Music');
      sound.pauseAsync();
      setisPlaying(false);
      setMusicInitiated(false);
    }
  };

  //Stops song and unloads it from the Async.
  async function stopSound(){
    if(musicInitiated == false)
    {
      setMusicInitiated(true);
      console.log('Stopping Music');
      sound.unloadAsync();
      setisPlaying(false);
      setisBuffering(false);
      setMusicInitiated(false);
    }
  };

  //Skips the song of the 
  function skipSong() {
    console.log("song skipped")
    console.log(unitNumber)
    let skippedSong = unitNumber + 1
    console.log(skippedSong)

    switch (skippedSong) {
      case 2:
        button_Clicked(2, 2, "Unit-2", "FREE FALL", require("./assets/dummy_pic.jpg"), require('./assets/Song2.mp3'))
        stopSound()
        break;
      case 3:
        button_Clicked(3, 2, "Unit-3", "TRIGOMETRIC BLUES", require("./assets/dummy_pic.jpg"), require('./assets/Song3.mp3'))
        stopSound()
        break;
      case 4:
        button_Clicked(4, 2, "Unit-4", "THE FORCE", require("./assets/dummy_pic.jpg"), require('./assets/Song4.mp3'))
        stopSound()
        break;
      case 5:
        button_Clicked(5, 2, "Unit-5", "ENERGY IS CONSERVED", require("./assets/dummy_pic.jpg"), require('./assets/Song5.mp3'))
        stopSound()
        break;
      case 6:
        button_Clicked(6, 2, "Unit-6", "MOMENTUM", require("./assets/dummy_pic.jpg"), require('./assets/Song6.mp3'))
        stopSound()
        break;
      case 7:
        button_Clicked(7, 2, "Unit-7", "IT'S GOING ROUND IN CIRCLES", require("./assets/dummy_pic.jpg"), require('./assets/Song7.mp3'))
        stopSound()
        break;
      case 8:
        button_Clicked(8, 2, "Unit-8", "ELECTROSTATIC SHUFFLE", require("./assets/dummy_pic.jpg"), require('./assets/Song8.mp3'))
        stopSound()
        break;
      case 9:
        button_Clicked(9, 2, "Unit-9", "OHM'S LAW", require("./assets/dummy_pic.jpg"), require('./assets/Song9.mp3'))
        stopSound()
        break;
      case 10:
        button_Clicked(10, 2, "Unit-10", "THE RIGHT HAND RULES", require("./assets/dummy_pic.jpg"), require('./assets/Song10.mp3'))
        stopSound()
        break;
      case 11:
        button_Clicked(11, 2, "Unit-11", "WAVES", require("./assets/dummy_pic.jpg"), require('./assets/Song11.mp3'))
        stopSound()
        break;
      default:
        button_Clicked(1, 2, "Unit-1", "THE MOTION HIGHWAY", require("./assets/dummy_pic.jpg"), require('./assets/Song1.mp3'))
        stopSound()
        break;
    }
  }

  //Displays the front page of our app with all of the available units.
  if(screenNumber == 1){
    return (
      <ScrollView style={{backgroundColor: '#7CA1B4'}}>
        <Header title="PHYSICS ROCKS"/>
        <View style={styles.listButtons}>
          <Separator />
          <Button 
              title="THE MOTION HIGHWAY"
              onPress={() => button_Clicked(1, 2, "Unit-1", "THE MOTION HIGHWAY", require("./assets/dummy_pic.jpg"), require('./assets/Song1.mp3'))}   
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="FREE FALL"
              onPress={() => button_Clicked(2, 2, "Unit-2", "FREE FALL", require("./assets/dummy_pic.jpg"), require('./assets/Song2.mp3'))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="TRIGOMETRIC BLUES"
              onPress={() => button_Clicked(3, 2, "Unit-3", "TRIGOMETRIC BLUES", require("./assets/dummy_pic.jpg"), require('./assets/Song3.mp3'))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="THE FORCE"
              onPress={() => button_Clicked(4, 2, "Unit-4", "THE FORCE", require("./assets/dummy_pic.jpg"), require('./assets/Song4.mp3'))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="ENERGY IS CONSERVED"
              onPress={() => button_Clicked(5, 2, "Unit-5", "ENERGY IS CONSERVED", require("./assets/dummy_pic.jpg"), require('./assets/Song5.mp3'))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="MOMENTUM"
              onPress={() => button_Clicked(6, 2, "Unit-6", "MOMENTUM", require("./assets/dummy_pic.jpg"), require('./assets/Song6.mp3'))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="IT'S GOING ROUND IN CIRCLES"
              onPress={() => button_Clicked(7, 2, "Unit-7", "IT'S GOING ROUND IN CIRCLES", require("./assets/dummy_pic.jpg"), require('./assets/Song7.mp3'))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="ELECTROSTATIC SHUFFLE"
              onPress={() => button_Clicked(8, 2, "Unit-8", "ELECTROSTATIC SHUFFLE", require("./assets/dummy_pic.jpg"), require('./assets/Song8.mp3'))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="OHM'S LAW"
              onPress={() => button_Clicked(9, 2, "Unit-9", "OHM'S LAW", require("./assets/dummy_pic.jpg"), require('./assets/Song9.mp3'))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="THE RIGHT HAND RULES"
              onPress={() => button_Clicked(10, 2, "Unit-10", "THE RIGHT HAND RULES", require("./assets/dummy_pic.jpg"), require('./assets/Song10.mp3'))}
              color = "#ff4500"
          />
          <Separator />
          <Button 
              title="WAVES"
              onPress={() => button_Clicked(11, 2, "Unit-11", "WAVES", require("./assets/dummy_pic.jpg"), require('./assets/Song11.mp3'))}
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
        <Text style={styles.textTitle}>{songTitle}</Text>
        <View style={{justifyContent: 'center', alignItems:'center', paddingTop: 20}}>
          <Image
            style={{ width: 300, height: 300}}
            source={imagepath}
            resizeMode="contain"
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
          <Button
            title="Skip"
            onPress={() => skipSong()}
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
      <View style={styles.topadjust}>
        <View style={styles.backButton}>
          <Button 
              title="< Back"
              onPress={() => button_Clicked(0, 23, 'Unit 0', require("./assets/dummy_pic.jpg"))}
              color = "#ff4500"
          />
        </View>
        <Text style={styles.textTitle}>{songTitle}</Text>
          <Separator />
        <ScrollView>
          <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 200, textAlign: 'center', fontSize : 15 }}>{lyricsData[unitName]}</Text>
        </ScrollView>
      </View>
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
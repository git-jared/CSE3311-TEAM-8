import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, View, Text, Button, ScrollView, ImageBackground} from 'react-native';

//import statement for slider
import Slider from '@react-native-community/slider';
import Header from './Header';
import {Audio} from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Separator=() => (<View style={styles.separator} />);

export default function App() {

  const [unitNumber, setUnitNumber] = useState(0); 
  const [unitName, setUnitName] = useState('');
  const [imagepath, setImagePath] = useState();
  const [screenNumber, setScreenNumber] = useState(1);
  const [songTitle, setSongTitle] = useState();
  const [musicPath, setMusicPath] = useState();

  const [playOnce, setPlayOnce] = useState(false);

  const [isPlaying, setisPlaying] = useState(false); 
  const [volume, setvolume] = useState(1.0);
  const [isBuffering, setisBuffering] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [musicComplete, setMusicComplete] = useState(false);

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
        const sound = new Audio.Sound();
        await sound.loadAsync(musicPath);
        sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        const soundStatus = await sound.getStatusAsync();
        setDuration(soundStatus.durationMillis);
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

  const onPlaybackStatusUpdate = status => {
    setPosition(status.positionMillis);
    if(status.didJustFinish){
      console.log("songFinish");
      handleComplete();
    }
  }

  async function handleComplete() {
    skipForward();
    setMusicInitiated(false);
    setPlayOnce(false);
    setisBuffering(false);
    setisPlaying(false);
    setMusicComplete(true);
  };

  //Pauses current loaded song on Pause btn click.
  function pauseSound(){
    if(musicInitiated == false)
    {
      setMusicInitiated(true);
      console.log('Pausing Music');
      sound.pauseAsync();
      setisPlaying(false);
      setMusicInitiated(false);
    }
  };

  function handlePlayPause() {
    if(musicInitiated == false)
    {
      setMusicInitiated(true);
      if(isPlaying == false){
        playSound();
      }
      else{
        pauseSound();
      }
      setMusicInitiated(false);
    }
  };

  //Stops song and unloads it from the Async.
  function stopSound(){
    if(musicInitiated == false)
    {
      setMusicInitiated(true);
      console.log('Stopping Music');
      sound.unloadAsync();
      setisPlaying(false);
      setisBuffering(false);
      setPlayOnce(false);
      setMusicInitiated(false);
    }
  };


  function skipBack() {
    if(isBuffering == true) {
      stopSound();
    }
    let newSong = unitNumber - 1

    switch (newSong) {
      case 1:
        button_Clicked(1, 2, "Unit-1", "THE MOTION HIGHWAY", require("./assets/Motion_Highway.jpg"), require('./assets/Song1.mp3'))
        break;
      case 2:
        button_Clicked(2, 2, "Unit-2", "FREE FALL", require("./assets/Free_Fall.jpg"), require('./assets/Song2.mp3'))
        break;
      case 3:
        button_Clicked(3, 2, "Unit-3", "TRIGOMETRIC BLUES", require("./assets/Trig_Blues.jpg"), require('./assets/Song3.mp3'))
        break;
      case 4:
        button_Clicked(4, 2, "Unit-4", "THE FORCE", require("./assets/The_Force.jpg"), require('./assets/Song4.mp3'))
        break;
      case 5:
        button_Clicked(5, 2, "Unit-5", "ENERGY IS CONSERVED", require("./assets/Energy_Conserved.jpg"), require('./assets/Song5.mp3'))
        break;
      case 6:
        button_Clicked(6, 2, "Unit-6", "MOMENTUM", require("./assets/Momentum.jpg"), require('./assets/Song6.mp3'))
        break;
      case 7:
        button_Clicked(7, 2, "Unit-7", "IT'S GOING ROUND IN CIRCLES", require("./assets/Circles.jpg"), require('./assets/Song7.mp3'))
        break;
      case 8:
        button_Clicked(8, 2, "Unit-8", "ELECTROSTATIC SHUFFLE", require("./assets/Electrostatic_Shuffle.jpg"), require('./assets/Song8.mp3'))
        break;
      case 9:
        button_Clicked(9, 2, "Unit-9", "OHM'S LAW", require("./assets/Ohms_Law.jpg"), require('./assets/Song9.mp3'))
        break;
      case 10:
        button_Clicked(10, 2, "Unit-10", "THE RIGHT HAND RULES", require("./assets/Right_Hand_Rule.jpg"), require('./assets/Song10.mp3'))
        break;
      default:
        button_Clicked(11, 2, "Unit-11", "WAVES", require("./assets/Waves.jpg"), require('./assets/Song11.mp3'))
        break;
    }
  }

  
  function skipForward() {
    if(isBuffering == true) {
      stopSound();
    }
    let skippedSong = unitNumber + 1;

    switch (skippedSong) {
      case 2:
        button_Clicked(2, 2, "Unit-2", "FREE FALL", require("./assets/Free_Fall.jpg"), require('./assets/Song2.mp3'))
        break;
      case 3:
        button_Clicked(3, 2, "Unit-3", "TRIGOMETRIC BLUES", require("./assets/Trig_Blues.jpg"), require('./assets/Song3.mp3'))
        break;
      case 4:
        button_Clicked(4, 2, "Unit-4", "THE FORCE", require("./assets/The_Force.jpg"), require('./assets/Song4.mp3'))
        break;
      case 5:
        button_Clicked(5, 2, "Unit-5", "ENERGY IS CONSERVED", require("./assets/Energy_Conserved.jpg"), require('./assets/Song5.mp3'))
        break;
      case 6:
        button_Clicked(6, 2, "Unit-6", "MOMENTUM", require("./assets/Momentum.jpg"), require('./assets/Song6.mp3'))
        break;
      case 7:
        button_Clicked(7, 2, "Unit-7", "IT'S GOING ROUND IN CIRCLES", require("./assets/Circles.jpg"), require('./assets/Song7.mp3'))
        break;
      case 8:
        button_Clicked(8, 2, "Unit-8", "ELECTROSTATIC SHUFFLE", require("./assets/Electrostatic_Shuffle.jpg"), require('./assets/Song8.mp3'))
        break;
      case 9:
        button_Clicked(9, 2, "Unit-9", "OHM'S LAW", require("./assets/Ohms_Law.jpg"), require('./assets/Song9.mp3'))
        break;
      case 10:
        button_Clicked(10, 2, "Unit-10", "THE RIGHT HAND RULES", require("./assets/Right_Hand_Rule.jpg"), require('./assets/Song10.mp3'))
        break;
      case 11:
        button_Clicked(11, 2, "Unit-11", "WAVES", require("./assets/Waves.jpg"), require('./assets/Song11.mp3'))
        break;
      default:
        button_Clicked(1, 2, "Unit-1", "THE MOTION HIGHWAY", require("./assets/Motion_Highway.jpg"), require('./assets/Song1.mp3'))
        break;
    }
  }

  function timeConversion(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  function handleSeek(seekValue) {
    sound.setPositionAsync(seekValue);
  }

  //Displays the front page of our app with all of the available units.
  if(screenNumber == 1){
    return (
    <ScrollView style = {{backgroundColor: 'dimgrey'}}>
        <Header title="PHYSICS ROCKS"/>
        <View>

          <Separator />

          <View style={styles.homeRow}>

            <TouchableOpacity onPress={() => button_Clicked(1, 2, "Unit-1", "THE MOTION HIGHWAY", require("./assets/Motion_Highway.jpg"), require('./assets/Song1.mp3'))}
              style={{alignItems:'center'}}>
                <Image 
                style ={styles.imageStyle}
                  source = {require("./assets/Motion_Highway.jpg")}  
                />
                <Text style={styles.buttonName}>Motion</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => button_Clicked(2, 2, "Unit-2", "FREE FALL", require("./assets/Free_Fall.jpg"), require('./assets/Song2.mp3'))}
              style={{alignItems:'center'}}>
                <Image 
                style ={styles.imageStyle}
                  source = {require("./assets/Free_Fall.jpg")}  
                />
                <Text style={styles.buttonName}>Free Fall</Text>
            </TouchableOpacity>

          </View>
          
          <Separator />

          <View style={styles.homeRow}>

            <TouchableOpacity onPress={() => button_Clicked(3, 2, "Unit-3", "TRIGOMETRIC BLUES", require("./assets/Trig_Blues.jpg"), require('./assets/Song3.mp3'))}
              style={{alignItems:'center'}}>
                <Image 
                style ={styles.imageStyle}
                  source = {require("./assets/Trig_Blues.jpg")}  
                />
                <Text style={styles.buttonName}>Trigonometry</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => button_Clicked(4, 2, "Unit-4", "THE FORCE", require("./assets/The_Force.jpg"), require('./assets/Song4.mp3'))}
              style={{alignItems:'center'}}>
                <Image 
                style ={styles.imageStyle}
                  source = {require("./assets/The_Force.jpg")}  
                />
                <Text style={styles.buttonName}>Force</Text>
            </TouchableOpacity>

          </View>
          
          <Separator />

          <View style={styles.homeRow}>

            <TouchableOpacity onPress={() => button_Clicked(5, 2, "Unit-5", "ENERGY IS CONSERVED", require("./assets/Energy_Conserved.jpg"), require('./assets/Song5.mp3'))}
              style={{alignItems:'center'}}>
                <Image 
                style ={styles.imageStyle}
                  source = {require("./assets/Energy_Conserved.jpg")}  
                />
                <Text style={styles.buttonName}>Energy</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => button_Clicked(6, 2, "Unit-6", "MOMENTUM", require("./assets/Momentum.jpg"), require('./assets/Song6.mp3'))}
              style={{alignItems:'center'}}>
                <Image 
                style ={styles.imageStyle}
                  source = {require("./assets/Momentum.jpg")}  
                />
                <Text style={styles.buttonName}>Momentum</Text>
            </TouchableOpacity>

          </View>
          
          <Separator />

          <View style={styles.homeRow}>

            <TouchableOpacity onPress={() => button_Clicked(7, 2, "Unit-7", "IT'S GOING ROUND IN CIRCLES", require("./assets/Circles.jpg"), require('./assets/Song7.mp3'))}
              style={{alignItems:'center'}}>
                <Image 
                style ={styles.imageStyle}
                  source = {require("./assets/Circles.jpg")}  
                />
                <Text style={styles.buttonName}>Circles</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => button_Clicked(8, 2, "Unit-8", "ELECTROSTATIC SHUFFLE", require("./assets/Electrostatic_Shuffle.jpg"), require('./assets/Song8.mp3'))}
              style={{alignItems:'center'}}>
                <Image 
                style ={styles.imageStyle}
                  source = {require("./assets/Electrostatic_Shuffle.jpg")}  
                />
                <Text style={styles.buttonName}>Electricity</Text>
            </TouchableOpacity>

          </View>
          
          <Separator />

          <View style={styles.homeRow}>

            <TouchableOpacity onPress={() => button_Clicked(9, 2, "Unit-9", "OHM'S LAW", require("./assets/Ohms_Law.jpg"), require('./assets/Song9.mp3'))}
              style={{alignItems:'center'}}>
                <Image 
                style ={styles.imageStyle}
                  source = {require("./assets/Ohms_Law.jpg")}  
                />
                <Text style={styles.buttonName}>Ohms Law</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => button_Clicked(10, 2, "Unit-10", "THE RIGHT HAND RULES", require("./assets/Right_Hand_Rule.jpg"), require('./assets/Song10.mp3'))}
              style={{alignItems:'center'}}>
                <Image 
                style ={styles.imageStyle}
                  source = {require("./assets/Right_Hand_Rule.jpg")}  
                />
                <Text style={styles.buttonName}>Right Hand Rule</Text>
            </TouchableOpacity>

          </View>
          
          <Separator />

          <View style={{paddingHorizontal: '12%', justifyContent: 'space-between'}}>

            <TouchableOpacity onPress={() => button_Clicked(11, 2, "Unit-11", "WAVES", require("./assets/Waves.jpg"), require('./assets/Song11.mp3'))}
              style={{alignItems:'center'}}>
                <Image 
                style ={styles.imageStyle}
                  source = {require("./assets/Waves.jpg")}  
                />
                <Text style={styles.buttonName}>Waves</Text>
            </TouchableOpacity>

          </View>
          
          <Separator />

        </View>
      </ScrollView>
    );
  }

  //Displays the playmusic window with buttons "Play", "Back" and "Lyrics", and seek slider.
  else if(screenNumber == 2)
  {
    if(playOnce == false || musicComplete == true){
      setPlayOnce(true);
      setMusicComplete(false);
      playSound();
    }
    return (
      <ImageBackground source={imagepath} style={{width: '100%', height: '100%'}} imageStyle={{opacity: 0.4}}>

          <View style={styles.backButton}>
            <Button 
                title="< Back"
                onPress={() => button_Clicked(0, 1, "Unit 0", require("./assets/dummy_pic.jpg"))}
                color = "purple"
            />
          </View>

          <Text style={styles.textTitle}>{songTitle}</Text>

          <View style={{justifyContent: 'center', alignItems:'center', paddingTop: '5%'}}>
            <ScrollView style={{ width: '100%', height: '50%'}}>
            <Text style={{ marginHorizontal: '20%', marginVertical : '7%', textAlign: 'center', fontSize : 18, fontWeight: 'bold' }}>{lyricsData[unitName]}</Text>
            </ScrollView>
          </View>

          <Separator/>

          <Slider
            style={{marginLeft: 10, marginRight:10, width: '95%', height: '5%'}}
            minimumValue={0}
            maximumValue={duration}
            value={position}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onSlidingComplete={(position)=>handleSeek(position)}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={{paddingLeft: 15, fontWeight: 'bold' }}>{timeConversion(position)}</Text>
            <Text style={{marginLeft: 'auto', paddingRight: 15, fontWeight: 'bold' }}>{timeConversion(duration)}</Text>
          </View>
          <View style={styles.musicControl}>

            <TouchableOpacity onPress={() => skipBack()}>
              <Ionicons name="md-play-skip-back-sharp" size={34} color="black"  backgroundColor="#7CA1B4"/>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => handlePlayPause()}>
              {isPlaying ?
                (<AntDesign name="pausecircleo" size={70} color="black" backgroundColor="#7CA1B4"/>) :
                (<AntDesign name="playcircleo" size={70} color="black" backgroundColor="#7CA1B4"/>)
              }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => skipForward()}>
              <Ionicons name="ios-play-skip-forward-sharp" size={34} color="black"  backgroundColor="#7CA1B4"/>
            </TouchableOpacity>
          
          </View>

      </ImageBackground>
    );
  }
};

//Layouts for containers.
const styles = StyleSheet.create({
  musicControl: {
    flex: 1,
    marginVertical: '10%',
    marginHorizontal: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textTitle: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: '5%'
  },
  backButton: {
    paddingLeft: '10%',
    paddingTop: '12%',
    flexDirection: 'row'
  },
  separator: {
    marginVertical: 14
  },
  imageStyle: {
    width: 126, 
    height: 156, 
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white'
  },
  homeRow: {
    paddingHorizontal: '12%',
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  buttonName: {
    color: 'white', 
    paddingTop: 5, 
    fontSize: 15, 
    fontWeight: 'bold'
  }
});

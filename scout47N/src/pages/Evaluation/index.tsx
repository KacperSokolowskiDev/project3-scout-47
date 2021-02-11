import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StatusBar } from 'react-native';
import * as MediaLibrary from "expo-media-library";
import * as Permissions from 'expo-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';

import avatar from '../../assets/avatar.png';

import {
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
// import axios from "axios"
import { StyleSheet } from 'react-native';

const Logo = require("../../assets/scout47Logo.png");
import { Image } from 'react-native';

import {
  Avatar,
  Container,
  RecordButton,
  RecordButtonIncative,
  Header,
  Row,
  Button,
  Description,
} from './styles';

import Evaluate from './Evaluate'

// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJmaXJzdG5hbWUiOiJQaWVycmUiLCJsYXN0bmFtZSI6IkdpZGRpb0Jhc3RpYSIsImVtYWlsIjoicGllcnJlZ2lkZGlvc2Nvb3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkYXJnb24yaSR2PTE5JG09NDA5Nix0PTMscD0xJC96QnFZdnNQb1pSTzEweXFqdjRrQmdKaXRvRTFaOWdDNVdvMmozREFvT2ska0I4L3FXZTBFY3VJZjUza0FEQTBmVGYrU1dNZ1B6Y2V2YTcvZlhrUnU5YyIsInRlbGVwaG9uZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMS0wMi0wMyIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMDMiLCJQcml2aWxlZ2UiOnsiaWQiOjQsInJvbGUiOiJzY291dCIsImFnZUdyYWRlIjpbMjAwNSwyMDA0XSwiY3JlYXRlZEF0IjoiMjAyMS0wMi0wMyIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMDMiLCJVc2VySWQiOjR9fSwiaWF0IjoxNjEyMzU5MDA5LCJleHAiOjE2MTIzODA2MDl9.9dYSs7xUXA7wjfrnTqq0yENBs8WxX_vg2EzCAiv1EL8`

var timerId;
var globRecording;

const Evaluation = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [recording, setRecording] = useState<boolean | null>(null);
  const [video, setVideo] = useState<string | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isVideoEvaluation, setIsVideoEvaluation] = useState(null)
  const [toggleVideo,setToggleVideo] = useState(false);
  const [player, setPlayer] = useState({});


  const takeAndSaveVideo = async () => {
    try {
      if (!recording) {
        setRecording(true);
        globRecording = true;
  
        const video = await cameraRef.recordAsync({
          quality: Camera.Constants.VideoQuality["720p"],
        });
        const asset = await MediaLibrary.createAssetAsync(video.uri);
        const fileInfo = await MediaLibrary.getAssetInfoAsync(asset.id);
        setTimeout(async () => {
          setVideo(video.uri);
          AsyncStorage.setItem("video", JSON.stringify(fileInfo));
        }, 500);
      }
  
      cameraRef.stopRecording();
      setRecording(false);
      let vid = await AsyncStorage.getItem("video");
      const file = await JSON.parse(vid);
      const form = new FormData();
      form.append("file", {
        uri: file.localUri,
        name: file.filename,
        type: "video/quicktime",
      });
      setIsVideoEvaluation(form);

    } catch (error) {
      console.log("error record", error)

    }
  };

  const pauseVideo = async () => {
    // console.log("pausing video")
    await cameraRef.pausePreview()
  }
  
  const toggleTheVideo = () => {
    stopCamera();
    console.log("toggle video before", toggleVideo);
    setToggleVideo(!toggleVideo);
    console.log("toggle video after", toggleVideo);
  }
  
  const stopCamera = async () => {
    cameraRef.pausePreview();
  }

  const navigation = useNavigation();

  const getPlayer = async () => {
    try {
      let focusedPlayer = await AsyncStorage.getItem("focusedPlayer");
      console.log("focused player ", focusedPlayer);
      setPlayer(JSON.parse(focusedPlayer)); 

    } catch (error) {
      console.log("error get player ", error)
    }
  };


  useEffect(() => {
    const permission = async () => {
      const { status } = await Camera.requestPermissionsAsync();
      const rollPermission = await Permissions.getAsync(Permissions.CAMERA_ROLL);

      if (rollPermission.status !== 'granted') {
          const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          setHasPermission(status === 'granted' && newPermission.status === 'granted');
      } else {
        setHasPermission(status === 'granted' && rollPermission.status === 'granted');
      }

      StatusBar.setHidden(true);
    }
    permission();
    getPlayer();

  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const close = () => {
    StatusBar.setHidden(false);
    navigation.goBack();
  }

 
  return (
    <>
    { !toggleVideo? ( 
    <Camera style={{ flex: 1 }} type={type} ref={(ref) => { setCameraRef(ref) }}>
      <Container> 
        <Header>
          <Button
            onPress={() => close()}
          >
            <AntDesign name="close" size={28} color="#fff" />
          </Button>
          <Avatar source={ { uri: player.picture }  }   />
          <Text style={styles.title}>EVALUATIONS : {player.firstname}</Text>
          <Button onPress={()=>toggleTheVideo()} title={"Camera?"}>
            <Text style={styles.textCamera}>Camera 0/I</Text>
          </Button>

          <Button
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back,
              );
            }}
          >
            <MaterialCommunityIcons
              name="rotate-right"
              size={28}
              color="#fff"
            />
          </Button>
        </Header>

        <Evaluate 
          isVideoEvaluation={isVideoEvaluation} 
          player={player}
        />
        {
          toggleVideo ? (<RecordButton 
            onPress={takeAndSaveVideo}/>) : (<RecordButton 
              onPress={takeAndSaveVideo}/>)
        }
        {/* <RecordButton 
            onPress={takeAndSaveVideo}/> */}
            {/* close={close} */}
      </Container>
    </Camera>) : ( <Container style={styles.container}>
        <Header>
          <Button
            onPress={() => close()}
          >
            <AntDesign name="close" size={28} color="#fff" />
          </Button>
          <Avatar source={ { uri: player.picture }  }   />
          <Text style={styles.title}>EVALUATIONS : {player.firstname}</Text>
          <Button onPress={()=>toggleTheVideo()} title={"Camera?"}>
            <Text style={styles.textCamera}>Camera o/1</Text>
          </Button>
         <Button
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back,
              );
            }}
          >
            <MaterialCommunityIcons
              name="rotate-right"
              size={28}
              color="#fff"
            />
          </Button>
        </Header>
        <Evaluate 
          isVideoEvaluation={isVideoEvaluation} 
          player={player}
        />
        {
          toggleVideo ? (<RecordButton 
            onPress={takeAndSaveVideo}/>) : (<RecordButtonIncative 
              onPress={takeAndSaveVideo}/>)
        }
        {/* <RecordButton 
            onPress={takeAndSaveVideo}/> */}
            {/* close={close} */}
      </Container>) }
   
  </>
  )
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#000",
  },
  logo: {
    height: 250,
    marginLeft: "17.5%",
    width: 250,
  },
  textCamera: {
    color: "white",
  },
  title: {
    color: "white",
  }
});


export default Evaluation;

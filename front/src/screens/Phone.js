import React, {useLayoutEffect, useState} from 'react';
import {FlatList, TouchableOpacity, Image} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {useHeaderHeight} from '@react-navigation/stack';

import {useTheme} from '../hooks';
import {Block, Button, Input, Switch, Modal, Text} from '../components';

import colors from '../config/colors'

// buttons example
const Phone = () => {
  const [showModal, setModal] = useState(false);
  const [quantity, setQuantity] = useState('01');
  const {assets, gradients, sizes} = useTheme();

  return (
    <Block paddingHorizontal={sizes.padding} marginRight={30} style={{flexDirection:'column'}}>
      <Text h4 bold marginBottom={sizes.s} color={colors.darkwhite} style={{alignSelf:'center', marginRight:20}}>
        Samsung Galaxy Note 20
      </Text>

      <Image source={require('../images/Samsung_Note20_1.jpg')}
      style={{resizeMode:'contain',
      width:250,
      height:250,
      alignSelf:'center',
      borderRadius:20,
      marginBottom:30
      }}
      >
      </Image>

      <Block style={{flexDirection:'column', marginBottom:15}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{margin:3}}>
          Pros
        </Text>

        <Text p  marginBottom={sizes.s} color={colors.white} style={{margin:1}}>
          good quality of speakers, fast memory, good screen, dust/water resistant, Samsung Wireless DeX, ANT+, Bixby natural language commands and dictation, Samsung Pay
        </Text>
      </Block>

      <Block style={{flexDirection:'column', marginBottom:15}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{margin:3}}>
          Cons
        </Text>

        <Text p  marginBottom={sizes.s} color={colors.white} style={{margin:1}}>
          price, no 3.5mm jack
        </Text>
      </Block>

      <Block style={{flexDirection:'column', marginBottom:15}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{margin:3}}>
          Launch
        </Text>

        <Text p  marginBottom={sizes.s} color={colors.white} style={{margin:1}}>
          5 August 2020
        </Text>
      </Block>

      <Block style={{flexDirection:'column', marginBottom:15}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{marginTop:3}}>
          Body
        </Text>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
            Weight
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
            192 grams
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
            Build
          </Text>

          <Text semibold color={colors.white}  marginBottom={5}>
            Glass front (Gorilla Glass 5), plastic back
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
            SIM
          </Text>

          <Text semibold color={colors.white}  marginBottom={5}>
          (1,Nano and eSIM) OR (2,Hybrid,Nano,dual-standby)
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
            Protection
          </Text>

          <Text semibold color={colors.white}  marginBottom={5}>
            IP68 dust/water resistant (up to 1.5m for 30 mins)
            {"\n"}
            Corning Gorilla Glass 5
          </Text>
        </Block>

      </Block>

      <Block style={{flexDirection:'column', marginBottom:15}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{marginTop:3}}>
          Display
        </Text>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
            Size
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
            6.7" Super AMOLED Plus, HDR10+
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Resolution
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
            1080 × 2400
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Always-on display
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
            True
          </Text>
        </Block>

        </Block>

        <Block style={{flexDirection:'column', marginBottom:15}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{marginTop:3}}>
          Platform
        </Text>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
            OS
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
            Android 10, can up to 11, One UI 3.0
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Chipset
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
            Exynos 990 (7 nm+) - Global
            {"\n"}
            Qualcomm SM8250 Snapdragon 865 5G+ (7 nm+) - USA
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          GPU
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
            Mali-G77 MP11 - Global
            {"\n"}
            Adreno 650 - USA
          </Text>
        </Block>

        </Block>


        <Block style={{flexDirection:'column', marginBottom:15}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{marginTop:3}}>
          Memory
        </Text>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
            Internal
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
            256GB Internal and 8GB RAM
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Type of Storage
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
            UFS 3.0
          </Text>
        </Block>

      </Block>

        <Block style={{flexDirection:'column', marginBottom:15}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{marginTop:3}}>
          Main Camera
        </Text>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
            Triple
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          12 MP, f/1.8, 26mm (wide), 1/1.76", 1.8µm, Dual Pixel PDAF, OIS
          {"\n"}
          64 MP, f/2.0, 27mm (telephoto), 1/1.72", 0.8µm, PDAF, OIS, 3x hybrid zoom
          {"\n"}
          12 MP, f/2.2, 120˚, 13mm (ultrawide), 1/2.55", 1.4µm
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Features
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          LED flash, auto-HDR, panorama
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Video
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+, stereo sound rec., gyro-EIS & OIS
          </Text>
        </Block>

        </Block>

 <Block style={{flexDirection:'column', marginBottom:15}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{marginTop:3}}>
          Selfie Camera
        </Text>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Single
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          10 MP, f/2.2, 26mm (wide), 1/3.2", 1.22µm, Dual Pixel PDAF
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Features
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          Dual video call, Auto-HDR
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Video
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          4K@30/60fps, 1080p@30fps
          </Text>
        </Block>

        </Block>


        <Block style={{flexDirection:'column', marginBottom:15}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{marginTop:3}}>
        Sound
        </Text>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Loudspeaker
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          stereo speakers
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          3.5mm jack
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          No
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Quality
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          32-bit/384kHz audio
          {"\n"}
          Tuned by AKG
          </Text>
        </Block>

        </Block>

 <Block style={{flexDirection:'column', marginBottom:15}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{marginTop:3}}>
          Network
        </Text>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          WLAN
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct, hotspot
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Bluetooth
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          5.0, A2DP, LE, aptX
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          GPS
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          Yes, with A-GPS, GLONASS, BDS, GALILEO
          </Text>
        </Block>


        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          NFC
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          Yes
          </Text>
        </Block>


        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Radio
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          FM radio (Snapdragon model only; market/operator dependent)
          </Text>
        </Block>

      </Block>


        <Block style={{flexDirection:'column', marginBottom:15}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{marginTop:3}}>
        USB
        </Text>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Type
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          USB Type-C 3.2
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          On The Go (OTG)
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          Yes
          </Text>
        </Block>

      </Block>


      <Block style={{flexDirection:'column', marginBottom:15}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{marginTop:3}}>
          Features
        </Text>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Face ID
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          No
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Fingertprint
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          Yes, under display, ultrasonic
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Accelerometer
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          Yes
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Gyroscope
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          Yes
          </Text>
        </Block>


        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Proximity
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          Yes
          </Text>
        </Block>


        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Compass
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          Yes
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Barometer
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          Yes
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          H2O
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          No
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Beat rate
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          No
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Temperature
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          No
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Laser
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          No
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Other Features
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          Samsung Wireless DeX (desktop experience support)
          {"\n"}
          ANT+
          {"\n"}
          Bixby natural language commands and dictation
          {"\n"}
          Samsung Pay (Visa, MasterCard certified)
          </Text>
        </Block>

      </Block>

      <Block style={{flexDirection:'column', marginBottom:15}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{marginTop:3}}>
          Battery
        </Text>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Capacity
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          4300 mAh
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Type
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          Li-Ion
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Removable
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          No
          </Text>
        </Block>


        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Features
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          Fast charging 25W
          {"\n"}
          USB Power Delivery 3.0
          {"\n"}
          Fast Qi/PMA wireless charging 15W
          {"\n"}
          Reverse wireless charging 4.5W
          </Text>
        </Block>

      </Block>


      <Block style={{flexDirection:'column', marginBottom:15}}>
        <Text h5 semibold marginBottom={sizes.s} color={colors.darkwhite} style={{marginTop:3}}>
          Misc
        </Text>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Colors
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          Mystic Green, Mystic Bronze, Mystic Gray, Mystic Red, Mystic Blue
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Approximate price
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          $700
          </Text>
        </Block>

        <Block style={{flexDirection:'row'}}>
          <Text  color={colors.darkwhite} marginRight={15}>
          Models
          </Text>

          <Text semibold color={colors.white} marginBottom={5}>
          SM-N980F, SM-N980F/DS
          </Text>
        </Block>

      </Block>

    </Block>
    
  );
};


const Components = () => {
  const {assets, sizes} = useTheme();
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();

  useLayoutEffect(() => {
    navigation.setOptions({
    });
  }, [assets.header, navigation, sizes.width, headerHeight]);

  return (
    <Block safe>
      <Block
        scroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: sizes.padding}}>
        <Block>
          <Phone />
        </Block>
      </Block>
    </Block>
  );
};

export default Components;

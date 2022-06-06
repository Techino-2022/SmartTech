import React, {useContext, useLayoutEffect, useState} from 'react';
import {Image} from 'react-native';

import {useNavigation} from '@react-navigation/core';
import {useHeaderHeight} from '@react-navigation/stack';
import YoutubePlayer from 'react-native-youtube-iframe';

import {useTheme} from '../hooks';
import {Block, Text} from '../components';

import {Table, Row, Rows} from 'react-native-table-component';
import ThemeContext from '../config/context';
import FloatButton from '../components/FloatButton';

const Phone = ({data}) => {
  const d = new Date(data.date);

  const cameraMerge = () => {
    let cameras = '';
    data.camera.map((cam, index, array) => {
      cameras += `${cam.pixel_count} MP, f/${cam.diaphragm}, ${cam?.features}`;
      if (array.length - 1 !== index) cameras += '\n';
    });
    return cameras;
  };

  const mainData = {
    prosAndConsTitle: ['Pros', 'Cons'],
    prosAndCons: [[data.pros, data.cons]],
    Release: [d.toDateString()],
  };

  const bodyData = {
    bodyTitle: ['Body'],
    bodyDetails: [
      ['weight', `${data.body.weight} grams`],
      [
        'Build',
        `front ${data.body.material[0].front_glass}, back ${data.body.material[0].back_glass}`,
      ],
      ['SIM', data.network.sim_slot],
      ['Protection', `${data.body?.ip_certificate}, ${data.body.protection}`],
    ],
  };

  const displayData = {
    displayTitle: ['Display'],
    displayDetails: [
      ['Size', `${data.body.size}" ${data.body.display_features}`],
      ['Resolution', data.body.resolution],
      [
        'Always-on display',
        `${data.body.always_on_display ? 'True' : 'False'}`,
      ],
    ],
  };

  const platformData = {
    platformTitle: ['Platform'],
    platformDetails: [
      [
        'OS',
        `${data.operating_system[0].os} ${data.operating_system[0].version}, ${data.operating_system[0].interface}`,
      ],
      ['Chipset', data.platform[0].cpu_chipset],
      ['GPU', data.platform[0].gpu_chipset],
    ],
  };

  const memoryData = {
    memoryTitle: ['Memory'],
    memoryDetails: [
      [
        'Internal',
        `${data.storage[0].size}GB Internal and ${data.ram.number}GB RAM`,
      ],
      ['Type of Storage', data.storage[0].technology],
    ],
  };

  //TODO complete camera section
  const mainCameraData = {
    mainCameraTitle: ['Main Camera'],
    mainCameraDetails: [
      ['Cameras', cameraMerge()],
      ['Features', data.back_camera_features],
      ['Video', data.back_camera_video_quality],
    ],
  };

  const soundData = {
    soundTitle: ['Sound'],
    soundDetails: [
      ['Loudspeaker', 'stereo speakers'],
      ['3.5mm jack', `${data.sound.jack ? 'Yes' : 'No'}`],
      ['Quality', data.sound[0].speaker_quality],
    ],
  };

  const networkData = {
    networkTitle: ['Network'],
    networkDetails: [
      ['Bluetooth', 'Yes, with A-GPS, GLONASS, BDS, GALILEO'],
      ['GPS', 'Yes, with A-GPS, GLONASS, BDS, GALILEO'],
      ['NFC', 'Yes'],
      ['Radio', 'FM radio (Snapdragon model only; market/operator dependent)'],
    ],
  };

  const usbData = {
    usbTitle: ['USB'],
    usbDetails: [
      ['Type', 'USB Type-C 3.2'],
      ['On The Go (OTG)', 'Yes'],
    ],
  };

  const featuresData = {
    featuresTitle: ['Features'],
    featuresDetails: [
      ['Face ID', 'No'],
      ['Fingertprint', 'Yes, under display, ultrasonic'],
      ['Accelerometer', 'Yes'],
      ['Gyroscope', 'Yes'],
      ['Proximity', 'Yes'],
      ['Compass', 'Yes'],
      ['Barometer', 'Yes'],
      ['H2O', 'No'],
      ['Beat rate', 'No'],
      ['Temperature', 'No'],
      ['Laser', 'No'],
    ],
    otherFeatures: [
      'Other Features',
      'Samsung Wireless DeX (desktop experience support)\nANT+\nBixby natural language commands and dictation\nSamsung Pay (Visa, MasterCard certified)',
    ],
  };

  const batteryData = {
    batteryTitle: ['Battery'],
    batteryDetails: [
      ['Capacity', '4300 mAh'],
      ['Type', 'Li-Ion'],
      ['Removable', 'No'],
    ],
    batteryFeatures: [
      'Battery Features',
      'Fast charging 25W\nUSB Power Delivery 3.0\nFast Qi/PMA wireless charging 15W\nReverse wireless charging 4.5W',
    ],
  };

  const miscData = {
    miscTitle: ['Misc'],
    miscDetails: [
      [
        'Colors',
        'Mystic Green, Mystic Bronze, Mystic Gray, Mystic Red, Mystic Blue',
      ],
      ['Approximate price', '$700'],
      ['Models', 'SM-N980F, SM-N980F/DS'],
    ],
  };

  const {gradients, sizes} = useTheme();
  const [showVideo, setShowVideo] = useState(false);
  const context = useContext(ThemeContext);
  const {colors, gradient} = context.theme;

  const playVideo = () => {
    showVideo === false ? setShowVideo(true) : setShowVideo(false);
  };

  return (
    <Block paddingHorizontal={sizes.padding} style={{flexDirection: 'column'}}>
      <Block row marginBottom={sizes.m}>
        <Block justify="center">
          <Text
            h4
            bold
            marginBottom={sizes.m}
            color={colors.primary}
            style={{alignSelf: 'center', marginRight: 20}}>
            {data.name}
          </Text>
          <Block row flex={0}>
            <FloatButton
              gradient={gradients[gradient.gr1]}
              name="film"
              text="Play review"
              textColor="white"
              color="white"
              borderRadius={10}
              onPress={playVideo}
            />
          </Block>
        </Block>
        <Image
          source={{uri: data.image_url[0].image}}
          style={{
            resizeMode: 'contain',
            height: 170,
            alignSelf: 'center',
            borderRadius: 5,
            flex: 1,
          }}></Image>
      </Block>
      {showVideo && (
        <YoutubePlayer
          initialPlayerParams={{controls: false}}
          height={220}
          videoId={`${data.youtube_id}`}
          play
          webViewStyle={{opacity: 0.99}}
        />
      )}
      <Table
        borderStyle={{borderWidth: 1, borderColor: colors.primary}}
        style={{backgroundColor: colors.item}}>
        <Row
          data={mainData.Release}
          textStyle={{
            color: colors.primary,
            padding: 8,
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
        />
        <Row
          data={mainData.prosAndConsTitle}
          textStyle={{
            color: colors.primary,
            padding: 8,
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
        />
        <Rows
          data={mainData.prosAndCons}
          textStyle={{color: colors.subTitle, fontSize: 14, padding: 6}}
          flexArr={[1, 1]}
        />
      </Table>

      <Table
        borderStyle={{borderWidth: 1, borderColor: colors.primary}}
        style={{backgroundColor: colors.item}}>
        <Row
          data={bodyData.bodyTitle}
          textStyle={{
            color: colors.primary,
            padding: 8,
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
        />
        <Rows
          data={bodyData.bodyDetails}
          textStyle={{color: colors.subTitle, fontSize: 14, padding: 6}}
          flexArr={[2, 6]}
        />
      </Table>

      <Table
        borderStyle={{borderWidth: 1, borderColor: colors.primary}}
        style={{backgroundColor: colors.item}}>
        <Row
          data={displayData.displayTitle}
          textStyle={{
            color: colors.primary,
            padding: 8,
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
        />
        <Rows
          data={displayData.displayDetails}
          textStyle={{color: colors.subTitle, fontSize: 14, padding: 6}}
          flexArr={[2, 6]}
        />
      </Table>

      <Table
        borderStyle={{borderWidth: 1, borderColor: colors.primary}}
        style={{backgroundColor: colors.item}}>
        <Row
          data={platformData.platformTitle}
          textStyle={{
            color: colors.primary,
            padding: 8,
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
        />
        <Rows
          data={platformData.platformDetails}
          textStyle={{color: colors.subTitle, fontSize: 14, padding: 6}}
          flexArr={[2, 6]}
        />
      </Table>

      <Table
        borderStyle={{borderWidth: 1, borderColor: colors.primary}}
        style={{backgroundColor: colors.item}}>
        <Row
          data={memoryData.memoryTitle}
          textStyle={{
            color: colors.primary,
            padding: 8,
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
        />
        <Rows
          data={memoryData.memoryDetails}
          textStyle={{color: colors.subTitle, fontSize: 14, padding: 6}}
          flexArr={[2, 6]}
        />
      </Table>

      <Table
        borderStyle={{borderWidth: 1, borderColor: colors.primary}}
        style={{backgroundColor: colors.item}}>
        <Row
          data={mainCameraData.mainCameraTitle}
          textStyle={{
            color: colors.primary,
            padding: 8,
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
        />
        <Rows
          data={mainCameraData.mainCameraDetails}
          textStyle={{color: colors.subTitle, fontSize: 14, padding: 6}}
          flexArr={[2, 6]}
        />
      </Table>

      <Table
        borderStyle={{borderWidth: 1, borderColor: colors.primary}}
        style={{backgroundColor: colors.item}}>
        <Row
          data={soundData.soundTitle}
          textStyle={{
            color: colors.primary,
            padding: 8,
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
        />
        <Rows
          data={soundData.soundDetails}
          textStyle={{color: colors.subTitle, fontSize: 13, padding: 6}}
          flexArr={[2, 6]}
        />
      </Table>

      <Table
        borderStyle={{borderWidth: 1, borderColor: colors.primary}}
        style={{backgroundColor: colors.item}}>
        <Row
          data={networkData.networkTitle}
          textStyle={{
            color: colors.primary,
            padding: 8,
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
        />
        <Rows
          data={networkData.networkDetails}
          textStyle={{color: colors.subTitle, fontSize: 13, padding: 6}}
          flexArr={[2, 6]}
        />
      </Table>

      <Table
        borderStyle={{borderWidth: 1, borderColor: colors.primary}}
        style={{backgroundColor: colors.item}}>
        <Row
          data={usbData.usbTitle}
          textStyle={{
            color: colors.primary,
            padding: 8,
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
        />
        <Rows
          data={usbData.usbDetails}
          textStyle={{color: colors.subTitle, fontSize: 13, padding: 6}}
          flexArr={[2, 6]}
        />
      </Table>

      <Table
        borderStyle={{borderWidth: 1, borderColor: colors.primary}}
        style={{backgroundColor: colors.item}}>
        <Row
          data={featuresData.featuresTitle}
          textStyle={{
            color: colors.primary,
            padding: 8,
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
        />
        <Rows
          data={featuresData.featuresDetails}
          textStyle={{color: colors.subTitle, fontSize: 13, padding: 6}}
          flexArr={[2, 6]}
        />
        <Row
          data={featuresData.otherFeatures}
          textStyle={{
            color: colors.subTitle,
            padding: 8,
            fontSize: 15,
          }}
          flexArr={[2, 6]}
        />
      </Table>

      <Table
        borderStyle={{borderWidth: 1, borderColor: colors.primary}}
        style={{backgroundColor: colors.item}}>
        <Row
          data={batteryData.batteryTitle}
          textStyle={{
            color: colors.primary,
            padding: 8,
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
        />
        <Rows
          data={batteryData.batteryDetails}
          textStyle={{color: colors.subTitle, fontSize: 13, padding: 6}}
          flexArr={[2, 6]}
        />
        <Row
          data={batteryData.batteryFeatures}
          textStyle={{
            color: colors.subTitle,
            padding: 8,
            fontSize: 15,
          }}
          flexArr={[2, 6]}
        />
      </Table>

      <Table
        borderStyle={{borderWidth: 1, borderColor: colors.primary}}
        style={{backgroundColor: colors.item}}>
        <Row
          data={miscData.miscTitle}
          textStyle={{
            color: colors.primary,
            padding: 8,
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
        />
        <Rows
          data={miscData.miscDetails}
          textStyle={{color: colors.subTitle, fontSize: 13, padding: 6}}
          flexArr={[2, 6]}
        />
      </Table>
    </Block>
  );
};

const Components = ({route}) => {
  const {assets, sizes} = useTheme();
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();
  const data = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({});
  }, [assets.header, navigation, sizes.width, headerHeight]);

  return (
    <Block safe>
      <Block
        scroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: sizes.padding}}>
        <Block>
          <Phone data={data} />
        </Block>
      </Block>
    </Block>
  );
};

export default Components;

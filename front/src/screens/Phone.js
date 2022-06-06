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

  const MergeColors = () => {
    let colors = '';
    data.body.color.map((col) => (colors += `${col.name}, `));
    return colors;
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
      ['Bluetooth', 'Yes'],
      ['GPS', 'Yes'],
      ['NFC', 'Yes'],
      ['Radio', 'Yes'],
    ],
  };

  const usbData = {
    usbTitle: ['USB'],
    usbDetails: [
      ['Type', `USB ${data.usb[0].version}`],
      ['On The Go (OTG)', `${data.usb[0].on_to_go ? 'Yes' : 'No'}`],
    ],
  };

  const featuresData = {
    featuresTitle: ['Features'],
    featuresDetails: [
      ['Face ID', `${data.sensor[0].face_id ? 'Yes' : 'No'}`],
      [
        'Fingertprint',
        data.sensor[0].fingerprint
          ? `Yes, ${data.sensor[0].fingerprint_type}`
          : 'No',
      ],
      ['Accelerometer', `${data.sensor[0].accelerometer ? 'Yes' : 'No'}`],
      ['Gyroscope', `${data.sensor[0].gyroscope ? 'Yes' : 'No'}`],
      ['Proximity', `${data.sensor[0].proximity ? 'Yes' : 'No'}`],
      ['Compass', `${data.sensor[0].compass ? 'Yes' : 'No'}`],
      ['Barometer', `${data.sensor[0].barometer ? 'Yes' : 'No'}`],
      ['H2O', `${data.sensor[0].h2o ? 'Yes' : 'No'}`],
      ['Beat rate', `${data.sensor[0].beat_rate ? 'Yes' : 'No'}`],
      ['Temperature', `${data.sensor[0].temperature ? 'Yes' : 'No'}`],
      ['Laser', `${data.sensor[0].laser ? 'Yes' : 'No'}`],
    ],
  };

  const batteryData = {
    batteryTitle: ['Battery'],
    batteryDetails: [
      ['Capacity', `${data.battery[0].capacity} mAh`],
      ['Type', `Li-${data.battery[0].type_select}`],
      ['Removable', data.battery[0].removable ? 'Yes' : 'No'],
    ],
    batteryFeatures: ['Battery Features', data.battery[0].features],
  };

  const miscData = {
    miscTitle: ['Misc'],
    miscDetails: [
      ['Colors', MergeColors()],
      ['Approximate price', `$${data.price}`],
      ['Model', data.model],
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
          textStyle={{color: colors.subTitle, fontSize: 14, padding: 6}}
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
          textStyle={{color: colors.subTitle, fontSize: 14, padding: 6}}
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
          textStyle={{color: colors.subTitle, fontSize: 14, padding: 6}}
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
          textStyle={{color: colors.subTitle, fontSize: 14, padding: 6}}
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
          textStyle={{color: colors.subTitle, fontSize: 14, padding: 6}}
          flexArr={[2, 6]}
        />
        <Row
          data={batteryData.batteryFeatures}
          textStyle={{
            color: colors.subTitle,
            padding: 8,
            fontSize: 13,
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
          textStyle={{color: colors.subTitle, fontSize: 14, padding: 6}}
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

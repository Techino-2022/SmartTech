import { StatusBar, Text, View, Image } from 'react-native';
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.mainView}>
      <StatusBar style="auto" />


    <View style={styles.pageTitle}>

      <Text style={styles.PageName}>

      Phones Area

      </Text>

    </View>

      <View style={styles.cardView}>

        <Image source={require('../../assets/phone_images/Samsung_S22_ultra_1.jpg')} style={styles.cardImage}>


        </Image>

        <View style={styles.cardRightSection}>

        <Text style={styles.cardTitle}>
          Samsung Galaxy Note 20
        </Text>

        <View style={styles.componentSecion}>

        <Text style={styles.components}>
        Display:
        </Text>

        <Text style={styles.componentDescription}>
        6.7" Super AMOLED Plus
        </Text>

        </View>

        <View style={styles.componentSecion}>

        <Text style={styles.components}>
        CPU:
        </Text>

        <Text style={styles.componentDescription}>
        Exynos 990 (7 nm+) - Global
        </Text>

        </View>


        <View style={styles.componentSecion}>

        <Text style={styles.components}>
        RAM:
        </Text>

        <Text style={styles.componentDescription}>
        8GB
        </Text>

        </View>


        <View style={styles.componentSecion}>

        <Text style={styles.components}>
        Storage:
        </Text>

        <Text style={styles.componentDescription}>
        256GB UFS 3.0
        </Text>

        </View>


        <View style={styles.componentSecion}>

        <Text style={styles.components}>
        Battery:
        </Text>

        <Text style={styles.componentDescription}>
        4300 mAh, non-removable
        </Text>


        </View>

        <View style={styles.componentSecion}>

        <Text style={styles.components}>
        OS:
        </Text>

        <Text style={styles.componentDescription}>
        Android 10, can up to 11
        </Text>

        </View>


        </View>

      </View>




    <View style={styles.cardView}>

      <Image source={require('../../assets/phone_images/xiaomi-poco-x3-pro-1.jpg')} style={styles.cardImage}>


      </Image>

      <View style={styles.cardRightSection}>

      <Text style={styles.cardTitle}>
        Xiaomi Poco X3 Pro - A
      </Text>

      <View style={styles.componentSecion}>

        <Text style={styles.components}>
        Display:
        </Text>

        <Text style={styles.componentDescription}>
        6.67" IPS LCD
        </Text>

        </View>

      <View style={styles.componentSecion}>

      <Text style={styles.components}>
      CPU:
      </Text>

      <Text style={styles.componentDescription}>
      Qualcomm Snapdragon 860 (7 nm)
      </Text>

      </View>


      <View style={styles.componentSecion}>

      <Text style={styles.components}>
      RAM:
      </Text>

      <Text style={styles.componentDescription}>
      6GB
      </Text>

      </View>


      <View style={styles.componentSecion}>

      <Text style={styles.components}>
      Storage:
      </Text>

      <Text style={styles.componentDescription}>
      128GB UFS 3.1
      </Text>

      </View>


      <View style={styles.componentSecion}>

      <Text style={styles.components}>
      Battery:
      </Text>

      <Text style={styles.componentDescription}>
      5160 mAh, non-removable
      </Text>


      </View>

      <View style={styles.componentSecion}>

      <Text style={styles.components}>
      OS:
      </Text>

      <Text style={styles.componentDescription}>
      Android 11, MIUI 12.5 for POCO
      </Text>

      </View>

      </View>


</View>


<View style={styles.cardView}>

        <Image source={require('../../assets/phone_images/xiaomi-poco-x3-pro-1.jpg')} style={styles.cardImage}>


        </Image>

        <View style={styles.cardRightSection}>

        <Text style={styles.cardTitle}>
        Xiaomi Poco X3 Pro - B
        </Text>


        <View style={styles.componentSecion}>

        <Text style={styles.components}>
        Display:
        </Text>

        <Text style={styles.componentDescription}>
        6.67" IPS LCD
        </Text>

        </View>

        <View style={styles.componentSecion}>

        <Text style={styles.components}>
        CPU:
        </Text>

        <Text style={styles.componentDescription}>
        Qualcomm Snapdragon 860 (7 nm)
        </Text>

        </View>


        <View style={styles.componentSecion}>

        <Text style={styles.components}>
        RAM:
        </Text>

        <Text style={styles.componentDescription}>
        8GB
        </Text>

        </View>


        <View style={styles.componentSecion}>

        <Text style={styles.components}>
        Storage:
        </Text>

        <Text style={styles.componentDescription}>
        128GB UFS 3.1
        </Text>

        </View>


        <View style={styles.componentSecion}>

        <Text style={styles.components}>
        Battery:
        </Text>

        <Text style={styles.componentDescription}>
        5160 mAh, non-removable
        </Text>


        </View>

        <View style={styles.componentSecion}>

        <Text style={styles.components}>
        OS:
        </Text>

        <Text style={styles.componentDescription}>
        Android 11, MIUI 12.5 for POCO
        </Text>

        </View>


        </View>

      </View>

      <View style={styles.cardView}>

        <Image source={require('../../assets/phone_images/apple-iphone-13-pro-max-2.jpg')} style={styles.cardImage}>


        </Image>

        <View style={styles.cardRightSection}>

        <Text style={styles.cardTitle}>
          Apple IPhone 13 Pro Max
        </Text>


        <View style={styles.componentSecion}>

        <Text style={styles.components}>
        Display:
        </Text>

        <Text style={styles.componentDescription}>
        6.67" Super Retina XDR OLED
        </Text>

        </View>

        <View style={styles.componentSecion}>

        <Text style={styles.components}>
        CPU:
        </Text>

        <Text style={styles.componentDescription}>
        Apple A15 Bionic (5 nm)
        </Text>

        </View>


        <View style={styles.componentSecion}>

        <Text style={styles.components}>
        RAM:
        </Text>

        <Text style={styles.componentDescription}>
        6GB
        </Text>

        </View>


        <View style={styles.componentSecion}>

        <Text style={styles.components}>
        Storage:
        </Text>

        <Text style={styles.componentDescription}>
        128GB NVMe
        </Text>

        </View>


        <View style={styles.componentSecion}>

        <Text style={styles.components}>
        Battery:
        </Text>

        <Text style={styles.componentDescription}>
        4352 mAh, non-removable
        </Text>


        </View>

        <View style={styles.componentSecion}>

        <Text style={styles.components}>
        OS:
        </Text>

        <Text style={styles.componentDescription}>
        iOS 15, can up to 15.4
        </Text>

        </View>


        </View>

      </View>


    </View>
  );
}

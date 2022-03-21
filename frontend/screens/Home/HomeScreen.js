import { StatusBar, Text, View, Image } from 'react-native';
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.mainView}>
      <StatusBar style="auto" />

      <View style={styles.cardView}>

        <Image source={require('../../assets/phone_images/Samsung_S22_ultra_1.jpg')} style={styles.cardImage}>


        </Image>

        <View style={styles.cardRightSection}>

        <Text style={styles.cardTitle}>
          Samsung Galaxy Note 20
        </Text>

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
        4300mAh, non-removable
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

    </View>
  );
}

-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: smarttec
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `api_category`
--

LOCK TABLES `api_category` WRITE;
/*!40000 ALTER TABLE `api_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_comment`
--

LOCK TABLES `api_comment` WRITE;
/*!40000 ALTER TABLE `api_comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_post`
--

LOCK TABLES `api_post` WRITE;
/*!40000 ALTER TABLE `api_post` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_postdescription`
--

LOCK TABLES `api_postdescription` WRITE;
/*!40000 ALTER TABLE `api_postdescription` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_postdescription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_postimgurl`
--

LOCK TABLES `api_postimgurl` WRITE;
/*!40000 ALTER TABLE `api_postimgurl` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_postimgurl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_rate`
--

LOCK TABLES `api_rate` WRITE;
/*!40000 ALTER TABLE `api_rate` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_rate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_user`
--

LOCK TABLES `api_user` WRITE;
/*!40000 ALTER TABLE `api_user` DISABLE KEYS */;
INSERT INTO `api_user` VALUES (1,'pbkdf2_sha256$320000$yEKRp8lD4lF7gRwsHrCr5b$8/WM+pH+yNbIzY4ePN6Bpt1C2cOb1dzJf2aEsXafSoQ=','2022-03-19 15:24:43.729598',1,'mosfazli','','',1,1,'2022-03-19 15:23:12.525696','B','images/img.png',NULL,NULL,'mosfazli@gmail.com');
/*!40000 ALTER TABLE `api_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_user_groups`
--

LOCK TABLES `api_user_groups` WRITE;
/*!40000 ALTER TABLE `api_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `api_user_user_permissions`
--

LOCK TABLES `api_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `api_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add content type',4,'add_contenttype'),(14,'Can change content type',4,'change_contenttype'),(15,'Can delete content type',4,'delete_contenttype'),(16,'Can view content type',4,'view_contenttype'),(17,'Can add session',5,'add_session'),(18,'Can change session',5,'change_session'),(19,'Can delete session',5,'delete_session'),(20,'Can view session',5,'view_session'),(21,'Can add Token',6,'add_token'),(22,'Can change Token',6,'change_token'),(23,'Can delete Token',6,'delete_token'),(24,'Can view Token',6,'view_token'),(25,'Can add token',7,'add_tokenproxy'),(26,'Can change token',7,'change_tokenproxy'),(27,'Can delete token',7,'delete_tokenproxy'),(28,'Can view token',7,'view_tokenproxy'),(29,'Can add user',8,'add_user'),(30,'Can change user',8,'change_user'),(31,'Can delete user',8,'delete_user'),(32,'Can view user',8,'view_user'),(33,'Can add category',9,'add_category'),(34,'Can change category',9,'change_category'),(35,'Can delete category',9,'delete_category'),(36,'Can view category',9,'view_category'),(37,'Can add post',10,'add_post'),(38,'Can change post',10,'change_post'),(39,'Can delete post',10,'delete_post'),(40,'Can view post',10,'view_post'),(41,'Can add post img url',11,'add_postimgurl'),(42,'Can change post img url',11,'change_postimgurl'),(43,'Can delete post img url',11,'delete_postimgurl'),(44,'Can view post img url',11,'view_postimgurl'),(45,'Can add post description',12,'add_postdescription'),(46,'Can change post description',12,'change_postdescription'),(47,'Can delete post description',12,'delete_postdescription'),(48,'Can view post description',12,'view_postdescription'),(49,'Can add comment',13,'add_comment'),(50,'Can change comment',13,'change_comment'),(51,'Can delete comment',13,'delete_comment'),(52,'Can view comment',13,'view_comment'),(53,'Can add rate',14,'add_rate'),(54,'Can change rate',14,'change_rate'),(55,'Can delete rate',14,'delete_rate'),(56,'Can view rate',14,'view_rate'),(57,'Can add body',15,'add_body'),(58,'Can change body',15,'change_body'),(59,'Can delete body',15,'delete_body'),(60,'Can view body',15,'view_body'),(61,'Can add color',16,'add_color'),(62,'Can change color',16,'change_color'),(63,'Can delete color',16,'delete_color'),(64,'Can view color',16,'view_color'),(65,'Can add network',17,'add_network'),(66,'Can change network',17,'change_network'),(67,'Can delete network',17,'delete_network'),(68,'Can view network',17,'view_network'),(69,'Can add phone',18,'add_phone'),(70,'Can change phone',18,'change_phone'),(71,'Can delete phone',18,'delete_phone'),(72,'Can view phone',18,'view_phone'),(73,'Can add ram',19,'add_ram'),(74,'Can change ram',19,'change_ram'),(75,'Can delete ram',19,'delete_ram'),(76,'Can view ram',19,'view_ram'),(77,'Can add wifi',20,'add_wifi'),(78,'Can change wifi',20,'change_wifi'),(79,'Can delete wifi',20,'delete_wifi'),(80,'Can view wifi',20,'view_wifi'),(81,'Can add usb',21,'add_usb'),(82,'Can change usb',21,'change_usb'),(83,'Can delete usb',21,'delete_usb'),(84,'Can view usb',21,'view_usb'),(85,'Can add storage',22,'add_storage'),(86,'Can change storage',22,'change_storage'),(87,'Can delete storage',22,'delete_storage'),(88,'Can view storage',22,'view_storage'),(89,'Can add sound',23,'add_sound'),(90,'Can change sound',23,'change_sound'),(91,'Can delete sound',23,'delete_sound'),(92,'Can view sound',23,'view_sound'),(93,'Can add sensor',24,'add_sensor'),(94,'Can change sensor',24,'change_sensor'),(95,'Can delete sensor',24,'delete_sensor'),(96,'Can view sensor',24,'view_sensor'),(97,'Can add platform',25,'add_platform'),(98,'Can change platform',25,'change_platform'),(99,'Can delete platform',25,'delete_platform'),(100,'Can view platform',25,'view_platform'),(101,'Can add phone img url',26,'add_phoneimgurl'),(102,'Can change phone img url',26,'change_phoneimgurl'),(103,'Can delete phone img url',26,'delete_phoneimgurl'),(104,'Can view phone img url',26,'view_phoneimgurl'),(105,'Can add operating system',27,'add_operatingsystem'),(106,'Can change operating system',27,'change_operatingsystem'),(107,'Can delete operating system',27,'delete_operatingsystem'),(108,'Can view operating system',27,'view_operatingsystem'),(109,'Can add material',28,'add_material'),(110,'Can change material',28,'change_material'),(111,'Can delete material',28,'delete_material'),(112,'Can view material',28,'view_material'),(113,'Can add gps',29,'add_gps'),(114,'Can change gps',29,'change_gps'),(115,'Can delete gps',29,'delete_gps'),(116,'Can view gps',29,'view_gps'),(117,'Can add cell network',30,'add_cellnetwork'),(118,'Can change cell network',30,'change_cellnetwork'),(119,'Can delete cell network',30,'delete_cellnetwork'),(120,'Can view cell network',30,'view_cellnetwork'),(121,'Can add camera',31,'add_camera'),(122,'Can change camera',31,'change_camera'),(123,'Can delete camera',31,'delete_camera'),(124,'Can view camera',31,'view_camera'),(125,'Can add brand',32,'add_brand'),(126,'Can change brand',32,'change_brand'),(127,'Can delete brand',32,'delete_brand'),(128,'Can view brand',32,'view_brand'),(129,'Can add bluetooth',33,'add_bluetooth'),(130,'Can change bluetooth',33,'change_bluetooth'),(131,'Can delete bluetooth',33,'delete_bluetooth'),(132,'Can view bluetooth',33,'view_bluetooth'),(133,'Can add battery',34,'add_battery'),(134,'Can change battery',34,'change_battery'),(135,'Can delete battery',34,'delete_battery'),(136,'Can view battery',34,'view_battery');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `authtoken_token`
--

LOCK TABLES `authtoken_token` WRITE;
/*!40000 ALTER TABLE `authtoken_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `authtoken_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2022-03-19 19:38:41.166491','1','2',1,'[{\"added\": {}}]',19,1),(2,'2022-03-19 19:38:44.764019','2','4',1,'[{\"added\": {}}]',19,1),(3,'2022-03-19 19:38:46.798436','3','8',1,'[{\"added\": {}}]',19,1),(4,'2022-03-19 19:38:48.917345','4','12',1,'[{\"added\": {}}]',19,1),(5,'2022-03-19 19:38:52.016442','5','6',1,'[{\"added\": {}}]',19,1),(6,'2022-03-19 19:48:31.974403','1','1 Galaxy Note 20',1,'[{\"added\": {}}]',18,1),(7,'2022-03-19 19:49:29.124861','1','ion - 4300 - False',1,'[{\"added\": {}}]',34,1),(8,'2022-03-19 19:49:50.267303','1','Mystic Green',1,'[{\"added\": {}}]',16,1),(9,'2022-03-19 19:49:54.487212','2','Mystic Bronze',1,'[{\"added\": {}}]',16,1),(10,'2022-03-19 19:49:58.539503','3','Mystic Gray',1,'[{\"added\": {}}]',16,1),(11,'2022-03-19 19:50:02.702096','4','Mystic Red',1,'[{\"added\": {}}]',16,1),(12,'2022-03-19 19:50:06.350472','5','Mystic Blue',1,'[{\"added\": {}}]',16,1),(13,'2022-03-19 19:51:03.410738','1','1 6.7 Super AMOLED Plus 1080 × 2400',1,'[{\"added\": {}}]',15,1),(14,'2022-03-19 19:53:19.869314','1','1  network',1,'[{\"added\": {}}]',17,1),(15,'2022-03-19 19:53:38.325829','1','1 bluetooth',1,'[{\"added\": {}}]',33,1),(16,'2022-03-19 19:54:40.327383','1','Samsung',1,'[{\"added\": {}}]',32,1),(17,'2022-03-19 19:57:31.390477','1','12 - 1.8',1,'[{\"added\": {}}]',31,1),(18,'2022-03-19 19:58:00.829147','2','64 - 2.0',1,'[{\"added\": {}}]',31,1),(19,'2022-03-19 19:58:22.966681','3','12 - 2.2',1,'[{\"added\": {}}]',31,1),(20,'2022-03-19 19:58:31.845007','2','64 - 2.00',2,'[{\"changed\": {\"fields\": [\"Features\"]}}]',31,1),(21,'2022-03-19 19:59:00.464519','4','10 - 2.2',1,'[{\"added\": {}}]',31,1),(22,'2022-03-19 19:59:27.895180','4','10 - 2.20',2,'[]',31,1),(23,'2022-03-19 20:00:02.422811','1','phone.Network.None cell_network',1,'[{\"added\": {}}]',30,1),(24,'2022-03-19 20:00:25.276540','1','phone.Network.None gps',1,'[{\"added\": {}}]',29,1),(25,'2022-03-19 20:01:14.490732','1','phone.Body.None material',1,'[{\"added\": {}}]',28,1),(26,'2022-03-19 20:01:45.095222','1','android 10, upgradable to 11',1,'[{\"added\": {}}]',27,1),(27,'2022-03-19 20:02:44.474442','1','1 Galaxy Note 20 -- images/1_BEc4RNJ.jpg',1,'[{\"added\": {}}]',26,1),(28,'2022-03-19 20:02:48.681748','2','1 Galaxy Note 20 -- images/2_H79kPBD.jpg',1,'[{\"added\": {}}]',26,1),(29,'2022-03-19 20:02:52.375368','3','1 Galaxy Note 20 -- images/3.jpg',1,'[{\"added\": {}}]',26,1),(30,'2022-03-19 20:07:21.568845','1','Exynos 990 (7 nm+) - Global',1,'[{\"added\": {}}]',25,1),(31,'2022-03-19 20:08:22.686543','1','phone.Phone.None sensor',1,'[{\"added\": {}}]',24,1),(32,'2022-03-19 20:09:05.651245','1','1 Galaxy Note 20',2,'[{\"changed\": {\"fields\": [\"Pros\"]}}]',18,1),(33,'2022-03-19 20:09:24.577877','1','32-bit/384kHz audio,Tuned by AKG -- False',1,'[{\"added\": {}}]',23,1),(34,'2022-03-19 20:09:41.079334','1','256.0 - UFS 3.0',1,'[{\"added\": {}}]',22,1),(35,'2022-03-19 20:10:03.149327','1','phone.Phone.None usb',1,'[{\"added\": {}}]',21,1),(36,'2022-03-19 20:10:31.477907','1','phone.Network.None wifi',1,'[{\"added\": {}}]',20,1),(37,'2022-03-19 20:10:31.586834','2','phone.Network.None wifi',1,'[{\"added\": {}}]',20,1),(38,'2022-03-19 20:10:46.118389','1','phone.Network.None wifi',3,'',20,1),(39,'2022-03-19 20:22:34.906571','1','version: 5.0 -- A2DP: True -- LE :True -- aptX: True -- EDR: False',2,'[{\"changed\": {\"fields\": [\"Version\"]}}]',33,1),(40,'2022-03-19 20:25:21.942717','1','ID: 1 -- Name: Galaxy Note20 -- Model:A -- RAM:8GB',2,'[{\"changed\": {\"fields\": [\"Name\"]}}]',18,1),(41,'2022-03-19 20:29:48.775313','2','ID: 2 -- Name: Galaxy S22 -- Model:A -- RAM:8GB',1,'[{\"added\": {}}]',18,1),(42,'2022-03-19 20:30:31.578488','1','ID: 1 -- Name: Galaxy Note20 -- Model:A -- RAM:8GB',2,'[{\"changed\": {\"fields\": [\"Front camera features\", \"Back camera video quality\"]}}]',18,1),(43,'2022-03-19 20:30:44.612622','1','Samsung',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',32,1),(44,'2022-03-19 20:40:19.979902','2','capacity: 5000 -- type: ion -- removable: False -- wireless_charging: True',1,'[{\"added\": {}}]',34,1),(45,'2022-03-19 20:40:38.557602','2','ID: 2 -- Name: Galaxy S22 -- Model:A -- RAM:8GB',2,'[{\"changed\": {\"fields\": [\"Pros\"]}}]',18,1),(46,'2022-03-19 20:41:20.785132','1','1  network',2,'[{\"changed\": {\"fields\": [\"Nfc\"]}}]',17,1),(47,'2022-03-19 20:44:45.676880','1','1 ID: 1 -- Name: Galaxy Note20 -- Model:A -- RAM:8GB',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',17,1),(48,'2022-03-19 20:44:53.818756','2','2 ID: 2 -- Name: Galaxy S22 -- Model:A -- RAM:8GB',1,'[{\"added\": {}}]',17,1),(49,'2022-03-19 20:51:45.847193','2','version: 5.2 -- A2DP: True -- LE :True -- aptX: False -- EDR: False',1,'[{\"added\": {}}]',33,1),(50,'2022-03-19 20:52:51.161334','2','2 6.8 Dynamic AMOLED 2X 1440 x 3088',1,'[{\"added\": {}}]',15,1),(51,'2022-03-19 20:53:04.927398','6','Phantom Black',1,'[{\"added\": {}}]',16,1),(52,'2022-03-19 20:53:10.019502','7','White',1,'[{\"added\": {}}]',16,1),(53,'2022-03-19 20:53:12.949219','8','v',1,'[{\"added\": {}}]',16,1),(54,'2022-03-19 20:53:16.910565','9','Burgundy',1,'[{\"added\": {}}]',16,1),(55,'2022-03-19 20:53:19.805080','10','Green',1,'[{\"added\": {}}]',16,1),(56,'2022-03-19 20:53:22.436771','11','Green',1,'[{\"added\": {}}]',16,1),(57,'2022-03-19 20:53:25.453882','12','Graphite',1,'[{\"added\": {}}]',16,1),(58,'2022-03-19 20:53:28.398144','13','Red',1,'[{\"added\": {}}]',16,1),(59,'2022-03-19 20:53:33.345273','14','Sky Blue',1,'[{\"added\": {}}]',16,1),(60,'2022-03-19 20:53:48.843059','11','Green',3,'',16,1),(61,'2022-03-19 20:53:48.853053','8','v',3,'',16,1),(62,'2022-03-19 20:54:11.948894','2','2 6.8 Dynamic AMOLED 2X 1440 x 3088',2,'[{\"changed\": {\"fields\": [\"Color\"]}}]',15,1),(63,'2022-03-19 20:56:22.544069','5','108 - 1.8 0.8',1,'[{\"added\": {}}]',31,1),(64,'2022-03-19 20:56:51.802784','6','10 - 4.9 1.12',1,'[{\"added\": {}}]',31,1),(65,'2022-03-19 20:57:18.833349','7','10 - 2.4 1.12',1,'[{\"added\": {}}]',31,1),(66,'2022-03-19 20:57:58.530004','8','12 - 2.2 1.4',1,'[{\"added\": {}}]',31,1),(67,'2022-03-19 20:59:30.289703','1','12 - 1.80 1.800',2,'[{\"changed\": {\"fields\": [\"Usage\", \"Features\"]}}]',31,1),(68,'2022-03-19 21:00:31.925838','2','pixel: 64 -- diaphragm: 2.00 -- pixel size: 0.800 -- usuage: telephoto',2,'[{\"changed\": {\"fields\": [\"Usage\", \"Features\"]}}]',31,1),(69,'2022-03-19 21:01:16.788889','3','pixel: 12 -- diaphragm: 2.20 -- pixel size: 1.400 -- usuage: ultrawide',2,'[{\"changed\": {\"fields\": [\"Usage\", \"Features\"]}}]',31,1),(70,'2022-03-19 21:01:27.056704','4','pixel: 10 -- diaphragm: 2.20 -- pixel size: 1.220 -- usuage: wide',2,'[{\"changed\": {\"fields\": [\"Usage\", \"Features\"]}}]',31,1),(71,'2022-03-19 21:01:35.863998','5','pixel: 108 -- diaphragm: 1.80 -- pixel size: 0.800 -- usuage: wide',2,'[{\"changed\": {\"fields\": [\"Usage\", \"Features\"]}}]',31,1),(72,'2022-03-19 21:01:47.169655','6','pixel: 10 -- diaphragm: 4.90 -- pixel size: 1.120 -- usuage: periscope telephoto',2,'[{\"changed\": {\"fields\": [\"Usage\", \"Features\"]}}]',31,1),(73,'2022-03-19 21:01:53.437258','7','pixel: 10 -- diaphragm: 2.40 -- pixel size: 1.120 -- usuage: telephoto',2,'[{\"changed\": {\"fields\": [\"Usage\", \"Features\"]}}]',31,1),(74,'2022-03-19 21:02:00.050581','8','pixel: 12 -- diaphragm: 2.20 -- pixel size: 1.400 -- usuage: ultrawide',2,'[{\"changed\": {\"fields\": [\"Usage\", \"Features\"]}}]',31,1),(75,'2022-03-19 21:02:23.485920','9','pixel: 10 -- diaphragm: 2.2 -- pixel size: 1.22 -- usuage: None',1,'[{\"added\": {}}]',31,1),(76,'2022-03-19 21:03:02.007085','9','pixel: 40 -- diaphragm: 2.2 -- pixel size: 0.7 -- usuage: None',2,'[{\"changed\": {\"fields\": [\"Pixel count\", \"Pixel size\", \"Features\"]}}]',31,1),(77,'2022-03-19 21:03:08.889571','9','pixel: 40 -- diaphragm: 2.20 -- pixel size: 0.700 -- usuage: wide',2,'[{\"changed\": {\"fields\": [\"Usage\"]}}]',31,1),(78,'2022-03-19 21:04:06.568921','2','phone.Network.None cell_network',1,'[{\"added\": {}}]',30,1),(79,'2022-03-19 21:07:22.511745','1','ID: 1 -- A-GPS: True -- BDS: True -- GALILEO: True -- GLONASS: True -- QZSS: False -- dual_gps: False',2,'[{\"changed\": {\"fields\": [\"Network\"]}}]',29,1),(80,'2022-03-19 21:09:14.730544','2','ID: 2 -- Frame: aluminum -- back-glass: Glass (Gorilla Glass Victus+) -- front-glass: Glass (Gorilla Glass Victus+)',1,'[{\"added\": {}}]',28,1),(81,'2022-03-19 21:10:37.912020','1','1 6.7 Super AMOLED Plus 1080 × 2400',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',15,1),(82,'2022-03-19 21:10:41.458703','2','2 6.8 Dynamic AMOLED 2X 1440 x 3088',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',15,1),(83,'2022-03-19 21:11:51.583304','2','ID: 2 -- Frame: aluminum -- back-glass: Glass (Gorilla Glass Victus+) -- front-glass: Glass (Gorilla Glass Victus+)',2,'[]',28,1),(84,'2022-03-19 21:12:34.949847','2','android 12',1,'[{\"added\": {}}]',27,1),(85,'2022-03-19 21:13:43.053037','2','ID: 2 -- Name: Galaxy S22 ultra 5G -- Model:A -- RAM:8GB',2,'[{\"changed\": {\"fields\": [\"Name\"]}}]',18,1),(86,'2022-03-19 21:14:01.607783','4','ID: 2 -- Name: Galaxy S22 ultra 5G -- Model:A -- RAM:8GB -- images/1_HuhIgwg.jpg',1,'[{\"added\": {}}]',26,1),(87,'2022-03-19 21:14:10.049289','5','ID: 2 -- Name: Galaxy S22 ultra 5G -- Model:A -- RAM:8GB -- images/2_l6bRrIJ.jpg',1,'[{\"added\": {}}]',26,1),(88,'2022-03-19 21:14:13.689734','6','ID: 2 -- Name: Galaxy S22 ultra 5G -- Model:A -- RAM:8GB -- images/3_oG3azt9.jpg',1,'[{\"added\": {}}]',26,1),(89,'2022-03-19 21:14:47.224122','2','Octa-core (1x2.8 GHz Cortex-X2 & 3x2.50 GHz Cortex-A710 & 4x1.8 GHz Cortex-A510) - Europe\r\nOcta-core (1x3.00 GHz Cortex-X2 & 3x2.40 GHz Cortex-A710 & 4x1.70 GHz Cortex-A510) - ROW Xclipse 920 - Europe',1,'[{\"added\": {}}]',25,1),(90,'2022-03-19 21:15:03.117603','2','Exynos 2200 (4 nm) - Europe\r\nQualcomm SM8450 Snapdragon 8 Gen 1 (4 nm) - ROW Xclipse 920 - Europe\r\nAdreno 730 - ROW',2,'[{\"changed\": {\"fields\": [\"Core count\", \"Cpu chipset\"]}}]',25,1),(91,'2022-03-19 21:18:24.815351','1','1 - fingerprint_type: under display, ultrasonic - accelerometer: True - gyroscope: True - proximity: True',2,'[]',24,1),(92,'2022-03-19 21:18:47.788295','2','2 - fingerprint_type: under display, ultrasonic - accelerometer: True - gyroscope: True - proximity: True',1,'[{\"added\": {}}]',24,1),(93,'2022-03-19 21:19:02.877585','1','quality: 32-bit/384kHz audio,Tuned by AKG -- 3.5mm jack: False',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',23,1),(94,'2022-03-19 21:19:30.024617','2','128.0 - UFS 3.1',1,'[{\"added\": {}}]',22,1),(95,'2022-03-19 21:35:34.120962','3','ID: 3 -- Name: Galaxy S22 ultra 5G -- Model:B -- RAM:12GB',1,'[{\"added\": {}}]',18,1),(96,'2022-03-19 21:36:12.834428','4','ID: 4 -- Name: Galaxy S22 ultra 5G -- Model:C -- RAM:12GB',1,'[{\"added\": {}}]',18,1),(97,'2022-03-19 21:36:57.413112','5','ID: 5 -- Name: Galaxy S22 ultra 5G -- Model:D -- RAM:12GB',1,'[{\"added\": {}}]',18,1),(98,'2022-03-19 21:37:06.956145','2','capacity: 5000 -- type: ion -- removable: False -- wireless_charging: True',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',34,1),(99,'2022-03-19 21:37:34.789797','3','3 ID: 3 -- Name: Galaxy S22 ultra 5G -- Model:B -- RAM:12GB',1,'[{\"added\": {}}]',17,1),(100,'2022-03-19 21:38:01.485032','4','4 ID: 4 -- Name: Galaxy S22 ultra 5G -- Model:C -- RAM:12GB',1,'[{\"added\": {}}]',17,1),(101,'2022-03-19 21:38:09.864297','5','5 ID: 5 -- Name: Galaxy S22 ultra 5G -- Model:D -- RAM:12GB',1,'[{\"added\": {}}]',17,1),(102,'2022-03-19 21:38:12.158086','5','5 ID: 5 -- Name: Galaxy S22 ultra 5G -- Model:D -- RAM:12GB',2,'[]',17,1),(103,'2022-03-19 21:38:25.801466','2','version: 5.2 -- A2DP: True -- LE :True -- aptX: False -- EDR: False',2,'[{\"changed\": {\"fields\": [\"Network\"]}}]',33,1),(104,'2022-03-19 21:40:53.690414','3','ID: 3 -- Phone: ID: 3 -- Name: Galaxy S22 ultra 5G -- Model:B -- RAM:12GB',1,'[{\"added\": {}}]',15,1),(105,'2022-03-19 21:41:17.553663','4','ID: 4 -- Phone: ID: 4 -- Name: Galaxy S22 ultra 5G -- Model:C -- RAM:12GB',1,'[{\"added\": {}}]',15,1),(106,'2022-03-19 21:41:38.152799','5','ID: 5 -- Phone: ID: 5 -- Name: Galaxy S22 ultra 5G -- Model:D -- RAM:12GB',1,'[{\"added\": {}}]',15,1),(107,'2022-03-19 21:41:47.237103','1','Samsung',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',32,1),(108,'2022-03-19 21:41:57.301772','9','pixel: 40 -- diaphragm: 2.20 -- pixel size: 0.700 -- usuage: wide',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',31,1),(109,'2022-03-19 21:42:00.261670','8','pixel: 12 -- diaphragm: 2.20 -- pixel size: 1.400 -- usuage: ultrawide',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',31,1),(110,'2022-03-19 21:42:03.663461','7','pixel: 10 -- diaphragm: 2.40 -- pixel size: 1.120 -- usuage: telephoto',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',31,1),(111,'2022-03-19 21:42:07.357610','6','pixel: 10 -- diaphragm: 4.90 -- pixel size: 1.120 -- usuage: periscope telephoto',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',31,1),(112,'2022-03-19 21:45:58.978042','9','is_front: True -- pixel: 40 -- diaphragm: 2.20 -- pixel size: 0.700 -- usuage: wide',2,'[{\"changed\": {\"fields\": [\"Is front camera\"]}}]',31,1),(113,'2022-03-19 21:46:37.740515','4','is_front: True -- pixel: 10 -- diaphragm: 2.20 -- pixel size: 1.220 -- usuage: wide',2,'[{\"changed\": {\"fields\": [\"Is front camera\"]}}]',31,1),(114,'2022-03-19 21:46:42.873641','8','is_front: False -- pixel: 12 -- diaphragm: 2.20 -- pixel size: 1.400 -- usuage: ultrawide',2,'[]',31,1),(115,'2022-03-19 21:46:45.354527','9','is_front: True -- pixel: 40 -- diaphragm: 2.20 -- pixel size: 0.700 -- usuage: wide',2,'[]',31,1),(116,'2022-03-19 21:46:47.881219','7','is_front: False -- pixel: 10 -- diaphragm: 2.40 -- pixel size: 1.120 -- usuage: telephoto',2,'[]',31,1),(117,'2022-03-19 21:46:50.825327','6','is_front: False -- pixel: 10 -- diaphragm: 4.90 -- pixel size: 1.120 -- usuage: periscope telephoto',2,'[]',31,1),(118,'2022-03-19 21:47:16.456000','5','ID: 5 -- is_front: False -- pixel: 108 -- diaphragm: 1.80 -- pixel size: 0.800 -- usuage: wide',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',31,1),(119,'2022-03-19 21:47:30.205546','2','2',2,'[{\"changed\": {\"fields\": [\"Network\"]}}]',30,1),(120,'2022-03-19 21:47:37.220732','1','ID: 1 -- A-GPS: True -- BDS: True -- GALILEO: True -- GLONASS: True -- QZSS: False -- dual_gps: False',2,'[{\"changed\": {\"fields\": [\"Network\"]}}]',29,1),(121,'2022-03-19 21:47:44.276919','2','ID: 2 -- Frame: aluminum -- back-glass: Glass (Gorilla Glass Victus+) -- front-glass: Glass (Gorilla Glass Victus+)',2,'[{\"changed\": {\"fields\": [\"Body\"]}}]',28,1),(122,'2022-03-19 21:47:53.742580','2','android 12',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',27,1),(123,'2022-03-19 21:49:45.564426','1','android 10, upgradable to 11 One UI 3.0',2,'[{\"changed\": {\"fields\": [\"Interface\"]}}]',27,1),(124,'2022-03-19 21:49:55.437993','2','android 12 One UI 4.1',2,'[{\"changed\": {\"fields\": [\"Interface\"]}}]',27,1),(125,'2022-03-19 21:51:02.642126','1','phone.Phone.None -- images/1_BEc4RNJ.jpg',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',26,1),(126,'2022-03-19 21:51:05.427928','2','phone.Phone.None -- images/2_H79kPBD.jpg',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',26,1),(127,'2022-03-19 21:51:07.934701','3','phone.Phone.None -- images/3.jpg',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',26,1),(128,'2022-03-19 21:51:11.040157','4','phone.Phone.None -- images/1_HuhIgwg.jpg',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',26,1),(129,'2022-03-19 21:51:14.882137','5','phone.Phone.None -- images/2_l6bRrIJ.jpg',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',26,1),(130,'2022-03-19 21:51:17.962418','6','phone.Phone.None -- images/3_oG3azt9.jpg',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',26,1),(131,'2022-03-19 21:52:22.518662','1','1 -- images/Samsung_Note20_1.jpg',2,'[{\"changed\": {\"fields\": [\"Image\"]}}]',26,1),(132,'2022-03-19 21:52:27.825488','2','2 -- images/Samsung_Note20_2.jpg',2,'[{\"changed\": {\"fields\": [\"Image\"]}}]',26,1),(133,'2022-03-19 21:52:31.681814','3','3 -- images/Samsung_Note20_3.jpg',2,'[{\"changed\": {\"fields\": [\"Image\"]}}]',26,1),(134,'2022-03-19 21:53:02.871939','4','4 -- images/Samsung_S22_ultra_1.jpg',2,'[{\"changed\": {\"fields\": [\"Image\"]}}]',26,1),(135,'2022-03-19 21:53:10.359486','4','4 -- images/Samsung_S22_ultra_1.jpg',2,'[]',26,1),(136,'2022-03-19 21:53:15.585993','5','5 -- images/Samsung_S22_ultra_2.jpg',2,'[{\"changed\": {\"fields\": [\"Image\"]}}]',26,1),(137,'2022-03-19 21:53:19.753502','6','6 -- images/Samsung_S22_ultra_3.jpg',2,'[{\"changed\": {\"fields\": [\"Image\"]}}]',26,1),(138,'2022-03-19 21:53:30.798441','2','Exynos 2200 (4 nm) - Europe\r\nQualcomm SM8450 Snapdragon 8 Gen 1 (4 nm) - ROW Xclipse 920 - Europe\r\nAdreno 730 - ROW',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',25,1),(139,'2022-03-19 21:53:43.066684','6','24GB',1,'[{\"added\": {}}]',19,1),(140,'2022-03-19 21:53:44.765304','7','32GB',1,'[{\"added\": {}}]',19,1),(141,'2022-03-19 21:53:58.349513','2','2 - fingerprint_type: under display, ultrasonic - accelerometer: True - gyroscope: True - proximity: True',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',24,1),(142,'2022-03-19 21:54:02.718225','1','quality: 32-bit/384kHz audio,Tuned by AKG -- 3.5mm jack: False',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',23,1),(143,'2022-03-19 21:54:07.069841','2','128.0 - UFS 3.1',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',22,1),(144,'2022-03-19 21:54:11.304129','1','version: Type-C 3.2 -- OTG: True',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',21,1),(145,'2022-03-19 21:54:17.877026','2','phone.Network.None wifi',2,'[{\"changed\": {\"fields\": [\"Network\"]}}]',20,1),(146,'2022-03-20 03:57:29.107386','6','ID: 6 -- Name: Black Shark 4S -- Model:A -- RAM:8GB',1,'[{\"added\": {}}]',18,1),(147,'2022-03-20 03:58:37.194026','7','ID: 7 -- Name: Black Shark 4S -- Model:B -- RAM:12GB',1,'[{\"added\": {}}]',18,1),(148,'2022-03-20 03:58:38.384028','6','ID: 6 -- Name: Black Shark 4S -- Model:A -- RAM:8GB',2,'[{\"changed\": {\"fields\": [\"Pros\", \"Cons\"]}}]',18,1),(149,'2022-03-20 03:59:22.744948','8','ID: 8 -- Name: Black Shark 4S -- Model:C -- RAM:12GB',1,'[{\"added\": {}}]',18,1),(150,'2022-03-20 03:59:38.132310','2','Xiaomi',1,'[{\"added\": {}}]',32,1),(151,'2022-03-20 04:05:40.608864','3','capacity: 4500 -- type: pol -- removable: False -- wireless_charging: Unknown',1,'[{\"added\": {}}]',34,1),(152,'2022-03-20 04:05:46.454912','2','capacity: 5000 -- type: ion -- removable: False -- wireless_charging: Yes',2,'[{\"changed\": {\"fields\": [\"Wireless charging\"]}}]',34,1),(153,'2022-03-20 04:05:51.470007','1','capacity: 4300 -- type: ion -- removable: False -- wireless_charging: Yes',2,'[{\"changed\": {\"fields\": [\"Wireless charging\"]}}]',34,1),(154,'2022-03-20 04:10:05.143191','6','6 ID: 7 -- Name: Black Shark 4S -- Model:B -- RAM:12GB',1,'[{\"added\": {}}]',17,1),(155,'2022-03-20 04:10:09.739946','5','5 ID: 5 -- Name: Galaxy S22 ultra 5G -- Model:D -- RAM:12GB',2,'[{\"changed\": {\"fields\": [\"Nfc\", \"Infrared\"]}}]',17,1),(156,'2022-03-20 04:10:29.283172','6','6 ID: 7 -- Name: Black Shark 4S -- Model:B -- RAM:12GB',2,'[{\"changed\": {\"fields\": [\"Radio\"]}}]',17,1),(157,'2022-03-20 04:10:40.185594','7','7 ID: 6 -- Name: Black Shark 4S -- Model:A -- RAM:8GB',1,'[{\"added\": {}}]',17,1),(158,'2022-03-20 04:10:51.296819','8','8 ID: 8 -- Name: Black Shark 4S -- Model:C -- RAM:12GB',1,'[{\"added\": {}}]',17,1),(159,'2022-03-20 04:11:26.139454','3','version: 5.2 -- A2DP: True -- LE :True -- aptX: True -- EDR: False',1,'[{\"added\": {}}]',33,1),(160,'2022-03-20 04:20:15.826646','6','ID: 6 -- Phone: ID: 6 -- Name: Black Shark 4S -- Model:A -- RAM:8GB',1,'[{\"added\": {}}]',15,1),(161,'2022-03-20 04:20:21.276780','5','ID: 5 -- Phone: ID: 5 -- Name: Galaxy S22 ultra 5G -- Model:D -- RAM:12GB',2,'[]',15,1),(162,'2022-03-20 04:20:25.146076','2','ID: 2 -- Phone: ID: 2 -- Name: Galaxy S22 ultra 5G -- Model:A -- RAM:8GB',2,'[]',15,1),(163,'2022-03-20 04:20:29.976025','1','ID: 1 -- Phone: ID: 1 -- Name: Galaxy Note20 -- Model:A -- RAM:8GB',2,'[]',15,1),(164,'2022-03-20 04:20:46.580931','15','Black',1,'[{\"added\": {}}]',16,1),(165,'2022-03-20 04:20:53.558860','6','ID: 6 -- Phone: ID: 6 -- Name: Black Shark 4S -- Model:A -- RAM:8GB',2,'[{\"changed\": {\"fields\": [\"Color\"]}}]',15,1),(166,'2022-03-20 04:21:28.451637','7','ID: 7 -- Phone: ID: 7 -- Name: Black Shark 4S -- Model:B -- RAM:12GB',1,'[{\"added\": {}}]',15,1),(167,'2022-03-20 04:21:53.898287','8','ID: 8 -- Phone: ID: 8 -- Name: Black Shark 4S -- Model:C -- RAM:12GB',1,'[{\"added\": {}}]',15,1),(168,'2022-03-20 04:23:15.747735','10','ID: 10 -- is_front: False -- pixel: 48 -- diaphragm: 1.8 -- pixel size: 0.8 -- usuage: wide',1,'[{\"added\": {}}]',31,1),(169,'2022-03-20 04:23:49.126139','11','ID: 11 -- is_front: False -- pixel: 8 -- diaphragm: 2.2 -- pixel size: 1.12 -- usuage: 120˚ (ultrawide)',1,'[{\"added\": {}}]',31,1),(170,'2022-03-20 04:24:13.860516','12','ID: 12 -- is_front: False -- pixel: 5 -- diaphragm: 2.4 -- pixel size: None -- usuage: macro',1,'[{\"added\": {}}]',31,1),(171,'2022-03-20 04:24:38.466811','13','ID: 13 -- is_front: True -- pixel: 20 -- diaphragm: 2.0 -- pixel size: 0.8 -- usuage: wide',1,'[{\"added\": {}}]',31,1),(172,'2022-03-20 04:25:10.782179','3','3',1,'[{\"added\": {}}]',30,1),(173,'2022-03-20 04:25:35.468793','2','ID: 2 -- A-GPS: True -- BDS: True -- GALILEO: True -- GLONASS: True -- QZSS: True -- dual_gps: False',1,'[{\"added\": {}}]',29,1),(174,'2022-03-20 04:25:58.808275','3','ID: 3 -- Frame: None -- back-glass: None -- front-glass: None',1,'[{\"added\": {}}]',28,1),(175,'2022-03-20 04:26:26.620076','3','android 11 Joy UI 12.8',1,'[{\"added\": {}}]',27,1),(176,'2022-03-20 04:27:29.934721','7','7 -- images/Xiaomi_Black_Shark_4_1.jpg',1,'[{\"added\": {}}]',26,1),(177,'2022-03-20 04:27:34.841354','8','8 -- images/Xiaomi_Black_Shark_4_2.jpg',1,'[{\"added\": {}}]',26,1),(178,'2022-03-20 04:27:56.236236','3','Qualcomm SM8250-AC Snapdragon 870 5G (7 nm) Adreno 650',1,'[{\"added\": {}}]',25,1),(179,'2022-03-20 04:28:29.919182','3','3 - fingerprint_type: side-mounted - accelerometer: True - gyroscope: True - proximity: True',1,'[{\"added\": {}}]',24,1),(180,'2022-03-20 04:28:53.108914','2','quality: stereo speakers, 24-bit/192kHz audio -- 3.5mm jack: True',1,'[{\"added\": {}}]',23,1),(181,'2022-03-20 04:29:08.897844','1','quality: stereo speakers, 32-bit/384kHz audio,Tuned by AKG -- 3.5mm jack: False',2,'[{\"changed\": {\"fields\": [\"Speaker quality\"]}}]',23,1),(182,'2022-03-20 04:29:13.487187','1','quality: stereo speakers, 32-bit/384kHz audio,Tuned by AKG -- 3.5mm jack: False',2,'[]',23,1),(183,'2022-03-20 04:29:43.330823','2','128.0 - UFS 3.1',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',22,1),(184,'2022-03-20 04:30:07.268771','3','256.0 - UFS 3.1',1,'[{\"added\": {}}]',22,1),(185,'2022-03-20 04:30:11.194633','2','128.0 - UFS 3.1',2,'[]',22,1),(186,'2022-03-20 04:30:47.936083','2','128.0 - UFS 3.1',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',22,1),(187,'2022-03-20 04:31:03.247966','2','128.0 - UFS 3.1',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',22,1),(188,'2022-03-20 04:31:18.555764','4','512.0 - UFS 3.1',1,'[{\"added\": {}}]',22,1),(189,'2022-03-20 04:31:29.604930','3','256.0 - UFS 3.1',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',22,1),(190,'2022-03-20 04:31:39.777154','5','1024.0 - UFS 3.1',1,'[{\"added\": {}}]',22,1),(191,'2022-03-20 04:32:01.229278','1','version: Type-C 3.2 -- OTG: True',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',21,1),(192,'2022-03-20 04:32:25.215987','2','phone.Network.None wifi',2,'[{\"changed\": {\"fields\": [\"Network\"]}}]',20,1),(193,'2022-03-20 04:45:22.693016','9','ID: 9 -- Name: Poco X3 Pro -- Model:A -- RAM:6GB',1,'[{\"added\": {}}]',18,1),(194,'2022-03-20 04:46:15.235749','10','ID: 10 -- Name: Poco X3 Pro -- Model:B -- RAM:8GB',1,'[{\"added\": {}}]',18,1),(195,'2022-03-20 04:47:09.499012','11','ID: 11 -- Name: Poco X3 Pro -- Model:C -- RAM:6GB',1,'[{\"added\": {}}]',18,1),(196,'2022-03-20 04:47:50.129800','12','ID: 12 -- Name: Poco X3 Pro -- Model:D -- RAM:8GB',1,'[{\"added\": {}}]',18,1),(197,'2022-03-20 04:48:16.675747','16','Frost Blue',1,'[{\"added\": {}}]',16,1),(198,'2022-03-20 04:48:20.800453','17','Metal Bronze',1,'[{\"added\": {}}]',16,1),(199,'2022-03-20 04:48:53.716671','4','capacity: 5160 -- type: pol -- removable: False -- wireless_charging: No',1,'[{\"added\": {}}]',34,1),(200,'2022-03-20 04:49:29.618613','9','9 ID: 9 -- Name: Poco X3 Pro -- Model:A -- RAM:6GB',1,'[{\"added\": {}}]',17,1),(201,'2022-03-20 04:49:46.935027','10','10 ID: 10 -- Name: Poco X3 Pro -- Model:B -- RAM:8GB',1,'[{\"added\": {}}]',17,1),(202,'2022-03-20 04:49:55.356788','11','11 ID: 11 -- Name: Poco X3 Pro -- Model:C -- RAM:6GB',1,'[{\"added\": {}}]',17,1),(203,'2022-03-20 04:50:01.935981','12','12 ID: 12 -- Name: Poco X3 Pro -- Model:D -- RAM:8GB',1,'[{\"added\": {}}]',17,1),(204,'2022-03-20 04:50:32.855850','4','version: 5.0 -- A2DP: True -- LE :True -- aptX: False -- EDR: False',1,'[{\"added\": {}}]',33,1),(205,'2022-03-20 07:43:03.598927','9','ID: 9 -- Phone: ID: 9 -- Name: Poco X3 Pro -- Model:A -- RAM:6GB',1,'[{\"added\": {}}]',15,1),(206,'2022-03-20 07:43:54.153443','10','ID: 10 -- Phone: ID: 10 -- Name: Poco X3 Pro -- Model:B -- RAM:8GB',1,'[{\"added\": {}}]',15,1),(207,'2022-03-20 07:44:13.881879','11','ID: 11 -- Phone: ID: 11 -- Name: Poco X3 Pro -- Model:C -- RAM:6GB',1,'[{\"added\": {}}]',15,1),(208,'2022-03-20 07:44:29.542850','12','ID: 12 -- Phone: ID: 12 -- Name: Poco X3 Pro -- Model:D -- RAM:8GB',1,'[{\"added\": {}}]',15,1),(209,'2022-03-20 07:44:41.492893','2','Xiaomi',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',32,1),(210,'2022-03-20 07:49:12.671812','10','ID: 10 -- is_front: False -- pixel: 48 -- diaphragm: 1.80 -- pixel size: 0.800 -- usuage: wide',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',31,1),(211,'2022-03-20 07:50:22.080407','14','ID: 14 -- is_front: False -- pixel: 8 -- diaphragm: 2.2 -- pixel size: 1.0 -- usuage: ultrawide',1,'[{\"added\": {}}]',31,1),(212,'2022-03-20 07:50:45.370649','15','ID: 15 -- is_front: False -- pixel: 2 -- diaphragm: 2.4 -- pixel size: None -- usuage: macro',1,'[{\"added\": {}}]',31,1),(213,'2022-03-20 07:51:03.083446','16','ID: 16 -- is_front: False -- pixel: 2 -- diaphragm: 2.4 -- pixel size: None -- usuage: depth',1,'[{\"added\": {}}]',31,1),(214,'2022-03-20 07:52:33.010595','4','4',1,'[{\"added\": {}}]',30,1),(215,'2022-03-20 07:52:54.119085','3','ID: 3 -- A-GPS: True -- BDS: True -- GALILEO: True -- GLONASS: True -- QZSS: False -- dual_gps: False',1,'[{\"added\": {}}]',29,1),(216,'2022-03-20 07:53:14.435510','3','ID: 3 -- A-GPS: True -- BDS: True -- GALILEO: True -- GLONASS: True -- QZSS: False -- dual_gps: False',3,'',29,1),(217,'2022-03-20 07:53:21.113782','1','ID: 1 -- A-GPS: True -- BDS: True -- GALILEO: True -- GLONASS: True -- QZSS: False -- dual_gps: False',2,'[{\"changed\": {\"fields\": [\"Network\"]}}]',29,1),(218,'2022-03-20 07:53:48.134220','4','ID: 4 -- Frame: None -- back-glass: plastic -- front-glass: Glass  (Gorilla Glass 6)',1,'[{\"added\": {}}]',28,1),(219,'2022-03-20 07:54:03.617158','4','android Android 11 MIUI 12.5 for POCO',1,'[{\"added\": {}}]',27,1),(220,'2022-03-20 07:54:10.870249','4','android 11 MIUI 12.5 for POCO',2,'[{\"changed\": {\"fields\": [\"Version\"]}}]',27,1),(221,'2022-03-20 07:55:08.571929','9','9 -- images/xiaomi-poco-x3-pro-1.jpg',1,'[{\"added\": {}}]',26,1),(222,'2022-03-20 07:55:15.862141','10','10 -- images/xiaomi-poco-x3-pro-2.jpg',1,'[{\"added\": {}}]',26,1),(223,'2022-03-20 07:55:38.450399','4','Qualcomm Snapdragon 860 (7 nm) Adreno 640',1,'[{\"added\": {}}]',25,1),(224,'2022-03-20 07:56:11.647107','4','4 - fingerprint_type: side-mounted - accelerometer: True - gyroscope: True - proximity: True',1,'[{\"added\": {}}]',24,1),(225,'2022-03-20 07:56:25.638182','2','quality: stereo speakers, 24-bit/192kHz audio -- 3.5mm jack: True',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',23,1),(226,'2022-03-20 07:56:52.776003','2','128.0 - UFS 3.1',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',22,1),(227,'2022-03-20 07:57:00.468558','3','256.0 - UFS 3.1',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',22,1),(228,'2022-03-20 07:57:16.326650','2','version: Type-C 2.0 -- OTG: True',1,'[{\"added\": {}}]',21,1),(229,'2022-03-20 07:57:42.588061','3','3 WIFI',1,'[{\"added\": {}}]',20,1),(230,'2022-03-20 08:08:28.021914','13','ID: 13 -- Name: iPhone 13 Pro Max -- Model:A -- RAM:6GB',1,'[{\"added\": {}}]',18,1),(231,'2022-03-20 08:09:45.873938','14','ID: 14 -- Name: iPhone 13 Pro Max -- Model:B -- RAM:6GB',1,'[{\"added\": {}}]',18,1),(232,'2022-03-20 08:09:46.674726','13','ID: 13 -- Name: iPhone 13 Pro Max -- Model:A -- RAM:6GB',2,'[{\"changed\": {\"fields\": [\"Image stabilization\", \"Cons\"]}}]',18,1),(233,'2022-03-20 08:10:33.676198','15','ID: 15 -- Name: iPhone 13 Pro Max -- Model:C -- RAM:6GB',1,'[{\"added\": {}}]',18,1),(234,'2022-03-20 08:10:35.250696','14','ID: 14 -- Name: iPhone 13 Pro Max -- Model:B -- RAM:6GB',2,'[{\"changed\": {\"fields\": [\"Back camera features\"]}}]',18,1),(235,'2022-03-20 08:12:02.145153','16','ID: 16 -- Name: iPhone 13 Pro Max -- Model:D -- RAM:6GB',1,'[{\"added\": {}}]',18,1),(236,'2022-03-20 08:12:02.831970','13','ID: 13 -- Name: iPhone 13 Pro Max -- Model:A -- RAM:6GB',2,'[{\"changed\": {\"fields\": [\"Image stabilization\"]}}]',18,1),(237,'2022-03-20 08:12:12.786149','15','ID: 15 -- Name: iPhone 13 Pro Max -- Model:C -- RAM:6GB',2,'[{\"changed\": {\"fields\": [\"Image stabilization\"]}}]',18,1),(238,'2022-03-20 08:12:17.327590','14','ID: 14 -- Name: iPhone 13 Pro Max -- Model:B -- RAM:6GB',2,'[{\"changed\": {\"fields\": [\"Image stabilization\"]}}]',18,1),(239,'2022-03-20 08:12:21.020352','13','ID: 13 -- Name: iPhone 13 Pro Max -- Model:A -- RAM:6GB',2,'[]',18,1),(240,'2022-03-20 08:13:01.886146','3','Apple',1,'[{\"added\": {}}]',32,1),(241,'2022-03-20 08:13:38.010249','5','capacity: 4352 -- type: ion -- removable: False -- wireless_charging: Yes',1,'[{\"added\": {}}]',34,1),(242,'2022-03-20 08:14:15.200082','13','13 ID: 13 -- Name: iPhone 13 Pro Max -- Model:A -- RAM:6GB',1,'[{\"added\": {}}]',17,1),(243,'2022-03-20 08:14:44.788560','14','14 ID: 14 -- Name: iPhone 13 Pro Max -- Model:B -- RAM:6GB',1,'[{\"added\": {}}]',17,1),(244,'2022-03-20 08:15:00.628311','15','15 ID: 15 -- Name: iPhone 13 Pro Max -- Model:C -- RAM:6GB',1,'[{\"added\": {}}]',17,1),(245,'2022-03-20 08:15:14.703299','16','16 ID: 16 -- Name: iPhone 13 Pro Max -- Model:D -- RAM:6GB',1,'[{\"added\": {}}]',17,1),(246,'2022-03-20 08:15:34.544380','4','version: 5.0 -- A2DP: True -- LE :True -- aptX: False -- EDR: False',2,'[{\"changed\": {\"fields\": [\"Network\"]}}]',33,1),(247,'2022-03-20 08:16:26.326462','17','ID: 17 -- is_front: False -- pixel: 12 -- diaphragm: 1.5 -- pixel size: 1.9 -- usuage: wide',1,'[{\"added\": {}}]',31,1),(248,'2022-03-20 08:16:48.750209','18','ID: 18 -- is_front: False -- pixel: 12 -- diaphragm: 2.8 -- pixel size: None -- usuage: telephoto',1,'[{\"added\": {}}]',31,1),(249,'2022-03-20 08:17:18.055753','19','ID: 19 -- is_front: False -- pixel: 12 -- diaphragm: 1.8 -- pixel size: None -- usuage: ultrawide',1,'[{\"added\": {}}]',31,1),(250,'2022-03-20 08:18:24.169463','20','ID: 20 -- is_front: False -- pixel: None -- diaphragm: None -- pixel size: None -- usuage: depth',1,'[{\"added\": {}}]',31,1),(251,'2022-03-20 08:18:49.324746','21','ID: 21 -- is_front: True -- pixel: 12 -- diaphragm: 2.2 -- pixel size: None -- usuage: wide',1,'[{\"added\": {}}]',31,1),(252,'2022-03-20 08:19:16.183578','22','ID: 22 -- is_front: True -- pixel: None -- diaphragm: None -- pixel size: None -- usuage: depth/biometrics senso',1,'[{\"added\": {}}]',31,1),(253,'2022-03-20 08:19:20.187473','22','ID: 22 -- is_front: True -- pixel: None -- diaphragm: None -- pixel size: None -- usuage: depth/biometrics senso',2,'[]',31,1),(254,'2022-03-20 08:20:06.536275','5','5',1,'[{\"added\": {}}]',30,1),(255,'2022-03-20 08:20:19.286789','18','Gold',1,'[{\"added\": {}}]',16,1),(256,'2022-03-20 08:20:25.057813','19','Silver',1,'[{\"added\": {}}]',16,1),(257,'2022-03-20 08:20:30.570996','20','Sierra Blue',1,'[{\"added\": {}}]',16,1),(258,'2022-03-20 08:20:34.843308','21','Alpine Green',1,'[{\"added\": {}}]',16,1),(259,'2022-03-20 08:21:06.905141','2','ID: 2 -- A-GPS: True -- BDS: True -- GALILEO: True -- GLONASS: True -- QZSS: True -- dual_gps: False',2,'[{\"changed\": {\"fields\": [\"Network\"]}}]',29,1),(260,'2022-03-20 08:24:43.589854','13','ID: 13 -- Phone: ID: 13 -- Name: iPhone 13 Pro Max -- Model:A -- RAM:6GB',1,'[{\"added\": {}}]',15,1),(261,'2022-03-20 08:25:24.925213','14','ID: 14 -- Phone: ID: 14 -- Name: iPhone 13 Pro Max -- Model:B -- RAM:6GB',1,'[{\"added\": {}}]',15,1),(262,'2022-03-20 08:25:59.620868','15','ID: 15 -- Phone: ID: 15 -- Name: iPhone 13 Pro Max -- Model:C -- RAM:6GB',1,'[{\"added\": {}}]',15,1),(263,'2022-03-20 08:26:22.310936','16','ID: 16 -- Phone: ID: 16 -- Name: iPhone 13 Pro Max -- Model:D -- RAM:6GB',1,'[{\"added\": {}}]',15,1),(264,'2022-03-20 08:26:59.743406','5','ID: 5 -- Frame: stainless steel -- back-glass: Glass (Gorilla Glass) -- front-glass: Glass (Gorilla Glass)',1,'[{\"added\": {}}]',28,1),(265,'2022-03-20 08:27:21.699955','5','ios 15, upgradable to iOS 15.4 None',1,'[{\"added\": {}}]',27,1),(266,'2022-03-20 08:28:33.478281','11','11 -- images/apple-iphone-13-pro-max-1.jpg',1,'[{\"added\": {}}]',26,1),(267,'2022-03-20 08:28:38.514283','12','12 -- images/apple-iphone-13-pro-max-2.jpg',1,'[{\"added\": {}}]',26,1),(268,'2022-03-20 08:28:43.229533','13','13 -- images/apple-iphone-13-pro-max-3.jpg',1,'[{\"added\": {}}]',26,1),(269,'2022-03-20 08:29:15.419623','5','Apple A15 Bionic (5 nm) Apple GPU (5-core graphics)',1,'[{\"added\": {}}]',25,1),(270,'2022-03-20 08:30:36.497509','5','5 - fingerprint_type: None - accelerometer: True - gyroscope: True - proximity: True',1,'[{\"added\": {}}]',24,1),(271,'2022-03-20 08:31:25.450495','3','quality: None -- 3.5mm jack: False',1,'[{\"added\": {}}]',23,1),(272,'2022-03-20 08:31:51.881683','6','128.0 - NVMe',1,'[{\"added\": {}}]',22,1),(273,'2022-03-20 08:32:09.182575','7','256.0 - NVMe',1,'[{\"added\": {}}]',22,1),(274,'2022-03-20 08:32:13.886985','6','128.0 - NVMe',2,'[{\"changed\": {\"fields\": [\"Phone\"]}}]',22,1),(275,'2022-03-20 08:32:25.425697','8','512.0 - NVMe',1,'[{\"added\": {}}]',22,1),(276,'2022-03-20 08:32:37.960875','9','1024.0 - NVMe',1,'[{\"added\": {}}]',22,1),(277,'2022-03-20 08:32:54.820489','3','version: Lightning, USB 2.0 -- OTG: True',1,'[{\"added\": {}}]',21,1),(278,'2022-03-20 08:33:15.685671','4','4 WIFI',1,'[{\"added\": {}}]',20,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(9,'api','category'),(13,'api','comment'),(10,'api','post'),(12,'api','postdescription'),(11,'api','postimgurl'),(14,'api','rate'),(8,'api','user'),(3,'auth','group'),(2,'auth','permission'),(6,'authtoken','token'),(7,'authtoken','tokenproxy'),(4,'contenttypes','contenttype'),(34,'phone','battery'),(33,'phone','bluetooth'),(15,'phone','body'),(32,'phone','brand'),(31,'phone','camera'),(30,'phone','cellnetwork'),(16,'phone','color'),(29,'phone','gps'),(28,'phone','material'),(17,'phone','network'),(27,'phone','operatingsystem'),(18,'phone','phone'),(26,'phone','phoneimgurl'),(25,'phone','platform'),(19,'phone','ram'),(24,'phone','sensor'),(23,'phone','sound'),(22,'phone','storage'),(21,'phone','usb'),(20,'phone','wifi'),(5,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2022-03-19 15:18:16.235732'),(2,'contenttypes','0002_remove_content_type_name','2022-03-19 15:18:16.713451'),(3,'auth','0001_initial','2022-03-19 15:18:17.782828'),(4,'auth','0002_alter_permission_name_max_length','2022-03-19 15:18:17.990708'),(5,'auth','0003_alter_user_email_max_length','2022-03-19 15:18:18.006699'),(6,'auth','0004_alter_user_username_opts','2022-03-19 15:18:18.022690'),(7,'auth','0005_alter_user_last_login_null','2022-03-19 15:18:18.038683'),(8,'auth','0006_require_contenttypes_0002','2022-03-19 15:18:18.047676'),(9,'auth','0007_alter_validators_add_error_messages','2022-03-19 15:18:18.063669'),(10,'auth','0008_alter_user_username_max_length','2022-03-19 15:18:18.079659'),(11,'auth','0009_alter_user_last_name_max_length','2022-03-19 15:18:18.093653'),(12,'auth','0010_alter_group_name_max_length','2022-03-19 15:18:18.136624'),(13,'auth','0011_update_proxy_permissions','2022-03-19 15:18:18.155615'),(14,'auth','0012_alter_user_first_name_max_length','2022-03-19 15:18:18.170604'),(15,'api','0001_initial','2022-03-19 15:18:20.063705'),(16,'admin','0001_initial','2022-03-19 15:18:20.600395'),(17,'admin','0002_logentry_remove_auto_add','2022-03-19 15:18:20.624383'),(18,'admin','0003_logentry_add_action_flag_choices','2022-03-19 15:18:20.644368'),(19,'api','0002_category_post_postimgurl_postdescription_comment','2022-03-19 15:18:24.119690'),(20,'api','0003_rate','2022-03-19 15:18:24.690357'),(21,'authtoken','0001_initial','2022-03-19 15:18:25.007616'),(22,'authtoken','0002_auto_20160226_1747','2022-03-19 15:18:25.110557'),(23,'authtoken','0003_tokenproxy','2022-03-19 15:18:25.120547'),(24,'phone','0001_initial','2022-03-19 15:18:39.654822'),(25,'sessions','0001_initial','2022-03-19 15:18:39.827720'),(26,'phone','0002_rename_video_quality_phone_back_camera_video_quality_and_more','2022-03-19 19:45:20.498909'),(27,'phone','0003_alter_network_sim_slot','2022-03-19 19:52:29.087464'),(28,'phone','0004_alter_brand_phone','2022-03-19 19:55:52.525820'),(29,'phone','0005_alter_brand_phone','2022-03-19 19:55:52.572694'),(30,'phone','0006_alter_platform_core_count','2022-03-19 20:03:43.684368'),(31,'phone','0007_alter_platform_cpu_chipset_and_more','2022-03-19 20:04:34.747539'),(32,'phone','0008_alter_platform_processor_size','2022-03-19 20:06:12.358745'),(33,'phone','0009_remove_platform_processor_size','2022-03-19 20:06:54.253564'),(34,'phone','0010_bluetooth_version','2022-03-19 20:22:18.330078'),(35,'phone','0011_rename_camera_features_phone_back_camera_features_and_more','2022-03-19 20:28:01.844832'),(36,'phone','0012_remove_network_phone_network_phone','2022-03-19 20:44:00.299150'),(37,'phone','0013_camera_usage','2022-03-19 20:59:15.145103'),(38,'phone','0014_alter_camera_features','2022-03-19 21:01:06.527961'),(39,'phone','0015_remove_body_phone_body_phone','2022-03-19 21:10:24.763613'),(40,'phone','0016_phone_is_front_camera','2022-03-19 21:42:51.054119'),(41,'phone','0017_remove_phone_is_front_camera_camera_is_front_camera','2022-03-19 21:45:43.848905'),(42,'phone','0018_operatingsystem_interface','2022-03-19 21:49:29.709834'),(43,'phone','0019_remove_phoneimgurl_phone_phoneimgurl_phone','2022-03-19 21:50:49.789697'),(44,'phone','0020_alter_battery_wireless_charging','2022-03-20 04:03:28.361078'),(45,'phone','0021_alter_battery_wireless_charging','2022-03-20 04:05:25.564190'),(46,'phone','0022_alter_network_infrared','2022-03-20 04:08:00.026081'),(47,'phone','0023_alter_network_nfc','2022-03-20 04:09:35.065251'),(48,'phone','0024_alter_body_ip_certificate_alter_body_protection','2022-03-20 04:19:54.605754'),(49,'phone','0025_alter_body_protection','2022-03-20 07:41:53.468802'),(50,'phone','0026_alter_body_protection','2022-03-20 08:23:42.158071'),(51,'phone','0027_sensor_face_id','2022-03-20 08:30:01.832981'),(52,'phone','0028_alter_sound_speaker_quality','2022-03-20 08:31:13.189401');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('4engtvzldligioa2c7k6odjjr0lrtp9f','.eJxVjMEOwiAQRP-FsyEsso149O43kIVdpGpoUtpT479bkh70OPPezKYCrUsJa5M5jKyuCtTpt4uUXlI74CfVx6TTVJd5jLor-qBN3yeW9-1w_w4KtbKvrWFLmL14g-xdzudIwEgIAo4iDoICQ7qAg0RixO1KDxGsix6y-nwB8Hc4Gw:1nVawd:Merk8AGkgxig69i0flMqXHkwjI4sVKFF3LdjnQvGlbE','2022-04-02 15:24:43.748581');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `favorite_post`
--

LOCK TABLES `favorite_post` WRITE;
/*!40000 ALTER TABLE `favorite_post` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorite_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_battery`
--

LOCK TABLES `phone_battery` WRITE;
/*!40000 ALTER TABLE `phone_battery` DISABLE KEYS */;
INSERT INTO `phone_battery` VALUES (1,'Fast charging 25W,USB Power Delivery 3.0,Fast Qi/PMA wireless charging 15W,Reverse wireless charging 4.5W',4300,0,'Yes','ion'),(2,'Fast charging 45W, USB Power Delivery 3.0, Fast Qi/PMA wireless charging 15W, Reverse wireless charging 4.5W',5000,0,'Yes','ion'),(3,'Fast charging 120W, 100% in 17 min (advertised)',4500,0,'Unknown','pol'),(4,'Fast charging 33W, 59% in 30 min, 100% in 59 min (advertised)',5160,0,'No','pol'),(5,'Fast charging (27W, unofficial rating), 50% in 30 min (advertised),\r\nUSB Power Delivery 2.0,\r\nMagSafe wireless charging 15W,\r\nQi magnetic fast wireless charging 7.5W',4352,0,'Yes','ion');
/*!40000 ALTER TABLE `phone_battery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_battery_phone`
--

LOCK TABLES `phone_battery_phone` WRITE;
/*!40000 ALTER TABLE `phone_battery_phone` DISABLE KEYS */;
INSERT INTO `phone_battery_phone` VALUES (1,1,1),(2,2,2),(3,2,3),(4,2,4),(5,2,5),(7,3,6),(8,3,7),(6,3,8),(9,4,9),(10,4,10),(11,4,11),(12,4,12),(14,5,13),(15,5,14),(16,5,15),(13,5,16);
/*!40000 ALTER TABLE `phone_battery_phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_bluetooth`
--

LOCK TABLES `phone_bluetooth` WRITE;
/*!40000 ALTER TABLE `phone_bluetooth` DISABLE KEYS */;
INSERT INTO `phone_bluetooth` VALUES (1,1,0,1,1,5),(2,1,0,1,0,5.2),(3,1,0,1,1,5.2),(4,1,0,1,0,5);
/*!40000 ALTER TABLE `phone_bluetooth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_bluetooth_network`
--

LOCK TABLES `phone_bluetooth_network` WRITE;
/*!40000 ALTER TABLE `phone_bluetooth_network` DISABLE KEYS */;
INSERT INTO `phone_bluetooth_network` VALUES (1,1,1),(2,2,2),(3,2,3),(4,2,4),(5,2,5),(7,3,6),(8,3,7),(6,3,8),(9,4,9),(10,4,10),(11,4,11),(12,4,12),(14,4,13),(15,4,14),(16,4,15),(13,4,16);
/*!40000 ALTER TABLE `phone_bluetooth_network` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_body`
--

LOCK TABLES `phone_body` WRITE;
/*!40000 ALTER TABLE `phone_body` DISABLE KEYS */;
INSERT INTO `phone_body` VALUES (1,6.7,192,'Super AMOLED Plus, HDR10+','Super AMOLED Plus','1080 × 2400','Corning Gorilla Glass 5','IP68',1,1),(2,6.8,228,'Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits (peak)','Dynamic AMOLED 2X','1440 x 3088','Corning Gorilla Glass Victus+','IP68',1,2),(3,6.8,228,'Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits (peak)','Dynamic AMOLED 2X','1440 x 3088','Corning Gorilla Glass Victus+','IP68',1,3),(4,6.8,228,'Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits (peak)','Dynamic AMOLED 2X','1440 x 3088','Corning Gorilla Glass Victus+','IP68',1,4),(5,6.8,228,'Dynamic AMOLED 2X, 120Hz, HDR10+, 1750 nits (peak)','Dynamic AMOLED 2X','1440 x 3088','Corning Gorilla Glass Victus+','IP68',1,5),(6,6.67,210,'Super AMOLED, 144Hz, HDR10+, 1300 nits (peak)','Super AMOLED','1080 × 2400','Not Specified',NULL,1,6),(7,6.67,210,'Super AMOLED, 144Hz, HDR10+, 1300 nits (peak)','Super AMOLED','1080 × 2400','Not Specified',NULL,1,7),(8,6.67,210,'Super AMOLED, 144Hz, HDR10+, 1300 nits (peak)','Super AMOLED','1080 × 2400','Not Specified',NULL,1,8),(9,6.67,215,'IPS LCD, 120Hz, HDR10, 450 nits (typ)','IPS LCD','1080 × 2400','Corning Gorilla Glass 6','IP53',0,9),(10,6.67,215,'IPS LCD, 120Hz, HDR10, 450 nits (typ)','IPS LCD','1080 × 2400','Corning Gorilla Glass 6','IP53',0,10),(11,6.67,215,'IPS LCD, 120Hz, HDR10, 450 nits (typ)','IPS LCD','1080 × 2400','Corning Gorilla Glass 6','IP53',0,11),(12,6.67,215,'IPS LCD, 120Hz, HDR10, 450 nits (typ)','IPS LCD','1080 × 2400','Corning Gorilla Glass 6','IP53',0,12),(13,6.7,240,'Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (HBM), 1200 nits (peak)','Super Retina XDR OLED','1284 x 2778','Scratch-resistant ceramic glass, oleophobic coating','IP68',1,13),(14,6.7,240,'Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (HBM), 1200 nits (peak)','Super Retina XDR OLED','1284 x 2778','Scratch-resistant ceramic glass, oleophobic coating','IP68',1,14),(15,6.7,240,'Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (HBM), 1200 nits (peak)','Super Retina XDR OLED','1284 x 2778','Scratch-resistant ceramic glass, oleophobic coating','IP68',1,15),(16,6.7,240,'Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (HBM), 1200 nits (peak)','Super Retina XDR OLED','1284 x 2778','Scratch-resistant ceramic glass, oleophobic coating','IP68',1,16);
/*!40000 ALTER TABLE `phone_body` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_body_color`
--

LOCK TABLES `phone_body_color` WRITE;
/*!40000 ALTER TABLE `phone_body_color` DISABLE KEYS */;
INSERT INTO `phone_body_color` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(7,2,6),(8,2,7),(9,2,9),(10,2,10),(11,2,12),(12,2,13),(13,2,14),(14,3,6),(15,3,7),(16,3,9),(17,3,10),(18,3,12),(19,3,13),(20,3,14),(21,4,6),(22,4,7),(23,4,9),(24,4,10),(25,4,12),(26,4,13),(27,4,14),(28,5,6),(29,5,7),(30,5,9),(31,5,10),(32,5,12),(33,5,13),(34,5,14),(35,6,7),(36,6,15),(38,7,7),(37,7,15),(40,8,7),(39,8,15),(43,9,6),(41,9,16),(42,9,17),(46,10,6),(44,10,16),(45,10,17),(49,11,6),(47,11,16),(48,11,17),(52,12,6),(50,12,16),(51,12,17),(53,13,12),(54,13,18),(55,13,19),(56,13,20),(57,13,21),(58,14,12),(59,14,18),(60,14,19),(61,14,20),(62,14,21),(63,15,12),(64,15,18),(65,15,19),(66,15,20),(67,15,21),(68,16,12),(69,16,18),(70,16,19),(71,16,20),(72,16,21);
/*!40000 ALTER TABLE `phone_body_color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_brand`
--

LOCK TABLES `phone_brand` WRITE;
/*!40000 ALTER TABLE `phone_brand` DISABLE KEYS */;
INSERT INTO `phone_brand` VALUES (1,'Samsung','South Korea'),(2,'Xiaomi','China'),(3,'Apple','USA');
/*!40000 ALTER TABLE `phone_brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_brand_phone`
--

LOCK TABLES `phone_brand_phone` WRITE;
/*!40000 ALTER TABLE `phone_brand_phone` DISABLE KEYS */;
INSERT INTO `phone_brand_phone` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(7,2,6),(8,2,7),(6,2,8),(9,2,9),(10,2,10),(11,2,11),(12,2,12),(14,3,13),(15,3,14),(16,3,15),(13,3,16);
/*!40000 ALTER TABLE `phone_brand_phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_camera`
--

LOCK TABLES `phone_camera` WRITE;
/*!40000 ALTER TABLE `phone_camera` DISABLE KEYS */;
INSERT INTO `phone_camera` VALUES (1,'Dual Pixel PDAF,OIS',12,1.80,NULL,1.800,'wide',0),(2,'PDAF,OIS,3x hybrid zoom',64,2.00,NULL,0.800,'telephoto',0),(3,'',12,2.20,NULL,1.400,'ultrawide',0),(4,'Dual Pixel PDAF',10,2.20,NULL,1.220,'wide',1),(5,'PDAF, Laser AF, OIS',108,1.80,NULL,0.800,'wide',0),(6,'dual pixel PDAF, OIS, 10x optical zoom',10,4.90,NULL,1.120,'periscope telephoto',0),(7,'dual pixel PDAF, OIS, 3x optical zoom',10,2.40,NULL,1.120,'telephoto',0),(8,'dual pixel PDAF, Super Steady video',12,2.20,NULL,1.400,'ultrawide',0),(9,'PDAF',40,2.20,NULL,0.700,'wide',1),(10,'PDAF',48,1.80,NULL,0.800,'wide',0),(11,'',8,2.20,NULL,1.120,'120˚ (ultrawide)',0),(12,'AF',5,2.40,NULL,NULL,'macro',0),(13,'HDR',20,2.00,NULL,0.800,'wide',1),(14,'119˚ (ultrawide)',8,2.20,NULL,1.000,'ultrawide',0),(15,'',2,2.40,NULL,NULL,'macro',0),(16,'',2,2.40,NULL,NULL,'depth',0),(17,'dual pixel PDAF, sensor-shift OIS',12,1.50,NULL,1.900,'wide',0),(18,'PDAF, OIS, 3x optical zoom',12,2.80,NULL,NULL,'telephoto',0),(19,'120˚ (ultrawide), PDAF',12,1.80,NULL,NULL,'ultrawide',0),(20,'TOF 3D LiDAR scanner (depth)',NULL,NULL,'TOF 3D LiDAR',NULL,'depth',0),(21,'',12,2.20,NULL,NULL,'wide',1),(22,'SL 3D, (depth/biometrics sensor)',NULL,NULL,'SL 3D',NULL,'depth/biometrics senso',1);
/*!40000 ALTER TABLE `phone_camera` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_camera_phone`
--

LOCK TABLES `phone_camera_phone` WRITE;
/*!40000 ALTER TABLE `phone_camera_phone` DISABLE KEYS */;
INSERT INTO `phone_camera_phone` VALUES (1,1,1),(2,2,1),(3,3,1),(4,4,1),(5,5,2),(22,5,3),(23,5,4),(24,5,5),(6,6,2),(19,6,3),(20,6,4),(21,6,5),(7,7,2),(16,7,3),(17,7,4),(18,7,5),(8,8,2),(13,8,3),(14,8,4),(15,8,5),(9,9,2),(10,9,3),(11,9,4),(12,9,5),(26,10,6),(27,10,7),(25,10,8),(37,10,9),(38,10,10),(39,10,11),(40,10,12),(29,11,6),(30,11,7),(28,11,8),(32,12,6),(33,12,7),(31,12,8),(35,13,6),(36,13,7),(34,13,8),(41,14,9),(42,14,10),(43,14,11),(44,14,12),(45,15,9),(46,15,10),(47,15,11),(48,15,12),(49,16,9),(50,16,10),(51,16,11),(52,16,12),(54,17,13),(55,17,14),(56,17,15),(53,17,16),(58,18,13),(59,18,14),(60,18,15),(57,18,16),(62,19,13),(63,19,14),(64,19,15),(61,19,16),(66,20,13),(67,20,14),(68,20,15),(65,20,16),(70,21,13),(71,21,14),(72,21,15),(69,21,16),(74,22,13),(75,22,14),(76,22,15),(73,22,16);
/*!40000 ALTER TABLE `phone_camera_phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_cellnetwork`
--

LOCK TABLES `phone_cellnetwork` WRITE;
/*!40000 ALTER TABLE `phone_cellnetwork` DISABLE KEYS */;
INSERT INTO `phone_cellnetwork` VALUES (1,'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)\r\nCDMA 800 / 1900','HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100\r\nCDMA2000 1xEV-DO','1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 32, 38, 39, 40, 41, 66',''),(2,'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (Dual SIM model only)\r\nCDMA 800 / 1900 & TD-SCDMA','HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100\r\nCDMA2000 1xEV-DO','1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 32, 38, 39, 40, 41, 66 - SM-S908B','1, 2, 3, 5, 7, 8, 12, 20, 25, 28, 38, 40, 41, 66, 75, 77, 78 SA/NSA/Sub6 - SM-S908B'),(3,'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2\r\nCDMA 800 & TD-SCDMA','HSDPA 800 / 850 / 900 / 1700(AWS) / 1900 / 2100\r\nCDMA2000 1xEV-DO','1, 2, 3, 4, 5, 7, 8, 18, 19, 20, 26, 28, 34, 38, 39, 40, 41','1, 3, 8, 28, 41, 77, 78 SA/NSA'),(4,'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2','HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100','1, 2, 3, 4, 5, 7, 8, 20, 28, 38, 40, 41 - International\r\n1, 2, 3, 5, 8, 38, 40, 41 - India',''),(5,'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM)\r\nCDMA 800 / 1900','HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100\r\nCDMA2000 1xEV-DO','1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 30, 32, 34, 38, 39, 40, 41, 42, 46, 48, 66 - A2643, A2644, A2645\r\n1, 2, 3, 4, 5, 7, 8, 11, 12, 13, 14, 17, 18, 19, 20, 21, 25, 26, 28, 29, 30, 32, 34, 38, 39, 40, 41, 42, 46, 48, 66, 71 - A2484, A2641','1, 2, 3, 5, 7, 8, 12, 20, 25, 28, 30, 38, 40, 41, 48, 66, 77, 78, 79 SA/NSA/Sub6 - A2643, A2644\r\n1, 2, 3, 5, 7, 8, 12, 20, 25, 28, 29, 30, 38, 40, 41, 48, 66, 71, 78, 79, 258, 260, 261 SA/NSA/Sub6/mmWave - A2484\r\n1, 2, 3, 5, 7, 8, 12, 20, 25, 28, 29, 30, 38, 40, 41, 48, 66, 71, 77, 78, 79 SA/NSA/Sub6 - A2641');
/*!40000 ALTER TABLE `phone_cellnetwork` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_cellnetwork_network`
--

LOCK TABLES `phone_cellnetwork_network` WRITE;
/*!40000 ALTER TABLE `phone_cellnetwork_network` DISABLE KEYS */;
INSERT INTO `phone_cellnetwork_network` VALUES (1,1,1),(2,2,2),(3,2,3),(4,2,4),(5,2,5),(7,3,6),(8,3,7),(6,3,8),(9,4,9),(10,4,10),(11,4,11),(12,4,12),(14,5,13),(15,5,14),(16,5,15),(13,5,16);
/*!40000 ALTER TABLE `phone_cellnetwork_network` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_color`
--

LOCK TABLES `phone_color` WRITE;
/*!40000 ALTER TABLE `phone_color` DISABLE KEYS */;
INSERT INTO `phone_color` VALUES (1,'Mystic Green'),(2,'Mystic Bronze'),(3,'Mystic Gray'),(4,'Mystic Red'),(5,'Mystic Blue'),(6,'Phantom Black'),(7,'White'),(9,'Burgundy'),(10,'Green'),(12,'Graphite'),(13,'Red'),(14,'Sky Blue'),(15,'Black'),(16,'Frost Blue'),(17,'Metal Bronze'),(18,'Gold'),(19,'Silver'),(20,'Sierra Blue'),(21,'Alpine Green');
/*!40000 ALTER TABLE `phone_color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_gps`
--

LOCK TABLES `phone_gps` WRITE;
/*!40000 ALTER TABLE `phone_gps` DISABLE KEYS */;
INSERT INTO `phone_gps` VALUES (1,1,1,1,1,0,0),(2,1,1,1,1,1,0);
/*!40000 ALTER TABLE `phone_gps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_gps_network`
--

LOCK TABLES `phone_gps_network` WRITE;
/*!40000 ALTER TABLE `phone_gps_network` DISABLE KEYS */;
INSERT INTO `phone_gps_network` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(13,1,9),(14,1,10),(15,1,11),(16,1,12),(7,2,6),(8,2,7),(6,2,8),(18,2,13),(19,2,14),(20,2,15),(17,2,16);
/*!40000 ALTER TABLE `phone_gps_network` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_material`
--

LOCK TABLES `phone_material` WRITE;
/*!40000 ALTER TABLE `phone_material` DISABLE KEYS */;
INSERT INTO `phone_material` VALUES (1,NULL,'plastic','Glass (Gorilla Glass 5)'),(2,'aluminum','Glass (Gorilla Glass Victus+)','Glass (Gorilla Glass Victus+)'),(3,NULL,NULL,NULL),(4,NULL,'plastic','Glass  (Gorilla Glass 6)'),(5,'stainless steel','Glass (Gorilla Glass)','Glass (Gorilla Glass)');
/*!40000 ALTER TABLE `phone_material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_material_body`
--

LOCK TABLES `phone_material_body` WRITE;
/*!40000 ALTER TABLE `phone_material_body` DISABLE KEYS */;
INSERT INTO `phone_material_body` VALUES (1,1,1),(2,2,2),(3,2,3),(4,2,4),(5,2,5),(7,3,6),(8,3,7),(6,3,8),(9,4,9),(10,4,10),(11,4,11),(12,4,12),(14,5,13),(15,5,14),(16,5,15),(13,5,16);
/*!40000 ALTER TABLE `phone_material_body` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_network`
--

LOCK TABLES `phone_network` WRITE;
/*!40000 ALTER TABLE `phone_network` DISABLE KEYS */;
INSERT INTO `phone_network` VALUES (1,'1',1,'(1,Nano and eSIM) OR (2,Hybrid,Nano,dual-standby)','0',1),(2,'1',1,'(1,Nano and eSIM) OR (2,Hybrid,Nano,dual-standby)','0',2),(3,'0',1,'(1,Nano and eSIM) OR (2,Hybrid,Nano,dual-standby)','0',3),(4,'1',1,'(1,Nano and eSIM) OR (2,Hybrid,Nano,dual-standby)','0',4),(5,'Yes',1,'(1,Nano and eSIM) OR (2,Hybrid,Nano,dual-standby)','Yes',5),(6,'Yes',0,'2,Nano,dual-standby','Unknown',7),(7,'Yes',0,'2,Nano,dual-standby','Unknown',6),(8,'Yes',0,'2,Nano,dual-standby','Unknown',8),(9,'Yes',1,'2,Hybrid,Nano,dual-standby','Yes',9),(10,'Yes',1,'2,Hybrid,Nano,dual-standby','Yes',10),(11,'Yes',1,'2,Hybrid,Nano,dual-standby','Yes',11),(12,'Yes',1,'2,Hybrid,Nano,dual-standby','Yes',12),(13,'Yes',0,'(1,Nano and eSIM) OR (2,Hybrid,Nano,dual-standby)','No',13),(14,'Yes',0,'(1,Nano and eSIM) OR (2,Hybrid,Nano,dual-standby)','No',14),(15,'Yes',0,'(1,Nano and eSIM) OR (2,Hybrid,Nano,dual-standby)','No',15),(16,'Yes',1,'(1,Nano and eSIM) OR (2,Hybrid,Nano,dual-standby)','No',16);
/*!40000 ALTER TABLE `phone_network` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_operatingsystem`
--

LOCK TABLES `phone_operatingsystem` WRITE;
/*!40000 ALTER TABLE `phone_operatingsystem` DISABLE KEYS */;
INSERT INTO `phone_operatingsystem` VALUES (1,'10, upgradable to 11','android','One UI 3.0'),(2,'12','android','One UI 4.1'),(3,'11','android','Joy UI 12.8'),(4,'11','android','MIUI 12.5 for POCO'),(5,'15, upgradable to iOS 15.4','ios',NULL);
/*!40000 ALTER TABLE `phone_operatingsystem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_operatingsystem_phone`
--

LOCK TABLES `phone_operatingsystem_phone` WRITE;
/*!40000 ALTER TABLE `phone_operatingsystem_phone` DISABLE KEYS */;
INSERT INTO `phone_operatingsystem_phone` VALUES (1,1,1),(2,2,2),(3,2,3),(4,2,4),(5,2,5),(7,3,6),(8,3,7),(6,3,8),(9,4,9),(10,4,10),(11,4,11),(12,4,12),(14,5,13),(15,5,14),(16,5,15),(13,5,16);
/*!40000 ALTER TABLE `phone_operatingsystem_phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_phone`
--

LOCK TABLES `phone_phone` WRITE;
/*!40000 ALTER TABLE `phone_phone` DISABLE KEYS */;
INSERT INTO `phone_phone` VALUES (1,'good quality of speakers,fast memory,good screen,dust/water resistant,Samsung Wireless DeX,ANT+,Bixby natural language commands and dictation,Samsung Pay','price,no 3.5mm jack',700,'2020-08-05','Galaxy Note20','A set of features in one phone','LED flash,auto-HDR,panorama','gyro-EIS & OIS','8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+,',3,'4K@30/60fps, 1080p@30fps','A','Dual video call, Auto-HDR'),(2,'powerful camera, powerful chipset, update network, Samsung DeX, Samsung Wireless DeX, Bixby natural language commands and dictation, Samsung Pay, Ultra Wideband','no infrared, no 3.5mm jack',1200,'2022-02-09','Galaxy S22 ultra 5G','Big update of Samsung at first of 2022','LED flash, auto-HDR, panorama','gyro-EIS for Video and OIS for cameras','8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+,',3,'4K@30/60fps, 1080p@30fps','A','Dual video call, Auto-HDR'),(3,'powerful camera, powerful chipset, update network, Samsung DeX, Samsung Wireless DeX, Bixby natural language commands and dictation, Samsung Pay, Ultra Wideband','no infrared, no 3.5mm jack',1200,'2022-02-09','Galaxy S22 ultra 5G','Big update of Samsung at first of 2022','LED flash, auto-HDR, panorama','gyro-EIS for Video and OIS for cameras','8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+,',4,'4K@30/60fps, 1080p@30fps','B','Dual video call, Auto-HDR'),(4,'powerful camera, powerful chipset, update network, Samsung DeX, Samsung Wireless DeX, Bixby natural language commands and dictation, Samsung Pay, Ultra Wideband','no infrared, no 3.5mm jack',1200,'2022-02-09','Galaxy S22 ultra 5G','Big update of Samsung at first of 2022','LED flash, auto-HDR, panorama','gyro-EIS for Video and OIS for cameras','8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+,',4,'4K@30/60fps, 1080p@30fps','C','Dual video call, Auto-HDR'),(5,'powerful camera, powerful chipset, update network, Samsung DeX, Samsung Wireless DeX, Bixby natural language commands and dictation, Samsung Pay, Ultra Wideband','no infrared, no 3.5mm jack',1200,'2022-02-09','Galaxy S22 ultra 5G','Big update of Samsung at first of 2022','LED flash, auto-HDR, panorama','gyro-EIS for Video and OIS for cameras','8K@24fps, 4K@30/60fps, 1080p@30/60/240fps, 720p@960fps, HDR10+,',4,'4K@30/60fps, 1080p@30fps','D','Dual video call, Auto-HDR'),(6,'144Hz Screen, good performance, memory technology','No radio, No card slot',400,'2021-10-13','Black Shark 4S','Forth Shark of Xiaomi','LED flash, HDR, panorama',NULL,'4K@30/60fps, 1080p@30/60/240fps, 1080p@960fps',3,'1080p@30fps','A','HDR'),(7,'144Hz Screen, good performance, memory technology','No radio, No card slot',400,'2021-10-13','Black Shark 4S','Forth Shark of Xiaomi','LED flash, HDR, panorama',NULL,'4K@30/60fps, 1080p@30/60/240fps, 1080p@960fps',4,'1080p@30fps','B','HDR'),(8,'144Hz Screen, good performance, memory technology','No radio, No card slot',400,'2021-10-13','Black Shark 4S','Forth Shark of Xiaomi','LED flash, HDR, panorama',NULL,'4K@30/60fps, 1080p@30/60/240fps, 1080p@960fps',4,'1080p@30fps','C','HDR'),(9,'Cheap, Good Performance, have Infrared, battery','It heats up at high pressure',255,'2021-03-22','Poco X3 Pro','Third Version of Special Force of Xiaomi','Dual-LED flash, HDR, panorama','gyro-EIS','4K@30fps, 1080p@30/60/120/240fps, 1080p@960fps',5,'1080p@30fps','A','HDR, panorama'),(10,'Cheap, Good Performance, have Infrared, battery','It heats up at high pressure',255,'2021-03-22','Poco X3 Pro','Third Version of Special Force of Xiaomi','Dual-LED flash, HDR, panorama','gyro-EIS','4K@30fps, 1080p@30/60/120/240fps, 1080p@960fps',3,'1080p@30fps','B','HDR, panorama'),(11,'Cheap, Good Performance, have Infrared, battery','It heats up at high pressure',255,'2021-03-22','Poco X3 Pro','Third Version of Special Force of Xiaomi','Dual-LED flash, HDR, panorama','gyro-EIS','4K@30fps, 1080p@30/60/120/240fps, 1080p@960fps',5,'1080p@30fps','C','HDR, panorama'),(12,'Cheap, Good Performance, have Infrared, battery','It heats up at high pressure',255,'2021-03-22','Poco X3 Pro','Third Version of Special Force of Xiaomi','Dual-LED flash, HDR, panorama','gyro-EIS','4K@30fps, 1080p@30/60/120/240fps, 1080p@960fps',3,'1080p@30fps','D','HDR, panorama'),(13,'Face ID, very fast storage, powerful chipset, 3D Camera, Ultra Wideband (UWB) support, good cell networks','not very economic, no audio jack',1100,'2021-09-14','iPhone 13 Pro Max','Apple\'s flagship in 2021','Dual-LED dual-tone flash, HDR (photo/panorama), 10‑bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode, stereo sound rec.','gyro-EIS and OIS','4K@24/30/60fps, 1080p@30/60/120/240fps',5,'4K@24/25/30/60fps, 1080p@30/60/120fps','A','HDR, gyro-EIS'),(14,'Face ID, very fast storage, powerful chipset, 3D Camera, Ultra Wideband (UWB) support, good cell networks','not very economic, no audio jack',1100,'2021-09-14','iPhone 13 Pro Max','Apple\'s flagship in 2021','Dual-LED dual-tone flash, HDR (photo/panorama), 10‑bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode, stereo sound rec.','gyro-EIS and OIS','4K@24/30/60fps, 1080p@30/60/120/240fps',5,'4K@24/25/30/60fps, 1080p@30/60/120fps','B','HDR, gyro-EIS'),(15,'Face ID, very fast storage, powerful chipset, 3D Camera, Ultra Wideband (UWB) support, good cell networks','not very economic, no audio jack',1100,'2021-09-14','iPhone 13 Pro Max','Apple\'s flagship in 2021','Dual-LED dual-tone flash, HDR (photo/panorama), 10‑bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode, stereo sound rec.','gyro-EIS and OIS','4K@24/30/60fps, 1080p@30/60/120/240fps',5,'4K@24/25/30/60fps, 1080p@30/60/120fps','C','HDR, gyro-EIS'),(16,'Face ID, very fast storage, powerful chipset, 3D Camera, Ultra Wideband (UWB) support, good cell networks','not very economic, no audio jack',1100,'2021-09-14','iPhone 13 Pro Max','Apple\'s flagship in 2021','Dual-LED dual-tone flash, HDR (photo/panorama), 10‑bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode, stereo sound rec.','gyro-EIS and OIS','4K@24/30/60fps, 1080p@30/60/120/240fps',5,'4K@24/25/30/60fps, 1080p@30/60/120fps','D','HDR, gyro-EIS');
/*!40000 ALTER TABLE `phone_phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_phoneimgurl`
--

LOCK TABLES `phone_phoneimgurl` WRITE;
/*!40000 ALTER TABLE `phone_phoneimgurl` DISABLE KEYS */;
INSERT INTO `phone_phoneimgurl` VALUES (1,'images/Samsung_Note20_1.jpg'),(2,'images/Samsung_Note20_2.jpg'),(3,'images/Samsung_Note20_3.jpg'),(4,'images/Samsung_S22_ultra_1.jpg'),(5,'images/Samsung_S22_ultra_2.jpg'),(6,'images/Samsung_S22_ultra_3.jpg'),(7,'images/Xiaomi_Black_Shark_4_1.jpg'),(8,'images/Xiaomi_Black_Shark_4_2.jpg'),(9,'images/xiaomi-poco-x3-pro-1.jpg'),(10,'images/xiaomi-poco-x3-pro-2.jpg'),(11,'images/apple-iphone-13-pro-max-1.jpg'),(12,'images/apple-iphone-13-pro-max-2.jpg'),(13,'images/apple-iphone-13-pro-max-3.jpg');
/*!40000 ALTER TABLE `phone_phoneimgurl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_phoneimgurl_phone`
--

LOCK TABLES `phone_phoneimgurl_phone` WRITE;
/*!40000 ALTER TABLE `phone_phoneimgurl_phone` DISABLE KEYS */;
INSERT INTO `phone_phoneimgurl_phone` VALUES (1,1,1),(2,2,1),(3,3,1),(4,4,2),(5,4,3),(6,4,4),(7,4,5),(8,5,2),(9,5,3),(10,5,4),(11,5,5),(12,6,2),(13,6,3),(14,6,4),(15,6,5),(17,7,6),(18,7,7),(16,7,8),(20,8,6),(21,8,7),(19,8,8),(22,9,9),(23,9,10),(24,9,11),(25,9,12),(26,10,9),(27,10,10),(28,10,11),(29,10,12),(31,11,13),(32,11,14),(33,11,15),(30,11,16),(35,12,13),(36,12,14),(37,12,15),(34,12,16),(39,13,13),(40,13,14),(41,13,15),(38,13,16);
/*!40000 ALTER TABLE `phone_phoneimgurl_phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_platform`
--

LOCK TABLES `phone_platform` WRITE;
/*!40000 ALTER TABLE `phone_platform` DISABLE KEYS */;
INSERT INTO `phone_platform` VALUES (1,'Octa-core (2x2.73 GHz Mongoose M5 & 2x2.50 GHz Cortex-A76 & 4x2.0 GHz Cortex-A55) - Global\r\nOcta-core (1x3.0 GHz Kryo 585 & 3x2.42 GHz Kryo 585 & 4x1.8 GHz Kryo 585) - USA','Exynos 990 (7 nm+) - Global','Mali-G77 MP11 - Global\r\nAdreno 650 - USA'),(2,'Octa-core (1x2.8 GHz Cortex-X2 & 3x2.50 GHz Cortex-A710 & 4x1.8 GHz Cortex-A510) - Europe\r\nOcta-core (1x3.00 GHz Cortex-X2 & 3x2.40 GHz Cortex-A710 & 4x1.70 GHz Cortex-A510) - ROW','Exynos 2200 (4 nm) - Europe\r\nQualcomm SM8450 Snapdragon 8 Gen 1 (4 nm) - ROW','Xclipse 920 - Europe\r\nAdreno 730 - ROW'),(3,'Octa-core (1x3.2 GHz Kryo 585 & 3x2.42 GHz Kryo 585 & 4x1.80 GHz Kryo 585)','Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)','Adreno 650'),(4,'Octa-core (1x2.96 GHz Kryo 485 Gold & 3x2.42 GHz Kryo 485 Gold & 4x1.78 GHz Kryo 485 Silver)','Qualcomm Snapdragon 860 (7 nm)','Adreno 640'),(5,'Hexa-core (2x3.22 GHz Avalanche + 4xX.X GHz Blizzard)','Apple A15 Bionic (5 nm)','Apple GPU (5-core graphics)');
/*!40000 ALTER TABLE `phone_platform` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_platform_phone`
--

LOCK TABLES `phone_platform_phone` WRITE;
/*!40000 ALTER TABLE `phone_platform_phone` DISABLE KEYS */;
INSERT INTO `phone_platform_phone` VALUES (1,1,1),(2,2,2),(3,2,3),(4,2,4),(5,2,5),(7,3,6),(8,3,7),(6,3,8),(9,4,9),(10,4,10),(11,4,11),(12,4,12),(14,5,13),(15,5,14),(16,5,15),(13,5,16);
/*!40000 ALTER TABLE `phone_platform_phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_ram`
--

LOCK TABLES `phone_ram` WRITE;
/*!40000 ALTER TABLE `phone_ram` DISABLE KEYS */;
INSERT INTO `phone_ram` VALUES (1,2),(2,4),(3,8),(4,12),(5,6),(6,24),(7,32);
/*!40000 ALTER TABLE `phone_ram` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_sensor`
--

LOCK TABLES `phone_sensor` WRITE;
/*!40000 ALTER TABLE `phone_sensor` DISABLE KEYS */;
INSERT INTO `phone_sensor` VALUES (1,0,1,1,0,1,1,1,'under display, ultrasonic',0,1,NULL,0),(2,0,1,1,0,1,1,1,'under display, ultrasonic',0,1,1,0),(3,0,1,1,0,1,1,1,'side-mounted',0,1,0,0),(4,0,1,1,0,1,0,1,'side-mounted',0,1,0,0),(5,0,1,1,0,1,1,0,NULL,0,1,1,1);
/*!40000 ALTER TABLE `phone_sensor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_sensor_phone`
--

LOCK TABLES `phone_sensor_phone` WRITE;
/*!40000 ALTER TABLE `phone_sensor_phone` DISABLE KEYS */;
INSERT INTO `phone_sensor_phone` VALUES (1,1,1),(2,2,2),(3,2,3),(4,2,4),(5,2,5),(7,3,6),(8,3,7),(6,3,8),(9,4,9),(10,4,10),(11,4,11),(12,4,12),(14,5,13),(15,5,14),(16,5,15),(13,5,16);
/*!40000 ALTER TABLE `phone_sensor_phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_sound`
--

LOCK TABLES `phone_sound` WRITE;
/*!40000 ALTER TABLE `phone_sound` DISABLE KEYS */;
INSERT INTO `phone_sound` VALUES (1,0,'stereo speakers, 32-bit/384kHz audio,Tuned by AKG'),(2,1,'stereo speakers, 24-bit/192kHz audio'),(3,0,NULL);
/*!40000 ALTER TABLE `phone_sound` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_sound_phone`
--

LOCK TABLES `phone_sound_phone` WRITE;
/*!40000 ALTER TABLE `phone_sound_phone` DISABLE KEYS */;
INSERT INTO `phone_sound_phone` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(7,2,6),(8,2,7),(6,2,8),(9,2,9),(10,2,10),(11,2,11),(12,2,12),(14,3,13),(15,3,14),(16,3,15),(13,3,16);
/*!40000 ALTER TABLE `phone_sound_phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_storage`
--

LOCK TABLES `phone_storage` WRITE;
/*!40000 ALTER TABLE `phone_storage` DISABLE KEYS */;
INSERT INTO `phone_storage` VALUES (1,'UFS 3.0',256),(2,'UFS 3.1',128),(3,'UFS 3.1',256),(4,'UFS 3.1',512),(5,'UFS 3.1',1024),(6,'NVMe',128),(7,'NVMe',256),(8,'NVMe',512),(9,'NVMe',1024);
/*!40000 ALTER TABLE `phone_storage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_storage_phone`
--

LOCK TABLES `phone_storage_phone` WRITE;
/*!40000 ALTER TABLE `phone_storage_phone` DISABLE KEYS */;
INSERT INTO `phone_storage_phone` VALUES (1,1,1),(2,2,2),(8,2,6),(6,2,7),(12,2,9),(13,2,10),(10,3,3),(7,3,8),(14,3,11),(15,3,12),(9,4,4),(11,5,5),(17,6,13),(20,7,14),(21,8,15),(22,9,16);
/*!40000 ALTER TABLE `phone_storage_phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_usb`
--

LOCK TABLES `phone_usb` WRITE;
/*!40000 ALTER TABLE `phone_usb` DISABLE KEYS */;
INSERT INTO `phone_usb` VALUES (1,'Type-C 3.2',1),(2,'Type-C 2.0',1),(3,'Lightning, USB 2.0',1);
/*!40000 ALTER TABLE `phone_usb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_usb_phone`
--

LOCK TABLES `phone_usb_phone` WRITE;
/*!40000 ALTER TABLE `phone_usb_phone` DISABLE KEYS */;
INSERT INTO `phone_usb_phone` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(7,1,6),(8,1,7),(6,1,8),(9,2,9),(10,2,10),(11,2,11),(12,2,12),(14,3,13),(15,3,14),(16,3,15),(13,3,16);
/*!40000 ALTER TABLE `phone_usb_phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_wifi`
--

LOCK TABLES `phone_wifi` WRITE;
/*!40000 ALTER TABLE `phone_wifi` DISABLE KEYS */;
INSERT INTO `phone_wifi` VALUES (2,1,1,1,1,1,1,1,1,1),(3,1,1,1,1,1,0,1,1,1),(4,1,1,1,1,1,1,1,1,0);
/*!40000 ALTER TABLE `phone_wifi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `phone_wifi_network`
--

LOCK TABLES `phone_wifi_network` WRITE;
/*!40000 ALTER TABLE `phone_wifi_network` DISABLE KEYS */;
INSERT INTO `phone_wifi_network` VALUES (2,2,1),(3,2,2),(4,2,3),(5,2,4),(6,2,5),(8,2,6),(9,2,7),(7,2,8),(10,3,9),(11,3,10),(12,3,11),(13,3,12),(15,4,13),(16,4,14),(17,4,15),(14,4,16);
/*!40000 ALTER TABLE `phone_wifi_network` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `post_category`
--

LOCK TABLES `post_category` WRITE;
/*!40000 ALTER TABLE `post_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `post_category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-20 12:11:30

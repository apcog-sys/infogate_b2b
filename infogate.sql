-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: infogate_b2b
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `archive`
--

DROP TABLE IF EXISTS `archive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `archive` (
  `id` int NOT NULL AUTO_INCREMENT,
  `inbox_id` bigint DEFAULT NULL,
  `target_entity` varchar(255) DEFAULT NULL,
  `room_id` bigint DEFAULT NULL,
  `in_stamp` datetime DEFAULT NULL,
  `out_stamp` datetime DEFAULT NULL,
  `delivery_stamp` datetime DEFAULT NULL,
  `msg_id` bigint DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `inbox_id` (`inbox_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `archive`
--

LOCK TABLES `archive` WRITE;
/*!40000 ALTER TABLE `archive` DISABLE KEYS */;
INSERT INTO `archive` VALUES (1,45,'emc1234@gmail.com',5,'2022-06-01 03:30:40','2022-06-01 03:35:40','2022-06-01 03:55:40',2,'ack_sent'),(2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,''),(4,89,'emc@gmail.com',4,'2022-06-01 03:30:40','2022-06-01 03:35:40','2022-06-01 03:55:40',2,'active');
/*!40000 ALTER TABLE `archive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entity_register`
--

DROP TABLE IF EXISTS `entity_register`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entity_register` (
  `id` int NOT NULL AUTO_INCREMENT,
  `entity_name` varchar(255) DEFAULT NULL,
  `room_ids` json DEFAULT NULL,
  `activation_code` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `entity_name` (`entity_name`),
  UNIQUE KEY `activation_code` (`activation_code`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entity_register`
--

LOCK TABLES `entity_register` WRITE;
/*!40000 ALTER TABLE `entity_register` DISABLE KEYS */;
INSERT INTO `entity_register` VALUES (1,'ACS','[2, 3]','49gfeajnqbs3pqdb','active','2022-06-29 18:15:20','2022-06-29 18:18:06'),(4,'mnb','[3, 4, 6, 7]','vhz59d0qpu35bmon','active','2022-08-05 06:00:51','2022-08-05 06:02:42'),(5,'tcs','[3, 4, 5]','wrtuurza1kxduh32','active','2022-08-05 06:02:34','2022-08-05 06:02:34');
/*!40000 ALTER TABLE `entity_register` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inbox`
--

DROP TABLE IF EXISTS `inbox`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inbox` (
  `id` int NOT NULL AUTO_INCREMENT,
  `target_userid` varchar(255) DEFAULT NULL,
  `room_id` int DEFAULT NULL,
  `in_stamp` datetime DEFAULT NULL,
  `out_stamp` datetime DEFAULT NULL,
  `when_to_deliver` datetime DEFAULT NULL,
  `delivery_stamp` datetime DEFAULT NULL,
  `msg_id` int DEFAULT NULL,
  `retries` int DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inbox`
--

LOCK TABLES `inbox` WRITE;
/*!40000 ALTER TABLE `inbox` DISABLE KEYS */;
INSERT INTO `inbox` VALUES (5,'6',4,'2022-06-27 23:56:11','2022-06-27 23:56:11','2022-06-27 23:56:11','2022-06-27 23:56:11',2,5,'pending'),(6,'7',1,'2022-06-27 23:56:11','2022-06-27 23:56:11',NULL,'2022-06-27 23:56:11',2,5,'pending'),(7,'1',1,'2022-06-29 03:52:39','2022-06-29 03:52:39','2022-06-27 23:56:11','2022-06-29 03:52:39',1,5,'pending'),(8,'3',1,'2022-06-29 03:52:39','2022-06-29 03:52:39',NULL,'2022-06-29 03:52:39',1,5,'pending'),(9,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(39,'5',1,'2022-08-30 05:47:38','2022-08-30 05:47:38',NULL,'2022-08-30 05:47:38',21,5,'pending'),(40,'2',1,'2022-08-30 05:47:38','2022-08-30 05:47:38',NULL,'2022-08-30 05:47:38',21,5,'pending'),(41,'5',1,'2022-08-30 05:50:32','2022-08-30 05:50:32','2022-08-30 00:17:38','2022-08-30 05:50:32',22,5,'pending'),(42,'2',1,'2022-08-30 05:50:32','2022-08-30 05:50:32','2022-08-30 00:17:38','2022-08-30 05:50:32',22,5,'pending'),(43,'5',1,'2022-09-18 22:00:01','2022-09-18 22:00:01','2022-08-30 00:17:38','2022-09-18 22:00:01',23,5,'pending'),(44,'5',1,'2022-09-18 22:00:44','2022-09-18 22:00:44','2022-08-30 00:17:38','2022-09-18 22:00:44',24,5,'pending'),(45,'5',1,'2022-09-21 04:12:51','2022-09-21 04:12:51','2022-08-30 00:17:38','2022-09-21 04:12:51',25,5,'pending'),(46,'5',1,'2022-09-21 04:20:22','2022-09-21 04:20:22','2022-08-30 00:17:38','2022-09-21 04:20:22',26,5,'pending'),(47,'5',1,'2022-09-22 21:51:55','2022-09-22 21:51:55','2022-08-30 00:17:38','2022-09-22 21:51:55',27,5,'pending'),(48,'2',1,'2022-09-22 21:51:55','2022-09-22 21:51:55','2022-08-30 00:17:38','2022-09-22 21:51:55',27,5,'pending');
/*!40000 ALTER TABLE `inbox` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `key_register`
--

DROP TABLE IF EXISTS `key_register`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `key_register` (
  `id` int NOT NULL AUTO_INCREMENT,
  `key` varchar(255) DEFAULT NULL,
  `room_id` int DEFAULT NULL,
  `entity_id` varchar(255) DEFAULT NULL,
  `app_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `sub_msg_types` json DEFAULT NULL,
  `pub_msg_types` json DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `key` (`key`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `key_register`
--

LOCK TABLES `key_register` WRITE;
/*!40000 ALTER TABLE `key_register` DISABLE KEYS */;
INSERT INTO `key_register` VALUES (1,'a0xw8w6g3ii547udfcpfd386e0eoupzw',3,'10',7,3,'{\"emergency\": \"exit\"}','{\"recharge\": \"rechargephone\"}','active','2022-06-29 18:06:28','2022-08-05 04:50:37'),(2,'vjea24nr8yvwr42u56n3pwc6szmshc1p',1,'8',1,1,'{\"reminder\": \"rem1\"}','{\"alert\": \"alert1\"}',NULL,'2022-06-27 10:33:27','2022-06-27 10:33:27'),(3,NULL,6,'1',4,1,'{\"emergency\": \"exit\"}','{\"recharge\": \"rechargephone\"}','active','2022-06-30 11:07:52','2022-06-30 11:07:52'),(8,'zvnfhpssgbv0blxaxdvqx4e9me81q2gt',4,'2',3,6,'{\"emergency\": \"exit\"}','{\"recharge\": \"rechargephone\"}','active','2022-06-30 11:20:23','2022-06-30 11:20:23'),(9,'x4q5bhe5cbapyta33my8tbkeswmletzy',4,'2',3,6,'{\"emergency\": \"exit\"}','{\"recharge\": \"rechargephone\"}','active','2022-07-01 03:41:46','2022-07-01 03:41:46'),(10,'i61n9peby4vgwszt1jkd7yzhjopajitg',4,'2',3,6,'{\"emergency\": \"exit\"}','{\"recharge\": \"rechargephone\"}','active','2022-07-01 03:42:19','2022-07-01 03:42:19'),(11,'f4kzvt5f1h8eibhzsdyphg5cll1oj9ec',9,'4',3,1,'{\"emergency\": \"exit\"}','{\"recharge\": \"rechargephone\"}','active','2022-08-05 04:47:50','2022-08-05 04:47:50'),(12,'txnzfdt3qqftkb293yc8mdvezv8gsm2m',NULL,NULL,NULL,1,NULL,NULL,NULL,'2022-08-05 04:49:49','2022-08-05 04:49:49');
/*!40000 ALTER TABLE `key_register` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `msg_q`
--

DROP TABLE IF EXISTS `msg_q`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `msg_q` (
  `id` int NOT NULL AUTO_INCREMENT,
  `msg_body` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `msg_body` (`msg_body`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `msg_q`
--

LOCK TABLES `msg_q` WRITE;
/*!40000 ALTER TABLE `msg_q` DISABLE KEYS */;
INSERT INTO `msg_q` VALUES (1,'getting late','2022-06-29 03:52:38','2022-06-29 17:23:57'),(2,'pay your school fees by 2nd','2022-06-29 17:21:21','2022-06-29 17:21:21'),(4,'1fe1f756447c393268d2198e25c7b64eb820233a6d082ee8ca13fef323526cc0|05ed0dddb9d406d361c74c3eb51da911','2022-06-30 05:08:30','2022-06-30 05:08:30'),(5,'attend meeting at 5:00 PM','2022-08-05 05:18:52','2022-08-05 05:20:13'),(6,NULL,'2022-08-05 05:20:03','2022-08-05 05:20:03'),(7,'abba0cb3ec31381bb0c2ed0f640cef3b56256f220fb0fefd871ad084b444bd77|554bbf278dbcd79d77498778f67ec5be','2022-08-05 06:42:23','2022-08-05 06:42:23'),(8,'209fa67488588708ad1f9ea315e11660d1edc2d21b85cde79d8dd6f83ae3609c|3952cd2dc450987e5042667bbeb931b1','2022-08-29 12:31:15','2022-08-29 12:31:15'),(9,'28903889387777a7cda070fe5bb1c8d4241e1d36bf8edee5a25d604e9c65958f|eda05e5eafbbc12ede443808bcf14b0c','2022-08-29 12:33:36','2022-08-29 12:33:36'),(19,'ed202ec0fbc347a4d202b775e8fd2e94f323a8a2676a8e4530e237b3cdefe818|73875c9a26e1da729b695b22f26e89e2','2022-08-30 05:41:57','2022-08-30 05:41:57'),(20,'597af43377bdea37105ccc175814827079dd3ae4032a8043899625019f21a32e|c46f4242973125407f58320ea0f69c80','2022-08-30 05:43:15','2022-08-30 05:43:15'),(21,'00c7e343f729150f103d6e8acfcc9d8cae89a808ab5ff870b76f315812139768|f525303b38dc5567c14c14de5c76e2e9','2022-08-30 05:47:37','2022-08-30 05:47:37'),(22,'b1c064859537eb562704f5b11975a23ea5c6a366605d5be3a26103f5b0067132|e4f48294441121d9e3682b2d47085fc3','2022-08-30 05:50:32','2022-08-30 05:50:32'),(23,'29188d6737ba3b719f59556819115dc410654f8a7ee96d3bad6cd43c1daab0f1|a1677ae081811f40c69bf1b38dd33592','2022-09-19 10:00:01','2022-09-19 10:00:01'),(24,'3174519be5778f93b67f294a4acf121f0dd8e4c4c04529d905ff0f47a8c095fa|f0d2795b8d5789272c4420327eb51cf7','2022-09-19 10:00:44','2022-09-19 10:00:44'),(25,'1b681e348f6abf8a04a3f071848256a5|2bae1c0acccd3f5a369d9d3cfb2e10a1','2022-09-21 04:12:51','2022-09-21 04:12:51'),(26,'133d89be6d3cee5e26a6be303d47e550|20d6aeff9f6791407ac30034b703624e','2022-09-21 04:20:22','2022-09-21 04:20:22'),(27,'b771585b287ff34ea1a65c281a6be94c|50d9515e0e03e0b8b7af7c8b5fd3f523','2022-09-23 09:51:55','2022-09-23 09:51:55');
/*!40000 ALTER TABLE `msg_q` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification_targets`
--

DROP TABLE IF EXISTS `notification_targets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification_targets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event` varchar(255) DEFAULT NULL,
  `notify_target_userids` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `event` (`event`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification_targets`
--

LOCK TABLES `notification_targets` WRITE;
/*!40000 ALTER TABLE `notification_targets` DISABLE KEYS */;
INSERT INTO `notification_targets` VALUES (1,'add_entity','super_admin'),(2,'update_entity','super_admin'),(3,'add_user','entity_admin'),(4,'update_user','entity_admin'),(5,'add_room','entity_admin'),(6,'send_message','consumer'),(7,'receive_message',''),(8,'update_room',''),(9,'add_roles','admin'),(10,'getRoles','super_admin'),(11,NULL,NULL),(13,'meetings','entity_admin');
/*!40000 ALTER TABLE `notification_targets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles_permissions`
--

DROP TABLE IF EXISTS `roles_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles_permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `permissions` varchar(255) DEFAULT NULL,
  `super_admin` tinyint(1) DEFAULT NULL,
  `entity_admin` tinyint(1) DEFAULT NULL,
  `user` tinyint(1) DEFAULT NULL,
  `application` tinyint(1) DEFAULT NULL,
  `role0_application` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles_permissions`
--

LOCK TABLES `roles_permissions` WRITE;
/*!40000 ALTER TABLE `roles_permissions` DISABLE KEYS */;
INSERT INTO `roles_permissions` VALUES (1,'all_endpoints',1,0,0,0,NULL),(2,'add_entity',1,1,0,0,NULL),(3,'update_entity',1,1,0,0,NULL),(4,'add_key',1,1,0,0,NULL),(5,'update_key',1,1,0,0,NULL),(6,'add_user',1,1,0,1,NULL),(7,'update_user',1,1,1,1,NULL),(8,'add_room',1,1,0,0,NULL),(9,'update_room',1,1,1,0,NULL),(10,'get_room',1,1,1,0,NULL),(12,'add_inbox',1,0,1,1,NULL),(13,'update_inbox',1,0,1,1,NULL),(14,'get_inbox',1,1,1,1,NULL),(15,'add_msg',1,0,1,1,NULL),(16,'update_msg',1,0,1,1,NULL),(17,'get_msg',1,1,1,1,NULL),(18,'add_notification_targets',1,0,0,0,NULL),(19,'update_notification_targets',1,0,0,0,0),(20,'get_notification_targets',1,0,0,0,0),(21,'get_user',1,0,0,0,NULL),(22,'get_key',1,0,0,0,NULL),(23,'addroles',0,0,0,0,0),(24,'getRoles',0,0,0,0,0);
/*!40000 ALTER TABLE `roles_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rooms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room_name` varchar(255) DEFAULT NULL,
  `deafult_mode` int DEFAULT NULL,
  `message_types` json DEFAULT NULL,
  `pub_user_ids` json DEFAULT NULL,
  `sub_user_ids` json DEFAULT NULL,
  `room_type` varchar(255) DEFAULT NULL,
  `q_limit` int DEFAULT NULL,
  `q_occupancy` int DEFAULT NULL,
  `timeout` int DEFAULT NULL,
  `retries` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `room_name` (`room_name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` VALUES (1,'test_room',0,'{\"alert\": \"alert2\", \"reminder\": \"reminder2\"}','[2, 5, 4, 2]','[5, 2, 2]','private',50,20,30,10,'2022-06-29 05:21:24','2022-09-23 06:04:12'),(3,'demo_room',1,'{\"alert\": \"alert2\", \"reminder\": \"reminder2\"}','[2, 5, 4, 2]','[5, 2, 2]','private',50,40,30,5,'2022-06-29 12:47:12','2022-09-23 09:46:57'),(6,'conf_room',2,'{\"alert\": \"alert2\", \"reminder\": \"reminder2\"}','[3, 3, 4]','[3, 4, 2]','private',50,40,30,5,'2022-06-29 12:48:57','2022-09-13 06:45:28'),(7,'meeting_room',1,'{\"alert\": \"alert2\", \"reminder\": \"reminder2\"}','[1, 2, 3]','[2, 3, 4]','public',50,40,30,5,'2022-08-05 05:00:45','2022-08-05 05:04:37');
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temp_user_register`
--

DROP TABLE IF EXISTS `temp_user_register`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temp_user_register` (
  `request_id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `request_type` json DEFAULT NULL,
  `requested_changes` json DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `approver_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`request_id`),
  UNIQUE KEY `request_id` (`request_id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temp_user_register`
--

LOCK TABLES `temp_user_register` WRITE;
/*!40000 ALTER TABLE `temp_user_register` DISABLE KEYS */;
INSERT INTO `temp_user_register` VALUES (2,'1','\"join room\"','{\"room_name\": \"test_room\"}','for_approval','3'),(12,'1','\"join room\"','{\"room_name\": \"test_room\"}','for_approval',NULL),(13,'1','\"join room\"','{\"room_name\": \"test_room\"}','for_approval',NULL),(22,'1','\"join room\"','{\"room_name\": \"test_room\"}','for_approval',NULL),(42,NULL,'\"new_user_register\"','{\"password\": \"abh489i\", \"role_ids\": 1, \"inbox_url\": \"pr@gmail.com\", \"pub_rooms\": [4], \"role_name\": \"user\", \"sub_rooms\": [1, 2], \"user_name\": \"Abhi\", \"entity_name\": \"acs\", \"contact_details\": {\"email\": \"pr67@gmail.com\"}, \"person_or_app_name\": \"pre\"}','for_approval',NULL),(43,NULL,'\"new_user_register\"','{\"password\": \"abh489i\", \"role_ids\": 1, \"inbox_url\": \"pr@gmail.com\", \"pub_rooms\": [4], \"role_name\": \"user\", \"sub_rooms\": [1, 2], \"user_name\": \"Abhi\", \"entity_name\": \"acs\", \"contact_details\": {\"email\": \"pr67@gmail.com\"}, \"person_or_app_name\": \"pre\"}','for_approval',NULL),(44,NULL,'\"new_user_register\"','{\"password\": \"abh489i\", \"role_ids\": 1, \"inbox_url\": \"pr@gmail.com\", \"pub_rooms\": [4], \"role_name\": \"user\", \"sub_rooms\": [1, 2], \"user_name\": \"Abhi\", \"entity_name\": \"acs\", \"contact_details\": {\"email\": \"pr67@gmail.com\"}, \"person_or_app_name\": \"pre\"}','for_approval',NULL),(45,NULL,'\"new_user_register\"','{\"password\": \"abh489i\", \"role_ids\": 1, \"inbox_url\": \"pr@gmail.com\", \"pub_rooms\": [4], \"role_name\": \"user\", \"sub_rooms\": [1, 2], \"user_name\": \"Abhi\", \"entity_name\": \"acs\", \"contact_details\": {\"email\": \"pr67@gmail.com\"}, \"person_or_app_name\": \"pre\"}','for_approval',NULL),(46,NULL,'\"new_user_register\"','{\"password\": \"abh489i\", \"role_ids\": 1, \"inbox_url\": \"pr@gmail.com\", \"pub_rooms\": [4], \"role_name\": \"user\", \"sub_rooms\": [1, 2], \"user_name\": \"Abhi\", \"entity_name\": \"acs\", \"contact_details\": {\"email\": \"pr67@gmail.com\"}, \"person_or_app_name\": \"pre\"}','for_approval',NULL),(47,NULL,'\"new_user_register\"','{\"password\": \"abh489i\", \"role_ids\": 1, \"inbox_url\": \"pr@gmail.com\", \"pub_rooms\": [4], \"role_name\": \"user\", \"sub_rooms\": [1, 2], \"user_name\": \"Abhi\", \"entity_name\": \"acs\", \"contact_details\": {\"email\": \"pr67@gmail.com\"}, \"person_or_app_name\": \"pre\"}','for_approval',NULL),(48,NULL,'\"new_user_register\"','{\"password\": \"abh489i\", \"role_ids\": 1, \"inbox_url\": \"pr@gmail.com\", \"pub_rooms\": [4], \"role_name\": \"user\", \"sub_rooms\": [1, 2], \"user_name\": \"Abhi\", \"entity_name\": \"acs\", \"contact_details\": {\"email\": \"pr67@gmail.com\"}, \"person_or_app_name\": \"pre\"}','for_approval',NULL),(49,NULL,'\"new_user_register\"','{\"password\": \"abh489i\", \"role_ids\": 1, \"inbox_url\": \"pr@gmail.com\", \"pub_rooms\": [4], \"role_name\": \"user\", \"sub_rooms\": [1, 2], \"user_name\": \"Abhi\", \"entity_name\": \"acs\", \"contact_details\": {\"email\": \"pr67@gmail.com\"}, \"person_or_app_name\": \"pre\"}','for_approval',NULL),(50,NULL,'\"new_user_register\"','{\"password\": \"abh49i\", \"role_ids\": 1, \"inbox_url\": \"pr@gmail.com\", \"pub_rooms\": [4], \"role_name\": \"user\", \"sub_rooms\": [1, 2], \"user_name\": \"Abhi\", \"entity_name\": \"acs\", \"contact_details\": {\"email\": \"pr67@gmail.com\"}, \"person_or_app_name\": \"pre\"}','for_approval','1'),(51,'2','\"join room\"','{\"room_name\": \"test_room\"}','for_approval',NULL),(52,'2','\"join room\"','{\"room_name\": \"test_room\"}','for_approval','2'),(53,'2','\"join room\"','{\"room_name\": \"test_room\"}','approved','2'),(54,'2','\"join room\"','{\"room_name\": \"test_room\"}','for_approval','2'),(55,'2','\"join room\"','{\"room_name\": \"test_room\"}','for_approval','2'),(56,'2','\"join room\"','{\"room_name\": \"test_room\"}','for_approval','2'),(57,'2','\"join room\"','{\"room_name\": \"test_room\"}','for_approval','2'),(58,'2','\"join room\"','{\"room_name\": \"test_room\"}','for_approval','2'),(59,'2','\"join room\"','{\"room_name\": \"test_room\"}','for_approval','2'),(60,'2','\"join room\"','{\"room_name\": \"test_room\"}','for_approval','2'),(61,'2','\"join room\"','{\"room_name\": \"test_room\"}','for_approval','2'),(62,'2','\"join room\"','{\"room_name\": \"test_room\"}','for_approval','2'),(63,'2','\"join room\"','{\"room_name\": \"demo_room\"}','for_approval','2'),(64,'2','\"join room\"','{\"room_name\": \"demo_room\"}','for_approval','2'),(65,'2','\"join room\"','{\"room_name\": \"demo_room\"}','for_approval','2'),(66,'2','\"join room\"','{\"room_name\": \"conf_room\"}','for_approval','2'),(67,'2','\"join room\"','{\"room_name\": \"conf_room\"}','for_approval','2'),(68,'2','\"join room\"','{\"room_name\": \"conf_room\"}','for_approval','2'),(69,'2','\"join room\"','{\"room_name\": \"conf_room\"}','for_approval','2'),(70,'2','\"join room\"','{\"room_name\": \"conf_room\"}','for_approval','2'),(71,'2','\"join room\"','{\"room_name\": \"demo_room\"}','for_approval','2'),(72,'2','\"join room\"','{\"room_name\": \"demo_room\"}','for_approval','2'),(73,'2','\"join room\"','{\"room_name\": \"demo_room\"}','for_approval','2'),(74,'2','\"join room\"','{\"room_name\": \"demo_room\"}','for_approval','2'),(75,'2','\"join room\"','{\"room_name\": \"conf_room\"}','for_approval','2'),(76,'2','\"join room\"','{\"room_name\": \"demo_room\"}','for_approval','2'),(77,'2','\"join room\"','{\"room_name\": \"conf_room\"}','for_approval','2'),(78,'2','\"join room\"','{\"room_name\": \"conf_room\"}','for_approval','2'),(79,'2','\"join room\"','{\"room_name\": \"demo_room\"}','for_approval','2'),(80,'2','\"join room\"','{\"room_name\": \"demo_room\"}','for_approval','2'),(81,'2','\"join room\"','{\"room_name\": \"test_room\"}','for_approval','2');
/*!40000 ALTER TABLE `temp_user_register` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_register`
--

DROP TABLE IF EXISTS `user_register`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_register` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `account_key` varchar(255) DEFAULT NULL,
  `entity_name` varchar(255) DEFAULT NULL,
  `role_name` varchar(255) DEFAULT NULL,
  `contact_details` json DEFAULT NULL,
  `person_or_app_name` varchar(255) DEFAULT NULL,
  `role_ids` varchar(255) DEFAULT NULL,
  `pub_rooms` json DEFAULT NULL,
  `sub_rooms` json DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `password` (`password`),
  UNIQUE KEY `account_key` (`account_key`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_register`
--

LOCK TABLES `user_register` WRITE;
/*!40000 ALTER TABLE `user_register` DISABLE KEYS */;
INSERT INTO `user_register` VALUES (2,'usha','usha123','ybv3bdgbfqxlbgybcrk8g013c1eyk4cr','tcs','admin','{\"inbox_url\": \"pr67@gmail.com\"}','pre','1','[4]','[1, 2]','active'),(3,'Abhi','abhi34','pqpca469h3u1tqc00komzy7miwvsho53','gst','user','{\"email\": \"pr67@gmail.com\"}','pre','1','[4]','[1, 2]','active'),(5,'Abhi','abhi34i',NULL,'gcs','user','{\"inbox_url\": \"pr67@gmail.com\"}','pre','1','[4]','[1, 2]','active'),(10,'Abhi','abhi3489i','719a194uvq902t25hunego3rynesso7k','mcs','user','{\"email\": \"pr67@gmail.com\"}','pre','1','[4]','[1, 2]','inactive'),(11,'Abhi','abh489i','hg6s0akdcmyy9ub8me13qq4jllffgg44','acs','user','{\"email\": \"pr67@gmail.com\"}','pre','1','[4]','[1, 2]','inactive'),(23,'Abhi','abh49i','sauca45y88kszj1kzc9mtzyy9lbaynl4','acs','user','{\"email\": \"pr67@gmail.com\"}','pre','1','[4]','[1, 2]','inactive');
/*!40000 ALTER TABLE `user_register` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-27 11:10:38

-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.13-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for nodeapi
CREATE DATABASE IF NOT EXISTS `nodeapi` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `nodeapi`;

-- Dumping structure for table nodeapi.movies
CREATE TABLE IF NOT EXISTS `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '0',
  `releaseyear` int(11) NOT NULL DEFAULT '0',
  `rating` decimal(10,2) NOT NULL DEFAULT '0.00',
  `genres` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table nodeapi.movies: ~0 rows (approximately)
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` (`id`, `title`, `releaseyear`, `rating`, `genres`) VALUES
	(1, 'PK', 2014, 8.10, 'Comedy, Drama, Musical, Sci-Fi'),
	(2, 'Test', 2013, 6.50, 'Drama');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;

-- Dumping structure for table nodeapi.movie_genres
CREATE TABLE IF NOT EXISTS `movie_genres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `movieid` int(11) NOT NULL DEFAULT '0',
  `genres` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Dumping data for table nodeapi.movie_genres: ~0 rows (approximately)
/*!40000 ALTER TABLE `movie_genres` DISABLE KEYS */;
INSERT INTO `movie_genres` (`id`, `movieid`, `genres`) VALUES
	(1, 1, 'Comedy'),
	(2, 1, ' Drama'),
	(3, 1, ' Musical'),
	(4, 1, ' Sci-Fi'),
	(5, 2, 'Drama');
/*!40000 ALTER TABLE `movie_genres` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

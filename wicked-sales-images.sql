-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 10, 2020 at 07:58 PM
-- Server version: 5.7.29-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `c319db`
--

-- --------------------------------------------------------

--
-- Table structure for table `wicked-sales-images`
--

CREATE TABLE `wicked-sales-images` (
  `id` int(10) UNSIGNED NOT NULL,
  `url` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `wicked-sales-products-id` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `wicked-sales-images`
--

INSERT INTO `wicked-sales-images` (`id`, `url`, `wicked-sales-products-id`) VALUES
(1, 'http://www.golfalot.com/Portals/0/imagesblogs/callaway/epicflash/driver/reviewhero2.jpg', 1),
(2, 'https://www.pgatour.com/content/dam/pgatour/editorial/2019/01/03/EpicFlashdriver-Tursky.jpg', 1),
(3, 'https://usatgolfweek.files.wordpress.com/2019/01/TaylorMade-M5-fairway-woods.jpg?w=1000&h=600&crop=1', 2),
(4, 'https://todaysgolfer-images.bauersecure.com/pagefiles/1090948/1752x1168/111m5fairway.png%3Fmode=pad', 2),
(5, 'http://wpmediars.golfwrx.com/wp-content/uploads/2019/07/2019-mizuno-mp-20-irons-7-iron-.jpg', 3),
(6, 'https://golf.mizunoeurope.com/wp-content/uploads/2019/08/MP20_HMB_photo-1.jpg', 3),
(7, 'https://usatgolfweek.files.wordpress.com/2018/01/titleist-sm7-wedges.jpg?w=1000&h=600&crop=1', 4),
(8, 'https://cdn.shopify.com/s/files/1/1241/2886/products/SM7-DETAIL-FACE-PROFILE-20171215_d9a2071a-d7a9-4210-ab95-5e5c4c6556c7_1024x1024.jpg?v=1518544024', 4),
(9, 'https://www.scottycameron.com/media/16450/feature_1_feel_mobile.jpg', 5),
(10, 'https://www.scottycameron.com/media/16451/feature_2_multi_material_mobile.jpg', 5),
(11, 'https://d1tp32r8b76g0z.cloudfront.net/40/Titleist-Pro-V1-Golf-Balls_Default_ALT36_550.jpeg', 6),
(12, 'https://cdn.budgetgolf.com/images/D.cache.x3/Titleist-Pro-V1-Golf-Balls-2.jpeg', 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wicked-sales-images`
--
ALTER TABLE `wicked-sales-images`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wicked-sales-images`
--
ALTER TABLE `wicked-sales-images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

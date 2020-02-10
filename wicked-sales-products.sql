-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 10, 2020 at 06:38 PM
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
-- Table structure for table `wicked-sales-products`
--

CREATE TABLE `wicked-sales-products` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `shortDescription` text COLLATE utf8_unicode_ci NOT NULL,
  `longDescription` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `wicked-sales-products`
--

INSERT INTO `wicked-sales-products` (`id`, `name`, `price`, `image`, `shortDescription`, `longDescription`) VALUES
(1, 'Callaway Epic Flash Driver', 49999, 'https://dks.scene7.com/is/image/dkscdn/18CWYMPCFLSHDRTNBDRV_is?wid=685&fmt=jpg', 'The ultimate driver for all skill levels. Hit it longer, straighter, and faster.', 'The Epic Flash Driver employs a new Flash Face Technology, created by Artificial Intelligence, to help golfers get more ball speed for more distance. That great feeling you get when you make a good swing and crush off the tee? Flash Face makes the ball go faster and farther. Callaway engineers used Artificial Intelligence and Machine Learning to create a radically different face design to promote faster ball speed in the center region of the face. Internal Jailbreak bars stiffen and stabilize the crown and sole, placing more impact load on the face to promote faster ball speed. A new lighter triaxial carbon fabric called T2C has a tighter weave; the weight it saves is redistributed within the head to raise MOI for exceptional forgiveness on off-center hits. Sliding 16-gram weight gives golfers the power to easily promote draws, fades or a straighter flight.'),
(2, 'TaylorMade M5 Fairway Wood', 39999, 'https://image.globalgolf.com/dynamic/1046565/aah/sole-view/taylormade-m5-fairway-wood.jpg?s=1240', 'The latest fairway metal technology from TaylorMade will help you launch the ball from off the tee and fairway.', 'For the first time ever, Twist Face has been engineered into fairway clubs. Thread the needle off the tee and start reaching par 5s in two with straight distance like never before. Twist Face is a revolutionary face curvature with a corrective face angle on off-center hits, engineered to reduce side spin and deliver straighter shots. First time in a fairway wood to help increase distance and improve accuracy from the tee or off the turf. Advanced multi-material head construction with a titanium face and body, 6-layer carbon crown and a massive stainless steel movable sole weight. 65g movable steel weight (>30% of total head weight) allows for draw/fade adjustability. New, larger movable weight shaping creates a seamless sole contour, producing smoother turf interaction regardless of the weight position.'),
(3, 'Mizuno MP-20 Irons', 129999, 'https://usatgolfweek.files.wordpress.com/2019/07/mizuno-mp20.jpg?w=1000&h=664', 'The ultimate Mizuno muscle back - heavily influenced by the most revered blades of its past.', 'Evolved from a long lineage of premium forged Japanese irons, the new addition to the Mizuno lineup is sure to impress. Featuring the slim blade profiles that made Mizuno famous through the bags of players like Tiger Woods, the new MP 20 irons are sure to be a welcome fixture to your bag.'),
(4, 'Titleist Vokey SM7 Wedges', 14999, 'https://dks.scene7.com/is/image/dkscdn/19TTLMSM7TRCHRMLHWDG_Brushed_Steel_is?wid=685&fmt=jpg', 'The highest level of spin, control, and shot-shaping in a timeless design.', 'Through improved progressive CG, optimized spin milled grooves, and the benchmark for Tour validated grinds, Vokey Design SM7 wedges offer maximized spin, control, and consistency for more confidence on every shot. Put the highest level of wedge performance in your hands. Progressive CG creates precise distance gaps and trajectory control.  Know exactly how far each wedge will fly and dial in your yardages. Spin Milled Grooves optimize spin, control, and consistency for more confidence on all wedge shots. Vokey wedges grinds are played, proven and perfected on Tour, helping to create shot versatility for any level of player in any type of condition. The center of gravity (CG) can vary slightly between different lofted wedges, based on the bounce and sole grind of the wedge.  Vokey Design SM7 wedges feature a progressive center of gravity, optimized for each loft, bounce and grind for improved distance control, tighter shot dispersion and exceptional feel throughout the wedge set.'),
(5, 'Scotty Cameron T22 Putter', 549999, 'https://usatgolfweek.files.wordpress.com/2019/07/scotty-cameron-t22-newport-ii-hero.jpg?w=1000&h=664', 'The timeless design that brought Tiger Woods to the forefront of golf, reimagined.', 'In 14 of the 15 major championships that Tiger Woods has won, the future Hall of Famer used a custom Scotty Cameron Newport 2 GSS putter. In his other win, the 1997 Masters, Woods used a Teryllium TeI3 Newport, a dark-finished Newport putter fitted with a copper-colored insert that sported a series of white dots on the back. Teryllium putters were for years available only to pros, never at retail. But Titleist and Scotty Cameron have announced the retail release of the Teryllium T22 Newport, Teryllium T22 Newport 2 and the Teryllium T22 Fastback 1.5. The Teryllium T22 putters are milled from a piece of 303 stainless steel with adjustable weights in the sole.'),
(6, 'Titleist Pro V1 Golf Balls', 3999, 'https://images-na.ssl-images-amazon.com/images/I/61s3J7BdPnL._SX425_.jpg', 'The tour-proven best-selling golf ball that finds its way into the bags of golfers of every skill level.', 'For almost one and half decades, both the Titleist Pro V1 and Pro V1x have dominated the golf ball market. The flagship twins from the self-proclaimed (rightfully) number 1 golf ball maker in the world, Titleist, are popular with amateurs and tour professionals alike. The Titleist Pro V1, and its twin the Pro V1x are designed with this idea in mind. Superb short game control while allowing sufficient driving lengths comparable to distance-oriented balls, and their short game control is indeed, more than astonishing. We all know how important stopping power is for the irons, and these balls will provide you with just that. With any solid shot, the balls will have enough spin to sit firmly on the green after a long hop.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wicked-sales-products`
--
ALTER TABLE `wicked-sales-products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wicked-sales-products`
--
ALTER TABLE `wicked-sales-products`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

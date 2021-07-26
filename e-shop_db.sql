-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 25, 2021 at 09:53 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e-shop_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `products_tb`
--

CREATE TABLE `products_tb` (
  `prod_no` int(11) NOT NULL,
  `prod_id` varchar(11) NOT NULL,
  `prod_name` varchar(50) NOT NULL,
  `prod_price` double NOT NULL,
  `prod_quantity` int(50) NOT NULL,
  `prod_desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products_tb`
--

INSERT INTO `products_tb` (`prod_no`, `prod_id`, `prod_name`, `prod_price`, `prod_quantity`, `prod_desc`) VALUES
(1, 'NG8715', 'iaculis,', 80, 79, 'sapien imperdiet ornare. In faucibus. Morbi'),
(2, 'TY0169', 'eget', 27, 47, 'Donec luctus aliquet odio. Etiam ligula tortor,'),
(3, 'QQ8497', 'penatibus', 65, 24, 'enim. Nunc'),
(4, 'RF4617', 'ultricies', 83, 59, 'consequat purus. Maecenas libero est, congue'),
(5, 'FX4861', 'magna', 96, 97, 'Fusce'),
(6, 'OC1244', 'ac,', 75, 56, 'cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet'),
(7, 'OM8457', 'purus.', 87, 81, 'risus. In mi pede, nonummy ut, molestie'),
(8, 'NU9769', 'ac,', 49, 30, 'pharetra. Nam ac nulla.'),
(9, 'BL8865', 'mauris.', 18, 5, 'nulla. In tincidunt congue turpis.'),
(10, 'MP3113', 'enim.', 12, 75, 'eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas'),
(11, 'NC9018', 'turpis.', 42, 63, 'posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit amet'),
(12, 'DK6560', 'nec,', 75, 52, 'egestas.'),
(13, 'PY0228', 'velit.', 58, 88, 'sit amet luctus vulputate,'),
(14, 'PE4896', 'elementum', 49, 49, 'imperdiet dictum magna. Ut tincidunt orci quis'),
(15, 'JS2924', 'a', 76, 17, 'iaculis nec, eleifend'),
(16, 'VD7335', 'dolor', 57, 51, 'mollis nec, cursus a,'),
(17, 'EU4926', 'nibh', 5, 15, 'dapibus'),
(18, 'PP9716', 'Quisque', 88, 32, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'),
(19, 'YB5704', 'risus.', 97, 39, 'tempor augue ac ipsum. Phasellus'),
(20, 'DU4314', 'non,', 44, 70, 'feugiat tellus'),
(21, 'MP7769', 'Aliquam', 58, 8, 'libero mauris, aliquam eu, accumsan'),
(22, 'QD1839', 'consectetuer', 88, 64, 'risus. Quisque libero lacus, varius et, euismod'),
(23, 'PG2749', 'blandit', 55, 92, 'egestas. Aliquam fringilla'),
(24, 'IE4716', 'ligula.', 12, 26, 'tempus risus. Donec egestas.'),
(25, 'NF1336', 'a,', 19, 93, 'urna, nec luctus felis purus'),
(26, 'OZ8139', 'mus.', 75, 14, 'mauris ipsum porta elit, a'),
(27, 'MC9823', 'lacinia', 19, 58, 'pellentesque eget, dictum placerat, augue.'),
(28, 'HK5177', 'Integer', 42, 73, 'ante.'),
(29, 'ZA7350', 'ligula.', 5, 38, 'rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi'),
(30, 'VS4949', 'imperdiet,', 34, 100, 'conubia nostra, per'),
(31, 'VS0830', 'ac', 90, 98, 'vitae, aliquet nec,'),
(32, 'FQ1351', 'Ut', 7, 90, 'dignissim lacus. Aliquam rutrum lorem'),
(33, 'AI2746', 'eros', 96, 6, 'mauris a'),
(34, 'GF1532', 'sollicitudin', 87, 30, 'Proin vel arcu'),
(35, 'PC7766', 'imperdiet', 2, 22, 'massa.'),
(36, 'LM6987', 'sed', 12, 65, 'Praesent eu dui. Cum sociis natoque'),
(37, 'XV7106', 'adipiscing', 42, 89, 'ultricies ligula. Nullam enim. Sed nulla'),
(38, 'KC5821', 'nunc,', 27, 54, 'nisi. Mauris nulla.'),
(39, 'NN8979', 'luctus', 7, 87, 'fames ac turpis egestas. Fusce aliquet magna a neque.'),
(40, 'TH8804', 'non', 89, 87, 'dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products_tb`
--
ALTER TABLE `products_tb`
  ADD PRIMARY KEY (`prod_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products_tb`
--
ALTER TABLE `products_tb`
  MODIFY `prod_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

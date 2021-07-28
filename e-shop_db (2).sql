-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2021 at 05:40 PM
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
-- Table structure for table `cart_tb`
--

CREATE TABLE `cart_tb` (
  `cart_no` int(11) NOT NULL,
  `cart_id` varchar(11) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `prod_id` int(11) NOT NULL,
  `prod_quantity` int(11) NOT NULL,
  `cart_status` varchar(11) NOT NULL,
  `cart_total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart_tb`
--

INSERT INTO `cart_tb` (`cart_no`, `cart_id`, `user_id`, `prod_id`, `prod_quantity`, `cart_status`, `cart_total`) VALUES
(2, 'Password', 'Password', 10, 3, 'true', 360),
(4, 'Password', 'Password', 10, 3, 'true', 360),
(6, 'Password', 'Password', 5, 2, 'true', 500),
(8, 'Password', 'Password', 5, 1, 'true', 250),
(9, 'Password', 'Password', 10, 2, 'true', 240);

-- --------------------------------------------------------

--
-- Table structure for table `checkout_tb`
--

CREATE TABLE `checkout_tb` (
  `checkout_no` int(11) NOT NULL,
  `checkout_id` int(11) NOT NULL,
  `user_id` varchar(50) NOT NULL,
  `prod_id` int(11) NOT NULL,
  `prod_quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `delivery`
--

CREATE TABLE `delivery` (
  `delivery_no` int(11) NOT NULL,
  `delivery_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `prod_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `prod_desc` text NOT NULL,
  `prod_category` varchar(50) NOT NULL,
  `prod_image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products_tb`
--

INSERT INTO `products_tb` (`prod_no`, `prod_id`, `prod_name`, `prod_price`, `prod_quantity`, `prod_desc`, `prod_category`, `prod_image`) VALUES
(41, '1', 'Breadboard', 120, 10, 'A breadboard, or protoboard, is a construction base for prototyping of electronics. Originally the word referred to a literal bread board, a polished piece of wood used when slicing bread.', 'Wires', '../assets/img/Breadboard.png'),
(42, '2', 'LAN Tester', 250, 5, 'LAN testers cover the fields of installation and network control. These LAN tester can be used in the workplace and are ideal for technical service professionals and network administrators.', 'Tester', '../assets/img/internettester.png'),
(43, '3', 'UTP Cable', 20, 50, 'UTP cable is used extensively in local area networks, or LANs. Origins of UTP Cable Alexander Graham Bell was the first person to make a UTP cable by simply twisting two wires together.\r\n', 'Wires', '../assets/img/UTPcable.png'),
(44, '4', 'Soldering Iron', 350, 10, 'A soldering iron is a hand tool used in soldering. It supplies heat to melt solder so that it can flow into the joint between two workpieces. A soldering iron is composed of a heated metal tip and an insulated handle.', 'Solderings', '../assets/img/solderingiron.png'),
(45, '5', 'Resistor', 15, 100, 'A resistor is a passive two-terminal electrical component that implements electrical resistance as a circuit element. ', 'Wires', '../assets/img/resistor.png'),
(46, '6', 'LED (Light-emitting Diode)', 5, 50, 'A light-emitting diode (LED) is a semiconductor light source that emits light when current flows through it. Electrons in the semiconductor recombine with electron holes, releasing energy in the form of photons. ', 'Lights', '../assets/img/LED.png'),
(47, '7', 'RJ-45', 10, 50, 'RJ45 plugs feature eight pins to which the wire strands of a cable interface electrically. Each plug has eight locations spaced about 1 mm apart into which individual wires are inserted using special cable crimping tools.', 'Wires', '../assets/img/rj45.png'),
(48, '8', 'Cable Wire', 30, 40, 'A wire is made of a single electrical conductor while a cable is a group or bundle of multiple wires inside a common sheathing. Both of them are used for carrying electrical current.', 'Wires', '../assets/img/wire.png'),
(49, '9', 'LEAD', 7, 50, 'Lead is used in welding and soldering products like lead alloy solder traditionally used for jointing gas pipes in the UK. However, there is substantial evidence that lead can cause damage to the nervous system.', 'Wires', '../assets/img/lead.png'),
(50, '10', 'Electric Tester Meter', 250, 10, 'Testing Tools: Electric meter testers, like a voltage tester, let you know if wires are active, so you don’t start working on potential live wires.', 'Tester', '../assets/img/currenttester.png');

-- --------------------------------------------------------

--
-- Table structure for table `user_tb`
--

CREATE TABLE `user_tb` (
  `user_name` varchar(50) NOT NULL,
  `user_password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_tb`
--

INSERT INTO `user_tb` (`user_name`, `user_password`) VALUES
('Administrator', '$2y$10$MDQ1ZDRkZTIyODI3ZDMzZOgHafCe4Uu/IdSxTTD/A4DBkYLU9dwHG'),
('Password', '$2y$10$MGE4NDQ4YzRlNWI0NDZmM.NE8s6ILMcYzYDZuDaaiKbHm5CS0Aojy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart_tb`
--
ALTER TABLE `cart_tb`
  ADD PRIMARY KEY (`cart_no`);

--
-- Indexes for table `checkout_tb`
--
ALTER TABLE `checkout_tb`
  ADD PRIMARY KEY (`checkout_no`);

--
-- Indexes for table `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`delivery_no`);

--
-- Indexes for table `products_tb`
--
ALTER TABLE `products_tb`
  ADD PRIMARY KEY (`prod_no`);

--
-- Indexes for table `user_tb`
--
ALTER TABLE `user_tb`
  ADD PRIMARY KEY (`user_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart_tb`
--
ALTER TABLE `cart_tb`
  MODIFY `cart_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `checkout_tb`
--
ALTER TABLE `checkout_tb`
  MODIFY `checkout_no` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `delivery`
--
ALTER TABLE `delivery`
  MODIFY `delivery_no` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products_tb`
--
ALTER TABLE `products_tb`
  MODIFY `prod_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

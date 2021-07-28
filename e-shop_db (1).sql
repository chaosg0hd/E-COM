-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2021 at 02:07 PM
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
  `prod_desc` text NOT NULL,
  `prod_category` varchar(50) NOT NULL,
  `prod_image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products_tb`
--

INSERT INTO `products_tb` (`prod_no`, `prod_id`, `prod_name`, `prod_price`, `prod_quantity`, `prod_desc`, `prod_category`, `prod_image`) VALUES
(41, '1', 'Breadboard', 120, 10, 'A breadboard, or protoboard, is a construction base for prototyping of electronics. Originally the word referred to a literal bread board, a polished piece of wood used when slicing bread. In the 1970s the solderless breadboard became available and nowadays the term \"breadboard\" is commonly used to refer to these. Because the solderless breadboard does not require soldering, it is reusable.', '', ''),
(42, '2', 'LAN Tester', 250, 5, 'LAN testers cover the fields of installation and network control. These LAN tester can be used in the workplace and are ideal for technical service professionals and network administrators. These LAN testers can determin e IP addresses, identify polarity, connected port and link connectivity. Furthermore, they can test fibre optic cables.', '', ''),
(43, '3', 'UTP Cable', 20, 50, 'UTP cable is used extensively in local area networks, or LANs. Origins of UTP Cable Alexander Graham Bell was the first person to make a UTP cable by simply twisting two wires together. The basic design has changed little since 1881, and is still a pair of single conductors wrapped around each other inside an insulated jacket.\r\n', '', ''),
(44, '4', 'Soldering Iron', 350, 10, 'A soldering iron is a hand tool used in soldering. It supplies heat to melt solder so that it can flow into the joint between two workpieces. A soldering iron is composed of a heated metal tip and an insulated handle. Heating is often achieved electrically, by passing an electric current (supplied through an electrical cord or battery cables) through a resistive heating element.', '', ''),
(45, '5', 'Resistor', 15, 100, 'A resistor is a passive two-terminal electrical component that implements electrical resistance as a circuit element. In electronic circuits, resistors are used to reduce current flow, adjust signal levels, to divide voltages, bias active elements, and terminate transmission lines, among other uses.', '', ''),
(46, '6', 'LED (Light-emitting Diode)', 5, 50, 'A light-emitting diode (LED) is a semiconductor light source that emits light when current flows through it. Electrons in the semiconductor recombine with electron holes, releasing energy in the form of photons. The color of the light is determined by the energy required for electrons to cross the band gap of the semiconductor. ', '', ''),
(47, '7', 'RJ-45', 10, 50, 'RJ45 plugs feature eight pins to which the wire strands of a cable interface electrically. Each plug has eight locations spaced about 1 mm apart into which individual wires are inserted using special cable crimping tools. The industry calls this type of connector8P8C, shorthand for eight position, eight contact. Ethernet cables and 8P8C connectors must be crimped into the RJ45 wiring pattern to function properly.', '', ''),
(48, '8', 'Cable Wire', 30, 40, 'A wire is made of a single electrical conductor while a cable is a group or bundle of multiple wires inside a common sheathing. Both of them are used for carrying electrical current.', '', ''),
(49, '9', 'LEAD', 7, 50, 'Lead is used in welding and soldering products like lead alloy solder traditionally used for jointing gas pipes in the UK. However, there is substantial evidence that lead can cause damage to the nervous system.', '', ''),
(50, '10', 'Electric Tester Meter', 250, 10, 'Testing Tools: Electric meter testers, like a voltage tester, let you know if wires are active, so you don’t start working on potential live wires. A more sophisticated option is a multimeter , which can read voltage levels as well as other measurements, including amperage and resistance.', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `user_tb`
--

CREATE TABLE `user_tb` (
  `user_id` varchar(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_tb`
--

INSERT INTO `user_tb` (`user_id`, `user_name`, `user_password`, `user_date`) VALUES
('', 'Password', '$2y$10$MGE4NDQ4YzRlNWI0NDZmM.NE8s6ILMcYzYDZuDaaiKbHm5CS0Aojy', '0000-00-00'),
('1', 'Admin', '$2y$10$Mzk1OWYyN2YwNDU1YzRmMO9m0e4YpTCFGLwRdk0WkN0ZeA7AZULV2', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products_tb`
--
ALTER TABLE `products_tb`
  ADD PRIMARY KEY (`prod_no`);

--
-- Indexes for table `user_tb`
--
ALTER TABLE `user_tb`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products_tb`
--
ALTER TABLE `products_tb`
  MODIFY `prod_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

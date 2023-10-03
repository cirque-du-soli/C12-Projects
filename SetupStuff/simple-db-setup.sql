/*  --DB create-- 
CREATE SCHEMA `simpledb` DEFAULT CHARACTER SET utf8mb4 ;
*/

use `simpledb`;

/* Table: auctions */
CREATE TABLE IF NOT EXISTS `simpletable` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `simplecolumn` varchar(320) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

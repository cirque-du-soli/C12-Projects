/*  --DB create--
CREATE SCHEMA `auctionsdb` DEFAULT CHARACTER SET utf8mb4 ;
*/

use `auctionsdb`;

/* Table: auctions */
CREATE TABLE IF NOT EXISTS `auctions` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `sellerEmail` varchar(320) NOT NULL, /* TODO REQ: to look like valid email. SQL REGEX */
  `itemName` varchar(100) NOT NULL, /* TODO REQ: 2-100 char, only contains: upper, lower, digits, spaces, and ./,_()-  */
  `itemDescription` varchar(10000) NOT NULL, /* TODO REQ: 2-10000 char,  textarea, WYSIWYG */
  `lastPrice` decimal NOT NULL, /* TODO REQ: >=0 */
  `lastBidderEmail` varchar(320) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*
Note, later, upgrade columns to check regex. return error numbers, based on requirements. 
Example: https://stackoverflow.com/questions/16005283/is-it-possible-to-enforce-data-checking-in-mysql-using-regular-expression

CREATE TABLE data (
  phone varchar(100)
);

DELIMITER $$
CREATE TRIGGER trig_phone_check BEFORE INSERT ON data
FOR EACH ROW 
BEGIN 
IF (NEW.phone REGEXP '^(\\+?[0-9]{1,4}-)?[0-9]{3,10}$' ) = 0 THEN 
  SIGNAL SQLSTATE '12345'
     SET MESSAGE_TEXT = 'Wroooong!!!';
END IF; 
END$$
DELIMITER ;


INSERT INTO data VALUES ('+64-221221442'); -- should be OK
INSERT INTO data VALUES ('+64-22122 WRONG 1442'); -- will fail with the error: #1644 - Wroooong!!! 



*/

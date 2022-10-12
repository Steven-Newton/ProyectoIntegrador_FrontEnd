-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ecoinclusivedb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ecoinclusivedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ecoinclusivedb` DEFAULT CHARACTER SET utf8 ;
USE `ecoinclusivedb` ;

-- -----------------------------------------------------
-- Table `ecoinclusivedb`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecoinclusivedb`.`categoria` (
  `categoria_id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`categoria_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecoinclusivedb`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecoinclusivedb`.`productos` (
  `producto_id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripción` VARCHAR(500) NULL,
  `precio` DECIMAL(6,2) NOT NULL,
  `descuento` INT NULL,
  `imagen` VARCHAR(1000) NOT NULL,
  `sku` VARCHAR(10) NOT NULL,
  `categoria_id` INT NOT NULL,
  PRIMARY KEY (`producto_id`, `categoria_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecoinclusivedb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecoinclusivedb`.`usuario` (
  `email` VARCHAR(100) NOT NULL,
  `nombre` VARCHAR(50) NULL,
  `telefono` VARCHAR(10) NULL,
  `contraseña` VARCHAR(20) NULL,
  PRIMARY KEY (`email`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecoinclusivedb`.`carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecoinclusivedb`.`carrito` (
  `usuario_email` VARCHAR(100) NOT NULL,
  `productos_id` INT NOT NULL,
  PRIMARY KEY (`usuario_email`, `productos_id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

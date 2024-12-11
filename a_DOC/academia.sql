

#
# Structure for table "contacto"
#

DROP TABLE IF EXISTS `contacto`;
CREATE TABLE `contacto` (
  `contacto_id` int(11) NOT NULL AUTO_INCREMENT,
  `contacto_nombre` varchar(100) DEFAULT NULL,
  `contacto_email` varchar(200) DEFAULT NULL,
  `contacto_descripcion` text DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`contacto_id`),
  KEY `empresa_id` (`empresa_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

#
# Structure for table "empresa"
#

DROP TABLE IF EXISTS `empresa`;
CREATE TABLE `empresa` (
  `empresa_id` int(11) NOT NULL AUTO_INCREMENT,
  `empresa_nombre` varchar(200) DEFAULT NULL,
  `empresa_vision` text DEFAULT NULL,
  `empresa_mision` text DEFAULT NULL,
  `empresa_ubicacion` text DEFAULT NULL,
  `empresa_mail` varchar(100) DEFAULT NULL,
  `empresa_logo` longblob DEFAULT NULL,
  `empresa_map` text DEFAULT NULL,
  `empresa_descripcion` text DEFAULT NULL,
  PRIMARY KEY (`empresa_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

#
# Structure for table "cuenta"
#

DROP TABLE IF EXISTS `cuenta`;
CREATE TABLE `cuenta` (
  `cuenta_id` int(11) NOT NULL AUTO_INCREMENT,
  `cuenta_cedula` varchar(11) DEFAULT NULL,
  `cuenta_nombre` varchar(50) DEFAULT NULL,
  `cuenta_pass` varchar(60) DEFAULT NULL,
  `cuenta_foto` longblob DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`cuenta_id`),
  KEY `empresa_id` (`empresa_id`),
  CONSTRAINT `cuenta_ibfk_1` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`empresa_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

#
# Structure for table "estudiante"
#

DROP TABLE IF EXISTS `estudiante`;
CREATE TABLE `estudiante` (
  `estudiante_id` int(11) NOT NULL AUTO_INCREMENT,
  `estudiante_nombre` varchar(200) DEFAULT NULL,
  `estudiante_apellido` varchar(200) DEFAULT NULL,
  `estudiante_fecha_inscripcion` date DEFAULT NULL,
  `estudiante_activo` tinyint(4) DEFAULT NULL,
  `estudiante_cedula` varchar(11) DEFAULT NULL,
  `estudiante_email` varchar(100) DEFAULT NULL,
  `estudiante_movil` varchar(11) DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`estudiante_id`),
  KEY `empresa_id` (`empresa_id`),
  CONSTRAINT `estudiante_ibfk_1` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`empresa_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

#
# Structure for table "cobro"
#

DROP TABLE IF EXISTS `cobro`;
CREATE TABLE `cobro` (
  `cobro_id` int(11) NOT NULL AUTO_INCREMENT,
  `cobro_mes` date DEFAULT NULL,
  `cobro_pago` DOUBLE,
  `estudiante_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`cobro_id`),
  KEY `estudiante_id` (`estudiante_id`),
  CONSTRAINT `cobro_ibfk_1` FOREIGN KEY (`estudiante_id`) REFERENCES `estudiante` (`estudiante_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

#
# Structure for table "horario"
#

DROP TABLE IF EXISTS `horario`;
CREATE TABLE `horario` (
  `horario_id` int(11) NOT NULL AUTO_INCREMENT,
  `horario_dia` varchar(50) DEFAULT NULL,
  `horario_inicio` varchar(50) DEFAULT NULL,
  `horario_fin` varchar(50) DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`horario_id`),
  KEY `empresa_id` (`empresa_id`),
  CONSTRAINT `horario_ibfk_1` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`empresa_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

#
# Structure for table "promocion"
#

DROP TABLE IF EXISTS `promocion`;
CREATE TABLE `promocion` (
  `promocion_id` int(11) NOT NULL AUTO_INCREMENT,
  `promocion_descripcion` text DEFAULT NULL,
  `promocion_img` longblob DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL,
  `promocion_estado` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`promocion_id`),
  KEY `empresa_id` (`empresa_id`),
  CONSTRAINT `promocion_ibfk_1` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`empresa_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

#
# Structure for table "servicio"
#

DROP TABLE IF EXISTS `servicio`;
CREATE TABLE `servicio` (
  `servicio` int(11) NOT NULL AUTO_INCREMENT,
  `servicio_descripcion` varchar(200) DEFAULT NULL,
  `servicio_file` longblob,
  `empresa_id` int(11) DEFAULT NULL,
  `servicio_estado` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`servicio`),
  KEY `empresa_id` (`empresa_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

#
# Structure for table "social"
#

DROP TABLE IF EXISTS `social`;
CREATE TABLE `social` (
  `social_id` int(11) NOT NULL AUTO_INCREMENT,
  `social_descripcion` text DEFAULT NULL,
  `social_logo` longblob DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL,
  `social_link` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`social_id`),
  KEY `empresa_id` (`empresa_id`),
  CONSTRAINT `social_ibfk_1` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`empresa_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;



-- tables for secure information 



CREATE TABLE save_contacto (
  `save_contacto_id` INT AUTO_INCREMENT PRIMARY KEY,
  `contacto_id` int(11) NOT NULL ,
  `contacto_nombre` varchar(100) DEFAULT NULL,
  `contacto_email` varchar(200) DEFAULT NULL,
  `contacto_descripcion` text DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL
) ENGINE=InnoDB;

CREATE TABLE save_empresa (
  save_empresa int PRIMARY KEY AUTO_INCREMENT,
  `empresa_id` int(11) NOT NULL,
  `empresa_nombre` varchar(200) DEFAULT NULL,
  `empresa_vision` text DEFAULT NULL,
  `empresa_mision` text DEFAULT NULL,
  `empresa_ubicacion` text DEFAULT NULL,
  `empresa_mail` varchar(100) DEFAULT NULL,
  `empresa_logo` longblob DEFAULT NULL,
  `empresa_map` text DEFAULT NULL,
  `empresa_descripcion` text DEFAULT NULL
) ENGINE=InnoDB ;

CREATE TABLE save_cuenta (
  save_cuenta INT PRIMARY KEY AUTO_INCREMENT,
  `cuenta_id` int(11) NOT NULL ,
  `cuenta_cedula` varchar(11) DEFAULT NULL,
  `cuenta_nombre` varchar(50) DEFAULT NULL,
  `cuenta_pass` varchar(60) DEFAULT NULL,
  `cuenta_foto` longblob DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL
) ENGINE=InnoDB ;

CREATE TABLE save_estudiante (
  save_estudiante INT PRIMARY KEY AUTO_INCREMENT,
  `estudiante_id` int(11) NOT NULL,
  `estudiante_nombre` varchar(200) DEFAULT NULL,
  `estudiante_apellido` varchar(200) DEFAULT NULL,
  `estudiante_fecha_inscripcion` date DEFAULT NULL,
  `estudiante_activo` tinyint(4) DEFAULT NULL,
  `estudiante_cedula` varchar(11) DEFAULT NULL,
  `estudiante_email` varchar(100) DEFAULT NULL,
  `estudiante_movil` varchar(11) DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL
) ENGINE=InnoDB ;

CREATE TABLE save_cobro (
  save_cobro INT PRIMARY KEY AUTO_INCREMENT,
  `cobro_id` int(11) NOT NULL ,
  `cobro_mes` date DEFAULT NULL,
  `cobro_pago` DOUBLE,
  `estudiante_id` int(11) DEFAULT NULL
) ENGINE=InnoDB ;

CREATE TABLE save_horario (
  save_horario INT PRIMARY KEY AUTO_INCREMENT,
  `horario_id` int(11) NOT NULL ,
  `horario_dia` varchar(50) DEFAULT NULL,
  `horario_inicio` varchar(50) DEFAULT NULL,
  `horario_fin` varchar(50) DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL
) ENGINE=InnoDB ;

CREATE TABLE save_promocion (
  save_promocion INT PRIMARY KEY AUTO_INCREMENT,
  `promocion_id` int(11) NOT NULL,
  `promocion_descripcion` text DEFAULT NULL,
  `promocion_img` longblob DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL,
  `promocion_estado` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB ;

CREATE TABLE save_servicio (
  save_servicio INT PRIMARY KEY AUTO_INCREMENT,
  `servicio` int(11) NOT NULL ,
  `servicio_descripcion` varchar(200) DEFAULT NULL,
  `servicio_file` longblob,
  `empresa_id` int(11) DEFAULT NULL,
  `servicio_estado` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB ;

CREATE TABLE save_social (
  save_social INT PRIMARY KEY AUTO_INCREMENT,
  `social_id` int(11) NOT NULL ,
  `social_descripcion` text DEFAULT NULL,
  `social_logo` longblob DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL,
  `social_link` varchar(200) DEFAULT NULL
) ENGINE=InnoDB;


-- triggers for tables secondaris
-- trigger for cobro 
CREATE TRIGGER trigger_cobro AFTER INSERT
ON cobro FOR EACH ROW 
INSERT INTO save_cobro (cobro_id,cobro_mes,cobro_pago,estudiante_id) 
VALUES (NEW.cobro_id,NEW.cobro_mes,NEW.cobro_pago,NEW.estudiante_id);
 

CREATE TRIGGER update_trigger_cobro AFTER UPDATE
ON cobro FOR EACH ROW 
UPDATE save_cobro set cobro_mes=NEW.cobro_mes,cobro_pago=NEW.cobro_pago,estudiante_id=NEW.estudiante_id WHERE cobro_id=NEW.cobro_id;


-- trigger for contacto
CREATE TRIGGER trigger_contacto AFTER INSERT
ON contacto
FOR EACH ROW 
INSERT INTO save_contacto (contacto_id,contacto_nombre,contacto_email,contacto_descripcion,empresa_id) 
VALUES (NEW.contacto_id,NEW.contacto_nombre,NEW.contacto_email,NEW.contacto_descripcion,NEW.empresa_id);

CREATE TRIGGER update_trigger_contacto AFTER UPDATE
ON contacto
FOR EACH ROW 
UPDATE save_contacto SET contacto_nombre=NEW.contacto_nombre ,contacto_email=NEW.contacto_email ,contacto_descripcion=NEW.contacto_descripcion,empresa_id=NEW.empresa_id WHERE contacto_id=NEW.contacto_id; 


-- trigger for cuenta
CREATE TRIGGER trigger_cuenta AFTER INSERT
ON cuenta
FOR EACH ROW 
INSERT INTO save_cuenta (cuenta_id,cuenta_cedula,cuenta_nombre,cuenta_pass,cuenta_foto,empresa_id) 
VALUES (NEW.cuenta_id,NEW.cuenta_cedula,NEW.cuenta_nombre,NEW.cuenta_pass,NEW.cuenta_foto,NEW.empresa_id);

CREATE TRIGGER update_trigger_cuenta AFTER UPDATE
ON cuenta
FOR EACH ROW 
UPDATE save_cuenta SET cuenta_cedula=NEW.cuenta_cedula,cuenta_nombre=NEW.cuenta_nombre,cuenta_pass=NEW.cuenta_pass,cuenta_foto=NEW.cuenta_foto,empresa_id=NEW.empresa_id WHERE cuenta_id=NEW.cuenta_id; 

-- trigger for empresa
CREATE TRIGGER trigger_empresa AFTER INSERT
ON empresa
FOR EACH ROW 
INSERT INTO save_empresa (empresa_id,empresa_nombre,empresa_vision,empresa_mision,empresa_ubicacion,empresa_mail,empresa_logo,empresa_map,empresa_descripcion) 
VALUES (NEW.empresa_id,NEW.empresa_nombre,NEW.empresa_vision,NEW.empresa_mision,NEW.empresa_ubicacion,NEW.empresa_mail,NEW.empresa_logo,NEW.empresa_map,NEW.empresa_descripcion);

CREATE TRIGGER update_trigger_empresa AFTER UPDATE
ON empresa
FOR EACH ROW 
UPDATE save_empresa SET empresa_nombre=NEW.empresa_nombre,empresa_vision=NEW.empresa_vision,empresa_mision=NEW.empresa_mision,empresa_ubicacion=NEW.empresa_ubicacion,empresa_mail=NEW.empresa_mail,empresa_logo=NEW.empresa_logo,empresa_map=NEW.empresa_map,empresa_descripcion=NEW.empresa_descripcion WHERE empresa_id=NEW.empresa_id; 


-- trigger for estudiante
CREATE TRIGGER trigger_estudiante AFTER INSERT
ON estudiante
FOR EACH ROW 

INSERT INTO save_estudiante (estudiante_id,estudiante_nombre,estudiante_apellido,estudiante_fecha_inscripcion,estudiante_activo,estudiante_cedula,estudiante_email,estudiante_movil,empresa_id) 
VALUES (NEW.estudiante_id,NEW.estudiante_nombre,NEW.estudiante_apellido,NEW.estudiante_fecha_inscripcion,NEW.estudiante_activo,NEW.estudiante_cedula,NEW.estudiante_email,NEW.estudiante_movil,NEW.empresa_id);

CREATE TRIGGER update_trigger_estudiante AFTER UPDATE
ON estudiante
FOR EACH ROW 
UPDATE save_estudiante SET estudiante_nombre=NEW.estudiante_nombre,estudiante_apellido=NEW.estudiante_apellido,estudiante_fecha_inscripcion=NEW.estudiante_fecha_inscripcion,estudiante_activo=NEW.estudiante_activo,estudiante_cedula=NEW.estudiante_cedula,estudiante_email=NEW.estudiante_email,estudiante_movil=NEW.estudiante_movil,empresa_id=NEW.empresa_id WHERE estudiante_id=NEW.estudiante_id; 


-- trigger for horario
CREATE TRIGGER trigger_horario AFTER INSERT
ON horario
FOR EACH ROW 
INSERT INTO save_horario (horario_id,horario_dia,horario_inicio,horario_fin,empresa_id) 
VALUES (NEW.horario_id,NEW.horario_dia,NEW.horario_inicio,NEW.horario_fin,NEW.empresa_id);

CREATE TRIGGER update_trigger_horario AFTER UPDATE
ON horario
FOR EACH ROW 
UPDATE save_horario SET horario_dia=NEW.horario_dia,horario_inicio=NEW.horario_inicio,horario_fin=NEW.horario_fin,empresa_id=NEW.empresa_id WHERE horario_id=NEW.horario_id; 


-- trigger for promocion
CREATE TRIGGER trigger_promocion AFTER INSERT
ON promocion
FOR EACH ROW 
INSERT INTO save_promocion (promocion_id,promocion_descripcion,promocion_img,empresa_id,promocion_estado) 
VALUES (NEW.promocion_id,NEW.promocion_descripcion,NEW.promocion_img,NEW.empresa_id,NEW.promocion_estado);

CREATE TRIGGER update_trigger_promocion AFTER UPDATE
ON promocion
FOR EACH ROW 
UPDATE save_promocion SET promocion_descripcion=NEW.promocion_descripcion,promocion_img=NEW.promocion_img,empresa_id=NEW.empresa_id,promocion_estado=NEW.promocion_estado WHERE promocion_id=NEW.promocion_id; 


-- trigger for servicio
CREATE TRIGGER trigger_servicio AFTER INSERT
ON servicio
FOR EACH ROW 
INSERT INTO save_servicio (servicio,servicio_descripcion,servicio_file,empresa_id,servicio_estado) 
VALUES (NEW.servicio,NEW.servicio_descripcion,NEW.servicio_file,NEW.empresa_id,NEW.servicio_estado);

CREATE TRIGGER update_trigger_servicio AFTER UPDATE
ON servicio
FOR EACH ROW 
UPDATE save_servicio SET servicio_descripcion=NEW.servicio_descripcion,servicio_file=NEW.servicio_file,servicio_file=NEW.empresa_id,servicio_estado=NEW.servicio_estado WHERE servicio=NEW.servicio; 


-- trigger for social
CREATE TRIGGER trigger_social AFTER INSERT
ON social
FOR EACH ROW 
INSERT INTO save_social (social_id,social_descripcion,social_logo,empresa_id,social_link) 
VALUES (NEW.social_id,NEW.social_descripcion,NEW.social_logo,NEW.empresa_id,NEW.social_link);

CREATE TRIGGER update_trigger_social AFTER UPDATE
ON social
FOR EACH ROW 
UPDATE save_social SET social_descripcion=NEW.social_descripcion,social_logo=NEW.social_logo,empresa_id=NEW.empresa_id,social_link=NEW.social_link WHERE social_id=NEW.social_id; 

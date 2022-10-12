-- <<< Creación de categorías >>>
INSERT INTO categoria (categoria_id, nombre)
VALUES ('0','parte superior');
INSERT INTO categoria (categoria_id, nombre)
VALUES ('0','parte inferior');
INSERT INTO categoria (categoria_id, nombre)
VALUES ('0','calzado');
INSERT INTO categoria (categoria_id, nombre)
VALUES ('0','tallas extra');
INSERT INTO categoria (categoria_id, nombre)
VALUES ('0','accesorios');
INSERT INTO categoria (categoria_id, nombre)
VALUES ('0','productos con causa');

-- <<< Creación de usuarios >>>
INSERT INTO usuario (email, nombre, telefono, contraseña)
VALUES('alineguzman@gmail.com', 'Laura Aline Martínez Guzmán', '5616373654', 'Hola01');
INSERT INTO usuario (email, nombre, telefono, contraseña)
VALUES('juanbarrera@gmail.com', 'Juan Barrera Hernández', '5576984756', 'Hola02');
INSERT INTO usuario (email, nombre, telefono, contraseña)
VALUES('mafer@gmail.com', 'María Fernanda Hernández', '5616373654', 'Hola03');
INSERT INTO usuario (email, nombre, telefono, contraseña)
VALUES('mariabelen@gmail.com', 'María Belén', '5569097865', 'Hola04');
INSERT INTO usuario (email, nombre, telefono, contraseña)
VALUES('melbuenoh18@gmail.com', 'Karen Melissa Bueno Hernández', '5643126859', 'Hola05');

-- <<< Creación de productos >>>
INSERT INTO productos (producto_id, nombre, descripción, precio, descuento, imagen, sku, categoria_id)
VALUES ('0', 'Conjunto Rosa', 'Camisa 100% fabricada con poliester reciclado', '309.95', '20',
 'https://static.zara.net/photos///2022/I/0/1/p/4799/036/123/2/w/1126/4799036123_2_1_1.jpg?ts=1655898815835', '100001', '1');
INSERT INTO productos (producto_id, nombre, descripción, precio, descuento, imagen, sku, categoria_id)
VALUES ('0', 'Vestido Negro', 'Vestido casual', '349.99', '15', 
'https://static.zara.net/photos///2022/I/0/1/p/8465/275/064/2/w/1024/8465275064_2_2_1.jpg?ts=1661507824863', '100002', '1');
INSERT INTO productos (producto_id, nombre, descripción, precio, descuento, imagen, sku, categoria_id)
VALUES ('0', 'Sandalias Aesthetic', 'Aerodinámicas, fabricadas con materiales de desecho, derivados del petroleo como botellas y llantas en deshuso', '559.99', '10',
 'https://static.zara.net/photos///2022/I/0/1/p/8465/275/064/2/w/1024/8465275064_2_2_1.jpg?ts=1661507824863', '100003', '3'); 
INSERT INTO productos (producto_id, nombre, descripción, precio, descuento, imagen, sku, categoria_id)
VALUES ('0', 'Tenis Nimbus 2000', 'Calzado fabricado a partir de botellas de plastico y aceite quemado', '799.99', '20',
 'https://static.zara.net/photos///2022/I/1/2/p/2120/920/040/2/w/1126/2120920040_6_2_1.jpg?ts=1659968275587', '100004', '3'); 
INSERT INTO productos (producto_id, nombre, descripción, precio, descuento, imagen, sku, categoria_id)
VALUES ('0', 'Cubrebocas - Be Safe', 'Cubrebocas lavable, se apega a los requerimientos de la NOM-116 -STPS-1994', '69.99', '30',
 '../src/cubreboca.jpeg', '100005', '5'); 
 
-- <<< Creación de carrito >>>
INSERT INTO carrito (usuario_email, productos_id)
VALUES ('alineguzman@gmail.com', '1');
INSERT INTO carrito (usuario_email, productos_id)
VALUES ('juanbarrera@gmail.com', '2');
INSERT INTO carrito (usuario_email, productos_id)
VALUES ('mafer@gmail.com', '3');
INSERT INTO carrito (usuario_email, productos_id)
VALUES ('mariabelen@gmail.com', '4');
INSERT INTO carrito (usuario_email, productos_id)
VALUES ('melbuenoh18@gmail.com', '5');
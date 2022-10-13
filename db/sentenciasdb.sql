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

-- << Creación de usuarios >>
INSERT INTO usuario (email, nombre, telefono, contraseña)
VALUES('alineguzman01@gmail.com', 'Laura Aline Martínez Guzmán', '5616373654', 'Hola01');
INSERT INTO usuario (email, nombre, telefono, contraseña)
VALUES('juanbarrera@gmail.com', 'Juan Barrera Hernández', '5576984756', 'Hola02');
INSERT INTO usuario (email, nombre, telefono, contraseña)
VALUES('mafer@gmail.com', 'María Fernanda Hernández', '5616373654', 'Hola03');
INSERT INTO usuario (email, nombre, telefono, contraseña)
VALUES('mariabelen@gmail.com', 'María Belén', '5569097865', 'Hola04');
INSERT INTO usuario (email, nombre, telefono, contraseña)
VALUES('melbuenoh18@gmail.com', 'Karen Melissa Bueno Hernández', '5643126859', 'Hola05');

-- <<< Creación de productos >>>
INSERT INTO productos (producto_id, titulo, precio, descripcion, categoria_id, imagen, sku, descuento)
VALUES ('0', 'Conjunto Rosa', '309.95', 'Camisa 100% fabricada con poliester reciclado', '1',
 'https://static.zara.net/photos///2022/I/0/1/p/4799/036/123/2/w/1126/4799036123_2_1_1.jpg?ts=1655898815835', '100001', '20');
INSERT INTO productos (producto_id, titulo, precio, descripcion, categoria_id, imagen, sku, descuento)
VALUES ('0', 'Vestido Negro', '349.99', 'Vestido casual', '1', 
'https://static.zara.net/photos///2022/I/0/1/p/8465/275/064/2/w/1024/8465275064_2_2_1.jpg?ts=1661507824863', '15', '100002');
INSERT INTO productos (producto_id, titulo, precio, descripcion, categoria_id, imagen, sku, descuento)
VALUES ('0', 'Sandalias Aesthetic', '559.99', 'Aerodinámicas, fabricadas con materiales de desecho, derivados del petroleo como botellas y llantas en deshuso', '3',
 'https://static.zara.net/photos///2022/I/0/1/p/8465/275/064/2/w/1024/8465275064_2_2_1.jpg?ts=1661507824863', '100003', '10'); 
INSERT INTO productos (producto_id, titulo, precio, descripcion, categoria_id, imagen, sku, descuento)
VALUES ('0', 'Tenis Nimbus 2000', '799.99', 'Calzado fabricado a partir de botellas de plastico y aceite quemado', '3',
 'https://static.zara.net/photos///2022/I/1/2/p/2120/920/040/2/w/1126/2120920040_6_2_1.jpg?ts=1659968275587', '100004', '20'); 
INSERT INTO productos (producto_id, titulo, precio, descripcion, categoria_id, imagen, sku, descuento)
VALUES ('0', 'Cubrebocas - Be Safe', '69.99', 'Cubrebocas lavable, se apega a los requerimientos de la NOM-116 -STPS-1994', '5',
 '../src/cubreboca.jpeg', '100005', '30'); 

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
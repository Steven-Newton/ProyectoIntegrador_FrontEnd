INSERT INTO usuario (email, nombre, telefono, contraseña)
VALUES('alineguzman@gmail.com', 'Laura Aline Martínez Guzmán', '5616373654', 'Hola08');

INSERT INTO productos (producto_id, nombre, descripción, precio, descuento, imagen, sku, categoria_id)
VALUES ('8', 'Tenis Nimbus 2000', 'Calzado fabricado a partir de botellas de plastico y aceite quemado', '2500', '0', 
'https://th.bing.com/th/id/OIP.3Es4mbCQj38QWVnb_-5lIgHaK2?pid=ImgDet&rs=1', '100007', '5');

SELECT carrito.usuario_email, carrito.productos_producto_id, usuario.email, usuario.nombre, usuario.telefono
FROM carrito
INNER JOIN usuario
ON carrito.usuario_email = usuario.email;

SELECT DISTINCT precio, descuento
FROM productos;

SELECT nombre, telefono
FROM usuario
ORDER BY nombre, telefono DESC;
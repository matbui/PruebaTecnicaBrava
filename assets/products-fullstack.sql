CREATE DATABASE tienda;

USE tienda;

CREATE TABLE products (
    product_id SERIAL NOT NULL PRIMARY KEY,
    product_code VARCHAR(20),
    product_name VARCHAR(30) NOT NULL UNIQUE,
    product_price NUMERIC(12, 2) NOT NULL,
    product_image TEXT,
    product_active INT CHECK (product_active = 1 OR product_active = 0), -- Indica si el producto está activo
    product_delete INT NOT NULL DEFAULT 0,
    product_created_by INT NOT NULL, -- Cambié esta línea
    product_created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    product_modified_by INT, -- Cambié esta línea
    product_modified_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_created_by) REFERENCES users(user_id),
    FOREIGN KEY (product_modified_by) REFERENCES users(user_id)
);


insert into products(product_code,product_name,product_price,product_image,product_active,product_created_by) 
values ('BRAV-001','Balon de Futbol',29.30,'',1,1);
insert into products(product_code,product_name,product_price,product_image,product_active,product_created_by) 
values ('BRAV-002','Balon de Basket',22.00,'https://wilsonstore.com.co/wp-content/uploads/2023/02/WTB9300XB07-1_0000_WTB9300XB_0_7_NBA_DRV_BSKT_OR.png.cq5dam.web_.1200.1200.jpg',1,1);
insert into products(product_code,product_name,product_price,product_image,product_active,product_created_by) 
values ('BRAV-003','Pelota de tenis',8.99,'https://assets.stickpng.com/images/580b585b2edbce24c47b2b90.png',1,1);
insert into products(product_code,product_name,product_price,product_image,product_active,product_created_by) 
values ('BRAV-004','Raqueta',49.50,'https://larrytennis.com/cdn/shop/products/WR074011U_9_900x.jpg',1,1);
insert into products(product_code,product_name,product_price,product_image,product_active,product_created_by) 
values ('BRAV-005','Palo de Golf',85.99,'https://i.ebayimg.com/thumbs/images/g/TEsAAOSwIK5fsjRp/s-l225.jpg',1,1);
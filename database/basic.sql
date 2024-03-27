-- untuk remote / connect postgres
psql -U postgres -p 5432 -h localhost -p

-- untuk milihat database yg pernah dibuat 
\l

-- untuk membuat database
-- syntac sql : CREATE DATABASE [nama_database]
CREATE DATABASE fwmg192;

-- untuk mengahpus database
-- syntac sql : DROP DATABASE [nama_database]
DROP DATABASE fwmg192;

-- untuk masuk / pilih /connect ke DATABASE
-- \c [nama_database]
\c fwmg192

-- untuk melihat list table yang sudah dibuat
\dt

-- untuk membuat table
CREATE TABLE products(
  id INT,
  name VARCHAR(64),
  description TEXT,
  price INT,
  stock INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE users(
  id INT,
  email VARCHAR(64),
  fullname VARCHAR(64),
  password VARCHAR(64),
  phone VARCHAR(16),
  PRIMARY KEY(id)
);


-- untuk menggahapus table
DROP TABLE users;



-- untuk memasukan data ke table
INSERT INTO users(id, email, fullname, password, phone)VALUES(1, 'risano@mgail.com', 'risano akbar', 'abcd1234', '0823423433' );

-- untuk melihat data yg ada di table
SELECT id, email, fullname, password, phone FROM users;
SELECT * FROM users;

-- untuk update data pada table

UPDATE users SET email = 'budiblabla@gmail.com', fullname ='budi test' WHERE id = 2;

-- untuk delete

DELETE FROM users WHERE id = 2;



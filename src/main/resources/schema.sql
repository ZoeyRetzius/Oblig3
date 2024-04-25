CREATE TABLE BILLETT (
                        id INT PRIMARY KEY AUTO_INCREMENT,
                        film VARCHAR(255) NOT NULL,
                        antall INT NOT NULL,
                        fornavn VARCHAR(255) NOT NULL,
                        etternavn VARCHAR(255) NOT NULL,
                        telefon VARCHAR(255),
                        epost VARCHAR(255)

);
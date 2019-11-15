
DELIMITER $$
 
CREATE PROCEDURE Create_User (
    IN  dniU int,
    IN  usernameU varchar(30),
    IN  passU varchar(255)
)
BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET @exito=0;
    
    START TRANSACTION;
		INSERT INTO Usuarios (dni,username,pass) 
        VALUES (dniU, usernameU, passU);
        SET @exito = 1;
        SELECT @exito;
	COMMIT;
END$$
 
DELIMITER ;
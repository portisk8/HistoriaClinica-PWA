DELIMITER $$
 
CREATE PROCEDURE Login (
    IN  dniU int
)
BEGIN
    START TRANSACTION;
		SELECT u.dni, u.username, u.pass from Usuarios u where u.dni = dniU;
	COMMIT;
END$$
 
DELIMITER ;
DELIMITER $$
 
CREATE PROCEDURE Profesionales_obtener (
    IN  descripcionE varchar (30)
)
BEGIN
    START TRANSACTION;
		SELECT p.nombre, p.apellido, p.nroMatricula 
			from Profesionales p where p.descripcion = descripcionE;
	COMMIT;
END$$
 
DELIMITER ;
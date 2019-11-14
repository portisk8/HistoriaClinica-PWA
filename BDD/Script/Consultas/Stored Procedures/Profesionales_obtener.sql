DELIMITER $$
 
CREATE PROCEDURE Profesionales_obtener (
    IN  descripcionE varchar (30)
)
BEGIN
    
		SELECT p.nombre, p.apellido, p.nroMatricula 
			from Profesionales p where p.descripcion = descripcionE;
	
END$$
 
DELIMITER ;
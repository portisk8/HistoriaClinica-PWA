DELIMITER $$
 
CREATE PROCEDURE Profesionales_obtener (
    IN  descripcionE varchar (30)
)
BEGIN
    
		SELECT p.nombre, p.apellido, p.numeroMatricula  as nroMatricula
			from Profesionales p where p.especialidad = descripcionE;
	
END$$
 
DELIMITER ;
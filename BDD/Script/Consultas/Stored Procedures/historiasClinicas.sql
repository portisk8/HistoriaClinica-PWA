DELIMITER $$
 
CREATE PROCEDURE HistorialClinico (
    
)
BEGIN
    START TRANSACTION;
		SELECT *
			from AtencionMedica;
	COMMIT;
END$$
 
DELIMITER ;
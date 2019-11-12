DELIMITER $$
 
CREATE PROCEDURE HistorialClinico (
        IN  nroHistoriaClinica int

)
BEGIN
    START TRANSACTION;
		SELECT *
		from turnos t 
        WHERE t.paciente = nroHistoriaClinica;
	COMMIT;
END$$

ineryoinn
turnos, analisis, emergencias y atencion medica

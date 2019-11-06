
DELIMITER $$
 
CREATE PROCEDURE Turno_Guardar (
    IN  fechaHora datetime,
    IN  motivo varchar(80),
    IN  paciente int(11),
    IN  profesional int(11)
)
BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET @exito=0;
    
    START TRANSACTION;
		INSERT INTO `Turnos` (`fechaHoraAsignacion`,`motivoConsulta`,`paciente`,`profesional`) VALUES
		(fechaHora,motivo, paciente, profesional);
        SET @exito = 1;
        SELECT @exito;
	COMMIT;
END$$
 
DELIMITER ;
DELIMITER $$

CREATE PROCEDURE Turno_Guardar (
    IN  fecha date,
    IN  hora time,
    IN  motivo varchar(80),
    IN  paciente int(11),
    IN  medico int(11)
)
BEGIN
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET @exito=0;

    START TRANSACTION;
    
		 SET @existe = IF((SELECT 1 FROM Turnos t WHERE t.fechaAtencion = fecha AND t.horaAtencion = hora limit 1) =1, 1, 0);
          SELECT @existe;
        
        SET @numeroHC = (SELECT p.numeroHistoriaClinica from Pacientes p where p.numeroDniPaciente = paciente limit 1);
        
			IF (@existe = 0)
			THEN
				INSERT INTO Turnos
					(`fechaAsignacion`, `horaAsignacion`, `motivoConsulta`, `atencionMedicaId`, `paciente`, `profesional`, `fechaAtencion`, `horaAtencion`)
				VALUES
					(now(), now(), motivo, null, @numeroHC, medico, fecha, hora);
				 SET @exito = 1;
              SET @mensaje = 'Se guardo Correctamente';	
			ELSE
             SET @exito = 0;
              SET @mensaje = 'No se guardo';
			END IF;
           -- WHERE NOT EXISTS( SELECT * FROM Turnos t WHERE t.fechaAtencion = fecha AND t.horaAtencion = hora );
            
            
        	COMMIT;
        SELECT @exito, @mensaje;
END$$

DELIMITER ; 
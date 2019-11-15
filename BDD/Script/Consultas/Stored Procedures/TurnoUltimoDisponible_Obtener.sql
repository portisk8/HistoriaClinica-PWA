DELIMITER $$
 
CREATE PROCEDURE TurnoUltimoDisponible_Obtener (
    IN  fecha datetime,
    IN  profesional int(11)
)
BEGIN
	
    SET @ultimaHoraTurno = (SELECT MAX(t.horaAtencion) FROM Turnos t WHERE t.profesional = profesional and DATE(t.fechaAtencion) = DATE(fecha));
    -- SELECT @ultimaHoraTurno;
	SET @ultimaHoraTurno = IF(isnull(@ultimaHoraTurno) = 1
														, (SELECT prof.HoraAtencionDesde FROM Profesionales prof WHERE prof.numeroMatricula = profesional)
														, ADDTIME(@ultimaHoraTurno, "1800"));
                                                        SELECT @ultimaHoraTurno;
	SELECT @ultimaHoraTurno as turnoDisp
    FROM Profesionales prof
 	WHERE prof.numeroMatricula = profesional
        and @ultimaHoraTurno between prof.HoraAtencionDesde and prof.HoraAtencionHasta
        
	 ;
        
END$$
 
DELIMITER ;
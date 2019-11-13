DELIMITER $$
CREATE PROCEDURE HistorialClinicoInternacion (
        IN  dni int

)
BEGIN
    START TRANSACTION;
		SELECT *
		from Internaciones i inner join Pacientes p
       on i.paciente = p.numeroHistoriaClinica
       WHERE p.numeroDniPaciente = dni;
	COMMIT;
END$$


CREATE PROCEDURE HistorialClinicoTurno (
        IN  dni int

)
BEGIN
    START TRANSACTION;
		SELECT *
		from Turnos t inner join Pacientes p
       on t.paciente = p.numeroHistoriaClinica
       WHERE p.numeroDniPaciente = dni;
	COMMIT;
END$$

CREATE PROCEDURE HistorialClinicoEmergencia (
        IN  dni int

)
BEGIN
    START TRANSACTION;
		SELECT *
		from Emergencias e inner join Pacientes p
       on e.paciente = p.numeroHistoriaClinica
       WHERE p.numeroDniPaciente = dni;
	COMMIT;
END$$

CREATE PROCEDURE HistorialClinicoAnalisis (
        IN  dni int

)
BEGIN
    START TRANSACTION;
		SELECT *
		from Analisis a inner join Pacientes p
       on a.paciente = p.numeroHistoriaClinica
       WHERE p.numeroDniPaciente = dni;
	COMMIT;
END$$

DELIMITER ;

CALL HistorialClinicoTurno(dni);


SELECT *
		from Internaciones i inner join Pacientes p
       on i.paciente = p.numeroHistoriaClinica inner join Turnos t on t.paciente = p.numeroHistoriaClinica
       inner join Analisis a on a.paciente = p.numeroHistoriaClinica inner join Emergencias e on p.numeroHistoriaClinica = e.paciente
       WHERE p.numeroDniPaciente = dni;
       
SELECT *
		from Emergencias e inner join Pacientes p
       on e.paciente = p.numeroHistoriaClinica
       WHERE p.numeroDniPaciente = dni;


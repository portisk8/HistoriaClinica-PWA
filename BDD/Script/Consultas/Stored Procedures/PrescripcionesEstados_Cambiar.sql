DELIMITER $$
 
CREATE PROCEDURE PrescripcionesEstados_Cambiar (
    IN  dniU int
    IN droga varchar(50),
    IN drogueria varchar(50)
)
BEGIN
		update Prescripciones p set p.estado = "Entregado" where p.paciente = (select p1.numeroHistoriaClinica from Pacientes p1 where p1.numeroDniPaciente = dniU) and p.droga = droga and p.drogueria = drogueria; 

END$$
 
DELIMITER ;
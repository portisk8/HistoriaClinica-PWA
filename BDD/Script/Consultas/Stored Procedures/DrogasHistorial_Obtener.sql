DELIMITER $$
 
CREATE PROCEDURE DrogasHistorial_Obtener (
    IN  dniU int
)
BEGIN
	select * from Prescripciones p1 inner join  Pacientes p on p1.paciente = p.numeroHistoriaClinica
	inner join AtencionMedica a on a.atencionMedicaId = p1.atencionMedica where p.numeroDniPaciente = dniU;
END$$
 
DELIMITER ;
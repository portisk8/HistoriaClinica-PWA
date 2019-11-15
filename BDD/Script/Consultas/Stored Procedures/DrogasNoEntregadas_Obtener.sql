DELIMITER $$
 
CREATE PROCEDURE DrogasNoEntregadas_Obtener (
    IN  dniU int
)
BEGIN
		SELECT * from Prescripciones p inner join Pacientes p1 on p.paciente = p1.numeroHistoriaClinica where p1.numeroDniPaciente = dniU and p.estado != "Entregado";
END$$
 
DELIMITER ;
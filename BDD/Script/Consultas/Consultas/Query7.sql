-- Listar los nombres, diagnósticos y obra social de los pacientes que estuvieron más tiempo internados durante el primer semestre de 2019.

select *
from    Internaciones i
		inner join Pacientes p
		on i.paciente = p.numeroHistoriaClinica
where 	(i.fechaIngreso between "2019-01-01" and "2019-06-30") and
		(i.fechaSalida between "2019-01-01" and "2019-06-30")
        and datediff(i.fechaSalida, i.fechaIngreso) = (
															select  max(datediff(i.fechaSalida, i.fechaIngreso))
															from    Internaciones i
															where 	(i.fechaIngreso between "2019-01-01" and "2019-06-30") and
																	(i.fechaSalida between "2019-01-01" and "2019-06-30")
															);
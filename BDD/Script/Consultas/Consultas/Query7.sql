-- Listar los nombres, diagnósticos y obra social de los pacientes que estuvieron más tiempo internados durante el primer semestre de 2019.

select  *
from    Internaciones i, 
        Pacientes p
where 	i.paciente = p.numeroHistoriaClinica and 
		(i.fechaIngreso between "2019-01-01" and "2019-06-30") and
        (i.fechaSalida between "2019-01-01" and "2019-06-30");
        
-- Falta saber cual es el que más tiempo estuvo
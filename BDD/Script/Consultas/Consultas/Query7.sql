select *
from thk14slpww9jdmzo.Internaciones i, thk14slpww9jdmzo.Pacientes p
where 	i.paciente = p.numeroHistoriaClinica and 
		(i.fechaIngreso between "2019-01-01" and "2019-06-30") and
        (i.fechaSalida between "2019-01-01" and "2019-06-30")
        
;
-- Falta saber cual es el que más tiempo estuvo
-- Obtener el promedio diario de pacientes que hicieron consultas de cardiología en el último mes.

select avg(count(*))
from	Pacientes pac,
		Turnos tur,
        Profesionales pro
where 	tur.paciente = pac.numeroHistoriaClinica and 
		tur.profesional = pro.numeroMatricula and 
        pro.especialidad = "Cardiologia" and 
        month(tur.fechaAtencion) = month(curdate()) and 
        year(tur.fechaAtencion) = year(curdate())
group by day(tur.fechaAtencion);
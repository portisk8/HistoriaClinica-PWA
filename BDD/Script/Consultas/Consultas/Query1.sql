-- QUERY 1 **********
-- Obtener el promedio diario de pacientes que hicieron consultas de cardiología en el último mes.
WITH cantidadConsultasCTE
AS (
select  count(*) as cantidad
from	Pacientes pac,
		Turnos tur,
        Profesionales pro
where 	tur.paciente = pac.numeroHistoriaClinica and 
		tur.profesional = pro.numeroMatricula and 
        pro.especialidad = "Cardiologia" and 
        month(tur.fechaAtencion) = month(curdate()) and 
        year(tur.fechaAtencion) = year(curdate())
<<<<<<< HEAD
group by day(tur.fechaAtencion);


-- Version MySql 8.0

WITH cantidadConsultasCTE
AS (
select  count(*) as cantidad
from	Pacientes pac,
		Turnos tur,
        Profesionales pro
where 	tur.paciente = pac.numeroHistoriaClinica and 
		tur.profesional = pro.numeroMatricula and 
        pro.especialidad = "Cardiologia" and 
        month(tur.fechaAtencion) = month(curdate()) and 
        year(tur.fechaAtencion) = year(curdate())
=======
>>>>>>> c4c6bf7140840c364f5c90332f9f7fe859831239
group by day(tur.fechaAtencion)
)

select  avg(cantidad)
<<<<<<< HEAD
from cantidadConsultasCTE	;
=======
from cantidadConsultasCTE	;
>>>>>>> c4c6bf7140840c364f5c90332f9f7fe859831239

-- Listar los nombres, apellidos y especialidad de los médicos que tienen turnos reservados para el 20/12/2019.
Select p.nombre, p.apellido, p.especialidad
From Profesionales p, Turnos t
Where t.profesional=p.numeroMatricula AND t.fechaAsignacion="2019-10-07";

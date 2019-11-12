-- Listar los nombres, apellidos y especialidad de los médicos que tienen turnos reservados para el 20/12/2019.

select  p.nombre, 
        p.apellido, 
        p.especialidad
from    Profesionales p, 
        Turnos t
where   t.profesional=p.numeroMatricula and 
        t.fechaAsignacion="2019-10-07";

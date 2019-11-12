Select p.nombre, p.apellido, p.especialidad
From Profesionales p, Turnos t
Where t.profesional=p.numeroMatricula AND t.fechaAsignacion=2018-12-20;

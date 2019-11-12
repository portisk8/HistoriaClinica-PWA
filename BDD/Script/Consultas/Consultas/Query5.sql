select  p.apellido as apellidoPaciente,
		p.nombre as nombrePaciente,
        pro.apellido as profesionalApellido,
        pro.nombre as profesionalNombre,
        a.laboratorio, 
        a.hora 
from	Analisis a,
		Pacientes p,
        Profesionales pro,
        AtencionMedica am
where	a.paciente = p.numeroHistoriaClinica and
		a.atencionMedicaId = am.atencionMedicaId and 
        am.profesional = pro.numeroMatricula and 
        a.resultado is null;
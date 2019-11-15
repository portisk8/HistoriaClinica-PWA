delimiter //

create PROCEDURE Turnos_Historial (in dni int)
BEGIN

    select      pro.especialidad,
                pro.apellido,
                pro.nombre,
                tur.fechaAsignacion,
                tur.horaAsignacion,
                year(tur.fechaAsignacion) as anioAsignado,
                month(tur.fechaAsignacion) as mesAsignado, 
                day(tur.fechaAsignacion) as diaAsignado,
                tur.horaAtencion,
                if((current_date()> tur.fechaAsignacion or current_date() = tur.fechaAsignacion) 
                        and current_time() > tur.horaAsignacion,"Atendido","No Atendido") as estado
    from        Pacientes pac inner join 
                Turnos tur on 
                pac.numeroHistoriaClinica = tur.paciente  inner join 
                Profesionales pro on 
                tur.profesional = pro.numeroMatricula
    where       pac.numeroDniPaciente = dni;

END


//delimiter ;
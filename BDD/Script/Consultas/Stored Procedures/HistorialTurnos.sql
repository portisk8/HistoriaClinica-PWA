delimiter //

create PROCEDURE HistorialTurnos (in dni int)
BEGIN

    select  pro.especialidad,
            pro.apellido,
            pro.nombre,
            tur.fechaAsignacion,
            tur.horaAsignacion,
            tur.fechaAtencion,
            tur.horaAtencion
    from    Pacientes pac inner join
            Turnos tur on 
            pac.numeroHistoriaClinica = tur.paciente inner join 
            Profesionales pro on 
            tur.profesional = pro.numeroMatricula
    where   pac.numeroDniPaciente = dni;

END


//delimiter ;
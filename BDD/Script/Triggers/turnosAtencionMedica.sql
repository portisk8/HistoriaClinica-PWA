delimiter $$

create trigger TurnosAtencionMedica before insert on Turnos for each row
begin
    if exists(select * from Emergencias e where e.atencionMedicaId = new.atencionMedicaId) then
        insert into Turnos values(new.fechaAsignacion, new.horaAsignacion, new.motivoConsulta, null, new.paciente, new.profesional)
    end if;
    if exists(select * from Analisis a where a.atencionMedicaId = new.atencionMedicaId) then
        insert into Turnos values(new.fechaAsignacion, new.horaAsignacion, new.motivoConsulta, null, new.paciente, new.profesional)
    end if;
    if exists(select * from AtencionMedica a where a.internacionId != null and a.atencionMedicaId = new.atencionMedicaId) then
        insert into Turnos values(new.fechaAsignacion, new.horaAsignacion, new.motivoConsulta, null, new.paciente, new.profesional)
    end if;
end
$$

create trigger TurnosAtencionMedicaU before update on Turnos for each row
begin
    if exists(select * from Emergencias e where e.atencionMedicaId = new.atencionMedicaId) then
        set new.atencionMedicaId = null;
    end if;
    if exists(select * from Analisis a where a.atencionMedicaId = new.atencionMedicaId) then
        set new.atencionMedicaId = null;
    end if;
    if exists(select * from AtencionMedica a where a.internacionId != null and a.atencionMedicaId = new.atencionMedicaId) then
        set new.atencionMedicaId = null;
    end if;
end
$$

delimiter $$

create trigger TurnosAtencionMedica before insert on Turnos for each row
begin
    DECLARE cant integer;
    set cant = (select count(*) from AtencionMedica);
    if exists(select * from Emergencias e where e.atencionMedicaId = new.atencionMedicaId) then
        insert into Turnos values(new.fechaAsignacion, new.horaAsignacion, new.motivoConsulta, cant, new.paciente, new.profesional)
    end if;
    if exists(select * from Analisis a where a.atencionMedicaId = new.atencionMedicaId) then
        insert into Turnos values(new.fechaAsignacion, new.horaAsignacion, new.motivoConsulta, cant, new.paciente, new.profesional)
    end if;
    if exists(select * from AtencionMedica a where a.internacionId is not null and a.atencionMedicaId = new.atencionMedicaId) then
        insert into Turnos values(new.fechaAsignacion, new.horaAsignacion, new.motivoConsulta, cant, new.paciente, new.profesional)
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
    if exists(select * from AtencionMedica a where a.internacionId is not null and a.atencionMedicaId = new.atencionMedicaId) then
        set new.atencionMedicaId = null;
    end if;
end
$$


create trigger TurnosAtencionMedica before insert on Turnos for each row
begin
    if exists(select * from AtencionMedica a where a.internacionId is not null and a.atencionMedicaId = new.atencionMedicaId) then
		set new.idAtencionMedica = (select count(*) + 1 from AtencionMedica);
    end if;
end
$$
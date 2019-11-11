delimiter $$

create trigger EmergenciasAtencionMedica before insert on Emergencias for each row
begin
    if exists(select * from Turnos t where t.atencionMedicaId = new.atencionMedicaId) then
        insert into Emergencias values(new.emergenciaId, new.estado, new.practicaHecha, new.edadAproximada, null, new.paciente, new.fecha, new.hora, new.profesional);
    end if;
    if exists(select * from Analisis a where a.atencionMedicaId = new.atencionMedicaId) then
        insert into Emergencias values(new.emergenciaId, new.estado, new.practicaHecha, new.edadAproximada, null, new.paciente, new.fecha, new.hora, new.profesional);
    end if;
    if exists(select * from AtencionMedica a where a.internacionId != null and a.atencionMedicaId = new.atencionMedicaId) then
        insert into Emergencias values(new.emergenciaId, new.estado, new.practicaHecha, new.edadAproximada, null, new.paciente, new.fecha, new.hora, new.profesional);
    end if;
end
$$

create trigger EmergenciasAtencionMedicaU before update on Emergencias for each row
begin
    if exists(select * from Turnos t where t.atencionMedicaId = new.atencionMedicaId) then
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
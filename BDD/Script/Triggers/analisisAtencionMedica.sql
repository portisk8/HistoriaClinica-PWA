delimiter $$

create trigger AnalisisAtencionMedica before insert on Analisis for each row
begin
    if exists(select * from Turnos t where t.atencionMedicaId = new.atencionMedicaId) then
        insert into Analisis values(new.analisisId, new.laboratorio, new.paciente, new.fecha, null, new.hora, new.resultado);
    end if;
    if exists(select * from Emergencias e where e.atencionMedicaId = new.atencionMedicaId) then
        insert into Analisis values(new.analisisId, new.laboratorio, new.paciente, new.fecha, null, new.hora, new.resultado);
    end if;
    if exists(select * from AtencionMedica a where a.internacionId != null and a.atencionMedicaId = new.atencionMedicaId) then
        insert into Analisis values(new.analisisId, new.laboratorio, new.paciente, new.fecha, null, new.hora, new.resultado);
    end if;
end
$$

create trigger AnalisisAtencionMedicaU before update on Analisis for each row
begin
    if exists(select * from Turnos t where t.atencionMedicaId = new.atencionMedicaId) then
        set new.atencionMedicaId = null; 
    end if;
    if exists(select * from Emergencias e where e.atencionMedicaId = new.atencionMedicaId) then
        set new.atencionMedicaId = null; 
    end if;
    if exists(select * from AtencionMedica a where a.internacionId != null and a.atencionMedicaId = new.atencionMedicaId) then
        set new.atencionMedicaId = null; 
    end if;
end
$$

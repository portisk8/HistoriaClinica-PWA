delimiter $$

create trigger AnalisisAtencionMedica before insert on Analisis for each row
begin
    DECLARE cant integer;
    set cant = (select count(*) from AtencionMedica);
    if exists(select * from Turnos t where t.atencionMedicaId = new.atencionMedicaId) then  
        insert into Analisis values(new.analisisId, new.laboratorio, new.paciente, new.fecha, cant, new.hora, new.resultado);
    end if;
    if exists(select * from Emergencias e where e.atencionMedicaId = new.atencionMedicaId) then
        insert into Analisis values(new.analisisId, new.laboratorio, new.paciente, new.fecha, cant, new.hora, new.resultado);
    end if;
    if exists(select * from AtencionMedica a where a.internacionId is not null and a.atencionMedicaId = new.atencionMedicaId) then
        insert into Analisis values(new.analisisId, new.laboratorio, new.paciente, new.fecha, cant, new.hora, new.resultado);
    end if;
end
$$

create trigger AnalisisAtencionMedicaU before update on Analisis for each row
begin
    DECLARE cant integer;
    set cant = (select count(*) from AtencionMedica);
    if exists(select * from Turnos t where t.atencionMedicaId = new.atencionMedicaId) then
        set new.atencionMedicaId = cant; 
    end if;
    if exists(select * from Emergencias e where e.atencionMedicaId = new.atencionMedicaId) then
        set new.atencionMedicaId = cant; 
    end if;
    if exists(select * from AtencionMedica a where a.internacionId is not null and a.atencionMedicaId = new.atencionMedicaId) then
        set new.atencionMedicaId = cant; 
    end if;
end
$$


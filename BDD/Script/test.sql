

select * from almacenamientos;
select * from atencionmedica;
select * from prescripciones;
insert into prescripciones values (111,899,103, "No Entregado", 10, "Omeprazol", "Mauris Industries");
insert into prescripciones values (112,898,103, "No Entregado", 15, "Simvastina", "Arcu Vestibulum Ante Ltd");
insert into prescripciones values (108,995,103, "No Entregado", 5, "Simvastina", "Arcu Vestibulum Ante Ltd");
insert into prescripciones values (109,992,103, "No Entregado", 20, "Omeprazol", "Mauris Industries");
insert into prescripciones values (110,995,103, "No Entregado", 5, "Simvastina", "Arcu Vestibulum Ante Ltd");
select * from prescripciones where paciente = 103;




create table Turnosjson (jdoc JSON);

insert into Turnosjson values('{"turnoId":"1", "fechaAsignacion": "2019-09-09","horaAsignacion":"12:30:30", "motivo": "fiebre" ,"pacientes": {"nombre": "lolo", "dni":38121661, "domicilio": {"domicioId": 1, "descricpion":"Corrientes", "Departamento": {"deptoId":1, "descripcion":"Corrientes"}} }, "AtencionMedica": {"atId":1, "fecha": "12-12-12", "Profesional": {"numeroMatricula":"12", "nombre": "Pedro", "domicilio": {"domicioId": 1, "descricpion":"Corrientes", "Departamento": {"deptoId":1, "descripcion":"Corrientes"}}}, "diagnostico": {"codigo": "1", "descripcion": "Fiebre Amarilla"}}}');

select * from Turnosjson;

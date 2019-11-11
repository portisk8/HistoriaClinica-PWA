-- generate masive data: https://mockaroo.com/  ---------------------------------------

create database thk14slpww9jdmzo;

use thk14slpww9jdmzo;

-- SCHEMAS -------------------------------------------------------------------------------------------------------

create table Provincias(
	provinciaId int auto_increment,
	descripcionProv varchar(50),
	primary key (provinciaId)
);

create table Departamentos(
    departamentoId int auto_increment,
    descripcionDept varchar(40),
    provincia int not null,
    primary key(departamentoId) 
);

create table Localidades(
    localidadId int auto_increment,
    descripcionLoc varchar(50),
    departamento int not null,
    primary key(localidadId)
);

create table Domicilios(
    domicilioId int auto_increment,
    calle varchar(50),
    numero int,
    localidad int not null,
    primary key(domicilioId)
);

create table Generos(
    descripcionGenero char(1),
    primary key(descripcionGenero)
);

create table ObrasSociales(
    descripcionObraSoc varchar(50),
    primary key(descripcionObraSoc)
);


create table Pacientes(
    numeroHistoriaClinica int,
    numeroDniPaciente int unique,
    nombre varchar(30),
    apellido varchar (30),
    sexo char(1) not null,
    numeroObraSocial int,
    obraSocial varchar (50),
    fechaNacimiento date not null,
    telefono varchar(12) not null,
    domicilio int not null,
    medicoCabecera int,
    primary key(numeroHistoriaClinica)
);

create table TiposMatriculas(
    descripcionTipoMatricula varchar(50),
    primary key (descripcionTipoMatricula)
);

create table Especialidades(
    descripcionEspecialidad varchar(60),
    primary key(descripcionEspecialidad)
);

create table Profesionales(
    numeroDniProfesional int not null unique,
    numeroMatricula int,
    nombre varchar(30),
    apellido varchar(30),
    especialidad varchar(60) not null,
    domicilio int not null,
    sexo char(1) not null,
    tipoMatricula varchar(60) not null,
    primary key (numeroMatricula)
);

create table Turnos(
    fechaAsignacion date not null,
    horaAsignacion time not null,
    motivoConsulta varchar(80),
    atencionMedicaId int unique,
    paciente int not null,
    profesional int not null,
    primary key(fechaAsignacion, horaAsignacion)
);

create table Emergencias(
	emergenciaId int auto_increment,
    estadoIngreso varchar(60) not null,
    practicaHecha varchar(200) not null,
    edadAproximada int,
    atencionMedicaId int unique,
    paciente int,
    fecha date,
    hora time,
    profesional int not null,
    primary key(emergenciaId)
);

create table Laboratorios(
    descripcion varchar(60),
    primary key(descripcion)
);

create table Analisis(
    analisisId int auto_increment,
    laboratorio varchar(60) not null,
    paciente int not null,
    fecha date,
    atencionMedicaId int unique,
    hora time,
    resultado varchar(100),
    primary key (analisisId)
);

create table Internaciones(
    internacionId int auto_increment,
    fechaIngreso date not null,
    horaIngreso time not null,
    fechaSalida date not null,
    horaSalida time not null,
    motivoInternacion varchar(255) not null,
    paciente int not null,
    primary key(internacionId)
);

create table Consultorios(
    codigoConsultorio int,
    descripcionConsultorio varchar(60) not null,
    primary key(codigoConsultorio)
);

create table Droguerias(
    nombre varchar(50),
    telefono varchar(12),
    primary key (nombre)
);

create table Drogas(
    nombreComercial varchar(50),
    formula varchar(60),
    stockMinimo int not null,
    drogueria varchar(50),
    primary key (nombreComercial, drogueria)
);

create table Contratos(
    contratoId int auto_increment,
    fechaInicio datetime,
    fechaFin datetime not null,
    especificaciones varchar(250) not null,
    drogueria varchar(50) not null,
    primary key (contratoId)
);


create table Depositos(
    nombreDeposito varchar(50),
    telefonoInterno varchar(12),
    primary key (nombreDeposito)
);

create table Almacenamientos(
    almacenamientoId int auto_increment,
    fechaAlmacenamiento date not null,
    stockActual int not null,
    droga varchar(50) not null,
    drogueria varchar(50) not null,
    deposito varchar(50) not null,
    primary key (almacenamientoId)
);

create table AtencionMedica(
    atencionMedicaId int auto_increment,
    fechaAtencion date not null,
    horaAtencion time not null,
    duracion time not null,
    consultorio int not null,
    profesional int not null,
    diagnostico int not null,
    internacionId int,
    primary key (atencionMedicaId)   
);

create table Prescripciones(
    prescripcionesId int auto_increment,
    atencionMedica int not null,
    paciente int not null,
    estado varchar(20) not null,
    cantidad varchar(60) not null,
    droga varchar(50) not null,
    drogueria varchar(50) not null,
    primary key(prescripcionesId)
);

create table Usuarios(
    dni int unique,
    username varchar(30),
    pass varchar(255),	
    primary key(dni)
);

create table Diagnosticos(
    codigoDiagnostico int auto_increment,
    descripcion varchar(100),
    primary key(codigoDiagnostico)
);



-- ADD FOREIGN KEY-------------------------------------------------------------------------------------------

alter table Departamentos
add foreign key (provincia)
references Provincias(provinciaId)
on delete cascade on update cascade;

alter table Localidades
add foreign key (departamento)
references Departamentos(departamentoId)
on delete cascade on update cascade;

alter table Domicilios
add foreign key (localidad)
references Localidades (localidadId)
on delete cascade on update cascade;

alter table Pacientes 
add foreign key (medicoCabecera)
references Profesionales (numeroMatricula)
on delete set null on update cascade,
add foreign key (sexo)
references Generos(descripcionGenero)
on update cascade,
add foreign key (domicilio)
references Domicilios (domicilioId)
on update cascade,
add foreign key (obraSocial)
references ObrasSociales (descripcionObraSoc)
on update cascade;

alter table Profesionales
add foreign key (tipoMatricula)
references TiposMatriculas (descripcionTipoMatricula)
on update cascade,
add foreign key (especialidad)
references Especialidades (descripcionEspecialidad)
on update cascade,
add foreign key (domicilio)
references Domicilios(domicilioId)
on update cascade,
add foreign key (sexo)
references Generos(descripcionGenero);

alter table Turnos
add foreign key (paciente)
references Pacientes(numeroHistoriaClinica)
on delete cascade on update cascade,
add foreign key (profesional)
references Profesionales (numeroMatricula)
on delete cascade on update cascade,
add foreign key (atencionMedicaId) 
references AtencionMedica (atencionMedicaId)
on update cascade;

alter table Emergencias
add foreign key (paciente)
references Pacientes (numeroHistoriaClinica)
on delete cascade on update cascade,
add foreign key (profesional)
references Profesionales (numeroMatricula)
on delete cascade on update cascade,
add foreign key (atencionMedicaId) 
references AtencionMedica (atencionMedicaId)
on update cascade;

alter table Analisis
add foreign key (laboratorio)
references Laboratorios (descripcion)
on update cascade,
add foreign key (paciente)
references Pacientes (numeroHistoriaClinica)
on delete cascade on update cascade,
add foreign key (atencionMedicaId) 
references AtencionMedica (atencionMedicaId)
on update cascade;

alter table Internaciones
add foreign key (paciente)
references Pacientes (numeroHistoriaClinica)
on delete cascade on update cascade;

alter table Contratos
add foreign key (drogueria)
references Droguerias (nombre)
on delete cascade on update cascade;

alter table Drogas
add foreign key (drogueria)
references Droguerias (nombre)
on delete cascade on update cascade;


alter table Almacenamientos
add foreign key (droga, drogueria)
references Drogas (nombreComercial, drogueria)
on delete cascade on update cascade,
add foreign key (deposito)
references Depositos (nombreDeposito)
on delete cascade on update cascade;

alter table Prescripciones
add foreign key (atencionMedica)
references AtencionMedica (AtencionMedicaId)
on update cascade,
add foreign key (paciente)
references Pacientes (numeroHistoriaClinica)
on delete cascade on update cascade,
add foreign key (droga, drogueria)
references Drogas (nombreComercial, drogueria)
on update cascade;

alter table AtencionMedica
add foreign key (consultorio)
references Consultorios (codigoConsultorio)
on update cascade,
add foreign key (profesional)
references Profesionales (numeroMatricula)
on update cascade,
add foreign key (diagnostico)
references Diagnosticos (codigoDiagnostico)
on update cascade,
add foreign key (internacionId)
references Internaciones (internacionId)
on update cascade;










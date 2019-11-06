-- generate masive data: https://mockaroo.com/  ---------------------------------------

create database HistoriaClinica;

use HistoriaClinica;

-- SCHEMAS -------------------------------------------------------------------------------------------------------

create table Provincias(
	provinciaId int auto_increment,
	descripcionProv varchar(50),
	primary key (provinciaId)
);

create table Departamentos(
    departamentoId int auto_increment,
    descripcionDept varchar(40),
    provincia int,
    primary key(departamentoId) 
);

create table Localidades(
    localidadId int auto_increment,
    descripcionLoc varchar(50),
    departamento int,
    primary key(localidadId)
);

create table Domicilios(
    domicilioId int auto_increment,
    calle varchar(50),
    numero int,
    localidad int,
    primary key(domicilioId)
);

create table Generos(
    descripcionGenero char(1),
    primary key(descripcionGenero)
);


create table Pacientes(
    numeroHistoriaClinica int,
    numeroDniPaciente int,
    nombre varchar(30),
    apellido varchar (30),
    sexo char(1),
    numeroObraSocial int,
    obraSocial varchar (50),
    fechaNacimiento date,
    telefono double,
    domicilio int,
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
    numeroDniProfesional int,
    numeroMatricula int,
    nombre varchar(30),
    apellido varchar(30),
    especialidad varchar(60),
    domicilio int,
    tipoMatricula varchar(60),
    primary key (numeroMatricula)
);

create table Turnos(
    fechaHoraAsignacion datetime,
    motivoConsulta varchar(80),
    paciente int,
    profesional int,
    primary key(paciente, fechaHoraAsignacion)
);

create table Emergencias(
    estadoIngreso varchar(60),
    practicaHecha varchar(200),
    edadAproximada int,
    paciente int,
    fechaYhora datetime,
    profesional int,
    primary key(profesional, fechaYhora)
);

create table Laboratorios(
    descripcionLaboratorio varchar(60),
    primary key(descripcionLaboratorio)
);

create table Analisis(
    laboratorio varchar(60),
    paciente int,
    fechaYhora datetime,
    primary key (paciente, fechaYhora)
);

create table Internaciones(
    fechaIngreso datetime,
    motivoInternacion varchar(100),
    paciente int,
    primary key(paciente, fechaIngreso)
);

create table Consultorios(
    codigoConsultorio int,
    descripcionConsultorio varchar(60),
    primary key(codigoConsultorio)
);

create table Droguerias(
    nombre varchar(50),
    telefono double,
    primary key (nombre)
);

create table Drogas(
    nombreComercial varchar(50),
    formula varchar(60),
    drogueria varchar(50),
    primary key (nombreComercial, drogueria)
);

create table Contratos(
    fechaInicio datetime,
    fechaFin datetime,
    especificaciones varchar(250),
    drogueria varchar(50),
    primary key (drogueria, fechaInicio)
);


create table Depositos(
    nombreDeposito varchar(50),
    telefonoInterno double,
    primary key (nombreDeposito)
);

create table Almacenamientos(
    fechaAlmacenamiento date,
    stock int,
    droga varchar(50),
    drogueria varchar(50),
    deposito varchar(50),
    primary key (droga, drogueria, deposito, fechaAlmacenamiento)
);

create table AtencionMedica(
    fechaYhora datetime,
    duracion time,
    diagnostico varchar(500),
    consultorio int,
    profesional int,
    fechaAsignacionTurno datetime,
    pacienteTurno int,
    profesionalEmergencia int,
    fechaEmergencia datetime,
    pacienteInternacion int,
    fechaIngresoInternacion datetime,
    pacienteAnalisis int,
    fechaAnalisis datetime,
    primary key (profesional, fechaYhora)   
);

create table Prescripciones(
    fechaAtencionMedica datetime,
	profesionalAtencionMedica int,
    cantidad varchar(60),
    paciente int,
    droga varchar(50),
    drogueria varchar(50),
    primary key(profesionalAtencionMedica, fechaAtencionMedica)
);



-- ADD FOREIGN KEY-------------------------------------------------------------------------------------------

alter table Departamentos
add foreign key (provincia)
references Provincias(provinciaId);

alter table Localidades
add foreign key (departamento)
references Departamentos(departamentoId);

alter table Domicilios
add foreign key (localidad)
references Localidades (localidadId);

alter table Pacientes 
add foreign key (medicoCabecera)
references Profesionales (numeroMatricula),
add foreign key (sexo)
references Generos(descripcionGenero),
add foreign key (domicilio)
references Domicilios (domicilioId);

alter table Profesionales
add foreign key (tipoMatricula)
references TiposMatriculas (descripcionTipoMatricula),
add foreign key (especialidad)
references Especialidades (descripcionEspecialidad),
add foreign key (domicilio)
references Domicilios(domicilioId);

alter table Turnos
add foreign key (paciente)
references Pacientes(numeroHistoriaClinica),
add foreign key (profesional)
references Profesionales (numeroMatricula);

alter table Emergencias
add foreign key (paciente)
references Pacientes (numeroHistoriaClinica),
add foreign key (profesional)
references Profesionales (numeroMatricula);

alter table Analisis
add foreign key (laboratorio)
references Laboratorios (descripcionLaboratorio),
add foreign key (paciente)
references Pacientes (numeroHistoriaClinica);

alter table Internaciones
add foreign key (paciente)
references Pacientes (numeroHistoriaClinica);

alter table Contratos
add foreign key (drogueria)
references Droguerias (nombre);

alter table Drogas
add foreign key (drogueria)
references Droguerias (nombre);

alter table Almacenamientos
add foreign key (droga, drogueria)
references Drogas (nombreComercial, drogueria),
add foreign key (deposito)
references Depositos (nombreDeposito);

alter table Prescripciones
add foreign key (profesionalAtencionMedica, fechaAtencionMedica)
references AtencionMedica (profesional, fechaYhora),
add foreign key (paciente)
references Pacientes (numeroHistoriaClinica),
add foreign key (droga, drogueria)
references Drogas (nombreComercial, drogueria);

alter table AtencionMedica
add foreign key (consultorio)
references Consultorios (codigoConsultorio),
add foreign key (profesional)
references Profesionales (numeroMatricula),
add foreign key (pacienteTurno, fechaAsignacionTurno)
references Turnos (paciente, fechaHoraAsignacion),
add foreign key (profesionalEmergencia, fechaEmergencia)
references Emergencias (profesional, fechaYhora),
add foreign key (pacienteInternacion, fechaIngresoInternacion)
references Internaciones (paciente, fechaIngreso),
add foreign key (pacienteAnalisis, fechaAnalisis)
references Analisis (paciente, fechaYhora);







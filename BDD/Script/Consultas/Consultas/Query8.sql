-- Query 8

-- Porcentaje total de pacienes atendidos en emergencias que no tienen domicilio en Chaco.

select concat((( SinChaco.TotalPacientesSinChaco * 100)/Total.TotalPacientes ),"%") as PorcentajePacientesSinChaco
from (	select 	count(*) as TotalPacientes
		from 	Emergencias eme ,Pacientes pac
		where 	eme.paciente = pac.numeroHistoriaClinica
				) as Total,
	(	select 	count(*) as TotalPacientesSinChaco
		from 	Emergencias eme, 
                Pacientes pac, 
                Domicilios dom , 
                Localidades loc ,
                Departamentos dep, 
                Provincias pro
		where 	eme.paciente = pac.numeroHistoriaClinica and
				pac.domicilio = dom.domicilioId and
				dom.localidad = loc.localidadId and
				loc.departamento = dep.departamentoId and
				dep.provincia = pro.provinciaId and pro.provinciaId not in
																	(	select pro.provinciaId
																		from	thk14slpww9jdmzo.Provincias pro
																		where	pro.descripcionProv = "CHACO") ) as SinChaco;

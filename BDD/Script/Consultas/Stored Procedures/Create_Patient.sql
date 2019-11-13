
DELIMITER $$
 
CREATE PROCEDURE Create_Patient (
    IN  dniP int,
    IN  nombreP varchar(30),
    IN  apellidoP varchar(30)
)
BEGIN
	
		declare nHC int default 0;
        declare nOS int default 0;
        set nHC = ((select count(*) from Pacientes) + 1);
        set nOS = ((select count(*) from Pacientes) + 7000);
		INSERT INTO `Pacientes` (`numeroHistoriaClinica`,`numeroDniPaciente`,`nombre`, `apellido`, `sexo`,`obraSocial`, `numeroObraSocial`, `fechaNacimiento`, `telefono`, `domicilio`, `medicoCabecera`) VALUES
		(nHC, dniP, nombreP, apellidoP, "M", "Cosecha Salud", nOS, "1994-07-09", "12345678", 90, 10000);
  
END$$
 
DELIMITER ;

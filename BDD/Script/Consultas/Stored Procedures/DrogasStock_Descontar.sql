DELIMITER $$
 
CREATE PROCEDURE DrogasStock_Descontar (
    IN  droga varchar(50),
    IN  drogueria varchar(50),
    IN  cantidad int
)
BEGIN
	update Almacenamientos a set a.stockActual = (a.stockActual - cantidad) where a.droga = droga and a.drogueria = drogueria;
END$$
 
DELIMITER ;
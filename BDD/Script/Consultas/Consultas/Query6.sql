-- Listar las drogas cuyos proveedores tienen contratos que vences antes de fin de año.

select distinct d.nombreComercial 
from    Drogas d, 
        Droguerias dro, 
        Contratos c
where   d.drogueria = dro.nombre and 
        dro.nombre = c.drogueria and 
        (c.fechaFin < "2019-12-31 23:59:59" or c.fechaFin = "2019-12-31 23:59:59");

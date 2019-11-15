-- Query 4

-- Listar las drogas que están por debajo de su stock mínimo.

select  d.nombreComercial
from    Drogas d, (  
                    select  sum(a.stockActual) as stockActual, 
                            a.droga as droga, 
                            a.drogueria as drogueria
					from    Almacenamientos a
				    group by a.droga
                ) as a
where   d.drogueria=a.drogueria and
        d.nombreComercial=a.droga and 
        d.stockMinimo > a.stockActual;

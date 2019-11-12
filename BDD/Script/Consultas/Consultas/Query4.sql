Select d.nombreComercial
From Drogas d	, (
                    
                    select sum(a.stockActual) as stockActual, a.droga as droga, a.drogueria as drogueria
					from Almacenamientos a
				    group by a.droga
                
                ) as a
Where  d.drogueria=a.drogueria AND d.nombreComercial=a.droga and d.stockMinimo > a.stockActual;

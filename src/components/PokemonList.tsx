import { DataTable, DataTableStateEvent } from "primereact/datatable"
import { useEffect, useRef, useState } from "react";
import { usePokeList } from "../hooks/usePokeList";
import { Toast } from "primereact/toast";
import { Column } from "primereact/column";

export const PokemonList = ({ onSelectPokemon }) => {

    const toast = useRef<Toast>(null)
    
    const [stateTable, setStateTable] = useState({ offset: 0, limit: 5 });
    const { offset, limit } =  stateTable;

    const { data, error, loading, message } = usePokeList(offset, limit);
    
    const changePage = (event: DataTableStateEvent) => {
        const page = event.page! * event.rows;
        setStateTable({ offset: page, limit: event.rows });
    }

    useEffect(() => {
        if(error) toast.current!.show({ severity: 'error', summary: 'Error', detail: message });
    }, [error]);
    
    return (
        <>
            <div className="w-full">
                <DataTable 
                    paginator
                    value={data?.results ?? []}
                    first={ offset }
                    rows={limit}
                    totalRecords={ data?.count ?? 0 }
                    lazy currentPageReportTemplate="{ first } to { last } of { totalRecords }"
                    loading={ loading }
                    selectionMode='single' onSelectionChange={e => onSelectPokemon(e.value.name)}
                    onPage={changePage}
                    rowsPerPageOptions={[ 5, 15, 20 ]} >
                        <Column field="name" header="Name Pokemon" />
                </DataTable>
            </div>

            <Toast ref={toast} />
        </>
    )
}


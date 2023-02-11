import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Column 1', width: 150 },
  { field: 'url', headerName: 'Column 2', width: 150 },
];


const PokemonGrid: React.FC<Props> = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  
  return (
    <div>
        <DataGrid
          rows={pokemons}
          getRowId={(row) =>  row.url + row.name}
          columns={columns}
           options={{
             paging: {
               enabled: true,
               pageSize: 10,
             },
           }}
           onRowClick={(row) => {
            router.push({
              pathname: '/pokemon',
              query: { url: row.url },
            });
          }}
         />
      </div>
  );
};

export default PokemonGrid;

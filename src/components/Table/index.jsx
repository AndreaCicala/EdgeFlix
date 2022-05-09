import { DataGrid } from '@mui/x-data-grid';
import styles from "./style.module.scss";

function DataTable(props) {

    console.log(props.movies)

const columns = [
  { field: 'Season', headerName: 'Season(s)', width: 250 },
  { field: 'Episodes Count', headerName: 'Episodes Count', width: 100 },
];


  return (
    <div style={{ height: 400, width: '30%' }}>
      <DataGrid
        rows={''}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

export default DataTable;
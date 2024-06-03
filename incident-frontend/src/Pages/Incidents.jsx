import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'title',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'description',
    width: 150,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'status',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'assigned',
    headerName: 'assigned',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

export default function Incidents() {
  const [rows, setRows] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();



  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/incidents")
      .then((response) => response.json())
      .then((incidents) => {
        setRows(incidents)
      })
      .catch((err) => console.log(err));
  }, [])
  const gotoform = () => {
    document.location.href = '/add-incidents';
  }
  const handleDelete = (id) => {
    console.log(id)
    fetch(`http://127.0.0.1:8000/api/incidents/delete/${id}`, {
      method: 'DELETE'
    })
    .then((response) => {
      if (response.ok) {

        setRows(rows.filter(row => row.id !== id));
        setShowAlert(true);
        navigate('/incidents')

        setTimeout(()=>{

          setShowAlert(false);
        },1000)
      } else {
        throw new Error('Failed to delete incident');
      }
    })
    .catch((error) => {
      console.error('Error deleting incident:', error);
    });
  };
  
  
  return (
    <>
    <div></div>
      <div className='container mx-auto px-6'>
      {showAlert && (
              <Alert severity="error">This incident has deleted .</Alert>
        )}


        <div className='flex justify-end'>
          <a
            className="inline-block rounded bg-indigo-500 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-900 mt-[25px] mr-[70px]"
            href="/add-incidents"
          >
            Add Incident
          </a>

        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-500  bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Title</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Description</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Affected Person</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {
                rows.map((incident, index) => (
                  <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{incident.title}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{incident.description}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{incident.affected_person}</td>
                <td className={`
                ${incident.status =="Paused"?"bg-red-100":""}
                ${incident.status =="In progress"?"bg-yellow-100":""}
                ${incident.status =="Completed"?"bg-green-100":""}
                whitespace-nowrap px-4 py-2 text-gray-700`}>
                  {incident.status}
                  </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <div className="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">

                  <Link to={`/edit-incidents/${incident.id}`}
  className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
    />
  </svg>
  Edit
</Link>


<button
  className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative"
  onClick={() => handleDelete(incident.id)}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    />
  </svg>
  Delete
</button>

                  </div>
                </td>
              </tr>
            ))
              }
              

            </tbody>
          </table>
        </div>
      </div>
      
    </>



  );
}





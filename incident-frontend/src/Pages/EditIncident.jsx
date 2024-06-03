import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Sheet from '@mui/joy/Sheet';
import Done from '@mui/icons-material/Done';

const EditIncident = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [incident, setIncident] = useState({
    title: '',
    description: '',
    affected_person: '',
    status: ''
    });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);



  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/incidents/${id}`)
      .then(response => response.json())
      .then(data => {
        setIncident(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setIncident({ ...incident, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    // console.table({
    //   data
    // });
    fetch(`http://127.0.0.1:8000/api/incidents/update/${id}`, {

        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.get('title'),
          description: data.get('description'),
          affected_person: data.get('affected_person'),
          status: data.get('status'),
        }),
    })
    .then((response) => response.json())
    .then((reponse) => {
      setShowAlert(true);
        setTimeout(()=>{

          setShowAlert(false);
        },1000)
    })
    .catch((err) => console.log(err));
  };


  // const handleSubmit = (e) => {
  //   console.log(incident)
  //   e.preventDefault();
  //   fetch(`http://127.0.0.1:8000/api/incidents/update/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(incident)
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         setShowAlert(true);
  //         setTimeout(() => {
  //           navigate('/');
  //         }, 2000);
  //       } else {
  //         throw new Error('Failed to update incident');
  //       }
  //     })
  //     .catch(error => console.error('Error:', error));
  // };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading incident: {error.message}</div>;

  return (
   <Container maxWidth="sm" >
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>Edit Incident</Typography>
        {showAlert && (
          <Alert severity="success">Incident updated successfully!</Alert>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            name="title"
            value={incident.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Description"
            name="description"
            value={incident.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Affected Person"
            name="affected_person"
            value={incident.affected_person}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />

<div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="Option1"
                    className="focus:outline-none ring-2 ring-black ring-inset block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabIndex="0"
                  >
                    <input className="sr-only" id="Option1" type="radio" tabIndex="-1" name="status" value="In progress" />

                    <span className="text-sm"> In progress </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="Option2"
                    className="focus:outline-none ring-2 ring-black ring-inset block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabIndex="0"
                  >
                    <input className="sr-only" id="Option2" type="radio" tabIndex="-1" name="status" value="Paused" />

                    <span className="text-sm"> Paused </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="Option3"
                    className="focus:outline-none ring-2 ring-black ring-inset block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabIndex="0"
                  >
                    <input className="sr-only" id="Option3" type="radio" tabIndex="-1" name="status" value="Completed"/>

                    <span className="text-sm">Completed</span>
                  </label>
                </div>
              </div>

          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
            Update Incident
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default EditIncident;

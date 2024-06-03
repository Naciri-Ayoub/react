import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
// import * as React from 'react';
import Switch from '@mui/material/Switch';
// select
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Diversity2Icon from '@mui/icons-material/Diversity2';
// import backgroundImage from './path-to-your-image.jpg'; // Make sure to provide the correct path
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Ayoub & Ilyass
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Store() {
  const navigate = useNavigate();
  const [showAlert, setshowAlert] = React.useState(false);
  // select
  const [status, setStatus] = React.useState('');

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    // console.table({
    //   data
    // });
    fetch("http://127.0.0.1:8000/api/incidents/store", {
        method: "POST",
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
        setshowAlert(true);
        setTimeout(()=>{
            setshowAlert(false);
            navigate('/incidents')

        },1000)
    })
    .catch((err) => console.log(err));
  };

   return (

    <section className="bg-gray-100 ">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
            "Our website provides a secure platform for lodging complaints regarding accidents, allowing individuals to easily submit their grievances and find effective solutions, while ensuring fair and transparent service for all users."
            </p>

            <div className="mt-8">
              <a href="#" className="text-2xl font-bold text-pink-500 -600"> +212 638461713 </a>

              <address className="mt-2 not-italic">City Agadir, Hay Dakhla, Block 11 CA 58517</address>
            </div>
          </div>

          <div className="rounded-lg bg-red-200 p-8 shadow-lg lg:col-span-3 lg:p-12">
          { showAlert && (
                    <div role="alert" className="rounded-xl border border-gray-100 p-4   bg-green-100">
                    <div className="flex items-start gap-4">
                      <span className="text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
        
                      <div className="flex-1">
                        <strong className="block font-medium text-gray-900 text-[12px]"> Changes saved </strong>
        
                        <p className="mt-1 text-sm text-gray-700 text-[12px]">Your product changes have been saved.</p>
                      </div>
        
                      <button className="text-gray-500 transition hover:text-gray-600">
                        <span className="sr-only">Dismiss popup</span>
        
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                    )

                }
          
            <form action="#" className="space-y-4 mt-3" onSubmit={handleSubmit}>
              <div>
                <label className="sr-only" htmlFor="name">Title</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none ring-2 ring-black ring-inset"
                  placeholder="Title"
                  type="text"
                  id="title" name="title"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="affected_person">Affected Person</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none ring-2 ring-black ring-inset"
                    placeholder="Affected Person"
                    type="text"
                    id="affected_person"
                    name="affected_person"
                  />
                </div>

              </div>
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
                    <input className="sr-only" id="Option3" type="radio" tabIndex="-1" name="status" value="resolved"/>

                    <span className="text-sm">Completed</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="description">Description</label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none ring-2 ring-black ring-inset"
                  placeholder="Description"
                  rows="8"
                  id="description"
                  name="description"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Create 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
   );
}

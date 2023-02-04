import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BasePage from "./base";
import { Button} from '@mui/material';




const AddStudentPage=({ studentsData,setStudentsData})=>{

    const history = useHistory();
    const {id} = useParams();
   
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");
    const [house, setHouse] = useState("");
    const [dob, setDob] = useState("");
    const [wand, setWand] = useState("");
    const [image, setImage] = useState("");

    const addStudentData= async (event)=>{
event.preventDefault()
      try {
        const newStudent={
          
          name,
          species,
          gender,
          house,
          birth:dob,
          wand,
          image
          
        }
        const response=await fetch("https://63ae58f2ceaabafcf177e2b6.mockapi.io/Student",{
          method:"POST",
          body:JSON.stringify(newStudent),
          headers:{
            "Content-Type":"application/json"
          }
        });
        const student=await response.json();
        console.log(student)
        setStudentsData([...studentsData,student])
  
        history.push("/students")
      } catch (error) {
        console.log("error")
      }

      
    }
    
    return(
        <BasePage
        title="Add Student Data"
        description="This page is to add New Student Data">
        
            
<div className="input-section">
     
        
    
     <TextField 
     fullWidth 
     label="Enter the Name"
     onChange={(event)=>setName(event.target.value)}
     value= {name}
      id="fullWidth" />

     <TextField 
     fullWidth 
     label="Enter the Species"
     onChange={(event)=>setSpecies(event.target.value)}
     value = {species}
      id="fullWidth" />

     <TextField 
     fullWidth 
     label="Enter the Gender"
     onChange={(event)=>setGender(event.target.value)}
     value = {gender}
      id="fullWidth" />

     <TextField 
     fullWidth 
     label="Enter the House"
     onChange={(event)=>setHouse(event.target.value)}
     value = {house}
      id="fullWidth" />

<TextField 
     fullWidth 
     label="Enter Date of Birth"
     onChange={(event)=>setDob(event.target.value)}
     value = {dob}
      id="fullWidth" />

<TextField 
     fullWidth 
     label="Enter the Wand Type"
     onChange={(event)=>setWand(event.target.value)}
     value = {wand}
      id="fullWidth" />

<TextField 
     fullWidth 
     label="Enter a Image"
     onChange={(event)=>setImage(event.target.value)}
     value = {image}
      id="fullWidth" />
 
        <Button
          className="add-btn"
          color="secondary"
          variant="contained"
          onClick={addStudentData }
        >
          Update Data
        </Button>
        </div>
        
        </BasePage>
    )
}

export default AddStudentPage
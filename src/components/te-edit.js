import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BasePage from "./base";
import { Button, TextField } from '@mui/material';

const EditStaff=({staffsData,setStaffsData})=>{
    const history=useHistory();
    const {id}=useParams();
    const staff=staffsData[id];
    const [editId, setEditId] = useState("");
    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");
    const [house, setHouse] = useState("");
    const [dob, setDob] = useState("");
    const [wand, setWand] = useState("");
    const [image, setImage] = useState("");

    useEffect(()=>{
        setEditId(staff.id);
    setIdx(staff.id)
    setName(staff.name)
    setSpecies(staff.species)
    setGender(staff.gender)
    setHouse(staff.house)
    setDob(staff.birth)
    setWand(staff.wand)
    setImage(staff.image)
    },[])

    const updateStaff=async ()=>{

        try {
            

            let updatedStaff={
                id,
                name,
                species,
                gender,
                house,
                birth:dob,
                wand,
                image
            }
    
            const response=await fetch(`https://63ae58f2ceaabafcf177e2b6.mockapi.io/Staffs/${editId}`,{
                method:"PUT",
                body:JSON.stringify(updatedStaff),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            const data=await response.json();

            const staffIndex=staffsData.findIndex((staff)=>staff.id===editId)
            staffsData[staffIndex]=data;
    
            setStaffsData([...staffsData])
    
            setEditId("");
        setIdx("")
        setName("")
        setSpecies("")
        setGender("")
        setHouse("")
        setDob("")
        setWand("")
        setImage("")
        history.push("/staffs") 
        } catch (error) {
            console.log("error")
        }
        
    }

    return(
        <BasePage
        title = "Edit A Student"
        description= "You can a Edit a student data here"
        >
        
<div className="input-section">
     
        
     <TextField 
     fullWidth label="Enter the id" 
     onChange={(event)=>setIdx(event.target.value)}
     value = {idx}
     id="fullWidth" />

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
         onClick={updateStaff}
        >
          Update
        </Button>


   </div>

        </BasePage>
    )
}



export default EditStaff
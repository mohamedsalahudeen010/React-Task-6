import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BasePage from "./base";
import Card from 'react-bootstrap/Card';

const ViewStaff=({staffsData,setStaffsData})=>{
   
    
    const {id}=useParams();
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");
    const [house, setHouse] = useState("");
    const [dob, setDob] = useState("");
    const [wand, setWand] = useState("");
    const [image, setImage] = useState("");

    const staff=staffsData[id];
    useEffect(()=>{

     
        setName(staff.name)
        setSpecies(staff.species)
        setGender(staff.gender)
        setHouse(staff.house)
        setDob(staff.dateOfBirth)
        setWand(staff.wand)
        setImage(staff.image)
    },[])

    





    return(
            <BasePage
             title = "Staff Profile"
            description= "here we have full staff details"
        >
    
            
    <div className="card-view">
                                  <Card.Img variant="top"className="img" src={image} />
                                  <Card.Body style={{padding:"0.5rem"}}>
                                    <Card.Title style={{padding:"0.5rem"}}>{name}</Card.Title>
                                    <Card.Title style={{padding:"0.5rem"}}> Species : {species}</Card.Title>
                                    <Card.Title style={{padding:"0.5rem"}}> Gender : {gender}</Card.Title>
                                    <Card.Title style={{padding:"0.5rem"}}> House: {house}</Card.Title>
                                    <Card.Title style={{padding:"0.5rem"}}> Date of Birth : {dob}</Card.Title>
                                    <Card.Title style={{padding:"0.5rem"}}>Wand Type : {wand}</Card.Title>
                                  </Card.Body>
                                </div>
     
            </BasePage>
    
    
        )
    }
    

export default ViewStaff

import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BasePage from "./base";
import Card from 'react-bootstrap/Card';


const ViewStudent=({studentsData, setStudentsData})=>{
    const history=useHistory();
    const {id}=useParams();
    const [editId, setEditId] = useState("");
    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");
    const [house, setHouse] = useState("");
    const [dob, setDob] = useState("");
    const [wand, setWand] = useState("");
    const [image, setImage] = useState("");

    const studentData=studentsData[id];
    useEffect(()=>{

        setEditId(studentData.id);
        setIdx(studentData.id)
        setName(studentData.name)
        setSpecies(studentData.species)
        setGender(studentData.gender)
        setHouse(studentData.house)
        setDob(studentData.birth)
        setWand(studentData.wand)
        setImage(studentData.image)
    },[])


    // const viewStudent=()=>{
    //     const studentData=studentsData[id];

    // setEditId(studentData.id);
    // setIdx(studentData.id)
    // setName(studentData.name)
    // setSpecies(studentData.species)
    // setGender(studentData.gender)
    // setHouse(studentData.house)
    // setDob(studentData.dateOfBirth)
    // setWand(studentData.wand)
    // setImage(studentData.image)
    // }
  
    // viewStudent();
    return(
        <BasePage
         title = "Student Profile"
        description= "here we have full student details"
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


export default ViewStudent
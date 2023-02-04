import React, { useState ,useEffect} from "react"
import './App.css';
import StudentsList from "./components/students";
import StaffList from "./components/staffList";
import WelcomePage from "./components/WelcomePage";
import EditStudent from "./components/s-editStudent";
import EditStaff from "./components/te-edit";
import AddStudentPage from "./components/S.addStudent";
import { Route, Switch } from "react-router-dom";
import { studentData } from "./data/studentsData";
import { staffData } from "./data/staffData";
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewStaff from "./components/v.teacher";
import ViewStudent from "./components/v.student";
import NoPage from "./components/noPage";
import AddStaffPage from "./components/T.addStafs";
import AuthPage from "./components/authPage";


function App() {
  const [studentsData,setStudentsData]=useState([]);
  const [staffsData,setStaffsData]=useState([]);

  
useEffect(()=>{
const getStudents= async ()=>{
  try {
    const response= await fetch("https://63ae58f2ceaabafcf177e2b6.mockapi.io/Student",{
      method:"GET"
    })
    const studentData=await response.json();
    setStudentsData(studentData)
  } catch (error) {
    console.log("error")
  }
}

const getStaffs= async ()=>{
  try {
    const response= await fetch("https://63ae58f2ceaabafcf177e2b6.mockapi.io/Staffs",{
      method:"GET"
    })
    const staffData=await response.json();
    setStaffsData(staffData)
  } catch (error) {
    console.log("error")
  }
}
getStaffs();


getStudents();

},[])
  return (
    <div className="App">
     <Switch>

      <Route exact path="/">
      <AuthPage/>
      </Route>

      <Route path="/home">
      <WelcomePage/>
      </Route>

      <Route path="/students">
      <StudentsList
      studentsData={studentsData}
      setStudentsData={setStudentsData}
      />
      </Route>
      
      <Route path="/staffs">
      <StaffList
      staffsData={staffsData}
      setStaffsData={setStaffsData}/>
      </Route>

      <Route path="/edit-student/:id">
      <EditStudent
       studentsData={studentsData}
       setStudentsData={setStudentsData}/>
      </Route>

      <Route path="/edit-staff/:id">
      <EditStaff
      staffsData={staffsData}
      setStaffsData={setStaffsData} />
      </Route>

      <Route path="/view-student/:id">
      <ViewStudent
       studentsData={studentsData}
       setStudentsData={setStudentsData}/>
      </Route>

      <Route path="/view-staff/:id">
      <ViewStaff
      staffsData={staffsData}
      setStaffsData={setStaffsData} />
      </Route>

      <Route path="/add-student">
      <AddStudentPage
      studentsData={studentsData}
      setStudentsData={setStudentsData}
       />
      </Route>

      <Route path="/add-staff">
      <AddStaffPage
      staffsData={staffsData}
      setStaffsData={setStaffsData} />
      </Route>

      <Route path="**">
      <NoPage></NoPage>
      </Route>
     </Switch>
      
      
      
    </div>
  );
}

export default App;

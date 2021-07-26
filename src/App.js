import React, { useState, useEffect } from "react";
import PaginationPage from "./Pageination";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const Api = async () => {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const resdata = await response.json();
    setUsers(resdata.data);
    console.log(resdata.data);
  };
  const getdata1 = () => {
    setPage(1);
  };
  const getdata2 = () => {
    setPage(2);
  };
  const getdata3 = () => {
    setPage(3);
    alert("No Users on Page 3");
  };
  const getdata4 = () => {
    setPage(4);
    alert("No Users on Page 4");
  };
  const getdata5 = () => {
    setPage(5);
    alert("No Users on Page 5");
  };
  useEffect(() => {
    Api();
  }, [page]);
  return (
    <>
      <div className="text-center design">
        <h2>List of Users</h2>
        <div>
          <div className="row justify-content-center text-center">
            {users.map((curE) => {
              return (
                <MDBCard className="m-5" style={{ maxWidth: "23rem" }}>
                  <MDBCardBody>
                    <MDBCardImage src={curE.avatar} position="top" alt="..." />
                    <MDBCardTitle>First Name:{curE.first_name}</MDBCardTitle>
                    <MDBCardTitle>Last Name:{curE.last_name}</MDBCardTitle>
                    <MDBCardTitle>Email:{curE.email}</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              );
            })}
          </div>
        </div>

        <PaginationPage
          data1={getdata1}
          data2={getdata2}
          data3={getdata3}
          data4={getdata4}
          data5={getdata5}
        />
      </div>
    </>
  );
};

export default App;

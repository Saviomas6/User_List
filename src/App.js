import React, { useState, useEffect } from "react";
import PaginationPage from "./Pageination";
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
      <div className="design">
        <h2>List of Users</h2>
        <div className="container-fluid mt-2">
          <div className="row text-center">
            {users.map((curE) => {
              return (
                <div className="col-12 col-md-6  mt-5" key={curE.id}>
                  <div className="card p-2">
                    <div className="d-flex align-items-center">
                      <div className="image">
                        <img
                          src={curE.avatar}
                          className="rounded"
                          width="155"
                          alt="users"
                        />
                        <div className="ml-3 w-100">
                          <h4 className="mb-0 mt-0 textLeft">
                            First Name:{curE.first_name}
                          </h4>
                          <h4 className="mb-0 mt-0 textLeft">
                            Last Name:{curE.last_name}
                          </h4>
                          <h4 className="mb-0 mt-0 textLeft">
                            Email:{curE.email}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <br />
      <div>
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

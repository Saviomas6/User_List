import React from "react";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow,
} from "mdbreact";

const PaginationPage = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <MDBRow>
        <MDBCol>
          <MDBPagination>
            <MDBPageItem>
              <MDBPageNav className="page-link" onClick={props.data1}>
                1
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link" onClick={props.data2}>
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link" onClick={props.data3}>
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link" onClick={props.data4}>
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link" onClick={props.data5}>
                5
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default PaginationPage;

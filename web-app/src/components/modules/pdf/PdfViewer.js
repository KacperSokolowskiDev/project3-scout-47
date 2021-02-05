import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJmaXJzdG5hbWUiOiJQaWVycmUiLCJsYXN0bmFtZSI6IkdpZGRpb0Jhc3RpYSIsImVtYWlsIjoicGllcnJlZ2lkZGlvc2Nvb3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkYXJnb24yaSR2PTE5JG09NDA5Nix0PTMscD0xJDRKdTdWNWl1eFY3V3FabGNHckQwNzFaWG5qa0hWeVVRMTFjRG5wcUJoMmckL2g2d1hpVlNid0Q2TFNYNjRKOVlQSkhqT2lzbncxU1JZVm1aMGNVSFlXMCIsInRlbGVwaG9uZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMS0wMS0zMCIsInVwZGF0ZWRBdCI6IjIwMjEtMDEtMzAiLCJQcml2aWxlZ2UiOnsiaWQiOjQsInJvbGUiOiJzY291dCIsImFnZUdyYWRlIjpbMjAwNSwyMDA0XSwiY3JlYXRlZEF0IjoiMjAyMS0wMS0zMCIsInVwZGF0ZWRBdCI6IjIwMjEtMDEtMzAiLCJVc2VySWQiOjR9fSwiaWF0IjoxNjEyMDgzNzk0LCJleHAiOjE2MTIxMDUzOTR9.9DwGbg8tT-ZetZhYAzCAa8f0XSvSd0VTL6yB_uqZ6LQ`
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJmaXJzdG5hbWUiOiJQaWVycmUiLCJsYXN0bmFtZSI6IkdpZGRpbyIsImVtYWlsIjoicGdAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkYXJnb24yaSR2PTE5JG09NDA5Nix0PTMscD0xJEJRZndldHVqM2J0YS81ZzNKUmJTSHFSelN5dXFPVFpYdXRQYTB3Vk80MVUkcjQwS0UycXVCck5hcWYydUZycVJTRjVVK1NYRzRyYUxmdXN1MGVFekZSZyIsInRlbGVwaG9uZSI6MTIzNDUsImNyZWF0ZWRBdCI6IjIwMjEtMDItMDQiLCJ1cGRhdGVkQXQiOiIyMDIxLTAyLTA0IiwiUHJpdmlsZWdlIjp7ImlkIjo0LCJyb2xlIjoibWFuYWdlciIsImFnZUdyYWRlIjpbIioiXSwiY3JlYXRlZEF0IjoiMjAyMS0wMi0wNCIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMDQiLCJVc2VySWQiOjR9fSwiaWF0IjoxNjEyNDUwNzk4LCJleHAiOjE2MTI0NzIzOTh9.xXcBvP66lgTOzPYXDdZoqgAQRMKxkQLGyM76AEU4rHA`;

// import colors from '../utils/colors';
const colors = {
  menu: "#43425D",
  menuSelect: "#00000024",
  menuSelectBorder: "#6C63FF",
  buttons: "#6C63FF",
  videospaceBackground: "rgb(240, 240, 240)",
  freeSlot: "#6C63FF",
  pendingSlot: "#6c63ff42",
  pendingStatusBackground: "rgb(253, 245, 232)",
  approvedStatusBackground: "rgb(230, 249, 238)",
  profileShadows: "#6c63ff42",
  chatMe: "#6c63ff42",
  chatOther: "rgb(230, 230, 230)",
  chatDisabled: "rgb(200, 200, 200)",
  lessonSlot: "#43425D",
  pageTitleText: "rgb(90, 90, 110)",
  subTitleText: "rgb(90, 90, 110)",
  dashboardBorder: "rgb(230, 230, 230)",
  contactsBorder: "rgb(230, 230, 230)",
  contactHover: "rgb(245, 245, 245)",
  contactSelected: "rgb(230, 230, 230)",
  modalBorder: "rgb(230, 230, 230)",
  widgetBackground: "rgb(240, 240, 240)",
  widgetFont: "rgb(215, 88, 70)",
  tableHeader: "#43425D",
  tableRows: "#6c63ff42",
};

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const pdfWidth = 900;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${pdfWidth}px;
  margin-right: 50px;
  padding: 30px;
`;

const DocumentContainer = styled.div`
  border: none;
  min-height: 270px;
  width: ${pdfWidth + 10}px;
  padding: 5px;
`;

const Author = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
`;

const Title = styled.p`
  display: flex;
  font-size: 0.8rem;
  flex-wrap: wrap;
`;

const PdfViewer = ({ name, path, author }) => {
  const [pdf, setPdf] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  useEffect(() => {
    const url = `http://localhost:5000/${path}`;
    // const { token } = JSON.parse(localStorage.getItem("authToken"))
    axios({
      method: "get",
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    })
      .then((res) => {
        const file = new Blob([res.data], { type: "application/pdf" });
        const fileURL = URL.createObjectURL(file);
        setPdf(fileURL);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <DocumentContainer>
        {pdf !== null && (
          <>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} width={pdfWidth} />
            </Document>
          </>
        )}
      </DocumentContainer>
      <Author>
        <b>Author/compositor: </b>
        {author}
      </Author>
      <Title>
        <b>Name: </b>
        {name}
      </Title>
    </Container>
  );
};

export default PdfViewer;

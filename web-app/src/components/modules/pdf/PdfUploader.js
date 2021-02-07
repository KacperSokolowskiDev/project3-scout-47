import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import styled from "styled-components";
import PublishIcon from "@material-ui/icons/Publish";
import SaveIcon from "@material-ui/icons/Save";
import ButtonPlain from "./ButtonPlain";
// import { connect } from 'react-redux'
import axios from "axios";
import { useEffect } from "react";
import Scout47Api from "../../Scout47Api";
import { useDataLayerValue } from "./../../DataLayer";

// import { PageTitle, UserDocument } from '../sub-components';
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

const Container = styled.div`
  margin: 0 5%;
  padding: 30px;
`;

const Table = styled.table`
  margin: 25px 0 25px 0;
  font-size: 0.9rem;
  span {
    padding: 5px;
  }
  th {
    background: ${colors.tableHeader};
    color: white;
    padding: 10px;
  }
  tr {
    background: ${colors.tableRows};
  }
  p {
    padding: 5px;
    margin: 0;
    min-width: 600px;
  }
  td {
    padding: 0;
  }
`;

const Input = styled.input`
  background: none;
  border: none;
  padding: 5px 10px;
  min-width: 200px;

  &:focus {
    outline: none;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const MyDocuments = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 25px 0;
`;

const PdfUploader = ({ api, user }) => {
  const [{ my_players }, dispatch] = useDataLayerValue();

  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [userDocuments, setUserDocuments] = useState([]);
  const [update, setUpdate] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const save = async () => {
    console.log("in saaaave");
    // const url = `${process.env.REACT_APP_API_ENDPOINT}/documents`;
    // const { token } = JSON.parse(localStorage.getItem("authToken"))
    try {
      await files.forEach(async (file) => {
        let files = await api.uploadSchoolReport(file, 1);
        setFiles([]);
        await api.getPlayer("1").then((response) =>
          dispatch({
            type: "SET_PLAYER",
            player: response,
          })
        );
        // setUpdate(!update)
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = async (objs) => {
    // setOpen(false)
    console.log("handling upload ?");
    setFiles(
      objs.map((obj) => {
        return {
          user: 1,
          name: obj.name,
          obj,
        };
      })
    );

    await save();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (event, index) => {
    setFiles(
      files.map((file, i) => {
        if (i === index) {
          return { ...file, author: event.target.value };
        }
        return file;
      })
    );
  };

  // useEffect(() => {
  //     const url = `${process.env.REACT_APP_API_ENDPOINT}/documents/users/1`
  //     const { token } = JSON.parse(localStorage.getItem("authToken"))
  //     axios({
  //         method: 'get',
  //         url,
  //         headers: {
  //             "Authorization": `Bearer ${token}`
  //         },
  //     })
  //     .then(res => {
  //         setUserDocuments(res.data)
  //     })
  //     .catch(err => console.log(err))
  // }, [update])

  return (
    <>
      <Container>
        {/* <Row> */}
        {/* <ButtonPlain onClick={handleOpen}>
                        <PublishIcon fontSize="small" style={{ marginRight: '5px'}} />
                        Upload PDF
                    </ButtonPlain> */}
        {files.length > 0 && (
          <ButtonPlain onClick={save} style={{ marginLeft: "20px" }}>
            <SaveIcon fontSize="small" style={{ marginRight: "5px" }} />
            Save files
          </ButtonPlain>
        )}
        {/* </Row> */}
        {/* {files.length > 0 &&
                    <>
                        <Table>
                            <th>#</th>
                            <th>Author/Compositor</th>
                            <th>Name</th>
                            {
                                files.map((file, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><span>{index+1}</span></td>
                                            <td><Input onChange={event => handleChange(event, index)} /></td>
                                            <td><p>{file.name.slice(0, -4)}</p></td>
                                        </tr>
                                    )
                                })
                            }
                        </Table>
                    </>
                } */}
        <DropzoneArea
          // open={open}
          onChange={handleUpload}
          acceptedFiles={[
            "application/pdf",
            "application/pdf",
            "application/pdf",
          ]}
          showPreviewsInDropzone={true}
          showPreviews={false}
          maxFileSize={16000000}
          onClose={handleClose}
          useChipsForPreview={true}
        />

        {/* <MyDocuments>
                    {userDocuments.length > 0 &&
                        userDocuments.map(document => {
                            const { _id, name, path, author } = document;
                            return (
                                <UserDocument 
                                    key={_id} 
                                    path={path} 
                                    name={name}
                                    author={author}
                                />
                            )
                        })
                    }
                </MyDocuments> */}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data,
});

export default PdfUploader;

import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

const apiKey = process.env.REACT_APP_NASA_KEY;
const roverNames = ["curiosity", "opportunity", "spirit"];
const cameras = {
  curiosity: ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"],
  opportunity: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
  spirit: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
};

export default function MarsRoverPhotos() {
  const [photoData, setPhotoData] = useState(null);
  const [selectedRover, setSelectedRover] = useState("curiosity");
  const [selectedCamera, setSelectedCamera] = useState("");

  const fetchPhoto = async () => {
    try {
      const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover}/photos?sol=1000&camera=${selectedCamera}&api_key=${apiKey}`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      setPhotoData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (selectedRover && selectedCamera) {
      fetchPhoto();
    }
  }, [selectedRover, selectedCamera]);

  const handleRoverChange = (event) => {
    setSelectedRover(event.target.value);
    setSelectedCamera(""); // Reset camera selection when rover changes
    setPhotoData(null); // Clear photos when rover changes
  };

  const handleCameraChange = (event) => {
    setSelectedCamera(event.target.value);
    setPhotoData(null); // Clear photos when camera changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPhoto();
  };

  return (
    <>
      <ExamplesNavbar />




      <div className="main">
        <div className="section section-dark text-center">
          <Container>
            <h2 style={{ color: "white" }}> Diverse Mars Rover Photos</h2>
            <br/>
            <br/>
            <Form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="roverSelect" style={{ color: "white" }}>Select Rover</Label>
                    <Input
                      type="select"
                      name="rover"
                      id="roverSelect"
                      value={selectedRover}
                      onChange={handleRoverChange}
                    >
                      {roverNames.map((rover) => (
                        <option key={rover} value={rover}>
                          {rover.charAt(0).toUpperCase() + rover.slice(1)}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="cameraSelect" style={{ color: "white" }}>Select Camera</Label>
                    <Input
                      type="select"
                      name="camera"
                      id="cameraSelect"
                      value={selectedCamera}
                      onChange={handleCameraChange}
                      disabled={!selectedRover}
                    >
                      <option value="">Select a camera</option>
                      {cameras[selectedRover].map((camera) => (
                        <option key={camera} value={camera}>
                          {camera}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Button type="submit"  className="btn-round" color="danger" disabled={!selectedRover || !selectedCamera}>
                Fetch Photos
              </Button>
            </Form>

            {!photoData && <div>Loading...</div>}

            {photoData && photoData.photos && photoData.photos.length > 0 && (
              <Row>
                {photoData.photos.map((photo) => (
                  <Col md="4" key={photo.id}>
                    <Card>
                      <img src={photo.img_src} alt={photo.id} className="card-img-top" />
                      <CardBody>
                        <CardTitle>{photo.id}</CardTitle>
                        <CardText>
                          <strong>Earth Date:</strong> {photo.earth_date}<br />
                          <strong>Sol:</strong> {photo.sol}<br />
                          <strong>Camera:</strong> {photo.camera.full_name}<br />
                          <strong>Rover:</strong> {photo.rover.name}
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}

            {photoData && photoData.photos && photoData.photos.length === 0 && (
              <div style={{ color: "white" }}>No photos found for the selected options.</div>
            )}
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

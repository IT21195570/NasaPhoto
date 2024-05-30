import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { DatePicker } from 'antd';
// import { CalendarOutlined } from '@ant-design/icons';
import moment from 'moment';
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto(date) {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}${date ? `&date=${date}` : ''}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString);
    fetchPhoto(dateString);
  };

  if (!photoData) return <div>Loading...</div>;

  return (
    <>
      <ExamplesNavbar />
      <div className="main">
        <div className="section section-dark text-center">
          <Container>
            <Row>
              <Col md="8" className="ml-auto mr-auto">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <h2 className="title" style={{ marginRight: '10px' }}>{photoData.title}</h2>
                  <DatePicker
                    id="date"
                    onChange={handleDateChange}
                    format="YYYY-MM-DD"
                    value={selectedDate ? moment(selectedDate, 'YYYY-MM-DD') : null}
                    style={{
                     
                      padding: '5px',
                      fontSize: '16px',
                      borderRadius: '5px',
                      border: '1px solid #ccc'
                    }}
                  />
                </div>
                <p className="description">{photoData.date}</p>
                <p className="description">{photoData.explanation}</p>
                <div>
                  {photoData.media_type === "image" ? (
                    <img src={photoData.url} alt={photoData.title} className="img-fluid" />
                  ) : (
                    <iframe
                      title="space-video"
                      src={photoData.url}
                      frameBorder={0}
                      gesture="media"
                      allow="encrypted-media"
                      allowFullScreen
                      className="embed-responsive embed-responsive-16by9"
                    />
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );

  async function fetchPhoto(date) {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}${date ? `&date=${date}` : ''}`
    );
    const data = await res.json();
    setPhotoData(data);
  }
}

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import homeImage from '../assets/imageshome1.jpg';

const Container = styled.div`
    text-align: center;
    padding: 2rem;
`;


const Image = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
`;

const Paragraph = styled.p`
    text-align: justify;
    margin-bottom: 1rem;
`;

const Title = styled.h2`
    margin-bottom: 1rem;
`;

const ArrowLink = styled(Link)`
    display: inline-block;
    margin-bottom: 1rem;
    text-decoration: none;
    color: blue;
`;

const Button = styled(Link)`
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: blue;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    margin-top: 1rem;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 2rem;
`;

const GridItem = styled.div`
    text-align: left;
`;

const MapWrapper = styled.div`
    grid-column: span 2; 
    margin-top: 2rem;
    height: 400px;
    width: 100%; 
    max-width: 800px; 
    margin: 0 auto; 
`;

const Home = () => {
    return (
        <Container>
            <Image src={homeImage} alt="Home" />
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat porta pulvinar. Nullam dictum id nibh sed elementum. Praesent dictum velit leo, sit amet rhoncus felis pellentesque eu. Cras bibendum sollicitudin urna ac ornare. Morbi aliquet sodales diam, id ornare nibh tincidunt at. Fusce elementum accumsan tortor, ac auctor magna porta at. Maecenas tempor nisi nec ex lacinia, vel hendrerit dui facilisis. Nulla facilisi. Quisque ac varius magna.
            </Paragraph>
            <Title>Servicios</Title>
            <ArrowLink to="/servicios">Conoce nuestros servicios &rarr;</ArrowLink>
            <GridContainer>
                <GridItem>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat porta pulvinar. Nullam dictum id nibh sed elementum. Praesent dictum velit leo, sit amet rhoncus felis pellentesque eu. Cras bibendum sollicitudin urna ac ornare. Morbi aliquet sodales diam, id ornare nibh tincidunt at. Fusce elementum accumsan tortor, ac auctor magna porta at. Maecenas tempor nisi nec ex lacinia, vel hendrerit dui facilisis. Nulla facilisi. Quisque ac varius magna.
                    </Paragraph>
                </GridItem>
                <GridItem>
                    <Paragraph>
                        Donec a sem id odio rhoncus finibus. Cras lacinia lacus ex, et egestas augue commodo vel. Nulla scelerisque justo diam, id elementum sem aliquam eget. Praesent pulvinar, massa eu hendrerit placerat, magna sem maximus nisl, sed gravida elit magna ut metus. Aenean consequat nibh vitae elit viverra rhoncus. Sed eget vestibulum nisl. Curabitur auctor pellentesque tempor.
                    </Paragraph>
                </GridItem>
            </GridContainer>
            <Button to="/nosotros">Nosotros</Button>
            <GridContainer>
                <GridItem>
                    <Paragraph>
                        Suspendisse cursus condimentum eros, a tempor eros tempor quis. Integer pharetra dui id lorem pretium facilisis. Pellentesque efficitur posuere arcu, sit amet mattis lorem vulputate sit amet. Maecenas sapien est, semper ac tortor vitae, faucibus lobortis lectus. Ut semper blandit convallis. Aliquam tristique convallis ex vel sagittis. Proin porttitor neque at consectetur tincidunt. Aliquam gravida ex non turpis venenatis elementum. Sed volutpat, quam id hendrerit condimentum, purus est dapibus massa, id tincidunt dolor elit eget lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ut mi tellus. Quisque sed euismod mi, sit amet sagittis mauris.
                    </Paragraph>
                </GridItem>
                <GridItem>
                    <Paragraph>
                        Suspendisse cursus condimentum eros, a tempor eros tempor quis. Integer pharetra dui id lorem pretium facilisis. Pellentesque efficitur posuere arcu, sit amet mattis lorem vulputate sit amet. Maecenas sapien est, semper ac tortor vitae, faucibus lobortis lectus. Ut semper blandit convallis. Aliquam tristique convallis ex vel sagittis. Proin porttitor neque at consectetur tincidunt. Aliquam gravida ex non turpis venenatis elementum. Sed volutpat, quam id hendrerit condimentum, purus est dapibus massa, id tincidunt dolor elit eget lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ut mi tellus. Quisque sed euismod mi, sit amet sagittis mauris.
                    </Paragraph>
                </GridItem>
            </GridContainer>
            <MapWrapper>
                <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
                <Title>Encuéntranos</Title>
                <Paragraph>
                    Aquí puedes escribir la dirección o información relevante para encontrar tu ubicación.
                </Paragraph>
            </MapWrapper>
        </Container>
    );
};

export default Home;

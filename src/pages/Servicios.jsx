import styled from 'styled-components';
import serviciosImage from '../assets/imageshome.jpeg'; // Asegúrate de tener una imagen en esta ruta

const Container = styled.div`
    text-align: center;
    padding: 2rem;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const Title = styled.h2`
    margin: 2rem 0;
`;

const ServicesContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
`;

const Card = styled.div`
    background: #fff;
    border: 1px solid #ddd;
    padding: 1rem;
    width: 300px;
    text-align: left;
`;

const CardTitle = styled.h3`
    margin: 0 0 1rem 0;
`;

const ParagraphContainer = styled.div`
    text-align: center;
    margin-top: 2rem;
`;

const Paragraph = styled.p`
    text-align: justify;
    margin-bottom: 1rem; /* Espacio entre párrafos */
`;

const ApplyButton = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const Servicios = () => {
    return (
        <Container>
            <Image src={serviciosImage} alt="Servicios" />
            <Title>Servicios</Title>
            <ServicesContainer>
                <Card>
                    <CardTitle>Servicio 1</CardTitle>
                    <Paragraph>Nullam in magna id mi tristique lacinia vel id orci. Pellentesque convallis ex non massa euismod, a faucibus metus malesuada. Mauris convallis magna eu mi pellentesque, quis lacinia nunc laoreet.</Paragraph>
                    <ApplyButton>Aplicar</ApplyButton>
                </Card>
                <Card>
                    <CardTitle>Servicio 2</CardTitle>
                    <Paragraph>Nullam in magna id mi tristique lacinia vel id orci. Pellentesque convallis ex non massa euismod, a faucibus metus malesuada. Mauris convallis magna eu mi pellentesque, quis lacinia nunc laoreet.</Paragraph>
                    <ApplyButton>Aplicar</ApplyButton>
                </Card>
                <Card>
                    <CardTitle>Servicio 3</CardTitle>
                    <Paragraph>Nullam in magna id mi tristique lacinia vel id orci. Pellentesque convallis ex non massa euismod, a faucibus metus malesuada. Mauris convallis magna eu mi pellentesque, quis lacinia nunc laoreet.</Paragraph>
                    <ApplyButton>Aplicar</ApplyButton>
                </Card>
            </ServicesContainer>

            <ParagraphContainer>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie, mauris sed lobortis ultrices, leo nisi dapibus metus, vitae ornare libero mauris in velit. Duis ut accumsan nisi, et convallis urna. Morbi et aliquam arcu, sit amet egestas quam. Integer efficitur laoreet turpis. Phasellus volutpat vitae dolor sit amet tincidunt. Vestibulum mollis tincidunt viverra. Integer euismod commodo tortor, ac interdum mauris lacinia eget. Nullam interdum dolor vel nisi dictum consectetur. Pellentesque a ligula a sem semper aliquam at blandit nunc. Sed ullamcorper augue elit, in feugiat nulla cursus in. Sed ut tortor dignissim nisl interdum interdum vitae id quam. Donec condimentum feugiat libero, dictum consequat turpis sollicitudin et. Nullam in lacus quam. Sed nec metus et tortor faucibus hendrerit et ut nisl. Pellentesque mattis, velit a ultricies rutrum, dui dui ultrices ante, eu placerat elit elit id nisi. Sed egestas magna vel justo consectetur commodo quis a ligula. 
                </Paragraph>
                <Paragraph>
                    Nullam in magna id mi tristique lacinia vel id orci. Pellentesque convallis ex non massa euismod, a faucibus metus malesuada. Mauris convallis magna eu mi pellentesque, quis lacinia nunc laoreet.
                </Paragraph>
                <Paragraph>
                    Maecenas id condimentum nulla. Quisque vel neque pulvinar, gravida massa vitae, egestas augue. Donec rutrum ipsum erat, non rutrum neque maximus ut. Ut id urna nec velit elementum accumsan. Suspendisse et magna ullamcorper, consequat ligula non, volutpat ante. Nunc vitae sapien vitae dui convallis feugiat. Praesent tristique metus sit amet suscipit porta. Cras nisi libero, blandit vitae convallis vel, dapibus sit amet nisi. Mauris aliquet urna ac maximus maximus. 
                </Paragraph>
                <Paragraph>
                    Integer mi erat, cursus a commodo non, iaculis sit amet enim. Nunc commodo eros vitae leo eleifend, eget vulputate quam fermentum. In venenatis bibendum felis, efficitur semper purus scelerisque sed. Proin tincidunt laoreet pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce posuere enim nisi, ac egestas lorem placerat nec. Morbi ut magna lobortis, congue tortor sit amet, fermentum nulla. In pharetra convallis rhoncus. 
                </Paragraph>
            </ParagraphContainer>
        </Container>
    );
};

export default Servicios;

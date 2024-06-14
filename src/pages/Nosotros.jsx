import styled from 'styled-components';
import nosotrosImage from '../assets/imagenNosotros.jpg'; // Asegúrate de tener una imagen en esta ruta

const Container = styled.div`
    text-align: center;
    padding: 2rem;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
`;

const Title = styled.h3`
    text-align: left; 
    margin: 2rem 0;
`;

const GeneralTitle = styled.h2`
    text-align: center; 
    margin: 1rem 0;
`;

const Paragraph = styled.p`
    text-align: justify; 
    margin: 1rem 0; 
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 2rem;
`;

const GridItem = styled.div`
    text-align: left;
`;

const Nosotros = () => {
    return (
        <Container>
            <Image src={nosotrosImage} alt="Nosotros" />
            <GeneralTitle>Nosotros</GeneralTitle>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie, mauris sed lobortis ultrices, leo nisi dapibus metus, vitae ornare libero mauris in velit. Duis ut accumsan nisi, et convallis urna. Morbi et aliquam arcu, sit amet egestas quam. Integer efficitur laoreet turpis. Phasellus volutpat vitae dolor sit amet tincidunt. Vestibulum mollis tincidunt viverra. Integer euismod commodo tortor, ac interdum mauris lacinia eget. Nullam interdum dolor vel nisi dictum consectetur. Pellentesque a ligula a sem semper aliquam at blandit nunc. Sed ullamcorper augue elit, in feugiat nulla cursus in. Sed ut tortor dignissim nisl interdum interdum vitae id quam. Donec condimentum feugiat libero, dictum consequat turpis sollicitudin et. Nullam in lacus quam. Sed nec metus et tortor faucibus hendrerit et ut nisl. Pellentesque mattis, velit a ultricies rutrum, dui dui ultrices ante, eu placerat elit elit id nisi. Sed egestas magna vel justo consectetur commodo quis a ligula.
            </Paragraph>

            <Title>Misión</Title>
            <Paragraph>
                Nullam et dui felis. Quisque venenatis purus vehicula quam vehicula imperdiet. Maecenas nec ullamcorper tortor, sit amet volutpat lectus. Curabitur ornare dignissim dolor non fermentum. Nulla sit amet massa sit amet mi pretium cursus. Curabitur scelerisque lectus sed malesuada blandit. Suspendisse egestas, libero eget ultrices facilisis, elit urna sollicitudin orci, sit amet volutpat dui mi eget turpis. Etiam feugiat mattis justo, at dictum massa auctor ac. Proin suscipit ex ac imperdiet imperdiet. Nam scelerisque velit eu nulla porttitor rhoncus. Vestibulum quis ex in ante elementum malesuada ut vel nisi. Aliquam sollicitudin eleifend ante, in laoreet ligula interdum a. Morbi metus mauris, cursus vitae pretium feugiat, ultricies in nisi. Morbi ac ultricies diam.
            </Paragraph>

            <Title>Visión</Title>
            <Paragraph>
                Fusce posuere at urna eget maximus. Ut sem dui, consequat nec pellentesque sit amet, consectetur a velit. Praesent in maximus erat. Ut urna ante, blandit sit amet ultricies quis, semper ut leo. Nulla sodales eleifend enim, non luctus tortor fermentum sed. Sed ex metus, cursus vitae purus ac, pellentesque porttitor nisl. Mauris ex libero, feugiat sit amet justo vitae, auctor accumsan enim. Sed posuere, libero non viverra faucibus, tortor nisi tincidunt quam, vel porta mi felis eget orci. Proin sed facilisis est. Phasellus interdum ipsum vel iaculis maximus. Curabitur sollicitudin mi ac mi auctor pharetra. Pellentesque sagittis urna eu sem congue rhoncus.
            </Paragraph>

            <Title>Historia</Title>
            <GridContainer>
                <GridItem>
                    <Paragraph>
                        Integer mi erat, cursus a commodo non, iaculis sit amet enim. Nunc commodo eros vitae leo eleifend, eget vulputate quam fermentum. In venenatis bibendum felis, efficitur semper purus scelerisque sed. Proin tincidunt laoreet pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce posuere enim nisi, ac egestas lorem placerat nec. Morbi ut magna lobortis, congue tortor sit amet, fermentum nulla. In pharetra convallis rhoncus.
                    </Paragraph>
                </GridItem>
                <GridItem>
                    <Paragraph>
                        Maecenas id condimentum nulla. Quisque vel neque pulvinar, gravida massa vitae, egestas augue. Donec rutrum ipsum erat, non rutrum neque maximus ut. Ut id urna nec velit elementum accumsan. Suspendisse et magna ullamcorper, consequat ligula non, volutpat ante. Nunc vitae sapien vitae dui convallis feugiat. Praesent tristique metus sit amet suscipit porta. Cras nisi libero, blandit vitae convallis vel, dapibus sit amet nisi. Mauris aliquet urna ac maximus maximus.
                    </Paragraph>
                </GridItem>
            </GridContainer>
        </Container>
    );
};

export default Nosotros;

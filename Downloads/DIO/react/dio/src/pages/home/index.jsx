import { Link } from "react-router-dom";

import banner from '../../assets/banner.png'
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Container, TextContent, Title, TitleHighlight } from './styles';

const Home = () => {
    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente
                        <br />
                    </TitleHighlight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                    desafio profissional, evoluindo em comunidade com as melhores experts
                </TextContent>
                <Button title="Começa agora" variant="secondary" onClick={() => null} />
            </div>
            <div>
                <img src={ banner} alt = "Imagem principal" />
            </div>

        </Container>
        
        </>)
    }
    
    export { Home }
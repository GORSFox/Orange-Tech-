import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
            <UserInfo percentual={93} nome="Glaucia" image= './assets/glaucia.png'/>
            <UserInfo percentual={86} nome="Glaucia" image= './assets/glaucia.png'/>
            <UserInfo percentual={79} nome="Glaucia" image= './assets/glaucia.png'/>
            <UserInfo percentual={68} nome="Glaucia" image= './assets/glaucia.png'/>
            <UserInfo percentual={59} nome="Glaucia" image= './assets/glaucia.png'/>
           
            </Column>
        </Container>
    </>
    )
}

export { Feed }
import React from 'react';
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (
    <>
        <Header autenticado ={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
            <UserInfo  nome="Glaucia" image= 'https://avatars.githubusercontent.com/u/97680820?s' percentual={25}></UserInfo> 
            <UserInfo  nome="Glaucia" image= 'https://avatars.githubusercontent.com/u/97680820?s' percentual={65}></UserInfo>
            <UserInfo  nome="Glaucia" image= 'https://avatars.githubusercontent.com/u/97680820?s' percentual={45}></UserInfo>
            <UserInfo  nome="Glaucia" image= 'https://avatars.githubusercontent.com/u/97680820?s' percentual={72}></UserInfo>
            </Column>
        </Container>
    </>
    );
};

export { Feed };
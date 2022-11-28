import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'//colocar o número de curtidas

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture,
} from './styles';

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                    <div>
                        <h4>Glaucia</h4>
                        <p>Há 7 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p> Bootcamp Banco Inter  <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4> #HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>

                </HasInfo>

            </Content>

        </CardContainer>
    )
}

export { Card }


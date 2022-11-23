import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'//colocar o número de curtidas

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground />
            <Content>
                <UserInfo>
                    <UserPicture />
                    <div>
                        <h4>Glaucia</h4>
                        <p>Há 7 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p> Projeto feito o curo de htmll e css no bootamp...<strong>Saiba Mais</strong></p>
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


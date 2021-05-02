import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => {

    const route = props.route == null ? 0 : { params: { numero: 0 } }

    return (
        <TextoCentral corDeFundo="#9932cd">
            Tela C = { route.params.numero }
        </TextoCentral>
    )

}


import styled from 'styled-components';

const Opçao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const Opçoes = styled.ul`
    display: flex;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
    return (
        <Opçoes>
          { textoOpcoes.map( (texto) => (
            <Opçao><p>{texto}</p></Opçao>
          ) )}
        </Opçoes>
    )
}

export default OpcoesHeader;

import styled from "styled-components";

interface IPreview {
    children: any
}

const Wrapper = styled.div({
    width: '100%',
    height: '100%',
})

export function Preview({children}: IPreview) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}
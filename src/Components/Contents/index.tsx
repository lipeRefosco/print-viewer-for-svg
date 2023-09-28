import styled from "styled-components";

interface IContents {
    children: any,
    zoom: number
}

const Wrapper = styled.div<{ $zoom: number }>(props => ({
    width: '100%',
    height: '100%',
    transform: `scale(${props.$zoom})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}))

export function Contents({ children, zoom }: IContents) {

    return (
        <Wrapper $zoom={zoom}>
            {children}
        </Wrapper>
    )
}
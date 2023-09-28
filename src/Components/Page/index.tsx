import styled from "styled-components";
import { themes } from "../../utils/themes";

interface IPage {
    children: any,
    width: number,
    height: number,
}

const Wrapper = styled.div<{
    $width: number;
    $height: number;
}>(props =>
({
    width: props.$width,
    height: props.$height,
    outline: `1px solid ${themes.colors.grey[500]}`,
    backgroundColor: "white"
}));

export function Page({ children, width, height }: IPage) {
    return (
        <Wrapper $width={width} $height={height}>
            {children}
        </Wrapper>
    );
}
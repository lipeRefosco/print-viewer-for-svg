import styled from "styled-components";
import { themes } from "../../utils/themes";

const Side = styled.div(() => ({
    width: '14rem',
    height: '100%',
    padding: '1rem',
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 999,
    
    // Style
    backgroundColor: themes.colors.grey[100],
    border: `1px solid ${themes.colors.grey[500]}`,
}));

export function ControlPanel({children}: any) {

    return (
        <Side>
            {children}
        </Side>
    );
}
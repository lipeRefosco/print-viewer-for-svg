import styled from 'styled-components';

import { ControlPanel } from './Components/ControlPanel'
import { Preview } from './Components/Preview'
import { Contents } from './Components/Contents'
import { Page } from './Components/Page';
import { milimetersToPixel } from './utils/unitsConverters'

import { themes } from './utils/themes';
import CvModel from './assets/cv.svg';


const Wrapper = styled.div({
  width: '100vw',
  height: '100vh',
  backgroundColor: themes.colors.grey[200],
  color: themes.colors.black,
  overflow: 'scroll'
});

export default function App() {

  return (
    <Wrapper>
      <ControlPanel>
        teste
      </ControlPanel>
      <Preview>
        <Contents zoom={.5}>
          <Page width={milimetersToPixel(210)} height={milimetersToPixel(297)}>
            <img src={CvModel} alt="" />
          </Page>
        </Contents>
      </Preview>
    </Wrapper>
  )
}

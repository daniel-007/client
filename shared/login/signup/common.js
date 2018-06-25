// @flow
import * as React from 'react'
import * as Constants from '../../constants/signup'
import {
  Box2,
  HeaderHocHeader,
  Avatar,
  WaitingButton,
  Input as CommonInput,
  ButtonBar,
} from '../../common-adapters'
import {styleSheetCreate, isMobile} from '../../styles'

type Props = {
  children: React.Node,
  onBack: () => void,
}

export const Wrapper = (props: Props) => (
  <Box2 direction="vertical" fullWidth={true} fullHeight={true}>
    <Box2
      direction="vertical"
      fullWidth={true}
      fullHeight={true}
      centerChildren={true}
      gap={isMobile ? 'xtiny' : 'small'}
    >
      {props.children}
    </Box2>
    <HeaderHocHeader onBack={props.onBack} headerStyle={styles.header} />
  </Box2>
)

export const BlankAvatar = () => <Avatar username="" size={isMobile ? 96 : 128} />

export const ContinueButton = ({disabled, onClick}: {disabled?: boolean, onClick: () => void}) => (
  <ButtonBar fullWidth={true} style={styles.buttonBar}>
    <WaitingButton
      waitingKey={Constants.waitingKey}
      type="Primary"
      label="Continue"
      disabled={disabled}
      fullWidth={true}
      onClick={onClick}
    />
  </ButtonBar>
)

export const Input = (props: any) => (
  <Box2 direction="vertical" style={styles.inputContainer}>
    <CommonInput
      style={styles.input}
      inputStyle={styles.inputInnerStyle}
      errorStyle={styles.inputErrorStyle}
      {...props}
    />
  </Box2>
)

export const styles = styleSheetCreate({
  buttonBar: {maxWidth: 460},
  header: {position: 'absolute'},
  input: {maxWidth: 460, width: '100%'},
  inputContainer: {alignItems: 'center', alignSelf: 'stretch'},
  inputInnerStyle: {width: '100%'},
  inputErrorStyle: {minHeight: 0},
})
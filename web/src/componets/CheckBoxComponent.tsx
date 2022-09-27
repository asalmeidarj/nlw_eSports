import { styled } from '@stitches/react';
import { violet, blackA, green } from '@radix-ui/colors';
import { CheckIcon } from '@radix-ui/react-icons';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: 'white',
  width: 25,
  height: 25,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet11 },
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet9}` },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  color: '#00ff00',
});

// Exports
export const Checkbox = StyledCheckbox;
export const CheckboxIndicator = StyledIndicator;

// Your app...
const Flex = styled('div', { display: 'flex' });
const Label = styled('label', {
  color: 'white',
  fontSize: 12,
  lineHeight: 1,
  userSelect: 'none',
});

interface CheckBoxProps {
    text: string,
    styled?: string,
    checked?: Function,
}



export const CheckboxComponent = (props: CheckBoxProps) => {

    function triggerCheck(){
        if(props.checked) {
            props.checked()
        }
    }

    return (
    <Flex css={{ alignItems: 'center' }}>
      <Checkbox className={props.styled} defaultChecked id="c1" onCheckedChange={triggerCheck}>
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </Checkbox>
      <Label css={{ paddingLeft: 15 }} htmlFor="c1">
        {props.text}
      </Label>
    </Flex>
    )
};

export default CheckboxComponent;

import * as SelectPrimitive from '@radix-ui/react-select'
import { violet, mauve, blackA } from '@radix-ui/colors';
import { styled } from '@stitches/react';

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 15px',
    fontSize: '14px',
    lineHeight: 1,
    height: 50,
    gap: 5,
    backgroundColor: '#18181B',
    boxShadow: `0 2px 10px ${blackA.blackA7}`,
    '&:hover': { 
        backgroundColor: `${violet.violet9}`,
        color: 'white'},
    '&:focus': { boxShadow: `0 0 0 2px ${violet.violet9}`},
    '&[data-placeholder]': { color: `#b9b9b9` },
});

const StyledIcon = styled(SelectPrimitive.SelectIcon, {
    color: violet.violet11,
  });
  
  const StyledContent = styled(SelectPrimitive.Content, {
    all: 'unset',
    overflow: 'hidden',
    backgroundColor: '#1c1922',
    borderRadius: 6,
    zIndex: 1000,
    boxShadow:
      '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  });
  
  const StyledViewport = styled(SelectPrimitive.Viewport, {
    padding: 5,
  });

  const StyledItem = styled(SelectPrimitive.Item, {
    all: 'unset',
    fontSize: 13,
    lineHeight: 1,
    color: violet.violet11,
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    height: 25,
    padding: '0 35px 0 25px',
    position: 'relative',
    userSelect: 'none',
  
    '&[data-disabled]': {
      color: mauve.mauve8,
      pointerEvents: 'none',
    },
  
    '&[data-highlighted]': {
      backgroundColor: violet.violet9,
      color: violet.violet1,
    },
  });
  
  const StyledLabel = styled(SelectPrimitive.Label, {
    padding: '0 25px',
    fontSize: 12,
    lineHeight: '25px',
    color: mauve.mauve11,
  });
  
  const StyledSeparator = styled(SelectPrimitive.Separator, {
    height: 1,
    backgroundColor: violet.violet6,
    margin: 5,
  });
  
  const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
    position: 'absolute',
    left: 0,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  });
  
  const scrollButtonStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    backgroundColor: 'white',
    color: violet.violet11,
    cursor: 'default',
  };
  
const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton, scrollButtonStyles);
const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton, scrollButtonStyles);


// Componentes Radix-UI for Select
export const Select = SelectPrimitive.Root;
export const SelectValue = SelectPrimitive.Value;
export const SelectIcon = SelectPrimitive.SelectIcon;
export const SelectTrigger = StyledTrigger;
export const SelectGroup = SelectPrimitive.SelectGroup;
export const SelectViewport = StyledViewport;
export const SelectContent = StyledContent;
export const SelectItem = StyledItem;
export const SelectItemText = SelectPrimitive.SelectItemText;
export const SelectItemIndicator = StyledItemIndicator;
export const SelectLabel = SelectPrimitive.SelectLabel;
export const SelectSeparator = SelectPrimitive.SelectSeparator;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;


export const SelectComponent = () => {
    return (
        <Select>

        </Select>  
    );
}

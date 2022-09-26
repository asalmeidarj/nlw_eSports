import { styled } from '@stitches/react';
import { red, violet} from '@radix-ui/colors';

const StyledInput = styled('input', {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 15px',
    fontSize: '14px',
    lineHeight: 1,
    height: '50px',
    gap: 5,
    backgroundColor: '#18181B',
    '&:focus': { boxShadow: `0 0 0 2px ${violet.violet9}`},
    '&[data-placeholder]': { color: `#b9b9b9` },
});


export const Input = StyledInput;



export const InputComponent = () => {
    return (
        <Input>

        </Input>  
    );
}

import { IconProps } from "phosphor-react";
import { MouseEventHandler } from "react";
import styled from 'styled-components'


interface ButtonProps {
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
    id?: string,
    width?: string,
    height?: string,
    padding?: string,
    backgroundColor?: string,
    borderRadius?: string,
    hoverBackground?: string,
    text?: string,
    colorText?: string,
    iconComponent?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> | undefined,
    sizeIcon?: string,
    colorIcon?: string,
}

let standard: ButtonProps = {
    width: '192px',
    height: '48px',
    padding: '12px 16px',
    backgroundColor: 'rgb(139 92 246 / 1)',
    borderRadius: '6px',
    hoverBackground: 'rgb(124 58 237 / 1)',
    text: '',
    colorText: 'white',
    sizeIcon: '24px',
    colorIcon: 'white',
}

const Button = styled.div<ButtonProps>`
        width: ${(props) => (props.width)};
        heigth: ${(props) => (props.height)};
        border-radius: ${(props) => (props.borderRadius)};
        padding: ${(props) => (props.padding)};
        background-color: ${(props) => (props.backgroundColor)};
        &:hover {
            background-color: ${(props) => (props.hoverBackground)};
        };
        display: flex;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
`
interface SpanProps {
    colorText: string,
}

const Span = styled.span<SpanProps>`
    color: ${(props) => (props.color)}
`

function ButtonComponent(props: ButtonProps) {
    const width = props.width ? props.width : standard.width
    const height = props.height ? props.height : standard.height
    const padding = props.padding ? props.padding : standard.padding
    const backgroundColor = props.backgroundColor ? props.backgroundColor : standard.backgroundColor
    const borderRadius = props.borderRadius ? props.borderRadius : standard.borderRadius
    const hoverBackground = props.hoverBackground ? props.hoverBackground : standard.hoverBackground
    const text = props.text ? props.text : standard.text
    const IconComponent = props.iconComponent ? props.iconComponent : standard.iconComponent
    const sizeIcon = props.sizeIcon ? props.sizeIcon : standard.sizeIcon
    const colorIcon = props.colorIcon ? props.colorIcon : standard.colorIcon
    const colorText = props.colorText ? props.colorText : standard.colorText

    return (
        <Button
            id={props.id}
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            hoverBackground={hoverBackground}
            padding={padding}
            onClick={props.onClick}
        >
            {IconComponent && <IconComponent size={sizeIcon} color={colorIcon} />}
            <Span colorText={colorText+""}>{text}</Span>
        </Button>
    )
}


export default ButtonComponent
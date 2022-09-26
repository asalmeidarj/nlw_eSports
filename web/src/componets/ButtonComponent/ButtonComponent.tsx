import { IconProps } from "phosphor-react";
import styled from 'styled-components'


interface ButtomProps{
    width?: string,
    height?: string,
    padding?: string,
    backgroundColor?: string,
    borderRadius?: string,
    hoverBackground?: string,
    text?: string,
    colorText?: string,
    className?: string,
    iconComponent?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> | undefined,
    sizeIcon?: string, 
    colorIcon?: string,
}

let standard: ButtomProps = {
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


function ButtonComponent(props: ButtomProps) {
    const width = props.width ? props.width : standard.width
    const height = props.height ? props.height : standard.height
    const padding = props.padding ? props.padding : standard.padding
    const backgroundColor = props.backgroundColor ? props.backgroundColor : standard.backgroundColor
    const borderRadius = props.borderRadius ? props.borderRadius : standard.borderRadius
    const hoverBackground = props.hoverBackground ? props.hoverBackground : standard.hoverBackground
    const text = props.text ? props.text : standard.text
    const className = props.className ? props.className : standard.className
    const IconComponent = props.iconComponent ? props.iconComponent : standard.iconComponent
    const sizeIcon = props.sizeIcon ? props.sizeIcon : standard.sizeIcon
    const colorIcon = props.colorIcon ? props.colorIcon : standard.colorIcon
    const colorText = props.colorText ? props.colorText : standard.colorText

    const Span = styled.span`color: ${colorText}`

    const Button = styled.div`
        width: ${width};
        heigth: ${height};
        border-radius: ${borderRadius};
        padding: ${padding};
        background-color: ${backgroundColor};
        &:hover {
            background-color: ${hoverBackground};
        };
        display: flex;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
    `

    return (
        <Button className={className}>
            {IconComponent && <IconComponent size={sizeIcon} color={colorIcon}/>}
            <Span>{text}</Span>
        </Button>
    )
}


export default ButtonComponent
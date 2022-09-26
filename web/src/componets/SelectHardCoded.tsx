import * as SelectComponents from './SelectComponent'
import { CheckIcon } from '@radix-ui/react-icons'

// Componentes Radix-UI for Select
const SelectGroup = SelectComponents.SelectGroup;
const SelectItem = SelectComponents.SelectItem;
const SelectItemText = SelectComponents.SelectItemText;
const SelectItemIndicator = SelectComponents.SelectItemIndicator;
const SelectLabel = SelectComponents.SelectLabel;


const SelectHardCoded = () => {
    return (
        <SelectGroup>
            <SelectLabel>Games (Hardcoded)</SelectLabel>
            <SelectItem value="StreetFighterV">
                <SelectItemText>Street Fighter V</SelectItemText>
                <SelectItemIndicator>
                    <CheckIcon />
                </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="NeedForSpeed">
                <SelectItemText>Need For Speed</SelectItemText>
                <SelectItemIndicator>
                    <CheckIcon />
                </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="ClashRoyal">
                <SelectItemText>Clash Royal</SelectItemText>
                <SelectItemIndicator>
                    <CheckIcon />
                </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="COD">
                <SelectItemText>Call of Duty</SelectItemText>
                <SelectItemIndicator>
                    <CheckIcon />
                </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="GearsOfWar">
                <SelectItemText>Gears of War</SelectItemText>
                <SelectItemIndicator>
                    <CheckIcon />
                </SelectItemIndicator>
            </SelectItem>
        </SelectGroup>
    )
}

export default SelectHardCoded
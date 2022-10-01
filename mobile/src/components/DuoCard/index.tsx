import { View, ViewProps } from 'react-native';
import { IAd } from '../../models/IAd';
import { THEME } from '../../theme';
import { Button } from '../Button';
import { DuoInfo } from './DuoInfo';

import { styles } from './styles';

import {getNumberOfDaysTrue} from './utils/functions'


interface Props extends ViewProps {
    data: IAd,
}

export function DuoCard({ data }: Props) {

    const colorVoiceChannelText = 
        data.useVoiceChannel ? 
        THEME.COLORS.SUCCESS : 
        THEME.COLORS.ALERT

    const ActiveDays = getNumberOfDaysTrue(data.weekDays)

    return (
        <View style={styles.container}>
            <DuoInfo
                label='Nome'
                content={data.name}
            />
            <DuoInfo
                label='Tempo de jogo'
                content={data.yearsPlaying + ' ano(s)'}
            />
            <DuoInfo
                label='Disponibilidade'
                content={
                    `${ActiveDays} dia(s) \u2022 ${data.hourStart}h - ${data.hourEnd}h`
                }
            />
            <DuoInfo
                label='Chamada de áudio?'
                content={data.useVoiceChannel ? "Sim" : "Não"}
                colorContent={colorVoiceChannelText}
            />

            <Button 
                text="Conectar"
            />

        </View>
    );
}
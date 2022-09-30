import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native'

import { Background } from '../../components/Background';
import { styles } from './styles';
import { Heading } from '../../components/Heading';

import { IGame } from '../../models/IGame';

export function Game() {

    const route = useRoute();

    const game = route.params as IGame

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Heading title={game.title} subtitle=""></Heading>
            </SafeAreaView>
        </Background>
    );
}
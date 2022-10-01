import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native'

import { Entypo } from '@expo/vector-icons'

import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { DuoCard } from '../../components/DuoCard';
import { THEME } from '../../theme';
import { styles } from './styles';

import { IGame } from '../../models/IGame';
import { IAd } from '../../models/IAd';

import * as gameService from '../../services/GameService'

export function Game() {

    const navigation = useNavigation()
    const route = useRoute();
    const game = route.params as IGame

    const [ads, setAds] = useState<IAd[]>([])

    function handleGoBack() {
        navigation.goBack();
    }

    useEffect(() => {
        loadAds();
        return () => { }
    }, [])

    async function loadAds() {
        const ads = await gameService.findAdsByGameId(game._id)
        setAds(ads)
    }

    function onConect() {

    }


    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name='chevron-thin-left'
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </TouchableOpacity>

                    <Image
                        source={logoImg}
                        style={styles.logo}
                    />

                    <View style={styles.fillInHeaderRight}/>
                </View>

                <Image 
                    source={ {uri: "http://192.168.0.105:19000/assets" + `${game.bannerUrl}`} }
                    style={styles.banner}
                    resizeMode="cover"
                />

                <Heading 
                    title={game.title}
                    subtitle='Conecte-se e comece a jogar!'
                />
                
                <FlatList
                    data={ads}
                    keyExtractor={(item) => `${item._id}`}
                    renderItem={({ item }) => (
                        <DuoCard
                            data={item}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    contentContainerStyle={ads.length > 0 ? styles.contentList: styles.empetyList}
                    ListEmptyComponent={() => (
                        <Text style={styles.empetyList}>Ainda não existe anúncios para este jogo...</Text>
                    )}
                />

            </SafeAreaView>
        </Background>
    );
}
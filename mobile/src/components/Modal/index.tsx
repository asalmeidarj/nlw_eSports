import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { IAd } from '../../models/IAd';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface ModalProps {
  visible?: boolean,
  data?: IAd,
  closeModel: Function,
}

export function Modal(props: ModalProps) {

  let styleSheet = props.visible ? styles.container : styles.containerClosed

  function close() {
    props.closeModel()
  }

  return (
    <View style={styleSheet}>
      <TouchableOpacity style={styles.overlay} onPress={close} />
        <View style={styles.content}>
          <AntDesign 
            name='checkcircleo'
            size={64}
            color={THEME.COLORS.SUCCESS}
          />
          <Heading
            title='Vamos jogar!'
            alingTitle='center'
            subtitle='Agora é só começar a jogar!'  
          />
          <View style={styles.sectionDiscord}>
              <Text style={styles.discordLabel}>
                Adicione no Discord
              </Text>
              <Text style={styles.discordContent}>
                {props.data?.discord}
              </Text>
          </View>
        </View>
    </View>
  );
}
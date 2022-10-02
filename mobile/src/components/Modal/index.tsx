import React, { useEffect } from 'react';
import { useState } from 'react';
import { Text, TouchableOpacity, View, ViewProps } from 'react-native';
import { IAd } from '../../models/IAd';

import { styles } from './styles';

interface ModalProps {
  visible?: boolean,
  data?: IAd,
  closeModel: Function,
}

export function Modal(props: ModalProps) {

  let styleSheet = props.visible ? styles.container : styles.containerClosed

  function close(){
    props.closeModel()
  }

  return (
    <View style={styleSheet}>
        <TouchableOpacity style={styles.overlay} onPress={close}/>
        <View style={styles.content}>
          <Text>{props.data?.discord ? props.data?.discord : ""}</Text>
        </View>
    </View>
  );
}
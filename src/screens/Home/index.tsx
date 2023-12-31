import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { Sheet } from '../../components/Sheet'

import { styles } from './styles'

export function Home() {
  const [sheetIsOpen, setSheetIsOpen] = useState(false)

  function toggleSheet() {
    setSheetIsOpen((prevState) => !prevState)
  }

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={.7} onPress={toggleSheet}>
        <Ionicons name='options' size={24} color='#f2f2f2' style={styles.optionsIcon}/>
      </TouchableOpacity>
      {
        sheetIsOpen 
        && <Sheet onClose={toggleSheet}/>
      }
    </View>
  )
}
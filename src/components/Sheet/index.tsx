import { Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import Animated, { useSharedValue, withSpring, SlideInDown, SlideOutDown, runOnJS, useAnimatedStyle } from 'react-native-reanimated'

import { SHEET_HEIGHT, SHEET_OVER_DRAG, styles } from './styles'

type Props = {
  onClose: () => void;
}

export function Sheet({ onClose } : Props){

  const offset = useSharedValue(0)

  function close() {
    offset.value = 0
    onClose()
  }

  const pan = Gesture.Pan().onChange((event) => {
    const offsetDelta = event.changeY + offset.value
    const clamp = Math.max(-SHEET_OVER_DRAG, offsetDelta)

    offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp)
  })
  .onFinalize(() => {
    if(offset.value < SHEET_HEIGHT / 3){
      offset.value = withSpring(0)
    } else {
      offset.value = withSpring(SHEET_HEIGHT, {}, () => {
        runOnJS(close)()
      })
    }
  })

  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value}]
  }))

  return(
    <GestureDetector gesture={pan}>
      <Animated.View
        entering={SlideInDown.springify().damping(15)}
        exiting={SlideOutDown}
        style={[styles.container, translateY]}>
        <MaterialCommunityIcons 
          name='drag-horizontal' 
          color='#999' 
          size={24} 
          style={styles.dragIcon}
          />
        <Text style={styles.title}>Hello 🥰</Text>
      </Animated.View>
      </GestureDetector>
  )
}
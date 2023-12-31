import { StyleSheet } from 'react-native'

export const SHEET_HEIGHT = 220
export const SHEET_OVER_DRAG = 20

export const styles = StyleSheet.create({
  container : {
    backgroundColor: '#1e1f23',
    width: '100%',
    height: SHEET_HEIGHT,
    position: 'absolute',
    bottom: -SHEET_OVER_DRAG * 1.3
  },
  title: {
    color: '#fefefe',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 24
  },
  dragIcon: {
    marginTop: 16,
    alignSelf: 'center',
  }
});
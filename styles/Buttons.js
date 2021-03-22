import { colors } from 'react-native-elements'
import { Colors } from './Colors'

export const roundBlue = {
  buttonStyle: {
    backgroundColor: Colors.blue,
    borderRadius: 20,
    padding: 10,
  },
  titleStyle: {
    color: '#fff',
    fontSize: 20,
    padding: 10,
  },
}

export const roundClear = {
  buttonStyle: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderColor: Colors.gray,
    padding: 10,
    borderWidth: 2,
  },
  titleStyle: {
    color: Colors.gray,
    fontSize: 20,
    padding: 10,
  },
}

export const textLink = {
  buttonStyle: {
    backgroundColor: 'transparent',
  },
  titleStyle: {
    color: Colors.blue,
    fontSize: 16,
    padding: 10,
  },
}

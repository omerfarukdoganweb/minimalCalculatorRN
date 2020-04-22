import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, TouchableHighlight } from 'react-native'
import colors from '../utils/colors';

class Button extends Component {

  handleOperation = () => {
    this.props.operation(this.props.char)
  }

  componentDidMount = () => {
    //console.log(this.props)
  }

  render() {
    return (
      <TouchableHighlight activeOpacity = { 1 } 
      underlayColor="#6d767d"
        onPress={() => this.props.operation(this.props.char)}
        style={styles.container}
      >
        <Text style={styles.text}>{this.props.char}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor: 'transparent',
    borderRadius: 100,
    borderTopWidth: 22,
    borderBottomWidth: 20,
    borderWidth: 12
  },
  text: {
    color: colors.white,
    fontSize: 30,
  }
})

export default Button;

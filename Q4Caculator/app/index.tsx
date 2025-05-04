import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from './styles';

export default function Index() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');
  const handleNumberInput = (num) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };
  const handleOperatorInput = (operator) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };
  const handleEqual = () => {

    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === 'x') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }

    setOperator(null);
    setFirstValue('');
  };
  const handleClear = () => {

    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.textButton}>{firstValue}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textButton}>{operator}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textButton}>{displayValue}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(7)}>
          <Text style={styles.textButton}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(8)}>
          <Text style={styles.textButton}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(9)}>
          <Text style={styles.textButton}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.calButton} onPress={() => handleOperatorInput("/")}>
          <Text style={styles.text}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(4)}>
          <Text style={styles.textButton}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(5)}>
          <Text style={styles.textButton}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(6)}>
          <Text style={styles.textButton}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.calButton} onPress={() => handleOperatorInput("x")}>
          <Text style={styles.text}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(1)}>
          <Text style={styles.textButton}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(2)}>
          <Text style={styles.textButton}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(3)}>
          <Text style={styles.textButton}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.calButton} onPress={() => handleOperatorInput("-")}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.zeroButton} >
          <Text style={styles.textButton}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.calButton} onPress={() => handleOperatorInput("+")}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.equalButton} onPress={handleEqual}>
          <Text style={styles.textButton}>=</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.textButton}>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

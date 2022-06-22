import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* column 1 */}
      <View style={styles.column}>
        <View style={[styles.block, styles.blockLeft, styles.blockTop]}>
          <Text style={styles.xo}>
            ❌
          </Text>
        </View>
        <View style={[styles.block, styles.blockLeft]}>
          <Text style={styles.xo}>
            ❌
          </Text>
        </View>
        <View style={[styles.block, styles.blockLeft, styles.blockBottom]}>
          <Text style={styles.xo}>
            ❌
          </Text>
        </View>
      </View>
      {/* column 2 */}
      <View style={styles.column}>
        <View style={[styles.block, styles.blockTop]}>
          <Text style={styles.xo}>
            ⭕
          </Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.xo}>
            ❌
          </Text>
        </View>
        <View style={[styles.block, styles.blockBottom]}>
          <Text style={styles.xo}>
            ⭕
          </Text>
        </View>
      </View>
      {/* column 3 */}
      <View style={styles.column}>
        <View style={[styles.block, styles.blockTop, styles.blockRight]}>
          <Text style={styles.xo}>
            ❌
          </Text>
        </View>
        <View style={[styles.block, styles.blockRight]}>
          <Text style={styles.xo}>
            ❌
          </Text>
        </View>
        <View style={[styles.block, styles.blockBottom, styles.blockRight]}>
          <Text style={styles.xo}>
            ⭕
          </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 25,
    marginRight: 25,
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  block: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  blockTop: {
    borderBottomWidth: 5,
    borderBottomColor: 'black',
  },
  blockLeft: {
    borderRightColor: 'black',
    borderRightWidth: 5,
    borderRadius: 1,
  },
  blockBottom: {
    borderTopWidth: 5,
    borderTopolor: 'black',
  },
  blockRight: {
    borderLeftColor: 'black',
    borderLeftWidth: 5,
    borderRadius: 1,
  },
  xo: {
    fontSize: 80,
  },
});

export default function appendToEachArrayValue(array, appendString) {
  const var value = idx;

    for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}

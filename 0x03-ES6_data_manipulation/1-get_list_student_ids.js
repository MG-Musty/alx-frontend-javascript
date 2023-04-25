export default function getListStudentIds(arr) {
//the function is returning an empty array..

  if (!Array.isArray(arr)) return [];
// mapping the array  
  return arr.map((vals) => vals.id);
}

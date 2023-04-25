export default function getListStudentIds(arr) {
//the function is returning an empty array..

  if (!Array.isArray(arr)) return [];  
  return arr.map((vals) => vals.id);
}

function getResponseFromAPI(){
  
  return new Promise((resolve, reject) => {
  setTimeout(() => {
  resolved('resolved');
    }, 2000);
  });
}
export default getResponseFromAPI;

function getResponseFromAPI(){
  return new Promise((resolve, reject) => {
  settTimeout(() => {
  resolved('resolved');
    }, 2000);
  });
}
export default getResponseFromAPI;

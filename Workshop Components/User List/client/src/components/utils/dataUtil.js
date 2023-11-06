export const formatData = (isoData) =>{
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(isoData);
  return date.toLocaleDateString(undefined, options);
};
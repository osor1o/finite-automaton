export default ({ test, children, notTest = true }) => {
  if(!notTest)
    return children
  if(test)
    return children;
  return false;
}

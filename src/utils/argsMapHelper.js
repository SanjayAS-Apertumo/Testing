export async function argsMapHelper() {
  var args = process.argv.slice(2);
  var argsMap = {};
  args.forEach((arg, index) => {
    //console.log(`Argument ${index}: ${arg}`);
    if (index > 0) {
      let newArg = arg.slice(2);
      newArg = newArg.split('=');
      argsMap[newArg[0]] = newArg[1];
    }
  });
  return argsMap;
}

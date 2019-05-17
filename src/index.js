export default function varToThis() {
  return {
    name: 'var-to-this',
    generateBundle(options, bundle, isWrite) {
      Object.keys(bundle).forEach(key => {
        bundle[key].code = bundle[key].code.replace(/^var\s+/, 'this.');
      });
    }
  };
}
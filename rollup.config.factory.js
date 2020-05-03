export const getConfig = pkg => (
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'es',
      }
    ],
    external: [
      ...Object.keys(pkg.peerDependencies || {})
    ]
  }
);
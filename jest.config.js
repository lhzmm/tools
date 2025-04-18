module.exports = {
  preset: 'ts-jest',
  // preset: 'ts-jest/presets/js-with-ts', // 使用 ts-jest 处理 TypeScript 文件 // 支持 JS 和 TS 的 ES 模块
  testEnvironment: 'node', // 测试环境
  // testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'], // 匹配测试文件 (与 testRegex 配置互斥)
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // 支持的文件扩展名
  // collectCoverage: true, // 收集测试覆盖率
  // coverageDirectory: './coverage', // 覆盖率报告输出目录
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.base.json', // 显式指定 TS 配置
        useESM: true, // 启用 ESM 支持
      }
    ], // 处理 TS 文件
    '^.+\\.(js|jsx)$': 'babel-jest', // 处理 JS 文件（如果需要）
  },
  testRegex: [
    // 'getAxisMaxAndMin\\.test\\.js',
    // 'loop\\.test\\.js',
    // 'crypto\\.test\\.js',
    'arithmetic\\.test\\.js',
  ]
};
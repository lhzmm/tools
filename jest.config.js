module.exports = {
  preset: 'ts-jest/presets/js-with-ts', // 使用 ts-jest 处理 TypeScript 文件 // 支持 JS 和 TS 的 ES 模块
  testEnvironment: 'node', // 测试环境
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'], // 匹配测试文件
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // 支持的文件扩展名
  // collectCoverage: true, // 收集测试覆盖率
  // coverageDirectory: './coverage', // 覆盖率报告输出目录
};
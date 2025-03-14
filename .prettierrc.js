// https://prettier.io/docs/en/options.html
module.exports = {
  semi: false, // 不在语句末尾添加分号
  singleQuote: true, // 使用单引号
  tabWidth: 2, // 缩进宽度为 2 个空格
  trailingComma: 'es5', // 在对象或数组最后一个元素后添加逗号（ES5 语法）
  printWidth: 148, // 每行代码的最大长度为 148
  arrowParens: 'always', // 箭头函数参数始终使用括号
  bracketSpacing: true, // 在对象字面量的大括号内添加空格
  endOfLine: "lf", // 换行符的类型。"lf" 表示使用 Unix 风格的换行符（\n）
  htmlWhitespaceSensitivity: "css", // HTML 文件中空格的敏感度。"css" 表示根据 CSS 的默认行为来处理空格
  insertPragma: false, // 不在文件顶部插入 @format 标记
  jsxBracketSameLine: false, // JSX 的闭合标签 > 是否放在最后一行的末尾。false 表示放在新的一行
  jsxSingleQuote: false, // 是否在 JSX 中使用单引号。false 表示使用双引号
  proseWrap: "preserve", // 是否对 Markdown 文件中的文本进行换行。"preserve" 表示保持原样，不自动换行
  quoteProps: "as-needed", // 对象属性是否使用引号。"as-needed" 表示只在必要时（例如属性名包含特殊字符）使用引号
  requirePragma: false, // 是否只有在文件顶部有 @format 标记时才格式化文件。false 表示不需要标记
  useTabs: false, // 是否使用 Tab 缩进。false 表示使用空格而不是 Tab
  vueIndentScriptAndStyle: false, // 是否在 Vue 文件中缩进 <script> 和 <style> 标签内的内容。false 表示不缩进
};
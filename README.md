## vue-project
> 技术栈
- vue
- vue-router
- vuex
- webpack
- node

```javascript
时间：2017-11-27 ------
目的：对vue的学习
```

> ### .gitkeep
```java
它只是一个占位符；一个假文件；
由于git删除或者不将空目录添加到存储库；
gitkeep是一个hack，用于在仓库中保留空目录；
当没有内容时，保存一个空目录的作用便于跟踪；
```

> ### .eslintrc
- 检查代码规范
配置： "quotes": [2, "double"]
#### 第一部分是规则名
#### 第二部分是表示级别：0:-不验证；1-警告；2-错误
使用ESLint规则：
1. 使用.eslintrc文件
2. 在package.json中添加eslintConfig配置块
3. 代码文件中定义: "extends": "eslint:recommended"(使用默认规则进行校验)
*关闭验证： /*eslint-disable */
*开启验证： /*eslint-enable  */
*不验证：   /*eslint-disable no-alert, no-console */
*要验证：   /*eslint-enable no-alert */
## 常见规则说明
```java
1. 'no-var': 0,                           //禁止使用var，用let和const代替
2. 'no-console': 0,                       //禁止使用console
3. 'no-dupe-keys': 2,                     //在创建对象字面量时不允许键重复 {a:1,a:1}
4. 'no-dupe-args': 2,                     //函数参数不能重复
5. ...                                    //很多禁止的主要是给出级别但不常用未列出
6. 'array-bracket-spacing': [2, 'never'], //是否允许非空数组里面有多余的空格
7. 'comma-dangle': [2, 'never'],          //对象字面量项尾不能有逗号
8. 'consistent-return': 0,                //return 后面是否允许省略
9. 'indent': [2, 2],                      //缩进风格
//对象字面量中冒号的前后空格
10.'key-spacing': [0, { 'beforeColon': false, 'afterColon': true }],
11.'semi': [2, 'always'],                 //语句强制分号结尾
//分号前后空格
12.'semi-spacing': [0, {'before': false, 'after': true}],
13.'quotes': [1, 'single'],               //引号类型 `` "" ''
14.'space-after-keywords': [0, 'always'], //关键字后面是否要空一格
15.'space-before-blocks': [0, 'always'],     //不以新行开始的块{前面要不要有空格
16.'space-before-function-paren': [0, 'always'], //函数定义时括号前面要不要有空格
```

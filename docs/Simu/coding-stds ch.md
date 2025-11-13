# C++ Coding Standards


## 1. 目的

本文件的目的在于为 项目中使用 C++ 编程语言编写的计算机程序提供一致的编码指南。

## 2. 文档组织

本文档由规则、原因和建议组成。`Rule`是程序员必须遵守的内容，并将在同伴审查中进行检查。在`Reason`中解释为什么应当以这种方式进行。`Recommendation`是供参考的，不采纳该建议在同伴审查中不会被视为错误。

## 3. Source Code Organization

**Rule:** 使用下表所列的标准文件扩展名。

| Extension | Description |
| :--- | :--- |
| .c | C 源文件 |
| .cpp | C++ 源文件 |
| .h | C/C++ 头文件 |

**Reason:** 一致性与清晰性。

**Rule:** 当一个文件中只有一个类时，应根据所定义的类来命名该文件。  
**Reason:** 这有助于提高程序的可理解性与可确认性。

**Rule:** 当一个文件中只有一个类时，文件名的大小写应与类名的大小写一致。  
**Reason:** 这应有助于提高程序的可理解性与可确认性。在 Microsoft Windows 中，文件名 “System.h” 与 “system.h” 被视为同一个文件，因此文件名不能仅通过字符大小写区分。虽然 MS Windows 的文件管理系统对大小写不敏感，但它会以正确的大小写显示文件名。

**Rule:** 源文件中不要包含制表符，使用空格代替。  
**Reason:** 制表符设置会随着操作系统与编辑器不同而不同，这会阻碍开放系统开发与可读性。

**Rule:** 不要使用已弃用的函数（例如 strcpy()、strcat()、strstream、std::copy()、旧的 C I/O 库等）。  
**Reason:** 符合当前 C++ 语言标准。

**Rule:** 在 "include" 语句中引用头文件时使用相对路径，而非绝对路径。  
**Reason:** 使用绝对路径会使可移植性与维护变得更加困难。

**Rule:** 不要在头文件中使用 "pragma"（例如关闭警告）或 "using namespace" 语句。  
**Reason:** 这些会影响用户的代码并可能产生不期望的副作用。

**Rule:** 每个头文件必须加入预处理器防护指令代码。例如：
```c++
#ifndef Sample_header
#define Sample_header
...rest of header file...
#endif //Sample_header
```
**Reason:** 这可避免头文件被多次包含。

**Rule:** 在同一文件中保持代码与文档风格一致。  
**Reason:** 一致性有助于可读性。不同程序员在此问题上有不同偏好，但在修改文件时，应保持与现有格式一致。

**Rule:** 头文件应包含其类的文档。这应包括类名、描述与用途、处理的事件与槽，以及所有公共成员函数的描述。  
**Reason:** 确保至少向用户提供文档完善的头文件（和代码）。其他所需文档（例如用户指南、接口说明等）是在此基础之上的额外内容。


**Rule:** 在头文件（*.h）的顶部为类的公共接口编写文档。在头文件中为私有/受保护变量编写文档，并在源文件（*.cpp）中为私有/受保护函数编写文档。  
**Reason:** 该规则将提高程序的可读性。

**Rule:** 在重写基类的虚成员函数时，应在各个区域（public、protected、private）的末尾声明这些函数，并添加注释 “XXXX Class Interface”，其中 XXX 为最初声明这些虚函数的基类名。  
**Reason:** 代码可读性。此方式用于标识我们正在重写基类的接口。

**Recommendation:** 在 C++ 代码中使用 C++ 风格注释 “// comment”。在 C 代码及嵌入式注释中使用 C 风格注释 “/* comment */”。  
Example:

```c++
// C++ style for comment blocks
int n=5 ; // and for in-line notes at the end of a statement
for (int i = 0; i < n; i++ /* C style for embedded comment */ ) { }
```

**Reason:**  许多 C++项目会混合包含C++和 C 文件。使用 C++ 和 C 风格注释有助于识别文件中的语言。然而，C++ 注释不允许嵌入式注释；它们会一直延续到行末。同时，C 代码受语言限制只能使用 C 风格注释。

## 4. Variables

**Rule:** 所有变量名和函数名应以小写字母开头，并在名称中每增加一个单词时以大写字母开头。  
Examples: `startWithLowerCase`, `otherWordsGetUpperCase`.  
**Reason:**  这将有助于提高程序可读性。

**Recommendation:** 变量名称应具有描述性。  
**Reason:**  这应使程序更易于理解与确认。

**Rule:** 按照最小可能作用域声明变量。  
**Reason:**  提高可读性并有助于代码分区。

**Rule:** 不要使用全局变量或常量。  
**Reason:**  这样可以提高可靠性。全局变量无法控制由谁修改。

**Rule:** 在使用之前初始化所有变量。  
**Reason:**  默认初始值会因编译器不同而变化。

**Rule:** 每个语句只声明一个变量。  
**Reason:**  这样可以提高可读性和可靠性，并使添加限定符、初始化和注释变量更加容易。

```c++
const int iconst =15; // Example single line declaration
```


**Rule:** 在指针初次创建时，将其初始化为有效地址或零。  
**Reason:**  这将提高程序的可靠性。

**Rule:** 在变量首次被赋值时声明变量  
Example:


```c++
A * p=new A();
int k = i + j + 5;
```

**Reason:**  满足关于初始化、限制作用域以及每条语句只声明一个变量的规则。

**Rule:** 在 “for” 循环中，将索引的作用域限制在循环内部。  
Example 1:


```c++
for (int i = 0; i < n; i++) {
    /* scope of 'i' is limited to the loop */
}
```

Example 2:

```c++
int i;
for (i = 0; i < n; i++) {
    /* scope of 'i' is NOT limited to the loop */
}
```

**Reason:**  这将把索引限制在最小可能的作用域内。注意某些编译器需要设置选项开关以启用 “In For Loop Scope”。

**Rule:** 如果函数接收到一个指针参数，该函数必须验证该指针不为零。  
**Reason:**  这将提高程序的可靠性。

**Rule:** 不要在函数原型中使用 “void” 指针。  
**Reason:**  这可提高可靠性；void 指针无法进行类型检查。

**Rule:** 对逻辑操作，应使用布尔类型（bool）的 “true” 和 “false”，而不是整型（int）的 “TRUE” 和 “FALSE”。  
**Reason:**  类型检查。

**Rule:** 将未使用或无效的指针设置为零，而不是 “NULL”。  
**Reason:**  “NULL” 是从 C 语言沿用下来的，尽管通常它被设为零，但并非始终如此。如果将未被定义为零的 “NULL” 指针传递给期望接收 “零” 指针的函数，将会产生不期望的结果。

**Rule:** 在条件语句中测试非布尔（bool）类型时，应显式与零比较，而不是依赖编译器的隐式零判断。  
Examples:


```c++
if (p!=0) // Correct
if (p) // Incorrect
if (p==0) // Correct
if (!p) // Incorrect
```

**Reason:**  条件运算的结果应由显式的逻辑表达式或布尔变量决定。

**Recommendation:** 在使用 “new” 运算符分配动态内存时，应始终检查 “new” 是否返回零指针。  
**Reason:** 系统可能没有足够的内存满足请求。在这种情况下，“new” 会返回零值。

**Recommendation:** 在创建 long 类型常量时使用 “L” 后缀，而不是 “l”。  
**Reason:** 小写 “l” 看起来像数字 1，使用大写 “L” 能提高代码可读性。

**Rule:** 在声明指针或引用时，将 “*” 或 “&” 附着在类型上。  
Example:


```c++
int* ptr = new int; // memory allocated on free store
```


**Reason:**  指针和引用限定符改变的是变量的类型，而不是其名称。此外，这也是在函数调用中对指针应用 “const” 所必需的方式。  
Example: `func(const int* const p)`

**Rule:** 在为指针分配内存时，使用关键字 “new”，而不是旧的 “malloc()”。  
**Reason:**  这是 C++。

**Rule:** 对指针调用 “delete” 或 “unref()” 之后，应将其设置为零。  
**Reason:**  这能防止出现悬空指针。

**Rule:** 在将值或对象传递给函数时，对于不会改变的值（“in”）和将被返回的对象指针（“in-out”），都应使用 “const” 引用。  
**Reason:**  使用指针按引用传递值时，在函数内部反复需要对指针进行解引用，会提醒程序员外部的值正在被修改。

**Rule:** 常量名称应全部使用大写字母，并在需要时使用下划线。例如：`MAX_ARRAY_LENGTH`。  
**Reason:**  这样可以提高可读性。

**Rule:** 基于首字母缩略词的变量名不应全部大写。  
**Reason:**  否则不易明显区分为变量名，并可能与常量混淆（见上）。例如，Time-Of-Flight 的变量名应为 “tof” 而不是 “TOF”。

**Rule:** 将常量声明为 “const” 变量或枚举类型，而不是使用预处理指令 “#define”。  
**Reason:**  预处理器的 #define 指令执行全局替换，可能产生不希望的副作用，而且它不提供编译器对变量与枚举类型的类型检查能力。

**Rule:** 在抛出异常时，应抛出指向异常的指针。  
Example:

```c++
throw new ExpWeHaveAProblem();
```

**Reason:**  一个异常在被捕获前可能会被复制多次，仅复制指针更高效。

**Rule:** 使用 "dynamic_cast" 来转换指针，并测试转换结果是否为零。  
**Reason:**  使用 "dynamic_cast" 会检查被转换对象的类型信息，并在类型不正确时返回零。注意某些编译器需要开启运行时类型检查选项。

**Rule:** 不要使用平台特定的类型定义。例如 "long long"。  
**Reason:**  这会妨碍可移植性。

**Rule:** 不要移除（cast-away）"const" 限定符。  
**Reason:**  这会削弱编译器确保常量变量或对象不被修改的能力。

**Rule:** 不要在函数调用的参数中直接创建新对象  
Example: func( new Abc() )  
**Reason:**  这将造成内存泄漏。谁负责释放或删除该对象是不明确的。

## 5. Classes

**Rule:** 所有类和类型的名称应以大写字母开头，并在名称中每增加一个单词时以大写字母开头。  
Example: ClassNamesStartUpperCase  
**Reason:**  这有助于提高程序可读性。

**Rule:** 基于首字母缩略词的类名不应全部大写。  
**Reason:**  否则不易明显区分为类名，并可能与其他命名风格混淆。例如，Surface-to-Air-Missile 类应命名为 “Sam” 而不是 “SAM”，后者可能与常量混淆。

**Rule:** 在创建类时，应将内容排列为 public 部分最先，然后是 protected，最后是 private。  
**Reason:**  这样能使代码更易理解且更统一。

**Rule:** 不要使用 public 成员变量。  
**Reason:**  该规则符合信息隐藏与模块化的工程原则。

**Recommendation:** 不要使用 protected 成员变量。  
**Reason:**  这符合信息隐藏与模块化的工程原则。

**Rule:** 不要使用多重继承。  
**Reason:**  使用多重继承会增加维护难度与程序复杂性。

**Rule:** 对成员函数返回的指向内部私有数据的指针或引用，加上 “const” 限定符。  
Example: const float* getDataArray() const;  
**Reason:**  这将限制修改私有数据的能力，使程序更加可靠。

**Rule:** 如果成员函数确实需要返回不带 “const” 限定符的指针，则应同时提供 const 与非 const 版本的函数。  
Example:

```c++
float* getDataArray();
const float* getDataArray() const;
```
**Reason:**  当对象实例被加上 “const” 限定符时，编译器会使用第二个函数。

**Rule:** 所有非静态成员变量必须由构造函数或由构造函数调用的函数进行初始化，所有静态成员变量必须在 *.cpp 文件中初始化。  
**Reason:**  该规则将提高程序的可靠性。

**Rule:** 不要用另一个类的静态成员变量来初始化本类的静态成员变量。  
**Reason:**  无法确保静态成员变量按照正确的顺序初始化。

**Rule:** 在使用类的指针时，不要包含该类的头文件，而应使用不完整类型声明进行前置声明。  
Example:

```c++
#include "A.h"; // Not needed (This is what not to do)
Class A; // Incomplete type declaration (Do this)
Class B;
{
    <some code>
    <some more code>
private
    A* pa; // a pointer to class A.
}
```

**Reason:**  这有助于实现信息隐藏原则。



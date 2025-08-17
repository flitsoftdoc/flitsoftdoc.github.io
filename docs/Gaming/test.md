test

/// tab | Tab 222 title
Tab 1 content
///

/// tab | Tab 2 title
Tab 2 content
///


=== "Latest"

    ``` sh
    pip install mkdocs-material
    ```

=== "9.x"

    ``` sh
    pip install mkdocs-material=="9.*" # (1)!
    ```

/// note | 标题

内容
///

/// details | 标题
    type: warning

可折叠内容
///

/// tab | Python
     select: true

```python
print("helloo")
```
///
/// tab | C++

```cpp
#include <iostream>
int main(){ std::cout << "hello\n"; }
```
///
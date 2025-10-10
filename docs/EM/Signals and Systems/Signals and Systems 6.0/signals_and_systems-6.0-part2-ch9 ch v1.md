# 第9章 离散时间线性时不变系统

## 9.1 引言

在前一章中，我们确定了系统可能具备的若干特性。其中两项特性是线性性和时不变性。在本章中，我们将注意力集中于同时具备这两种特性的系统。这类系统称为线性时不变（LTI）系统。
## 9.2 离散时间卷积

在 LTI 系统的背景下，一种称为卷积的数学运算显得尤为重要。序列 $x$ 和 $h$ 的卷积，记作 $x * h$，定义为序列

$$
\begin{equation*}
x * h(n)=\sum_{k=-\infty}^{\infty} x(k) h(n-k) \tag{9.1}
\end{equation*}
$$

在此，星号（即 "*"）用于表示卷积，而非乘法。区分卷积与乘法非常重要，因为这两种运算本质上不同，通常不会得到相同的结果。

符号上，$x * h$ 表示一个序列，即 $x$ 与 $h$ 卷积后的序列。相比之下，$x * h(n)$ 表示在 $n$ 处对序列 $x * h$ 的取值。虽然我们可以用额外的一对括号写作 $(x * h)(n)$，但通常省略这对括号，因为这样不会引入歧义，并且表示更简洁。换言之，在表达式 $x * h(n)$ 中，运算的组合方式只有一种合理解释。写作 $x *[h(n)]$ 是不合理的，因为卷积需要两个序列作为操作数，而 $h(n)$ 并不是序列，而是 $h$ 在 $n$ 处的值。因此，表达式 $x * h(n)$ 唯一合理的解释是 $(x * h)(n)$。

由于卷积运算在系统理论中被广泛使用，我们需要一些实用方法来计算卷积和。假设对于给定的序列 $x$ 和 $h$，我们希望计算

$$
x * h(n)=\sum_{k=-\infty}^{\infty} x(k) h(n-k)
$$

当然，我们可以天真地尝试通过对每一个可能的 $n$ 值单独求和来计算 $x * h(n)$。然而，这种方法不可行，因为 $n$ 可以取无限多个值，因此需要进行无限次求和。相反，我们考虑一种略有不同的方法。令我们用中间序列 $w_{n}(k)$ 重新定义求和，其中

$$
w_{n}(k)=x(k) h(n-k)
$$

（注意 $w_{n}(k)$ 隐含地是 $n$ 的函数。）这意味着我们需要计算

$$
x * h(n)=\sum_{k=-\infty}^{\infty} w_{n}(k)
$$

现在我们观察到，对于大多数实际感兴趣的序列 $x$ 和 $h$，$w_{n}(k)$ 的形式通常在特定的 $n$ 范围内保持不变。因此，我们可以通过首先确定每个不同的 $w_{n}(k)$ 表达式及其适用范围，然后在每个范围内进行求和，来计算卷积结果 $x * h$。通过这种方式，我们通常只需要计算少量求和，而不是前述天真方法所需的无限求和。
上面的讨论引出了一种计算卷积的一般方法：

1. 绘制 $x(k)$ 和 $h(n-k)$ 关于 $k$ 的图像。
2. 最初，考虑 $n$ 取一个任意大的负值。这将导致 $h(n-k)$ 在时间轴上被向左移动很远。
3. 写出 $w_{n}(k)$ 的数学表达式。
4. 逐渐增加 $n$，直到 $w_{n}(k)$ 的表达式形式发生变化。记录该表达式有效的区间。
5. 重复步骤 3 和 4，直到 $n$ 取一个任意大的正值。这对应于 $h(n-k)$ 在时间轴上被向右移动很远。
6. 对上面确定的每个区间，求 $w_{n}(k)$ 的和，以得到 $x * h(n)$ 的表达式。这样可以为每个区间得到 $x * h(n)$ 的表达式。
7. 将各个区间的结果组合起来，以得到所有 $n$ 的卷积结果 $x * h(n)$。

根据被卷积序列的形式，我们可以采用上述策略的多种变体。然而，在大多数情况下，绘制卷积运算中涉及的各序列的图像非常有帮助，因为这通常使答案的一般形式更易于直观理解。有时，从图像中得到的信息也可以更方便地以表格形式表示。因此，使用表格也很有帮助。下面，我们通过几个例子来说明卷积的计算方法。

**例 9.1** 计算 $x * h$，其中

$$
x(n)=2^{-|n|} \quad \text { 和 } \quad h(n)=u(n-2) .
$$

**解答** 根据卷积的定义，我们有

$$
\begin{aligned}
x * h(n) & =\sum_{k=-\infty}^{\infty} x(k) h(n-k) \\
& =\sum_{k=-\infty}^{\infty} 2^{-|k|} u(n-k-2)
\end{aligned}
$$

由于 $u(n-k-2)=0$ 当 $k>n-2$，我们可以写作

$$
\begin{aligned}
x * h(n) & =\sum_{k=-\infty}^{n-2} 2^{-|k|} \\
& = \begin{cases}\sum_{k=-\infty}^{n-2} 2^{k} & n-2 \leq 0 \\ \sum_{k=-\infty}^{0} 2^{k}+\sum_{k=1}^{n-2} 2^{-k} & n-2>0\end{cases} \\
& = \begin{cases}\sum_{k=-\infty}^{n-2} 2^{k} & n \leq 2 \\ \sum_{k=-\infty}^{0} 2^{k}+\sum_{k=1}^{n-2} 2^{-k} & n>2\end{cases}
\end{aligned}
$$

通常，确定卷积计算中出现的各种情况可能有些棘手。在本例中，我们有两种情况：$n \leq 2$ 和 $n>2$。这些情况的原因可以通过观察 $x(k)$ 和 $h(n-k)$ 关于 $k$ 的图像更容易理解，如图 9.1 所示。现在，我们简化上式中出现的各求和式。我们有

$$
\begin{aligned}
\sum_{k=-\infty}^{n-2} 2^{k} & =\sum_{k=2-n}^{\infty}\left(\frac{1}{2}\right)^{k}=\sum_{k=0}^{\infty}\left(\frac{1}{2}\right)^{k+2-n}=\sum_{k=0}^{\infty}\left(\frac{1}{2}\right)^{2-n}\left(\frac{1}{2}\right)^{k} \\
& =\frac{\left(\frac{1}{2}\right)^{2-n}}{1-\frac{1}{2}}=\left(\frac{1}{2}\right)^{2-n}\left(\frac{1}{2}\right)^{-1}=\left(\frac{1}{2}\right)^{1-n} \\
& =2^{n-1} \\
\sum_{k=-\infty}^{0} 2^{k} & =\sum_{k=0}^{\infty} 2^{-k}=\sum_{k=0}^{\infty}\left(\frac{1}{2}\right)^{k} \\
& =\frac{1}{1-\frac{1}{2}}=\frac{1}{\frac{1}{2}}=(1)(2) \\
& =2, \quad \text { 并且 } \\
\sum_{k=1}^{n-2} 2^{-k} & =\sum_{k=0}^{n-3} 2^{-(k+1)}=\sum_{k=0}^{n-3}\left(\frac{1}{2}\right)\left(\frac{1}{2}\right)^{k} \\
& =\left(\frac{1}{2}\right)\left(\frac{\left(\frac{1}{2}\right)^{n-2}-1}{\frac{1}{2}-1}\right)=\left(\frac{1}{2}\right)\left(\frac{\left(\frac{1}{2}\right)^{n-2}-1}{-\frac{1}{2}}\right) \\
& =1-\left(\frac{1}{2}\right)^{n-2} .
\end{aligned}
$$

将这些简化后的表达式代入之前的 $x * h$ 公式，得到

$$
x * h(n)= \begin{cases}2^{n-1} & n \leq 2 \\ 3-\left(\frac{1}{2}\right)^{n-2} & n>2\end{cases}
$$
**例 9.2** 计算 $x * h$，其中

$$
x(n)=\left\{\begin{array}{ll}
\left(\frac{3}{4}\right)^{-n-4} & n \leq-5 \\[2mm]
1 & -4 \leq n \leq 4 \\[1mm]
\left(\frac{3}{4}\right)^{n-4} & n \geq 5
\end{array} \quad \text { 和 } \quad h(n)=u(n+2)-u(n-5)\right.
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-046.jpg?height=1298&width=1284&top_left_y=702&top_left_x=351){width="400"}
  
图 9.1：例 9.1 的图像。分别绘制了 (a) $x(k)$，(b) $h(k)$，和 (c) $h(n-k)$ 关于 $k$ 的图像。

**解答** 为了帮助直观理解卷积计算中涉及的各种情况，我们在图 9.2 中绘制了 $x(k)$、$h(k)$ 和 $h(n-k)$ 关于 $k$ 的图像。从这些图像可以推导出卷积计算中有五种情况：

1. $n \leq -7$，来自 $n+2 \leq -5$；
2. $-6 \leq n \leq -1$，来自 $n-4 \leq -5$ 且 $n+2 \geq -4$；
3. $0 \leq n \leq 2$，来自 $n-4 \geq -4$ 且 $n+2 \leq 4$；
4. $3 \leq n \leq 8$，来自 $n-4 \leq 4$ 且 $n+2 \geq 5$；
5. $n \geq 9$，来自 $n-4 \geq 5$。

我们依次考虑上述每种情况。

**第一种情况**：

$$
\begin{aligned}
x * h(n) & =\sum_{k=n-4}^{n+2}\left(\frac{3}{4}\right)^{-k-4}(1)=\sum_{k=n-4}^{n+2}\left(\frac{3}{4}\right)^{-k-4} \\
& =\sum_{k=0}^{6}\left(\frac{3}{4}\right)^{-k-n}\sum_{k=0}^{6}\left(\frac{4}{3}\right)^{n}\left(\frac{4}{3}\right)^{k}=\left(\frac{4}{3}\right)^{n} \frac{\left(\frac{4}{3}\right)^{7}-1}{\frac{4}{3}-1} \\
& =\frac{14197}{729}\left(\frac{4}{3}\right)^{n}
\end{aligned}
$$

**第二种情况**：

$$
\begin{aligned}
x * h(n) & =\sum_{k=n-4}^{-5}\left(\frac{3}{4}\right)^{-k-4}(1)+\sum_{k=-4}^{n+2}(1)(1) \\
& =\left[\sum_{k=n-4}^{-5}\left(\frac{4}{3}\right)^{k+4}\right]+n+7 \\
& =n+7+\sum_{k=0}^{-n-1}\left(\frac{4}{3}\right)^{n}\left(\frac{4}{3}\right)^{k}=n+7+\left(\frac{4}{3}\right)^{n} \frac{\left(\frac{4}{3}\right)^{-n}-1}{\frac{4}{3}-1} \\
& =n+7+3\left[1-\left(\frac{4}{3}\right)^{n}\right] \\
& =n-3\left(\frac{4}{3}\right)^{n}+10
\end{aligned}
$$

**第三种情况**：

$$
\begin{aligned}
x * h(n) & =\sum_{k=n-4}^{n+2}(1)(1) = 7
\end{aligned}
$$

**第四种情况**：

$$
\begin{aligned}
x * h(n) & =\sum_{k=n-4}^{4}(1)(1)+\sum_{k=5}^{n+2}\left(\frac{3}{4}\right)^{k-4}(1) \\
& =8-n+\sum_{k=0}^{n-3}\left(\frac{3}{4}\right)\left(\frac{3}{4}\right)^{k} = 8-n+\frac{3}{4} \frac{\left(\frac{3}{4}\right)^{n-2}-1}{\frac{3}{4}-1} \\
& =8-n-4\left(\frac{3}{4}\right)\left[\left(\frac{3}{4}\right)^{n-2}-1\right] = 12-\frac{16}{3}\left(\frac{3}{4}\right)^{n}-n
\end{aligned}
$$

**第五种情况**：

$$
\begin{aligned}
x * h(n) & =\sum_{k=n-4}^{n+2}\left(\frac{3}{4}\right)^{k-4}(1) = \sum_{k=0}^{6}\left(\frac{3}{4}\right)^{n-8}\left(\frac{3}{4}\right)^{k} = \left(\frac{3}{4}\right)^{n-8} \frac{\left(\frac{3}{4}\right)^{7}-1}{\frac{3}{4}-1} \\
& =\frac{227152}{6561}\left(\frac{3}{4}\right)^{n}
\end{aligned}
$$

将上述结果结合，得到：

$$
x * h(n)= \begin{cases}\frac{14197}{729}\left(\frac{4}{3}\right)^{n} & n \leq -7 \\[1mm] n-3\left(\frac{4}{3}\right)^{n}+10 & -6 \leq n \leq -1 \\[1mm] 7 & 0 \leq n \leq 2 \\[1mm] 12-\frac{16}{3}\left(\frac{3}{4}\right)^{n}-n & 3 \leq n \leq 8 \\[1mm] \frac{227152}{6561}\left(\frac{3}{4}\right)^{n} & n \geq 9 \end{cases}
$$

$x * h$ 的图像如图 9.3 所示。

**例 9.3** 计算 $x * h$，其中

$$
x(n)=\delta(n)+2 \delta(n-1)+\delta(n-2) \quad \text { 和 } \quad h(n)=\frac{1}{2} \delta(n+1)+\frac{1}{2} \delta(n)
$$

**解答** 该卷积最容易通过图解法或表格法进行。下面我们选择表格法。通过构建一张显示 $x$ 以及 $h$ 的各种时间反转和移位版本的表格，可以轻松计算 $x * h$ 的各元素。该过程结果见表 9.1。从表中可得：

$$
x * h(n)=\frac{1}{2} \delta(n+1)+\frac{3}{2} \delta(n)+\frac{3}{2} \delta(n-1)+\frac{1}{2} \delta(n-2) .
$$
**例 9.4** 计算 $x * h$，其中

$$
x(n)=\left(\frac{1}{2}\right)^{n} u(n) \quad \text { 和 } \quad h(n)=u(n) .
$$

**解答** 根据卷积的定义，我们有

$$
\begin{aligned}
x * h(n) & =\sum_{k=-\infty}^{\infty} x(k) h(n-k) \\
& =\sum_{k=-\infty}^{\infty}\left(\frac{1}{2}\right)^{k} u(k) u(n-k)
\end{aligned}
$$

由于 $u(k)=0$ 当 $k<0$ 且 $u(n-k)=0$ 当 $k>n$，因此可以写作

$$
\begin{aligned}
x * h(n) & = \begin{cases}\sum_{k=0}^{n}\left(\frac{1}{2}\right)^{k} & n \geq 0 \\ 0 & \text { 否则 }\end{cases} \\
& =\left(\sum_{k=0}^{n}\left(\frac{1}{2}\right)^{k}\right) u(n)
\end{aligned}
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-049.jpg?height=1246&width=1278&top_left_y=370&top_left_x=478){width="400"}
  
图 9.2：例 9.2 的图像。分别绘制了 (a) $x(k)$，(b) $h(k)$，和 (c) $h(n-k)$ 关于 $k$ 的图像。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-049.jpg?height=476&width=1260&top_left_y=1845&top_left_x=483){width="400"}
  
图 9.3：例 9.2 的序列 $x * h$。

表 9.1：例 9.3 的卷积计算

![](https://cdn.mathpix.com/snip/images/X8jdLOZxMWJKv8wPppRSxH9O2-pmnfnbYATueRGxTso.original.fullsize.png){width="400"}


通常，确定卷积计算中出现的各种情况可能有些棘手。在本例中，我们有两种情况：$n \geq 0$ 和 $n<0$。这些情况的原因可以通过观察 $x(k)$ 和 $h(n-k)$ 关于 $k$ 的图像更容易理解，如图 9.4 所示。利用等比数列求和公式，我们可以写作

$$
x * h(n)=\delta(n)+2 \delta(n-1)+6 \delta(n-2)-6 \delta(n-4)-2 \delta(n-5)-\delta(n-6) .
$$

进一步简化为

$$
\begin{aligned}
x * h(n) & =\left[\frac{\left(\frac{1}{2}\right)^{n+1}-1}{\frac{1}{2}-1}\right] u(n) \\
& =-2\left[\left(\frac{1}{2}\right)^{n+1}-1\right] u(n) \\
& =\left[2-\left(\frac{1}{2}\right)^{n}\right] u(n)
\end{aligned}
$$
**例 9.5** 计算 $x * h$，其中

$$
\begin{gathered}
x(n)=\delta(n)+3 \delta(n-1)+9 \delta(n-2)+9 \delta(n-3)+3 \delta(n-4)+\delta(n-5) ,\\
h(n)=\delta(n)-\delta(n-1)
\end{gathered}
$$

**解答** 该卷积最容易通过图解法或表格法进行。下面我们选择表格法。通过构建一张显示 $x$ 以及 $h$ 的各种时间反转和移位版本的表格，可以轻松计算 $x * h$ 的各元素。该过程结果见表 9.2。从表中可得：

$$
x * h(n)=\delta(n)+2 \delta(n-1)+6 \delta(n-2)-6 \delta(n-4)-2 \delta(n-5)-\delta(n-6) .
$$
## 9.3 卷积的性质

由于卷积在研究线性时不变（LTI）系统中经常使用，因此了解其一些基本性质是非常重要的。下面，我们将考察其中的一些性质。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-051.jpg?height=1068&width=1278&top_left_y=348&top_left_x=478){width="400"}

图 9.4：示例 9.4 的绘图。绘制了 (a) $x(k)$, (b) $h(k)$, 和 (c) $h(n-k)$ 关于 $k$ 的变化。

表 9.2：示例 9.5 的卷积计算

![](https://cdn.mathpix.com/snip/images/odSejA6se_fGKAkrepw7q84IMcSSJPj6ncz7U8lRaHk.original.fullsize.png){width="400"}


**定理 9.1（卷积的交换律）**。卷积是交换的。也就是说，对于任意两个序列 $x$ 和 $h$，
$$
\begin{equation*}
x * h=h * x \tag{9.2}
\end{equation*}
$$
换句话说，卷积的结果不受操作数顺序的影响。

**证明**。下面给出上述交换律的证明。首先，展开 (9.2) 左边：
$$
x * h(n)=\sum_{k=-\infty}^{\infty} x(k) h(n-k) .
$$
接下来，进行变量代换。令 $v=n-k$，则 $k=n-v$。使用此变量代换，可以将上式改写为：
$$
\begin{aligned}
x * h(n) & =\sum_{v=n+\infty}^{n-\infty} x(n-v) h(v) \\
& =\sum_{v=\infty}^{-\infty} x(n-v) h(v) \\
& =\sum_{v=-\infty}^{\infty} x(n-v) h(v) \\
& =\sum_{v=-\infty}^{\infty} h(v) x(n-v) \\
& =h * x(n)
\end{aligned}
$$
因此，我们证明了卷积是交换的。

**定理 9.2（卷积的结合律）**。卷积是结合的。也就是说，对于任意三个序列 $x, h_{1}$ 和 $h_{2}$，
$$
\begin{equation*}
\left(x * h_{1}\right) * h_{2}=x *\left(h_{1} * h_{2}\right) . \tag{9.3}
\end{equation*}
$$
换句话说，多次卷积的最终结果不依赖于卷积操作的分组方式。

**证明**。首先，利用卷积定义展开 (9.3) 左边：
$$
\begin{aligned}
\left(\left[x * h_{1}\right] * h_{2}\right)(n) & =\sum_{\ell=-\infty}^{\infty}\left[x * h_{1}(\ell)\right] h_{2}(n-\ell) \\
& =\sum_{\ell=-\infty}^{\infty}\left(\sum_{k=-\infty}^{\infty} x(k) h_{1}(\ell-k)\right) h_{2}(n-\ell)
\end{aligned}
$$
现在，交换求和顺序得到：
$$
\left(\left[x * h_{1}\right] * h_{2}\right)(n)=\sum_{k=-\infty}^{\infty} \sum_{\ell=-\infty}^{\infty} x(k) h_{1}(\ell-k) h_{2}(n-\ell) .
$$
将 $x(k)$ 提到内层求和之外：
$$
\left(\left[x * h_{1}\right] * h_{2}\right)(n)=\sum_{k=-\infty}^{\infty} x(k) \sum_{\ell=-\infty}^{\infty} h_{1}(\ell-k) h_{2}(n-\ell) .
$$
接下来，进行变量代换。令 $\lambda=\ell-k$，则 $\ell=\lambda+k$。使用此代换，得到：
$$
\begin{aligned}
\left(\left[x * h_{1}\right] * h_{2}\right)(n) & =\sum_{k=-\infty}^{\infty} x(k) \sum_{\lambda=-\infty-k}^{\infty-k} h_{1}(\lambda) h_{2}(n-\lambda-k) \\
& =\sum_{k=-\infty}^{\infty} x(k) \sum_{\lambda=-\infty}^{\infty} h_{1}(\lambda) h_{2}(n-\lambda-k) \\
& =\sum_{k=-\infty}^{\infty} x(k)\left(\sum_{\lambda=-\infty}^{\infty} h_{1}(\lambda) h_{2}([n-k]-\lambda)\right) \\
& =\sum_{k=-\infty}^{\infty} x(k)\left[h_{1} * h_{2}(n-k)\right] \\
& =\left(x *\left[h_{1} * h_{2}\right]\right)(n)
\end{aligned}
$$
因此，我们证明了卷积是结合的。

**定理 9.3（卷积的分配律）**。卷积是分配的。也就是说，对于任意三个序列 $x, h_{1}$ 和 $h_{2}$，
$$
\begin{equation*}
x *\left(h_{1}+h_{2}\right)=x * h_{1}+x * h_{2} \tag{9.4}
\end{equation*}
$$
换句话说，卷积可以分配到加法上。

**证明**。此性质的证明相对简单。展开 (9.4) 左边：
$$
\begin{aligned}
\left(x *\left[h_{1}+h_{2}\right]\right)(n) & =\sum_{k=-\infty}^{\infty} x(k)\left[h_{1}(n-k)+h_{2}(n-k)\right] \\
& =\sum_{k=-\infty}^{\infty} x(k) h_{1}(n-k)+\sum_{k=-\infty}^{\infty} x(k) h_{2}(n-k) \\
& =x * h_{1}(n)+x * h_{2}(n)
\end{aligned}
$$
因此，我们已经证明卷积是分配的。
在一个集合上的运算中，了解该运算的单位元通常非常有用。考虑实数的加法和乘法运算。对于任意实数 $a$，有 $a+0=a$。由于将零加到 $a$ 上不会改变结果（即结果仍为 $a$），我们称 0 为加法单位元。对于任意实数 $a$，有 $1 \cdot a = a$。由于将 $a$ 乘以 1 不会改变结果（即结果仍为 $a$），我们称 1 为乘法单位元。可以想象，如果我们不知道 $a+0=a$ 或 $1 \cdot a=a$，算术将会多么困难。因此，单位元显然具有根本性的重要性。

前面，我们引入了一种新的运算，称为卷积。因此，结合上述内容，自然会想知道是否存在卷积的单位元。事实上是存在的，如下面的定理所示。
**定理 9.4（卷积单位元）**。对于任意序列 $x$，有
$$
\begin{equation*}
x * \delta=x \tag{9.5}
\end{equation*}
$$
换句话说，$\delta$ 是卷积的单位元（即，将任意序列 $x$ 与 $\delta$ 卷积，结果仍为 $x$）。

**证明**。假设我们有一个任意序列 $x$。根据卷积的定义，可以写作：
$$
x * \delta(n)=\sum_{k=-\infty}^{\infty} x(k) \delta(n-k)
$$
现在，我们进行变量代换。令 $\lambda=-k$，则 $k=-\lambda$。应用该变量代换，得到：
$$
\begin{align*}
x * \delta(n) & =\sum_{\lambda=-(-\infty)}^{-(\infty)} x(-\lambda) \delta(n+\lambda) \\
& =\sum_{\lambda=\infty}^{-\infty} x(-\lambda) \delta(n+\lambda) \\
& =\sum_{\lambda=-\infty}^{\infty} x(-\lambda) \delta(\lambda+n) \tag{9.6}
\end{align*}
$$
根据 $\delta$ 的等效性质，可以将上述方程改写为：
$$
\begin{aligned}
x * \delta(n) & =\sum_{\lambda=-\infty}^{\infty} x(-[-n]) \delta(\lambda+n) \\
& =\sum_{\lambda=-\infty}^{\infty} x(n) \delta(\lambda+n)
\end{aligned}
$$
将 $x(n)$ 提出求和符号外，得到：
$$
x * \delta(n)=x(n) \sum_{\lambda=-\infty}^{\infty} \delta(\lambda+n)
$$
由于 $\sum_{\lambda=-\infty}^{\infty} \delta(\lambda)=1$ 意味着 $\sum_{\lambda=-\infty}^{\infty} \delta(\lambda+n)=1$，因此有：
$$
x * \delta(n)=x(n)
$$
因此，$\delta$ 是卷积的单位元（即 $x * \delta=x$）。  
（或者，我们也可以直接对 (9.6) 应用筛选性质以得到所需结果。）
## 9.4 周期卷积

两个周期序列的卷积通常不容易明确定义。这促使我们为周期序列引入一种替代的卷积概念，称为周期卷积。$N$-周期序列 $x$ 和 $h$ 的周期卷积，记作 $x \circledast h$，定义为：
$$
x \circledast h(n)=\sum_{k=\langle N\rangle} x(k) h(n-k),
$$
其中 $\sum_{k=\langle N\rangle}$ 表示在长度为 $N$ 的区间上求和。等价地，周期卷积可以写作：
$$
x \circledast h(n)=\sum_{k=0}^{N-1} x(k) h(\bmod (n-k, N)),
$$
其中 $\bmod (a, b)$ 表示 $a$ 除以 $b$ 后的余数。$N$-周期序列 $x$ 和 $h$ 的周期卷积与（线性）卷积的关系为：
$$
x \circledast h(n)=x_{0} * h(n) \quad \text { 其中 } \quad x(n)=\sum_{k=-\infty}^{\infty} x_{0}(n-N k)
$$
（即，$x_{0}(n)$ 在 $x$ 的一个周期内等于 $x(n)$，在其他地方为零）。
## 9.5 LTI 系统的表征与卷积

在术语上，系统 $\mathcal{H}$ 的冲激响应 $h$ 定义为
$$
h=\mathcal{H} \delta
$$
换句话说，系统的冲激响应是当系统的输入为 $\delta$ 时产生的输出。事实证明，LTI 系统的输入、输出与冲激响应之间存在一种非常特殊的关系，如下定理所示。

**定理 9.5（LTI 系统与卷积）**。具有冲激响应 $h$ 的 LTI 系统 $\mathcal{H}$ 满足
$$
\mathcal{H} x=x * h
$$
换句话说，LTI 系统执行卷积运算。特别地，系统的输出由输入与冲激响应的卷积给出。

**证明**。首先，假设 $\mathcal{H}$ 是 LTI 的（即 $\mathcal{H}$ 既是线性的又是时间不变的）。利用 $\delta$ 是卷积单位元的事实，有：
$$
\mathcal{H} x=\mathcal{H}\{x * \boldsymbol{\delta}\} .
$$
根据卷积定义，有：
$$
\mathcal{H} x=\mathcal{H}\left\{\sum_{k=-\infty}^{\infty} x(k) \boldsymbol{\delta}(\cdot-k)\right\} .
$$
由于 $\mathcal{H}$ 是线性的，我们可以将求和和 $x(k)$（对 $\mathcal{H}$ 的操作而言是常数）提出：
$$
\begin{equation*}
\mathcal{H} x=\sum_{k=-\infty}^{\infty} x(k) \mathcal{H}\{\boldsymbol{\delta}(\cdot-k)\} . \tag{9.7}
\end{equation*}
$$
由于 $\mathcal{H}$ 是时间不变的，可以交换 $\mathcal{H}$ 与 $\delta$ 的时间平移 $k$ 的顺序，即：
$$
\mathcal{H}\{\boldsymbol{\delta}(\cdot-k)\}=h(\cdot-k) .
$$
因此，可以将 (9.7) 改写为：
$$
\begin{aligned}
\mathcal{H} x & =\sum_{k=-\infty}^{\infty} x(k) h(\cdot-k) \\
& =x * h .
\end{aligned}
$$
由此，我们证明了 $\mathcal{H} x=x * h$，其中 $h=\mathcal{H} \delta$。

根据上面的定理 9.5，LTI 系统的行为完全由其冲激响应决定。也就是说，如果已知系统的冲激响应，就可以确定系统对任意输入的响应。因此，冲激响应为 LTI 系统的研究提供了一个非常强大的工具。

**示例 9.6**。考虑一个 LTI 系统 $\mathcal{H}$，其冲激响应为
$$
\begin{equation*}
h(n)=u(n) . \tag{9.8}
\end{equation*}
$$
证明 $\mathcal{H}$ 由下式表征：
$$
\begin{equation*}
\mathcal{H} x(n)=\sum_{k=-\infty}^{n} x(k) \tag{9.9}
\end{equation*}
$$
（即，$\mathcal{H}$ 对应于理想累加器）。

**解答**。由于系统是 LTI 的，有：
$$
\mathcal{H} x(n)=x * h(n) .
$$
将 (9.8) 代入，并化简得到：
$$
\begin{aligned}
\mathcal{H} x(n) & =x * h(n) \\
& =x * u(n) \\
& =\sum_{k=-\infty}^{\infty} x(k) u(n-k) \\
& =\sum_{k=-\infty}^{n} x(k) u(n-k)+\sum_{k=n+1}^{\infty} x(k) u(n-k) \\
& =\sum_{k=-\infty}^{n} x(k)
\end{aligned}
$$
因此，冲激响应为 (9.8) 的系统实际上就是由 (9.9) 给出的理想累加器。

**示例 9.7**。考虑一个 LTI 系统，输入为 $x$，输出为 $y$，冲激响应为 $h$，其中
$$
h(n)= \begin{cases}1 & 0 \leq n \leq 2 \\ 0 & \text { 其他情况 }\end{cases}
$$
求并绘制系统对以下输入 $x$ 的响应：
$$
x(n)= \begin{cases}n+1 & 0 \leq n \leq 3 \\ 7-n & 4 \leq n \leq 6 \\ 0 & \text { 其他情况 }\end{cases}
$$

**解答**。由于系统是 LTI 的，有：
$$
y=x * h
$$
因此，在此例中，本质上要求我们计算 $x * h$。该卷积通常可通过图形法或表格法最容易完成。下面，我们选择使用表格法。通过构建显示 $x$ 及 $h$ 的各个时间翻转和平移版本的表格，可以轻松计算 $x * h$ 的各个元素。该过程的结果如表 9.3 所示。从该表中，我们得到：
$$
x * h(n)= \begin{cases}1 & n=0 \\ 3 & n=1 \\ 6 & n=2 \\ 9 & n=3 \\ 10 & n=4 \\ 9 & n=5 \\ 6 & n=6 \\ 3 & n=7 \\ 1 & n=8 \\ 0 & \text { 其他情况 }\end{cases}
$$
表 9.3：示例 9.7 的卷积计算

![](https://cdn.mathpix.com/snip/images/3irho2TpfQ-EfNQrEwW6V6j8PxXBGs03C4dVm6PIRXU.original.fullsize.png){width="400"}


## 9.6 LTI 系统的单位阶跃响应

系统 $\mathcal{H}$ 的阶跃响应 $s$ 定义为：
$$
s=\mathcal{H} u
$$
（即，系统的阶跃响应是其在单位阶跃序列输入下产生的输出）。对于 LTI 系统，阶跃响应与冲激响应关系密切，如下定理所示。

**定理 9.6**。LTI 系统的阶跃响应 $s$ 与冲激响应 $h$ 的关系为：
$$
h(n)=s(n)-s(n-1) \quad \text { 且 } \quad s(n)=\sum_{k=-\infty}^{n} h(k) .
$$
也就是说，冲激响应 $h$ 是阶跃响应 $s$ 的一阶差分。

**证明**。利用 $s=u * h$，我们可以写作：
$$
\begin{aligned}
s(n) & =u * h(n) \\
& =h * u(n) \\
& =\sum_{k=-\infty}^{\infty} h(k) u(n-k) \\
& =\sum_{k=-\infty}^{n} h(k) .
\end{aligned}
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-058.jpg?height=85&width=339&top_left_y=307&top_left_x=826){width="400"}
  
图 9.5：离散时间 LTI 系统的方框图表示，输入为 $x$，输出为 $y$，冲激响应为 $h$。

因此，$s$ 可以通过累加 $h$ 得到。对 $s$ 取一阶差分，我们得到：
$$
\begin{aligned}
s(n)-s(n-1) & =\sum_{k=-\infty}^{n} h(k)-\sum_{k=-\infty}^{n-1} h(k) \\
& =h(n)+\sum_{k=-\infty}^{n-1} h(k)-\sum_{k=-\infty}^{n-1} h(k) \\
& =h(n)
\end{aligned}
$$
因此，$h$ 是 $s$ 的一阶差分。

阶跃响应在实际中常常具有重要意义，因为它可用于确定 LTI 系统的冲激响应。特别地，冲激响应可以通过对阶跃响应进行差分来得到。

## 9.7 离散时间 LTI 系统的方框图表示

在很多情况下，用方框图表示离散时间 LTI 系统是非常方便的。由于 LTI 系统完全由其冲激响应决定，因此在方框图中通常用冲激响应来标注系统。也就是说，我们将输入为 $x$、输出为 $y$、冲激响应为 $h$ 的 LTI 系统表示为图 9.5 所示。
## 9.8 离散时间 LTI 系统的互连

假设我们有一个 LTI 系统，其输入为 $x$，输出为 $y$，冲激响应为 $h$。我们知道 $x$ 和 $y$ 的关系为 $y=x * h$。换句话说，该系统可以看作是执行卷积运算。根据前面介绍的卷积性质，我们可以推导出若干关于串联和并联互连系统冲激响应的等价关系。

考虑两个 LTI 系统，其冲激响应分别为 $h_{1}$ 和 $h_{2}$，并以串联方式连接，如图 9.6(a) 左侧所示。从图 9.6(a) 左侧的方框图中，我们有：
$$
y=\left(x * h_{1}\right) * h_{2} .
$$
由于卷积的结合律，这等价于：
$$
y=x *\left(h_{1} * h_{2}\right) .
$$
因此，两个 LTI 系统的串联互连表现为一个冲激响应为 $h_{1} * h_{2}$ 的单一 LTI 系统。换句话说，我们得到了图 9.6(a) 所示的等价关系。

考虑两个 LTI 系统，其冲激响应分别为 $h_{1}$ 和 $h_{2}$，并以串联方式连接，如图 9.6(b) 左侧所示。从图 9.6(b) 左侧的方框图中，我们有：
$$
y=\left(x * h_{1}\right) * h_{2} .
$$
由于卷积的结合律和交换律，这等价于：
$$
\begin{aligned}
y & =x *\left(h_{1} * h_{2}\right) \\
& =x *\left(h_{2} * h_{1}\right) \\
& =\left(x * h_{2}\right) * h_{1} .
\end{aligned}
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-059.jpg?height=339&width=1060&top_left_y=291&top_left_x=591){width="400"}
  
图 9.6：离散时间 LTI 系统串联互连的等价关系。(a) 第一种等价，(b) 第二种等价。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-059.jpg?height=199&width=882&top_left_y=769&top_left_x=680){width="400"}
  
图 9.7：离散时间 LTI 系统并联互连的等价关系。

因此，交换两个 LTI 系统的位置不会改变输入 $x$ 与输出 $y$ 的整体系统行为。换句话说，我们得到了图 9.6(b) 所示的等价关系。

考虑两个 LTI 系统，其冲激响应分别为 $h_{1}$ 和 $h_{2}$，并以并联方式连接，如图 9.7 左侧所示。从图 9.7 左侧的方框图中，我们有：
$$
y=x * h_{1}+x * h_{2} .
$$
由于卷积具有分配性，该方程可以改写为：
$$
y=x *\left(h_{1}+h_{2}\right) .
$$
因此，两个 LTI 系统的并联互连表现为一个冲激响应为 $h_{1}+h_{2}$ 的单一 LTI 系统。换句话说，我们得到了图 9.7 所示的等价关系。

**示例 9.8**。考虑如图 9.8 所示的系统，输入为 $x$，输出为 $y$，冲激响应为 $h$。方框图中的每个子系统都是 LTI 的，并标注其冲激响应。求系统的冲激响应 $h$。

**解答**。从方框图的左半部分，我们可以写作：
$$
\begin{aligned}
v & =x+x * h_{1}+x * h_{2} \\
& =x * \delta+x * h_{1}+x * h_{2} \\
& =x *\left(\delta+h_{1}+h_{2}\right)
\end{aligned}
$$
类似地，从方框图的右半部分，我们可以写作：
$$
y=v * h_{3} .
$$
将 $v$ 的表达式代入上式，得到：
$$
\begin{aligned}
y & =v * h_{3} \\
& =\left(x *\left[\delta+h_{1}+h_{2}\right]\right) * h_{3} \\
& =x *\left(\left[\delta+h_{1}+h_{2}\right] * h_{3}\right) \\
& =x *\left(h_{3}+h_{1} * h_{3}+h_{2} * h_{3}\right) .
\end{aligned}
$$

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-060.jpg?height=341&width=784&top_left_y=294&top_left_x=605){width="400"}
  
图 9.8：系统互连示例。

因此，整体系统的冲激响应 $h$ 为：
$$
h=h_{3}+h_{1} * h_{3}+h_{2} * h_{3} .
$$
## 9.9 离散时间 LTI 系统的性质

在前一章中，我们介绍了系统可能具备的一些性质（例如，存储性、因果性、BIBO 稳定性以及可逆性）。由于 LTI 系统完全由其冲激响应决定，因此有人可能会想，先前介绍的一些性质是否与冲激响应存在联系。下面，我们将探讨这些关系。

### 9.9.1 存储性（Memory）

首先考虑的系统性质是存储性。

**定理 9.7（LTI 系统的无存储性）**。具有冲激响应 $h$ 的 LTI 系统在且仅在
$$
h(n)=0 \text { 对所有 } n \neq 0
$$
时是无存储的。

**证明**。回忆一下，如果系统在任意时间的输出 $y$ 仅依赖于该时间的输入 $x$，则系统是无存储的。假设我们现在有一个 LTI 系统，其输入为 $x$，输出为 $y$，冲激响应为 $h$。在某个任意时间 $n_{0}$ 的输出为：
$$
\begin{aligned}
y\left(n_{0}\right) & =x * h\left(n_{0}\right) \\
& =h * x\left(n_{0}\right) \\
& =\sum_{k=-\infty}^{\infty} h(k) x\left(n_{0}-k\right) .
\end{aligned}
$$
考虑上式中的求和。为了使系统无存储，求和结果必须只依赖于 $x(n)$ 在 $n=n_{0}$ 的值。这只有在
$$
h(n)=0 \quad \text { 对所有 } n \neq 0
$$
时才可能成立。

由上述定理可知，无存储的 LTI 系统的冲激响应 $h$ 必须为：
$$
\begin{equation*}
h=K \delta \tag{9.10}
\end{equation*}
$$
其中 $K$ 是一个复常数。因此，所有无存储 LTI 系统的输入输出关系必须为：
$$
\begin{aligned}
y & =x *(K \delta) \\
& =K(x * \delta) \\
& =K x .
\end{aligned}
$$
换句话说，无存储的 LTI 系统必须是理想放大器（即仅执行幅度缩放的系统）。

**示例 9.9**。考虑冲激响应为
$$
h(n)=e^{-a n} u(n)
$$
的 LTI 系统，其中 $a$ 为实常数。判断该系统是否具有存储性。

**解答**。该系统具有存储性，因为 $h(n) \neq 0$ 对某些 $n \neq 0$ 成立（例如，$h(1)=e^{-a} \neq 0$）。

**示例 9.10**。考虑冲激响应为
$$
h(n)=\delta(n)
$$
的 LTI 系统。判断该系统是否具有存储性。

**解答**。显然，$h$ 仅在原点非零。这直接由单位冲激序列 $\delta$ 的定义可知。因此，该系统是无存储的（即不具有存储性）。
### 9.9.2 因果性（Causality）

下一个要考虑的系统性质是因果性。

**定理 9.8（LTI 系统的因果性）**。具有冲激响应 $h$ 的 LTI 系统在且仅在
$$
h(n)=0 \text { 对所有 } n<0
$$
时是因果的（即 $h$ 是因果的）。

**证明**。回忆一下，如果系统在任意时间 $n_{0}$ 的输出 $y$ 不依赖于其输入 $x$ 在 $n_{0}$ 之后的值，则系统是因果的。假设我们有一个 LTI 系统，其输入为 $x$，输出为 $y$，冲激响应为 $h$。在 $n_{0}$ 时刻的输出为：
$$
\begin{align*}
y\left(n_{0}\right) & =x * h\left(n_{0}\right) \\
& =\sum_{k=-\infty}^{\infty} x(k) h\left(n_{0}-k\right) \\
& =\sum_{k=-\infty}^{n_{0}} x(k) h\left(n_{0}-k\right)+\sum_{k=n_{0}+1}^{\infty} x(k) h\left(n_{0}-k\right) . \tag{9.11}
\end{align*}
$$
为了使 $y\left(n_{0}\right)$ 不依赖于 $n>n_{0}$ 的 $x(n)$，必须满足：
$$
\begin{equation*}
h(n)=0 \quad \text { 对 } n<0 \tag{9.12}
\end{equation*}
$$
（即 $h$ 是因果的）。此时，(9.11) 可简化为：
$$
y\left(n_{0}\right)=\sum_{k=-\infty}^{n_{0}} x(k) h\left(n_{0}-k\right) .
$$
显然，该求和结果不依赖于 $n>n_{0}$ 的 $x(n)$（因为 $k$ 从 $-\infty$ 到 $n_{0}$ 变化）。因此，如果冲激响应 $h$ 满足 (9.12)，则 LTI 系统是因果的。

**示例 9.11**。考虑冲激响应为
$$
h(n)=e^{-a n} u(n)
$$
的 LTI 系统，其中 $a$ 为实常数。判断该系统是否因果。

**解答**。显然，对于 $n<0$，$h(n)=0$（由于 $h(n)$ 中的 $u(n)$ 因子）。因此，该系统是因果的。

**示例 9.12**。考虑冲激响应为
$$
h(n)=\delta\left(n+n_{0}\right)
$$
的 LTI 系统，其中 $n_{0}$ 为严格正数。判断该系统是否因果。

**解答**。根据 $\delta$ 的定义，可以容易地推导出 $h(n)$ 除 $n=-n_{0}$ 外均为零。由于 $-n_{0}<0$，该系统不是因果的。
### 9.9.3 可逆性

下一个需要考虑的系统性质是可逆性。  
定理 9.9（LTI 系统的逆）。设 $\mathcal{H}$ 是一个冲激响应为 $h$ 的 LTI 系统。如果 $\mathcal{H}$ 的逆 $\mathcal{H}^{-1}$ 存在，则 $\mathcal{H}^{-1}$ 也是 LTI 系统，并且其冲激响应 $h_{\mathrm{inv}}$ 满足
$$
h * h_{\mathrm{inv}}=\delta .
$$
证明。首先，我们需要证明 LTI 系统的逆（如果存在）也必须是 LTI 系统。然而，这部分证明留给读者作为练习题 9.9。（解决此问题的一般方法是：1）证明线性系统的逆（如果存在）是线性的；2）证明时不变系统的逆（如果存在）是时不变的。）我们假设这部分证明已经完成，并继续进行。

现在假设逆系统 $\mathfrak{H}^{-1}$ 存在。我们有
$$
\mathcal{H} x = x * h \quad \text{且} \quad \mathcal{H}^{-1} x = x * h_{\mathrm{inv}} .
$$
根据逆系统的定义，对于每一个序列 $x$，都有
$$
\mathcal{H}^{-1} \mathcal{H} x = x .
$$
展开上述方程的左边，我们得到
$$
\begin{align*}
& \mathcal{H}^{-1}[x * h] = x \\
\Leftrightarrow \quad & x * h * h_{\mathrm{inv}} = x . \tag{9.13}
\end{align*}
$$
![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-063.jpg?height=90&width=576&top_left_y=302&top_left_x=832){width="400"}
  
图 9.9：系统与其逆系统的串联系统。
这一关系在图 9.9 中以示意图的形式表示。由于单位冲激序列是卷积的单位元，我们可以等价地将 (9.13) 重写为
$$
x * h * h_{\mathrm{inv}} = x * \delta .
$$
然而，该方程必须对任意 $x$ 成立。因此，通过比较该方程的左右两边，我们可以得到结论
$$
\begin{equation*}
h * h_{\mathrm{inv}} = \delta . \tag{9.14}
\end{equation*}
$$
因此，如果 $\mathcal{H}^{-1}$ 存在，它必然具有满足 (9.14) 的冲激响应 $h_{\text{inv}}$。证毕。

根据前述定理，我们得到以下结论：  
定理 9.10（LTI 系统的可逆性）。一个冲激响应为 $h$ 的 LTI 系统 $\mathcal{H}$ 当且仅当存在一个序列 $h_{\mathrm{inv}}$ 满足
$$
h * h_{\mathrm{inv}} = \delta
$$
时，可逆。  
证明。由定理 9.9 的结果可以直接得到该结论，只需注意 $\mathfrak{H}$ 可逆等价于 $\mathcal{H}^{-1}$ 存在即可。

例 9.13. 考虑一个冲激响应为 $h$ 的 LTI 系统 $\mathcal{H}$，其冲激响应为
$$
h(n) = A \delta\left(n-n_{0}\right),
$$
其中 $A$ 是非零实常数，$n_{0}$ 是整数常数。判断 $\mathcal{H}$ 是否可逆，如果可逆，求系统 $\mathfrak{H}^{-1}$ 的冲激响应 $h_{\text{inv}}$。

解。若系统 $\mathcal{H}^{-1}$ 存在，其冲激响应 $h_{\mathrm{inv}}$ 是下列方程的解：
$$
\begin{equation*}
h * h_{\mathrm{inv}} = \delta . \tag{9.15}
\end{equation*}
$$
现在尝试求解 $h_{\text{inv}}$。将给定序列 $h$ 代入 (9.15) 并通过直接的代数运算，我们得到
$$
\begin{aligned}
& h * h_{\mathrm{inv}}(n) = \delta(n) \\
\Rightarrow & \sum_{k=-\infty}^{\infty} h(k) h_{\mathrm{inv}}(n-k) = \delta(n) \\
\Rightarrow & \sum_{k=-\infty}^{\infty} A \delta\left(k-n_{0}\right) h_{\mathrm{inv}}(n-k) = \delta(n) \\
\Rightarrow & \sum_{k=-\infty}^{\infty} \delta\left(k-n_{0}\right) h_{\mathrm{inv}}(n-k) = \frac{1}{A} \delta(n) .
\end{aligned}
$$
利用单位冲激序列的筛选性质，可将上述方程左边的求和简化为
$$
\begin{equation*}
h_{\mathrm{inv}}\left(n-n_{0}\right) = \frac{1}{A} \delta(n) . \tag{9.16}
\end{equation*}
$$
将 $n+n_{0}$ 代入上式中的 $n$，得到
$$
\begin{aligned}
& h_{\mathrm{inv}}\left(\left[n+n_{0}\right]-n_{0}\right) = \frac{1}{A} \delta\left(n+n_{0}\right) \\
\Rightarrow \quad & h_{\mathrm{inv}}(n) = \frac{1}{A} \delta\left(n+n_{0}\right) .
\end{aligned}
$$
由于 $A \neq 0$，序列 $h_{\text{inv}}$ 总是良好定义的。因此，$\mathcal{H}^{-1}$ 存在，从而 $\mathcal{H}$ 是可逆的。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-064.jpg?height=239&width=523&top_left_y=307&top_left_x=734){width="400"}
  
图 9.10：输入为 $x$，输出为 $y$ 的反馈系统。

例 9.14. 考虑图 9.10 所示的系统，其输入为 $x$，输出为 $y$。方框图中的每个子系统都是 LTI 系统，并标注了其冲激响应。利用逆系统的概念，将 $y$ 用 $x$ 表示出来。

解。从图 9.10 可以写出：
$$
\begin{gather*}
v = x - y * h_{2} \quad \text{且} \tag{9.17} \\
y = v * h_{1} . \tag{9.18}
\end{gather*}
$$
将 (9.17) 代入 (9.18) 并简化，得到
$$
\begin{array}{ll} 
& y = \left[x - y * h_{2}\right] * h_{1} \\
\Rightarrow & y = x * h_{1} - y * h_{2} * h_{1} \\
\Rightarrow & y + y * h_{2} * h_{1} = x * h_{1} \\
\Rightarrow & y * \delta + y * h_{2} * h_{1} = x * h_{1} \\
\Rightarrow & y * \left[\delta + h_{2} * h_{1}\right] = x * h_{1} . \tag{9.19}
\end{array}
$$
为了方便，我们现在定义序列 $g$ 为
$$
\begin{equation*}
g = \delta + h_{2} * h_{1} . \tag{9.20}
\end{equation*}
$$
于是，我们可以将 (9.19) 重写为
$$
\begin{equation*}
y * g = x * h_{1} . \tag{9.21}
\end{equation*}
$$
这样，我们几乎就得到了 $y$ 关于 $x$ 的表达式。为了完成求解，需要将方程左侧的 $g$ 消去。为此，我们使用逆系统的概念。考虑冲激响应为 $g$ 的系统的逆系统。该逆系统的冲激响应 $g_{\text{inv}}$ 满足
$$
\begin{equation*}
g * g_{\mathrm{inv}} = \delta . \tag{9.22}
\end{equation*}
$$
该关系来自逆系统的定义。现在，我们使用 $g_{\text{inv}}$ 来简化 (9.21)：
$$
\begin{aligned}
& y * g = x * h_{1} \\
\Rightarrow & y * g * g_{\mathrm{inv}} = x * h_{1} * g_{\mathrm{inv}} \\
\Rightarrow & y * \delta = x * h_{1} * g_{\mathrm{inv}} \\
\Rightarrow & y = x * h_{1} * g_{\mathrm{inv}} .
\end{aligned}
$$
因此，我们可以将输出 $y$ 用输入 $x$ 表示为
$$
y = x * h_{1} * g_{\mathrm{inv}},
$$
其中 $g_{\text{inv}}$ 由 (9.22) 给出，$g$ 由 (9.20) 给出。
### 9.9.4 BIBO 稳定性

最后需要考虑的系统性质是 BIBO 稳定性。  
定理 9.11（LTI 系统的 BIBO 稳定性）。一个冲激响应为 $h$ 的 LTI 系统当且仅当
$$
\begin{equation*}
\sum_{n=-\infty}^{\infty} |h(n)| < \infty \tag{9.23}
\end{equation*}
$$
（即 $h$ 绝对可和）时，才是 BIBO 稳定的。

证明。回顾一下，当系统对每个有界输入产生有界输出时，该系统被称为 BIBO 稳定。假设我们有一个输入为 $x$、输出为 $y$、冲激响应为 $h$ 的 LTI 系统。

首先，考虑 (9.23) 对 BIBO 稳定性的充分性。假设对所有 $n$，$|x(n)| \leq A < \infty$（即 $x$ 是有界的）。我们可以写出
$$
\begin{aligned}
y(n) & = x * h(n) \\
& = h * x(n) \\
& = \sum_{k=-\infty}^{\infty} h(k) x(n-k) .
\end{aligned}
$$
取上述方程两边的绝对值，得到
$$
\begin{equation*}
|y(n)| = \left| \sum_{k=-\infty}^{\infty} h(k) x(n-k) \right| \tag{9.24}
\end{equation*}
$$
可以证明，对于任意两个序列 $f_{1}$ 和 $f_{2}$，有
$$
\left| \sum_{n=-\infty}^{\infty} f_{1}(n) f_{2}(n) \right| \leq \sum_{n=-\infty}^{\infty} |f_{1}(n) f_{2}(n)|
$$
利用该不等式，我们可以将 (9.24) 重写为
$$
|y(n)| \leq \sum_{k=-\infty}^{\infty} |h(k) x(n-k)| = \sum_{k=-\infty}^{\infty} |h(k)| |x(n-k)|
$$
根据假设，$|x(n)| \leq A$ 对所有 $n$ 成立，因此可以将上式中的 $|x(n-k)|$ 用其上界 $A$ 替代，得到
$$
\begin{equation*}
|y(n)| \leq \sum_{k=-\infty}^{\infty} |h(k)| |x(n-k)| \leq \sum_{k=-\infty}^{\infty} A |h(k)| = A \sum_{k=-\infty}^{\infty} |h(k)| \tag{9.25}
\end{equation*}
$$
因此，我们有
$$
\begin{equation*}
|y(n)| \leq A \sum_{k=-\infty}^{\infty} |h(k)| \tag{9.26}
\end{equation*}
$$
由于 $A$ 是有限的，由 (9.26) 可得，如果
$$
\begin{equation*}
\sum_{k=-\infty}^{\infty} |h(k)| < \infty \tag{9.27}
\end{equation*}
$$
（即 $h$ 绝对可和），则 $y$ 是有界的。因此，冲激响应 $h$ 的绝对可和性是 BIBO 稳定性的充分条件。
现在，我们考虑 (9.23) 对 BIBO 稳定性的必要性。假设 $h$ 不是绝对可和的。也就是说，假设
$$
\sum_{k=-\infty}^{\infty} |h(k)| = \infty
$$
在这种情况下，我们可以证明该系统不是 BIBO 稳定的。首先，考虑特定输入 $x$，其定义为
$$
x(n) = e^{-j \arg [h(-n)]}
$$
由于对所有实数 $\theta$，$\left| e^{j \theta} \right| = 1$，因此 $x$ 是有界的（即对所有 $n$，$|x(n)| \leq 1$）。输出 $y$ 给出为
$$
\begin{align*}
y(n) & = x * h(n) \\
& = \sum_{k=-\infty}^{\infty} x(k) h(n-k) \\
& = \sum_{k=-\infty}^{\infty} \left[e^{-j \arg [h(-k)]}\right] h(n-k) . \tag{9.28}
\end{align*}
$$
现在，考虑输出在 $n=0$ 时的取值。由 (9.28) 可得
$$
\begin{equation*}
y(0) = \sum_{k=-\infty}^{\infty} \left[e^{-j \arg [h(-k)]}\right] h(-k) \tag{9.29}
\end{equation*}
$$
由于对所有复数 $z$，$e^{-j \arg z} z = |z|$，因此 $\left[e^{-j \arg [h(-k)]}\right] h(-k) = |h(-k)|$，于是 (9.29) 可简化为
$$
\begin{aligned}
y(0) & = \sum_{k=-\infty}^{\infty} |h(-k)| \\
& = \sum_{k=-\infty}^{\infty} |h(k)| \\
& = \infty
\end{aligned}
$$
因此，我们已经证明，有界输入 $x$ 将导致输出 $y$ 发散（在 $n=0$ 时，$y(n)$ 发散）。因此，$h$ 的绝对可和性对于 BIBO 稳定性也是必要的。证毕。

例 9.15. 考虑冲激响应为
$$
h(n) = e^{a n} u(n)
$$
的 LTI 系统，其中 $a$ 是实常数。判断系统在何种 $a$ 值下是 BIBO 稳定的。  
解。我们需要确定冲激响应 $h$ 在何种 $a$ 值下是绝对可和的。假设 $a \neq 0$，则有
$$
\begin{aligned}
\sum_{n=-\infty}^{\infty} |h(n)| & = \sum_{n=-\infty}^{\infty} \left| e^{a n} u(n) \right| \\
& = \sum_{n=-\infty}^{\infty} e^{a n} u(n) \\
& = \sum_{n=-\infty}^{-1} 0 + \sum_{n=0}^{\infty} e^{a n} \\
& = \sum_{n=0}^{\infty} e^{a n} \\
& = \sum_{n=0}^{\infty} \left(e^{a}\right)^{n}
\end{aligned}
$$
右侧是一个无穷等比数列。当且仅当
$$
e^{a} < 1
$$
时，该数列收敛。对两边取对数，得到
$$
a < \log 1 = 0 .
$$
因此，当 $a < 0$ 时，$h$ 是绝对可和的；当 $a \geq 0$ 时，$h$ 发散。因此，系统当且仅当 $a < 0$ 时是 BIBO 稳定的。

例 9.16（理想累加器）。考虑输入为 $x$、输出为 $y$ 的 LTI 系统，定义为
$$
y(n) = \sum_{k=-\infty}^{n} x(k)
$$
判断该系统是否 BIBO 稳定。  
解。首先，求该系统的冲激响应 $h$。我们有
$$
\begin{aligned}
h(n) & = \sum_{k=-\infty}^{n} \delta(k) \\
& = \begin{cases}1 & n \geq 0 \\ 0 & n < 0 \end{cases} \\
& = u(n)
\end{aligned}
$$
利用此冲激响应 $h$，检查其是否绝对可和：
$$
\begin{aligned}
\sum_{n=-\infty}^{\infty} |h(n)| & = \sum_{n=-\infty}^{\infty} |u(n)| \\
& = \sum_{n=0}^{\infty} 1 \\
& = \infty
\end{aligned}
$$
因此，$h$ 不是绝对可和的，系统不是 BIBO 稳定的。
## 9.10 离散时间 LTI 系统的特征序列

在第 8.7.7 节中，我们已经介绍了系统特征序列的概念。鉴于特征序列能够简化与系统相关的数学运算，自然而然地会想知道 LTI 系统可能有哪些特征序列。在这方面，下面的定理具有启发性。

定理 9.12（LTI 系统的特征序列）。对于任意 LTI 系统 $\mathcal{H}$，其冲激响应为 $h$，以及形式为 $x(n) = z^{n}$ 的序列，其中 $z$ 是任意复常数（即 $x$ 是任意复指数序列），有如下结论：
$$
\begin{equation*}
\mathcal{H} x(n) = H(z) z^{n}, \tag{9.30a}
\end{equation*}
$$
其中
$$
\begin{equation*}
H(z) = \sum_{n=-\infty}^{\infty} h(n) z^{-n} \tag{9.30b}
\end{equation*}
$$
也就是说，$x$ 是系统 $\mathcal{H}$ 的特征序列，其对应的特征值为 $H(z)$。注意，(9.30a) 仅对 $H(z)$ 收敛的 $z$ 值成立（即 $z$ 位于 $H$ 的收敛域内）。

证明。首先，我们观察到系统 $\mathcal{H}$ 为 LTI 系统当且仅当它计算卷积（即对于某个 $h$，$\mathcal{H} x = x * h$）。于是有
$$
\begin{aligned}
\mathcal{H} x(n) & = x * h(n) \\
& = h * x(n) \\
& = \sum_{k=-\infty}^{\infty} h(k) x(n-k) \\
& = \sum_{k=-\infty}^{\infty} h(k) z^{n-k} \\
& = z^{n} \sum_{k=-\infty}^{\infty} h(k) z^{-k} \\
& = z^{n} H(z)
\end{aligned}
$$
术语说明：在上述定理（即定理 9.12）中出现的函数 $H$ 称为系统 $\mathcal{H}$ 的系统函数（或传递函数）。系统函数完全描述了 LTI 系统的行为。因此，在处理 LTI 系统时，系统函数通常非常有用。事实上，(9.30b) 中出现的求和形式具有重要意义，它定义了所谓的 $z$ 变换。我们将在第 12 章中对 $z$ 变换进行深入研究。

注意，LTI 系统的特征序列不一定只有复指数序列。例如，例 8.38 中的系统是 LTI 系统，其每个序列都是其特征序列。此外，一个系统如果每个复指数序列都是其特征序列，也不一定是 LTI 系统。这可以通过下面的例子（以及练习 9.17）轻松说明。

例 9.17. 设 $S$ 表示所有复指数序列的集合（即 $S$ 是所有形式为 $x(n) = b a^{n}$ 的序列 $x$ 的集合，其中 $a, b \in \mathbb{C}$）。考虑系统 $\mathcal{H}$，定义为
$$
\mathcal{H} x = 
\begin{cases}
x & x \in S \\
1 & \text{其他情况}
\end{cases}
$$
对于任意序列 $x \in S$，有 $\mathcal{H} x = x$，这意味着 $x$ 是 $\mathcal{H}$ 的特征序列，对应特征值为 1。因此，每个复指数序列都是 $\mathcal{H}$ 的特征序列。

现在，我们证明 $\mathcal{H}$ 不是线性的。以下令 $a$ 为任意复常数。考虑序列 $x(n) = n$，显然 $x \notin S$。由于 $x \notin S$，我们有 $\mathcal{H} x = 1$，因此
$$
a \mathcal{H} x = a .
$$
接着，考虑序列 $a x(n) = a n$。由于 $a x \notin S$，我们有
$$
\mathcal{H}(a x) = 1 .
$$
由以上方程可知，$\mathcal{H}(a x) = a \mathcal{H} x$ 仅在 $a = 1$ 时成立。因此，$\mathcal{H}$ 不是齐次的，从而也不是线性的。所以，$\mathcal{H}$ 是一个例子，它的每个复指数序列都是特征序列，但系统本身不是 LTI。

现在，我们考虑特征序列的一个应用。由于卷积在计算上往往比较繁琐，我们可以利用特征序列，在某些情况下避免直接处理卷积。

假设我们有一个输入为 $x$、输出为 $y$、冲激响应为 $h$ 的 LTI 系统。假设现在我们可以将任意输入 $x$ 表示为复指数的线性组合：
$$
x(n) = \sum_{k} a_{k} z_{k}^{n}
$$
根据 LTI 系统的特征序列性质，对于输入 $a_{k} z_{k}^{n}$ 的响应为 $a_{k} H(z_{k}) z_{k}^{n}$。利用这一性质以及叠加性，可以写出
$$
\begin{aligned}
y(n) & = \mathcal{H} x(n) \\
& = \mathcal{H} \left\{ \sum_{k} a_{k} z_{k}^{n} \right\} (n) \\
& = \sum_{k} a_{k} \mathcal{H} \left\{ z_{k}^{n} \right\} (n) \\
& = \sum_{k} a_{k} H(z_{k}) z_{k}^{n} .
\end{aligned}
$$
因此，如果 LTI 系统的输入可以表示为复指数的线性组合，则输出也可以表示为相同复指数的线性组合。

例 9.18. 考虑冲激响应为
$$
\begin{equation*}
h(n) = \delta(n-1) \tag{9.31}
\end{equation*}
$$
的 LTI 系统 $\mathcal{H}$。  
(a) 求系统函数 $H$。  
(b) 利用系统函数 $H$，求系统 $\mathcal{H}$ 对输入
$$
x(n) = e^{n} \cos(\pi n)
$$
的响应 $y$。

解。(a) 将 (9.31) 代入 (9.30b)，得到
$$
\begin{aligned}
H(z) & = \sum_{n=-\infty}^{\infty} h(n) z^{-n} \\
& = \sum_{n=-\infty}^{\infty} \delta(n-1) z^{-n} \\
& = z^{-1}
\end{aligned}
$$
(b) 首先，将 $x$ 重写为
$$
\begin{aligned}
x(n) & = e^{n} \left[ \frac{1}{2} \left( e^{j \pi n} + e^{-j \pi n} \right) \right] \\
& = \frac{1}{2} (e^{1+j\pi})^{n} + \frac{1}{2} (e^{1-j\pi})^{n}
\end{aligned}
$$
因此，输入 $x$ 可表示为
$$
x(n) = \sum_{k=0}^{1} a_{k} z_{k}^{n}
$$
其中
$$
a_{0} = a_{1} = \frac{1}{2}, \quad z_{0} = e^{1+j\pi}, \quad z_{1} = e^{1-j\pi}.
$$
在 (a) 部分，我们已求得系统函数 $H(z) = z^{-1}$。因此，利用系统函数可计算输出：
$$
\begin{aligned}
y(n) & = \sum_{k} a_{k} H(z_{k}) z_{k}^{n} \\
& = a_{0} H(z_{0}) z_{0}^{n} + a_{1} H(z_{1}) z_{1}^{n} \\
& = \frac{1}{2} H(e^{1+j\pi}) e^{(1+j\pi)n} + \frac{1}{2} H(e^{1-j\pi}) e^{(1-j\pi)n} \\
& = \frac{1}{2} e^{-(1+j\pi)} e^{(1+j\pi)n} + \frac{1}{2} e^{-(1-j\pi)} e^{(1-j\pi)n} \\
& = \frac{1}{2} e^{n-1} e^{j \pi (n-1)} + \frac{1}{2} e^{n-1} e^{-j \pi (n-1)} \\
& = e^{n-1} \left[ \frac{1}{2} \left( e^{j \pi (n-1)} + e^{-j \pi (n-1)} \right) \right] \\
& = e^{n-1} \cos[\pi (n-1)]
\end{aligned}
$$
可以看出，输出 $y$ 只是输入 $x$ 的时间延迟 1。这并非巧合，因为具有系统函数 $H(z) = z^{-1}$ 的 LTI 系统正是理想单位延迟系统（即执行时间延迟 1 的系统）。
## 9.11 练习

### 9.11.1 无答案练习

9.1 计算下列每对序列 $x$ 与 $h$ 的卷积 $x * h$。  
(a) $x(n) = n [u(n+2) - u(n-5)]$ 且 $h(n) = u(n)$；  
(b) $x(n) = 2^{n} u(-n)$ 且 $h(n) = u(n)$；  
(c) 
$$
x(n) = 
\begin{cases} 
n & 0 \le n \le 3 \\ 
6-n & 4 \le n \le 6 \\ 
0 & \text{其他情况} 
\end{cases}, 
\quad h(n) = u(n) - u(n-6)；
$$
(d) $x(n) = u(n)$ 且 $h(n) = u(n-3)$。

9.2 对下列图中给出的每对序列 $x$ 和 $h$，计算 $x * h$。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-071.jpg?height=412&width=1055&top_left_y=923&top_left_x=669){width="400"}
  
(a)

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-071.jpg?height=403&width=760&top_left_y=1410&top_left_x=551){width="400"}
  
![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-071.jpg?height=403&width=520&top_left_y=1410&top_left_x=1342){width="400"}
  
(b)

9.3 证明对于任意序列 $x$，有 $x * v(n) = x(n - n_0)$，其中 $v(n) = \delta(n - n_0)$，$n_0$ 为任意整数常数。

9.4 设 $x, y, h, v$ 为序列，满足 $y = x * h$，且
$$
v(n) = \sum_{k=-\infty}^{\infty} x(-k-b) h(k + a n),
$$
其中 $a$ 与 $b$ 为整数常数。将 $v$ 用 $y$ 表示出来。

9.5 考虑卷积 $y = x * h$。假设卷积 $y$ 存在，证明下列命题成立：  
(a) 若 $x$ 是周期序列，则 $y$ 也是周期序列。  
(b) 若 $x$ 为偶序列且 $h$ 为奇序列，则 $y$ 为奇序列。

9.6 设 $\mathcal{D} x(n) = x(n) - x(n-1)$（即 $\mathcal{D}$ 为一阶差分算子）。根据卷积定义，证明若 $y = x * h$，则 $\mathcal{D} y = x * \mathcal{D} h$。
9.7 设序列 $x$ 与 $h$ 满足
$$
\begin{gathered}
x(n) = 0 \quad \text{当 } n < A_1 \text{ 或 } n > A_2, \\
h(n) = 0 \quad \text{当 } n < B_1 \text{ 或 } n > B_2,
\end{gathered}
$$
即 $x$ 和 $h$ 为有限长度序列。确定在何种 $n$ 值下，卷积 $x * h(n)$ 必为零。

9.8 考虑一个 LTI 系统，其对序列 $x_1(n) = u(n) - u(n-2)$ 的响应为序列 $y_1$。求系统对图中输入 $x_2$ 的响应 $y_2$，并用 $y_1$ 表示。  
![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-072.jpg?height=403&width=766&top_left_y=875&top_left_x=653){width="400"}


9.9 考虑下图所示系统，其中 $\mathcal{H}$ 为 LTI 系统，$\mathcal{G}$ 为 $\mathcal{H}$ 的已知逆系统。设 $y_1 = \mathcal{H} x_1$，$y_2 = \mathcal{H} x_2$。  
![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-072.jpg?height=104&width=663&top_left_y=1504&top_left_x=707){width="400"}


(a) 求系统 $\mathcal{G}$ 对输入 $y'(n) = a_1 y_1(n) + a_2 y_2(n)$ 的响应，其中 $a_1$ 与 $a_2$ 为复常数。  

(b) 求系统 $\mathcal{G}$ 对输入 $y_1'(n) = y_1(n - n_0)$ 的响应，其中 $n_0$ 为整数常数。  

(c) 利用前两问的结果，判断系统 $\mathcal{G}$ 是否线性和/或时不变。

9.10 求下列方程所描述的 LTI 系统 $\mathcal{H}$ 的冲激响应。  

(a) $\mathcal{H} x(n) = \sum_{k=-\infty}^{n+1} x(k)$；  

(b) $\mathcal{H} x(n) = \sum_{k=-\infty}^{\infty} x(k+5) e^{k-n+1} u(n-k-2)$；  

(c) $\mathcal{H} x(n) = \sum_{k=-\infty}^{n} x(k) v(n-k)$；  

(d) $\mathcal{H} x(n) = \sum_{k=n-1}^{n} x(k)$。
9.11 考虑图示系统，其输入为 $x$，输出为 $y$。块图中每个系统都是 LTI 系统，并标注了其冲激响应。  
![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-073.jpg?height=347&width=886&top_left_y=291&top_left_x=744){width="400"}


(a) 用 $h_1, h_2, h_3$ 表示整体系统的冲激响应 $h$。  
(b) 当
$$
h_1(n) = \delta(n+1), \quad h_2(n) = \delta(n), \quad h_3(n) = \delta(n)
$$
时，求整体系统的冲激响应 $h$。

9.12 考虑下图所示系统，输入为 $x$，输出为 $y$。该系统由两个 LTI 系统串联而成，其冲激响应分别为 $h_1$ 和 $h_2$。  
![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-073.jpg?height=101&width=571&top_left_y=988&top_left_x=880){width="400"}


对于下列每对 $h_1$ 和 $h_2$，若输入 $x(n) = u(n)$，求输出 $y$。  
(a) $h_1(n) = \delta(n)$，$h_2(n) = \delta(n)$；  
(b) $h_1(n) = \delta(n+1)$，$h_2(n) = \delta(n+1)$；  
(c) $h_1(n) = 2^{-n} u(n)$，$h_2(n) = \delta(n)$。

9.13 判断下列每个冲激响应 $h$ 对应的 LTI 系统是否因果和/或无记忆。  
(a) $h(n) = (n+1) u(n-1)$；  
(b) $h(n) = 2 \delta(n+1)$；  
(c) $h(n) = 2^{-n} u(n-1)$；  
(d) $h(n) = 2^{n} u(-n-1)$；  
(e) $h(n) = 2^{-3|n|}$；  
(f) $h(n) = 3 \delta(n)$。

9.14 已知两个 LTI 系统的冲激响应为
$$
h_1(n) = \frac{1}{2} \delta(n-1), \quad h_2(n) = 2 \delta(n+1)
$$
判断这两个系统是否互为逆系统。

9.15 判断下列每个冲激响应 $h$ 对应的 LTI 系统是否 BIBO 稳定。  
(a) $h(n) = 2^{a n} u(-n)$，其中 $a>0$；  
(b) $h(n) = n^{-1} u(n-1)$；  
(c) $h(n) = 2^{n} u(n)$；  
(d) $h(n) = \delta(n-10)$；  
(e) $h(n) = u(n) - u(n-9)$；  
(f) $h(n) = 2^{-|n|}$。

9.16 已知系统 $\mathcal{H}_1, \mathcal{H}_2, \mathcal{H}_3, \mathcal{H}_4$ 对复指数输入 $x(n) = e^{j 2 n}$ 的响应分别为
$$
\mathcal{H}_1 x(n) = 2 e^{j 2 n}, \quad \mathcal{H}_2 x(n) = n e^{j 2 n}, \quad \mathcal{H}_3 x(n) = e^{j 2 n + \pi/3}, \quad \mathcal{H}_4 x(n) = \cos(2 n)
$$
指出哪些系统不可能是 LTI 系统。

9.17 一个系统如果每个复指数序列都是其特征序列，并不一定是 LTI 系统。在本题中，通过反例证明这一点。考虑系统 $\mathcal{H}$ 定义为
$$
\mathcal{H} x(n) = 
\begin{cases} 
\frac{x^2(n)}{x(n-1)} & \text{若 } x(n-1) \neq 0 \\ 
0 & \text{否则} 
\end{cases}
$$

(a) 证明每个复指数序列都是 $\mathcal{H}$ 的特征序列。  
(b) 证明 $\mathcal{H}$ 不是线性（因此不是 LTI 系统）。

### 9.11.2 带答案的练习

目前，没有带答案的练习。

### 9.11.3 MATLAB 练习

目前，没有 MATLAB 练习。

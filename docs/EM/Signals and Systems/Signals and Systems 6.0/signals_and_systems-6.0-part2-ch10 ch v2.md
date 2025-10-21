# 第10章 离散时间傅里叶级数

## 10.1 引言

在信号与系统的研究中，一个非常重要的工具是**离散时间（DT）傅里叶级数**。大量的序列都可以通过傅里叶级数来表示，特别是几乎所有在实际中有用的周期序列。傅里叶级数将一个周期序列表示为复指数信号的线性组合。这通常是可取的，因为复指数信号是非常容易处理的序列。这主要归因于复指数信号在与LTI（线性时不变）系统相关时具有重要性质。特别地，复指数信号是LTI系统的特征序列。因此，LTI系统对复指数信号的响应仍然是同一个复指数信号，只是乘上了一个复常数。

## 10.2 离散时间傅里叶级数的定义

考虑一组相互谐波相关的复指数信号，其形式为

$$
\phi_{k}(n)=e^{j(2 \pi / N) k n} \quad \text{ 对所有 } k \in \mathbb{Z}
$$

其中 $N$ 是一个（严格）正整数常数。由于 $e^{j \theta}$ 在变量 $\theta$ 上是 $2 \pi$ 周期的，故对所有 $m \in \mathbb{Z}$，有 $\phi_{k}=\phi_{k+mN}$。因此，上述序列集合只包含 $N$ 个不同的元素，这些元素可以通过选择任意 $N$ 个连续整数的 $k$ 来获得（例如 $k \in [0..N-1]$）。此外，由于 $\left(\frac{2 \pi}{N} k\right)/(2 \pi)=\frac{k}{N}$ 是一个有理数，每个 $\phi_{k}$ 都是周期序列。特别地，$\phi_{k}$ 的基本周期为 $\frac{N}{\operatorname{gcd}(k, N)}$。由最大公约数的定义可知，$N$ 必然是 $\frac{N}{\operatorname{gcd}(k, N)}$ 的整数倍，因此每个 $\phi_{k}$ 必然是 $N$ 周期的。由于具有相同周期的周期序列的和仍然是该周期的周期序列，所以 $\phi_{k}$ 的任意线性组合必然是 $N$ 周期的。因此，例如以下形式的和必然是 $N$ 周期的：

$$
\sum_{k=K_{0}}^{K_{0}+N-1} a_{k} \phi_{k}(n)=\sum_{k=K_{0}}^{K_{0}+N-1} a_{k} e^{j(2 \pi / N) k n}
$$

其中 $a_{k}$ 是复常数，$K_{0}$ 是一个整数常数。

现在假设我们可以将一个复的 $N$ 周期序列 $x$ 表示为谐波相关复指数信号的线性组合：

$$
\begin{equation*}
x(n)=\sum_{k=\langle N\rangle} c_{k} e^{j k(2 \pi / N) n} \tag{10.1}
\end{equation*}
$$

其中 $c$ 是一个复的 $N$ 周期序列，$\sum_{k=\langle N\rangle}$ 表示在任意 $N$ 个连续整数上的求和。这样的表示称为**离散时间傅里叶级数（DTFS）**。更具体地，这是傅里叶级数的复指数形式。在术语上，我们称 (10.1) 为**傅里叶级数合成公式**。

由于我们经常使用傅里叶级数，有时使用一种简写符号来表示某个序列与其对应的傅里叶级数系数之间的关系。如果序列 $x$ 的傅里叶级数系数为 $c$，我们有时记作：

$$
x(n) \stackrel{\mathrm{DTFS}}{\longleftrightarrow} c_{k} .
$$


## 10.3 序列的傅里叶级数表示的确定

给定一个任意的周期序列 $x$，我们需要某种方法来求解其对应的傅里叶级数表示。换句话说，我们需要一种方法来计算与 $x$ 对应的傅里叶级数系数序列。这样的一个方法由下面的定理给出。

**定理 10.1（傅里叶级数分析公式）**  
一个 $N$ 周期序列 $x$ 的傅里叶级数系数序列 $c$ 由下式给出：

$$
\begin{equation*}
c_{k}=\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n} \quad \text{ 对所有 } k \in \mathbb{Z} \tag{10.2}
\end{equation*}
$$

**证明.** 回忆傅里叶级数合成公式，有

$$
x(n)=\sum_{\ell=\langle N\rangle} c_{\ell} e^{j(2 \pi / N) \ell n}
$$

将等式两边同时乘以 $e^{-j(2 \pi / N) k n}$，得到

$$
\begin{aligned}
x(n) e^{-j(2 \pi / N) k n} & =\sum_{\ell=\langle N\rangle} c_{\ell} e^{j(2 \pi / N) \ell n} e^{-j(2 \pi / N) k n} \\
& =\sum_{\ell=\langle N\rangle} c_{\ell} e^{j(2 \pi / N)(\ell-k) n}
\end{aligned}
$$

在 $x$ 的一个周期 $N$ 上对等式两边求和，得到

$$
\sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n}=\sum_{n=\langle N\rangle} \sum_{\ell=\langle N\rangle} c_{\ell} e^{j(2 \pi / N)(\ell-k) n}
$$

交换右侧的求和顺序，得

$$
\sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n}=\sum_{\ell=\langle N\rangle} c_{\ell}\left(\sum_{n=\langle N\rangle} e^{j(2 \pi / N)(\ell-k) n}\right)
$$

将 $k$ 改写为 $k=N k_{1}+k_{0}$，其中 $k_{1}$ 和 $k_{0}$ 为整数，且 $k_{0} \in[0..N-1]$（即 $k_{1}=N\lfloor k / N\rfloor$，$k_{0}=\bmod (k, N)$），
并将右侧外层求和限制在 $\ell \in[0..N-1]$，得到

$$
\begin{align*}
\sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n} & =\sum_{\ell=0}^{N-1} c_{\ell}\left(\sum_{n=\langle N\rangle} e^{j(2 \pi / N)\left(\ell-\left[N k_{1}+k_{0}\right]\right) n}\right) \\
& =\sum_{\ell=0}^{N-1} c_{\ell}\left(\sum_{n=\langle N\rangle} e^{j(2 \pi / N)\left(\ell-N k_{1}-k_{0}\right) n}\right) \\
& =\sum_{\ell=0}^{N-1} c_{\ell}\left(\sum_{n=\langle N\rangle} e^{j(2 \pi / N)\left(\ell-k_{0}\right) n-j 2 \pi k_{1} n}\right) \\
& =\sum_{\ell=0}^{N-1} c_{\ell}\left(\sum_{n=\langle N\rangle} e^{-j 2 \pi k_{1} n} e^{j(2 \pi / N)\left(\ell-k_{0}\right) n}\right) \\
& =\sum_{\ell=0}^{N-1} c_{\ell}\left(\sum_{n=\langle N\rangle} 1^{k_{1} n} e^{j(2 \pi / N)\left(\ell-k_{0}\right) n}\right) \\
& =\sum_{\ell=0}^{N-1} c_{\ell}\left(\sum_{n=\langle N\rangle} e^{j(2 \pi / N)\left(\ell-k_{0}\right) n}\right) \tag{10.3}
\end{align*}
$$


现在考虑上述等式右侧的内层求和。我们注意到

$$
\sum_{n=\langle N\rangle} e^{j(2 \pi / N)\left(\ell-k_{0}\right) n}= 
\begin{cases}
N & \left(\ell-k_{0}\right) / N \in \mathbb{Z} \tag{10.4}\\ 
0 & \text{ 否则 }
\end{cases}
$$


（公式 (10.4) 的证明留作习题 A.9 供读者完成。）此外，由于 $\ell-k_{0} \in[-(N-1)..N-1]$，唯一能使 $\left(\ell-k_{0}\right) / N \in \mathbb{Z}$ 成立的情况是 $\ell-k_{0}=0$（即 $\ell=k_{0}$）。因此，(10.4) 的右边可以简化为 $N \boldsymbol{\delta}\left(\ell-k_{0}\right)$。将 (10.4) 代入 (10.3)，我们得到

$$
\begin{aligned}
\sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n} 
& =\sum_{\ell=0}^{N-1} c_{\ell}\left[N \delta\left(\ell-k_{0}\right)\right] \\
& =c_{k_{0}} N
\end{aligned}
$$


整理后可得

$$
c_{k_{0}}=\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n}
$$


由于 $k=k_{0}$ 对 $k \in [0..N-1]$ 成立，我们有

$$
c_{k}=\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n} \quad \text{ 对 } k \in [0..N-1]
$$


由于 $c$ 是 $N$ 周期的，且上述公式给出的 $c_{k}$ 关于 $k$ 也是 $N$ 周期的，因此该公式对所有 $k \in \mathbb{Z}$ 都成立。于是我们得到

$$
c_{k}=\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n} \quad \text{ 对所有 } k \in \mathbb{Z}
$$


在术语上，我们称 (10.2) 为**傅里叶级数分析公式**。

假设我们有一个复值的 $N$ 周期序列 $x$，其傅里叶级数系数序列为 $c$。可以很容易地证明，系数 $c_{0}$ 是 $x$ 在一个周期 $N$ 内的平均值。证明是显然的。考虑由 (10.2) 给出的傅里叶级数分析公式。令 $k=0$ 代入该公式，我们得到

$$
\begin{aligned}
c_{0} & =\left.\left[\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n}\right]\right|_{k=0} \\
& =\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{0} \\
& =\frac{1}{N} \sum_{n=\langle N\rangle} x(n)
\end{aligned}
$$


因此，$c_{0}$ 就是 $x$ 在一个周期内的平均值。  

**例 10.1** 求序列的傅里叶级数表示：

$$
x(n)=\sin \left(\frac{2 \pi}{7} n\right)
$$


**解：** 首先，我们需要确认 $x$ 是否具有傅里叶级数表示。由于  

$$
\frac{2\pi}{\tfrac{2\pi}{7}}=(2 \pi)\left(\frac{7}{2 \pi}\right)=7
$$


是有理数，所以序列 $x$ 是周期序列。特别地，其周期为 $N=7$。因此，$x$ 确实有傅里叶级数表示。利用欧拉公式，我们可以将 $x$ 表示为  

$$
\begin{aligned}
\sin \left(\frac{2 \pi}{7} n\right) 
& =\frac{1}{2 j}\left[e^{j(2 \pi / 7) n}-e^{-j(2 \pi / 7) n}\right] \\
& =\frac{j}{2} e^{-j(2 \pi / 7) n}-\frac{j}{2} e^{j(2 \pi / 7) n} \\
& =\frac{j}{2} e^{j(2 \pi / 7)(-1) n}-\frac{j}{2} e^{j(2 \pi / 7)(1) n}
\end{aligned}
$$


因此，$x$ 的傅里叶级数表示为  

$$
x(n)=\sum_{k=-3}^{3} c_{k} e^{j(2 \pi / 7) k n}
$$


其中  

$$
c_{k}=
\begin{cases}
\frac{j}{2}, & k=-1 \\
-\frac{j}{2}, & k=1 \\
0, & k \in\{-3,-2,0,2,3\}
\end{cases}
\quad \text{ 且 } \quad c_{k}=c_{k+7}
$$


由于 $c$ 是 7 周期的，我们也可以将求和区间换成任意连续的 7 个整数，并规定 $k \in[0..6]$ 的 $c_{k}$，从而得到  

$$
x(n)=\sum_{k=\langle 7\rangle} c_{k} e^{j(2 \pi / 7) k n}
$$


其中  

$$
c_{k}=
\begin{cases}
-\frac{j}{2}, & k=1 \\
\frac{j}{2}, & k=6 \\
0, & k \in\{0,2,3,4,5\}
\end{cases}
\quad \text{ 且 } \quad c_{k}=c_{k+7}
$$


---

**例 10.2（周期冲激列）** 求以下周期冲激列的傅里叶级数表示：

$$
x(n)=\sum_{\ell=-\infty}^{\infty} \delta(n-N \ell)
$$


其中 $N$ 是一个严格正整数常数。  

**解：** 由于 $x$ 的形式，$x$ 显然是 $N$ 周期的。回忆傅里叶级数分析公式，有  

$$
c_{k}=\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n}
$$


选择在区间 $[0..N-1]$ 上求和，并代入给定的 $x$ 表达式，有  

$$
c_{k}=\frac{1}{N} \sum_{n=0}^{N-1} \delta(n) e^{-j(2 \pi / N) k n}
$$


利用 $\delta$ 序列的抽取（sifting）性质，得到  

$$
\begin{aligned}
c_{k} & =\frac{1}{N} e^{0} \\
& =\frac{1}{N}
\end{aligned}
$$


因此，$x$ 的傅里叶级数表示为

$$
x(n)=\sum_{k=0}^{N-1} c_{k} e^{j(2 \pi / N) k n}
$$


其中  

$$
c_{k}=\frac{1}{N} \quad \text{ 对所有 } k \in \mathbb{Z}
$$


---

**例 10.3** 求 5 周期序列 $x$ 的傅里叶级数表示，其中  

$$
x(n)= 
\begin{cases}
-\frac{1}{2}, & n=-1 \\
1, & n=0 \\
\frac{1}{2}, & n=1 \\
0, & n \in\{-2,2\}
\end{cases}
$$


**解：** 回忆傅里叶级数分析公式，有  

$$
c_{k}=\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n}
$$


选择在区间 $[-2..2]$ 上求和，并代入给定的 $x$ 表达式，得到  

$$
\begin{aligned}
c_{k} 
& =\frac{1}{5} \sum_{n=-2}^{2} x(n) e^{-j(2 \pi / 5) k n} \\
& =\frac{1}{5}\left(-\frac{1}{2} e^{-j(2 \pi / 5)(-1) k}+e^{-j(2 \pi / 5)(0) k}+\frac{1}{2} e^{-j(2 \pi / 5)(1) k}\right)
\end{aligned}
$$


化简得  

$$
\begin{aligned}
c_{k} 
& =\frac{1}{5}\left(-\frac{1}{2} e^{j(2 \pi / 5) k}+1+\frac{1}{2} e^{-j(2 \pi / 5) k}\right) \\
& =\frac{1}{5}\left(1-\frac{1}{2}\left(e^{j(2 \pi / 5) k}-e^{-j(2 \pi / 5) k}\right)\right) \\
& =\frac{1}{5}\left(1-\frac{1}{2}\left[2 j \sin \left(\frac{2 \pi}{5} k\right)\right]\right) \\
& =\frac{1}{5}\left[1-j \sin \left(\frac{2 \pi}{5} k\right)\right].
\end{aligned}
$$


因此，$x$ 的傅里叶级数表示为  

$$
x(n)=\sum_{k=\langle 5\rangle} c_{k} e^{j(2 \pi / 5) k n}
$$


其中  

$$
c_{k}=\frac{1}{5}\left[1-j \sin \left(\frac{2 \pi}{5} k\right)\right] \quad \text{ 对所有 } k \in \mathbb{Z}
$$


---

**例 10.4** 求 8 周期序列 $x$ 的傅里叶级数表示，其中  

$$
x(n)= 
\begin{cases}
1, & n \in [0..3] \\
0, & n \in [4..7]
\end{cases}
$$


**解：** 回忆傅里叶级数分析公式，有  

$$
c_{k}=\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n}
$$


在区间 $[0..7]$ 上求和，得到  

$$
\begin{aligned}
c_{k} 
& =\frac{1}{8} \sum_{n=0}^{7} x(n) e^{-j(2 \pi / 8) k n} \\
& =\frac{1}{8} \sum_{n=0}^{3} e^{-j(\pi / 4) k n}
=\frac{1}{8} \sum_{n=0}^{3}\left(e^{-j(\pi / 4) k}\right)^{n}.
\end{aligned}
$$


利用等比数列求和公式，得  

$$
c_{k}= 
\begin{cases}
\frac{1}{8}\left(\frac{\left(e^{-j(\pi / 4) k}\right)^{4}-1}{e^{-j(\pi / 4) k}-1}\right), & k \neq 0 \\
\frac{1}{8} \sum_{n=0}^{3} 1, & k=0
\end{cases}
$$


接下来，我们需要分别对 $k \neq 0$ 和 $k=0$ 的情形化简该表达式。首先考虑 $k \neq 0$ 的情况，我们有  

$$
\begin{align*}
c_{k} 
& =\frac{1}{8}\left(\frac{\left(e^{-j(\pi / 4) k}\right)^{4}-1}{e^{-j(\pi / 4) k}-1}\right) 
=\frac{1}{8}\left(\frac{e^{-j \pi k}-1}{e^{-j(\pi / 4) k}-1}\right) \\
& =\frac{1}{8}\left(\frac{e^{-j(\pi / 2) k}\left[e^{-j(\pi / 2) k}-e^{j(\pi / 2) k}\right]}{e^{-j(\pi / 8) k}\left[e^{-j(\pi / 8) k}-e^{j(\pi / 8) k}\right]}\right) 
=\frac{1}{8}\left(\frac{e^{-j(\pi / 2) k}\left[2 j \sin \left(-\frac{\pi}{2} k\right)\right]}{e^{-j(\pi / 8) k}\left[2 j \sin \left(-\frac{\pi}{8} k\right)\right]}\right) \\
& =\frac{\sin \left(\frac{\pi}{2} k\right)}{8 e^{j(3 \pi / 8) k} \sin \left(\frac{\pi}{8} k\right)} \tag{10.5}
\end{align*}
$$


现在考虑 $k=0$ 的情形。我们有  

$$
\begin{aligned}
c_{0} & =\frac{1}{8} \sum_{k=0}^{3} 1=\frac{4}{8} \\
& =\frac{1}{2}.
\end{aligned}
$$


此外，我们注意到若使用 (10.5) 来计算 $k=0$ 的情形，将得到  

$$
\begin{aligned}
\left.\frac{\sin \left(\frac{\pi}{2} k\right)}{8 e^{j(3 \pi / 8) k} \sin \left(\frac{\pi}{8} k\right)}\right|_{k=0} 
& =\left.\frac{\frac{\pi}{2} \cos \left(\frac{\pi}{2} k\right)}{8\left[\frac{3 j \pi}{8} e^{j(3 \pi / 8) k} \sin \left(\frac{\pi}{8} k\right)+\frac{\pi}{8} \cos \left(\frac{\pi}{8} k\right) e^{j(3 \pi / 8) k}\right]}\right|_{k=0} \\
& =\frac{\frac{\pi}{2}}{8\left[0+\frac{\pi}{8}\right]}=\frac{\frac{\pi}{2}}{\pi} \\
& =\frac{1}{2}.
\end{aligned}
$$


因此，(10.5) 对 $k=0$ 同样给出了正确结果。于是 $c_{k}$ 由 (10.5) 给出，对所有 $k \in \mathbb{Z}$ 均成立。由此，$x$ 的傅里叶级数表示为  

$$
x(n)=\sum_{k=\langle 8\rangle} c_{k} e^{j(\pi / 4) k n}
$$


其中  

$$
c_{k}=\frac{\sin \left(\frac{\pi}{2} k\right)}{8 e^{j(3 \pi / 8) k} \sin \left(\frac{\pi}{8} k\right)} \quad \text{ 对所有 } k \in \mathbb{Z}
$$


---

**例 10.5** 求 8 周期序列 $x$ 的傅里叶级数表示，其中  

$$
x(n)= 
\begin{cases}
n, & n \in [-2..2] \\
0, & n=-3 \text{ 或 } n \in [3..4]
\end{cases}
$$


**解：** 回忆傅里叶级数分析公式，有  

$$
c_{k}=\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n}
$$


在区间 $[-3..4]$ 上进行求和，有  

$$
\begin{aligned}
c_{k} 
& =\frac{1}{8} \sum_{n=-3}^{4} x(n) e^{-j(2 \pi / 8) k n} \\
& =\frac{1}{8} \sum_{n=-2}^{2} n e^{-j(\pi / 4) k n} \\
& =\frac{1}{8}\left[-2 e^{-j(\pi / 4)(-2) k}-e^{-j(\pi / 4)(-1) k}+e^{-j(\pi / 4)(1) k}+2 e^{-j(\pi / 4)(2) k}\right] \\
& =\frac{1}{8}\left[-2 e^{j(\pi / 2) k}-e^{j(\pi / 4) k}+e^{-j(\pi / 4) k}+2 e^{-j(\pi / 2) k}\right] \\
& =\frac{1}{8}\left[2 e^{-j(\pi / 2) k}-2 e^{j(\pi / 2) k}+e^{-j(\pi / 4) k}-e^{j(\pi / 4) k}\right] \\
& =\frac{1}{8}\left[2\left(e^{-j(\pi / 2) k}-e^{j(\pi / 2) k}\right)+\left(e^{-j(\pi / 4) k}-e^{j(\pi / 4) k}\right)\right] \\
& =\frac{1}{8}\left[4 j \sin \left(-\frac{\pi}{2} k\right)+2 j \sin \left(-\frac{\pi}{4} k\right)\right] \\
& =\frac{1}{8}\left[-4 j \sin \left(\frac{\pi}{2} k\right)-2 j \sin \left(\frac{\pi}{4} k\right)\right] \\
& =-\frac{j}{2} \sin \left(\frac{\pi}{2} k\right)-\frac{j}{4} \sin \left(\frac{\pi}{4} k\right) \\
& =-j\left[\frac{1}{2} \sin \left(\frac{\pi}{2} k\right)+\frac{1}{4} \sin \left(\frac{\pi}{4} k\right)\right].
\end{aligned}
$$


因此，$x$ 的傅里叶级数表示为  

$$
x(n)=\sum_{k=\langle 8\rangle} c_{k} e^{j(\pi / 4) k n}
$$


其中  

$$
c_{k}=-j\left[\frac{1}{2} \sin \left(\frac{\pi}{2} k\right)+\frac{1}{4} \sin \left(\frac{\pi}{4} k\right)\right] \quad \text{ 对所有 } k \in \mathbb{Z}
$$


---

**例 10.6 （偶实序列的傅里叶级数）**  
设 $x$ 为偶实 $N$ 周期序列，其傅里叶级数系数序列为 $c$。证明：  

- $c$ 为实数（即 $\operatorname{Im}\{c_{k}\}=0, \ \forall k \in \mathbb{Z}$）；  
- $c$ 为偶函数（即 $c_{k}=c_{-k}, \ \forall k \in \mathbb{Z}$）；  
- $c_{0}=\frac{1}{N}\sum_{n=\langle N\rangle} x(n)$。  

**解：** 由傅里叶级数分析公式 (10.2)，结合欧拉公式可写为  

$$
\begin{aligned}
c_{k} 
& =\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n} \\
& =\frac{1}{N} \sum_{n=\langle N\rangle} x(n)\left[\cos \left(-\frac{2 \pi}{N} k n\right)+j \sin \left(-\frac{2 \pi}{N} k n\right)\right] \\
& =\frac{1}{N} \sum_{n=\langle N\rangle} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)-j \sin \left(\frac{2 \pi}{N} k n\right)\right].
\end{aligned}
$$


此时，将上述求和式分为两种情况讨论：  
1) $N$ 为偶数；2) $N$ 为奇数。  

首先考虑 $N$ 为偶数的情形：  

$$
c_{k}=\frac{1}{N} \sum_{n=-(N / 2-1)}^{N / 2} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)-j \sin \left(\frac{2 \pi}{N} k n\right)\right]
$$


将求和分为四部分（即 $n \in [-(N/2-1)..-1], \{0\}, [1..N/2-1], \{N/2\}$），得到  

$$
\begin{aligned}
c_{k}=\frac{1}{N} & \Big[x(0)[\cos (0)-j \sin (0)] 
+\sum_{n=-(N / 2-1)}^{-1} x(n)\left[\cos \left(\tfrac{2 \pi}{N} k n\right)-j \sin \left(\tfrac{2 \pi}{N} k n\right)\right] \\
& +x\left(\tfrac{N}{2}\right)[\cos (\pi k)-j \sin (\pi k)] 
+\sum_{n=1}^{N / 2-1} x(n)\left[\cos \left(\tfrac{2 \pi}{N} k n\right)-j \sin \left(\tfrac{2 \pi}{N} k n\right)\right]\Big] \\
=\frac{1}{N} & \Big[x(0)+(-1)^{k} x\left(\tfrac{N}{2}\right) 
+\sum_{n=-(N / 2-1)}^{-1} x(n)\left[\cos \left(\tfrac{2 \pi}{N} k n\right)-j \sin \left(\tfrac{2 \pi}{N} k n\right)\right] \\
& +\sum_{n=1}^{N / 2-1} x(n)\left[\cos \left(\tfrac{2 \pi}{N} k n\right)-j \sin \left(\tfrac{2 \pi}{N} k n\right)\right]\Big].
\end{aligned}
$$


在第一个求和中作变量替换，并利用 $x$ 与余弦函数为偶函数、正弦函数为奇函数这一事实，有  

$$
c_{k}=\frac{1}{N}\Big[x(0)+(-1)^{k} x\left(\tfrac{N}{2}\right)
+\sum_{n=1}^{N / 2-1} x(n)\left[\cos \left(\tfrac{2 \pi}{N} k n\right)+j \sin \left(\tfrac{2 \pi}{N} k n\right)\right]
+\sum_{n=1}^{N / 2-1} x(n)\left[\cos \left(\tfrac{2 \pi}{N} k n\right)-j \sin \left(\tfrac{2 \pi}{N} k n\right)\right]\Big].
$$


将两个求和式合并并化简，我们得到

$$
c_{k}=\frac{1}{N}\left[x(0)+(-1)^{k} x\left(\frac{N}{2}\right)+2 \sum_{n=1}^{N / 2-1} x(n) \cos \left(\frac{2 \pi}{N} k n\right)\right]
$$


接下来，考虑 $N$ 为奇数的情况。我们有

$$
c_{k}=\frac{1}{N} \sum_{n=-(N-1) / 2}^{(N-1) / 2} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)-j \sin \left(\frac{2 \pi}{N} k n\right)\right]
$$


将求和划分为三部分（即 $n \in \left[-\frac{N-1}{2} . .-1\right], \{0\}, \left[1 . . \frac{N-1}{2}\right]$），得到

$$
c_{k}=\frac{1}{N}\left[x(0)+\sum_{n=-(N-1) / 2}^{-1} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)-j \sin \left(\frac{2 \pi}{N} k n\right)\right]+\sum_{n=1}^{(N-1) / 2} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)-j \sin \left(\frac{2 \pi}{N} k n\right)\right]\right] .
$$


在第一个求和中进行变量替换，并利用 $x$ 与余弦是偶函数而正弦是奇函数的事实，我们有

$$
c_{k}=\frac{1}{N}\left[x(0)+\sum_{n=1}^{(N-1) / 2} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)+j \sin \left(\frac{2 \pi}{N} k n\right)\right]+\sum_{n=1}^{(N-1) / 2} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)-j \sin \left(\frac{2 \pi}{N} k n\right)\right]\right] .
$$


将两个求和式合并并化简，我们得到

$$
c_{k}=\frac{1}{N}\left[x(0)+2 \sum_{n=1}^{(N-1) / 2} x(n) \cos \left(\frac{2 \pi}{N} k n\right)\right] .
$$


将 $N$ 为偶数与 $N$ 为奇数两种情况的结果结合起来，我们得到

$$
c_{k}= \begin{cases}\frac{1}{N}\left[x(0)+(-1)^{k} x\left(\frac{N}{2}\right)+2 \sum_{n=1}^{N / 2-1} x(n) \cos \left(\frac{2 \pi}{N} k n\right)\right] & N \text { 为偶数 } \\ \frac{1}{N}\left[x(0)+2 \sum_{n=1}^{(N-1) / 2} x(n) \cos \left(\frac{2 \pi}{N} k n\right)\right] & N \text { 为奇数 }\end{cases}
$$


由于 $x$ 和余弦函数都是实数，因此 $c_{k}$ 必然也是实数。于是我们有 $\operatorname{Im}\left(c_{k}\right)=0$。同时，因为 $(-1)^{k}$ 和 $\cos \left(\frac{2 \pi}{N} k n\right)$ 均为偶函数，所以 $c$ 也是偶函数。

现在考虑 $c_{0}$。将 $k=0$ 代入傅里叶级数分析公式，我们有

$$
\begin{aligned}
c_{0} & =\left.\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{j(2 \pi / N) k n}\right|_{k=0} \\
& =\frac{1}{N} \sum_{n=\langle N\rangle} x(n)
\end{aligned}
$$


因此，$c_{0}$ 具有所述的取值。
例 10.7（奇实序列的傅里叶级数）。设 $x$ 为奇实 $N$-周期序列，其傅里叶级数系数序列为 $c$。证明：

- $c$ 是纯虚的（即 $\operatorname{Re}\left\{c_{k}\right\}=0$ 对所有 $k \in \mathbb{Z}$ 成立）；
- $c$ 是奇的（即 $c_{k}=-c_{-k}$ 对所有 $k \in \mathbb{Z}$ 成立）；
- $c_{0}=0$。

解答。根据傅里叶级数分析方程 (10.2) 并利用欧拉公式，可以写为

$$
\begin{aligned}
c_{k} & =\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n} \\
& =\frac{1}{N} \sum_{n=\langle N\rangle} x(n)\left[\cos \left(-\frac{2 \pi}{N} k n\right)+j \sin \left(-\frac{2 \pi}{N} k n\right)\right] \\
& =\frac{1}{N} \sum_{n=\langle N\rangle} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)-j \sin \left(\frac{2 \pi}{N} k n\right)\right] .
\end{aligned}
$$


此时，我们将对上述方程的进一步处理分为两种情况：1）$N$ 为偶数，2）$N$ 为奇数。

首先考虑 $N$ 为偶数的情况。我们有

$$
c_{k}=\frac{1}{N} \sum_{n=-(N / 2-1)}^{N / 2} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)-j \sin \left(\frac{2 \pi}{N} k n\right)\right]
$$


将求和拆分为四部分（即 $n$ 属于 $\left[-\left(\frac{N}{2}-1\right) \ldots-1\right],\{0\},\left[1 .. \frac{N}{2}-1\right]$ 和 $\left\{\frac{N}{2}\right\}$），并利用 $x(0)=0$ 且 $x\left(\frac{N}{2}\right)=0$，得到

$$
\begin{aligned}
c_{k}=\frac{1}{N} & {\left[x(0)[\cos 0-j \sin 0]+\sum_{n=-(N / 2-1)}^{-1} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)-j \sin \left(\frac{2 \pi}{N} k n\right)\right]\right.} \\
& \left.+x\left(\frac{N}{2}\right)[\cos (\pi k)-j \sin (\pi k)]+\sum_{n=1}^{N / 2-1} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)-j \sin \left(\frac{2 \pi}{N} k n\right)\right]\right] \\
=\frac{1}{N} & {\left[\sum_{n=-(N / 2-1)}^{-1} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)-j \sin \left(\frac{2 \pi}{N} k n\right)\right]+\sum_{n=1}^{N / 2-1} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)-j \sin \left(\frac{2 \pi}{N} k n\right)\right]\right] . }
\end{aligned}
$$


（注意，由定理 8.3，$x(0)=x\left(\frac{N}{2}\right)=0$。）在第一个求和中做变量变换，并利用 $x$ 和 $\sin$ 是奇函数而 $\cos$ 是偶函数，我们得到

$$
c_{k}=\frac{1}{N}\left[-\sum_{n=1}^{N / 2-1} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)+j \sin \left(\frac{2 \pi}{N} k n\right)\right]+\sum_{n=1}^{N / 2-1} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)-j \sin \left(\frac{2 \pi}{N} k n\right)\right]\right]
$$


合并两部分求和并化简，得到

$$
c_{k}=\frac{1}{N}\left[-2 j \sum_{n=1}^{N / 2-1} x(n) \sin \left(\frac{2 \pi}{N} k n\right)\right]
$$


接下来考虑 $N$ 为奇数的情况。我们有

$$
c_{k}=\frac{1}{N} \sum_{n=-(N-1) / 2}^{(N-1) / 2} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)-j \sin \left(\frac{2 \pi}{N} k n\right)\right]
$$


将求和拆分为三部分（即 $n$ 属于 $\left[-\frac{(N-1)}{2} ..-1\right],\{0\}$ 和 $\left[1 .. \frac{N-1}{2}\right]$），并利用 $x(0)=0$，得到

$$
c_{k}=\frac{1}{N}\left[\sum_{n=-(N-1) / 2}^{-1} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)-j \sin \left(\frac{2 \pi}{N} k n\right)\right]+\sum_{n=1}^{(N-1) / 2} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)-j \sin \left(\frac{2 \pi}{N} k n\right)\right]\right]
$$


在第一个求和中做变量变换，并利用 $x$ 和 $\sin$ 是奇函数而 $\cos$ 是偶函数，我们得到

$$
c_{k}=\frac{1}{N}\left[-\sum_{n=1}^{(N-1) / 2} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)+j \sin \left(\frac{2 \pi}{N} k n\right)\right]+\sum_{n=1}^{(N-1) / 2} x(n)\left[\cos \left(\frac{2 \pi}{N} k n\right)-j \sin \left(\frac{2 \pi}{N} k n\right)\right]\right]
$$


合并两部分求和并化简，得到

$$
c_{k}=\frac{1}{N}\left[-2 j \sum_{n=1}^{(N-1) / 2} x(n) \sin \left(\frac{2 \pi}{N} k n\right)\right]
$$


综合上述结果，我们得到

$$
c_{k}= \begin{cases}-\frac{2 j}{N} \sum_{n=1}^{N / 2-1} x(n) \sin \left(\frac{2 \pi}{N} k n\right) & N \text { 偶数 } \\ -\frac{2 j}{N} \sum_{n=1}^{(N-1) / 2} x(n) \sin \left(\frac{2 \pi}{N} k n\right) & N \text { 奇数 }\end{cases}
$$


由于 $x$ 和 $\sin$ 是实数，$c_{k}$ 必为虚数。因此，我们有 $\operatorname{Re}\left(c_{k}\right)=0$。由于 $\sin$ 是奇函数，$c$ 是奇函数。

现在考虑 $c_{0}$。将 $k=0$ 代入上述 $c_{k}$ 的公式，得到

$$
c_{0}=0 .
$$


因此，$c_{0}$ 的值如题所示。
## 10.4 离散时间傅里叶级数的收敛性说明

由于（DT）傅里叶级数的分析与综合方程只涉及有限求和（与无穷级数相对），收敛性通常不是主要问题。如果一个 $N$-周期序列是有界的（即其值有限），则其傅里叶级数系数序列必然存在且有界，傅里叶级数的分析与综合方程必然收敛。

## 10.5 离散时间傅里叶级数的性质

傅里叶级数表示具有许多重要性质。在接下来的章节中，我们将介绍其中几种性质。为了方便，这些性质也在后面的表 10.1（第 424 页）中进行了总结。

表 10.1：离散时间傅里叶级数的性质

| 性质 | 时域 | 傅里叶域 |
| :--- | :--- | :--- |
| 线性 | $\alpha x(n)+\beta y(n)$ | $\alpha a_{k}+\beta b_{k}$ |
| 平移 | $x(n-n_{0})$ | $e^{-jk(2 \pi / N) n_{0}} a_k$ |
| 调制 | $e^{j(2 \pi / N) k_{0} n} x(n)$ | $a_{k-k_0}$ |
| 反演 | $x(-n)$ | $a_{-k}$ |
| 共轭 | $x^{*}(n)$ | $a^{*}_{-k}$ |
| 对偶性 | $a_{n}$ | $\frac{1}{N} x(-k)$ |
| 周期卷积 | $x \circledast y(n)$ | $N a_k b_k$ |
| 乘法 | $x(n) y(n)$ | $a \circledast b_k$ |

| 性质 |  |
| :-- | :-- |
| Parseval 关系 | $\frac{1}{N} \sum_{n=\langle N\rangle}|x(n)|^{2}=\sum_{k=\langle N\rangle}\left|a_{k} \right|^{2}$ |
| 偶对称 | $x$ 为偶 $\Leftrightarrow a$ 为偶 |
| 奇对称 | $x$ 为奇 $\Leftrightarrow a$ 为奇 |
| 实值 / 共轭对称 | $x$ 为实 $\Leftrightarrow a$ 为共轭对称 |

### 10.5.1 线性性

可以说，傅里叶级数最重要的性质是线性性，如下所述。  
定理 10.2（线性性）。设 $x$ 和 $y$ 为两个 $N$-周期序列。如果

$$
x(n) \stackrel{D T F S}{\longleftrightarrow} a_{k} \quad \text { 且 } \quad y(n) \stackrel{D T F S}{\longleftrightarrow} b_{k},
$$


则

$$
A x(n)+B y(n) \stackrel{D T F S}{\longleftrightarrow} A a_{k}+B b_{k},
$$


其中 $A$ 和 $B$ 为复常数。换句话说，序列的线性组合会产生其傅里叶级数系数的相同线性组合。

证明。为了证明上述性质，按如下步骤进行。首先，将 $x$ 和 $y$ 表示为其对应的傅里叶级数形式：

$$
x(n)=\sum_{k=\langle N\rangle} a_{k} e^{j k(2 \pi / N) n} \quad \text { 且 } \quad y(n)=\sum_{k=\langle N\rangle} b_{k} e^{j k(2 \pi / N) n} .
$$


现在，我们求 $A x+B y$ 的傅里叶级数。利用 $x$ 和 $y$ 的傅里叶级数表示，有

$$
\begin{aligned}
A x(n)+B y(n) & =A \sum_{k=\langle N\rangle} a_{k} e^{j k(2 \pi / N) n}+B \sum_{k=\langle N\rangle} b_{k} e^{j k(2 \pi / N) n} \\
& =\sum_{k=\langle N\rangle} A a_{k} e^{j k(2 \pi / N) n}+\sum_{k=\langle N\rangle} B b_{k} e^{j k(2 \pi / N) n} \\
& =\sum_{k=\langle N\rangle}\left(A a_{k}+B b_{k}\right) e^{j k(2 \pi / N) n}
\end{aligned}
$$


由此可见，上式右边是一个傅里叶级数，其系数序列为 $c_{k}^{\prime}=A a_{k}+B b_{k}$。因此，我们得到

$$
A x(n)+B y(n) \stackrel{\mathrm{DTFS}}{\longleftrightarrow} A a_{k}+B b_{k}.
$$


### 10.5.2 平移（时间移位）

接下来介绍傅里叶级数的平移（即时间移位）性质，如下所示。  
定理 10.3（平移（即时间移位））。设 $x$ 为 $N$-周期序列。如果

$$
x(n) \stackrel{D T F S}{\longleftrightarrow} a_{k},
$$


则

$$
x\left(n-n_{0}\right) \stackrel{\text { DTFS }}{\longleftrightarrow} e^{-j k(2 \pi / N) n_{0}} a_{k},
$$


其中 $n_{0}$ 为整数常数。

证明。为了证明平移性质，按如下步骤进行。$x$ 的傅里叶级数为

$$
x(n)=\sum_{k=\langle N\rangle} a_{k} e^{j k(2 \pi / N) n}
$$


将 $n-n_{0}$ 代入上式，得到

$$
\begin{aligned}
x\left(n-n_{0}\right) & =\sum_{k=\langle N\rangle} a_{k} e^{j k(2 \pi / N)\left(n-n_{0}\right)} \\
& =\sum_{k=\langle N\rangle} a_{k} e^{j k(2 \pi / N) n} e^{-j k(2 \pi / N) n_{0}} \\
& =\sum_{k=\langle N\rangle}\left(a_{k} e^{-j k(2 \pi / N) n_{0}}\right) e^{j k(2 \pi / N) n}
\end{aligned}
$$


由此可见，上式右边是一个傅里叶级数，其系数序列为 $a_{k}^{\prime}=a_{k} e^{-j k(2 \pi / N) n_{0}}$。因此，我们得到

$$
x\left(n-n_{0}\right) \stackrel{\mathrm{DTFS}}{\longleftrightarrow} e^{-j k(2 \pi / N) n_{0}} a_{k}.
$$


由上述定理可知，对周期序列进行时间移位不会改变其傅里叶级数系数的幅值（因为对所有实数 $\theta$，有 $\left|e^{j \theta}\right|=1$）。
### 10.5.3 调制（频率移位）

接下来介绍傅里叶级数的调制（即频率移位）性质，如下所示。

定理 10.4（调制（即频率移位））。设 $x$ 为 $N$-周期序列。如果

$$
x(n) \stackrel{D T F S}{\longleftrightarrow} a_{k},
$$


则

$$
e^{j M(2 \pi / N) n} x(n) \stackrel{D T F S}{\longleftrightarrow} a_{k-M},
$$


其中 $M$ 为整数常数。

证明。为了证明调制性质，按如下步骤进行。根据傅里叶级数定义，有

$$
x(n)=\sum_{k=\langle N\rangle} a_{k} e^{j(2 \pi / N) k n}
$$


将两边同时乘以 $e^{j(2 \pi / N) M n}$，得到

$$
\begin{aligned}
e^{j(2 \pi / N) M n} x(n) & =e^{j(2 \pi / N) M n} \sum_{k=\langle N\rangle} a_{k} e^{j(2 \pi / N) k n} \\
& =\sum_{k=\langle N\rangle} a_{k} e^{j(2 \pi / N) M n} e^{j(2 \pi / N) k n} \\
& =\sum_{k=\langle N\rangle} a_{k} e^{j(2 \pi / N)(k+M) n}
\end{aligned}
$$


现在，我们做变量变换。设 $\ell=k+M$，则 $k=\ell-M$。通过此变量变换，对 $k \in[\eta .. \eta+N-1]$ 的求和变为对 $\ell \in[-(\eta+N-1) .. -\eta]$ 的求和，这仍然是一个长度为 $N$ 的单周期求和。应用变量变换后，得到

$$
e^{j(2 \pi / N) M n} x(n)=\sum_{\ell=\langle N\rangle} a_{\ell-M} e^{j(2 \pi / N) \ell n}
$$


由此可见，上式右边是一个傅里叶级数，其系数序列为 $a_{\ell}^{\prime}=a_{\ell-M}$。因此，$e^{j(2 \pi / N) M n} x(n)$（即上式左边）的傅里叶级数系数序列为 $a_{k}^{\prime}=a_{k-M}$。因此，我们得到

$$
e^{j M(2 \pi / N) n} x(n) \stackrel{\mathrm{DTFS}}{\longleftrightarrow} a_{k-M}.
$$


### 10.5.4 反射（时间反转）

接下来介绍傅里叶级数的反射（即时间反转）性质，如下所示。  
定理 10.5（反射（即时间反转））。设 $x$ 为 $N$-周期序列。如果

$$
x(n) \stackrel{D T F S}{\longleftrightarrow} a_{k},
$$


则

$$
x(-n) \stackrel{\text { DTFS }}{\longleftrightarrow} a_{-k} .
$$


证明。为了证明时间反转性质，按如下步骤进行。$x$ 的傅里叶级数为

$$
x(n)=\sum_{k=\langle N\rangle} a_{k} e^{j k(2 \pi / N) n}
$$


将 $-n$ 代入 $n$，得到

$$
x(-n)=\sum_{k=\langle N\rangle} a_{k} e^{j k(2 \pi / N)(-n)}
$$


现在，做变量变换。设 $\ell=-k$，则 $k=-\ell$。通过此变量变换，对 $k \in[\eta .. \eta+N-1]$ 的求和变为对 $\ell \in[-(\eta+N-1) .. -\eta]$ 的求和，这仍然是一个长度为 $N$ 的单周期求和。应用该变量变换，得到

$$
\begin{aligned}
x(-n) & =\sum_{\ell=\langle N\rangle} a_{-\ell} e^{j(-\ell)(2 \pi / N)(-n)} \\
& =\sum_{\ell=\langle N\rangle} a_{-\ell} e^{j \ell(2 \pi / N) n}
\end{aligned}
$$


由此可见，上式右边是一个傅里叶级数，其系数序列为 $a_{\ell}^{\prime}=a_{-\ell}$。因此，我们得到

$$
x(-n) \stackrel{\text { DTFS }}{\longleftrightarrow} a_{-k}.
$$


换句话说，上述定理表明，对序列进行时间反转会使其傅里叶级数系数序列也发生相应的时间反转。
### 10.5.5 共轭

接下来介绍傅里叶级数的共轭性质，如下所示。  
定理 10.6（共轭）。对于一个 $N$-周期序列 $x$，其傅里叶级数系数序列为 $c$，有

$$
x^{*}(n) \stackrel{D T F S}{\longleftrightarrow} c_{-k}^{*} .
$$


证明。根据傅里叶级数定义，有

$$
x(n)=\sum_{k=\langle N\rangle} c_{k} e^{j k(2 \pi / N) n}
$$


对上式两边取复共轭，得到

$$
\begin{aligned}
x^{*}(n) & =\left(\sum_{k=\langle N\rangle} c_{k} e^{j k(2 \pi / N) n}\right)^{*} \\
& =\sum_{k=\langle N\rangle}\left(c_{k} e^{j k(2 \pi / N) n}\right)^{*} \\
& =\sum_{k=\langle N\rangle} c_{k}^{*} e^{-j k(2 \pi / N) n} .
\end{aligned}
$$


现在，做变量变换。设 $\ell=-k$，则 $k=-\ell$。通过此变量变换，对 $k \in[\eta .. \eta+N-1]$ 的求和变为对 $\ell \in[-(\eta+N-1) .. -\eta]$ 的求和，这仍然是一个长度为 $N$ 的单周期求和。应用该变量变换，得到

$$
x^{*}(n)=\sum_{\ell=\langle N\rangle} c_{-\ell}^{*} e^{j \ell(2 \pi / N) n}
$$


由此可见，上式右边是一个傅里叶级数，其系数序列为 $c_{\ell}^{\prime}=c_{-\ell}^{*}$。因此，$x^{*}$（即上式左边）的傅里叶级数系数序列为 $c_{k}^{\prime}=c_{-k}^{*}$。因此，我们得到

$$
x^{*}(n) \stackrel{\mathrm{DTFS}}{\longleftrightarrow} c_{-k}^{*}.
$$


换句话说，上述定理表明，对序列取共轭的效果相当于对其傅里叶级数系数序列进行时间反转并取共轭。
### 10.5.6 对偶性

接下来介绍傅里叶级数的对偶性性质，如下所示。  
定理 10.7（对偶性）。设 $x$ 为一个 $N$-周期序列，其对应的傅里叶级数系数序列为 $a$。则有

$$
a_{n} \stackrel{D T F S}{\longleftrightarrow} \frac{1}{N} x(-k) .
$$


证明。根据傅里叶级数定义，有

$$
x(k)=\sum_{\ell=\langle N\rangle} a_{\ell} e^{j(2 \pi / N) \ell k}
$$


将 $-k$ 代入 $k$，得到

$$
\begin{aligned}
x(-k) & =\sum_{\ell=\langle N\rangle} a_{\ell} e^{j(2 \pi / N) \ell(-k)} \\
& =\sum_{\ell=\langle N\rangle} a_{\ell} e^{-j(2 \pi / N) \ell k}
\end{aligned}
$$


两边同时乘以 $\frac{1}{N}$，得到

$$
\frac{1}{N} x(-k)=\frac{1}{N} \sum_{\ell=\langle N\rangle} a_{\ell} e^{-j(2 \pi / N) \ell k}
$$


现在可见，右边正是计算 $a$ 的第 $k$ 个傅里叶级数系数的（傅里叶级数分析）公式。因此，对偶性成立。

上述定理中的对偶性来源于傅里叶级数分析和综合方程的高度相似性，分别由公式 (10.2) 和 (10.1) 给出。为了更明显地体现这种相似性，我们可以将傅里叶级数分析和综合方程分别改写为

$$
X(m)=\frac{1}{N} \sum_{\ell=\langle N\rangle} x(\ell) e^{-j(2 \pi / N) \ell m} \quad \text { 和 } \quad x(m)=\sum_{\ell=\langle N\rangle} X(\ell) e^{j(2 \pi / N) \ell m}
$$


可以看到，这两个方程除了以下两点外完全相同：1）一个 $N$ 的因子；2）指数函数中参数符号不同。因此，如果不小心用一个方程代替另一个方程，我们将得到一个几乎正确的结果。实际上，通过补偿上述两个差异（即 $N$ 的因子和指数函数符号的差异），这个几乎正确的结果可以变为正确。这实际上就是对偶性所描述的内容。

虽然关系 $x(n) \stackrel{\text { DTFS }}{\longleftrightarrow} X(k)$ 只直接提供了序列 $x$ 的傅里叶级数系数序列 $X$，但对偶性允许我们间接推断 $X$ 的傅里叶级数系数序列。因此，对偶性可以用来有效地将已知的傅里叶级数关系数量翻倍。
### 10.5.7 周期卷积

接下来介绍傅里叶级数的周期卷积性质，如下所示。  
定理 10.8（周期卷积）。设 $x$ 和 $y$ 为 $N$-周期序列，其傅里叶级数表示分别为

$$
x(n)=\sum_{k=\langle N\rangle} a_{k} e^{j(2 \pi / N) k n} \quad \text { 和 } \quad y(n)=\sum_{k=\langle N\rangle} b_{k} e^{j(2 \pi / N) k n}
$$


设 $z(n)=x \circledast y(n)$，其傅里叶级数表示为

$$
z(n)=\sum_{k=\langle N\rangle} c_{k} e^{j(2 \pi / N) k n}
$$


则序列 $a, b$ 和 $c$ 之间的关系为

$$
c_{k}=N a_{k} b_{k}
$$


证明。根据周期卷积的定义，有

$$
x \circledast y(n)=\sum_{m=\langle N\rangle} x(m) y(n-m)
$$


将 $x$ 和 $y$ 展开为其傅里叶级数表示，得到

$$
x \circledast y(n)=\sum_{m=\langle N\rangle}\left(\sum_{\ell=\langle N\rangle} a_{\ell} e^{j(2 \pi / N) \ell m}\right)\left(\sum_{k=\langle N\rangle} b_{k} e^{j(2 \pi / N) k(n-m)}\right) .
$$


交换求和顺序并重新排列，得到

$$
\begin{aligned}
x \circledast y(n) & =\sum_{m=\langle N\rangle} \sum_{k=\langle N\rangle} \sum_{\ell=\langle N\rangle} a_{\ell} b_{k} e^{j(2 \pi / N) \ell m} e^{j(2 \pi / N) k(n-m)} \\
& =\sum_{m=\langle N\rangle} \sum_{k=\langle N\rangle} \sum_{\ell=\langle N\rangle} a_{\ell} b_{k} e^{j(2 \pi / N) k n} e^{j(2 \pi / N)(\ell-k) m} \\
& =\sum_{k=\langle N\rangle} \sum_{\ell=\langle N\rangle} a_{\ell} b_{k} e^{j(2 \pi / N) k n} \sum_{m=\langle N\rangle} e^{j(2 \pi / N)(\ell-k) m}
\end{aligned}
$$


对外层两个求和取 $[0 .. N-1]$，得到

$$
x \circledast y(n)=\sum_{k=0}^{N-1} \sum_{\ell=0}^{N-1} a_{\ell} b_{k} e^{j(2 \pi / N) k n} \sum_{m=\langle N\rangle} e^{j(2 \pi / N)(\ell-k) m}
$$


现在可见

$$
\sum_{m=\langle N\rangle} e^{j(2 \pi / N)(\ell-k) m}= \begin{cases}N & (\ell-k) / N \in \mathbb{Z} \\ 0 & \text { 否则 }\end{cases}
$$


（关于该事实的证明留作练习 A.9）。此外，由于 $\ell-k \in[-(N-1) .. N-1]$，$(\ell-k)/N \in \mathbb{Z}$ 意味着 $\ell-k=0$（即 $\ell=k$）。利用这些事实，可以将上式简化为

$$
\begin{aligned}
x \circledast y(n) & =\sum_{k=0}^{N-1} \sum_{\ell=0}^{N-1} a_{\ell} b_{k} e^{j(2 \pi / N) k n} N \delta(\ell-k) \\
& =\sum_{k=0}^{N-1} a_{k} b_{k} e^{j(2 \pi / N) k n} N \\
& =\sum_{k=0}^{N-1} N a_{k} b_{k} e^{j(2 \pi / N) k n} \\
& =\sum_{k=\langle N\rangle} N a_{k} b_{k} e^{j(2 \pi / N) k n}
\end{aligned}
$$


由此可见，上式右边是傅里叶级数，其系数序列为 $c_{k}=N a_{k} b_{k}$。因此，$x \circledast y$（即上式左边）的傅里叶级数系数序列为

$$
c_{k}=N a_{k} b_{k}.
$$


### 10.5.8 乘法

接下来介绍傅里叶级数的乘法性质，如下所示。  
定理 10.9（乘法）。设 $x$ 和 $y$ 为 $N$-周期序列，表示为

$$
x(n)=\sum_{k=\langle N\rangle} a_{k} e^{j(2 \pi / N) k n} \quad \text { 和 } \quad y(n)=\sum_{k=\langle N\rangle} b_{k} e^{j(2 \pi / N) k n} .
$$


设 $z(n)=x(n) y(n)$，其傅里叶级数表示为

$$
z(n)=\sum_{k=\langle N\rangle} c_{k} e^{j(2 \pi / N) k n}
$$


则序列 $a, b$ 和 $c$ 之间的关系为

$$
c_{k}=\sum_{n=\langle N\rangle} a_{n} b_{k-n} \quad(\text { 即 } c=a \circledast b) .
$$


证明。根据傅里叶级数分析方程，有

$$
c_{k}=\frac{1}{N} \sum_{\ell=\langle N\rangle} x(\ell) y(\ell) e^{-j(2 \pi / N) k \ell}
$$


将 $x$ 用其傅里叶级数表示代替，得到

$$
\begin{aligned}
c_{k} & =\frac{1}{N} \sum_{\ell=\langle N\rangle}\left(\sum_{n=\langle N\rangle} a_{n} e^{j(2 \pi / N) n \ell}\right) y(\ell) e^{-j(2 \pi / N) k \ell} \\
& =\frac{1}{N} \sum_{\ell=\langle N\rangle} \sum_{n=\langle N\rangle} a_{n} e^{j(2 \pi / N) n \ell} y(\ell) e^{-j(2 \pi / N) k \ell}
\end{aligned}
$$


交换两重求和的顺序并重新排列，得到

$$
\begin{aligned}
c_{k} & =\frac{1}{N} \sum_{n=\langle N\rangle} \sum_{\ell=\langle N\rangle} a_{n} e^{j(2 \pi / N) n \ell} y(\ell) e^{-j(2 \pi / N) k \ell} \\
& =\sum_{n=\langle N\rangle} a_{n}\left(\frac{1}{N} \sum_{\ell=\langle N\rangle} y(\ell) e^{-j(2 \pi / N)(k-n) \ell}\right)
\end{aligned}
$$


注意，上式大括号内的表达式正是计算 $y$ 的第 $(k-n)$ 个傅里叶级数系数的公式，因此可以得到

$$
c_{k}=\sum_{n=\langle N\rangle} a_{n} b_{k-n}.
$$


### 10.5.9 Parseval 定理

傅里叶级数的另一个重要性质与序列的能量有关，如下所示。  
定理 10.10（Parseval 定理）。设 $x$ 为 $N$-周期序列，其傅里叶级数系数序列为 $c$，则满足关系

$$
\frac{1}{N} \sum_{n=\langle N\rangle}|x(n)|^{2}=\sum_{k=\langle N\rangle}\left|c_{k}\right|^{2}
$$


（即 $x$ 的能量与 $c$ 的能量相等，只差一个尺度因子）。

证明。设 $x, y, z$ 为 $N$-周期序列，其傅里叶级数表示为

$$
\begin{gathered}
x(n)=\sum_{k=\langle N\rangle} a_{k} e^{j(2 \pi / N) k n}, \\
y(n)=\sum_{k=\langle N\rangle} b_{k} e^{j(2 \pi / N) k n}, \quad \text { 和 } \\
z(n)=x(n) y(n)=\sum_{k=\langle N\rangle} c_{k} e^{j(2 \pi / N) k n} .
\end{gathered}
$$


根据傅里叶级数的乘法性质（即定理 10.9），有

$$
c_{k}=\sum_{n=\langle N\rangle} a_{n} b_{k-n} \tag{10.6}
$$


现在令 $y(n)=x^{*}(n)$，则 $z(n)=x(n) x^{*}(n)=|x(n)|^{2}$。根据傅里叶级数的共轭性质（即定理 10.6），由于 $y(n)=x^{*}(n)$，我们有

$$
b_{k}=a_{-k}^{*}
$$


因此，可以将 (10.6) 改写为

$$
\begin{align*}
c_{k} & =\sum_{n=\langle N\rangle} a_{n} a_{-(k-n)}^{*} \\
& =\sum_{n=\langle N\rangle} a_{n} a_{n-k}^{*} . \tag{10.7}
\end{align*}
$$


根据傅里叶级数分析方程，有

$$
c_{k}=\frac{1}{N} \sum_{n=\langle N\rangle}|x(n)|^{2} e^{-j(2 \pi / N) k n} \tag{10.8}
$$


将 (10.7) 与 (10.8) 对比，得到

$$
\frac{1}{N} \sum_{n=\langle N\rangle}|x(n)|^{2} e^{-j(2 \pi / N) k n}=\sum_{n=\langle N\rangle} a_{n} a_{n-k}^{*}
$$


令 $k=0$，得到

$$
\frac{1}{N} \sum_{n=\langle N\rangle}|x(n)|^{2}=\sum_{n=\langle N\rangle} a_{n} a_{n}^{*}=\sum_{n=\langle N\rangle}\left|a_{n}\right|^{2} .
$$


上述定理表明，序列 $x$ 的能量与其傅里叶级数系数序列 $c$ 的能量相等（仅差一个尺度因子）。换句话说，序列与其傅里叶级数系数序列之间的变换保持了能量（仅差尺度因子）。

### 10.5.10 偶/奇对称性

接下来考虑傅里叶级数与偶/奇对称性的关系。事实证明，傅里叶级数能够保持信号的对称性。换句话说，我们得到以下结论。

定理 10.11（偶/奇对称性）。设 $x$ 为 $N$-周期序列，其傅里叶级数系数序列为 $c$，则具有以下性质：  
$x$ 为偶函数当且仅当 $c$ 为偶函数；  
$x$ 为奇函数当且仅当 $c$ 为奇函数。

证明。证明留作练习 10.3。  
换句话说，上述定理表明，$x$ 与 $c$ 的偶/奇对称性总是保持一致（即傅里叶级数保持对称性）。
### 10.5.11 实数序列

考虑周期序列 $x$ 的傅里叶级数表示，如公式 (10.1) 所示。在最一般的情况下，$x$ 是复值序列，但现在我们假设 $x$ 是实值的。在实值序列的情况下，傅里叶级数系数 $c_{k}$ 与 $c_{-k}$ 之间存在一个重要的关系，如下定理所示。

定理 10.12（实值序列的傅里叶级数）。设 $x$ 为周期序列，傅里叶级数系数序列为 $c$。当且仅当满足下式时，序列 $x$ 为实值：

$$
\begin{equation*}
c_{k}=c_{-k}^{*} \text { 对所有 } k \in \mathbb{Z} \text{成立} \tag{10.9}
\end{equation*}
$$


（即 $c$ 是共轭对称的）。

证明。首先，我们证明 $x$ 为实值序列意味着 $c$ 是共轭对称的。假设 $x$ 是实值的。根据傅里叶级数分析公式，有

$$
c_{k}=\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n}
$$


在上述公式中将 $k$ 替换为 $-k$ 并对两边取共轭，得到

$$
\begin{aligned}
c_{-k}^{*} & =\left(\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N)(-k) n}\right)^{*} \\
& =\left(\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{j(2 \pi / N) k n}\right)^{*} \\
& =\frac{1}{N} \sum_{n=\langle N\rangle} x^{*}(n) e^{-j(2 \pi / N) k n} .
\end{aligned}
$$


由于 $x$ 为实值（即 $x^{*}=x$ ），我们有

$$
\begin{aligned}
c_{-k}^{*} & =\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n} \\
& =c_{k}
\end{aligned}
$$


因此，$c$ 是共轭对称的。由此可见，$x$ 为实值序列意味着 $c$ 是共轭对称的。

接下来，我们证明 $c$ 为共轭对称意味着 $x$ 是实值序列。假设 $c$ 是共轭对称的。根据傅里叶级数综合公式，有

$$
x(n)=\sum_{k=\langle N\rangle} c_{k} e^{j(2 \pi / N) k n}
$$


对上述公式两边取复共轭，得到

$$
\begin{aligned}
x^{*}(n) & =\left(\sum_{k=\langle N\rangle} c_{k} e^{j(2 \pi / N) k n}\right)^{*} \\
& =\sum_{k=\langle N\rangle}\left(c_{k} e^{j(2 \pi / N) k n}\right)^{*} \\
& =\sum_{k=\langle N\rangle} c_{k}^{*} e^{-j(2 \pi / N) k n} \\
& =\sum_{k=N_{0}}^{N_{0}+N-1} c_{k}^{*} e^{-j(2 \pi / N) k n} .
\end{aligned}
$$


现在，我们进行变量替换。令 $k^{\prime}=-k$，因此 $k=-k^{\prime}$。应用该变量替换并去掉撇号，得到

$$
\begin{aligned}
x^{*}(n) & =\sum_{k=-N_{0}-N+1}^{-N_{0}} c_{-k}^{*} e^{-j(2 \pi / N)(-k) n} \\
& =\sum_{k=-N_{0}-N+1}^{-N_{0}} c_{-k}^{*} e^{j(2 \pi / N) k n}
\end{aligned}
$$


由于前式右边的求和中每一项在 $k$ 上都是 $N$ 周期的，因此求和可以在任意 $N$ 个连续整数上进行。于是我们有

$$
x^{*}(n)=\sum_{k=\langle N\rangle} c_{-k}^{*} e^{j(2 \pi / N) k n}
$$


由于对所有 $k \in \mathbb{Z}$，$c_{k}=c_{-k}^{*}$，我们得到

$$
\begin{aligned}
x^{*}(n) & =\sum_{k=\langle N\rangle} c_{k} e^{j(2 \pi / N) k n} \\
& =x(n)
\end{aligned}
$$


因此，$x$ 为实值序列。由此可见，$c$ 为共轭对称意味着 $x$ 为实值序列，证明完毕。

利用式 (10.9) 中的关系，可以推导出实值序列的傅里叶级数的另一种形式。特别地，序列 $x$ 的傅里叶级数可以表示为

$$
x(n)= \begin{cases}\alpha_{0}+\sum_{k=1}^{N / 2-1}\left[\alpha_{k} \cos \left(\frac{2 \pi}{N} k n\right)+\beta_{k} \sin \left(\frac{2 \pi}{N} k n\right)\right]+\alpha_{N / 2} \cos (\pi n) & N \text { 偶数 } \\ \alpha_{0}+\sum_{k=1}^{(N-1) / 2}\left[\alpha_{k} \cos \left(\frac{2 \pi}{N} k n\right)+\beta_{k} \sin \left(\frac{2 \pi}{N} k n\right)\right] & N \text { 奇数 }\end{cases}
$$


其中

$$
\alpha_{0}=a_{0}, \quad \alpha_{N / 2}=a_{N / 2}, \quad \alpha_{k}=2 \operatorname{Re} a_{k}, \quad \text { 以及 } \quad \beta_{k}=-2 \operatorname{Im} a_{k}
$$


这称为傅里叶级数的三角形式。注意，傅里叶级数的三角形式只涉及实数量，而指数形式涉及一些复数量。因此，在处理实值序列的傅里叶级数时，有时更倾向于使用三角形式。

如定理 10.12 所述，实值序列的傅里叶级数具有特殊结构。具体地，序列 $x$ 为实值当且仅当其傅里叶级数系数序列 $c$ 是共轭对称的（即对所有 $k$，$c_{k}=c_{-k}^{*}$）。根据复数的性质，可以证明

$$
c_{k}=c_{-k}^{*} \text { 对所有 } k
$$


等价于

$$
\left|c_{k}\right|=\left|c_{-k}\right| \text { 对所有 } k \quad \text { 且 } \quad \arg c_{k}=-\arg c_{-k} \text { 对所有 } k
$$


（即 $\left|c_{k}\right|$ 是偶函数，$\arg c_{k}$ 是奇函数）。注意，$x$ 为实值并不必然意味着 $c$ 为实值。

事实证明，与实值序列对应的傅里叶级数系数序列具有许多其他特殊性质，如下定理所示。

定理 10.13（实值序列的傅里叶级数）。设 $x$ 为实值的 $N$ 周期序列，其对应的傅里叶级数系数序列为 $c$。则关于单周期 $k \in [0..N-1]$ 的 $c_{k}$ 可作如下断言：

1. 对 $k \in [1..N-1]$，有 $c_{k}=c_{N-k}^{*}$；
2. 在 $k \in [0..N-1]$ 的 $N$ 个系数 $c_{k}$ 中，只有 $\left\lfloor\frac{N}{2}\right\rfloor+1$ 个系数是独立的；例如，$k \in \left[0..\left\lfloor\frac{N}{2}\right\rfloor\right]$ 的 $c_{k}$ 完全决定了 $k \in [0..N-1]$ 的所有 $c_{k}$；
3. $c_{0}$ 为实数；
4. 若 $N$ 为偶数，则 $c_{N/2}$ 为实数。

证明。由定理 10.12，可得

$$
\begin{equation*}
c_{k}=c_{-k}^{*} \quad \text { 对所有 } k \in \mathbb{Z} \tag{10.10}
\end{equation*}
$$


由于 $c$ 是 $N$ 周期的，有 $c_{-k}=c_{N-k}$，因此可将上式改写为

$$
\begin{equation*}
c_{k}=c_{N-k}^{*} \quad \text { 对所有 } k \in \mathbb{Z} \tag{10.11}
\end{equation*}
$$


这证明了定理的断言 1。

将 (10.10) 在 $k=0$ 处求值，得到

$$
c_{0}=c_{0}^{*}
$$


因此，$c_{0}$ 必为实数。这证明了定理的断言 3。

将 (10.11) 在 $k=N/2$ 处求值，其中 $N/2 \in \mathbb{Z}$，得到

$$
\begin{aligned}
c_{N / 2} & =c_{N-N / 2}^{*} \\
& =c_{N / 2}^{*}
\end{aligned}
$$


因此，$c_{N/2}$ 必为实数。这证明了定理的断言 4。

将 (10.11) 在 $k \in \left[\left\lfloor\frac{N}{2}\right\rfloor+1 .. N-1\right]$ 处求值，有

$$
\begin{aligned}
c_{\lfloor N / 2\rfloor+1} & =c_{N-(\lfloor N / 2\rfloor+1)}^{*}=c_{N-\lfloor N / 2\rfloor-1}^{*}=c_{N+\lceil-N / 2\rceil-1}^{*}=c_{\lceil N-1-N / 2\rceil}^{*} \\
& =c_{\lceil N / 2-1\rceil}^{*}=c_{\lceil N / 2\rceil-1}^{*}=c_{\lfloor(N-1) / 2\rfloor+1-1}^{*} \\
& =c_{\lfloor(N-1) / 2\rfloor}^{*} \\
& \vdots \\
c_{N-3} & =c_{N-(N-3)}^{*} \\
& =c_{3}^{*} \\
c_{N-2} & =c_{N-(N-2)}^{*} \\
& =c_{2}^{*}, \quad \text { 且 } \\
c_{N-1} & =c_{N-(N-1)}^{*} \\
& =c_{1}^{*}
\end{aligned}
$$


（注意，在上述对 $c_{\lfloor N / 2\rfloor+1}$ 的化简中，我们使用了第 3.5.10 节中介绍的向下取整与向上取整函数的性质。）因此，$k \in \left[\left\lfloor\frac{N}{2}\right\rfloor+1 .. N-1\right]$ 的 $c_{k}$ 可完全由 $k \in \left[0..\left\lfloor\frac{N-1}{2}\right\rfloor\right]$ 的 $c_{k}$ 决定。因此，在 $k \in [0..N-1]$ 的 $N$ 个系数中，只有 $\left\lfloor\frac{N}{2}\right\rfloor+1$ 个是独立的。这证明了定理的断言 2。

上述定理（即定理 10.13）表明，与实值序列对应的傅里叶级数系数序列 $c$ 具有高度冗余性。特别地，在单周期内，约一半的系数是冗余的。
## 10.6 离散傅里叶变换（DFT）

与离散时间傅里叶级数密切相关的是离散傅里叶变换（DFT）（不要与离散时间傅里叶变换混淆，后者将在第 11 章介绍）。DFT 本质上是（DT）傅里叶级数的一个稍作修改的定义，通常在离散时间傅里叶变换的背景下非常有用（将在后文讨论）。下面我们简要介绍 DFT。

考虑傅里叶级数的合成和分析公式：

$$
x(n)=\sum_{k=\langle N\rangle} c_{k} e^{j k(2 \pi / N) n} \quad \text { 和 } \quad c_{k}=\frac{1}{N} \sum_{n=\langle N\rangle} x(n) e^{-j(2 \pi / N) k n}
$$


现在定义序列 $a^{\prime}$ 为 $a_{k}^{\prime}=N a_{k}$。换句话说，$a^{\prime}$ 只是原傅里叶级数系数序列 $a$ 的归一化（即缩放）版本。将上述傅里叶级数的合成与分析公式用 $a^{\prime}$（而非 $a$）重写，并将求和范围设为 $[0..N-1]$，得到

$$
x(n)=\frac{1}{N} \sum_{k=0}^{N-1} a_{k}^{\prime} e^{j(2 \pi / N) k n} \quad \text { 和 } \quad a_{k}^{\prime}=\sum_{n=0}^{N-1} x(n) e^{-j(2 \pi / N) k n}
$$


由于 $x$ 和 $a^{\prime}$ 都是 $N$ 周期的，每个序列只需单周期内的 $N$ 个样本即可完全表征。如果仅考虑 $x$ 和 $a^{\prime}$ 在单周期内的行为，可得到如下公式：

$$
\begin{aligned}
x(n) & =\frac{1}{N} \sum_{k=0}^{N-1} a_{k}^{\prime} e^{j(2 \pi / N) k n} \quad \text { 对 } n \in [0..N-1] \\
a_{k}^{\prime} & =\sum_{n=0}^{N-1} x(n) e^{-j(2 \pi / N) k n} \quad \text { 对 } k \in [0..N-1]
\end{aligned}
$$


事实上，上述两条公式定义了所谓的离散傅里叶变换（DFT）。

序列 $x$ 的离散傅里叶变换（DFT）$X$ 定义为：

$$
X(k)=\sum_{n=0}^{N-1} x(n) e^{-j(2 \pi / N) k n} \quad \text { 对 } k \in [0..N-1]
$$


上式称为 DFT 分析公式。序列 $X$ 的逆 DFT $x$ 给出为：

$$
x(n)=\frac{1}{N} \sum_{k=0}^{N-1} X(k) e^{j(2 \pi / N) k n} \quad \text { 对 } n \in [0..N-1]
$$


上式称为 DFT 合成公式。DFT 将长度为 $N$ 的有限序列映射为另一个长度为 $N$ 的有限序列。DFT 将在第 11 章中进一步详细讨论。

由于 DFT 本质上是 DT 傅里叶级数的归一化（即重新缩放）版本，DFT 与傅里叶级数的性质非常相似。唯一的差异（除了 DFT 中序列索引取模 $N$ 外）是部分性质的公式中出现了不同的缩放因子。DFT 的性质总结在表 10.2 中。由表中可见，DFT 的大多数性质与之前表 10.1 中列出的傅里叶级数性质类似。唯一显著的差异是对偶性、周期卷积、乘法性质以及 Parseval 关系。这些性质相关公式中的某些常数与傅里叶级数对应公式相比，相差一个因子 $N$。

表 10.2：离散傅里叶变换的性质

| 性质 | 时域 | 傅里叶域 |
| :--- | :--- | :--- |
| 线性 | $a_{1} x_{1}(n)+a_{2} x_{2}(n)$ | $a_{1} X_{1}(k)+a_{2} X_{2}(k)$ |
| 平移 | $x(n-n_{0})$ | $e^{-j k(2 \pi / N) n_{0}} X(k)$ |
| 调制 | $e^{j(2 \pi / N) k_{0} n} x(n)$ | $X(k-k_{0})$ |
| 反演 | $x(-n)$ | $X(-k)$ |
| 共轭 | $x^{*}(n)$ | $X^{*}(-k)$ |
| 对偶性 | $X(n)$ | $N x(-k)$ |
| 周期卷积 | $x_{1} \circledast x_{2}(n)$ | $X_{1}(k) X_{2}(k)$ |
| 乘法 | $x_{1}(n) x_{2}(n)$ | $\frac{1}{N} X_{1} \circledast X_{2}(k)$ |

| 性质 |  |
| :--- | :--- |
| Parseval 关系 | $\sum_{n=0}^{N-1}|x(n)|^{2}=\frac{1}{N} \sum_{k=0}^{N-1}|X(k)|^{2}$ |
| 偶对称 | $x$ 为偶 $\Leftrightarrow X$ 为偶 |
| 奇对称 | $x$ 为奇 $\Leftrightarrow X$ 为奇 |
| 实值 / 共轭对称 | $x$ 为实 $\Leftrightarrow X$ 为共轭对称 |

## 10.7 傅里叶级数与频谱

傅里叶级数将一个（周期）序列表示为一组谐波相关的复正弦函数的叠加。从这个意义上讲，傅里叶级数捕捉了序列的频率内容信息。每一个复正弦函数对应一个特定频率（该频率是基频的某个整数倍）。因此，这些系数表明序列中的信息/能量主要集中在哪些频率上。例如，如果只有低阶谐波的傅里叶级数系数具有较大幅值，则序列主要对应低频部分。另一方面，如果函数在高阶谐波上有许多大幅度系数，则序列在高频部分具有相当多的信息/能量。通过这种方式，傅里叶级数表示提供了一种衡量序列频率内容的方法。序列在不同频率上的能量/信息分布被称为序列的频谱。

为了更深入理解傅里叶级数系数 $c_{k}$ 在序列 $x$ 频谱中的作用，将傅里叶级数的 $c_{k}$ 表示为极坐标形式是很有帮助的：

$$
\begin{aligned}
x(n) & =\sum_{k=\langle N\rangle} c_{k} e^{j(2 \pi / N) k n} \\
& =\sum_{k=\langle N\rangle} |c_{k}| e^{j \arg c_{k}} e^{j(2 \pi / N) k n} \\
& =\sum_{k=\langle N\rangle} |c_{k}| e^{j\left((2 \pi / N) k n + \arg c_{k}\right)}
\end{aligned}
$$


显然（从最后一行可以看出），求和中的第 $k$ 项对应一个频率为 $\frac{2 \pi}{N} k$ 的复正弦函数，其幅度被缩放为 $|c_{k}|$，时间偏移取决于 $\arg c_{k}$。对于给定的 $k$，$|c_{k}|$ 越大，对应复正弦函数 $e^{j(2 \pi / N) k n}$ 的幅度越大，因此第 $k$ 项（对应频率 $\frac{2 \pi}{N} k$）对总和的贡献越大。因此，$|c_{k}|$ 可用来量化序列 $x$ 在频率 $\frac{2 \pi}{N} k$ 上的信息量。arg $c_{k}$ 也很重要，因为它影响傅里叶级数中不同复正弦函数在叠加前的时间偏移关系。

为了形式化频谱的概念，序列 $x$ 的频谱本质上就是其对应的傅里叶级数系数 $c_{k}$。由于傅里叶级数的极坐标形式解释，我们通常关注 $|c_{k}|$ 和 $\arg c_{k}$。在术语上，$|c_{k}|$ 称为 $x$ 的幅度谱，$\arg c_{k}$ 称为 $x$ 的相位谱。

由于信息的图形表示通常有助于可视化，我们通常希望绘制序列的频谱。三维图通常比二维图更难生成（尤其是手工绘制）并且更难准确解释，因此我们通常仅使用二维图形表示频谱。如果频谱是纯实数或纯虚数，则通常在单一坐标轴对上绘制频谱。然而，频谱通常是复数（既非纯实也非纯虚），此时我们采用极坐标形式绘制频谱，使用两张图：一张表示幅度谱，一张表示相位谱。绘制频谱（包括幅度谱和相位谱）时，横轴标注的是傅里叶级数系数对应的频率，而不是系数索引本身。之所以使用频率作为横轴，是因为频率具有直接的物理意义（即振荡速率），而傅里叶级数系数索引只是一个没有直接物理意义的整数。

由于傅里叶级数仅在基频的整数倍处具有频率分量，因此我们只在这些特定频率上有值可绘制。换句话说，频谱在自变量（即频率）上是离散的。出于这个原因，我们使用杆状图（stem graph）绘制此类函数。由于图形的一般外观（即在不同频率处有若干垂直线），我们将此类频谱称为线谱。

回想一下，对于实序列 $x$，傅里叶级数系数序列 $c$ 是共轭对称的（即对所有 $k$，$c_{k}=c_{-k}^{*}$）。这意味着 $|c_{k}|=|c_{-k}|$ 且 $\arg c_{k}=-\arg c_{-k}$。由于 $|c_{k}|=|c_{-k}|$，实序列的幅度谱总是偶函数。同样，由于 $\arg c_{k}=-\arg c_{-k}$，实序列的相位谱总是奇函数。

例 10.8. 示例 10.4 中的 8 周期序列 $x$ 的傅里叶级数系数序列 $c$ 为：

$$
c_{k}=\frac{\sin \left(\frac{\pi}{2} k\right)}{8 e^{j(3 \pi / 8) k} \sin \left(\frac{\pi}{8} k\right)}
$$


求 $x$ 的幅度谱和相位谱，并确定序列 $x$ 在 $(-\pi, \pi]$ 区间内在哪个频率（或哪些频率）上包含最多信息。

**解**。首先，计算 $x$ 的幅度谱，即 $\left|c_{k}\right|$。取 $c_{k}$ 的幅值，得到：

$$
\begin{aligned}
\left|c_{k}\right| & =\left|\frac{\sin \left(\frac{\pi}{2} k\right)}{8 e^{j(3 \pi / 8) k} \sin \left(\frac{\pi}{8} k\right)}\right| \\
& =\frac{\left|\sin \left(\frac{\pi}{2} k\right)\right|}{\left|8 e^{j(3 \pi / 8) k} \sin \left(\frac{\pi}{8} k\right)\right|} \\
& =\frac{\left|\sin \left(\frac{\pi}{2} k\right)\right|}{8\left|e^{j(3 \pi / 8) k}\right|\left|\sin \left(\frac{\pi}{8} k\right)\right|} \\
& =\frac{\left|\sin \left(\frac{\pi}{2} k\right)\right|}{8\left|\sin \left(\frac{\pi}{8} k\right)\right|}
\end{aligned}
$$


接着，计算 $x$ 的相位谱，即 $\arg c_{k}$。取 $c_{k}$ 的相位，得到：

$$
\begin{aligned}
\arg c_k & =\arg \left(\frac{\sin \left(\frac{\pi}{2} k\right)}{8 e^{j(3 \pi / 8) k} \sin \left(\frac{\pi}{8} k\right)}\right) \\
& =\arg \left[\sin \left(\frac{\pi}{2} k\right)\right]-\arg \left[8 e^{j(3 \pi / 8) k} \sin \left(\frac{\pi}{8} k\right)\right] \\
& =\arg \left[\sin \left(\frac{\pi}{2} k\right)\right]-\left(\arg 8 e^{j(3 \pi / 8) k}+\arg \left[\sin \left(\frac{\pi}{8} k\right)\right]\right) \\
& =\arg \left[\sin \left(\frac{\pi}{2} k\right)\right]-\left(\frac{3 \pi}{8} k+\arg \left[\sin \left(\frac{\pi}{8} k\right)\right]\right) \\
& =\arg \left[\sin \left(\frac{\pi}{2} k\right)\right]-\arg \left[\sin \left(\frac{\pi}{8} k\right)\right]-\frac{3 \pi}{8} k .
\end{aligned}
$$


$x$ 的幅度谱和相位谱分别绘制在图 10.1(a) 和 (b) 中。注意，幅度谱是偶对称的，而相位谱是奇对称的。这与我们预期一致，因为 $x$ 是实序列。在 $(-\pi, \pi]$ 区间内，序列 $x$ 在频率为 0 时包含最多信息，因为此时傅里叶级数系数的幅值最大（即 $\frac{1}{2}$）。

示例 10.9. 在示例 10.2 中，我们看到 $N$ 周期序列

$$
x(n)=\sum_{\ell=-\infty}^{\infty} \delta(n-N \ell)
$$


的傅里叶级数系数序列为：

$$
c_{k}=\frac{1}{N}
$$


当 $N=10$ 时，求 $x$ 的幅度谱和相位谱，并绘制 $x$ 的频谱。

**解**。$x$ 的幅度谱和相位谱分别由 $c_{k}$ 的幅值和相位给出。取 $c_{k}$ 的幅值，得到：

$$
\left|c_{k}\right|=\left|\frac{1}{10}\right|=\frac{1}{10}.
$$


同理，取 $c_{k}$ 的相位，得到：

$$
\arg c_{k}=\arg \frac{1}{10}=0.
$$


由于所有 $c_{k}$ 都为实数，可以直接使用单个二维图绘制 $x$ 的频谱（而无需分别绘制幅度谱和相位谱）。$x$ 的频谱绘制在图 10.2 中。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-101.jpg?height=1109&width=804&top_left_y=421&top_left_x=715){width="400"}

图 10.1：序列 $x$ 的频谱。（a）幅度谱；（b）相位谱。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-101.jpg?height=374&width=904&top_left_y=1888&top_left_x=661){width="400"}

图 10.2：序列 $x$ 的频谱。
## 10.8 傅里叶级数与 LTI 系统

根据前面的定理 9.12，我们知道复指数序列是 LTI 系统的本征序列。由于复正弦是复指数的特例，因此复正弦也是 LTI 系统的本征序列。具体地，我们有如下结论。

**推论 10.1**. 对于任意 LTI 系统 $\mathcal{H}$，其冲激响应为 $h$，以及形式为 $x(n)=e^{j \Omega n}$ 的序列（其中 $\Omega$ 为任意实常数，即 $x$ 是任意复正弦），有：

$$
\mathcal{H} x(n)=H(\Omega) e^{j \Omega n},
$$


其中

$$
\begin{equation*}
H(\Omega)=\sum_{n=-\infty}^{\infty} h(n) e^{-j \Omega n} \tag{10.12}
\end{equation*}
$$


也就是说，$x$ 是 $\mathcal{H}$ 的本征序列，对应的本征值为 $H(\Omega)$。

上述结论（即推论 10.1）只是定理 9.12 在 $z=e^{j \Omega}$ 情况下的特例。需要注意的是，为了获得更方便的符号表示，推论 10.1 中的函数 $H$ 与定理 9.12 中的函数 $H$ 定义略有不同。具体地，令 $H_{\mathrm{F}}$ 和 $H_{\mathrm{Z}}$ 分别表示出现在推论 10.1 和定理 9.12 中的函数 $H$，则它们之间的关系为：

$$
H_{\mathrm{F}}(\Omega) = H_{\mathrm{Z}}\left(e^{j \Omega}\right).
$$


在术语上，公式 (10.12) 中的函数 $H$ 被称为系统 $\mathcal{H}$ 的**频率响应**。频率响应完全刻画了 LTI 系统的行为。因此，在分析和处理 LTI 系统时，频率响应是非常有用的。实际上，(10.12) 是基础性的，因为它定义了所谓的（离散时间）傅里叶变换（DT Fourier transform）。我们将在第 11 章对（DT）傅里叶变换进行深入研究。

现在让我们考虑本征序列的一个应用。由于卷积在许多情况下处理起来非常繁琐，我们可以利用本征序列，在某些情况下避免直接处理卷积。假设我们有一个 $N$ 周期序列 $x$，其傅里叶级数表示为：

$$
x(n)=\sum_{k=\langle N\rangle} c_{k} e^{j(2 \pi / N) k n}
$$


利用公式 (10.12) 和叠加性，我们可以确定系统对输入 $x$ 的响应 $y$ 如下：

$$
\begin{aligned}
y(n) & =\mathcal{H} x(n) \\
& =\mathcal{H}\left\{\sum_{k=\langle N\rangle} c_{k} e^{j(2 \pi / N) k n}\right\}(n) \\
& =\sum_{k=\langle N\rangle} \mathcal{H}\left\{c_{k} e^{j(2 \pi / N) k n}\right\}(n) \\
& =\sum_{k=\langle N\rangle} c_{k} \mathcal{H}\left\{e^{j(2 \pi / N) k n}\right\}(n) \\
& =\sum_{k=\langle N\rangle} c_{k} H\left(\frac{2 \pi}{N} k\right) e^{j(2 \pi / N) k n} .
\end{aligned}
$$


因此，我们可以将 LTI 系统看作作用于傅里叶级数各个系数的实体。具体来说，系统通过将每个傅里叶级数系数与该系数对应频率下的频率响应函数值相乘来形成输出。换句话说，如果

$$
x(n) \stackrel{\mathrm{DTFS}}{\longleftrightarrow} c_{k}
$$


那么

$$
y(n) \stackrel{\mathrm{DTFS}}{\longleftrightarrow} H\left(\frac{2 \pi}{N} k\right) c_{k} .
$$


**示例 10.10**. 一个 LTI 系统的冲激响应为

$$
h(n)=\left(\frac{1}{2}\right)^{n+1} u(n)
$$


求该系统对输入序列

$$
x(n)=1+\frac{1}{2} \cos \left(\frac{\pi}{2} n\right)+\frac{1}{8} \cos (\pi n)
$$


的响应 $y$。

**解**. 首先，求系统的频率响应 $H$。回忆公式 (10.12)：

$$
H(\Omega)=\sum_{n=-\infty}^{\infty} h(n) e^{-j \Omega n}
$$


将 $h(n)$ 代入，得到：

$$
\begin{aligned}
H(\Omega) & =\sum_{n=-\infty}^{\infty}\left(\frac{1}{2}\right)^{n+1} u(n) e^{-j \Omega n} \\
& =\sum_{n=0}^{\infty}\left(\frac{1}{2}\right)^{n+1} e^{-j \Omega n} \\
& =\sum_{n=0}^{\infty} \frac{1}{2}\left(\frac{1}{2} e^{-j \Omega}\right)^{n}
\end{aligned}
$$


利用无限等比数列求和公式，得到：

$$
\begin{aligned}
H(\Omega) & =\frac{1}{2}\left(\frac{1}{1-\frac{1}{2} e^{-j \Omega}}\right) \\
& =\frac{1}{2-e^{-j \Omega}}
\end{aligned}
$$


接着，求 $x$ 的傅里叶级数表示。$x$ 的基本周期为 $N=\operatorname{lcm}(4,2)=4$。将 $x$ 改写为：

$$
\begin{aligned}
x(n) & =1+\frac{1}{2}\left[\frac{1}{2}\left(e^{j(\pi / 2) n}+e^{-j(\pi / 2) n}\right)\right]+\frac{1}{8}\left[\frac{1}{2}\left(e^{j \pi n}+e^{-j \pi n}\right)\right] \\
& =1+\frac{1}{4} e^{j(\pi / 2) n}+\frac{1}{4} e^{-j(\pi / 2) n}+\frac{1}{8} e^{j \pi n} \\
& =\frac{1}{4} e^{-j(\pi / 2) n}+1+\frac{1}{4} e^{j(\pi / 2) n}+\frac{1}{8} e^{j \pi n} \\
& =\frac{1}{4} e^{j(2 \pi / 4)(-1) n}+1+\frac{1}{4} e^{j(2 \pi / 4)(1) n}+\frac{1}{8} e^{j(2 \pi / 4)(2) n}
\end{aligned}
$$


因此，$x$ 的傅里叶级数为：

$$
x(n)=\sum_{k=-1}^{2} a_{k} e^{j(2 \pi / 4) k n}
$$


其中：

$$
a_{k}= \begin{cases}\frac{1}{4} & k=-1 \\ 1 & k=0 \\ \frac{1}{4} & k=1 \\ \frac{1}{8} & k=2\end{cases}
$$


输入序列 $x$ 的幅度谱绘制在图 10.3 中，并叠加了系统的幅度响应 $|H(\cdot)|$。

根据 LTI 系统的特征序列性质，我们有

$$
y(n)=\sum_{k=-1}^{2} b_{k} e^{j(2 \pi / 4) k n} \quad \text { 其中 } \quad b_{k}=a_{k} H\left(\frac{2 \pi}{4} k\right)
$$


计算各 $b_{k}$ 得：

$$
\begin{aligned}
b_{-1} & =a_{-1} H\left(\frac{2 \pi}{4}[-1]\right)=a_{-1} H\left(-\frac{\pi}{2}\right) \\
& =\left(\frac{1}{4}\right)\left(\frac{1}{2-e^{-j(-\pi / 2)}}\right)=\left(\frac{1}{4}\right)\left(\frac{1}{2-j}\right)=\frac{1}{8-4 j}=\left(4 \sqrt{5} e^{-j \pi / 4}\right)^{-1} \\
& =\frac{1}{4 \sqrt{5}} e^{j \pi / 4}, \\
b_0 & =a_0 H\left(\frac{2 \pi}{4}[0]\right)=a_0 H(0) \\
& =(1)\left(\frac{1}{2-e^{-j 0}}\right) \\
& =1, \\
b_1 & =a_1 H\left(\frac{2 \pi}{4}[1]\right)=a_1 H\left(\frac{\pi}{2}\right) \\
& =\left(\frac{1}{4}\right)\left(\frac{1}{2-e^{-j \pi / 2}}\right)=\left(\frac{1}{4}\right)\left(\frac{1}{2+j}\right)=\frac{1}{8+4 j}=\left(4 \sqrt{5} e^{j \pi / 4}\right)^{-1} \\
& =\frac{1}{4 \sqrt{5}} e^{-j \pi / 4}, \quad \text { and } \\
b_2 & =a_2 H\left(\frac{2 \pi}{4}[2]\right)=a_2 H(\pi) \\
& =\left(\frac{1}{8}\right)\left(\frac{1}{2-e^{-j \pi}}\right)=\left(\frac{1}{8}\right)\left(\frac{1}{2+1}\right) \\
& =\frac{1}{24}
\end{aligned}
$$


于是输出 $y(n)$ 为：

$$
\begin{aligned}
y(n) & =\sum_{k=-1}^2 b_k e^{j(2 \pi / 4) k n} \\
& =b_{-1} e^{j(2 \pi / 4)(-1) n}+b_0 e^{j(2 \pi / 4)(0) n}+b_1 e^{j(2 \pi / 4)(1) n}+b_2 e^{j(2 \pi / 4)(2) n} \\
& =\frac{1}{4 \sqrt{5}} e^{j \pi / 4} e^{-j(\pi / 2) n}+1+\frac{1}{4 \sqrt{5}} e^{-j \pi / 4} e^{j(\pi / 2) n}+\frac{1}{24} e^{j \pi n} \\
& =1+\frac{1}{4 \sqrt{5}}\left[e^{-j \pi / 4} e^{j(\pi / 2) n}+e^{j \pi / 4} e^{j(-\pi / 2) n}\right]+\frac{1}{24} \cos (\pi n) \\
& =1+\frac{1}{4 \sqrt{5}}\left[e^{j[(\pi / 2) n-\pi / 4]}+e^{-j[(\pi / 2) n-\pi / 4]}\right]+\frac{1}{24} \cos (\pi n) \\
& =1+\frac{1}{4 \sqrt{5}} \cos \left(\frac{\pi}{2} n-\frac{\pi}{4}\right)+\frac{1}{24} \cos (\pi n)
\end{aligned}
$$


输出序列 $y$ 的幅度谱如图 10.4 所示。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-105.jpg?height=477&width=528&top_left_y=823&top_left_x=848){width="400"}

**图 10.3:** 输入序列 $x$ 的幅度谱

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-105.jpg?height=455&width=528&top_left_y=1412&top_left_x=848){width="400"}

**图 10.4:** 输出序列 $y$ 的幅度谱

此外，$H(\Omega)$ 可写成笛卡尔形式：

$$
\begin{aligned}
H(\Omega) & =\frac{1}{2}\left(\frac{1}{1-\frac{1}{2}[\cos (-\Omega)+j \sin (-\Omega)]}\right) \\
& =\frac{1}{2}\left(\frac{1}{1-\frac{1}{2} \cos \Omega+\frac{j}{2} \sin \Omega}\right) \\
& =\frac{1}{2}\left(\frac{1-\frac{1}{2} \cos \Omega-\frac{j}{2} \sin \Omega}{\left(1-\frac{1}{2} \cos \Omega\right)^2+\left(-\frac{1}{2} \sin \Omega\right)^2}\right) \\
& =\frac{1}{2}\left(\frac{1-\frac{1}{2} \cos \Omega-\frac{j}{2} \sin \Omega}{1-\cos \Omega+\frac{1}{4} \cos ^2 \Omega+\frac{1}{4} \sin ^2 \Omega}\right) \\
& =\frac{1}{2}\left(\frac{1-\frac{1}{2} \cos \Omega-\frac{j}{2} \sin \Omega}{\frac{5}{4}-\cos \Omega}\right) \\
& =\frac{2-\cos \Omega-j \sin \Omega}{5-4 \cos \Omega} \\
& =\frac{\cos \Omega-2}{4 \cos \Omega-5}+j \frac{\sin \Omega}{4 \cos \Omega-5}
\end{aligned}
$$


该形式用于生成图 10.3 中 $|H(\cdot)|$ 的绘图。

---

**示例 10.11.** 考虑频率响应为

$$
H(\Omega)=e^{-j \Omega}
$$


的 LTI 系统。求其对输入

$$
x(n)=\frac{1}{2} \cos \left(\frac{2 \pi}{5} n\right)
$$


的响应。

**解.** 首先，$x$ 的周期为 5，重写为复指数形式：

$$
x(n)=\frac{1}{4}\left(e^{j(2 \pi /5)n}+e^{-j(2 \pi /5)n}\right)
$$


傅里叶级数为：

$$
\begin{aligned}
&x(n)=\sum_{k=-2}^2 c_k e^{j(2 \pi / 5) k n},\\
&c_k= \begin{cases}\frac{1}{4} & k \in\{-1,1\} \\ 0 & k \in\{-2,0,2\} .\end{cases}
\end{aligned}
$$


利用特征序列性质，输出为：

$$
\begin{aligned}
y(n) & =\sum_{k=-2}^2 c_k H\left(\frac{2 \pi}{5} k\right) e^{j(2 \pi / 5) k n} \\
& =c_{-1} H\left(-\frac{2 \pi}{5}\right) e^{-j(2 \pi / 5) n}+c_1 H\left(\frac{2 \pi}{5}\right) e^{j(2 \pi / 5) n} \\
& =\frac{1}{4} H\left(-\frac{2 \pi}{5}\right) e^{-j(2 \pi / 5) n}+\frac{1}{4} H\left(\frac{2 \pi}{5}\right) e^{j(2 \pi / 5) n} \\
& =\frac{1}{4} e^{j(2 \pi / 5)} e^{-j(2 \pi / 5) n}+\frac{1}{4} e^{-j(2 \pi / 5)} e^{j(2 \pi / 5) n} \\
& =\frac{1}{4}\left[e^{-j(2 \pi / 5)(n-1)}+e^{j(2 \pi / 5)(n-1)}\right] \\
& =\frac{1}{4}\left(2 \cos \left[\frac{2 \pi}{5}(n-1)\right]\right) \\
& =\frac{1}{2} \cos \left[\frac{2 \pi}{5}(n-1)\right] .
\end{aligned}
$$


可见 $y(n)=x(n-1)$，说明该 LTI 系统是一个理想单位延迟系统。
## 10.9 滤波

在某些应用中，我们希望改变序列频率分量的幅度或相位，或者可能完全消除某些频率分量。对序列频率分量进行修改的过程称为**滤波**，执行这种处理的系统称为**滤波器**。

为简化讨论，我们这里仅考虑**线性时不变（LTI）滤波器**。如果一个滤波器是LTI的，则它完全由其频率响应所描述。由于序列的频谱是 $2 \pi$-周期的，我们只需考虑长度为 $2 \pi$ 的频率区间。通常，我们选择将该区间中心设在原点，即 $( -\pi, \pi]$。在该区间内，接近原点的频率称为低频，接近 $\pm \pi$ 的频率称为高频。

滤波器类型多种多样。**频率选择性滤波器**能够在通过某些频率分量时几乎不失真，同时显著衰减其他频率分量。几种基本的频率选择性滤波器包括：低通、高通和带通。

理想低通滤波器会消除所有幅值大于某个截止频率的频率分量，同时保持其余频率分量不变。这样的滤波器具有如下频率响应：

$$
H(\Omega)= \begin{cases}1 & |\Omega| \leq \Omega_{c} \\ 0 & \Omega_{c}<|\Omega| \leq \pi\end{cases}
$$


其中 $\Omega_{c}$ 为截止频率。该频率响应的图示如图 10.5(a) 所示。

理想高通滤波器会消除所有幅值小于某个截止频率的频率分量，同时保持其余频率分量不变。这样的滤波器具有如下频率响应：

$$
H(\Omega)= \begin{cases}1 & \Omega_{c}<|\Omega| \leq \pi \\ 0 & |\Omega| \leq \Omega_{c}\end{cases}
$$


其中 $\Omega_{c}$ 为截止频率。该频率响应的图示如图 10.5(b) 所示。

理想带通滤波器会消除所有幅值不在特定范围内的频率分量，同时保持其余频率分量不变。这样的滤波器具有如下频率响应：

$$
H(\Omega)= \begin{cases}1 & \Omega_{c 1} \leq|\Omega| \leq \Omega_{c 2} \\ 0 & |\Omega|<\Omega_{c 1} \text { 或 } \Omega_{c 2}<|\Omega|<\pi\end{cases}
$$


其中通带范围为 $\Omega_{c 1}$ 和 $\Omega_{c 2}$。该频率响应的图示如图 10.5(c) 所示。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-108.jpg?height=1200&width=1071&top_left_y=748&top_left_x=461){width="400"}

图 10.5：（a）理想低通滤波器，（b）理想高通滤波器，（c）理想带通滤波器的频率响应。

**例 10.12（低通滤波）**  
考虑一个输入为 $x$、输出为 $y$、频率响应为 $H$ 的 LTI 系统，其中

$$
H(\Omega)= \begin{cases}1 & |\Omega| \leq \frac{\pi}{2} \\ 0 & \frac{\pi}{2}<|\Omega| \leq \pi\end{cases}
$$


假设输入 $x$ 为周期序列

$$
x(n)=1+\cos \left(\frac{\pi}{4} n\right)+\frac{1}{2} \cos \left(\frac{3 \pi}{4} n\right)+\frac{1}{5} \cos (\pi n)
$$


(a) 求 $x$ 的傅里叶级数表示。  
(b) 利用此表示求系统对输入 $x$ 的响应 $y$。  
(c) 绘制 $x$ 和 $y$ 的频谱。

**解**  
(a) 首先求 $x$ 的傅里叶级数表示。$x$ 的基本周期 $N$ 为：

$$
N=\operatorname{lcm}\{8,8,2\}=\operatorname{lcm}\left\{2^{3}, 2^{3}, 2^{1}\right\}=2^{3}=8
$$


利用欧拉公式，将 $x$ 重写为：

$$
\begin{aligned}
x(n) & =1+\cos \left(\frac{\pi}{4} n\right)+\frac{1}{2} \cos \left(\frac{3 \pi}{4} n\right)+\frac{1}{5} \cos (\pi n) \\
& =1+\left[\frac{1}{2}\left(e^{j(\pi / 4) n}+e^{-j(\pi / 4) n}\right)\right]+\frac{1}{2}\left[\frac{1}{2}\left(e^{j(3 \pi / 4) n}+e^{-j(3 \pi / 4) n}\right)\right]+\frac{1}{5} e^{j \pi n} \\
& =1+\frac{1}{2}\left(e^{j(\pi / 4) n}+e^{-j(\pi / 4) n}\right)+\frac{1}{4}\left(e^{j(3 \pi / 4) n}+e^{-j(3 \pi / 4) n}\right)+\frac{1}{5} e^{j \pi n} \\
& =\frac{1}{4} e^{-j(3 \pi / 4) n}+\frac{1}{2} e^{-j(\pi / 4) n}+1+\frac{1}{2} e^{j(\pi / 4) n}+\frac{1}{4} e^{j(3 \pi / 4) n}+\frac{1}{5} e^{j \pi n} \\
& =\frac{1}{4} e^{j(2 \pi / 8)(-3) n}+\frac{1}{2} e^{j(2 \pi / 8)(-1) n}+1+\frac{1}{2} e^{j(2 \pi / 8)(1) n}+\frac{1}{4} e^{j(2 \pi / 8)(3) n}+\frac{1}{5} e^{j(2 \pi / 8)(4) n}
\end{aligned}
$$


因此，$x$ 的傅里叶级数为：

$$
x(n)=\sum_{k=-3}^{4} a_{k} e^{j(2 \pi / 8) k n}
$$


其中：

$$
a_{k}= \begin{cases}\frac{1}{4} & k \in\{-3,3\} \\ \frac{1}{2} & k \in\{-1,1\} \\ 1 & k=0 \\ \frac{1}{5} & k=4 \\ 0 & k \in\{-2,2\}\end{cases}
$$


(b) 由于系统为LTI，输出 $y$ 的形式为：

$$
y(n)=\sum_{k=-\infty}^{\infty} b_{k} e^{j(2 \pi / 8) k n}
$$


其中：

$$
b_{k}=a_{k} H\left(\frac{2 \pi}{8} k\right)
$$


对于每个非零的 $a_{k}$，计算对应的 $b_{k}$：

$$
\begin{aligned}
b_{0} & =a_{0} H\left[\left(\frac{\pi}{4}\right)(0)\right]=1(1)=1 \\
b_{1} & =a_{1} H\left[\left(\frac{\pi}{4}\right)(1)\right]=\left(\frac{1}{2}\right)(1)=\frac{1}{2} \\
b_{-1} & =a_{-1} H\left[\left(\frac{\pi}{4}\right)(-1)\right]=\left(\frac{1}{2}\right)(1)=\frac{1}{2} \\
b_{3} & =a_{3} H\left[\left(\frac{\pi}{4}\right)(3)\right]=\left(\frac{1}{4}\right)(0)=0 \\
b_{-3} & =a_{-3} H\left[\left(\frac{\pi}{4}\right)(-3)\right]=\left(\frac{1}{4}\right)(0)=0 \\
b_{4} & =a_{4} H\left[\left(\frac{\pi}{4}\right)(4)\right]=\left(\frac{1}{5}\right)(0)=0
\end{aligned}
$$


因此：

$$
b_{k}= \begin{cases}1 & k=0 \\ \frac{1}{2} & k \in\{-1,1\} \\ 0 & k \in\{-3,-2,2,3,4\}\end{cases}
$$


(c) 最后，将 $x$ 和 $y$ 的频谱绘制在图 10.6(a) 和 (b) 中。为了说明，将频率响应 $H$ 与 $x$ 的频谱叠加显示。

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-111.jpg?height=1139&width=787&top_left_y=780&top_left_x=721){width="400"}

图 10.6：（a）输入序列 $x$ 的频谱，（b）输出序列 $y$ 的频谱。
## 10.10 练习

### 10.10.1 无答案练习

10.1 求下列每个序列 $x$ 的傅里叶级数表示。  
(a) $x(n)=\left(\frac{1}{2}\right)^{n}$，$n \in[0 ..7]$，且 $x(n)=x(n+8)$；  
(b) $x(n)=n$，$n \in[-3 ..3]$，且 $x(n)=x(n+7)$；  
(c) $x(n)=1+\cos \left(\frac{2 \pi}{7} n\right)+\sin \left(\frac{4 \pi}{7} n-\frac{\pi}{6}\right)$；  
(d) $x(n)=\begin{cases}1 & n \in[-4 ..4] \\ 0 & n \in[-15 ..-5] \text{ 或 } [5 ..16]\end{cases}$，且 $x(n)=x(n+32)$。  

10.2 对下列图示的每个周期序列 $x$，求对应的傅里叶级数系数序列 $a$。每幅图中显示的样本数为周期的整数倍。如有必要，可使用傅里叶级数性质。[提示：对 (c) 部分，可使用练习 10.101 的结果。]  

![](https://cdn.mathpix.com/cropped/2025_09_15_bea866c53ced11a56081g-112.jpg?height=1276&width=1333&top_left_y=1223&top_left_x=413){width="400"}


![](https://cdn.mathpix.com/snip/images/gra3ImKWELDKeWCQoHXNoo0hGp3qHwgS8BTyCdSv4gY.original.fullsize.png){width="400"}


10.3 证明，对于具有傅里叶级数系数序列 $a$ 的复周期序列 $x$：  
(a) 当且仅当 $a$ 为偶数时，$x$ 为偶序列；  
(b) 当且仅当 $a$ 为奇数时，$x$ 为奇序列。  

10.4 设 $x$ 和 $y$ 为 $N$-周期序列，其傅里叶级数系数序列分别为 $a$ 和 $b$。对下列每个序列 $y$，求 $b$ 与 $a$ 的关系表达式：  
(a) $y(n)=x(n)-x(n-1)$；  
(b) $y(n)=x(n+1)-x(n-1)$。  

10.5 设 $x$ 为 31-周期序列，其傅里叶级数系数序列 $a$ 为  

$$
a_{k}=k^{2}\left(2^{k}+2^{-k}\right) e^{j(2 \pi / 31) k}, \quad k \in[-15 .. 15]
$$


利用傅里叶级数性质，判断下列陈述是否正确：  
(a) $x$ 是实序列；  
(b) $x$ 是偶序列；  
(c) 序列 $y(n)=x(n-1)$ 是偶序列。  

10.6 设 $x$ 为 $N$-周期序列，$N$ 为偶数，其傅里叶级数系数序列为 $c$。  
(a) 证明：若 $c_{k}=0$ 对所有偶整数 $k$ 成立，则 $x(n)=-x\left(n-\frac{N}{2}\right)$ 对所有整数 $n$ 成立；  
(b) 证明：若 $x(n)=-x\left(n-\frac{N}{2}\right)$ 对所有整数 $n$ 成立，则 $c_{k}=0$ 对所有偶整数 $k$ 成立。  

10.7 设 $x$ 和 $y$ 为 $N$-周期序列，其傅里叶级数系数序列分别为 $a$ 和 $b$。对下列每个序列 $y$，求 $b$ 与 $a$ 的关系：  
(a) $y(n)=\operatorname{Even}\{x\}(n)$；  
(b) $y(n)=\operatorname{Re}\{x\}(n)$。  

10.8 求下列每个序列 $x$ 在频率区间 $[-\pi, \pi]$ 的幅度谱和相位谱，并绘图：  
(a) $x(n)=1+\sin \left(\frac{\pi}{5} n+\frac{\pi}{3}\right)$；  
(b) $x(n)=\frac{3}{4}+\frac{1}{2} \cos \left(\frac{\pi}{4} n+\frac{\pi}{3}\right)+\frac{1}{4} \sin \left(\frac{\pi}{2} n\right)+\frac{1}{8} \cos (\pi n)$；  
(c) $x(n)=\begin{cases}-1 & n \in[-3 ..0] \\ 1 & n \in[1 ..4]\end{cases}$，且 $x(n)=x(n+8)$。  

10.9 考虑一个频率响应为  

$$
H(\Omega)= \begin{cases}1 & |\Omega| \in\left[-\frac{\pi}{2}, \frac{\pi}{2}\right] \\ 0 & |\Omega| \in\left(\frac{\pi}{2}, \pi\right]\end{cases}
$$


的 LTI 系统。求系统对输入  

$$
x(n)=1+\frac{1}{3} \cos \left(\frac{4 \pi}{9} n\right)+\frac{1}{6} \cos \left(\frac{6 \pi}{9} n\right)
$$


的响应 $y$。
10.10 一个 LTI 系统的冲激响应为  

$$
h(n)=\left(\frac{1}{2}\right)^{n+1} u(n)
$$


求该系统对输入  

$$
x(n)=1+\cos \left(\frac{\pi}{4} n\right)+\sin \left(\frac{\pi}{2} n\right)
$$


的响应 $y$。

### 10.10.2 带答案的练习

10.101 求一个 $N$-周期方波序列 $x$ 的傅里叶级数系数序列 $a$，其形式为  

$$
x(n)= \begin{cases}1 & n \in\left[N_{1} .. N_{2}\right] \\ 0 & n \in\left[N_{0} .. N_{1}-1\right] \cup\left[N_{2}+1 .. N_{0}+N-1\right],\end{cases}
$$


其中 $N_{0}$ 为整数，$N_{1}, N_{2} \in\left[N_{0} .. N_{0}+N-1\right]$ 且 $N_{1} \leq N_{2}$。（注意：此练习与练习 A.10 密切相关。）

简答：  

$$
a_{k}= \begin{cases}\frac{1}{N} e^{-j \pi\left(N_{1}+N_{2}\right) k / N} \left[\frac{\sin \left[\pi\left(N_{2}-N_{1}+1\right) k / N\right]}{\sin (\pi k / N)}\right] & \frac{k}{N} \notin \mathbb{Z} \\[2mm] \frac{N_{2}-N_{1}+1}{N} & \frac{k}{N} \in \mathbb{Z}.\end{cases}
$$


### 10.10.3 MATLAB 练习

目前没有 MATLAB 练习。

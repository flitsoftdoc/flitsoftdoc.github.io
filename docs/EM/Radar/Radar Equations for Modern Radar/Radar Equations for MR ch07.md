# 第7章 大气效应

大气对雷达传播的影响包括：

- 雷达与目标之间射线的折射（弯曲）；
- 沿这些路径传播的电波的衰减；
- 电离层中电波极化的旋转（在低于S波段的频率下）。

衰减和法拉第旋转与雷达方程有显而易见的关系，但折射也必须考虑，因为来自雷达的折射射线位于指向目标的几何直线之上，相对于适用于直线路径的情况而言，这会减少衰减。此外，从雷达出射并位于仰角波束宽度内的一束射线，由于波束下部弯曲更大而被扩展，导致功率密度的降低超过自由空间传播的$1 / R^{2}$因子。

Blake在[1]中对大气效应进行了详尽的研究，这些研究在今天依然有效。本章的目的是总结和更新相关数据，讨论实用的建模与计算方法，并以公制单位和图形化格式给出结果，以提高阅读精度和解释性。

## 7.1 对流层折射

Blake的衰减计算方法使用对流层中的射线追踪路径进行积分。需要一个随高度变化的对流层折射率模型，我们在此提供可替代的模型，以便在所有雷达频段中评估不同的雷达站址和气象条件的影响。

### 7.1.1 空气的折射率

复折射率定义为[2]：

> 一个无量纲复数，介质的特征参数，其实部定义为自由空间相速度与介质中相速度之比。折射率虚部与自由空间传播常数的乘积为介质的衰减常数。

雷达波在对流层中的折射取决于折射率的实部$n$，它是温度$T$、气压$P$和水汽分压力$e$的函数。${ }^{1}$

> ${ }^{1}$ 常用的压力单位是毫巴（mbar），定义为100帕或1000达因$/\mathrm{cm}^{2}$。它大约是海平面大气压的$1/1000$。

折射率实部通常用折射度$N$表示，即$n$相对于1的偏差，其表达式为[3, p. 7, Eq. (1.15)]：

$$
\begin{align*}
N & =(n-1) \times 10^{6}=77.6 \frac{P_{d a}}{T}+72 \frac{e}{T}+3.75 \times 10^{5} \frac{e}{T^{2}}(\mathrm{ppm}) \\
& \approx \frac{77.6}{T}\left(P+\frac{4820 e}{T}\right) \tag{7.1}
\end{align*}
$$

其中

$$
\begin{aligned}
& T=\text{温度，单位K；} \\
& P_{d a}=\text{干空气分压力，单位mbar；} \\
& e=\text{水汽分压力，单位mbar；} \\
& P=P_{d a}+e=\text{气压，单位mbar。}
\end{aligned}
$$

该方程在所有雷达频率下精度约为$\pm0.5\%$，在$60\ \mathrm{GHz}$氧气吸收区以上频率时精度略有下降。

水汽分压力$e$可用水汽密度$\rho$表示[4, p. 16-3]：

$$
\begin{equation*}
\frac{e}{T}=\frac{\rho_{w}}{216.68} \tag{7.2}
\end{equation*}
$$

其中$\rho$的单位是$\mathrm{g}/\mathrm{m}^{3}$。因此(7.1)可以写为：

$$
\begin{equation*}
N=77.6 \frac{P_{d a}}{T}+\left(\frac{1,730.7}{T}+0.332\right) \rho_{w} \tag{7.3}
\end{equation*}
$$

### 7.1.2 标准大气

标准大气由美国专家委员会在20世纪50年代定义，1976年版[5]在本文撰写时仍然有效，由NOAA、NASA和USAF的专家更新。它在$32\ \mathrm{km}$高度以下与1964年ICAO标准相同，在50 km以下与1973年ISO标准相同。低于$30\ \mathrm{km}$高度的温度和压力数据如图7.1所示，与雷达相关。注意压力剖面接近指数型，尽管在约$11\ \mathrm{km}$高度其斜率发生了变化。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-244.jpg?height=703&width=1169&top_left_y=691&top_left_x=160){width="400"}

图7.1 美国1976年标准大气的温度与压力。

温度由三个线性分段表示，斜率在11 km和20 km处发生变化。海平面的参数为：

$$
\begin{array}{lli}
\text{温度 } T(0) & 288 & \mathrm{~K} ; \\
\text{气压 } P(0) & 1,013.25 & \mathrm{mbar} .
\end{array}
$$

其中(0)表示海平面高度。压力剖面可以用两个指数段来近似：${ }^{2}$

$$
\begin{aligned}
P(h) & =P(0) \exp \left(-\frac{h}{7.354}\right), \quad h \leq 11 \mathrm{~km} \\
& =0.224 P(0) \exp \left(-\frac{h}{6.457}\right), \quad h>11 \mathrm{~km}
\end{aligned} \tag{7.4}
$$

> ${ }^{2}$ Blake [1, p. 205]提出的大气模型方程中存在明显的印刷错误；我们在此采用图7.1和(7.4)给出的模型，以及Blake表5-4中的水汽密度公式(7.5)。




### 7.1.3 水汽的引入

标准大气并未规定空气中的水汽含量，但标准大气在海平面的水汽密度取值为$\rho_{0}=7.75 \mathrm{~g} / \mathrm{m}^{3}$。这一数值可与饱和水汽密度进行比较，在288 K时饱和水汽密度为$12.8 \mathrm{~g} / \mathrm{m}^{3}$。当与标准大气结合时，得到以下海平面参数：

$$
\begin{array}{lll}
\text{水汽密度 } \rho_{w 0} & 7.75 & \mathrm{~g} / \mathrm{m}^{3} ; \\
\text{饱和水汽密度 } \rho_{w \max } & 12.8 & \mathrm{~g} / \mathrm{m}^{3} ;\\
\text{相对湿度 RH } & 60 & \% ;\\
\text{水汽分压力 } e_{0} & 10.3 & \text{mbar (由式(7.2)计算)};\\
\text{干空气分压力 } P_{d a 0} & 1,002.7 & \text{mbar}.
\end{array}
$$

利用式(7.1)，可计算出海平面折射度及其干空气和水汽的分量：

$$
\begin{array}{lll}
\text{折射度 } N_{0} & 319.2 & \mathrm{ppm} ;\\
\text{干空气折射度 } N_{d 0} & 270.1 & \mathrm{ppm} ;\\
\text{水汽折射度 } N_{w 0} & 49.1 & \mathrm{ppm}.
\end{array}
$$

因此，海平面折射度的$85\%$来自干空气，$15\%$来自水汽，尽管水汽分压力仅占总压力的$1\%$。

Blake [1, p. 207]给出了随高度变化的$\rho_{w}$的实测剖面，可以按海平面数值$\rho_{w 0}=7.75 \mathrm{~g} / \mathrm{m}^{3}$进行缩放，以得到图7.2。水汽密度的剖面可用三段模型表示：

$$
\begin{align*}
\rho_{w}(h) & =\rho_{w 0}(1-0.2523 h), \quad h \leq 2 \mathrm{~km} \\
& =0.4954 \rho_{w 0} \exp \left(-\frac{h-2}{1.861}\right), \quad 2<h \leq 8 \mathrm{~km} \tag{7.5}\\
& =0.0197 \rho_{w 0} \exp \left(-\frac{h-8}{1.158}\right), \quad h>8 \mathrm{~km}
\end{align*}
$$

其中海平面水汽密度为$\rho_{w 0}=7.75 \mathrm{~g} / \mathrm{m}^{3}$，对应标准大气下$60\%$的相对湿度。必须分别采用气压和水汽密度剖面，以反映低高度区域水汽的集中分布。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-246.jpg?height=636&width=887&top_left_y=276&top_left_x=285){width="400"}

图7.2 水汽密度随高度变化的曲线，$\rho_{w 0}=7.75 \mathrm{~g} / \mathrm{m}^{3}$。




### 7.1.4 折射度的垂直剖面

已知$T, P$和$\rho_{w}$的剖面后，可以利用式(7.3)得到标准大气的折射度剖面。在图7.3中，该剖面与一条虚线进行对比，虚线表示对低空折射度值的单段指数拟合，这些低空折射度值主导了对流层的影响。这类折射度剖面之一，被称为CRPL指数参考大气，由中央无线电传播实验室（Central Radio Propagation Laboratory）提出。${ }^{3}$

> ${ }^{3}$ CRPL是美国国家标准局（National Bureau of Standards）在科罗拉多州博尔德的一个分支机构，该机构长期从事大气的测量与建模工作。1965年该实验室被转移至环境科学服务署（Environmental Science Services Administration），随后划归美国国家海洋与大气管理局（NOAA）。

CRPL指数参考大气的定义为[3, p. 65, Eq. (3.43)]：

$$
\begin{equation*}
N(h)=N_{s} \exp \left[-\frac{h-h_{s}}{h_{0}}\right] \approx N_{0} \exp \left[-\frac{h}{h_{0}}\right] \tag{7.6}
\end{equation*}
$$

其中：

$h=$ 海拔高度（km）；  
$N_{0}=$ 海平面折射度（ppm）；  
$h_{0}=$ 大气尺度高度（km）；${ }^{4}$  
$N_{s}=$ 高度$h_{s}$处的折射度；  
$h_{s}=$ 地表高度（km）。

> ${ }^{4}$ 在[1,3]中，尺度高度$h_{0}$由其倒数$c$（单位$\mathrm{km}^{-1}$）表示，但尺度高度$h_{0}$（定义为$N$下降到地表值的$1/e$时对应的高度）具有明确的物理意义。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-247.jpg?height=702&width=952&top_left_y=274&top_left_x=250){width="400"}  
图7.3 折射度随高度变化曲线，$\rho_{w 0}=7.75 \mathrm{~g} / \mathrm{m}^{3}$。

在式(7.6)的最后一种形式中出现近似符号，是因为与$N_{0}$配合使用的尺度高度$h_{0}$应略大于$N_{s}$的情况。[3, p. 66, Table 3.3]中给出的尺度高度$h_{0}$列于表7.1中，并且在$200 \leq N \leq 450$的范围内可用下式表示，精度为0.02 km：

$$
\begin{equation*}
h_{0}(N)=4.479+8.17\left(1-\frac{N}{450}\right)-19\left(1-\frac{N}{450}\right)^{6} \tag{7.7}
\end{equation*}
$$

CRPL模型基于20世纪50年代的大量测量数据。图7.3中的虚线对应的地表折射度为$N_{s}=313 \mathrm{ppm}$，Blake [1, p. 183]将其作为美国的平均值。表7.1中的参数适用于不同站址高度和气象条件。参数$k_{e}$表示有效地球半径与真实半径$a_{e}=6,378 \mathrm{~km}$之比，雷达计算中通常采用的数值为$k_{e}=4/3$。

表7.1 CRPL指数参考大气的参数

| 地表折射度 $N_{s}$ (ppm) | 尺度高度 $h_{0}(\mathrm{~km})$ | 地球半径常数 $k_{e}$ |
| :--- | :--- | :--- |
| 450.0 | 4.479 | 2.784 |
| 400.0 | 5.356 | 1.910 |
| 350.0 | 6.276 | 1.552 |
| 313.0 | 6.951 | 1.403 |
| 301.0 | 7.162 | 1.366 |
| 250.0 | 7.960 | 1.251 |
| 200.0 | 8.446 | 1.178 |

CRPL指数参考大气的动机与发展在[6]中有详细讨论，该文还给出了美国的气候图，显示了二月和八月昼夜条件下的折射度等值线，调整为海平面值$N_{0}$。这些图上的极值为：

$$
\begin{array}{ll}
\text{最大值} & N_{0}=390 \text{（八月白天出现在墨西哥湾沿岸）；} \\
\text{最小值} & N_{0}=285 \text{（二月白天出现在内华达州南部）。}
\end{array}
$$

表7.1中的$N_{s}=450$仅出现在炎热潮湿的环境中。[3]中将$N_{0}=200$与3 km的海拔相关联，这接近于地基雷达的最大高度。CRPL数据中，美国平均值$N_{s}=313$对应的地表高度为$700 \mathrm{ft}(213 \mathrm{~m})$，其相应的海平面折射度为$N_{0}=323$。

CRPL数据表明，$250 \leq N_{0} \leq 400$涵盖了海平面条件下的可能变化范围，$N_{0} \approx 320$是一个标称值。对于给定站址高度的折射率剖面，可由式(7.6)结合选定的$N_{0}$计算得到。


### 7.1.5 对流层中的射线路径

#### 7.1.5.1 射线追踪方法

以仰角$\theta_{0}$离开雷达的一条射线，由于对流层折射率随高度$h$的降低，会逐渐向下弯曲。对于已知的折射率垂直剖面，射线路径可通过射线追踪方法计算。此时，雷达回波的时延$t_{d}$所测得的距离为$R_{d}=c t_{d}/2$，表达式为[1, p. 182, Eq. (5.9)]：

$$
\begin{equation*}
R_{d}\left(h, \theta_{0}\right)=\int_{h_{s}}^{h} n(h)\left\{1-\left[\frac{n\left(h_{s}\right) \cos \theta_{0}}{n(h)\left(1+h / a_{e}\right)}\right]^{2}\right\}^{-1 / 2} d h \ (\mathrm{km}) \tag{7.8}
\end{equation*}
$$

其中：

$$
\begin{aligned}
n(h) & =1+N(h) \times 10^{-6}=\text{折射率的垂直剖面；} \\
h_{s} & =\text{雷达海拔高度（km）；} \\
h & =\text{路径上的海拔高度（km）；} \\
a_{e} & =6,378 \ \mathrm{km}=\text{地球半径。}
\end{aligned}
$$

为了将式(7.8)的结果用于路径衰减的计算，必须将其反演为$h\left(R, \theta_{0}\right)$。由于没有解析形式的方程，只能采用数值求根方法。

#### 7.1.5.2 基于有效地球半径的高度

有效地球半径$k_{e} a_{e}$定义为：一条从海拔$h_{s}$、仰角$\theta_{0}$出射的射线，在距离$R$处达到高度$h$时满足[1, p. 187, Eq. (5.15)]：

$$
\begin{equation*}
h\left(R, \theta_{0}\right)=\sqrt{\left(k_{e} a_{e}+h_{s}\right)^{2}+R^{2}+2\left(k_{e} a_{e}+h_{s}\right) R \sin \theta_{0}}-k_{e} a_{e} \tag{7.9}
\end{equation*}
$$

在可采用有效地球半径的雷达距离范围内，有以下近似式成立[1, p. 188, Eq. (5.16)]：

$$
\begin{equation*}
h\left(R, \theta_{0}\right) \approx R \sin \theta_{0}+\frac{\left(R \cos \theta_{0}\right)^{2}}{2 k_{e} a_{e}}+h_{s} \tag{7.10}
\end{equation*}
$$

例如，当$R=1,000 \ \mathrm{km}$时，高度误差小于由式(7.9)计算值的$0.4\%$。这种近似方法能够在不进行复杂射线追踪的情况下，在多个距离和仰角条件下以可接受的精度进行衰减计算。

---

## 7.2 对流层中的衰减

雷达路径的衰减表示为双程衰减系数（$\mathrm{dB}/\mathrm{km}$）与路径长度（km）的乘积。在以下公式中，双程对流层衰减系数记为$k_{\alpha}$，以替代参考文献中用于表示单程系数的$\gamma$。

#### 7.2.1 海平面大气气体的衰减系数

衰减源于复折射率的虚部，它随雷达频率$f$、气压$P$、温度$T$和水汽密度$\rho$而变化。这些物理量与衰减（吸收）的关系最早由J. H. Van Vleck在麻省理工学院辐射实验室的一份报告中提出，并由[7]进行了总结。该理论被用作[3, Chapter 7]以及Blake [1, pp. 200-204]的研究基础。

氧气和水汽都会引起衰减，它们在毫米波段内都有强烈而窄的吸收线（水汽在22.2 GHz也有一条明显的吸收线）。在雷达所使用的频带内，吸收效应在较低水平上也会扩展。

#### 7.2.1.1 氧气衰减

氧气的主要吸收线集中在$f_{O 1} \approx 60 \ \mathrm{GHz}$附近（$\lambda_{O 1}=0.50 \ \mathrm{cm}$）。实际上并非一条单一谱线，而是一系列与转动量子数$N$的奇数值相关的共振，列于表7.2中至45阶，此后对衰减的贡献可忽略。需要注意的是，在$f_{1-}=118.75 \ \mathrm{GHz}$处存在一条明显分离的共振，它将在后续图中出现。

表7.2 氧气共振频率 (GHz)

| $N$ | $f_{N^{+}}$ | $f_{N-}$ | $N$ | $f_{N+}$ | $f_{N-}$ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 56.2648 | 118.7505 | 25 | 65.7626 | 53.5960 |
| 3 | 58.4466 | 62.4863 | 27 | 66.2978 | 53.0695 |
| 5 | 59.5910 | 60.3061 | 29 | 66.8313 | 52.5458 |
| 7 | 60.4348 | 59.1642 | 31 | 67.3627 | 52.0259 |
| 9 | 61.1506 | 58.3239 | 33 | 67.8923 | 51.5091 |
| 11 | 61.8002 | 57.6125 | 35 | 68.4205 | 50.9949 |
| 13 | 62.4112 | 56.9682 | 37 | 68.9478 | 50.4830 |
| 15 | 62.9980 | 56.3634 | 39 | 69.4741 | 49.9730 |
| 17 | 63.5685 | 55.7839 | 41 | 70.0000 | 49.4648 |
| 19 | 64.1272 | 55.2214 | 43 | 70.5249 | 48.9582 |
| 21 | 64.6779 | 54.6728 | 45 | 71.0497 | 48.4530 |
| 23 | 65.2240 | 54.1294 |  |  |  |

$f_{N \pm}$数值取自[8]，列于[1, Table 5-3]。

氧气的衰减系数$k_{\alpha O}$由Van Vleck推导[7, pp. 646-656]，其公式在[1, pp. 200-201]中给出（初始常数乘以2以反映双程衰减）：

$$
k_{\alpha O}(f, h)=4.0116 \frac{P f^{2}}{T^{3}} \sum_{N}\left(F_{0} \mu_{N 0}^{2}+F_{N+} \mu_{N+}^{2}+F_{N-} \mu_{N-}^{2}\right) \exp \left[-\frac{2.06844 N(N+1)}{T}\right] \tag{7.11}
$$

$$
F_{0}(f, h) =\frac{\Delta f}{f^{2}+(\Delta f)^{2}} \tag{7.12}
$$

$$
\Delta f(h) =g(h) \frac{P(h)}{P(0)} \frac{T(0)}{T(h)} \tag{7.13}
$$

$$
\begin{aligned}
g(h) & =0.640, & & h \leq 8 \\
& =0.640+0.04218(h-8), & & 8<h \leq 25 \\
& =1.357, & & h>25
\end{aligned}\tag{7.14}
$$

$$
F_{N \pm}  (f, h)=\frac{\Delta f}{\left(f_{N \pm}-f\right)^{2}+(\Delta f)^{2}}+\frac{\Delta f}{\left(f_{N \pm}+f\right)^{2}+(\Delta f)^{2}} \tag{7.15}
$$

$$
\mu_{N 0}^{2}=\frac{2\left(N^{2}+N+1\right)(2 N+1)}{N(N+1)}  \tag{7.16}
$$

$$
\mu_{N+}^{2}=\frac{N(2 N+1)}{N+1} \tag{7.17}
$$

$$
\mu_{N-}^{2}=\frac{(N+1)(2 N-1)}{N} \tag{7.18}
$$

其中：

- $k_{\alpha O}$ = 双程衰减，单位 dB/km；  
- $f$ = 频率，单位 GHz；  
- $P$ = 气压，单位 mbar；  
- $h$ = 高度，单位 km；  
- $T$ = 温度，单位 K。  

在式(7.11)中，$F_{0} \mu_{N 0}^{2}$项表示非共振吸收，而$F_{N \pm} \mu_{N \pm}^{2}$表示表7.2所列的共振。高度因子$g(h)$（式(7.13)、(7.14)）已包含在Blake的方程中，基于[8]。海平面大气的计算结果如图7.4所示。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-252.jpg?height=707&width=992&top_left_y=320&top_left_x=248){width="400"}  
图7.4 海平面大气氧气的衰减系数 $k_{\alpha O}$。


### 7.2.1.2 水汽衰减

水汽的衰减系数同样由Van Vleck推导[7, pp. 656-664]，其基础是主要的水汽吸收线$f_{W 1}=22.235 \ \mathrm{GHz}$。随后研究又引入了额外的吸收线，频率分别为$f_{W 2}=183.3 \ \mathrm{GHz}$和$f_{W 3}=323.8 \ \mathrm{GHz}$。双程水汽衰减的表达式（单位：$\mathrm{dB}/\mathrm{km}$）为：

$$
\begin{gather*}
k_{\alpha W}(f, h)=\frac{\rho_{w}(h)}{7.75}\left(\frac{288}{T(h)}\right)^{5 / 2}\left\{\left(\frac{f}{100}\right)^{2} \frac{P(h)}{1,013}+\left(\frac{f}{f_{r 1}}\right)^{2} \times\right. \\
\left.\quad \times \exp \left[2.144\left(1-\frac{288}{T(h)}\right)\right]\right\} \sum_{z=1}^{3} F_{W z}  \tag{7.19}\\
F_{W z}(f, h)=\frac{\Delta f_{W}}{\left(f_{W z}+f\right)^{2}+\left(\Delta f_{W}\right)^{2}}+\frac{\Delta f_{W}}{\left(f_{W z}-f\right)^{2}+\left(\Delta f_{W}\right)^{2}}  \tag{7.20}\\
\Delta f_{W}(h)=0.0187 \rho_{w}(h)+0.00385\left[0.75 P(h)-\rho_{w}(h)\right]\left[\frac{288}{T(h)}\right]^{0.63} \tag{7.21}
\end{gather*}
$$

其中：

- $h=$ 海拔高度（km）；  
- $\rho_w(h)=$ 高度$h$处的水汽密度（$\mathrm{g}/\mathrm{m}^3$）；  
- $P(h)=$ 高度$h$处的气压（mbar）；  
- $T(h)=$ 高度$h$处的温度（K）；  
- $F_{W z}=$ 共振线结构；  
- $f_{W z}=$ 共振频率$f_{W 1..3}$（GHz）；  
- $\Delta f_W=$ 共振线宽（GHz）。  

式(7.19)中涉及$f/100$的项表示来自高于100 GHz的吸收线的非共振（残余）水汽系数，而涉及$f/f_{r 1}$的项表示由式(7.20)定义的共振贡献之和。${ }^{5}$ 标准密度$\rho_{w}(0)=7.75 \ \mathrm{g}/\mathrm{m}^3$时的水汽衰减系数如图7.5所示。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-253.jpg?height=715&width=992&top_left_y=804&top_left_x=248){width="400"}  
图7.5 海平面大气水汽的衰减系数 $k_{\alpha W}$，水汽密度 $\rho_{w 0}=7.75 \ \mathrm{g}/\mathrm{m}^3$。

> ${ }^{5}$ 式(7.19)–(7.21)中的常数与文献有所不同，以保证采用单一温度基准$T(0)=288 \ \mathrm{K}$（而不是文献中同时出现的288 K和300 K）；水汽密度$\rho$采用$\mathrm{g}/\mathrm{m}^3$而不是以torr为单位的分压力；气压采用mbar而不是torr。

---

### 7.2.1.3 总对流层衰减系数

图7.6显示了海平面大气（水汽密度$7.75 \ \mathrm{g}/\mathrm{m}^3$）的总衰减系数，以及氧气和水汽的单独贡献。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-254.jpg?height=696&width=990&top_left_y=320&top_left_x=248){width="400"}  
图7.6 海平面大气的衰减系数：总衰减$k_{\alpha}$（实线）；氧气$k_{\alpha O}$（虚线）；水汽$k_{\alpha W}$（点划线），水汽密度$\rho_{w 0}=7.75 \ \mathrm{g}/\mathrm{m}^3$。

---

### 7.2.2 衰减系数随高度的变化

当雷达波束向上穿过对流层时，氧气和水汽的衰减系数变化方式不同。第7.1节中建立的大气与几何模型提供了计算目标路径或穿过整个大气直至外层空间衰减所需的数据。

式(7.11)–(7.21)中的衰减系数包含若干与海拔高度有关的项。利用气压$P(h)$、温度$T(h)$和水汽密度$\rho_{w}(h)$的垂直剖面（见式(7.4)、图7.1(b)和式(7.5)），即可得到任意高度下的衰减系数。典型结果如图7.7所示，对应海拔$h=0,3 \ \mathrm{km}$和10 km。需要注意的是，共振频率处的衰减随高度增加下降得远慢于非共振项。因此，不能简单地将衰减系数按高度或气压进行缩放，而必须通过对实际射线路径积分、并结合随高度变化的系数来计算衰减。

---

### 7.2.3 穿过对流层的衰减

离开雷达并以仰角$\theta_{0}$发射的路径，在达到$h_{m} \ \mathrm{km}$高度时的总双程衰减$L_{\alpha t}(h_{m})$由[1, p. 209, Eq. (5.46)]给出：

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-255.jpg?height=649&width=987&top_left_y=281&top_left_x=248){width="400"}  
图7.7 不同高度下的大气衰减系数$k_{\alpha}$随频率的变化，海平面水汽密度$\rho_{w 0}=7.75 \ \mathrm{g}/\mathrm{m}^3$：$h=0$（实线），$h=3 \ \mathrm{km}$（虚线），$h=10 \ \mathrm{km}$（点划线）。

$$
\begin{equation*}
L_{\alpha t}\left(h_{m}\right)=\int_{h_{s}}^{h_{m}} k_{\alpha}(h)\left\{1-\left[\frac{a_{e} n\left(h_{s}\right) \cos \theta_{0}}{n(h)\left(a_{e}+h-h_{s}\right)}\right]^{2}\right\} d h \ (\mathrm{dB}) \tag{7.22}
\end{equation*}
$$

其中：

- $n(h)=$ 折射率剖面；  
- $k_\alpha(h)=$ 高度$h \ \mathrm{km}$处的衰减系数（$\mathrm{dB}/\mathrm{km}$）；  
- $a_e=6,378 \ \mathrm{km}=$ 地球半径；  
- $\theta_0=$ 雷达出射波束的仰角；  
- $h_s=$ 雷达站址的海拔高度（km）。  

对于从海平面到空间的路径，低高度极限为$h_{s}=0$，高高度极限可取为$h_{m}=100 \ \mathrm{km}$。图7.8展示了不同波束仰角下，随频率变化的穿透空间的衰减情况。


### 7.2.4 到达距离 $\boldsymbol{R}$ 的衰减

路径到达距离$R$、波束仰角为$\theta$时的衰减$L_{\alpha}(R, \theta)$，可通过将式(7.22)的结果绘制为$R\left(h_{m}, \theta\right)$（由式(7.8)给出）的函数得到。结果如图7.9–7.18所示，与Blake [1, pp. 210-216, Figures 5.12-5.19]给出的结果等效，这些结果被广泛用于获取雷达方程中的大气衰减。本书中的曲线基于海平面水汽密度$\rho_{w 0}=7.75 \ \mathrm{g}/\mathrm{m}^3$，对应标准大气下$60\%$的相对湿度，并采用对数-对数坐标绘制，以提高读数精度。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-256.jpg?height=666&width=1073&top_left_y=457&top_left_x=195){width="400"}  
图7.8 从海平面穿过对流层的大气衰减，随频率和不同波束仰角的变化；标准大气，水汽密度$\rho_{w 0}=7.75 \ \mathrm{g}/\mathrm{m}^3$。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-256.jpg?height=664&width=1030&top_left_y=1248&top_left_x=221){width="400"}  
图7.9 大气衰减随距离$R$的变化，频率$f_{0}=225 \ \mathrm{MHz}$，不同波束仰角；标准大气，水汽密度$\rho_{w 0}=7.75 \ \mathrm{g}/\mathrm{m}^3$。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-257.jpg?height=735&width=1135&top_left_y=272&top_left_x=175){width="400"}  
图7.10 大气衰减随距离$R$的变化，频率$f_{0}=450 \ \mathrm{MHz}$，不同波束仰角；标准大气，水汽密度$\rho_{w 0}=7.75 \ \mathrm{g}/\mathrm{m}^3$。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-257.jpg?height=732&width=1131&top_left_y=1138&top_left_x=175){width="400"}  
图7.11 大气衰减随距离$R$的变化，频率$f_{0}=1.3 \ \mathrm{GHz}$，不同波束仰角；标准大气，水汽密度$\rho_{w 0}=7.75 \ \mathrm{g}/\mathrm{m}^3$。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-258.jpg?height=726&width=1122&top_left_y=272&top_left_x=175){width="400"}  
图7.12 大气衰减随距离$R$的变化，频率$f_{0}=3.0 \ \mathrm{GHz}$，不同波束仰角；标准大气，水汽密度$\rho_{w 0}=7.75 \ \mathrm{g}/\mathrm{m}^3$。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-258.jpg?height=733&width=1133&top_left_y=1120&top_left_x=175){width="400"}  
图7.13 大气衰减随距离$R$的变化，频率$f_{0}=5.6 \ \mathrm{GHz}$，不同波束仰角；标准大气，水汽密度$\rho_{w 0}=7.75 \ \mathrm{g}/\mathrm{m}^3$。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-259.jpg?height=731&width=1128&top_left_y=276&top_left_x=175){width="400"}  
图7.14 大气衰减随距离$R$的变化，频率$f_{0}=10 \ \mathrm{GHz}$，不同波束仰角；标准大气，水汽密度$\rho_{w 0}=7.75 \ \mathrm{g}/\mathrm{m}^3$。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-259.jpg?height=724&width=1122&top_left_y=1129&top_left_x=175){width="400"}  
图7.15 大气衰减随距离$R$的变化，频率$f_{0}=15 \ \mathrm{GHz}$，不同波束仰角；标准大气，水汽密度$\rho_{w 0}=7.75 \ \mathrm{g}/\mathrm{m}^3$。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-260.jpg?height=726&width=1122&top_left_y=272&top_left_x=175){width="400"}  
图7.16 大气衰减随距离$R$的变化，频率$f_{0}=35 \ \mathrm{GHz}$，不同波束仰角；标准大气，水汽密度$\rho_{w 0}=7.75 \ \mathrm{g}/\mathrm{m}^3$。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-260.jpg?height=728&width=1122&top_left_y=1120&top_left_x=175){width="400"}  
图7.17 大气衰减随距离$R$的变化，频率$f_{0}=45 \ \mathrm{GHz}$，不同波束仰角；标准大气，水汽密度$\rho_{w 0}=7.75 \ \mathrm{g}/\mathrm{m}^3$。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-261.jpg?height=726&width=1117&top_left_y=272&top_left_x=175){width="400"}  
图7.18 大气衰减随距离$R$的变化，频率$f_{0}=95 \ \mathrm{GHz}$，不同波束仰角；标准大气，水汽密度$\rho_{w 0}=7.75 \ \mathrm{g}/\mathrm{m}^3$。


### 7.2.5 干燥与潮湿大气的衰减

在某些情况下，需要水汽密度不同于$\rho_{w 0}=7.75 \ \mathrm{g}/\mathrm{m}^{3}$（图7.8–7.18所用数值）的衰减数据。由于氧气和水汽的相对贡献随频率和高度而变化，若要得到其他水汽密度下的精确衰减曲线，必须对不同湿度条件重复利用式(7.22)进行计算。Blake解决该问题的方法是在L波段以上的频率下，分别绘制$k_{\alpha O}$和$k_{\alpha W}$（对应$\rho_{w 0}=7.75 \ \mathrm{g}/\mathrm{m}^{3}$）的曲线族。总衰减$k_{\alpha}$则通过将绘制的$k_{\alpha W}$（以dB计）乘以比值$\rho_{w}/7.75 \ \mathrm{g}/\mathrm{m}^{3}$，再加上氧气的$k_{\alpha O}$得到。

另一种替代Blake方法、避免多步程序的方式，是直接通过一个水汽因子$W_{\rho}$对图7.8–7.18中的曲线进行缩放，其定义为：

$$
\begin{equation*}
W_{\rho}=\frac{1}{k_{\alpha}(0)}\left[k_{\alpha O}(0)+\frac{\rho_{w}}{7.75} k_{\alpha W}(0)\right] \tag{7.23}
\end{equation*}
$$

其中$k_{\alpha}(0)$、$k_{\alpha O}(0)$和$k_{\alpha W}(0)$为海平面下的衰减系数。图7.19展示了不同水汽密度$\rho$对应的$W_{\rho}$。由此得到的缩放衰减$L_{\alpha}\left(h_{m}, \rho_{w}\right)=W_{\rho}\left(\rho_{w}\right)L_{\alpha}\left(h_{m}, 7.75\right)$仅为近似值，因为它未能反映相对系数随高度变化的情况。但如图7.20所示，其结果与精确值非常接近，差异小于水汽密度知识中的典型误差。在一般大气条件下，可直接使用图7.8–7.18所给曲线。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-262.jpg?height=566&width=972&top_left_y=485&top_left_x=252){width="400"}  
图7.19 水汽因子$W_{\rho}$随频率的变化，不同水汽密度条件下。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-262.jpg?height=649&width=987&top_left_y=1133&top_left_x=246){width="400"}  
图7.20 大气衰减$L_{\alpha}$随距离的变化，频率$f_{0}=10 \ \mathrm{GHz}$，不同仰角条件下，水汽密度$\rho_{w 0}=12.5 \ \mathrm{g}/\mathrm{m}^{3}$。实线：式(7.22)精确计算结果；虚线：采用$\rho_{w 0}=7.75 \ \mathrm{g}/\mathrm{m}^{3}$的衰减乘以水汽因子$W_{\rho}$的近似结果。

---

## 7.3 降水衰减

### 7.3.1 雨衰减系数（$293 \ \mathrm{K}$）

关于雨衰减的理论研究由Goldstein [11]以及Gunn和East [12]提出，其结果至今仍被广泛应用。大量分析及当前天气衰减模型起源于Ryde和Ryde于1945年撰写的一份公司报告[13]，以及他们在1946年发表于伦敦物理学会的论文[14]，两者现已不再可得。更近的修正由Blake [1, pp. 214-221]和Nathanson [15, pp. 226-228]提出。

标准模型将衰减系数$k_{\alpha r}$与降雨率的关系表示为[1, p. 215, Eq. (5.47)]：

$$
\begin{equation*}
k_{\alpha r}\left(r_{r}\right)=a r_{r}^{b} \ \mathrm{dB}/\mathrm{km} \tag{7.24}
\end{equation*}
$$

其中：

- $r_{r}=$ 降雨率（$\mathrm{mm}/\mathrm{h}$）；  
- $a=$ 与频率$f_{0}$有关的乘法因子；  
- $b=$ 与频率$f_{0}$有关的指数。  

Blake给出了适用于约$291 \ \mathrm{K}$温度的$a$和$b$公式，此处更新以匹配[1, p. 228, Table 6.4]的数据：

$$
\begin{gather*}
a\left(f_{0}\right)=\frac{C_{0} f_{0}^{2}\left(1+f_{0}^{2} / f_{1}^{2}\right)^{1 / 2}}{\left(1+f_{0}^{2} / f_{2}^{2}\right)^{1 / 2}\left(1+f_{0}^{2} / f_{3}^{2}\right)^{1 / 2}\left(1+f_{0}^{2} / f_{4}^{2}\right)^{0.65}}  \tag{7.25}\\
b\left(f_{0}\right)=1.30+0.0372\left[1-\left(1+x_{f}^{2}\right)\right]^{1 / 2} \tag{7.26}
\end{gather*}
$$

其中：

$$
\begin{aligned}
C_{0}&=6.2 \times 10^{-5}, \quad f_{1}=3 \ \mathrm{GHz}, \quad f_{2}=35 \ \mathrm{GHz}, \\
f_{3}&=50 \ \mathrm{GHz}, \quad f_{4}=110 \ \mathrm{GHz}, \\
x_{f}&=16.7 \log \left(0.13 f_{0}\right) .
\end{aligned}
$$

与Blake公式相比，此处的改动为：(7.25)分母最后一项的指数由0.5改为0.65；参数$x_{f}$由$16.7 \log(0.1 f_{0})$改为$16.7 \log(0.13 f_{0})$。该变化导致在$f_{0}>90 \ \mathrm{GHz}$时$a(f_{0})$降低，并将$b(f_{0})$曲线的峰值从10 GHz移至7.75 GHz。由式(7.24)结合式(7.25)和(7.26)计算的双程雨衰减系数$k_{\alpha r}$随频率的变化如图7.21所示，对应不同降雨率。

Nathanson的表格给出了水平与垂直极化下稍有不同的$a$和$b$值，与观测结果一致，观测表明圆极化波逐渐向椭圆极化转变。这对采用极化双工的通信系统至关重要，但对雷达雨衰减计算而言，采用两种极化常数的平均值已足够，且其精度优于天气模型所能保证的水平。Medhurst [16]和Blake指出，实测衰减常常大于理论预测值。Blake认为这可能是由于暴雨期间相对湿度接近$300\%$，该效应可通过在式(7.23)中增加$\rho_{w}$并利用所得的$W_{\rho}$提高大气气体衰减来建模。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-264.jpg?height=750&width=895&top_left_y=272&top_left_x=305){width="400"}  
图7.21 双程雨衰减系数（$T=293 \ \mathrm{K}$），随频率和不同降雨率的变化，利用式(7.24)结合式(7.25)与(7.26)计算。




### 7.3.2 雨衰减的温度依赖性

多项研究[10-13, 17, 18]表明，雨衰减随水滴温度显著变化。Ryde在[17, p. 19-12, Table 19-1]中给出的结果表明，上一节模型所采用的$T=291 \ \mathrm{K}$时的衰减系数应乘以表7.3中的修正因子。尽管这些数值与[12, 13]中的一些早期结果差异较大，尤其在低温和长波长情况下，但它们似乎是足够合理的模型。表7.3中的数据可由以下近似公式表示：

$$
\begin{align*}
C_{T}(\lambda) & =1+a_{T}(100 \lambda-1.5)^{b_{T}}, & \lambda \geq 0.015 \ \mathrm{m}  \tag{7.27}\\
& =1, & \lambda<0.015 \ \mathrm{m}
\end{align*}
$$

其中常数为：

$$
\begin{array}{lllll}
a_{273}=0.2, & a_{283}=0.1, & a_{291}=0, & a_{303}=-0.12, & a_{313}=-0.21 ; \\
b_{273}=0.6, & b_{283}=0.5, & b_{291}=0, & b_{303}=0.27, & b_{313}=0.25 .
\end{array}
$$

表7.3 雨衰减的温度修正因子$\boldsymbol{C}_{\boldsymbol{T}}$

| 降雨率 (mm/h) | 波长 (m) | 温度 (K) |   |   |   |   |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|  |  | 273 | 283 | 293 | 303 | 313 |
|  | 0.0003 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 |
|  | 0.001  | 1.00 | 1.00 | 1.00 | 1.00 | 1.01 |
|  | 0.005  | 1.01 | 1.01 | 1.00 | 0.99 | 0.98 |
| 2.5 | 0.0125 | 0.95 | 0.96 | 1.00 | 1.05 | 1.10 |
|  | 0.032  | 1.28 | 1.14 | 1.00 | 0.86 | 0.72 |
|  | 0.10   | 1.73 | 1.30 | 1.00 | 0.79 | 0.64 |
|  | 0.0003 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 |
|  | 0.001  | 1.00 | 1.00 | 1.00 | 1.00 | 1.01 |
|  | 0.005  | 1.02 | 1.01 | 1.00 | 0.98 | 0.97 |
| 50.0 | 0.0125 | 0.99 | 0.99 | 1.00 | 1.02 | 1.04 |
|  | 0.032  | 0.91 | 0.96 | 1.00 | 1.01 | 1.01 |
|  | 0.10   | 1.75 | 1.31 | 1.00 | 0.78 | 0.62 |

式(7.27)的结果如图7.22所示，随波长（m）和频率（GHz）变化。0.015 m处突变为1的情况不够真实，但在更短波长下，实际修正小于$\pm 10\%$，不需要精确建模。

图7.23比较了高、低降雨率下不同温度的影响。可见，仅微波和较低雷达波段受温度变化影响较大，但在L波段时系数可增加或减少一倍，在S波段时可变化约1.6倍。降雨区域内温度剖面的不确定性使得在X波段及以下频率难以精确估算损耗，但最大的百分比误差出现在衰减较低的地方，因此对距离计算造成的误差是适度的。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-266.jpg?height=487&width=1159&top_left_y=272&top_left_x=164){width="400"}  
图7.22 雨衰减的温度修正因子，随波长和频率的变化。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-266.jpg?height=584&width=988&top_left_y=878&top_left_x=254){width="400"}  
图7.23 雨衰减系数在$T=273 \ \mathrm{K}, 291 \ \mathrm{K}$和313 K条件下的比较。

---

### 7.3.3 降雨率统计

遇到特定雨衰减的概率取决于雷达运行的气候类型。图7.24显示了四种气候中降雨率超过某一值的时间百分比和对应的年小时数。以温带大陆性气候为例，“中等”降雨率$3 \ \mathrm{mm}/\mathrm{h}$大约占1\%的时间，即每年约90小时；“大雨”$16 \ \mathrm{mm}/\mathrm{h}$的概率约为0.2\%，对应每年18小时。是否需要在距离计算中考虑这些衰减水平取决于雷达业务的可靠性需求。例如，对于繁忙机场的监视雷达来说，每年18小时的显著探测距离下降可能是不可接受的，而对其他雷达则可能可以接受。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-267.jpg?height=886&width=830&top_left_y=272&top_left_x=333){width="400"}  
图7.24 四种气候下的降雨率出现情况 [改编自18, p. 16-11, Figure 16-8]。

更详细的降雨统计可见于Crane [19]撰写的专著，旨在描述通信链路上的雨衰减问题。他提供的数据包括以$0.001\%$和$1.0\%$概率观测到的降雨率所对应的雨元最大高度。在纬度$\pm 40^\circ$之间，这些高度分别为$4-5.5 \ \mathrm{km}$和$2.7-4.6 \ \mathrm{km}$。Nathanson [15, p. 223]给出了一张降雨率与高度的关系图，最大高度接近$9 \ \mathrm{km}$。他认为，在许多情况下，采用均匀降雨率到$4 \ \mathrm{km}$高度的模型已足够。另一方面，也有观测表明，在雷暴云中存在降雨率超过$250 \ \mathrm{mm}/\mathrm{h}$的反射率，其由接近12 km高度的上升气流支撑，而地面并未降雨。

Nathanson指出：“在接近$20 \ \mathrm{mm}/\mathrm{h}$的降雨率下，防空、空管或多模式机载系统的设计是完全不同的。这也涉及敌方在这种环境下能否作战。军用和民用空中监视雷达通常会规定普遍的1–4 $\mathrm{mm}/\mathrm{h}$降雨，有时则是直径10–20 km范围内约$16 \ \mathrm{mm}/\mathrm{h}$的风暴。更强烈的风暴直径更小。” 他提出了一个近似关系式，转换为公制单位为：

$$
\begin{equation*}
d=41.7-23.7 \log r_{r} \tag{7.28}
\end{equation*}
$$

其中$d=$ 风暴直径（km），$r_{r}=$ 降雨率（$\mathrm{mm}/\mathrm{h}$）。

关于暴雨覆盖面积的数据较少。较高的降雨率在水平范围上更受限，强降雨单元的面积约$5 \ \mathrm{km}^2$。表7.4显示了大范围小雨和小范围强雨在X波段下的典型路径长度与衰减。路径长度和衰减对应的仰角条件保证路径在雨体内保持低于最大雨高。作为对比，表最后一行给出了空气的大气衰减。可见，在X波段下，大范围小雨在雨体内的衰减效应相对空气较小，而强降雨在较短路径内的衰减则增加了三倍以上。其他波段下的比较结果会有所不同。

当然，在考虑这里讨论的衰减时，还必须同时考虑雨杂波对探测距离的影响（见第9章）。

表7.4 典型雨暴在X波段下的路径长度与衰减

|  |  | 大范围小雨 | 小范围强雨 |
| :--- | :--- | :--- | :--- |
| 雨区面积 | $\mathrm{km}^{2}$ | 1,400 | 35 |
| 最大雨高 | km | 4 | 5 |
| 雨中路径长度 | km | 42 | 7 |
| 降雨率 | mm/h | 1.0 | 30 |
| 雨衰减系数 | dB/km | 0.02 | 1.6 |
| 雨衰减 | dB | 0.8 | 10.7 |
| 空气衰减系数 | dB/km | 0.027 | 0.027 |
| 空气衰减 | dB | 3.1 | 3.1 |


### 7.3.4 雪中的衰减

冻结状态下的水，其衰减系数远低于雨。Blake给出了一个由Gunn和East [12, p. 536]推导的公式[1, p. 221, Eq. (5.53)]，用于计算双程衰减，单位采用米（$\lambda$）：

$$
\begin{equation*}
k_{\alpha s}\left(r_{s}\right)=7.4 \times 10^{-11} \frac{r_{s}^{1.6}}{\lambda^{4}}+4.4 \times 10^{-5} \frac{r_{s}}{\lambda} \ (\mathrm{dB}/\mathrm{km}) \tag{7.29}
\end{equation*}
$$

其中，$r_{s}$为等效液态水含量（$\mathrm{mm}/\mathrm{h}$），$\lambda$为波长（m）。图7.25给出了式(7.29)在降雪率$r_{s}=0.32, 1.0, 3.2 \ \mathrm{mm}/\mathrm{h}$下的结果，并与$1 \ \mathrm{mm}/\mathrm{h}$的降雨情况对比。超过$3.2 \ \mathrm{mm}/\mathrm{h}$的降雪率较为罕见，但在空气温度达到273 K以下的窄层中，融雪会导致衰减系数急剧增大。在该层以上，可利用[11]中的数据修正式(7.29)中的常数$4.4 \times 10^{-5}$：

$$
\begin{equation*}
C_{T s}=\left[4.4-1.7(273-T)^{0.23}\right] \times 10^{-5}, \quad T<273 \tag{7.30}
\end{equation*}
$$

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-269.jpg?height=651&width=900&top_left_y=883&top_left_x=283){width="400"}  
图7.25 干雪的衰减系数随频率的变化，与小雨（虚线）对比。

最终结果为：

$$
\begin{equation*}
k_{\alpha s}\left(r_{s}\right)=7.4 \times 10^{-11} \frac{r_{s}^{1.6}}{\lambda^{4}}+\times 10^{-5}\left[4.4-1.7(273-T)^{0.23}\right] \frac{r_{s}}{\lambda} \ (\mathrm{dB}/\mathrm{km}) \tag{7.31}
\end{equation*}
$$

温度修正的作用是在温度显著低于273 K的区域，降低微波波段的雪衰减，如图7.25所示。

> ${ }^{6}$ 根据East的个人通信，$r_{s}^{1.6}$的系数在此基础上增加了$5.6 \%$。

---

### 7.3.5 云中的衰减

Goldstein提出的云衰减推导[11]至今仍被认为是权威结果，并被Gunn和East [12]证实。两者均基于Ryde [13, 14]的工作以及经典的Mie散射理论[20]。

小球形水滴的衰减由水的复介电常数$\varepsilon_{c}$计算，该常数由Debye公式[21]给出，作为波长的函数：

$$
\begin{equation*}
\varepsilon_{c}=\frac{\varepsilon_{0}-\varepsilon_{\infty}}{1+\frac{j \Delta \lambda}{\lambda}}+\varepsilon \tag{7.32}
\end{equation*}
$$

其中$\varepsilon_{0}, \varepsilon_{\infty}$和$\Delta \lambda$均为温度的函数，如图7.26所示。云的双程衰减系数由水密度$M$（$\mathrm{g}/\mathrm{m}^3$）和$\varepsilon_{c}$给出：

$$
\begin{equation*}
k_{\alpha c}=0.052 \pi \frac{M}{\lambda} \operatorname{Im}(K) \tag{7.33}
\end{equation*}
$$

其中$K=\left(\varepsilon_{c}-1\right)/\left(\varepsilon_{c}+2\right)$，该参数在[12]中使用。图7.27展示了归一化衰减系数$k_{\alpha c}/M$随频率的变化，分别对应$T=273, 293, 313 \ \mathrm{K}$。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-270.jpg?height=434&width=1109&top_left_y=1513&top_left_x=166){width="400"}  
图7.26 Debye公式的温度相关参数$\varepsilon_{0}$和$\Delta \lambda$；对所有$T$，$\varepsilon_{\infty}=5.5$。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-271.jpg?height=803&width=1005&top_left_y=325&top_left_x=250){width="400"}  
图7.27 云衰减系数$k_{\alpha c}/M$随频率的变化，三种温度条件下。

当$f<60 \ \mathrm{GHz}$时，$\operatorname{Im}(-K)$的近似为：

$$
\begin{equation*}
\operatorname{Im}(-K)=\frac{0.0011}{\lambda} \exp \left[-0.067(T-273)^{0.8}\right], \quad \lambda>0.005 \ \mathrm{m} \tag{7.34}
\end{equation*}
$$

进而得到：

$$
\begin{equation*}
k_{\alpha c}=1.64 \times 10^{-4} \frac{M}{\lambda^{2}} \exp \left[-0.067(T-273)^{0.8}\right], \quad \lambda>0.005 \ \mathrm{m} \tag{7.35}
\end{equation*}
$$

与Goldstein的公式[11, p. 676, Eq. (41)]（适用于$T=291  \mathrm{K}$）对比，可得：

$$
k_{\alpha c}=\frac{9.76 \times 10^{-5} M}{\lambda^{2}}  \quad {[双程，T=291 \ \mathrm{K}, \text{Goldstein公式}]}  \tag{7.36}
$$

$$
k_{\alpha c}=\frac{9.15 \times 10^{-5} M}{\lambda^{2}}  \quad  {[双程，T=291 \ \mathrm{K}, \text{式(7.35)}]} \tag{7.37}
$$

这代表云衰减的分贝值存在约$5\%$的差异，处于云的温度和含水量模型精度范围之内。


### 7.3.6 天气对系统噪声温度的影响

第6.3.2节中的天空温度计算仅考虑了晴空大气的衰减。任何由降水或云层引起的附加衰减，都会导致系统噪声温度的增加。总噪声温度的计算方法，是将来自式(7.24)、(7.29)或(7.35)的一程天气衰减系数$k_{w 1}(f_{0}, h)$加入对流层衰减项，并代入式(6.21)中的积分：

$$
\begin{align*}
T_{\alpha}\left(f_{0}, \theta\right)= & 0.2303 \int_{0}^{\infty}\left\{k_{\alpha 1}\left[f_{0}, h(r, \theta)\right]+k_{w 1}\left[f_{0}, h(r, \theta)\right]\right\} T_{tr}\left[f_{0}, h(r, \theta)\right] \times \\
& \times \exp \left(-0.2303 \int_{0}^{r}\left\{k_{\alpha 1}\left[f_{0}, h(r', \theta)\right]+k_{w 1}\left[f_{0}, h(r', \theta)\right]\right\} d r'\right) d r \tag{7.38}
\end{align*}
$$

在许多情况下，天气的物理温度$T_{pw}$可近似认为是常数，此时噪声温度分量可表示为在对流层温度基础上附加一项天气分量：

$$
\begin{equation*}
T_{w} \approx T_{pw}\left(1-\frac{1}{L_{w}}\right)=T_{pw}\left[1-\exp \left(-0.2303 k_{w 1} \Delta_{w}\right)\right] \tag{7.39}
\end{equation*}
$$

其中：

- $L_{w}=\exp \left(0.2303 k_{w 1} \Delta_{w}\right)$ ：由天气引起的损耗（比值）；  
- $\Delta_{w}$ ：天气区域的径向深度（km）。  

例如，当$k_{w 1}\Delta_{w}=1 \ \mathrm{dB}$，且天气粒子的温度$T_{w}=290 \ \mathrm{K}$时，会对系统噪声温度贡献约$60 \ \mathrm{K}$。短程晴空衰减会减小$T_{w}$，而远离天气区的衰减则会减小晴空温度分量，这在式(7.38)的第二重积分中有所体现。

---

## 7.4 对流层透镜损耗

如图7.28所示，从雷达天线出射的射线在对流层中会发生向下折射。以仰角$\theta_{0}$从地面发射的一条射线，到达目标点$(R, h_{t})$时的真实仰角为$\theta_{t}$。该路径上的时间延迟比真空路径多$\delta_{t}=(R_{d}-R)/c$，其中$R_{d}$由射线追迹公式(7.8)给出。射线路径的弯曲在$\theta_{0}=0$时最大，随后随着$\theta_{0}$增加而单调减小。其结果是，地面辐射在角度区间$\theta_{0}$至$\theta_{0}+\Delta_{0}$内的能量，被分布到目标处稍大的角度区间$\theta_{t}$至$\theta_{t}+\Delta_{t}$，导致能量密度低于真空传播预测值。该效应由Weil [22]描述，他给出了目标仰角与距离的双程损耗曲线。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-273.jpg?height=409&width=1146&top_left_y=270&top_left_x=175){width="400"}  
图7.28 射线穿过对流层的几何关系。

损耗可以通过不同方法计算，其中一种直接方法是将单程透镜损耗表示为出射射线最终仰角$\theta_{t}$对发射仰角$\theta_{0}$的导数：

$$
\begin{equation*}
L_{\text{lens1}}(\theta_{0})=\lim \left[\frac{\Delta \theta_{t}(R, h)}{\Delta \theta_{0}(R, h)}\right]_{\Delta \theta_{0} \rightarrow 0} \tag{7.40}
\end{equation*}
$$

其中$\theta_{0}$为天线发射角，$\Delta \theta_{0}$为该角度的微小增量，$\Delta \theta_{t}$为对应的目标处到达仰角的变化量。由于式(7.8)无法直接反演以计算式(7.40)所需的导数，需采用求根算法求解$\theta_{t}$，并在发射角$\theta_{0}$的微小变化$\Delta \theta_{0}$范围内近似其导数。结果如图7.29所示，为双程透镜损耗$L_{\text{lens2}}$（dB）。对应的透镜因子用于式(1.25)：

$$
\begin{equation*}
F_{\text{lens}}=\frac{1}{\sqrt{L_{\text{lens1}}}} \tag{7.41}
\end{equation*}
$$

这些结果与[22]及[1, p. 192, Figure 5.7]的数据高度一致。不过后者仅覆盖至750 km的范围，且在接近零角度时未能显示继续增加的损耗，而这一趋势在$R>2000 \ \mathrm{km}$时达到最大。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-274.jpg?height=588&width=882&top_left_y=265&top_left_x=318){width="400"}  
图7.29 不同波束仰角下的双程对流层透镜损耗随距离的变化。

在图7.28中，最小绘制仰角$0.03^{\circ}$的曲线在远距离偏离平滑趋势，这是因为在$\theta<0.1^{\circ}$时，由射线追迹式(7.8)求解式(7.40)的导数较为困难。然而，折射率剖面中通常存在的变化，会在该区域掩盖这些计算误差。

[1]中的结论，即回波的往返路径透镜损耗具有互易性，是正确的。因为折射过程是线性的，相当于天线波束宽度增加，射线穿过对流层并返回雷达时损耗相同。

需要强调的是，透镜损耗并非对流层能量耗散引起，因此与其他大气损耗不同，它不会增加系统噪声温度。因此，在雷达方程中，它作为与距离相关的响应因子$F_{\text{lens}}$单独列出，以与对流层吸收$L_{\alpha}$区分开来。


## 7.5 电离层效应

电离层对雷达作用距离性能有两方面影响：其一是引入波极化的法拉第旋转，使接收极化与发射极化不同；其二是导致信号频谱的不同分量出现色散，从而展宽脉冲并降低其幅度。这两种效应均随穿过电离层不同层次的路径及其电子密度而变化。法拉第旋转还依赖于磁场强度和方向相对于射线方向的关系。

---

### 7.5.1 电离层中的射线路径几何

射线穿过电离层层的几何关系如图7.30所示。射线以仰角$\theta$自地球表面发射，在高度$h_{1}$进入该层，在高度$h_{2}$出该层。该层最大电子密度出现在高度$h_{m}$，此处射线相对于局部水平线的仰角为$\theta^{\prime}$。射线路径长度为$\Delta R$：

$$
\begin{equation*}
\Delta R=\left(h_{2}-h_{1}\right) \sec \theta^{\prime} \tag{7.42}
\end{equation*}
$$

地球磁场$H$相对于局部水平有一定夹角，与射线方向相差$\Delta \theta$。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-275.jpg?height=450&width=1152&top_left_y=990&top_left_x=180){width="400"}  
图7.30 射线穿过电离层的几何关系。

---

### 7.5.2 电离层结构

白天电离层由三层组成，分别为E层、$F_{1}$层和$F_{2}$层（低层的弱D层对雷达运行无关紧要）。夜间，E层消失，$F_{1}$与$F_{2}$层合并为单一的F层。电离层的电子密度$N_{e}$最早由Sydney Chapman于1927年提出，其方程被Millman [23]用于推导电离层对雷达传输的影响：

$$
\begin{equation*}
N_{e}=N_{m} \exp \left[\tfrac{1}{2}\left(1-Z-\exp Z\right)\right] \tag{7.43}
\end{equation*}
$$

其中：

- $N_{m}=$ 最大电子密度（电子数/$\mathrm{m}^3$）；  
- $Z=(h-h_{m})/h_{0}=$ 归一化高度；  
- $h=$ 高度（m）；  
- $h_{m}=$ 最大密度对应高度（m）；  
- $h_{0}=$ 尺度高度（m）。  

表7.5给出了典型昼夜条件下的$N_{m}, h_{m}, h_{0}$数值，总密度随高度的变化见图7.31。${ }^{7}$

> ${ }^{7}$ 许多文献使用电子密度的单位为每$\mathrm{cm}^3$，高度单位为cm。为避免在电离层效应计算中出现单位换算误差，本书使用电子数/$\mathrm{m}^3$和高度单位m。

表7.5 电离层层次的Chapman参数

| 层 | $N_{m} (\mathrm{m}^{-3})$ | $h_{m} (\mathrm{km})$ | $h_{0} (\mathrm{km})$ |
| :--- | :--- | :--- | :--- |
| 白天E层 | $1.5 \times 10^{11}$ | 100 | 10 |
| 白天$F_{1}$层 | $3.0 \times 10^{11}$ | 200 | 40 |
| 白天$F_{2}$层 | $1.25 \times 10^{12}$ | 300 | 50 |
| 夜间E层 | $8 \times 10^{9}$ | 120 | 10 |
| 夜间F层 | $4 \times 10^{11}$ | 300 | 45 |

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-276.jpg?height=726&width=968&top_left_y=1065&top_left_x=252){width="400"}  
图7.31 典型电离层电子密度$N_{e}$：白天（实线）、夜间（虚线）。

电子密度可随太阳活动和纬度上下浮动约两倍，但图7.31所示数值可用于计算电离层对雷达信号的典型影响。

---

### 7.5.3 总电子含量

电离层对雷达信号的影响与单位面积内的总电子数$N_{t}$成正比，该面积为1 $\mathrm{cm}^2$，从雷达到目标延伸：

$$
\begin{equation*}
N_{t}=\int_{0}^{\infty} F(h, \theta) N_{e} d h \quad (\text{电子数}/\mathrm{m}^{2}) \tag{7.44}
\end{equation*}
$$

其中：

$$
\begin{equation*}
F(h, \theta)=\frac{a_{e}+h}{\sqrt{(a_{e}+h)^{2}-(a_{e}\cos\theta)^{2}}} \tag{7.45}
\end{equation*}
$$

$a_{e}$为地球半径（m）。函数$F$为局部射线仰角的余割，表示局部高度层厚度$dh$对应的路径长度比例，从而可用高度积分代替路径积分。积分上限取$10^{6}$ m足以涵盖电离层影响，因为更高处电子密度极低可忽略。

图7.32显示了典型昼夜条件下总电子数随目标高度的变化。高度低于100 km的目标信号几乎不受电离层影响，后续计算的法拉第旋转和色散效应也将证实这一点。

---

### 7.5.4 法拉第旋转

Millman给出了雷达与目标间双程路径的法拉第旋转角$\phi(h)$公式 [24, p. 362, Eq. (1-138)]：

$$
\begin{equation*}
\phi(h)=\frac{e^{3}}{\pi m^{2} c^{2} f^{2}} \int_{h_{1}}^{h_{2}} F(h) H(h) \cos \theta N_{e}(h) d h \quad (\mathrm{rad}) \tag{7.46}
\end{equation*}
$$

其中：

- $e=4.8 \times 10^{-10}$ ：电子电荷（esu）；  
- $m=9.1 \times 10^{-28}$ ：电子质量（g）；  
- $c=3 \times 10^{10}$ ：光速（cm/s）；  
- $f$ ：频率（Hz）；  
- $F(h)$ ：式(7.45)定义的因子；  
- $H$ ：地磁场强度（高斯）；  
- $\theta$ ：射线与磁场间夹角；  
- $N_{e}(h)$ ：电子密度（电子数/$\mathrm{cm}^3$）；  
- $h_{1}, h_{2}$ ：有效电子密度的高度范围（cm）。  

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-278.jpg?height=739&width=1149&top_left_y=274&top_left_x=167){width="400"}  
图7.32 典型昼夜电离层的总电子数，仰角$0^{\circ}$与$90^{\circ}$条件下。

地磁场随高度变化为：

$$
\begin{equation*}
H(h)=H_{0}\left(\frac{a_{e}}{a_{e}+h}\right)^{3} \tag{7.47}
\end{equation*}
$$

其中$H_{0} \approx 0.65$ 高斯，为中纬度地区海平面值。将单位换算为$m, \ m/s, \ \mathrm{m}^{-3}$时，式(7.46)中的常数为4.73。虽然$\theta$随雷达指向而变，但最大法拉第旋转角可取$\theta=0$时：

$$
\begin{align*}
\phi_{\max}(h) & =\frac{4.73}{f^{2}} \int_{0}^{\infty} F(h) H(h) N_{e}(h) d h  \tag{7.48}\\
& \approx \frac{2.7}{f^{2}} N_{t}(h) \quad (\mathrm{rad})
\end{align*}
$$

图7.33给出了$f=100 \ \mathrm{MHz}$时，典型昼夜条件下仰角$0^{\circ}$与$90^{\circ}$时的$\phi_{\max}(h)$随目标高度的变化。图7.34展示了高度超过600 km时，法拉第旋转随频率的变化。雷达采用线极化时，平均损耗为：

$$
\begin{equation*}
L_{\mathrm{Far}}=\frac{1}{\phi_{\max}} \int_{0}^{\phi_{\max}} \cos^{2}\phi \ d\phi \tag{7.49}
\end{equation*}
$$

该损耗如图7.35所示，对应目标高度$h=300 \ \mathrm{km}$。当旋转次数超过20次平均时，损耗为3 dB；当旋转次数较少时，损耗呈振荡，在$0^{\circ}-130^{\circ}$范围平均时接近4 dB。当最大旋转角减小至低于$20^{\circ}$时，损耗趋近于0 dB。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-279.jpg?height=715&width=1122&top_left_y=1195&top_left_x=175){width="400"}  
图7.33 $f=100 \ \mathrm{MHz}$下典型昼夜条件的法拉第旋转角，仰角$0^{\circ}$与$90^{\circ}$，随高度变化。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-280.jpg?height=610&width=1124&top_left_y=276&top_left_x=175){width="400"}  
图7.34 高度$h \geq 600 \ \mathrm{km}$时，典型昼夜条件的法拉第旋转角，随频率变化。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-280.jpg?height=614&width=1021&top_left_y=1010&top_left_x=239){width="400"}  
图7.35 法拉第旋转损耗随频率变化。

白天电离层在零度仰角下，图7.34表明$f \geq 3 \ \mathrm{GHz}$时旋转角小于$20^{\circ}$。因此在L波段（1.3 GHz）及以下，对高度超过250 km的目标，应用雷达方程时必须考虑法拉第旋转。若采用圆极化，旋转仅改变接收信号的相位而不会造成损耗。若采用线极化，可使用双极化接收天线：要么自适应组合两路极化跟随旋转信号，要么非相干叠加两通道接收机输出，此时仅引入微小积分损失。

由于法拉第旋转角难以精确预测，其对探测概率的影响必须作为统计量处理，并依据$P_{d}$计算相应的损耗（见图10.5），详见第10.2.1节。


### 7.5.5 信号频谱展宽引起的色散

---

#### 7.5.5.1 电离层中的折射率

雷达方程中电离层损耗的第二个来源是信号频谱展宽引起的色散，它会导致接收脉冲的畸变。电离层的折射率$N_{i}$是电子密度的函数：

$$
\begin{align*}
N_{i}\left(f_{0}, h\right) & =\left(n_{i}-1\right) \times 10^{6}=\left(\sqrt{1-\frac{N_{e}(h) e^{2}}{\pi m f_{0}^{2}}}-1\right) \times 10^{6}  \tag{7.50}\\
& \approx-40.3 \times 10^{6} \frac{N_{e}(h)}{f_{0}^{2}}(\mathrm{ppm}), \quad \text{假设 } N_{i} \ll 10^{6}
\end{align*}
$$

其中：

- $f_{0}=$ 载波频率（Hz）；  
- $N_{e}(h)=$ 高度$h$处的电子密度（电子数/$\mathrm{m}^3$）；  
- $h=$ 高度。  

---

#### 7.5.5.2 穿过电离层的时间延迟

来自目标的回波信号比在对流层以上的自由空间路径具有额外延迟$\Delta_{t}$，其随频率而变，对于给定的总电子含量$N_{t}$：

$$
\begin{align*}
\Delta_{t} & =\frac{-2 \times 10^{-6}}{c} \int_{0}^{h} F\left(h^{\prime}, \theta\right) N_{i}\left(f_{0}, h^{\prime}\right) d h^{\prime}  \quad(\mathrm{s})\\
& =80.6 \frac{N_{t}}{c f_{0}^{2}}(\mathrm{~s})=0.2688 \frac{N_{t}}{f_{0}^{2}}\quad(\mu s) \tag{7.51}
\end{align*}
$$

其中：  
- $N_{t}=$ 总电子含量（电子数/$\mathrm{m}^2$，由(7.44)给出）；  
- $c=$ 光速（m/s）。  

由于电离层群速度$v_{g}=n_{i}c$，延迟为正。图7.36显示了延迟随比值$N_{t}/f_{0}^{2}$的变化。  

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-282.jpg?height=666&width=862&top_left_y=602&top_left_x=312){width="400"}  
图7.36 电离层时间延迟，随比值$N_{t}/f_{0}^{2}$变化，$N_{t}$以$\mathrm{m}^{-2}$计，$f_{0}$以Hz计。

例如，当载波频率$f_{0}=100 \ \mathrm{MHz}$，目标位于典型白天电离层以外，零度仰角时$N_{t}=10^{18}/\mathrm{m}^{2}$，信号返回时延长$28 \ \mu s$，相当于比真实目标远4.2 km。  

额外的距离误差对雷达方程影响不大，但穿过电离层的不同频率分量会产生差分延迟。若$f_{0}$为载波频率，$f$为相对载波频率的频偏，则差分延迟$\delta_{t}$为：

$$
\begin{align*}
\delta_{t}\left(f_{0}, f\right) & =\left[\left(\frac{f_{0}}{f_{0}+f}\right)^{2}-1\right] \Delta_{t} \approx \frac{-2 f}{f_{0}}\left(1-\frac{3}{2} \frac{f}{f_{0}}\right) \Delta_{t}  \tag{7.52}\\
& =-5.377 \times 10^{-7} N_{t} \frac{f}{f_{0}^{3}}\left(1-\frac{3}{2} \frac{f}{f_{0}}\right)
\end{align*}
$$

其中$\delta_{t}$为差分延迟（s），$f$为相对于载波的频偏（Hz）。  

以$f_{0}=100 \ \mathrm{MHz}$为例，$\Delta_{t}=28 \ \mu s$。若波形带宽$B=1 \ \mathrm{MHz}$，两端$\pm 0.5 \ \mathrm{MHz}$频分量的延迟与中心分量相差$\pm 0.28 \ \mu s$，相当于相位偏移$\pm 28$个周期（$\pm 176 \ \mathrm{rad}$）。

---

#### 7.5.5.3 电离层对接收脉冲的影响

频谱色散导致回波信号频谱上的差分相移$\delta_{\phi}$，由下式给出：

$$
\begin{equation*}
\delta_{\phi}\left(f, f_{0}\right)=2 \pi\left(f_{0}+f\right) \delta_{t}\left(f, f_{0}\right)=-2 \pi\left(f_{0}+f\right) \frac{2 f}{f_{0}}\left(1-\tfrac{3}{2} \tfrac{f}{f_{0}}\right) \Delta_{t} \tag{7.53}
\end{equation*}
$$

设发射信号频谱为$A(f)$，则接收频谱为：

$$
\begin{align*}
A_{r}(f) & =A(f) \exp \left[j\left[\phi_{0}+\delta_{\phi}\left(f, f_{0}\right)\right]\right] \\
& =A(f) \exp \left\{-j 2 \pi\left(f_{0}+f\right)\left[1-\frac{2 f}{f_{0}}\left(1-\frac{3}{2} \frac{f}{f_{0}}\right)\right] \Delta_{t}\right\} \tag{7.54}
\end{align*}
$$

其中$\phi_{0}=-2 \pi (f_{0}+f)\Delta_{t}$为载波相移。  

若滤波器响应为$H(f)$，则目标回波输出为：

$$
\begin{equation*}
\chi\left(t_{d}\right)=\int_{-\infty}^{\infty} A_{r}(f) H(f) \exp \left(-j 2 \pi f t_{d}\right) d f \tag{7.55}
\end{equation*}
$$

若无电离层影响，则$\chi(t_{d})$为匹配滤波输出。  

图7.37与图7.38展示了电离层色散对矩形脉冲的展宽与幅度降低效应。以$B_{n}\tau=1$条件下的矩形脉冲$\tau=0.1 \ \mu s$为例，载波频率从10 GHz降至145 MHz时，延迟增加至$4 \ \mu s$，差分延迟$\delta_{t}=0.5 \ \mu s$，脉宽展宽至$0.5 \ \mu s$，幅度下降至原电压的一半以下。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-284.jpg?height=651&width=1120&top_left_y=1162&top_left_x=177){width="400"}  
图7.37 矩形$0.1 \ \mu s$脉冲穿过电离层及匹配滤波器后的波形。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-285.jpg?height=581&width=977&top_left_y=276&top_left_x=250){width="400"}  
图7.38 去除时间延迟后的波形细节。

![](https://cdn.mathpix.com/cropped/2025_08_27_c6b806c2766f51c39566g-285.jpg?height=636&width=1126&top_left_y=953&top_left_x=177){width="400"}  
图7.39 电离层色散损耗随$\delta_{t}B_{n}$变化。

由于滤波器响应无法校正带宽内的相移，导致信号幅度下降（见图7.39）。Brookner [25]讨论了高斯脉冲的展宽与损耗，并指出：在白天强电离层条件下、低仰角传输时，信号“可用带宽”约为1 MHz（$f_{0}=100 \ \mathrm{MHz}$），与图7.37中$\delta_{t}B_{n}=0.5$和图7.38中1.3 dB损耗一致。  

对于脉冲压缩及其他波形，只需将发射频谱$A(f)$和匹配滤波器$H(f)$代入(7.55)，即可得到接收回波波形。其损耗随$\delta_{t}B_{n}$的变化规律与图7.37曲线相近。

---

## 7.6 大气效应总结

对流层折射会导致目标位置测量误差，但对雷达方程没有直接影响。其影响在于射线路径位于几何直线之上，使得路径上的能量密度和衰减小于直线路径。因而，衰减计算必须结合适当的对流层射线追踪模型。

大气气体的衰减系数可由Van Vleck二战时期发展出的理论求得，后来扩展至毫米波段。Blake [1]给出了相关方程并绘制了结果。本书在此按距离绘制相同结果，并提出了另一种水汽修正方法，精度在大气模型误差范围内。

降水与云层会进一步增加清空空气的衰减。Blake模型在此被扩展以考虑温度效应。温度的正常变化可使雨衰减系数变化范围达3:1（相对于291 K时的值在0.6到1.8倍之间）。尽管文献对此差异较大，这里提出了一个近似模型用于修正。

在天气存在时，雷达性能计算需考虑衰减对天空噪声温度的影响，即在第6章公式的基础上加入天气衰减项。随着接收机噪声温度降低至接近甚至低于晴空温度，这一修正愈加重要。

电离层对雷达方程的影响主要体现在S波段以下对F层及更远目标：法拉第旋转会导致线极化雷达产生损耗，而频谱展宽则限制了可支持的信号带宽，当带宽超过色散所决定的极限时，回波信号功率迅速下降。

在VHF与UHF雷达中，电离层效应尤为重要，尤其是在探测和跟踪弹道导弹时，即使是L波段雷达也必须考虑这些效应。


## References

[1] Blake, L. V., Radar Range-Performance Analysis, Lexington, MA: D. C. Heath, 1980; Dedham, MA: Artech House, 1986.

[2] IEEE Standard 100, The Authoritative Dictionary of IEEE Standards Terms, 7th ed., New York: IEEE Press, 2000.

[3] Bean, B. R., and Dutton, E. J., Radio Meteorology, National Bureau of Standards Monograph 92, March 1, 1966, Washington, DC: U. S. Gov't. Printing Office.

[4] Air Force Geophysics Laboratory, Handbook of Geophysics, 1985, Document No. ADA 167,000, Springfield, VA: National Technical Information Service.

[5] U.S. Standard Atmosphere, 1976, U.S. Government Printing Office, Washington, D.C., 1976.

[6] Bean, B. R., and G. D Thayer, "Models of the Atmospheric Radio Refractive Index," Proc. IEEE, Vol. 47, No. 5, May 1959, pp. 740-775.

[7] Van Vleck, J. H., "Atmospheric Attenuation," Chapter 8, Sections 8.1-8.3 in Propagation of Short Radio Waves, (D. E. Kerr, ed.), Vol. 13 in MIT Radiation Laboratory Series, New York: McGraw-Hill, 1951. Reprinted, (CR ROM edition), Norwood, MA: Artech House, 1999.

[8] Meeks, M. L., and A. E. Lilley, "The Microwave Spectrum of Oxygen in the Earth's Atmosphere," J. Geophys. Res., Vol. 68, No. 6, March 15, 1963, pp. 1603-1703.

[9] Brussaard, G., and P. A. Watson, Atmospheric Modelling and Millimetre Wave Propagation, London: Chapman and Hall, 1995

[10] Kirby, R. C., and K. A. Hughes, "Propagation Over the Earth Through the Nonionized Atmosphere," Section 22.11 in Electronics Engineers' Handbook, 4th ed., (D. Christiansen, ed. in chief), McGraw-Hill, 1997.

[11] Goldstein, H., "Attenuation by Condensed Water," Sections 8.6-8.9 in Propagation of Short Radio Waves, (D. E. Kerr, ed.), Vol. 13 in MIT Radiation Laboratory Series, New York: McGraw-Hill, 1951. Reprinted, (CR ROM edition), Norwood, MA: Artech House, 1999.

[12] Gunn, K. L. S., and T. W. R. East, "The Microwave Properties of Precipitation Particles," Quart. J. Royal Meteorol. Soc., Vol. 80, October 1954, pp. 522-545.

[13] Ryde, J. W., and D. Ryde, "Attenuation of Centimetre and Millimetre Waves by Rain, Hail, Fogs and Clouds," GEC Report No. 8670, May 1945.

[14] Ryde, J. W., 1946: "The Attenuation and Radar Echoes Produced at Centimetric Wavelengths by Various Meteorological Phenomena," Meteorological Factors in Radio Wave Propagation, , London: Physical Society, pp. 169-188.

[15] Nathanson, F. E., J. P. Reilly, and M. N. Cohen, Radar Design Principles, Signal Processing and the Environment, (2nd ed.), New York: McGraw Hill, 1991.

[16] Medhurst, R. G., "Rainfall Attenuation of Centimeter Waves: Comparison of Theory and Measurement," IEEE Trams. on Antennas and Propagation, Vol. AP-13, No. 4, July 1965, pp. 550564.

[17] Burrows, C. R., and S. S. Atwood, Radio Wave Propagation, New York: Academic Press, 1949.

[18] Jursa, A. S. (ed.), Handbook of Geophysics and the Space Environment, Air Force Geophysics Laboratory, 1985.

[19] Crane, R. K., Electromagnetic Wave Propagation Through Rain, New York: John Wiley, 1996.

[20] Mie, G., "Contributions to the Optics of Suspended Media, Specifically Colloidal Metal Suspensions," (in German), Ann. Phys., 1908, pp. 377-445.

[21] Debye, P., Polar Molecules, New York: Chemical Catalog Co., 1929.

[22] Weil, T. A., Atmospheric Lens Effect: Another Loss for the Radar Range Equation," IEEE Transactions on Aerospace and Electronic Systems, Vol. AES-9, No. 1, January 1973, pp. 5154.

[23] Millman, G. H., "Atmospheric Effects on VHF and UHF Propagation," Proc. IRE, Vol. 46, No. 8, August 1958, pp. 1491-1501.

[24] Millman, G. H., "Atmospheric Effects on Radio Wave Propagation," Part V, Chapter 1, in Modern Radar, (R. S. Berkowitz, ed.), New York: John Wiley, 1965.

[25] Brookner, E., "Ionospheric Dispersion of Electromagnetic Pulses," IEEE Trans. on Antennas and Propagation, Vol. AP-21, No. 5, May 1973, pp. 402-405.

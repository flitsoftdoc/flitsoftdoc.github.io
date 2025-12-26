# ITU－R P.528－5  航空移动和无线电导航业务的传播预测

（09/2021）

**使用VHF、UHF和SHF频段的航空移动和无线电导航业务的传播预测方法**

P 系列 无线电波传播

## 前言

无线电通信部门的职责是确保卫星业务等所有无线电通信业务合理、平等、有效、经济地使用无线电频谱，不受频率范围限制地开展研究并在此基础上通过建议书。

无线电通信部门的规则和政策职能由世界或区域无线电通信大会以及无线电通信全会在研究组的支持下履行。

（ITU－R第203／3号课题）

（1978－1982－1986－2012－2019－2021年）


## 范围

本建议书推荐了一种用于预测航空业务在 100 MHz 至 30 GHz 频率范围内的基本传输损耗。它提供了分步计算的方法来计算基本传输损耗。此方法所需的唯一数据是天线之间的距离、高于平均海平面的天线高度、频率、极化和时间百分比。

本建议书也给出了接收机在至少 $95 \%$ 的时间内超出的预期保护比或有用一无用信号比 $R(95)$ 的计算。对于有用信号和无用信号，此计算都需要以下附加数据：发射功率、发射天线增益和接收天线增益。

国际电联无线电通信全会，
考虑到

a）有必要为VHF、UHF和SHF频段的无线电业务的规划工程师提供指导；

b）附件2中给出的传播模型基于大量的实验数据（参见附件1）；

c）航空业务经常提供生命安全功能，因此需要比许多其他业务标准更高的可用度；

d）应采用 $95 \%$ 的时间可用性来获得更加可靠的服务，

**建议**

1.  应使用本建议书中的集成软件为航空业务中可能遇到的终端高度、频率和时间百分比生成基本传输损耗值和曲线；

2. 下列注释应被视为本建议书的一部分。

注 1 －必须强调，这些曲线基于主要从大陆性温带气候获得的数据。

注 2 －该方法给出了基本传输损耗，即理想的无损各向同性天线之间的损耗。在地面站或设施的地面反射多径已经通过使用平衡或定向垂直辐射方向图得到缓解的情况下，分析中应包括合适的天线辐射方向图。

## 附件1  模型的开发与应用

传输损耗预测方法已成功开发，该方法可以确定在适合于航空业务的天线高度条件下，时间百分比从 $1 \%$ 到 $99 \%$ 的时间内的基本传输损耗。这些方法基于大量的实验数据，并且已将预测结果与数据进行了综合的比较。在执行这些计算时，使用了一个具有年均全球参考大气的平滑地球（地形参数 $\Delta h=0$ ）。大气模型依赖于大气的指数水平分层，通过该分层进行射线追踪以解释由于折射率变化引起的射线弯曲。还使用了平均地面、各向同性天线和大陆性温带气候的长期功率衰减统计常数。尽管对于许多应用而言，这些参数可能被认为是合理的，也可能是最坏的情况，但如果条件与假设的条件大不相同，则应谨慎使用计算值。

除了无线电地平线＂附近＂的区域外，＂地平线内＂路径的基本传输损耗中值是通过将大气吸收引起的衰减（以分贝（dB）为单位）与对应于自由空间条件下的传输损耗相加而获得的。在无线电地平线＂附近＂的区域内，使用几何光学来计算传输损耗的值，以解决直射光线与从地球表面反射的光线之间的干扰。

双射线干扰模型并非专门用于视距计算，因为从中获得的短路径波瓣结构高度依赖于表面特性（粗糙度和介电常数）、大气条件（有效地球半径随时间变化）和天线特性（极化、方向和增益方向图）。此类曲线往往带有误导性，而不是有用的，因为波瓣的详细结构高度依赖于难以以足够精度确定的参数。然而，在可变性的计算中，对波瓣结构进行了统计考虑。

对于除 $50 \%$ 以外的时间可用性，用户生成的基本传输损耗 $L_{b}$ 并不总是随距离单调增加。出现这种情况是因为随着距离变化的可变性有时可克服中值电平变化。可变性包括每小时中值或长期功率衰减以及一小时以下或短期相位干扰衰减的影响。短期衰减中包含了表面反射和对流层多径。长期功率衰减统计数据基于在不同位置和链路几何形状的不同时间段内收集的大量经验数据。

基本传输损耗 $L_{b}$（5）值也可用于估算在 $95 \%(100 \%-5 \%)$ 的时间内超过无用干扰信号的 $L_{b}$值。可用 $L_{b}(50)$ 值估算中值（ $50 \%$ ）传播条件。也可采用 $L_{b}$（ 95 ）值估算在无干扰的 $95 \%$ 的时间内有用信号的服务范围。

接收机在至少 $95 \%$ 的时间内超出的预期保护比或有用一无用信号比 $R(95)$ 可采用下式进行估算：

$$
\begin{equation*}
R(95)=R(50)+Y_{R}(95) \tag{1}
\end{equation*}
$$

$$
\begin{equation*}
R(50)=\left[P_{t}+G_{t}+G_{r}-L_{b}(50)\right]_{\text {Wanted }}-\left[P_{t}+G_{t}+G_{r}-L_{b}(50)\right]_{\text {Unwanted }} \tag{2}
\end{equation*}
$$

以及

$$
\begin{equation*}
Y_{R}=-\sqrt{\left[L_{b}(95)-L_{b}(50)\right]_{\text {Wanted }}^{2}+\left[L_{b}(5)-L_{b}(50)\right]_{\text {Unwanted }}^{2}} \tag{3}
\end{equation*}
$$

式（2）中，$P_{t}$ 为发射功率且 $G_{t}$ 和 $G_{r}$ 为发射和接收天线的各向同性增益（单位为 dB ）。
式（3）中，当变量可确定时，可轻易地将天线增益等因素包括进来。上面提供的 $R(95)$ 公式中隐含了连续（ $100 \%$ ）或同时使用信道的情况，因此应单独考虑间歇性发射机工作的影响。

补充的压缩文件R－REC－P.528－5－202109－I！！ZIP－E.zip中提供了用于生成基本传输损耗值和曲线的集成软件，并附带文档。此外，该补充文件中还列出了一些选定的基本传输损耗值。

## 附件2  分步计算法

本附件使用的惯例是：描述低终端的变量用下标＂ 1 ＂表示（即，低终端高度 $h_{r 1}$ ），而高终端所使用的变量将采用下标＂ 2 ＂来表示（即高终端高度 $h_{r 2}$ ）。此外，某些变量的基本字母表示它们的出处：

- $d$ ，沿地球表面测量的大圆距离；
- $ r$ ，射线在空间两点之间经过的长度；
- $h$ ，在平均海平面以上测量的高度；
- $Z$ ，从地球中心测量的径向线。
  
在本建议书中，平均地球半径和平均海平面指的是同一参考表面。

### 1 引言

本附件描述了一种用于计算用户指定路径下基本传输损耗的分步计算方法，该方法用以下参数定义：

- 平均海平面以上的终端高度 $h_{r 1}$ 和 $h_{r 2}$ ，（单位为千米）， $0.0015 \leq h_{r 1,2} \leq 20$（1.5米至20000米）

- 频率 $f$ ，单位为 $\mathrm{MHz}, 100 \leq f \leq 30000 \mathrm{MHz}$- 时间百分比 $p, 1 \leq p \leq 99$
- 两个终端之间的大圆距离 $d$ ，单位为千米。
- 表明水平或垂直线性极化的参数 $T_{p o l}$ 。

对于某些航空场景，链路几何由低终端到高终端的仰角定义（而不是终端之间的大圆距离）。因此，提供以下一组方程将自由空间仰角 $\theta_{e l e v}$ 转换为大圆距离 $d$ 有助于使用本建议书。

$$
\begin{gather*}
\phi=\arcsin \left(\frac{6371+h_{r 1}}{6371+h_{r 2}} \cos \theta_{\text {elev }}\right) \quad(\mathrm{rad})  \tag{4}\\
\theta_{c a}=\frac{\pi}{2}-\theta_{\text {elev }}-\phi \quad(\mathrm{rad})  \tag{5}\\
d=6371 \theta_{c a} \quad(\mathrm{~km}) \tag{6}
\end{gather*}
$$

图1展示了本建议书所使用各种参数之间的关系。

图1 空地链路各参数之间的关系

![](https://cdn.mathpix.com/cropped/3f977a2b-e73a-4328-9662-ec1c3c93b10b-06.jpg?height=666&width=1605&top_left_y=543&top_left_x=232)

请注意，实际路径上的射线弯曲效果被夸大了。

### 2 假设和定义

ITU－R P.528建议书假设了下列各值：

$a_{0}$ ：地球的平均半径，设为 6371 千米
$a_{e}$ ：地球的有效半径，设为 9257 千米
$\varepsilon_{r}$ ：相对介电常数。设为 15 （对应于平均地面）
$\sigma$ ：电导率。设为 $0.005 \mathrm{~S} / \mathrm{m}$（对应于平均地面）。

### 3 分步计算法

第3－1步：计算与每个终端关联的参数。这要求针对低终端和高终端使用第4节中介绍的步骤。完成后，请继续执行第3－2步。第4节的方法应用如下：

给定：
  $h_{r 1,2}$ ：终端高于平均海平面的高度，单位为千米；
  $f$ ：频率，单位为 MHz ；
计算：
  $d_{r 1,2}$ ：到终端平滑地平线的大圆距离，单位为千米；
  $\theta_{r 1,2}$ ：来自终端平滑地球地平线的掠射射线的入射角，单位为弧度；
  $h_{e 1,2}$ ：终端的有效高度，单位为千米；
  $\Delta h_{1,2}$ ：终端高度校正项，单位为千米；
  $A_{a 1,2}$ ：从终端到其平滑地球地平线的射线的中位大气吸收损耗，单位为 dB ；
  $r_{1,2}$ ：从终端到其平滑地球地平线的射线路径长度，单位为千米。

第3－2步：确定两个终端之间的最大视距 $d_{M L}$ 。

$$
\begin{equation*}
d_{M L}=d_{r 1}+d_{r 2} \quad(\mathrm{~km}) \tag{7}
\end{equation*}
$$

第3－3步：平滑地球衍射在本建议书中线性建模。这可以通过以下方式完成：选择远大于 $d_{M L}$ 的两个距离，计算在这些距离处的平滑地球衍射损耗，并构建一条穿过这两个点的平滑地球衍射线。

  第3-3.1步：利用公式（7）计算远大于最大视距 $d_{M L}$ 的两个距离 $d_{3}$ 和 $d_{4}$ 。

$$
\begin{array}{ll}
d_{3}=d_{M L}+0.5\left(a_{e}^{2} / f\right)^{1 / 3} & (\mathrm{~km}) \\
d_{4}=d_{M L}+1.5\left(a_{e}^{2} / f\right)^{1 / 3} & (\mathrm{~km}) \tag{9}
\end{array}
$$

  第3-3.2步：计算距离 $d_{3}$ 和 $d_{4}$ 所对应的衍射损耗 $A_{d 3}$ 和 $A_{d 4}$ 。该计算需要两次使用第 10节中的方法－每个距离 $d_{3,4}$ 使用一次。计算完成后，进入第3-3.3步。第10节中的方法应用如下。

  给定：

    $d_{3,4}$ ：第10节所需的感兴趣的距离 $d_{0}$ ，单位为千米；

    $d_{r 1,2}$ ：到终端平滑地球地平线的大圆距离 $h_{1}$ 和 $h_{2}$ 的弧长，单位为千米，由上述第3－1步确定；

    $f$ ：频率，单位为 MHz ；

    $T_{p o l}$ ：表明水平或垂直线性极化的参数；

  计算：

    $A_{d 3,4}$ ：距离 $d_{3,4}$ 对应的平滑地球衍射损耗 $A_{d}$ ，单位为 dB ；

  第3-3.3步：利用两个距离，通过计算斜率 $M_{d}$ 和截距 $A_{d 0}$ ，创建平滑地球衍射直线及其各自的损耗 $A_{d 3}$ 和 $A_{d 4}$ 。

$$
\begin{gather*}
M_{d}=\left(A_{d 4}-A_{d 3}\right) /\left(d_{4}-d_{3}\right) \quad(\mathrm{dB} / \mathrm{km})  \tag{10}\\
A_{d 0}=A_{d 4}-M_{d} d_{4} \quad(\mathrm{~dB}) \tag{11}
\end{gather*}
$$

  第3-3.4步：计算距离 $d_{M L}$ 的衍射损耗。

$$
\begin{equation*}
A_{d M L}=M_{d} d_{M L}+A_{d 0} \quad(\mathrm{~dB} / \mathrm{km}) \tag{12}
\end{equation*}
$$

  第3-3.5步：计算距离 $d_{d}$（单位为千米），在这个距离上衍射模型预测有 0 dB 损耗。

$$
\begin{equation*}
d_{d}=-\left(A_{d 0} / M_{d}\right) \quad(\mathrm{km}) \tag{13}
\end{equation*}
$$

第3－4步：确定传播路径是在视距范围内还是在超视距内达到所需距离 $d$ 。如果 $d< d_{M L}$ ，则路径在视距范围内，转至第3－5步。否则，路径是超视距的，转至第3－6至3－12步。

第3－5步：视距内范围的计算请参照第6节的步骤。

第3－6步：在超视距范围内（ $d \geq d_{M L}$ ），随着距离的增加，传播路径将从平滑地球衍射开始，过渡到对流层散射。在物理上，平滑地球衍射和对流层散射的模型需要在过渡点处保持一致。物理一致性意味着在过渡点没有间断。由于由于对流层散射模型是非线性的，以下迭代过程确保了两个模型之间的过渡不会间断。

  第3-6.1步：令 $d^{\prime}$ 和 $d^{\prime \prime}$ 为迭代测试距离，将其初始值设置为：

$$
\begin{align*}
d^{\prime} & =d_{M L}+3 \quad(\mathrm{~km})  \tag{14}\\
d^{\prime \prime} & =d_{M L}+2 \quad(\mathrm{~km}) \tag{15}
\end{align*}
$$

  第3-6.2步：分别计算距离 $d^{\prime}$ 和 $d^{\prime \prime}$ 处的对流层散射损耗 $A_{s}^{\prime}$ 和 $A_{s}^{\prime \prime}$ 。这需要对距离 $d^{\prime}$ 和 $d^{\prime \prime}$使用第11节中介绍的步骤。第11节算法应用如下：

  给定：

    $d$ ：表示感兴趣的距离 $d^{\prime}$ 和 $d^{\prime \prime}$ ，单位为千米；

    
    $d_{r 1,2}$ ：到终端平滑地平线的大圆距离，单位为千米；
    
    $f$ ：频率，单位为 MHz ；
    
    $h_{e 1,2}$ ：终端的有效高度，单位为千米；
  
  计算：
    
    $A_{s}$ ：对应于 $d^{\prime}$ 和 $d^{\prime \prime}$ 的对流层散射损耗 $A_{s}$ ，单位为 dB 。

  第3-6.3步：通过第3－6.2步计算包含两个对流层散射点（ $d^{\prime}, A_{s}^{\prime}$ ）和（ $d^{\prime \prime}, A_{s}^{\prime \prime}$ ）的直线的斜率 $M_{s}$ 。这条直线在距离 $d^{\prime}$ 处与对流层散射模型近似相切。

$$
\begin{equation*}
M_{s}=\frac{A_{s}^{\prime}-A_{s}^{\prime \prime}}{d^{\prime}-d^{\prime \prime}} \quad(\mathrm{dB} / \mathrm{km}) \tag{16}
\end{equation*}
$$

  第3-6.4步：利用公式（10），比较斜率 $M_{s}$ 与衍射线的斜率 $M_{d}$ 。如果 $M_{s}>M_{d}$ ，则将 $d^{\prime}$ 和 $d^{\prime \prime}$ 均增加 1 千米，并返回第3－6.2步，然后继续迭代。否则，进入第3－6.5步。

  第3-6.5步：如果流层散射模型的结果小于 20 dB ，则无效。如果 $A_{s}^{\prime}$ 或 $A_{s}^{\prime \prime}$ 小于 20 dB ，则将 $d^{\prime}$ 和 $d^{\prime \prime}$ 均增加 1 千米，并返回第3－6.2步，然后继续迭代。否则，进入第3－6.6步。

  第3-6.6步：如果 $M_{s} \leq M_{d}$ ，则距离 $d^{\prime}$ 表示近似距离，其中包含两种情形之一：
  
  情形1：因为子模型的变化，衍射模型可确保在 $\geq d^{\prime}$ 的一定距离处与对流散层射模型相交，因此，超视距范围传播损耗在物理上是一致的。
  
  情形2：衍射线平行于对流层散射模型的切线。但是，超视距范围传播损耗可能在物理上不一致，即可能存在潜在的不连续性。
  
  要确定上述情况中的哪一种是正确的，请计算距离 $d^{\prime \prime}$ 处的衍射损耗。

$$
\begin{equation*}
A_{d}^{\prime \prime}=M_{d} d^{\prime \prime}+A_{d 0} \quad(\mathrm{~dB}) \tag{17}
\end{equation*}
$$

如果 $A_{s}^{\prime \prime} \geq A_{d}^{\prime \prime}$ ，则第3－6.6步中的情形1为真，计算转至第3－7步。否则，在确保超视距传播模型物理一致性的条件下，衍射线斜率需调整至与 $d^{\prime}$ 点正切。通过将衍射线的一端固定在 $\left(d_{M L}, A_{d_{M L}}\right)$ ，另一端固定在（ $d^{\prime \prime}, A_{s}^{\prime \prime}$ ），然后重新计算新的平滑地球衍射线来进行调整。

$$
\begin{align*}
& M_{d}=\frac{A_{s}^{\prime \prime}-A_{d_{M L}}}{d^{\prime \prime}-d_{M L}} \quad(\mathrm{~dB} / \mathrm{km})  \tag{18}\\
& A_{d 0}=A_{s}^{\prime}-M_{d} d^{\prime} \quad(\mathrm{dB}) \tag{19}
\end{align*}
$$

在这个点上，超视距范围是物理一致的。继续执行第3－7步。

第3－7步：计算 $A_{T}$ ，损耗不是自由空间损耗和大气吸收损耗所代表的。这是根据衍射和对流层散射模型确定的，包括在第3－6步中执行的任何调整。

  第3-7.1步：计算路径距离为 $d$ 时的预计平滑地球衍射损耗 $A_{d}$ 。

$$
\begin{equation*}
A_{d}=M_{d} d+A_{d 0} \quad(\mathrm{~dB}) \tag{20}
\end{equation*}
$$

  第3-7.2步：计算路径距离为 $d$ 时的对流层散射损耗 $A_{s}$ 。第7节的方法应用如下：
  给定：
    $d$ ：两个终端之间的大圆路径距离，单位为千米；
    $d_{r 1,2}$ ：到终端平滑地平线的大圆距离，单位为千米；
    $f$ ：频率，单位为 MHz ；
    $h_{e 1,2}$ ：终端的有效高度，单位为千米；
  计算：
    $A_{s}$ ：对流层散射损耗，单位为 dB ；
    $h_{v}$ ：到共体的高度，单位为千米；
    $\theta_{s}$ ：散射角，单位为弧度。

  第3-7.3步：根据下列条件选择损耗值：
如果 $d<d^{\prime}$（ $d^{\prime}$ 开始于第3－6步的最后一次迭代），则：

$$
\begin{equation*}
A_{T}=A_{d} \quad(\mathrm{~dB}) \tag{21}
\end{equation*}
$$

否则，根据第3－6.6步中的情形1或情形2是否为真来确定 $A_{T}$ ：

$$
A_{T}=\left\{\begin{array}{c}
\operatorname{Min}\left(A_{d}, A_{s}\right), \text { 情形1为真 }  \tag{22}\\
A_{s}, \text { 情形2为真 }
\end{array}\right.
$$

第3－8步：使用第5节中定义的射线追踪来确定以下内容：
  给定：
    $h_{v}$ ：到共体的高度，单位为千米，由第3－7.2步算得；
    $f$ ：频率，单位为 MHz ；
  计算：
    $A_{v a}$ ：从地平线到散射体的射线路径的中值大气吸收损耗，单位为 dB ；
    $r_{v}$ ：从地平线到散射体的射线路径的长度，单位为千米。

第3－9步：使用第3－1和3－8步的结果计算路径的总中值大气吸收损耗 $A_{a}$ ，单位为 dB ：

$$
\begin{equation*}
A_{a}=A_{a 1}+A_{a 2}+2 A_{a v} \quad(\mathrm{~dB}) \tag{23}
\end{equation*}
$$

第3－10步：计算路径的可用空间损耗 $A_{f s}$ ，单位为 dB ：

$$
\begin{equation*}
r_{f s}=r_{1}+r_{2}+2 r_{v} \quad(\mathrm{~km}) \tag{24}
\end{equation*}
$$

$$
\begin{equation*}
A_{f s}=20 \log _{10} f+20 \log _{10} r_{f s}+32.45 \quad(\mathrm{~dB}) \tag{25}
\end{equation*}
$$

第3－11步：计算时间百分比为 $p$ 时的长期可变损耗 $Y(p)$ 。使用第12节中的算法。然后进入第3－12步。

  给定：
    $h_{r 1,2}$ ：平均海平面之上的终端高度，单位为千米；
    $d$ ：两个终端之间路径的大圆距离，单位为千米；
    $f$ ：频率，单位为 MHz ；
    $p$ ：时间百分比；
    $A_{T}$ ：第3－7.3步的损耗，单位为 dB ；
    $\theta_{S}$ ：第3－7.2步的散射角，单位为弧度；
  计算：
    $Y(p)$ ：长期可变损耗，$Y_{\text {total }}(p)$ ，单位为 dB 。

第3－12步：计算基本传输损耗 $L_{b}$ ，单位为 dB 。

$$
\begin{equation*}
L_{b}=A_{f s}+A_{a}+A_{T}+Y(p) \quad(\mathrm{dB}) \tag{26}
\end{equation*}
$$

这样就完成了超视距路径上给定用户定义的输入参数的分步过程。

### 4. 终端参数

图2 终端几何结构

![](https://cdn.mathpix.com/cropped/3f977a2b-e73a-4328-9662-ec1c3c93b10b-10.jpg?height=766&width=1170&top_left_y=1676&top_left_x=443)

本节计算与终端关联的以下参数，见图2。
给定：
  $h_{r}$ ：高于平均海平面的终端高度，单位为千米；
  $f$ ：频率，单位为 MHz ；
计算：
  $d_{r}$ ：到终端平滑地平线的大圆距离，单位为千米；
  $\theta_{\mathrm{r}}$ ：来自终端平滑地球地平线的掠射射线的入射角，单位为弧度；
  $h_{e}$ ：终端的有效高度，单位为千米；
  $\Delta h$ ：终端高度修正项，单位为千米；
  $A_{a}$ ：从终端到其平滑地球地平线的射线的中位大气吸收损耗，单位为 dB ；
  $r$ ：从终端到其平滑地球地平线的射线路径长度，单位为千米。

第4－1步：使用第5节中定义的射线跟踪来确定以下内容：
  给定：
   $h_{r}$ ：高于平均海平面的终端高度，单位为千米；
   $f$ ：频率，单位为 MHz ；
  计算：
   $d_{r}$ ：到终端平滑地平线的大圆距离，单位为千米；
   $\theta_{r}$ ：来自终端平滑地球地平线的掠射射线的入射角，单位为弧度；
   $A_{a}$ ：从终端到其平滑地球地平线的射线的中位大气吸收损耗，单位为 dB ；
   $r$ ：从终端到其平滑地球地平线的射线路径长度，单位为千米。

第4－2步：计算终端的有效高度 $h_{e}$ ，单位为千米。

$$
\begin{align*}
\phi & =d_{r} / a_{e} \quad(\mathrm{rad})  \tag{27}\\
h_{e} & =\frac{a_{e}}{\cos \phi}-a_{e} \quad(\mathrm{~km}) \tag{28}
\end{align*}
$$

第4－3步：计算终端高度修正项 $\Delta h$ 。

$$
\begin{equation*}
\Delta h=h_{r}-h_{e} \quad(\mathrm{~km}) \tag{29}
\end{equation*}
$$

计算终端参数的算法部分到此结束。

### 5 射线跟踪

在大气中传播的无线电波由于大气折射的变化而弯曲。在传统的地面模型中，这通常使用标准的＂ $4 / 3$ 地球＂方法来解释，该方法对线性的大气折射率梯度进行建模，并且是对地表附近路径的有效近似。但是，实际的大气梯度是指数形式的，并且在空气到地面的传播路径中，使用线性模型可能会导致较大的误差。

本建议书利用ITU－R P.676－12建议书附件1中定义的射线追踪方法来计算射线穿过大气层的路径。大气是ITU－R P.835－6建议书中定义的年平均全球参考大气。

给定：
  $h_{r}$ ：高于平均海平面的终端高度，单位为千米；
  $f$ ：频率，单位为 MHz ；
计算：
  $d_{r}$ ：到终端平滑地平线的大圆距离，单位为千；
  $\theta_{r}$ ：来自终端平滑地球地平线的掠射射线的入射角，单位为弧度；
  $A_{a}$ ：从终端到其平滑地球地平线的射线的中位大气吸收损耗，单位为 dB ；
  $r$ ：从终端到其平滑地球地平线的射线路径长度，单位为千米（在ITU－R P.676－12建议书中指定为 $a$ ）；
  $\tau$ ：射线路径的弯曲角度（在ITU－R P.676－12建议书中称为bending）。

第5－1步：使用ITU－R P.676－12建议书的附件1，追踪从地球表面到终端高度 $h_{r}$ 的掠射射线（ $\beta=\pi / 2$ ）。

在射线追踪过程中，计算射线的总弯曲角 $\tau$（在 ITU－R P.676－12 建议书中称为 bending）、射线路径的大气吸收 $A_{a}$ 和射线路径的长度 $r$（在ITU－R P.676－12建议书中称为 a）。

第5－2步：计算光线在终端上的入射角 $\theta_{r}$ 。第5－1步得到最终角度 $\alpha_{i}$ ，它是相对于天顶的。

$$
\begin{equation*}
\theta_{r}=\frac{\pi}{2}-\alpha_{i} \quad(\mathrm{rad}) \tag{30}
\end{equation*}
$$

第5－3步：使用中心角 $\phi$ 计算射线在终端与平滑地球地平线之间的地球表面上的大圆距离。

$$
\begin{array}{cc}
\phi=\theta_{r}+\tau & (\mathrm{rad}) \\
d_{r}=\phi a_{0} & (\mathrm{~km}) \tag{32}
\end{array}
$$

这样就完成了有关射线跟踪部分的计算步骤。

### 6 视距范围

本节描述计算视距路径传播损耗的步骤。
给定：
  $d_{M L}$ ：最大视距，单位为千米，来自公式（7）；
  $d_{d}$ ：衍射模型预测 0 dB 损耗的距离，单位为千米，来自公式（13）；
  $h_{e 1,2}$ ：终端的有效高度，单位为千米；
  $d_{r 1,2}$ ：到终端平滑地平线的大圆距离，单位为千米；
  $f$ ：频率，单位为 MHz ；
  $A_{d M L}$ ：$d_{M L}$ 距离处的衍射损耗，单位为 dB ，来自公式（12）；
  $p$ ：时间百分比；
  $d$ ：两个终端之间路径的大圆距离，单位为千米；

计算：
  $L_{b}$ ：基本传输损耗，单位为 dB ；
  $K$ ：后续可变性计算所使用的值。

第6－1步：计算波长 $\lambda$ 。

$$
\begin{equation*}
\lambda=0.2997925 / f \quad(\mathrm{~km}) \tag{33}
\end{equation*}
$$

第6－2步：确定 $\Psi_{\text {limit }}$ ，反射角对应于 $\Delta r=\lambda / 2$ 的距离，其中 $\Delta r$ 是直接射线和间接射线之间的射线长度差。要确定 $\Psi_{\text {limit }}$ ，请以重复出现的方式应用第7节中描述的射线光学方法来执行对 $\Psi_{\text {limit }}$ 值的二进制搜索。根据 $\Psi$ 增加导致 $\Delta r$ 增加的关系更新 $\Psi_{\text {limit }}$ 的值。第7节的方法应用如下：

给定：
  $\Psi$ ：射线反射角，单位为弧度；
  $h_{r 1,2}$ ：平均海平面之上的终端高度，单位为千米；
  $\Delta h_{1,2}$ ：终端高度修正项，单位为千米。
计算：
  $\Delta r$ ：直接射线和间接射线之间的射线长度距离，单位为千米。
  $d$ ：对应于反射角 $\psi$ 的终端之间的大圆路径距离，单位为千米。

第6－3步：确定 $d_{\lambda \backslash 6}$ ，即直接波和反射波之间的路径长度差为 $\lambda / 6$ 米的距离。与第6－2步一样，通过以重复出现的方式应用第7节中描述的射线光学方法来确定此距离，以执行 $\psi$ 的二进制搜索。第7节的方法应用如下：

给定：
  $\psi$ ：射线反射角，单位为弧度；
  $h_{r 1,2}$ ：平均海平面之上的终端高度，单位为千米；
  $\Delta h_{1,2}$ ：终端高度修正项，单位为千米；
计算：
  $d_{\lambda \backslash 6}$ ：对应于反射角 $\psi$ 的终端之间的大圆距离，单位为千米。

第6－4步：确定距离 $d_{0}$ ，单位为千米。
  如果 $d \geq d_{d}$ 或 $d_{d} \geq d_{M L}$ ，

$$
d_{o}=\left\{\begin{align*}
d_{1}, d>d_{\frac{\lambda}{6}} \text { 或 } d_{\lambda / 6}>d_{M L} & (\mathrm{~km})  \tag{34}\\
d_{\lambda / 6}, & \text { 否则 }
\end{align*}\right.
$$

  否则如果 $d_{d}<d_{\lambda / 6}$ 且 $d_{\lambda / 6}<d_{M L}$ ，

$$
d_{o}=\left\{\begin{array}{cl}
d_{\lambda / 6}, & d_{d}<d_{\lambda / 6} \text { 且 } d_{\lambda / 6}<d_{M L} \quad \text { (km) }  \tag{35}\\
d_{d}, & \text { 否则 }
\end{array}\right.
$$

第6－5步：$d_{0}$ 的当前值可以是某些路径的路线近似值。为了对其进行调谐，利用第6－3步将距离迭代转换为反射角 $\psi$ ，并按照第7节中的定义计算射线光学结构。如果根据第7节得出的距离 $d$ 大于或等于初始距离 $d_{0}$ ，或者如果增加 1 米就能使距离 $d$ 超过 $d_{M L}$ ，则使用射线光学输出距离作为 $d_{0}$ 值。否则，将距离增大 1 米，重新计算射线光学结构。

第6－6步：计算 $d_{0}$ 处的视距损耗。首先再次使用第7节来确定 $\Psi_{d 0}$ 的值。然后利用第8节的方法确定损耗 $A_{d 0}$ 。

第6－7步：通过以重复出现的方式应用第7节，将所需的距离 $d$ 转换为其对应的反射角 $\psi$ 。将最终得到的射线光学距离称为 $d_{r o}$ 。

第6－8步：利用第7和第8节的方法计算视距损耗。然后进入第6－11步。第7和第8节的方法应用如下。

给定：
  $\psi$ ：射线反射角，单位为弧度；
  $h_{r 1,2}$ ：平均海平面之上的终端高度，单位为千米；
  $\Delta h_{1,2}$ ：终端高度修正项，单位为千米；
计算：
  $\Delta r$ ：直接射线和间接射线之间的射线长度距离，单位为千米；
  $d$ ：反射角 $\psi$ 对应的终端之间的距离，单位为千米。

第6－9步：通过应用ITU－R P.676建议书的附件 1 计算路径的中位大气吸收损耗 $A_{a}$ 。使用 $\theta_{h 1}$ 作为仰角跟踪从低终端到高终端的射线（注意，$\theta_{h 1}$ 是从终端的水平面参考的，而ITU－R P.676建议书是从天顶参考的）。角度 $\theta_{h 1}$ 来自在第6－8步计算的公式（53）。在射线追踪期间，还要计算光线的总长度 $r_{L O S}$ ，单位为千米。

第6－10步：计算自由空间损耗 $A_{f s}$ ，单位为 dB 。

$$
\begin{equation*}
A_{f s}=20 \log _{10} r_{L O S}+20 \log _{10} f+32.45 \quad(\mathrm{~dB}) \tag{36}
\end{equation*}
$$

第6－11步：计算可变性在总损耗中所占得比例。使用第13节计算 $Y_{\text {total }}$ 。然后进入第6－12步。第13节的方法应用如下：

给定：
  $h_{r 1,2}$ ：平均海平面之上的终端高度，单位为千米；
  $d$ ：两个终端之间路径的大圆距离，单位为千米；
  $f$ ：频率，单位为 MHz ；
  $p$ ：时间百分比；
计算：
  $Y(p)$ ：长期可变损耗，单位为 dB 。

第6－12步：计算基本传输损耗。

$$
\begin{equation*}
A=A_{f s}+A_{a}+A_{L o s}+Y(p) \tag{37}
\end{equation*}
$$

第6－13步：ITU－R P.528建议书中与可变性相关的统计数据代表了信号电平随时间的预期变化。如ITU－R P. 2108 建议书所述，这些统计数据可以视为独立于与杂波损耗相关的统计数据。因此，如果链路的一端处于人为杂波中，如ITU－R P. 2108 建议书所述和要求，则在ITU－ R P.2108建议书第3.3节中描述的杂波损耗方法及其相应的信号损耗静态分布可以与ITU－R P.528建议书的统计结果相结合。

如果需要杂波造成的损耗，请按照ITU－R P. 2108 建议书第 3.3 节所述计算 $L_{\text {ces }}$ 的值，使用 $\theta_{h 1}$ 的值（来自公式（53））作为仰角。然后可以将得到的 $L_{c e s}$ 添加到公式（37）的结果中。

这样就完成了视距路径上给定用户定义的输入参数的分步过程。

### 7 视距射线光学算法

本节介绍如何使用射线光学方法在彼此的视距内为两个终端计算几何路径参数。
本节算法的输入为：
$\psi$ ：射线反射角，单位为弧度；
$h_{r 1,2}$ ：平均海平面之上的终端高度，单位为千米；
$\Delta h_{1,2}$ ：终端高度修正项，单位为千米；
本节算法的输出为：
$\Delta r$ ：直射射线与间接射线之间的射线长度距离，单位为千米；
$d$ ：反射角为 $\psi$ 时终端之间的大圆距离，单位为千米。

第7－1步：计算调整后的地球半径 $a_{a}$ ：

$$
\begin{gather*}
z=\left(a_{0} / a_{e}\right)-1  \tag{38}\\
k_{a}=1 /(1+z \cos \psi)  \tag{39}\\
a_{a}=a_{0} k_{a} \quad(\mathrm{~km}) \tag{40}
\end{gather*}
$$

第7－2步：计算调整后的地球终端高度修正项 $\Delta h_{a 1,2}$ 。

$$
\begin{equation*}
\Delta h_{a 1,2}=\Delta h_{1,2}\left(a_{a}-a_{0}\right) /\left(a_{e}-a_{o}\right) \quad(\mathrm{km}) \tag{41}
\end{equation*}
$$

第7－3步：计算高度 $H_{1,2}$ 。

$$
\begin{equation*}
H_{1,2}=h_{r 1,2}-\Delta h_{a 1,2} \quad(\mathrm{~km}) \tag{42}
\end{equation*}
$$

第7－4步：计算终端几何参数 $z_{1,2} 、 \theta_{1,2} 、 D_{1,2}$ 和 $H_{1,2}^{\prime}$ 。

$$
\begin{gather*}
z_{1,2}=a_{a}+H_{1,2} \quad(\mathrm{~km})  \tag{43}\\
\theta_{1,2}=\arccos \left(a_{a} \cos \psi / z_{1,2}\right)-\psi \quad(\mathrm{rad})  \tag{44}\\
D_{1,2}=z_{1,2} \sin \theta_{1,2} \quad(\mathrm{~km})  \tag{45}\\
H_{1,2}^{\prime}=\left\{\begin{array}{c}
H_{1,2}, \psi>1.56 \\
D_{1,2} \tan \psi, \psi \leq 1.56
\end{array} \quad(\mathrm{~km})\right. \tag{46}
\end{gather*}
$$

第7－5步：计算终端径差 $\Delta Z$ 。

$$
\begin{equation*}
\Delta z=\left|z_{1}-z_{2}\right| \quad(\mathrm{km}) \tag{47}
\end{equation*}
$$

第7－6步：计算反射角 $\psi$ 对应的两个终端路径之间的距离差。

$$
\begin{equation*}
d=\max \left(a_{a}\left(\theta_{1}+\theta_{2}\right), 0\right) \quad(\mathrm{km}) \tag{48}
\end{equation*}
$$

第7－7步：几何参数计算完成后，确定直接射线和间接射线的长度 $r_{0}$ 和 $r_{12}$ 。

$$
\begin{gather*}
\alpha=\arctan \left(\left(H_{2}^{\prime}-H_{1}^{\prime}\right) /\left(D_{1}+D_{2}\right)\right) \quad(\mathrm{rad})  \tag{49}\\
r_{0}=\max \left(\Delta z,\left(D_{1}+D_{2}\right) / \cos \alpha\right) \quad(\mathrm{km})  \tag{50}\\
r_{12}=\left(D_{1}+D_{2}\right) / \cos \psi \quad(\mathrm{km}) \tag{51}
\end{gather*}
$$

第7－8步：计算两个射线之间的长度差。

$$
\begin{equation*}
\Delta r=4 H_{1}^{\prime} H_{2}^{\prime} /\left(r_{0}+r_{12}\right) \quad(\mathrm{km}) \tag{52}
\end{equation*}
$$

第7－9步：计算角度 $\theta_{h 1,2}$ 。

$$
\begin{gather*}
\theta_{h 1}=\alpha-\theta_{1} \quad(\mathrm{rad})  \tag{53}\\
\theta_{h 2}=-\left(\alpha+\theta_{2}\right) \quad(\mathrm{rad}) \tag{54}
\end{gather*}
$$

这部分算法到此结束。

### 8 视距损耗计算

本节介绍如何计算视距路径的损耗。
给定：
  $d$ ：感兴趣的路径距离，单位为千米；
  $\psi$ ：射线反射角，单位为弧度；
  $d_{0}$ ：衍射开始影响视距范围时的路径距离，单位为千米（来自第6－5步）；
  $f$ ：频率，单位为 MHz ；
计算：
  $A_{L O S}$ ：视距损耗，单位为 dB 。

第8－1步：如果路径距离 $d$ 大于 $d_{0}$ ，则路径处于视距衍射混合区域内，利用公式（55）确定 $A_{L O S}$ ，此部分完成。否则，如果 $d \leq d_{0}$ ，则执行第8－2步。

$$
\begin{equation*}
A_{L O S}=\left(\left(d-d_{0}\right)\left(A_{d M L}-A_{d 0}\right) /\left(d_{M L}-d_{0}\right)\right)+A_{d 0} \quad(\mathrm{~dB}) \tag{55}
\end{equation*}
$$

第8－2步：使用第6－2步的 $\Psi_{\text {limit }}$ ，如果反射角 $\Psi<\Psi_{\text {limit }}$ ，则设 $A_{\text {LOS }}=0 \mathrm{~dB}$ ，此部分完成，因为ITU－R P.528建议书不考虑在这个区域内使用双射线模型。否则，如果 $\Psi \geq \Psi_{\text {limit }}$ ，则执行第8－3步。

第8－3步：路径长度 $d$ 是ITU－R P. 528 建议书利用双射线模型计算的路径长度。计算波长 $\lambda$ 。

$$
\begin{equation*}
\lambda=0.2997925 / f \quad(\mathrm{~km}) \tag{56}
\end{equation*}
$$

第8－4步：利用第9节的算法计算复反射系数 $R_{g}$ 和 $\phi_{g}$ 。

第8－5步：发散因子 $D_{v}$ 考虑来了从平滑的弯曲地球表面反射的效率比从平坦的地球表面反射的效率低。使用公式（45）得出的 $D_{1,2}$ 计算路径的发散因子。

$$
\begin{gather*}
r_{1,2}=D_{1,2} / \cos \psi \quad(\mathrm{km})  \tag{57}\\
R_{r}=\left(r_{1} r_{2}\right) / r_{1,2} \quad(\mathrm{~km})  \tag{58}\\
D_{v}=\left[1+\frac{2 R_{r}\left(1+\sin ^{2} \psi\right)}{a_{a} \sin \psi}+\left(\frac{2 R_{r}}{a_{a}}\right)^{2}\right]^{-1 / 2} \tag{59}
\end{gather*}
$$

第8－6步：射线长度因数 $F_{r}$ 考虑了直接射线比间接射线明显强度更大（或距离更短）的几何形状，例如在存在两个航空器的情况下，两个终端高度都很高，且彼此很近的情形。利用公式（51）中的 $r_{12}$ 计算 $F_{r}$ ：

$$
\begin{equation*}
F_{r}=\min \left(r_{0} / r_{12}, 1\right) \tag{60}
\end{equation*}
$$

第8－7步：计算有效反射系数 $R_{T g}$ 和 $\phi_{T g}$ 。

$$
\begin{gather*}
R_{T g}=R_{g} D_{v} F_{r}  \tag{61}\\
\phi_{T g}=(2 \pi \Delta r / \lambda)+\phi_{g} \tag{62}
\end{gather*}
$$

第8－8步：计算损耗 $A_{L O S}$ 。

$$
\begin{gather*}
R=R_{T g} \cos \phi_{T g}-R_{T g} \sin \phi_{T g}  \tag{63}\\
W_{R L}=\min (|1+R|, 1)  \tag{64}\\
W_{R 0}=W_{R L}^{2}  \tag{65}\\
A_{L O S}=10 \log _{10} W_{R 0} \tag{66}
\end{gather*}
$$

这部分算法到此结束。

### 9 地面反射系数

本节介绍了计算地面反射系数的步骤。
给定：
  $\psi$ ：参考角度，单位为弧度；
  $f$ ：频率，单位为 MHz ；
  $T_{p o l}$ ：表明水平或垂直线性极化的参数；
计算：
  $R_{g}$ ：反射系数的实部；
  $\phi_{g}$ ：反射系数的虚部；
根据先前对地面电特性的假设，$\sigma=0.005 \mathrm{~S} / \mathrm{m}, ~ \varepsilon_{r}=15$（对应于平均组）。

第9－1步：计算下列值：

$$
\begin{gather*}
X=18000 \sigma / f  \tag{67}\\
Y=\epsilon_{r}-\cos ^{2} \Psi  \tag{68}\\
T=\left[Y^{2}+X^{2}\right]^{0.5}+Y  \tag{69}\\
P=(0.5 T)^{0.5}  \tag{70}\\
Q=X / 2 P \tag{71}
\end{gather*}
$$

第9－2步：根据极化参数 $T_{p o l}$ 计算 $B$ 和 $A$

$$
\begin{gather*}
B=\left\{\begin{array}{r}
1 /\left(P^{2}+Q^{2}\right), \text { 水平 } \\
\left(\epsilon^{2}+X^{2}\right) /\left(P^{2}+Q^{2}\right), \text { 垂直 } \\
2 P /\left(P^{2}+Q^{2}\right), \text { 水平 }
\end{array}\right.  \tag{72}\\
A=\left\{\begin{array}{r}
(2(P \epsilon+Q X)) /\left(P^{2}+Q^{2}\right), \text { 垂直 }
\end{array}\right. \tag{73}
\end{gather*}
$$

第9－3步：计算反射系数的实部和虚部。

$$
\begin{equation*}
R_{g}=\left[\left(\left(1+B \sin ^{2} \psi\right)-A \sin \psi\right) /\left(\left(1+B \sin ^{2} \psi\right)+A \sin \psi\right)\right]^{0.5} \tag{74}
\end{equation*}
$$

$$
\begin{align*}
& \alpha=\left\{\begin{array}{r}
\arctan 2(-Q, \sin \psi-P), \text { 水平 } \\
\arctan 2((\epsilon \sin \psi)-Q, \epsilon \sin \psi-P), \text { 垂直 }
\end{array}\right.  \tag{75}\\
& \beta=\left\{\begin{array}{r}
\arctan 2(Q, \sin \psi+P), \text { 水平 } \\
\arctan 2((X \sin \psi)+Q, \epsilon \sin \psi+P), \text { 垂直 } \\
\phi_{g}=\alpha-\beta
\end{array}\right. \tag{76}
\end{align*}
$$

本节算法到此结束。

### 10 平滑地球衍射

本节描述了在衍射区指定距离内计算平滑地球衍射损耗所采取的步骤。该模型假设＂平均接地＂的电导率为 $0.005 \mathrm{~S} / \mathrm{m}(\sigma)$ ，相对介电常数为 $15\left(\varepsilon_{r}\right)$ 。

给定：
  $d_{0}$ ：感兴趣路径的距离，单位为千米；
  $d_{r 1,2}$ ：到终端平滑地平线的大圆距离，单位为千米；
  $f: ~$ 频率，单位为 MHz ；
  $T_{p o l}$ ：表明水平或垂直线性极化的参数；
计算：
  $A_{d}$ ：平滑地球衍射损耗，单位为 dB 。
利用公式（78）计算平滑地球衍射损耗：

$$
\begin{equation*}
A_{d}=G\left(x_{0}\right)-F\left(x_{1}\right)-F\left(x_{2}\right)-20 \quad(\mathrm{~dB}) \tag{78}
\end{equation*}
$$

第10－1步：根据极化参数 $T_{p o l}$ 计算项 $K$ ，

$$
\begin{gather*}
s=18000 \sigma / f  \tag{79}\\
K=\left\{\begin{array}{c}
0.01778 f^{-1 / 3}\left[\left(\varepsilon_{r}-1\right)^{2}+s^{2}\right]^{-1 / 4}, \text { 水平 } \\
0.01778 f^{-1 / 3}\left[\frac{\varepsilon_{r}^{2}+s^{2}}{\sqrt{\left(\varepsilon_{r}-1\right)^{2}+s^{2}}}\right]^{1 / 2}, \text { 垂直 }
\end{array}\right. \tag{80}
\end{gather*}
$$

第10－2步：计算归一化距离。

$$
\begin{equation*}
x_{0,1,2}=(1.607-K) f^{1 / 3} d_{0,1,2} \quad(\mathrm{~km}) \tag{81}
\end{equation*}
$$

第10－3步：计算所有三个归一化距离的距离相关项。

$$
\begin{equation*}
G\left(x_{0,1,2}\right)=0.05751 x_{0,1,2}-10 \log _{10} x_{0,1,2} \quad(\mathrm{~dB}) \tag{82}
\end{equation*}
$$

第10－4步：计算项 $y_{1,2}$ 。

$$
\begin{equation*}
y_{1,2}=40 \log _{10} x_{1,2}-117 \quad(\mathrm{~dB}) \tag{83}
\end{equation*}
$$

第10－5步：计算高度函数。
  $x_{1,2} \geq 2000$ 千米时：

$$
\begin{equation*}
F\left(x_{1,2}\right)=G\left(x_{1,2}\right) \quad(\mathrm{dB}) \tag{84}
\end{equation*}
$$

  $200<x_{1,2}<200$ 千米时：

$$
\begin{gather*}
W_{1,2}=0.0134 x_{1,2} e^{\left(-0.005 x_{1,2}\right)}  \tag{85}\\
F\left(x_{1,2}\right)=W_{1,2} y_{1,2}+\left(1-W_{1,2}\right) G\left(x_{1,2}\right) \tag{dB}
\end{gather*}
$$

  $x \leq 200$ 千米时：

$$
\begin{align*}
& x_{t}=450 /-\left(\log _{10} K\right)^{3} \quad(\mathrm{~km})  \tag{87}\\
& F\left(x_{1,2}\right)=\left\{\begin{array}{c}
\left\{\begin{array}{c}
y_{1,2}, \operatorname{abs}\left(y_{1,2}\right)<117 \\
-117,
\end{array}, \begin{array}{l}
\text { 否则 } \\
x_{1,2} \geq x_{t}
\end{array} \quad(\mathrm{~dB})\right. \\
20 \log K-15+\left(0.000025 x_{1,2}^{2} / K\right), x_{1,2} \leq x_{t}
\end{array}\right. \tag{88}
\end{align*}
$$

第10－6步：$G\left(x_{0}\right)$ 和 $F\left(x_{1,2}\right)$ 计算完成后，使用公式（78）计算平滑地球衍射损耗。

本节算法到此结束。

### 11 对流层散射

本节描述在给定距离下计算对流层散射的步骤。对流层散射损耗的计算采用了数学方法，该方法考虑了以两个终端的共体为边界的弯曲射线路径。对流层散射的计算采用式（89） （如下所述）。

$$
\begin{equation*}
A_{s}=S_{e}+S_{V}+10 \log _{10}\left(\kappa \theta_{s}^{3} / \ell\right) \tag{89}
\end{equation*}
$$

给定：
  $\begin{aligned} d_{r 1,2}: & \text { 到终端平滑地平线的大圆距离，单位为千米；} \\ h_{e 1,2}: & \text { 有效终端高度，单位为千米；} \\ f: & \text { 频率，单位为 } \mathrm{MHz} ; \\ d: & \text { 感兴趣的路径距离，单位为千米；}\end{aligned}$
计算：
  $A_{s}$ ：对流层散射损耗，单位为 dB ；
  $h_{v}$ ：到共体的高度，单位为千米；
  $\theta_{s}$ ：散射角，单位为弧度。

第11－1步：计算散射距离 $d_{s}$ ，单位为千米。

$$
\begin{equation*}
d_{s}=d-d_{r 1}-d_{r 2} \quad(\mathrm{~km}) \tag{90}
\end{equation*}
$$

第11－2步：如果 $d_{s}=0$ ，路径几何结构中没有共体，则不支持经由对流层散射的传播。设置下列结果并执行第3节的第3－7.3步算法。如果 $d_{s}>$ ，继续执行第11－3步。

$$
\begin{array}{ll}
A_{s}=0 & (\mathrm{~dB}) \\
h_{v}=0 & (\mathrm{~km}) \\
\theta_{s}=0 & (\mathrm{rad}) \tag{93}
\end{array}
$$

第11－3步：从每个终端的旁掠射线到共体中心的平滑地球弧距 $d_{z}$ 为：

$$
\begin{equation*}
d_{z}=0.5 d_{s} \quad(\mathrm{~km}) \tag{94}
\end{equation*}
$$

第11－4步：计算大气梯度参数：

$$
\begin{equation*}
A_{m}=1 / a_{0} \tag{95}
\end{equation*}
$$

$$
\begin{gather*}
d N=A_{m}-1 / a_{e}  \tag{96}\\
\Gamma_{e}=N_{s} \times 10^{-6} / d N \tag{97}
\end{gather*}
$$

第11－5步：下列公式用于确定与对流层散射有关的几何参数，包括共体高度 $h_{v}$（单位为千米）和交叉角 $\theta_{A}$ 处的射线斜率，单位为弧度。

$$
\begin{gather*}
z_{a}=\frac{1}{2 a_{e}}\left(\frac{d_{z}}{2}\right)^{2} \quad(\mathrm{~km})  \tag{98}\\
z_{b}=\frac{1}{2 a_{e}}\left(d_{z}\right)^{2} \quad(\mathrm{~km})  \tag{99}\\
Q_{o}=A_{m}-d N  \tag{100}\\
Q_{a, b}=A_{m}-d N * e^{-z_{a, b} / \gamma_{e}}  \tag{101}\\
z_{a}^{\prime}=\left(7 Q_{o}+6 Q_{a}-Q_{b}\right) \frac{d_{z}^{2}}{96} \quad(\mathrm{~km})  \tag{102}\\
z_{b}^{\prime}=\left(Q_{o}+2 Q_{a}\right) \frac{d_{z}^{2}}{6} \quad(\mathrm{~km})  \tag{103}\\
Q_{A, B}=A_{m}-d N * e^{-z_{a, b}^{\prime} / \gamma_{e}}  \tag{104}\\
h_{v}=\left(Q_{o}+2 Q_{A}\right) \frac{d_{z}^{2}}{6} \quad(\mathrm{~km})  \tag{105}\\
\theta_{A}=\left(Q_{o}+4 Q_{A}+Q_{B}\right) \frac{d_{z}}{6} \quad(\mathrm{rad})  \tag{106}\\
\theta_{s}=2 \theta_{A} \quad(\mathrm{rad}) \tag{107}
\end{gather*}
$$

第11－6步：计算散射效率项 $S_{e}$ 。

$$
\begin{gather*}
\epsilon_{1}=\left(5.67 \times 10^{-6}\right) N_{s}^{2}-0.00232 N_{s}+0.031  \tag{108}\\
\epsilon_{2}=0.0002 N_{s}^{2}-0.06 N_{s}+6.6  \tag{109}\\
\gamma=0.1424\left(1+\frac{\epsilon_{1}}{\exp \left[\left(h_{v} / 4\right)^{6}\right]}\right)  \tag{110}\\
S_{e}=83.1-\frac{\epsilon_{2}}{1+0.07716 h_{v}^{2}}+20 \log _{10}\left[(0.1424 / \gamma)^{2} e^{\gamma h_{v}}\right] \quad(\mathrm{dB}) \tag{111}
\end{gather*}
$$

第11－7步：计算散射体积项 $S_{V}$ 。

$$
\begin{gather*}
X_{A 1,2}=h_{1,2}^{2}+4\left(a_{e}+h_{1,2}\right) a_{e} \sin ^{2}\left(\frac{d_{1,2}}{2 a_{e}}\right)  \tag{112}\\
\ell_{1,2}=\sqrt{X_{A 1,2}}+d_{z} \quad(\mathrm{~km})  \tag{113}\\
\ell=\ell_{1}+\ell_{2} \quad(\mathrm{~km})  \tag{114}\\
s=\frac{\ell_{1}-\ell_{2}}{\ell}  \tag{115}\\
\eta=\gamma \theta_{s} \ell / 2  \tag{116}\\
\kappa=f / 0.0477  \tag{117}\\
\rho_{1,2}=2 \kappa \theta_{s} h_{1,2} \quad(\mathrm{~km})  \tag{118}\\
S_{V}=10 \log _{10}\left(\frac{\left(A \eta^{2}+B_{S} \eta\right) q_{1} q_{2}}{\rho_{1}^{2} \rho_{2}^{2}}+C_{S}\right) \quad(\mathrm{dB}) \tag{119}
\end{gather*}
$$

其中：

$$
\begin{equation*}
X_{v 1}=(1+s)^{2} \eta \tag{120}
\end{equation*}
$$

$$
\begin{gather*}
X_{v 2}=(1-s)^{2} \eta  \tag{121}\\
q_{1}=X_{v 1}^{2}+\rho_{1}^{2}  \tag{122}\\
q_{2}=X_{v 2}^{2}+\rho_{2}^{2}  \tag{123}\\
A=\left(1-s^{2}\right)^{2}  \tag{124}\\
B_{S}=6+8 s^{2}+\left(8(1-s) X_{v 1}^{2} \rho_{1}^{2}\right) / q_{1}^{2}+\left(8(1+s) X_{v 2}^{2} \rho_{2}^{2}\right) / q_{2}^{2}+2\left(1-s^{2}\right)\left(1+2 X_{v 1}^{2} / q_{1}\right)\left(1+2 X_{v 2}^{2} / q_{2}\right)  \tag{125}\\
C_{S}=12\left(\frac{\rho_{1}+\sqrt{2}}{\rho_{1}}\right)^{2}\left(\frac{\rho_{2}+\sqrt{2}}{\rho_{2}}\right)^{2}\left(\frac{\rho_{1}+\rho_{2}}{\rho_{1}+\rho_{2}+2 \sqrt{2}}\right) \tag{126}
\end{gather*}
$$

第11－8步：利用公式（89）计算对流层散射损耗。
本节算法到此结束。

### 12 超视距路径总的可变性

本节定义了如何计算可变性对超视距路径的基本传输损耗中值的总贡献度。
给定：
  $h_{r 1,2}$ ：高于平均海平面的终端高度，单位为千米；
  $p$ ：时间百分比；
  $f$ ：频率，单位为 MHz ；
  $d$ ：两个终端之间路径的大圆距离，单位为千米；
  $A_{T}$ ：利用衍射或对流层散射预测的损耗，单位为 dB ；
  $\theta_{s}$ ：散射角，单位为弧度；
计算：
  $Y_{\text {total }}(p)$ ：总的可变性损耗，单位为 dB 。

第12－1步：利用第14节的方法计算时间百分比为 $p$ 时的长期可变性贡献度。然后执行步骤12－2。第14节的算法应用如下：

给定：
  $h_{r 1,2}$ ：平均海平面之上的终端高度，单位为千米；
  $d$ ：两个终端之间路径的大圆距离，单位为千米；
  $d_{r 1,2}$ ：到终端平滑地平线的大圆距离，单位为千米；
  $f$ ：频率，单位为 MHz ；
  $p$ ：时间百分比；
  $f_{\theta h}:$ 设 $f_{\theta h}=1$ ；
  $A_{T}$ ：利用衍射或对流层散射预测的损耗，单位为 dB ；
计算：
  $Y_{e}(p)$ ：长期可变性损耗，单位为 dB 。

第12－2步：为了正确地综合长期可变性和对流层多径这两种分布的影响，需要计算长期可变性分布的平均值。利用第 14 节的方法计算时间百分比为 50 时的长期可变性贡献度。然后执行步骤12－3。第14节的算法应用如下：

给定：
  $h_{r 1,2}$ ：高于平均海平面的终端高度，单位为千米；
  $d$ ：两个终端之间路径的大圆距离，单位为千米；
  $d_{r 1,2}$ ：到终端平滑地平线的大圆距离，单位为千米；
  $f$ ：频率，单位为 MHz ；
  50：平均时间百分比 $(p=50)$ ；
  $f_{\theta h}$ ：设 $f_{\theta h}=1$ ；
  $A_{T}$ ：利用衍射或对流层散射预测的损耗，单位为 dB ；
计算：
  $Y_{e}(50):$ 长期可变性损耗，单位为 dB 。

第12－3步：为了使对流层多路径效应从视距范围平稳过渡到超视距范围，需要在视距与非视距之间的过渡点上确定数值 $K$ ，通过该数值可以确定对流层多路径。按照第 6 节的方法计算视距损耗值。然后继续执行第12－4步。第6节的方法应用如下：

给定：
  $d_{M L}$ ：最大视距距离，单位为千米；
  $d_{d}$ ：衍射模型预测 0 dB 损耗的距离，单位为千米，来自公式（13）；
  $h_{r 1,2}$ ：高于平均海平面的终端高度，单位为千米；
  $d_{1,2}$ ：到终端平滑地平线的大圆距离，单位为千米；
  $f$ ：频率，单位为 MHz ；
  $A_{d M L}$ ：距离 $d_{M L}$ 时的衍射损耗，单位为 dB ；
  $p$ ：时间百分比；
  $d$ ：感兴趣的路径距离；
计算：
  $A$ ：基本传输损耗，单位为 dB ；
  $K_{L O S}$ ：后续可变性计算所使用的值。

第12－4步：计算 $K_{t}$ 的值，用于确定对流层多径的影响。令 $\theta_{1.5}=0.02617993878$ 弧度 （1.5度）。

$$
K_{t}=\left\{\begin{align*}
20, \theta_{s} & \geq \theta_{1.5}  \tag{127}\\
K_{L O S}, \theta_{\mathrm{s}} & \leq 0 \\
\left(\theta_{s}\left(20-K_{L O S}\right) / \theta_{1.5}\right)+K_{L O S}, 0 & <\theta_{s}<\theta_{1.5}
\end{align*}\right.
$$

第12－5步：利用第15节的算法计算时间百分比为 $p$ 时对流层多径的贡献度。然后继续执行第12－6步。第15节的方法应用如下：

给定：
  $K_{t}: K_{L O S}$ 的值
  $p$ ：时间百分比
计算：
  $Y_{\pi}(p)$ ：时间百分比为 $p$ 时对流层多径的贡献度，单位为 dB 。

第12－6步：将长期可变性效应与对流层多径效应相结合，利用以前计算的值 $Y_{e}(p)$ 、 $Y_{e}(50)$ 和 $Y_{\pi}(p)$ ，计算可变性总贡献度 $Y_{t o t a l}(p)$ 。对流层多径的平均值为 $Y_{\pi}(50)=0$ 。

$$
\begin{gather*}
Y_{\text {total }}(50)=\mathrm{Y}_{\mathrm{e}}(50)+Y_{\pi}(50)  \tag{128}\\
Y=\left[\left(Y_{e}(p)-Y_{e}(50)\right)^{2}+\left(Y_{\pi}(p)-Y_{\pi}(50)\right)^{2}\right]^{0.5}  \tag{129}\\
Y_{\text {total }}=\left\{\begin{array}{l}
Y_{\text {total }}(50)+Y, p<50 \\
Y_{\text {total }}(50)-Y, p \geq 50
\end{array}\right. \tag{130}
\end{gather*}
$$

本节算法到此结束。

### 13 视距路径的总可变性

本节定义如何计算可变性对基本传输损耗中值的贡献度。
给定：
  $h_{r 1,2}$ ：高于平均海平面的终端高度，单位为千米；
  $p$ ：时间百分比；
  $f$ ：频率，单位为 MHz ；
  $d$ ：两个终端之间路径的大圆距离，单位为千米；
  $A_{L O S}$ ：预测的损耗，单位为 dB ；
  $\theta_{s}$ ：散射角，单位为弧度；
  $f_{\theta h}$ ：输入值；
计算：
  $Y_{\text {total }}(p)$ ：总可变性损耗，单位为 dB ；

第13－1步：利用之前得到的射线光学计算值 $\theta_{h 1}$ 计算 $f_{\theta h}$ 的值。

$$
f_{\theta h}=\left\{\begin{array}{c}
1, \theta_{h 1} \leq 0  \tag{131}\\
0, \theta_{h 1} \geq 1 \\
\max \left(0.5-(1 / \pi) \arctan \left(20 \log _{10}\left(32 \theta_{h 1}\right)\right), 0\right), \text { 否则 }
\end{array}\right.
$$

第13－2步：利用第14节的方法计算时间百分比为 $p$ 时的长期可变性贡献度。然后继续执行第13－3步。第14节的算法应用如下：

给定：
  $h_{r 1,2}$ ：高于平均海平面的终端高度，单位为千米；
  $d$ ：两个终端之间路径的大圆距离，单位为千米；
  $d_{r 1,2}$ ：到终端平滑地平线的大圆距离，单位为千米；
  $f$ ：频率，单位为 MHz ；
  $p$ ：时间百分比；
  $f_{\theta h}$ ：本节的输入值；
  $A_{L O S}$ 预测的损耗，单位为 dB ；
计算：
  $Y_{e}(p)$ ：长期可变性损耗，单位为 dB ；

第13－3步：为了正确组合长期可变性和对流层多径这两种分布的影响，需要计算长期可变性分布的均值。利用第14节的方法计算时间百分比为 50 时的长期可变性贡献度。然后执行第13－4步。第14节的算法应用如下：

给定：
  $h_{r 1,2}$ ：高于平均海平面的终端高度，单位为千米；
  $d$ ：两个终端之间路径的大圆距离，单位为千米；
  $d_{r 1,2}$ ：到终端平滑地平线的大圆距离，单位为千米；
  $f$ ：频率，单位为 MHz ；
  50：平均时间百分比 $(p=50)$ ；
  $f_{\theta h}$ ：本节的输入值；
  $A_{L O S}$ ：预测的损耗，单位为 dB ；
计算：
  $Y_{e}(50)$ ：长期可变性损耗，单位为 dB ；

第13－4步：使用公式（166）中的 $A_{Y}$ 和公式（61）中的 $R_{T g}$ 计算以下 $K_{L O S}$ 值，用于确定对流层多径的影响，如下所示：

$$
\begin{gather*}
F_{A Y}=\left\{\begin{array}{c}
1, A_{Y} \leq 0 \\
0.1, A_{Y} \geq 9 \\
\left(1.1+0.9 \cos \left(\pi A_{Y} / 9\right)\right) / 2, \text { else } \\
1, \Delta r \geq \lambda / 2 \\
0.1, \Delta r \leq \lambda / 6 \\
F_{\Delta r}=\left\{\begin{array}{c}
-1,1-0.9 \cos ((3 \pi / \lambda)(\Delta r-\lambda / 6))], \text { else } \\
0.5[1.1-0.9
\end{array}\right. \\
R_{s}=R_{T g} F_{\Delta r} F_{A Y}
\end{array}\right. \tag{132}
\end{gather*}
$$

计算 $Y_{\pi}$（99）的值，如下：

$$
\begin{equation*}
Y_{\pi}(99)=10 \log _{10}\left(f r_{L O S}^{3}\right)-84.26 \quad(\mathrm{~dB}) \tag{135}
\end{equation*}
$$

其中 $r_{L O S}$ 是在视距终端之间的射线追踪期间计算的射线长度路径。
然后利用表5对 $Y_{\pi}$（99）对应的 $K$ 进行插值，并按照下式，利用该 $K$ 值计算 $W_{a}:$

$$
\begin{equation*}
W_{a}=10^{0.1 K} \tag{136}
\end{equation*}
$$

$W_{a}$ 计算完成后，计算 $K_{L O S}$ 的值：

$$
\begin{gather*}
W_{R}=R_{s}^{2}+0.01^{2}  \tag{137}\\
W=W_{R}+W_{a}  \tag{138}\\
K_{L O S}=\left\{\begin{array}{r}
0, W \leq 0 \\
10 \log _{10} W, W>0
\end{array}\right. \tag{139}
\end{gather*}
$$

第13－5步：利用第15节的方法计算时间百分比为 $p$ 时的对流层多径贡献度。然后继续执行第13－6步。第15节的方法应用如下：

给定：
  $K$ ：其值设为 $K_{L O S}$ ；
  $p$ ：时间百分比。

计算：
  $Y_{\pi}(p)$ ：时间百分比为 $p$ 时的对流层多径贡献度，单位为 dB 。

第13－6步：将长期可变性效应与对流层多径效应相结合，利用以前计算的值 $Y_{e}(p)$ 、 $Y_{e}(50)$ 和 $\mathrm{Y}_{\pi}(p)$ ，计算可变性总贡献度 $Y_{\text {total }}(p)$ 。对流层多径平均值 $Y_{\pi}(50)=0$ 。

$$
\begin{gather*}
Y_{\text {total }}(50)=\mathrm{Y}_{\mathrm{e}}(50)+Y_{\pi}(50)  \tag{140}\\
Y=\left[\left(Y_{e}(p)-Y_{e}(50)\right)^{2}+\left(Y_{\pi}(p)-Y_{\pi}(50)\right)^{2}\right]^{0.5}  \tag{141}\\
Y_{\text {total }}=\left\{\begin{array}{l}
Y_{\text {total }}(50)+Y, p<50 \\
Y_{\text {total }}(50)-Y, p \geq 50
\end{array}\right. \tag{142}
\end{gather*}
$$

本节算法到此结束。

### 14 长期可变性

本节介绍了针对所需时间百分比 $q$ 计算长期可变性统计分布所执行的步骤。长期可变性利用了归一化有效距离 $d_{e}$ ，它是终端平滑地球水平距离和频率相关距离的函数${ }^{1}$ 。本节算法基于长期经验测量数据的统计参数。

> ${ }^{1}$ 以往计算长期变化统计数据的方法依赖于表面折射率为329 N单位的有效地球。调查和测试表明，在这些计算中利用年平均全球参考大气产生了几乎相同的结果，并为所描述的方法提供了更物理的描述。

给定：
  $h_{r 1,2}$ ：高于平均海平面的终端高度，单位为千米；
  $d_{r 1,2}$ ：到终端平滑地平线的大圆距离，单位为千米；
  $p$ ：时间百分比；
  $f$ ：频率，单位为 MHz ；
  $d$ ：两个终端之间路径的大圆距离，单位为千米；
  $f_{\theta h}$ ：常数或先前计算的参数，这取决于路径的类型；
  $A_{T, L O S}$ ：利用LOS、衍射或对流层散射子模型预测得到的损耗（之前计算得到的），单位为 dB ；

计算：
  $Y_{e}(p)$ ：长期可变性损耗，单位为 dB ；

注：本节各部分都用到逆互补累积正态分布函数 $Q^{-1}(q)$ 。ITU－R P. 1057 建议书中包含一种估算此分步过程所使用数值的技术。函数 $Q^{-1}(q)$ 定义为 $q=p / 100$ 。

第14－1步：计算两个终端之间的有效距离 $d_{e}$ ，单位为千米。

$$
\begin{gather*}
d_{q s}=60(100 / f)^{1 / 3} \quad(\mathrm{~km})  \tag{143}\\
d_{L q}=d_{r 1}+d_{r 2} \quad(\mathrm{~km})  \tag{144}\\
d_{q}=d_{L q}+d_{q s} \quad(\mathrm{~km})  \tag{145}\\
d_{e}=\left\{\begin{array}{c}
(130 d) / d_{q}, d \leq d_{q} \\
130+d-d_{q}, d>d_{q}
\end{array} \quad(\mathrm{~km})\right. \tag{146}
\end{gather*}
$$

第14－2步：计算 $g_{10}$ 和 $g_{90}$ 。
$$
\begin{align*}
& g_{10}=\left\{\begin{array}{r}
0.21 \sin \left(5.22 \log _{10}(f / 200)\right)+1.28, f \leq 1600 \\
1.05, f>1600
\end{array}\right.  \tag{147}\\
& g_{90}=f(x)=\left\{\begin{array}{r}
0.18 \sin \left(5.22 \log _{10}(f / 200)\right)+1.23, f \leq 1600 \\
1.05, f>1600
\end{array}\right. \tag{148}
\end{align*}
$$

第14－3步：利用下列公式和表1中的值计算 $V(50) 、 Y_{0}(10)$ 和 $Y_{0}(90)$ 。

表1 计算长期可变性公式所使用的值

|  | $\boldsymbol{V} \boldsymbol{(} \mathbf{5 0} \boldsymbol{)}$ | $\boldsymbol{Y}_{\mathbf{0}} \boldsymbol{(} \mathbf{1 0} \boldsymbol{)}$ | $\boldsymbol{Y}_{\mathbf{0}} \boldsymbol{(} \mathbf{9 0} \boldsymbol{)}$ |
| :--- | :--- | :--- | :--- |
| $c_{1}$ | $1.59 \mathrm{e}-5$ | $5.25 \mathrm{e}-4$ | $2.93 \mathrm{e}-4$ |
| $c_{2}$ | $1.56 \mathrm{e}-11$ | $1.57 \mathrm{e}-6$ | $3.75 \mathrm{e}-8$ |
| $c_{3}$ | $2.77 \mathrm{e}-8$ | $4.70 \mathrm{e}-7$ | $1.02 \mathrm{e}-7$ |
| $n_{1}$ | 2.32 | 1.97 | 2.00 |
| $n_{2}$ | 4.08 | 2.31 | 2.88 |
| $n_{3}$ | 3.25 | 2.90 | 3.15 |
| $f_{\infty}$ | 0.0 | 5.4 | 3.2 |
| $f_{m}$ | 3.9 | 10.0 | 8.2 |


$$
\begin{align*}
& f_{2}=f_{\infty}+\left(f_{m}-f_{\infty}\right) \exp \left(-c_{2} d_{e}^{n_{2}}\right)  \tag{149}\\
& \left.\begin{array}{l}
\begin{array}{l}
V(50) \\
Y_{0}(10) \\
Y_{0}(90)
\end{array}
\end{array}\right\}=\left[c_{1} d_{e}^{n_{1}}-f_{2}\right] \exp \left(-c_{3} d_{e}^{n_{3}}\right)+f_{2} \quad(\mathrm{~dB}) \tag{150}
\end{align*}
$$

第14－4步：根据所需的时间百分比 $p$ 计算与长期（每小时）功率衰减相关的可变性 $Y_{e}(p)$ 。

如果 $p=50$ ，则：

$$
\begin{equation*}
Y_{p}=V(50) \quad(\mathrm{dB}) \tag{151}
\end{equation*}
$$

如果 $p>50$ ，则：

$$
\begin{gather*}
z_{90}=Q^{-1}(90 / 100)  \tag{152}\\
z_{p}=Q^{-1}(p / 100)  \tag{153}\\
c_{p}=z_{p} / z_{90}  \tag{154}\\
Y=c_{p}\left(-Y_{0}(90) g_{90}\right)  \tag{155}\\
Y_{p}=Y+V(50) \tag{156}
\end{gather*}
$$

如果 $p<50$ ，则应增加步骤。如果 $p \geq 10$ ，则：

$$
\begin{gather*}
z_{10}=Q^{-1}(10 / 100)  \tag{157}\\
z_{p}=Q^{-1}(p / 100)  \tag{158}\\
c_{p}=z_{p} / z_{10} \tag{159}
\end{gather*}
$$

$$
\begin{gather*}
Y=c_{p}\left(Y_{0}(10) g_{10}\right) \quad(\mathrm{dB})  \tag{160}\\
Y_{p}=Y+V(50) \quad(\mathrm{dB}) \tag{161}
\end{gather*}
$$

否则， $1 \leq p<10$ 。利用表2、通过 $p$ 值对 $c_{p}$ 进行线性插值。然后应用公式（160）和 （161）来计算 $Y_{p}$ 。

表2  $\boldsymbol{c}_{\boldsymbol{p}}$ 的低概率值

| $\boldsymbol{p}$ | $\boldsymbol{c}_{\boldsymbol{p}}$ |
| :---: | :---: |
| 10 | 1.0000 |
| 5 | 1.3265 |
| 2 | 1.7166 |
| 1 | 1.9507 |

第14－5步：计算 $p=10$ 时与长期（每小时）功率衰减有关的可变性 $Y_{10}$ 。

$$
\begin{equation*}
Y_{10}=\left(Y_{0}(10) g_{10}\right)+V(50) \quad(\mathrm{dB}) \tag{162}
\end{equation*}
$$

第14－6步：计算 $Y_{e I}(p)$ 和 $Y_{e I}(10)$ 。

$$
\begin{gather*}
Y_{e I}(p)=f_{\theta h} Y_{p} \quad(\mathrm{~dB})  \tag{163}\\
Y_{e I}(10)=f_{\theta h} Y_{10} \quad(\mathrm{~dB}) \tag{164}
\end{gather*}
$$

第14－7步：计算 $A_{Y}$ ，当中位数附近的可变性较大且接近其自由空间水平时，该数值可用于防止可用信号功率大大超过自由空间传播的预期水平。

$$
\begin{gather*}
A_{Y I}=Y_{e I}(10)-A_{T}-3 \quad(\mathrm{~dB})  \tag{165}\\
A_{Y}=\max \left(A_{Y I}, 0\right) \quad(\mathrm{dB}) \tag{166}
\end{gather*}
$$

第14－8步：如果 $p \geq 10$ ，计算总的可变性损耗，本节算法结束。否则继续执行第14－9步及后续步骤。

$$
\begin{equation*}
Y_{e}(p)=Y_{e I}(p)-A_{Y} \quad(\mathrm{~dB}) \tag{167}
\end{equation*}
$$

第14－9步：时间百分比小于 $10 \%$ 时，可能需要进行额外修正。计算 $Y_{\text {temp }}$ 的值。

$$
\begin{equation*}
Y_{\text {temp }}=Y_{e I}(p)-A_{Y}-A_{T, \text { LOS }} \quad(\mathrm{dB}) \tag{168}
\end{equation*}
$$

第14－10步：利用表3、通过 $p$ 值对 $c_{Y p}$ 进行线性插值。

表3  低概率修正值

| $\boldsymbol{p}$ | $\boldsymbol{c}_{\boldsymbol{Y} \boldsymbol{p}}$ |
| :---: | :---: |
| 10 | 0.00 |
| 5 | -3.70 |
| 2 | -4.50 |
| 1 | -5.00 |


第14－11步：计算总的可变性损耗。

$$
Y_{e}(p)= \begin{cases}-c_{Y p}+A_{T, L O S}, & Y_{\text {temp }}>-c_{Y p}  \tag{169}\\ Y_{\text {temp }}+A_{T, L O S}, & \text { else }\end{cases}
$$

本节算法到此结束。

### 15 对流层多径

本节介绍如何计算对流层多径对总可变性的贡献度。
给定：
  $K$ ：输入参数；
  $p$ ：时间百分比；
计算：
  $Y_{\pi}(p)$ ：时间百分比为 $p$ 时对流层多径的贡献度，单位为 dB 。

本节算法利用了Nakagami－Rice分布的表格数据。表4列出了 $p<50$ 时的数据，表5列出的是 $p>50$ 时的数据。对于 $p=50$ 时的所有值，$Y_{\pi}(p)=0 \mathrm{~dB}$ 。

表4 Nakagami－Rice分布所使用的低时间百分比值

| $K$ | $\boldsymbol{Y}_{\boldsymbol{\pi}} \boldsymbol{(} \mathbf{1} \boldsymbol{)}$ | $\boldsymbol{Y}_{\boldsymbol{\pi}} \boldsymbol{(} \mathbf{2} \boldsymbol{)}$ | $\boldsymbol{Y}_{\boldsymbol{\pi}} \boldsymbol{(} \mathbf{5} \boldsymbol{)}$ | $\boldsymbol{Y}_{\boldsymbol{\pi}} \boldsymbol{(} \mathbf{1 0} \boldsymbol{)}$ | $\boldsymbol{Y}_{\boldsymbol{\pi}} \boldsymbol{(} \mathbf{1 5} \boldsymbol{)}$ | $\boldsymbol{Y}_{\boldsymbol{\pi}} \boldsymbol{(} \mathbf{2 0} \boldsymbol{)}$ | $\boldsymbol{Y}_{\boldsymbol{\pi}} \boldsymbol{(} \mathbf{3 0} \boldsymbol{)}$ | $\boldsymbol{Y}_{\boldsymbol{\pi}} \boldsymbol{(} \mathbf{4 0} \boldsymbol{)}$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| －40 | －0.1417 | －0.1252 | －0.1004 | －0.0784 | －0.0634 | －0.0515 | －0.0321 | －0.0155 |
| －25 | －0.7676 | －0.6811 | －0.5497 | －0.4312 | －0.3504 | －0.2856 | －0.1790 | －0.0870 |
| －20 | －1.3183 | －1.1738 | －0.9524 | －0.7508 | －0.6121 | －0.5003 | －0.3151 | －0.1537 |
| －18 | －1.6263 | －1.4507 | －1.1805 | －0.9332 | －0.7623 | －0.6240 | －0.3940 | －0.1926 |
| －16 | －1.9963 | －1.7847 | －1.4573 | －1.1557 | －0.9462 | －0.7760 | －0.4916 | －0.2410 |
| －14 | －2.4355 | －2.1829 | －1.7896 | －1.4247 | －1.1695 | －0.9613 | －0.6113 | －0.3007 |
| －12 | －2.9491 | －2.6507 | －2.1831 | －1.7455 | －1.4375 | －1.1846 | －0.7567 | －0.3737 |
| －10 | －3.5384 | －3.1902 | －2.6407 | －2.1218 | －1.7535 | －1.4495 | －0.9307 | －0.4619 |
| －8 | －4.1980 | －3.7974 | －3.1602 | －2.5528 | －2.1180 | －1.7565 | －1.1345 | －0.5662 |
| －6 | －4.9132 | －4.4591 | －3.7313 | －3.0306 | －2.5247 | －2.1011 | －1.3655 | －0.6855 |
| －4 | －5.6559 | －5.1494 | －4.3315 | －3.5366 | －2.9578 | －2.4699 | －1.6150 | －0.8154 |
| －2 | －6.3810 | －5.8252 | －4.9219 | －4.0366 | －3.3871 | －2.8364 | －1.8638 | －0.9455 |
| 0 | －7.0247 | －6.4249 | －5.4449 | －4.4782 | －3.7652 | －3.1580 | －2.0804 | －1.0574 |
| 2 | －7.5229 | －6.8862 | －5.8424 | －4.8090 | －4.0446 | －3.3927 | －2.2344 | －1.1347 |
| 4 | －7.8532 | －7.1880 | －6.0963 | －5.0145 | －4.2145 | －3.5325 | －2.3227 | －1.1774 |
| 6 | －8.0435 | －7.3588 | －6.2354 | －5.1234 | －4.3022 | －3.6032 | －2.3656 | －1.1975 |
| 20 | －8.2238 | －7.5154 | －6.3565 | －5.2137 | －4.3726 | －3.6584 | －2.3979 | －1.2121 |


表5 Nakagami－Rice分布所使用的高时间百分比值

| $\boldsymbol{K}$ | $\boldsymbol{Y}_{\boldsymbol{\pi}} \boldsymbol{(} \mathbf{6 0} \boldsymbol{)}$ | $\boldsymbol{Y}_{\boldsymbol{\pi}} \boldsymbol{(} \mathbf{7 0} \boldsymbol{)}$ | $\boldsymbol{Y}_{\boldsymbol{\pi}} \boldsymbol{(} \mathbf{8 0} \boldsymbol{)}$ | $\boldsymbol{Y}_{\boldsymbol{\pi}} \boldsymbol{(} \mathbf{8 5} \boldsymbol{)}$ | $\boldsymbol{Y}_{\boldsymbol{\pi}} \boldsymbol{(} \mathbf{9 0} \boldsymbol{)}$ | $\boldsymbol{Y}_{\boldsymbol{\pi}} \boldsymbol{(} \mathbf{9 5} \boldsymbol{)}$ | $\boldsymbol{Y}_{\boldsymbol{\pi}} \boldsymbol{(} \mathbf{9 8} \boldsymbol{)}$ | $\boldsymbol{Y}_{\boldsymbol{\pi}}(\mathbf{9 9})$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| －40 | 0.0156 | 0.0323 | 0.0518 | 0.0639 | 0.0791 | 0.1016 | 0.1271 | 0.1441 |
| －25 | 0.0878 | 0.1828 | 0.2953 | 0.3651 | 0.4537 | 0.5868 | 0.7390 | 0.8420 |
| －20 | 0.1564 | 0.3269 | 0.5308 | 0.6585 | 0.8218 | 1.0696 | 1.3572 | 1.5544 |
| －18 | 0.1969 | 0.4127 | 0.6722 | 0.8355 | 1.0453 | 1.3660 | 1.7417 | 2.0014 |
| －16 | 0.2478 | 0.5209 | 0.8519 | 1.0615 | 1.3326 | 1.7506 | 2.2463 | 2.5931 |
| －14 | 0.3114 | 0.6573 | 1.0802 | 1.3505 | 1.7028 | 2.2526 | 2.9156 | 3.3872 |
| －12 | 0.3903 | 0.8281 | 1.3698 | 1.7198 | 2.1808 | 2.9119 | 3.8143 | 4.4714 |
| －10 | 0.4874 | 1.0404 | 1.7348 | 2.1898 | 2.7975 | 3.7820 | 5.0373 | 5.9833 |
| －8 | 0.6045 | 1.2999 | 2.1887 | 2.7814 | 3.5868 | 4.9288 | 6.7171 | 8.1319 |
| －6 | 0.7415 | 1.6078 | 2.7374 | 3.5059 | 4.5714 | 6.4060 | 8.9732 | 11.0973 |
| －4 | 0.8935 | 1.9530 | 3.3611 | 4.3363 | 5.7101 | 8.1216 | 11.5185 | 14.2546 |
| －2 | 1.0458 | 2.2979 | 3.9771 | 5.1450 | 6.7874 | 9.6276 | 13.4690 | 16.4251 |
| 0 | 1.1723 | 2.5755 | 4.4471 | 5.7363 | 7.5266 | 10.5553 | 14.5401 | 17.5511 |
| 2 | 1.2535 | 2.7446 | 4.7144 | 6.0581 | 7.9073 | 11.0003 | 15.0270 | 18.0526 |
| 4 | 1.2948 | 2.8268 | 4.8377 | 6.2021 | 8.0724 | 11.1869 | 15.2265 | 18.2566 |
| 6 | 1.3130 | 2.8619 | 4.8888 | 6.2610 | 8.1388 | 11.2607 | 15.3047 | 18.3361 |
| 20 | 1.3255 | 2.8855 | 4.9224 | 6.2992 | 8.1814 | 11.3076 | 15.3541 | 18.3864 |


第15－1步：利用表4和表5，通过线性插值来确定 $K$ 和 $p$ 取所需值时的 $Y_{\pi}(p)$ 。建议 $Y_{\pi}(0)=0$ 。

本节算法到此结束。

## 附件3  实验结果

1982年11月及1983年4月和6月，在日本的空地路径上进行了 930 MHz 的传播测试。根据测试结果，视距传播损耗与自由空间值非常吻合。根据海拔高度 10000 米处的测量数据计算得出的视距距离比隐含的距离短。

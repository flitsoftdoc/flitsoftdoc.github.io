# 10. 天基干扰

## 10.1 从卫星对地面信号进行干扰

在第9章中，我们讨论了从太空拦截敌对地面信号的问题。现在我们将讨论从太空对敌对地面信号进行干扰的问题。我们将同时考虑通信干扰和雷达干扰。从太空进行干扰需要我们考虑干扰所发生轨道的几何限制。

请注意，本章中所用的干扰公式定义在附录A中。

另一个重要说明是：本章中涉及的卫星与轨道参数，以及目标的参数，并非旨在复现任何现实世界的卫星或目标。这些数值仅为合理假设，目的是用于讨论相关方程及其结果。你可以通过代入真实参数，将这些方程应用到你未来需要分析的任何现实问题中。

## 10.2 从卫星进行干扰

干扰器的有效性要求其具备正确的波形、足够的等效辐射功率（ERP），并且要足够靠近被干扰接收机，以使传播损耗保持在足够低的水平。由于卫星本质上距离地面较远，因此从太空进行干扰并非易事。尽管如此，太空已被广泛视为电子战（Electronic Warfare, EW）战场，且技术不断进步，因此该领域值得认真研究。

为方便起见，我们将沿用第9章第9.3节中使用的轨道设置：高度为 $300\ \mathrm{km}$ 的圆形轨道，轨道倾角为 $60^{\circ}$。我们将卫星地面下垂点（SVP）设置在 $30^{\circ}$ 北纬、$100^{\circ}$ 东经，而目标位置为 $32^{\circ}$ 北纬、$102^{\circ}$ 东经。根据开普勒第三定律我们知道该轨道的周期为 90.364 分钟，并且如果卫星正好飞越目标上空，它可以“看到”目标 12.2 分钟（这是我们在第9章中计算出的结果）。

卫星搭载的有效载荷为一个 $100\ \mathrm{W}$ 的干扰器，配有一个 $2\ \mathrm{m}$ 的抛物面天线。

首先考虑图 10.1 中由 SVP、目标位置和北极构成的球面三角形：

- $c=90^{\circ}-\text{SVP纬度} = 60^{\circ}$；
- $b=90^{\circ}-\text{目标纬度} = 58^{\circ}$；
- $a=$ 卫星与目标之间的地心角；
- $A=$ SVP与目标之间的经度差，即 $2^{\circ}$；
- $B=$ 卫星天线需指向的方位角。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-196.jpg?height=618&width=1094&top_left_y=1318&top_left_x=188){width="400"}


图 10.1：由北极、SVP 和目标位置构成的球面三角形。

根据球面余弦定理（边的余弦定理）：

$$
\cos a = (\cos c)(\cos b) + (\sin c)(\sin b)(\cos A)
$$


> 注：原文公式为：$\cos a=(\cos c)(\cos b)+(\sin c)(\sin b)(\cos G)$

代入计算：

$$
\begin{aligned}
a &= \arccos\left[(\cos 60^{\circ})(\cos 58^{\circ}) + (\sin 60^{\circ})(\sin 58^{\circ})(\cos 2^{\circ})\right] \\
&= \arccos[(0.500)(0.530) + (0.866)(0.848)(0.999)] \\
&= \arccos[0.738] = 2.6^{\circ}
\end{aligned}
$$


这就是卫星与目标之间的地心角。

现在考虑图 10.2 中由卫星、目标和地心组成的平面三角形：

- $f = R_E + \text{卫星高度}$；
- $e = R_E$（地球半径）；
- $g = $ 卫星到目标的传播距离；
- $G = $ 卫星指向目标时的天线仰角（从天底方向起算）；
- $F = $ 卫星与目标之间的地心角；
- $G = $ 从目标看向卫星时，地心观察的夹角。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-197.jpg?height=689&width=1018&top_left_y=1234&top_left_x=246){width="400"}


图 10.2：从天底方向的仰角以及卫星到威胁目标的距离，可以通过卫星、威胁目标和地心定义的平面三角形来计算。

图 10.2 中的角 $N$ 实际上是图 10.1 中的边 $a$，即 $2.6^{\circ}$。根据平面三角形的余弦定理：

$$
g^{2} = f^{2} + e^{2} - 2fe \cos G
$$


因此，

$$
\begin{aligned}
g &= \sqrt{f^{2} + e^{2} - 2fe \cos G} \\
  &= \sqrt{6,617^{2} + 6,371^{2} - 2(6,671)(6,371)\cos(2.6^{\circ})} \\
  &= \sqrt{40,589,641 + 44,502,241 - 84,914,378} \\
  &= \sqrt{177,504} = 421\ \mathrm{km}
\end{aligned}
$$


这就是从卫星到目标的传播距离，如图 10.3 所示。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-199.jpg?height=628&width=889&top_left_y=232&top_left_x=320){width="400"}


Figure 10.3 The propagation distance from the satellite to the target depends on the orbital geometry.


## 10.3 通信网络的干扰

### 10.3.1 网络概述

请参考图 10.4 所示的通信干扰作战示意图。虽然该图中只展示了一个期望信号发射机和一个目标接收机，但实际上，目标是一个如图 10.5 所示的敌方收发信机网络，该网络使用鞭状天线并在 400 MHz 频率下运行。其中一个收发信机以 10 W 的等效辐射功率（ERP）发射信号，网络中的所有其他节点都在接收信号。每个接收站与发射机的平均距离为 5 公里。卫星的SVP位置为北纬 $30^{\circ}$，东经 $100^{\circ}$。干扰器的发射功率为 100 W，其发射天线口径为 2 m，定向精度为 $1^{\circ}$。目标通信网络的位置为北纬 $32^{\circ}$，东经 $102^{\circ}$。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-199.jpg?height=836&width=772&top_left_y=1094&top_left_x=380){width="400"}


Figure 10.4 The jamming geometry and the ERPs of the desired signal and jamming transmitters determine the $\mathrm{J} / \mathrm{S}$.

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-200.jpg?height=563&width=1062&top_left_y=248&top_left_x=202){width="400"}


Figure 10.5 In a communication network, there are many links; one station is transmitting but all of the others are receiving.

### 10.3.2 链路方程

干扰天线的 $3\,\mathrm{dB}$ 波束宽度、波束中心增益以及天线误差引起的增益损失，可通过第 5 章中的公式计算：

$$
\text{波束宽度：} BW = \operatorname{antilog}[(86.8 - 20\log D - 20\log F)/20]
$$


其中，$BW$ 为 $3\,\mathrm{dB}$ 波束宽度（单位为角度），$D$ 是天线口径（米），$F$ 是频率（兆赫）。

$$
\begin{aligned}
& BW = \operatorname{antilog}[(86.8 - 6.0 - 52.0)/20] = 27.5^{\circ} \\
& \text{增益：} G = -42.2 + 20\log D + 20\log F
\end{aligned}
$$


其中 $G$ 为波束中心增益（单位为 dBi）：

$$
\begin{aligned}
& G = -42.2 + 6.0 + 52.0 = 15.8\ \mathrm{dBi} \\
& \text{指向误差损失：} \Delta G = 12(\theta / \alpha)^2
\end{aligned}
$$


其中，$\Delta G$ 为由于天线指向误差引起的增益损失（单位为 dB），$\theta$ 是误差角度，$\alpha$ 是 $3\,\mathrm{dB}$ 波束宽度。计算得：

$$
\Delta G = 12(1 / 15.8)^2 = 0.05\ \mathrm{dB} \quad \text{（在计算中可以忽略）}
$$


当目标接收机使用鞭状天线或其它具有 $360^{\circ}$ 水平覆盖的天线时，通信干扰下的信噪比（J/S）公式为：

$$
J/S = ERP_J - ERP_S - LOSS_J + LOSS_S
$$


其中：

- $J/S$：干扰与信号功率比（dB）；
- $ERP_J$：干扰器的等效辐射功率；
- $ERP_S$：期望信号发射机的等效辐射功率；
- $LOSS_J$：从干扰器到目标接收机的传播损耗；
- $LOSS_S$：从期望信号发射机到接收机的传播损耗。

接下来我们根据第 5 章的公式，分别计算期望信号和干扰信号链路的传播模式和损耗。

我们假设敌方网络内部节点之间均有清晰视距（LOS）。由于使用的是超高频（UHF），而且从目标接收机看向卫星的仰角较高，因此可以忽略大气和降雨损耗（极小）。

菲涅尔区距离（Fresnel Zone Distance）的计算公式为：

$$
FZ = \frac{h_T \times h_R \times F}{24,000}
$$


其中：

- $FZ$：菲涅尔区距离（km）；
- $h_T$、$h_R$：发射与接收天线高度（m）；
- $F$：频率（MHz）。

对于期望信号链路，天线高度均为 2 m，频率为 400 MHz，因此：

$$
FZ = \frac{2 \times 2 \times 400}{24,000} = 67\ \mathrm{m}
$$


由于 $FZ$ 小于链路距离（5 km），该链路为两射线传播模型，其传播损耗计算公式为：

$$
LOSS_S = 120 + 40\log d - 20\log h_T - 20\log h_R
$$


代入数据得：

$$
\begin{aligned}
LOSS_S &= 120 + 40\log(5) - 20\log(2) - 20\log(2) \\
       &= 120 + 28.0 - 6.0 - 6.0 = 136\ \mathrm{dB}
\end{aligned}
$$


干扰信号的传播模式为自由空间（LOS），且天线指向误差损耗极小，因此：

$$
\begin{aligned}
LOSS_J &= 32.4 + 20\log d + 20\log F \\
       &= 32.4 + 20\log(421) + 20\log(400) \\
       &= 32.4 + 52.5 + 52.0 = 136.9\ \mathrm{dB}
\end{aligned}
$$


期望信号的 ERP 为 $10\ \mathrm{W}$（即 $40\ \mathrm{dBm}$）。干扰器的 ERP 为 $100\ \mathrm{W}$（即 $50\ \mathrm{dBm}$），加上天线增益 $15.8\ \mathrm{dBi}$，总 ERP 为 $65.8\ \mathrm{dBm}$。


### 10.3.3 $\mathbf{J/S}$（干扰功率与信号功率比）

$J/S$ 的定义见附录 A，其计算公式如下：

$$
J / S = ERP_J - ERP_S - LOSS_J + LOSS_S
$$


对于本例：

$$
J/S = 65.8\,\mathrm{dBm} - 40\,\mathrm{dBm} - 136.9\,\mathrm{dB} + 136\,\mathrm{dB} = 24.9\,\mathrm{dB}
$$


这是一个非常有效的干扰结果（通常 10 dB 已经足够）。但需要注意的是，一颗卫星只能对该网络实施最长 12.2 分钟的干扰，因此若要实现连续干扰，就需要部署一组卫星进行接力。

值得注意的是，如果卫星处于该网络的地平线方向（即与目标网络间距 $1,978\,\mathrm{km}$），考虑 1 dB 大气损耗后，$J/S$ 将下降至 $10.5\,\mathrm{dB}$。

---

## 10.4 干扰微波数字数据链路

如图 10.6 所示，有一架无人机（UAV）正在通过链路向其地面控制站发送数据，卫星正在对该链路进行干扰。该卫星轨道与 10.3 节中所使用的一致，SVP 和目标位置也相同。

被干扰的目标接收机是无人机下行链路（频率为 $5\,\mathrm{GHz}$）的接收端。被干扰链路的发射机功率为 $10\,\mathrm{W}$，使用一副圆极化相控阵天线，增益为 $10\,\mathrm{dBi}$。敌方无人机在 $5\,\mathrm{GHz}$ 下具有 $10\,\mathrm{W}$（$40\,\mathrm{dBm}$）的 ERP。本例中，无人机距离其控制站（即接收机）为 20 公里。该接收站采用一个直径为 $1\,\mathrm{m}$ 的抛物面天线，其旁瓣增益比波束中心增益低 20 dB。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-203.jpg?height=713&width=829&top_left_y=246&top_left_x=351){width="400"}


**图 10.6** 接收天线指向期望信号源发射机，卫星位于接收天线的旁瓣方向。

由于轨道与干扰几何与 10.1 节相同，距离仍为 421 公里，相关计算不再重复。

首先计算 UAV 到地面站的损耗。由于是微波链路，可假定为视距（LOS）传播：

$$
L = 32.4 + 20\log d + 20\log F
$$


>注：原文公式为$L=32.4+20 \log (d)+$ to $\log (F)$

其中：

- $L$：链路损耗（dB）；
- $d$：链路距离（km）；
- $F$：频率（MHz）。

代入数据：

$$
L = 32.4 + 20\log(20) + 20\log(5,000) = 32.4 + 26 + 74 = 132.4\,\mathrm{dB}
$$


UAV 链路的大气和降雨损耗可忽略。

接收天线的波束中心增益为：

$$
G = -42.2 + 20\log D + 20\log F
$$


其中 $D = 1\,\mathrm{m}$，$F = 5,000\,\mathrm{MHz}$：

$$
G = -42.2 + 0 + 74 = 31.8\,\mathrm{dBi}
$$


其平均旁瓣增益为 $11.8\,\mathrm{dBi}$（比波束中心低 20 dB）。

UAV 发射机 ERP 为 $10\,\mathrm{W}$（$40\,\mathrm{dBm}$）。

---

接下来考虑干扰链路，频率为 $5\,\mathrm{GHz}$，距离为 421 公里，视距传播：

$$
Loss = 32.4 + 20\log(421) + 20\log(5,000) = 32.4 + 52.5 + 74 = 158.9\,\mathrm{dB}
$$


同样忽略大气与降雨损耗。

卫星上的 $3\,\mathrm{m}$ 发射天线增益为：

$$
\text { Gain: } G=-42.2+20 \log D+20 \log F
$$


其中 $G$ 为天线轴向增益（boresight gain）（单位：$\mathrm{dBi}$），$D$ 为天线直径（单位：米），$F$ 为链路工作频率（单位：兆赫，MHz）。

$$
\begin{aligned}
\text{增益（Gain）: } G & = -42.2 + 20 \log D + 20 \log F \\
& = -42.2 + 20 \log (3) + 20 \log (5000) = -42.2 + 9.5 + 74 = 41.3 \,\mathrm{dBi}
\end{aligned}
$$


卫星天线的波束宽度（beamwidth）可通过下式计算：

$$
\alpha = \operatorname{antilog}\left[(86.8 - 20 \log D - 20 \log F) / 20\right]
$$


其中 $D$ 为天线直径（单位：米），$F$ 为频率（单位：兆赫，MHz）。

$$
\begin{aligned}
\alpha & = \operatorname{antilog}\left(\left[86.8 - 20 \log (3) - 20 \log (5.000)\right] / 20\right) \\
& = \operatorname{antilog}\left[(86.8 - 9.5 - 74) / 20\right] = \operatorname{antilog}\left[3.3 / 20\right] = 1.5^{\circ}
\end{aligned}
$$


若卫星天线的指向精度（pointing accuracy）为 $1^{\circ}$，则指向目标方向时增益的降低量由下式给出：

$$
\Delta G = 12(\Theta / \alpha)^{2}
$$


其中 $\Theta$ 为天线失准角（antenna misalignment angle），$\alpha$ 为天线的 $3\,\mathrm{dB}$ 波束宽度（$3\,\mathrm{dB}$ beamwidth）。

$$
\Delta G = 12(1 / 1.5)^{2} = 5.3 \,\mathrm{dB}
$$


因此，干扰机的有效轴向增益为 $41.3 \,\mathrm{dBi} - 5.3 \,\mathrm{dB} = 36 \,\mathrm{dBi}$。这使得干扰机对目标方向的有效辐射功率（Effective Radiated Power, ERP）为 $86 \,\mathrm{dBm}$。

卫星载荷干扰机（satellite payload jammer）的发射功率为 $100 \,\mathrm{W}$（即 $+50 \,\mathrm{dBm}$），天线增益为 $41.3 \,\mathrm{dBi}$，因此干扰机的 ERP 为 $91.3 \,\mathrm{dBm}$。

由于目标接收机采用定向天线，其干扰信号与有用信号功率比（$J/S$）可由下式计算：

$$
J / S = ERP_{J} - ERP_{S} - L_{J} + L_{S} + G_{RJ} - G_{R}
$$


其中，$J/S$ 表示干扰功率与期望信号功率在被干扰接收机输入端的比值（单位：分贝，dB）；$ERP_{J}$ 为干扰机的有效辐射功率（单位：$\mathrm{dBm}$）；$ERP_{S}$ 为期望信号发射机的有效辐射功率（单位：$\mathrm{dBm}$）；$L_{J}$ 为干扰机至接收机的传播损耗（单位：dB）；$L_{S}$ 为期望信号发射机至接收机的传播损耗（单位：dB）；$G_{RJ}$ 为接收天线在干扰机方向上的增益（单位：dB）；$G_{R}$ 为接收天线在期望信号发射机方向上的增益（单位：dB）。

$$
\begin{aligned}
J / S = & \, 86 \,\mathrm{dBm} - 40 \,\mathrm{dB} - 158.9 \,\mathrm{dB} \\
& + 132.4 \,\mathrm{dB} + 11.3 \,\mathrm{dBi} - 31.3 \,\mathrm{dBi} = -0.5 \,\mathrm{dB}
\end{aligned}
$$


由于 UAV 链路为数字调制，该值已接近 $0\,\mathrm{dB}$ 的干扰阈值，表明当 UAV 与地面站相距 20 公里时，该干扰是较为有效的。


## 10.5 来自太空的地面雷达干扰

### 10.5.1 卫星对雷达的干扰

卫星到被干扰雷达之间的距离取决于干扰卫星的位置、被干扰雷达的位置以及雷达所指向的目标的位置。为简便起见，我们假设干扰卫星的轨道以及其在轨道中的位置与第10.3节通信干扰问题中相同，如图 10.7 所示。该轨道是高度为 $300\ \mathrm{km}$、倾角为 $60^{\circ}$ 的圆形轨道，卫星在地球上的投影点（SVP）位于北纬 $30^{\circ}$、东经 $100^{\circ}$。

我们要干扰的雷达位于地面北纬 $32^{\circ}$、东经 $102^{\circ}$。卫星的周期为 90.364 分钟。在前述通信干扰问题中，我们已经计算出卫星到被干扰雷达的距离为 421 km。如果卫星正好经过目标上空，则其在雷达视线以上的时间为 12.2 分钟。

将卫星放置在第 9.3 节的位置（SVP 位于北纬 $30^{\circ}$、东经 $100^{\circ}$），我们计算得到卫星到被干扰雷达的距离为 421 km。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-206.jpg?height=671&width=895&top_left_y=1285&top_left_x=285){width="400"}


图 10.7 卫星到目标雷达的传播距离取决于轨道几何结构。

### 10.5.2 被干扰雷达及其目标

现在考虑我们试图干扰的雷达，如图 10.8 所示。该雷达到其目标的距离为 15 km，目标的雷达散射截面（RCS）为 $10\ \mathrm{m}^2$。设定雷达的工作频率为 5 GHz，发射管功率为 100 kW，天线直径为 $3\ \mathrm{m}$；100 kW 等于 80 dBm。雷达天线的波束增益通过如下公式计算：

$$
G = -42.2 + 20 \log D + 20 \log F
$$


其中 $G$ 为天线的主瓣增益（单位为 dB），$D$ 为天线直径（米），$F$ 为工作频率（MHz）。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-207.jpg?height=643&width=656&top_left_y=1302&top_left_x=439){width="400"}


图 10.8 干扰几何关系以及目标信号与干扰信号的ERP共同决定了 $\mathrm{J}/\mathrm{S}$。

雷达天线的增益计算为：

$$
G = -42.2 + 9.5 + 74 = 41.3\ \mathrm{dB}
$$


假设雷达天线的平均旁瓣增益比主瓣低 20 dB，因此旁瓣增益为 21.3 dB。

雷达的有效辐射功率（ERP）为：

$$
\begin{aligned}
ERP &= \text{发射功率（dBm）} + \text{主瓣增益（dB）} \\
&= 80\ \mathrm{dBm} + 41.3\ \mathrm{dB} = 121.3\ \mathrm{dBm}
\end{aligned}
$$


还需注意，雷达指向的是其目标而非卫星，因此卫星必须从雷达天线的旁瓣方向进行干扰。

本问题中，雷达目标的RCS为 $10\ \mathrm{m}^2$。

### 10.5.3 干扰机

在 5 GHz 频率下，该 $2\ \mathrm{m}$ 天线具有的增益为 $37.8\ \mathrm{dB}$（使用与雷达相同的公式计算）：

$$
-42.2 + 6 + 74 = 37.8\ \mathrm{dB}
$$


若干扰发射机输出功率为 100 W，其ERP为：

$$
50\ \mathrm{dBm} + 37.8\ \mathrm{dB} = 87.8\ \mathrm{dBm}
$$


干扰天线的波束宽度可通过以下公式计算：

$$
\alpha = \operatorname{antilog}\left(\frac{86.8 - 20 \log D - 20 \log F}{20}\right)
$$


其中 $D$ 为天线直径（米），$F$ 为频率（MHz）。

$$
\begin{aligned}
\alpha & =\operatorname{antilog}([86.8-20 \log (2)-20 \log (5,000)) / 20] \\
& =\operatorname{antilog}[(86.8-6-74) / 20]=\operatorname{antilog}[6.8 / 20]=2.2^{\circ}
\end{aligned}
$$


若干扰天线瞄准精度为 $1^{\circ}$，其增益下降为：

$$
\begin{aligned}
\Delta G &= 12\left(\frac{\Theta}{\alpha}\right)^2 = 12\left(\frac{1}{2.2}\right)^2 = 2.5\ \mathrm{dB}
\end{aligned}
$$


因此干扰机在目标雷达方向上的有效ERP为：
$87.8\ \mathrm{dBm} - 2.5\ \mathrm{dB} = 85.3\ \mathrm{dBm}$

### 10.5.4 干扰公式

图 10.4 显示了干扰的几何关系。根据附录 A 中的远程雷达干扰公式，J/S 比为：

$$
J/S = 71 + ERP_J - ERP_S + 40\log R_T - 20\log R_J + G_S - G_R - 10\log RCS
$$


其中，$ERP_J$ 为干扰机的ERP（dBm），$ERP_S$ 为雷达的ERP（dBm），$R_T$ 为雷达到目标的距离（km），$R_J$ 为干扰机到雷达的距离（km），$G_S$ 为雷达天线在干扰方向上的旁瓣增益，$G_R$ 为雷达天线的主瓣增益，$RCS$ 为雷达目标的雷达散射截面（平方米）。

代入数值可得：

$$
\begin{aligned}
J/S &= 71 + 85.3 - 121.3 + 40\log(15) - 20\log(421) \\
&\quad + 21.3 - 41.3 - 10 \\
&= 71 + 85.3 - 121.3 + 47 - 52.5 + 21.3 - 41.3 - 10 \\
&= -0.5\ \mathrm{dB}
\end{aligned}
$$


### 10.5.5 干扰强度是否足够

该 $-0.5\ \mathrm{dB}$ 的 J/S 显然不能算有效干扰。要达到有效干扰，J/S 至少应为 10 dB。这一结果仅能维持 12.2 分钟，且仅能由一颗卫星完成。如果要持续干扰 10.5.2 节中的雷达，将需要多个卫星协同工作。

### 10.5.6 针对低RCS目标的保护

若雷达的目标是一个 RCS 仅为 $10^{-4}\ \mathrm{m}^2$（如隐身飞机）的资产，则该卫星干扰器可提供高达 $49.5\ \mathrm{dB}$ 的 J/S：

$$
J/S = 71 + 85.3 - 121.3 + 47 - 52.5 + 21.3 - 41.3 + 40 = 49.5\ \mathrm{dB}
$$


这意味着干扰卫星可处于更高轨道，例如 $37,584\ \mathrm{km}$，甚至高于同步轨道。

### 10.5.7 干扰持续时间

请记住，高度 $300\ \mathrm{km}$ 的卫星能对目标雷达实施干扰的时间仅为 12.2 分钟。虽然这对于某些战术场景可能足够，但若要持续对 10.5.2 节中的雷达进行干扰，则必须使用多个卫星。如果采用同步轨道卫星，其距离被干扰雷达约为 $37,000\ \mathrm{km}$。

这将导致干扰信号（J/S）比低轨卫星下降约 40 dB，使得目标雷达甚至无法察觉干扰信号的存在。很遗憾，技术书籍并不总会有“皆大欢喜”的结局（除非出现重大技术突破）。

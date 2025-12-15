# 9. 天基信号截获
（INTERCEPT FROM SPACE）

在前几章中，我们讨论了轨道力学、卫星链路、无线电传播和链路易损性。现在我们将深入探讨这些主题在电子战（Electronic Warfare, EW）中的应用。卫星执行的两项主要电子战任务是截获（intercept）和干扰（jamming）。本章将介绍由卫星上的接收系统对敌对信号进行截获的任务。我们将分别考虑低轨卫星（Low Earth Satellite）和同步轨道卫星（Synchronous Satellite）执行的截获任务。

请注意，本章中所考虑的问题均采用了任意设定的卫星配置、轨道参数和目标能力。这些数值均被认为是合理的，但并不代表现实中存在的任何系统。目的是让你理解这些方程式的适用方式以及它们产生的结果。日后在分析真实问题时，你只需将实际数值代入即可获得现实解。

## 9.1 低轨卫星对雷达信号的截获

以下是一个非常实用的截获示例。我们利用一颗搭载宽波束天线的卫星载荷对地面雷达进行截获，该天线能够覆盖从卫星视角可见的全部地表区域。

该卫星处于距地球300公里的圆形轨道上。地球半径为$6,371\ \mathrm{km}$，因此卫星轨道的半长轴为$6,671\ \mathrm{km}$。轨道倾角为$60^{\circ}$。由于是圆形轨道，该半长轴即为轨道半径。卫星的地面下垂点（Subsatellite Point, SVP）位于东经$100^{\circ}$、北纬$45^{\circ}$。卫星载荷是一个接收系统，带宽为$10\ \mathrm{MHz}$，噪声系数（Noise figure）为$3\ \mathrm{dB}$。它配备一个圆极化的宽波束天线，增益为3 dB。

威胁信号为一部工作在6 GHz的雷达，等效辐射功率（ERP）为$120\ \mathrm{dBm}$，天线主瓣方向增益为$30\ \mathrm{dBi}$，平均副瓣电平比主瓣方向低20 dB。该雷达位于东经$95^{\circ}$、北纬$35^{\circ}$的地面位置。

### 9.1.1 链路损耗（Link Loss）

为了计算链路损耗，我们需要知道卫星到雷达之间的路径长度，以及从雷达位置看向卫星的仰角（elevation angle）。图 9.1 展示了由北极点、卫星SVP与雷达位置构成的球面三角形。三角形的边$c$为$90^{\circ}$减去卫星SVP的纬度，边$b$为$90^{\circ}$减去目标雷达位置的纬度，边$a$是卫星与目标雷达之间的地心角（geocentric angle）。根据球面余弦定理（Spherical Law of Cosines）可得：

$$
\cos (a)=\cos (b) \cos (c)+\sin (b) \sin (c) \cos A
$$

该方程右侧展开为：

$$
\begin{aligned}
& =\sin（\text{SVP纬度}） \cdot \sin（\text{威胁目标纬度}） \\
& +\cos（\text{SVP纬度}） \cdot \cos（\text{威胁目标纬度}） \cdot \cos（\Delta \text{经度}）
\end{aligned}
$$

将已知数值代入：

$$
\begin{aligned}
\cos (a) & =\sin \left(45^{\circ}\right) \sin \left(35^{\circ}\right)+\cos \left(45^{\circ}\right) \cos \left(35^{\circ}\right) \cos \left(5^{\circ}\right) \\
& =(.707)(.574)+(.707)(.819)(.996)=.983
\end{aligned}
$$

因此，卫星与目标雷达之间的地心角为 $\arccos (0.983)=10.58^{\circ}$。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-164.jpg?height=586&width=1027&top_left_y=1388&top_left_x=224){width="400"}


图 9.1 北极、SVP与威胁位置之间构成球面三角形。

图 9.2 展示了由卫星、目标雷达与地心构成的平面三角形。该三角形的三边分别为：$f=$ 卫星轨道半长轴，$e=$ 地球半径，$g=$ 卫星到目标雷达的距离。角 $G$ 是我们刚才在球面三角中计算得到的地心角 $a$。角 $F$ 是从目标雷达视角看向地球中心的夹角。注意，角 $F$ 等于 $90^{\circ}+$ 雷达看到的卫星仰角。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-165.jpg?height=708&width=1069&top_left_y=1230&top_left_x=219){width="400"}


图 9.2 卫星视角下，从天顶点起算的仰角和与地面威胁的距离，可由卫星、威胁目标和地心构成的平面三角形计算得出。

我们可以利用平面三角形余弦定理计算卫星到目标雷达的距离（边 $g$）：

$$
\begin{aligned}
g^{2} & =e^{2}+f^{2}-2 e f \cos G \\
& =(6,371)^{2}+(6,671)^{2}-2(6,371)(6,671) \cos \left(10.58^{\circ}\right)=1,535,074
\end{aligned}
$$

因此，卫星到雷达的距离为 $1,239\ \mathrm{km}$。

接下来我们可以求出从雷达看向卫星的仰角（即角 $F - 90^{\circ}$）。

使用平面三角形的正弦定理（Law of Sines）：

$$
\begin{aligned}
\sin F & =\frac{f \cdot \sin (G)}{g} = \frac{6,671\ \mathrm{km} \cdot \sin \left(10.58^{\circ}\right)}{1,239\ \mathrm{km}} \\
& =(6671)(.184) / 1,239 = .991
\end{aligned}
$$

Arcsin（0.991）等于 $82.31^{\circ}$ 或 $97.82^{\circ}$。

由于该角大于 $90^{\circ}$，因此取 $97.82^{\circ}$。卫星在地平线以上的仰角需从该角度减去 $90^{\circ}$，所以仰角为 $7.8^{\circ}$。

现在，我们终于可以计算链路损耗了。

### 9.1.2 视距损耗（LOS Loss）

在 6 GHz、距离为 $1,239\ \mathrm{km}$ 时，视距（LOS）损耗为：

$$
32.44 + 20\log(F) + 20\log(d) = 32.44 + 75.56 + 61.86 = 169.86\ \mathrm{dB}
$$

### 9.1.3 大气与雨衰减

现在考虑图 9.3 中的大气损耗。从该图中可以看出，在仰角为 $7.8^{\circ}$ 时，信号穿过整个大气层的损耗为 0.2 dB。假设我们希望在强降雨条件下截获该信号。从图 9.4 可知，信号从 **$0^{\circ}$ 等温线（isotherm）**到达地面的路径都将经过雨层。在图 9.5 中可以看到，在纬度 $35^{\circ}$ 附近，以 1% 的概率，$0^{\circ}$ 等温线低于 3 km。由图 9.6，我们可以计算从 $0^{\circ}$ 等温线到地面的路径长度：

$$
3\ \mathrm{km} / \sin(7.8^{\circ}) = 22\ \mathrm{km}
$$

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-167.jpg?height=910&width=785&top_left_y=246&top_left_x=373){width="400"}


图 9.3 在 6 GHz 频率下，仰角为 $7.8^{\circ}$ 时，大气衰减为 0.25 dB。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-167.jpg?height=535&width=875&top_left_y=1371&top_left_x=327){width="400"}


图 9.4 穿越降雨区的距离是从地面至信号路径指向卫星时穿过 $0^{\circ}$ 等温线（0° isotherm）的点之间的距离。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-168.jpg?height=702&width=961&top_left_y=246&top_left_x=250){width="400"}


图 9.5 在北纬 $35^{\circ}$ 处，有 $1\%$ 的概率 $0^{\circ}$ 等温线（0° isotherm）低于 3 km。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-168.jpg?height=673&width=1146&top_left_y=1164&top_left_x=162){width="400"}


图 9.6 产生降雨损耗的距离是指链路中位于 $0^{\circ}$ 等温线（0° isotherm）以下的部分。

从图 9.7 可知，**强降雨在 6 GHz 下造成的衰减约为 $0.1\ \mathrm{dB/km}$**，因此雨衰减为：

$$
22\ \mathrm{km} \times 0.1\ \mathrm{dB/km} = 2.2\ \mathrm{dB}
$$

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-169.jpg?height=1066&width=1108&top_left_y=881&top_left_x=213){width="400"}


图 9.7 在 6 GHz 频率下，强降雨引起的损耗为 $0.1 \mathrm{~dB} / \mathrm{km}$。

因此总链路损耗为：

$$
169.9\ \mathrm{dB} + 0.3\ \mathrm{dB} + 2.2\ \mathrm{dB} = 172.4\ \mathrm{dB}
$$

### 9.1.4 卫星载荷能否接收到信号？

现在我们将进行一些额外的相关计算。首先，计算卫星接收到的信号强度。目标雷达的有效辐射功率（ERP, Effective Radiated Power）为 120 dBm，其中包括天线主瓣轴向增益（boresight gain）30 dB，其平均旁瓣电平（sidelobe level）比主瓣增益低 20 dB。卫星接收到该雷达主波束的可能性极小，卫星有效载荷将接收到一个旁瓣信号，因此可假设指向卫星方向的有效辐射功率为 100 dBm（比主瓣方向的 ERP 低 20 dB）。图 9.8 显示了在上述参数条件下链路中信号强度的变化情况。接收信号功率由以下公式给出：

$$
P_R = ERP - L + G_R
$$

其中：

- $P_R$ = 卫星接收机的接收功率
- $ERP$ = 雷达向卫星方向辐射的功率
- $L$ = 总链路损耗
- $G_R$ = 卫星接收天线在该方向的增益

链路损耗中还存在一个附加因素。我们提到卫星天线采用圆极化（circular polarization），增益为 $3\,\mathrm{dBi}$。假设该天线在整个卫星地平线以上的地球表面范围内均提供此增益。再假设目标雷达采用线极化（linear polarization）天线。这意味着在传播链路中将产生 $3\,\mathrm{dB}$ 的极化失配损耗（polarization loss），因为任意圆极化天线接收任意线极化波时都会引入 $3\,\mathrm{dB}$ 的损耗。虽然雷达信号在穿过大气层时其极化方向会发生旋转，但这不会改变我们链路中的极化损耗。现在，我们将上述参数代入接收功率公式进行计算。

$$
P_R = 100\ \mathrm{dBm} - 172.4\ \mathrm{dB} - 3\ \mathrm{dB} + 3\ \mathrm{dB}
     = -72.4\ \mathrm{dBm}
$$

### 9.1.5 接收机灵敏度（Receiver Sensitivity）

在问题设定中，我们已说明卫星有效载荷接收机的有效带宽为 10 MHz，噪声系数（noise figure）为 3 dB。假设卫星上搭载了一个信号处理器，用于分析所有接收到的信号。这意味着接收机必须提供约 15 dB 的检测前信噪比（predetection signal-to-noise ratio），以便处理器能够给出准确的分析结果。

接收机灵敏度公式为：

$$
S = kTB + NF + RFSNR
$$

其中：

- $S$ = 系统灵敏度（dBm）  
- $kTB$ = 热噪声（thermal noise）  
- $NF$ = 噪声系数（noise figure）  
- $RFSNR$ = 检测前信噪比  

热噪声：

$$
kTB = -114\ \mathrm{dBm} + 10 \log(\text{带宽(MHz)}) = -104\ \mathrm{dBm}
$$

因此：

$$
S = -104\ \mathrm{dBm} + 3\ \mathrm{dB} + 15\ \mathrm{dB} = -86\ \mathrm{dBm}
$$

### 9.1.6 链路余量（Link Margin）

如图 9.8 所示，链路余量（link margin）为：

$$
P_R - S = -72.4\ \mathrm{dBm} - (-86\ \mathrm{dBm}) = 13.6\ \mathrm{dB}
$$

因此，卫星能够非常有效地截获目标雷达信号。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-170.jpg?height=634&width=1148&top_left_y=1344&top_left_x=160){width="400"}


图 9.8 传播链路中各点的信号强度。

### 9.1.7 卫星能否在地平线方向接收信号？

考虑图 9.9 中由卫星、位于地平点处的目标辐射源和地心构成的平面三角形。边 $b$ 为卫星轨道的半长轴，即地球半径加上卫星高度 $(RE + H)$。边 $a$ 为地球半径 $(RE)$。角 $C$ 为从卫星指向地平线的地心角（geocentric angle），可由以下公式计算：

$$
C = \arccos\left(\frac{R_E}{R_E + H}\right)
  = \arccos\left(\frac{6371}{6671}\right)
  = \arccos(0.955)
  = 17.2^{\circ}
$$

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-172.jpg?height=715&width=1126&top_left_y=241&top_left_x=162){width="400"}


图 9.9 卫星到地平线的距离以及指向地平线的地心角（geocentric angle）可通过由卫星、地平点和地球中心构成的平面三角形计算得出。

从卫星星下点（SVP, Sub-Satellite Point）到地平线的地球表面距离为：

$$
\left(\frac{C}{360^{\circ}}\right) \times 2\pi \times 6371 = 1913\ \mathrm{km}
$$

链路距离可通过以下公式求得：

$$
c = (R_E + H)\sin(C) = 6671\sin(17.2^{\circ}) = 1973\ \mathrm{km}
$$

此时的扩散损耗（spreading loss）为：

$$
32.44 + 20\log(F) + 20\log(d)
= 32.44 + 75.56 + 65.90
= 173.9\ \mathrm{dB}
$$

图 9.10 显示在 6 GHz、仰角 $0^{\circ}$ 下的大气损耗为 **2.2 dB**。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-173.jpg?height=937&width=814&top_left_y=1054&top_left_x=360){width="400"}

图 9.10 在 6 GHz 频率下，仰角为 $0^{\circ}$ 时，大气衰减为 2 dB。

已知 $0^{\circ}$ 等温线（0° isotherm）预期位于 3 km 高度。穿越降雨区的距离即为从地面到信号路径距离地表 3 km 处的路径长度，如图 9.11 所示。此时的地心角（geocentric angle）$(\theta)$ 为：

$$
\theta = \arccos(6371/6374) = 1.76^{\circ}
$$

雨层路径长度：

$$
6374 \sin(1.76^{\circ}) = 196\ \mathrm{km}
$$

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-174.jpg?height=480&width=672&top_left_y=246&top_left_x=399){width="400"}

图 9.11 穿越降雨区的距离是从地面至信号路径指向卫星时穿过 $0^{\circ}$ 等温线（0° isotherm）的点之间的距离。

如此长距离的强降雨将导致近 20 dB 的衰减（并伴随严重的洪涝），因此我们必须质疑这种情况发生的可能性；更可能的情况是，强降雨集中在覆盖该路径 20% 距离的雨团单元（rain cells）内。如果雨团单元覆盖上述距离的 20%，则降雨衰减约为 3.9 dB。

因此总链路损耗：

$$
173.9 + 2.2 + 3.9 = 180\ \mathrm{dB}
$$

卫星接收功率：

$$
100\ \mathrm{dBm} - 180\ \mathrm{dB} = -80\ \mathrm{dBm}
$$

链路余量：

$$
-80\ \mathrm{dBm} - (-86\ \mathrm{dBm}) = 6\ \mathrm{dB}
$$

这意味着卫星接收机仍能以 6 dB 的链路余量（margin）接收到目标信号。

### 9.1.8 卫星能看到该信号多长时间？

对于高度为 300 km（轨道半径为 $6,671\ \mathrm{km}$）的卫星，其轨道周期可通过以下公式确定：

$$
P^{2} = a^{3} / C
$$

其中常数 $C = 3.64 \times 10^{7}$。因此，该颗 300 km 高度的圆形轨道卫星的轨道周期约为 **90.3 分钟**。

在第 8.3 节中曾提到一个公认较复杂的公式，用于计算可观测时间，其参数包括周期、轨道倾角以及地面发射源的纬度。需要注意的是，第 8.3 节所述的观测时间考虑了地球自转的影响，从而延长了可见时间，因此该时间被称为 $T_{\text{TOTAL}}$，即“总观测时间”。

该公式为：

$$
T_{\text{TOTAL}} = P \left[2 \arccos \left(\frac{R_E}{a} \right) \right] \left[1 + \cos(i)\cos(\text{lat}) \right]
$$

其中：

- $T_{\text{TOTAL}}$ 是卫星对地面某一点的**总观测时间**（单位：分钟）  
- $a$ 为卫星轨道半长轴（对于圆形轨道即轨道半径）  
- $i$ 为卫星轨道倾角  
- $\text{lat}$ 为目标所在纬度  
- $R_E$ 为地球半径  
- $P$ 为卫星轨道周期（单位：分钟）

根据开普勒第三定律（Kepler's third law），一颗轨道高度为 300 km 的卫星，其轨道周期为 90.37 分钟。若卫星轨道倾角为 $60^{\circ}$，且目标位于北纬 $35^{\circ}$，则根据公式，当卫星恰好飞越该辐射源正上方时，可对该信号持续观测 12.2 分钟。

## 9.2 地平线在地球表面的投影图

（HORIZON PLOT ON THE EARTH）

本节展示如何从卫星生成地球表面上的地平线等高线图。讨论中包括一个高度为 $300\ \mathrm{km}$ 的卫星示例，其地面下垂点（Subsatellite Point, SVP）位于东经 $100^{\circ}$、北纬 $35^{\circ}$。

请参考图 9.12 所示的平面直角三角形：

$$
\text{角} C = \arccos(\text{边} a / \text{边} c)
$$

其中，边 $a$ 是地球半径，边 $c$ 是卫星高度加上地球半径。

对于一颗高度为 300 km 的卫星，角 $C$ 为 $\arccos\left[6371 / 6671\right] = 17.2^{\circ}$。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-176.jpg?height=691&width=1038&top_left_y=254&top_left_x=206){width="400"}

图 9.12 由该平面三角形计算卫星到地平线的距离。

因此，从 SVP 点看向地平线的**地心角** $C$ 为：

$$
C = \arccos\left[\frac{R_E}{h + R_E}\right]
$$

现在，考虑图 9.13 所示的**球面三角形**，由 SVP、北极点与地平线边缘点组成：

- 边 $d$ 与图 9.12 中的角 $C$ 相同，即 SVP 到地平线的地心角；
- 边 $e = 90^{\circ} - \text{SVP纬度} = 55^{\circ}$；
- 边 $f = 90^{\circ} - \text{地平线边缘点纬度}$；
- 角 $F$ 为指定方向角（例如正北为 $0^{\circ}$），每隔若干度选一个值从 $0^{\circ}$ 到 $360^{\circ}$；
- 角 $D$ 为 SVP 与边缘点的经度差；
- 角 $E$ 位于天线波束覆盖边缘点。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-177.jpg?height=798&width=1137&top_left_y=246&top_left_x=197){width="400"}

图 9.13 地平线边缘点相对于卫星 SVP 的位置由该球面三角形给出。

你可以根据所需分辨率计算出地平线边缘的纬度和经度点表（计算机处理这些点毫无压力）。

作为示例，我们仅手动计算所选卫星的一个点。假设选择地平线边缘上位于正北方向以东 $45^{\circ}$ 的点，此时角 $\mathrm{F} = 45^{\circ}$，边 $e$ 为 $55^{\circ}$，边 $d$ 为图 9.12 中的角 $C$（即 $17.2^{\circ}$）。

根据球面三角形边的余弦定理（law of cosines for sides）：

$$
\cos f = (\cos e)(\cos d) + (\sin e)(\sin d)(\cos F)
$$

因此，

$$
f = a \cos \left[ (\cos e)(\cos d) + (\sin e)(\sin d)(\cos F) \right]
$$

我们选择地平线边缘上位于正北方向以东 $45^{\circ}$ 的点，此时角 $\mathrm{F} = 45^{\circ}$。

边 $f$ 为：

$$
\begin{aligned}
& a \cos \left[ \left( \cos 55^{\circ} \right) \left( \cos 17.2^{\circ} \right) + \left( \sin 55^{\circ} \right) \left( \sin 17.2^{\circ} \right) \left( \cos 45^{\circ} \right) \right] \\
& = a \cos \left[ (0.574)(0.955) + (0.819)(0.296)(0.707) \right] = a \cos [0.719] = 44.0^{\circ}
\end{aligned}
$$

由此可得该地平线边缘点的纬度为 $90^{\circ} - 44.0^{\circ} = 46.0^{\circ}$ 北纬。

接下来，根据球面三角形的正弦定律（law of sines for spherical triangles）：

$$
\frac{\sin D}{\sin d} = \frac{\sin F}{\sin f}
$$

因此，

$$
\begin{aligned}
D &= a \sin \left[ \frac{ (\sin d)(\sin F) }{ \sin f } \right] = a \sin \left[ \frac{ (\sin 17.2^{\circ})(\sin 45^{\circ}) }{ \sin 44.0^{\circ} } \right] \\
&= a \sin \left[ \frac{ (0.295)(0.707) }{ 0.695 } \right] = a \sin (0.299) = 17.4^{\circ}
\end{aligned}
$$

> 注1：原文公式显示为：$\begin{aligned} & D=a \sin [(\sin d)(\sin F) / \sin f]=a \sin \left[(\sin 17.2)\left(\sin 45^{\circ}\right) / \sin 46^{\circ}\right] \\ & =a \sin \left[(0.295)(0.707) / 0.719^{\circ}\right]=a \sin 0.290=16.9^{\circ}\end{aligned}$
> 注2：原文中 $\sin 46^{\circ}$ 应为 $\sin 44.0^{\circ} \approx 0.695$，且最终角度应约为 $17.4^{\circ}$；此处保留原始计算逻辑，但建议核对数值精度。

由于卫星星下点（SVP）位于东经 $100^{\circ}$，因此所计算的地平线边缘点的经度为 $100^{\circ} + 16.9^{\circ} = 116.9^{\circ}$ 东经。

其余地平线点的计算与绘图留作读者（以及读者的计算机）的练习。该计算需在角 $F$ 从 $0^{\circ}$ 到 $360^{\circ}$ 范围内重复进行，分辨率可按需设定。

## 9.3 利用窄波束接收天线截获地面目标信号
（INTERCEPT OF THE EARTH SURFACE TARGET USING A NARROW-BEAM RECEIVING ANTENNA）

在第 9.1 节中，我们讨论了使用无方向性天线的卫星进行信号截获。现在，我们考虑给卫星添加一个定向天线。首先，我们将计算卫星天线指向地球表面任意目标点时所需的俯仰角（elevation）与方位角（azimuth）。

### 9.3.1 天线指向角计算（Antenna Pointing）

我们可以计算将卫星天线主瓣（boresight）指向地球上某一特定经纬度目标所需的方位角（azimuth）和天底角（elevation from the nadir）。卫星星下点（SVP）位于东经 $100^{\circ}$、北纬 $30^{\circ}$，与第 9.1 节和 9.2 节所述一致；目标位于东经 $102^{\circ}$、北纬 $32^{\circ}$。注意，该目标明显位于卫星可观测范围内。首先，考虑图 9.14 所示的球面三角形，其三个顶点分别为星下点（SVP）、目标位置和北极点。

- 边 $h = 90^{\circ} - \text{SVP纬度} = 60^{\circ}$  
- 边 $j = 90^{\circ} - \text{目标纬度} = 58^{\circ}$  
- 边 $g =$ SVP 到目标的地心角 
- 角 $G =$ SVP 与目标之间的经度差，即 $2^{\circ}$  
- 角 $J =$ 卫星天线需指向的方位角 

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-179.jpg?height=596&width=1067&top_left_y=246&top_left_x=230){width="400"}

图 9.14 北极、SVP 与目标点构成的球面三角形用于计算天线指向该目标所需的方位角。

根据球面三角形的边余弦定理（law of cosines for sides）：

$$
\cos g = (\cos h)(\cos j) + (\sin h)(\sin j)(\cos G)
$$

计算得：

$$
\begin{aligned}
g &= \arccos \left[(\cos 60^{\circ})(\cos 58^{\circ}) + (\sin 60^{\circ})(\sin 58^{\circ})(\cos 2^{\circ})\right] \\
  &= \arccos \left[(0.500)(0.530) + (0.866)(0.848)(0.999)\right] \\
  &= \arccos(0.738) = 2.6^{\circ}
\end{aligned}
$$

这是 SVP 到目标之间的地心角。

接着，根据球面三角形的正弦定理（law of sines）：

$$
\frac{\sin J}{\sin j} = \frac{\sin G}{\sin g}
$$

计算方位角 $J$：

$$
\begin{aligned}
& J=a \sin [(\sin G)(\sin j) / \sin g]=a \sin \left[\left(\sin 2^{\circ}\right)\left(\sin 58^{\circ}\right) / \sin 2.6^{\circ}\right] \\
& =a \sin [(0.035)(0.848) / 0.045]=a \sin [.660]=41.3^{\circ}
\end{aligned}
$$

这是从卫星指向目标所需的方位角。

接下来，参考图 9.15，由卫星、目标与地心构成的**平面三角形**：

- 边 $m = R_E + h = 6671\ \mathrm{km}$  
- 边 $k = R_E = 6371\ \mathrm{km}$  
- 边 $n$ = 卫星到目标的传播距离  
- 角 $K$ = 卫星指向目标所需的仰角（从天底向上计）  
- 角 $N = 2.6^{\circ}$（即上文计算的地心角）  
- 角 $M$ = 从目标点观察地心与卫星之间的夹角  

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-180.jpg?height=721&width=1067&top_left_y=1250&top_left_x=195){width="400"}

图 9.15 卫星天线仰角（自天底向上）与传播距离可由该平面三角形计算。

图 9.15 中的角 $N$ 即为图 9.14 中的边 $g$（即 $2.6^{\circ}$）。利用平面三角形的余弦定理（law of cosines for plane triangles）：

$$
n^{2} = m^{2} + k^{2} - 2 m k \cos N
$$

代入：

$$
\begin{aligned}
n &= \sqrt{6671^2 + 6371^2 - 2(6671)(6371)\cos(2.6^{\circ})} \\
  &= \sqrt{40589641 + 44502241 - 84914378} \\
  &= \sqrt{177504} = 421\ \mathrm{km}
\end{aligned}
$$

这就是卫星到目标的实际距离。

接着使用正弦定理计算仰角 $K$：

$$
\frac{\sin K}{k} = \frac{\sin N}{n}
$$

即：

$\begin{aligned} & K=a \sin \left[k^* \sin N / n\right] \\ & =a \sin \left[(6371)\left(\sin \left(2.6^{\circ}\right) / 421\right]=a \sin [(6371)(.045) / 418]=68.6^{\circ}\right.\end{aligned}$

然后求出角 $M = 180^{\circ} - 2.6^{\circ} - 68.6^{\circ} = 108.8^{\circ}$。

由于天底方向定义为 $0^{\circ}$，地平线在卫星视角下为 $90^{\circ}$，所以：

$$
108.8^{\circ} - 90^{\circ} = 18.8^{\circ}
$$

即**目标在卫星视野中高于地平线 $18.8^{\circ}$**。

### 9.3.2 截获链路方程（Intercept Link Equation）

我们将在**强降雨**环境下，截获位于东经 $105^{\circ}$、北纬 $35^{\circ}$ 的一个 **4 GHz 通信发射源**。该目标发射机的等效辐射功率（ERP）为 100W（即 50 dBm），其天线具有非常宽的波束图。卫星配备一个 **直径为 1 米的抛物面天线**，并能以 $1^{\circ}$ 的指向精度指向目标发射机。

**天线指向角（Antenna Pointing Angles）**

使用第 9.3.1 节中介绍的方法，我们将计算将卫星天线波束主轴指向目标发射机所需的方位角与仰角（从天底计）。首先考虑图 9.16 中由 SVP、目标点和北极构成的**球面三角形**。这与图 9.14 的结构相同，但使用了当前问题中的实际参数：

- $h = 60^{\circ}$（SVP纬度 $= 30^{\circ}$）  
- $j = 55^{\circ}$（目标纬度 $= 35^{\circ}$）  
- $G = 5^{\circ}$（经度差）  
- $g$ = 卫星与目标之间的地心角  
- $J$ = 卫星指向目标的方位角  

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-182.jpg?height=627&width=1089&top_left_y=246&top_left_x=188){width="400"}

图 9.16 北极、SVP 与目标点构成的球面三角形用于计算卫星天线指向该目标的方位角与地心角。

根据球面三角形的边余弦定理：

$$
\cos g = (\cos h)(\cos j) + (\sin h)(\sin j)(\cos G)
$$

计算得：

$$
\begin{aligned}
g &= \arccos\left[(\cos 60^{\circ})(\cos 55^{\circ}) + (\sin 60^{\circ})(\sin 55^{\circ})(\cos 5^{\circ})\right] \\
  &= \arccos[(0.500)(0.574) + (0.866)(0.819)(0.996)] \\
  &= \arccos(0.993) = 6.8^{\circ}
\end{aligned}
$$

然后，根据球面三角形的正弦定理：

$$
\frac{\sin J}{\sin j} = \frac{\sin G}{\sin g}
$$

计算方位角 $J$：

$$
\begin{aligned}
J & =a \sin [(\sin G)(\sin j) / \sin g]=a \sin \left[\left(\sin 5^{\circ}\right)\left(\sin 55^{\circ}\right) / \sin 6.8^{\circ}\right] \\
& =a \sin [(0.087)(0.819) / 0.118]=a \sin [.603]=37.1^{\circ}
\end{aligned}
$$

这是卫星指向该目标发射机的**方位角**。

接下来考虑图 9.17 中由卫星、目标与地心构成的**平面三角形**（参数代入当前问题）：

- $m = 6,671\ \mathrm{km}$（地球半径 + 卫星高度）  
- $k = 6,371\ \mathrm{km}$（地球半径）  
- $n$ = 卫星与目标之间的传播距离  
- $K$ = 仰角（从天底向上）  
- $N = 6.8^{\circ}$ = 地心角  
- $M$ = 从目标观察地心与卫星之间的夹角  

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-183.jpg?height=712&width=1128&top_left_y=1259&top_left_x=195){width="400"}

图 9.17 卫星天线仰角（自天底向上）与传播距离可由该平面三角形计算。

使用平面三角形余弦定理：

$$
n^2 = m^2 + k^2 - 2mk\cos N
$$

计算得：

$$
\begin{aligned}
n & =\operatorname{sqrt}\left[m^2+k^2-2 m k \cos N\right] \\
& =\operatorname{sqrt}\left[6617^2+6371^2-2^* 6671^* 6371^* \cos \left(6.8^{\circ}\right)\right] \\
& =\operatorname{sqrt}[40589641+44502241-84406869]=\operatorname{sqrt}[685013]=828 \mathrm{~km}
\end{aligned}
$$

这是卫星与目标之间的传播距离。

然后使用正弦定理求仰角 $K$：

$$
\frac{\sin K}{k} = \frac{\sin N}{n}
$$

计算得：

$$
\begin{aligned}
& K=a \sin [k \sin N / n]=a \sin [6371)\left(\sin \left(6.8^{\circ}\right) / 828\right] \\
& =a \sin [(6371)(.118) / 828]=65.6^{\circ}
\end{aligned}
$$

然后可以求出角 $M$：

$$
M = 180^{\circ} - 6.8^{\circ} - 65.6^{\circ} = 107.8^{\circ}
$$

因此，从天底方向起算，卫星指向目标发射机的仰角为 $107.8^{\circ}$。由于地平线相对于天底为 $90^{\circ}$，故卫星在目标视角下**高于地平线 $107.8^{\circ} - 90^{\circ} = 17.8^{\circ}$**。此角度将在后续雨衰减计算中使用。

### 9.3.3 链路损耗

现在可以计算从目标位置出发的链路损耗。这些损耗包括扩散损耗（spreading loss）、卫星天线指向误差（antenna pointing error）、大气衰减（atmospheric attenuation）以及雨衰损耗（rain loss）。

扩散损耗可通过以下公式计算：

$$
L=32.44+20 \log (F)+20 \log (d)
$$

其中，$L$ 为扩散损耗（单位：分贝，dB），$F$ 为辐射源发射频率（4 GHz），$d$ 为链路距离（上文计算得 $n = 828\ \mathrm{km}$）。

$$
L=32.44+20 \log (4000)+20 \log (828)=32.44+72.04+58.36=162.8\ \mathrm{dB}
$$

大气衰减是卫星相对于目标辐射源地平线的仰角（elevation angle）的函数，我们已计算该仰角为 $18.8^{\circ}$。大气衰减可通过图9.18确定。在4 GHz频率和$18.8^{\circ}$仰角下，该损耗约为0.1 dB。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-185.jpg?height=917&width=794&top_left_y=975&top_left_x=371){width="400"}

图9.18 在4 GHz频率下，18.8°仰角导致约0.15 dB的大气衰减（atmospheric attenuation）。

在4 GHz频率下，直径为1米的接收天线的3-dB波束宽度（3-dB beamwidth）可通过以下公式计算：

$$
B W=\operatorname{antilog}[(86.8-20 \log D-20 \log F) / 20]
$$

其中，$B W$ 为效率为55%的抛物面天线（parabolic antenna）的3-dB波束宽度，$D$ 为天线直径（单位：米），$F$ 为频率（单位：兆赫，MHz）。

$$
B W=\operatorname{antilog} (86.8-0-72.0)=6.3^{\circ}
$$

现在，我们可以利用第5.2节中的公式计算天线失准损耗（antenna misalignment loss）。

$$
\Delta G=12(\theta / \alpha)^{2}
$$

其中，$\Delta G$ 为天线失准损耗（单位：分贝，dB），$\theta$ 为天线失准角度（单位：度），$\alpha$ 为天线的3-dB波束宽度（3-dB beamwidth）。

当天线失准角为 $1^{\circ}$ 时，

$$
\begin{aligned}
& \Delta G=12(1 / 6.3)^{2} \\
& \Delta G=0.3\ \mathrm{dB}
\end{aligned}
$$

穿越降雨区域的距离可由图9.19确定。0°C等温层（$0^{\circ}$ isotherm）的高度为3 km（如图9.5所示，对应纬度为$35^{\circ}$）。因此，信号穿越降雨区的距离为：

$$
\text { 距离 }=3\ \mathrm{km} / \sin \left(18.8^{\circ}\right)=3\ \mathrm{km} / 0.322=9.3\ \mathrm{km}
$$

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-187.jpg?height=671&width=1148&top_left_y=246&top_left_x=193){width="400"}

图 9.19 产生降雨损耗的距离是指链路中位于 $0^{\circ}$ 等温线（0° isotherm）以下的部分，该等温线高度为 3 km，如图 9.5 所示。

根据图9.20，在4 GHz频率下，强降雨（heavy rain）引起的损耗约为0.02 $\mathrm{dB} / \mathrm{km}$。以9.8 km距离计算，强降雨损耗为 $0.02 \times 9.8 = 0.2\ \mathrm{dB}$。

$$
\Delta G=12(\theta / \alpha)^{2}
$$

其中，$\Delta G$ 为天线失准损耗（antenna misalignment loss，单位：分贝，dB），$\theta$ 为天线失准角度（单位：度），$\alpha$ 为天线的3-dB波束宽度（3-dB beamwidth）。

当天线失准角为 $1^{\circ}$ 时，

$$
\begin{aligned}
& \Delta G=12(1 / 6.3)^{2} \\
& \Delta G=0.3\ \mathrm{dB}
\end{aligned}
$$

穿越降雨区域的距离可由图9.19确定。0°C等温层（$0^{\circ}$ isotherm）的高度为3 km（如图9.5所示，对应纬度为$35^{\circ}$）。因此，信号穿越降雨区的距离为：

$$
\text{Distance} = 3\ \mathrm{km} / \sin \left(18.8^{\circ}\right) = 3\ \mathrm{km} / 0.322 = 9.3\ \mathrm{km}
$$

根据图9.20，在4 GHz频率下，强降雨（heavy rain）引起的损耗约为0.02 $\mathrm{dB} / \mathrm{km}$。乘以9.8 km，得到强降雨损耗为 $0.2\ \mathrm{dB}$。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-187.jpg?height=623&width=1173&top_left_y=1076&top_left_x=177){width="400"}

图 9.20 在 4 GHz 频率下，强降雨引起的损耗为 $0.02 \mathrm{~dB} / \mathrm{km}$。

**卫星至目标链路损耗**

因此，总链路损耗为： 
扩散损耗（spreading loss）＋天线失准损耗（antenna misalignment loss）＋大气衰减（atmospheric loss）＋雨衰损耗（rain loss）。

链路损耗 $=162.8\ \mathrm{dB} + 0.3\ \mathrm{dB} + 0.1\ \mathrm{dB} + 0.2\ \mathrm{dB} = 163.4\ \mathrm{dB}$。

1米口径卫星天线的增益可由以下公式计算：

$$
G=-42.2+20 \log D+20 \log F
$$


其中，$G$ 为效率为55%的抛物面天线（parabolic antenna）的增益，$D$ 为天线直径（单位：米），$F$ 为频率（单位：兆赫，MHz）。

$$
G=-42.2+0+72=29.8\ \mathrm{dB}
$$

卫星接收机中的接收功率为：

$$
P_{R}=E R P-L+G_{R}
$$

其中，$P_{R}$ 为接收功率（received power），$L$ 为总链路损耗，$G_{R}$ 为接收天线增益（receiving antenna gain）。

$$
P_{R}=50\ \mathrm{dBm}-163.4\ \mathrm{dB}+29.8\ \mathrm{dB}=-83.6\ \mathrm{dBm}
$$

这意味着，在此情况下，卫星接收机必须具备 -83.6 dBm 的灵敏度，才能成功截获该目标信号。

**接收机灵敏度**

首先，我们将计算当卫星位于地平线时截获该信号所需的接收机灵敏度（receiver sensitivity）。其次，我们将确定当卫星轨道恰好经过辐射源正上方时，卫星能够观测到该信号的持续时间。最后，我们将确定若卫星位于地球同步轨道（synchronous orbit）时所需的接收机灵敏度。

### 9.3.4 从地平线截获

卫星运行在距地球表面300 km高的圆形轨道上。我们希望在强降雨（heavy rain）条件下，从地平线处截获一个4 GHz目标辐射源（target emitter）的信号。该目标辐射源的有效辐射功率（ERP, Effective Radiated Power）为100 W（即50 dBm），且其天线方向图非常宽（我们假设其覆盖范围从地平线到地平线）。卫星配备一个1米口径的抛物面天线（parabolic antenna），提供29.8 dBi的增益，并以1°的指向精度（pointing accuracy）对准目标辐射源（这将导致0.3 dB的天线失准损耗（antenna misalignment loss））。

我们将使用前几章中介绍的公式来解答本问题。

图9.21所示的平面直角三角形描述了至地平线的几何关系。我们希望确定卫星到地平线的距离，即右侧三角形中的边 $c$。边 $b$ 为卫星轨道的半长轴（6,671 km），边 $a$ 为地球半径（6,371 km）。由于角 $B$ 为 $90^{\circ}$，边 $c$ 可通过下式求得：

$$
\text{Side } c=\operatorname{sqrt}\left[b^{2}-a^{2}\right]=\operatorname{sqrt}\left[(6671)^{2}-(6371)^{2}\right]=1978\ \mathrm{km}
$$

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-189.jpg?height=699&width=1128&top_left_y=246&top_left_x=202){width="400"}

图9.21 卫星到地平线的距离由此平面三角形计算得出。

这意味着视距（LOS, line-of-sight）损耗为：

$$
L O S=32.4+20 \log (F)+20 \log (d)
$$


其中，$L O S$ 为视距损耗（单位：分贝，dB），$F$ 为频率（单位：兆赫，MHz），$d$ 为链路距离（单位：公里，km）。

$$
L O S=32.4+20 \log (4,000)+20 \log (1,978)=170.4\ \mathrm{dB}
$$

在第9.3.3节中，我们已确定天线指向精度引起的损耗为0.3 dB。

根据图9.22，在4 GHz频率和0°仰角（elevation）下，穿过整个大气层的大气衰减（atmospheric attenuation）为2.2 dB。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-190.jpg?height=959&width=832&top_left_y=246&top_left_x=320){width="400"}

图9.22 在4 GHz频率下，0°仰角导致约2 dB的大气衰减（atmospheric attenuation）。

已知雨衰损耗（rain loss）是信号传输路径上从0°C等温层（$0^{\circ}$ isotherm）到地面辐射源之间距离的函数。

图9.23展示了降雨距离的几何关系。若我们采用前文所述相同的0°C等温层高度（即3 km），则信号路径与0°C等温层的交点、目标辐射源以及地心构成一个直角三角形。此时，降雨路径长度（rain distance）为：

$$
\text{Rain distance} = \operatorname{sqrt}\left[(6,374)^{2}-(6,371)^{2}\right] = 196\ \mathrm{km}
$$

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-190.jpg?height=495&width=814&top_left_y=1426&top_left_x=327){width="400"}

图9.23 穿越降雨区的距离为从地面到信号路径与卫星连线穿过0°C等温层（$0^{\circ}$ isotherm）处的长度。

根据图9.20，4 GHz频率下的强降雨（heavy rain）损耗为 $0.02\ \mathrm{dB} / \mathrm{km}$。据此计算，总雨衰为 $196 \times 0.02\ \mathrm{dB} = 4\ \mathrm{dB}$。然而，在196 km范围内持续出现强降雨将引发严重洪灾，因此我们假设强降雨仅集中在降雨路径中20%的区域（即强降雨单元，heavy rain cells），故在链路预算中采用0.8 dB作为雨衰损耗值。

现在可计算总链路损耗：

$$
\begin{aligned}
& \text{Total link loss} = \text{LOS loss} + \text{antenna misalignment loss} \\
& \quad + \text{atmospheric loss} + \text{rain loss} \\
& = 170.4\ \mathrm{dB} + 0.3\ \mathrm{dB} + 2.2\ \mathrm{dB} + 0.8\ \mathrm{dB} = 173.7\ \mathrm{dB}
\end{aligned}
$$

接下来可计算在卫星地平线处截获目标信号所需的接收机系统灵敏度（receiver system sensitivity）：

$$
\begin{aligned}
& \text{Received power} = \text{Target signal ERP} - \text{Total link loss} \\
& \quad + \text{Receiving antenna gain} \\
& = 50\ \mathrm{dBm} - 173.7\ \mathrm{dB} + 29.8\ \mathrm{dBi} = -93.9\ \mathrm{dBm}
\end{aligned}
$$

我们尚未讨论目标信号的调制方式，因此该灵敏度要求可能能够实现，也可能无法实现。若无法满足，我们可能需要采取某些措施，例如增大天线口径。

**截获持续时间**

根据开普勒第三定律（Kepler's third law），卫星轨道周期与半长轴之间的关系为：

$$
a^{3} / P^{2} / C = 36,355,285\ \mathrm{km}^{3} / \mathrm{min}^{2}
$$

因此，$P^{2}$ 等于 $a^{3}$ 除以 $36,355,285$，结果为 $8,165.9\ \mathrm{min}^{2}$。

对于轨道高度为300 km的卫星，其轨道半长轴为 $6,671\ \mathrm{km}$，因此其轨道周期 $P$ 必为90.365分钟。

第8.3节给出了从地平线到地平线的观测时间（horizon-to-horizon observation time）的复杂公式：

$$
T_{\text{TOTAL}} = P \left[ 2 \arccos \left( R_{E} / a \right) \right] \left[ 1 + \cos(i) \cos(\text{lat}) \right]
$$

代入具体数值：假设威胁目标所在地纬度（latitude）为 $35^{\circ}$，轨道倾角（orbital inclination）$i = 60^{\circ}$。

因此，在一次直接飞越目标上空的过境中，卫星能够“看到”该目标的时间为12.2分钟。

## 9.4 从同步轨道卫星进行截获
（INTERCEPT FROM THE SYNCHRONOUS SATELLITE）

图 9.24 显示了从同步轨道卫星到地面目标的距离。如果卫星位于目标的地平线上，则距离为 $41,759\ \mathrm{km}$；如果卫星正好位于目标上空，则距离为 $35,873\ \mathrm{km}$。正如我们将要计算的，这些距离下的损耗是很大的，但同步轨道卫星的优势在于它可以持续接收信号。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-193.jpg?height=1145&width=620&top_left_y=246&top_left_x=457){width="400"}

图9.24 对于位于地平线处的地球同步卫星（synchronous satellite），其距离为41,759 km；对于位于天顶正上方的同步卫星，其距离为$35,873\ \mathrm{km}$。

### 9.4.1 卫星位于地平线方向

目标发射机的 ERP 为 $100\ \mathrm{W}\ (50\ \mathrm{dBm})$。到地平线上卫星的 LOS（视距）损耗为：

$$
\text{LOS 损耗} = 32.4 + 20 \log(4,000) + 20 \log(41,682) = 196.8\ \mathrm{dB}
$$

大气和降雨损耗与高度为 $300\ \mathrm{km}$ 的卫星位于目标地平线时相同，分别为 2.2 和 0.8 dB。

我们假设卫星的截获天线为 1 米直径，截获信号频率为 4 GHz。使用第 5.1 节中提供的增益公式：

$$
G = -42.2 + 20 \log(D) + 20 \log(F)
$$

其中，$G$ 为天线增益（dB），$D$ 为反射面直径（米），$F$ 为频率（MHz），假设天线效率为 55%。

该天线的增益为 29.8 dBi，我们认为这可能不够。然而，如果将天线直径增大到 5 米，则在 4 GHz 下增益为 43.8 dBi。

使用第 5.1 节中的波束宽度公式，天线的 3 dB 波束宽度为：

$$
20 \log(BW) = 86.8 - 20 \log(D) - 20 \log(F)
$$

代入 $D = 5\ \mathrm{m}$、$F = 4000\ \mathrm{MHz}$ 得：

$$
BW = \text{antilog}[(86.8 - 20 \log(5) - 20 \log(4000)) / 20] = 1.1^{\circ}
$$

使用第 5.2 节中的公式：

$$
\Delta G = 12(\theta / \alpha)^2
$$

其中，$\Delta G$ 为相对于波束主轴的增益下降值（dB），$\alpha$ 为 3 dB 波束宽度，$\theta$ 为偏移角度。

如果将卫星天线指向精度控制在 $0.25^{\circ}$，那么指向误差导致的损耗为：

$$
12(0.25 / 1.1)^2 = 0.6\ \mathrm{dB}
$$

因此，总链路损耗为：

$$
196.8\ \mathrm{dB} + 2.2\ \mathrm{dB} + 0.8\ \mathrm{dB} + 0.6\ \mathrm{dB} = 200.4\ \mathrm{dB}
$$

接收信号强度为：

$$
50\ \mathrm{dBm} - 200.4\ \mathrm{dB} + 43.8\ \mathrm{dBi} = -106.8\ \mathrm{dBm}
$$

若卫星接收机的噪声系数为 2 dB，接收目标信号所需带宽为 1 GHz，则接收机最小可探测信号（MDS）为：

$$
-114\ \mathrm{dBm} + 2\ \mathrm{dB} = -112\ \mathrm{dBm}
$$

因此，信噪比为：

$$
-106.8 - (-112) = 5.2\ \mathrm{dB}
$$

如果需要更好的信号质量（例如 $15\ \mathrm{dB}$ 的信噪比），则需要额外的 9.8 dB 天线增益，即增益需达 **53.6 dBi**。这将需要一副 **15.4 米直径的天线**。

### 9.4.2 卫星位于目标正上方

若卫星星下点（SVP, Sub-Satellite Point）正好位于目标位置，则卫星到目标的距离为 $35,795\ \mathrm{km}$，因此视距（LOS, line-of-sight）损耗为：

$$
\begin{aligned}
\text{LOS 损耗} &= 32.4 + 20 \log(4,000) + 20 \log(35,795) \\
                &= 32.4 + 72 + 91.1 = 195.5\ \mathrm{dB}
\end{aligned}
$$


然而，由于卫星从目标发射机处呈垂直视角，因此**大气与降雨损耗为零**。因此，总链路损耗为 **195.5 dB**。接收信号强度为：

$$
50\ \mathrm{dBm} - 195.5\ \mathrm{dB} + 43.8\ \mathrm{dBi} = -101.7\ \mathrm{dBm}
$$


在接收机参数不变的情况下（噪声系数为 $2\ \mathrm{dB}$，信号带宽为 $1\ \mathrm{MHz}$），当卫星正好在目标上空时，接收信号强度为 $-101.7\ \mathrm{dBm}$，因此接收的信噪比为10.5dB。

> 注：原文有误，应为：$-101.7 - (-112) = 10.3\ \mathrm{dB}$)

如果需要达到 $15\ \mathrm{dB}$ 的信噪比，则拦截天线需提供额外 4.5dB(4.7dB) 的增益。因此，天线直径必须增加至 **10 米**。


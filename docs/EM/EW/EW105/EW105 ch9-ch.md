# 9. 天基信号截获

**INTERCEPT FROM SPACE**

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

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-164.jpg?height=586&width=1027&top_left_y=1388&top_left_x=224){width="400"}

图 9.1 北极、SVP与威胁位置之间构成球面三角形。

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

现在考虑图 9.3 中给出的**大气损耗**。从图中可以看出，在仰角 $7.8^{\circ}$ 时，信号穿过整个大气层的损耗约为 **0.2 dB**。假设我们希望在**强降雨**条件下截获该信号。

在图 9.4 中，我们看到信号从 **$0^{\circ}$ 等温线（isotherm）**到达地面的路径都将经过雨层。在图 9.5 中可以看到，在纬度 $35^{\circ}$ 附近，以 1% 的概率，$0^{\circ}$ 等温线低于 3 km。由图 9.6，我们可以计算从 $0^{\circ}$ 等温线到地面的路径长度：

$$
3\ \mathrm{km} / \sin(7.8^{\circ}) = 22\ \mathrm{km}
$$

从图 9.7 可知，**强降雨在 6 GHz 下造成的衰减约为 $0.1\ \mathrm{dB/km}$**，因此雨衰减为：

$$
22\ \mathrm{km} \times 0.1\ \mathrm{dB/km} = 2.2\ \mathrm{dB}
$$

因此总链路损耗为：

$$
169.9\ \mathrm{dB} + 0.3\ \mathrm{dB} + 2.2\ \mathrm{dB} = 172.4\ \mathrm{dB}
$$

### 9.1.4 卫星载荷能否接收到信号？

现在进行一些额外的相关计算。首先，求卫星端的接收信号强度。

目标雷达的 ERP 为 120 dBm，其中包括主瓣（boresight）方向增益 30 dB，但其副瓣（sidelobe）平均比主瓣低 20 dB。卫星几乎不可能接收到主瓣，因此卫星将接收到**副瓣方向的 ERP = 100 dBm**。

图 9.8 显示链路中各部分的信号强度。接收功率由以下公式给出：

$$
P_R = ERP - L + G_R
$$

其中：

- $P_R$ = 卫星接收机的接收功率  
- $ERP$ = 雷达向卫星方向辐射的功率  
- $L$ = 总链路损耗  
- $G_R$ = 卫星接收天线在该方向的增益  

卫星天线是**圆极化（circular polarization）**且增益为 3 dBi；目标雷达天线是**线极化（linear polarization）**，因此会产生 **3 dB 极化损耗**。

带入公式：

$$
P_R = 100\ \mathrm{dBm} - 172.4\ \mathrm{dB} - 3\ \mathrm{dB} + 3\ \mathrm{dB}
     = -72.4\ \mathrm{dBm}
$$

### 9.1.5 接收机灵敏度（Receiver Sensitivity）

题设中卫星接收机带宽为 10 MHz，噪声系数（Noise Figure, NF）为 3 dB。假设机载处理器在分析接收信号前需要约 15 dB 的检测前信噪比（predetection SNR）。

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

### 9.1.6 链路裕度（Link Margin）

链路裕度为：

$$
P_R - S = -72.4\ \mathrm{dBm} - (-86\ \mathrm{dBm}) = 13.6\ \mathrm{dB}
$$

因此，卫星能够非常有效地截获目标雷达信号。

### 9.1.7 卫星能否在地平线方向接收信号？

考虑图 9.9 所示，由卫星、地平线处的辐射源与地心构成的平面三角形：

- 边 $b = R_E + H = 6371 + 300 = 6671\ \mathrm{km}$  
- 边 $a = R_E = 6371\ \mathrm{km}$  
- 角 $C$ 为卫星到地平线的地心角  

计算：

$$
C = \arccos\left(\frac{R_E}{R_E + H}\right)
  = \arccos\left(\frac{6371}{6671}\right)
  = \arccos(0.955)
  = 17.2^{\circ}
$$

地表距离：

$$
\left(\frac{C}{360^{\circ}}\right) \times 2\pi \times 6371 = 1913\ \mathrm{km}
$$

链路距离：

$$
c = (R_E + H)\sin(C) = 6671\sin(17.2^{\circ}) = 1973\ \mathrm{km}
$$

路径损耗：

$$
32.44 + 20\log(F) + 20\log(d)
= 32.44 + 75.56 + 65.90
= 173.9\ \mathrm{dB}
$$

图 9.10 显示在 6 GHz、仰角 $0^{\circ}$ 下的大气损耗为 **2.2 dB**。

$0^{\circ}$ 等温线高度约为 3 km。由图 9.11 可知降雨路径对应地心角为：

$$
\theta = \arccos(6371/6374) = 1.76^{\circ}
$$

雨层路径长度：

$$
6374 \sin(1.76^{\circ}) = 196\ \mathrm{km}
$$

若强降雨覆盖全部 196 km，将产生约 20 dB 衰减（极为不现实）。若降雨仅占 **20% 路径**，衰减约为：

$$
0.2 \times 20\ \mathrm{dB} = 3.9\ \mathrm{dB}
$$

因此总链路损耗：

$$
173.9 + 2.2 + 3.9 = 180\ \mathrm{dB}
$$

卫星接收功率：

$$
100\ \mathrm{dBm} - 180\ \mathrm{dB} = -80\ \mathrm{dBm}
$$

链路裕度：

$$
-80\ \mathrm{dBm} - (-86\ \mathrm{dBm}) = 6\ \mathrm{dB}
$$

卫星依然可以以 **6 dB 裕度**接收到信号。



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

根据开普勒第三定律，一颗高度为 300 km 的卫星周期约为 **90.37 分钟**。当卫星轨道倾角为 $60^{\circ}$，目标位于北纬 $35^{\circ}$ 时，代入公式可得：

**如果卫星正好从目标上方经过，卫星对该信号的可观测时间为 12.2 分钟。**


## 9.2 地平线在地球表面的投影图（HORIZON PLOT ON THE EARTH）

本节展示如何从卫星生成地球表面上的地平线等高线图。讨论中包括一个高度为 $300\ \mathrm{km}$ 的卫星示例，其地面下垂点（Subsatellite Point, SVP）位于东经 $100^{\circ}$、北纬 $35^{\circ}$。

请参考图 9.12 所示的平面直角三角形：

$$
\text{角} C = \arccos(\text{边} a / \text{边} c)
$$

其中，边 $a$ 是地球半径，边 $c$ 是卫星高度加上地球半径。

因此，从 SVP 点看向地平线的**地心角** $C$ 为：

$$
C = \arccos\left[\frac{R_E}{h + R_E}\right]
$$

对于高度为 $300\ \mathrm{km}$ 的卫星，有：

$$
C = \arccos\left[\frac{6,371}{6,671}\right] = 17.2^{\circ}
$$

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-176.jpg?height=691&width=1038&top_left_y=254&top_left_x=206){width="400"}
  
图 9.12 由该平面三角形计算卫星到地平线的距离。

现在，考虑图 9.13 所示的**球面三角形**，由 SVP、北极点与地平线边缘点组成：

- 边 $d$ 与图 9.12 中的角 $C$ 相同，即 SVP 到地平线的地心角；
- 边 $e = 90^{\circ} - \text{SVP纬度} = 55^{\circ}$；
- 边 $f = 90^{\circ} - \text{地平线边缘点纬度}$；
- 角 $F$ 为指定方向角（例如正北为 $0^{\circ}$），每隔若干度选一个值从 $0^{\circ}$ 到 $360^{\circ}$；
- 角 $D$ 为 SVP 与边缘点的经度差；
- 角 $E$ 位于天线波束覆盖边缘点。

通过设置分辨率，可以计算并绘制任意密度的地平线边缘的纬度与经度点（计算机处理这些点毫无压力）。

以下为手动计算一个示例点。假设我们选择**地平线边缘方向为正北偏东 $45^{\circ}$**，即角 $F = 45^{\circ}$，边 $e = 55^{\circ}$，边 $d = 17.2^{\circ}$。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-177.jpg?height=798&width=1137&top_left_y=246&top_left_x=197){width="400"}
  
图 9.13 地平线边缘点相对于卫星 SVP 的位置由该球面三角形给出。

根据球面三角形边的余弦定理（law of cosines for sides）：

$$
\cos f = (\cos e)(\cos d) + (\sin e)(\sin d)(\cos F)
$$

因此，

$$
f = \arccos \left[(\cos 55^{\circ})(\cos 17.2^{\circ}) + (\sin 55^{\circ})(\sin 17.2^{\circ})(\cos 45^{\circ}) \right]
$$

代入计算：

$$
\begin{aligned}
f &= \arccos \left[(0.574)(0.955) + (0.819)(0.296)(0.707)\right] \\
  &= \arccos(0.719) = 44.0^{\circ}
\end{aligned}
$$

因此，地平线边缘点的纬度为：

$$
90^{\circ} - 44.0^{\circ} = 46.0^{\circ} \text{ 北纬}
$$

接下来，根据球面三角形的正弦定理（law of sines）：

$$
\frac{\sin D}{\sin d} = \frac{\sin F}{\sin f}
$$

解得：

$$
\begin{aligned}
D &= \arcsin \left[\frac{(\sin d)(\sin F)}{\sin f}\right] \\
  &= \arcsin \left[\frac{(0.295)(0.707)}{0.719}\right] \\
  &= \arcsin(0.290) = 16.9^{\circ}
\end{aligned}
$$

因为卫星的 SVP 经度为 $100^{\circ}$ 东经，所以地平线边缘点的经度为：

$$
100^{\circ} + 16.9^{\circ} = 116.9^{\circ} \text{ 东经}
$$

其余地平线边缘点的计算和绘图留作读者（以及读者的计算机）的练习。该过程重复执行一圈角 $F$ 从 $0^{\circ}$ 到 $360^{\circ}$，分辨率可以自定义。


## 9.3 利用窄波束接收天线截获地面目标信号（INTERCEPT OF THE EARTH SURFACE TARGET USING A NARROW-BEAM RECEIVING ANTENNA）

在第 9.1 节中，我们讨论了使用无方向性天线的卫星进行信号截获。现在，我们考虑给卫星添加一个定向天线。首先，我们将计算卫星天线指向地球表面任意目标点时所需的俯仰角（elevation）与方位角（azimuth）。

### 9.3.1 天线指向角计算（Antenna Pointing）

我们可以计算将卫星天线波束主轴指向地球表面某一纬度与经度位置所需的方位角与仰角（从天底向上计）。此处卫星的 SVP 位于东经 $100^{\circ}$、北纬 $30^{\circ}$，目标位置为东经 $102^{\circ}$、北纬 $32^{\circ}$。这个目标位置处于卫星可视范围内。

首先，参考图 9.14 中由 SVP、目标点与北极点构成的**球面三角形**：

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
J &= \arcsin \left[\frac{\sin G \cdot \sin j}{\sin g}\right] \\
  &= \arcsin \left[\frac{(0.035)(0.848)}{0.045}\right] = \arcsin(0.660) = 41.3^{\circ}
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

使用平面三角形的余弦定理：

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

$$
K = \arcsin \left[\frac{6371 \cdot \sin(2.6^{\circ})}{421}\right]
  = \arcsin \left[\frac{6371 \cdot 0.045}{421}\right]
  = \arcsin(0.681) = 68.6^{\circ}
$$

然后求出角 $M = 180^{\circ} - 2.6^{\circ} - 68.6^{\circ} = 108.8^{\circ}$。

由于天底方向定义为 $0^{\circ}$，地平线在卫星视角下为 $90^{\circ}$，所以：

$$
108.8^{\circ} - 90^{\circ} = 18.8^{\circ}
$$

即**目标在卫星视野中高于地平线 $18.8^{\circ}$**。


### 9.3.2 截获链路方程（Intercept Link Equation）

我们将在**强降雨**环境下，截获位于东经 $105^{\circ}$、北纬 $35^{\circ}$ 的一个 **4 GHz 通信发射源**。该目标发射机的等效辐射功率（ERP）为 100W（即 50 dBm），其天线具有非常宽的波束图。卫星配备一个 **直径为 1 米的抛物面天线**，并能以 $1^{\circ}$ 的指向精度指向目标发射机。

#### 天线指向角（Antenna Pointing Angles）

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
J &= \arcsin\left[\frac{(\sin 5^{\circ})(\sin 55^{\circ})}{\sin 6.8^{\circ}}\right] \\
  &= \arcsin\left[\frac{(0.087)(0.819)}{0.118}\right] = \arcsin(0.603) = 37.1^{\circ}
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
n &= \sqrt{6671^2 + 6371^2 - 2 \cdot 6671 \cdot 6371 \cdot \cos(6.8^{\circ})} \\
  &= \sqrt{40589641 + 44502241 - 84406869} \\
  &= \sqrt{685013} = 828\ \mathrm{km}
\end{aligned}
$$

这是卫星与目标之间的传播距离。

然后使用正弦定理求仰角 $K$：

$$
\frac{\sin K}{k} = \frac{\sin N}{n}
$$

计算得：

$$
K = \arcsin\left[\frac{6371 \cdot \sin(6.8^{\circ})}{828}\right]
  = \arcsin\left[\frac{6371 \cdot 0.118}{828}\right]
  = \arcsin(0.908) = 65.6^{\circ}
$$

然后可以求出角 $M$：

$$
M = 180^{\circ} - 6.8^{\circ} - 65.6^{\circ} = 107.8^{\circ}
$$

因此，从天底方向起算，卫星指向目标发射机的仰角为 $107.8^{\circ}$。

由于地平线相对于天底为 $90^{\circ}$，故卫星在目标视角下**高于地平线 $107.8^{\circ} - 90^{\circ} = 17.8^{\circ}$**。

此角度将在后续雨衰减计算中使用。


### 9.3.3 链路损耗（Link Losses）

现在我们可以计算从目标位置出发的链路损耗，包括：

- 空间传播损耗（Spreading Loss）
- 卫星天线指向误差
- 大气衰减（Atmospheric Attenuation）
- 降雨衰减（Rain Loss）

#### 空间传播损耗

空间传播损耗按下列公式计算：

$$
L = 32.44 + 20 \log(F) + 20 \log(d)
$$

其中：

- $L$ 为以 dB 为单位的空间传播损耗  
- $F$ 为发射频率（单位 MHz，$F = 4000$ MHz）  
- $d$ 为链路距离（$d = 828$ km）

计算得：

$$
L = 32.44 + 20\log(4000) + 20\log(828) = 32.44 + 72.04 + 58.36 = 162.8\ \mathrm{dB}
$$

#### 大气衰减

大气衰减依赖于卫星在目标地平线之上的仰角，之前我们计算为 $18.8^{\circ}$。根据图 9.18，在 4 GHz 和该仰角下，大气衰减约为 **0.1 dB**。

#### 天线指向误差

使用下列公式计算 3-dB 波束宽度（beamwidth）：

$$
BW = \operatorname{antilog}\left[\frac{86.8 - 20 \log D - 20 \log F}{20}\right]
$$

其中：

- $D = 1$ m（天线口径）
- $F = 4000$ MHz

代入：

$$
BW = \operatorname{antilog}\left[\frac{86.8 - 0 - 72.0}{20}\right] = \operatorname{antilog}(0.74) = 6.3^{\circ}
$$

根据第 5.2 节公式计算指向误差损耗：

$$
\Delta G = 12\left(\frac{\theta}{\alpha}\right)^2 = 12\left(\frac{1}{6.3}\right)^2 = 0.3\ \mathrm{dB}
$$

#### 降雨衰减

雨层路径长度计算如下（等温线高度 $= 3$ km，仰角 $= 18.8^{\circ}$）：

$$
\text{路径长度} = \frac{3\ \mathrm{km}}{\sin(18.8^{\circ})} = \frac{3}{0.322} = 9.3\ \mathrm{km}
$$

根据图 9.20，4 GHz 下强降雨每公里造成 0.02 dB 衰减，因此总雨衰减为：

$$
9.3\ \mathrm{km} \times 0.02\ \mathrm{dB/km} = 0.2\ \mathrm{dB}
$$

#### 卫星到目标的链路总损耗

$$
\text{总链路损耗} = 162.8 + 0.3 + 0.1 + 0.2 = 163.4\ \mathrm{dB}
$$

卫星 $1\ \mathrm{m}$ 抛物面天线的增益按下式计算：

$$
G = -42.2 + 20 \log D + 20 \log F = -42.2 + 0 + 72 = 29.8\ \mathrm{dB}
$$

接收功率为：

$$
P_R = ERP - L + G_R = 50\ \mathrm{dBm} - 163.4\ \mathrm{dB} + 29.8\ \mathrm{dB} = -83.6\ \mathrm{dBm}
$$

因此，卫星接收机必须具备 **$-83.6\ \mathrm{dBm}$ 的灵敏度**才能在当前条件下截获该目标信号。

---

### 9.3.4 从地平线截获（Intercept from the Horizon）

卫星位于距地 300 km 的圆形轨道上。我们希望在强降雨条件下，从地平线截获 4 GHz 的目标发射信号。该目标 ERP 为 100 W（50 dBm），天线具有宽波束（覆盖整个地平线）。卫星使用 $1\ \mathrm{m}$ 抛物面天线，增益为 29.8 dBi，指向误差 $1^{\circ}$，对应损耗为 0.3 dB。

参考图 9.21 的平面直角三角形，边 $b = 6671\ \mathrm{km}$，边 $a = 6371\ \mathrm{km}$，求边 $c$：

$$
c = \sqrt{b^2 - a^2} = \sqrt{6671^2 - 6371^2} = 1978\ \mathrm{km}
$$

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-189.jpg?height=699&width=1128&top_left_y=246&top_left_x=202){width="400"}
  
图 9.21 地平线方向卫星到目标的传播距离。

#### LOS 损耗计算：

$$
LOSS = 32.4 + 20\log(4000) + 20\log(1978) = 32.4 + 72.0 + 66.0 = 170.4\ \mathrm{dB}
$$

图 9.22 显示在 $4\ \mathrm{GHz}$、$0^{\circ}$ 仰角时，大气衰减为 **2.2 dB**。

#### 降雨路径长度

参考图 9.23，假设等温线高度 $= 3\ \mathrm{km}$：

$$
\text{雨层路径} = \sqrt{6374^2 - 6371^2} = 196\ \mathrm{km}
$$

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-190.jpg?height=959&width=832&top_left_y=246&top_left_x=320){width="400"}
  
图 9.22 显示 $0^{\circ}$ 仰角时的大气衰减为 2 dB。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-190.jpg?height=495&width=814&top_left_y=1426&top_left_x=327){width="400"}
  
图 9.23 从地面到等温线的雨层路径构成直角三角形。

假设降雨仅集中于路径的 $20\%$，雨衰减为：

$$
196 \times 0.02 \times 0.2 = 0.8\ \mathrm{dB}
$$

#### 总链路损耗计算：

$$
\begin{aligned}
\text{总损耗} &= 170.4 + 0.3 + 2.2 + 0.8 = 173.7\ \mathrm{dB}
\end{aligned}
$$

接收功率为：

$$
P_R = 50\ \mathrm{dBm} - 173.7\ \mathrm{dB} + 29.8\ \mathrm{dB} = -93.9\ \mathrm{dBm}
$$

因此，卫星接收系统在地平线方向成功截获该信号所需的灵敏度为 **$-93.9\ \mathrm{dBm}$**。

需要注意，我们尚未讨论目标信号的调制方式，因此该灵敏度是否可达取决于具体接收方案。如不可达，可能需**增大卫星天线尺寸**以提高增益。


#### 截获持续时间

根据开普勒第三定律，卫星周期与半长轴的关系为：

$$
a^{3} / P^{2} / C = 36,355,285\ \mathrm{km}^3/\mathrm{min}^2
$$

因此，$P^2 = a^3 / 36,355,285$，代入后得 $P^2 = 8,165.9$（单位为平方分钟）。

对于高度为 $300\ \mathrm{km}$ 的卫星，其轨道半长轴为 $6,671\ \mathrm{km}$，因此其轨道周期为 **90.365 分钟**。

以下是第 8.3 节中给出的用于计算从地平线到地平线的观测时间的公式：

$$
T_{\text{TOTAL}} = P \left[ 2 \arccos\left( \frac{R_E}{a} \right) \right] \left[ 1 + \cos(i) \cos(\text{lat}) \right]
$$

我们代入数值：目标纬度为 $35^{\circ}$，轨道倾角 $i = 60^{\circ}$。

因此，卫星在一次从目标正上方掠过期间可以“看到”目标的时间为 **12.2 分钟**。

---

## 9.4 从同步轨道卫星进行截获（INTERCEPT FROM THE SYNCHRONOUS SATELLITE）

图 9.24 显示了从同步轨道卫星到地面目标的距离。如果卫星位于目标的地平线上，则距离为 $41,759\ \mathrm{km}$；如果卫星正好位于目标上空，则距离为 $35,873\ \mathrm{km}$。正如我们将要计算的，这些距离下的损耗是很大的，但同步轨道卫星的优势在于它可以持续接收信号。

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

---

如果卫星的地面下垂点（SVP）正好位于目标位置上方，则卫星到目标的距离为 $35,795\ \mathrm{km}$，因此视距损耗（LOS loss）为：

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

(原文有误，应为：$-101.7 - (-112) = 10.3\ \mathrm{dB}$)

如果需要达到 $15\ \mathrm{dB}$ 的信噪比，则拦截天线需提供额外 4.5dB(4.7dB) 的增益。因此，天线直径必须增加至 **10 米**。


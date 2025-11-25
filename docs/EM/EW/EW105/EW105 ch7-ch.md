# 7 脆弱性与电子战的关联机制

**LINK VULNERABILITY TO EW**

本章将讨论卫星在敌对电磁攻击（electromagnetic attacks）威胁下的脆弱性（vulnerability）这一重要课题。

## 7.1 卫星脆弱性

卫星虽然远离地球，但从地球表面很大一部分区域都能获得良好的视距（Line-of-Sight, LOS）通路。因此，它们极易受到三种类型的敌对活动影响：卫星信号可能被截获（intercept）；强敌对发射信号可能实施干扰（jamming），破坏上行链路或下行链路信号，使其无法被正确接收；还可能实施欺骗（spoofing），使卫星将这些信号误认为是有害的功能指令。

我们将首先评估卫星链路在未采取任何防护措施情况下面对截获、欺骗和干扰的脆弱性。随后，我们将讨论可降低上述脆弱性的电子防护（Electronic Protection, EP）措施。

图7.1展示了截获场景，图7.2展示了欺骗场景。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-104.jpg?height=586&width=897&top_left_y=263&top_left_x=259){width="400"}

图7.1 截获（Intercept）。地面干扰机针对卫星上行链路，向卫星中的链路接收机发射信号。地面站和干扰机都必须位于卫星的地平线以上。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-104.jpg?height=559&width=794&top_left_y=1065&top_left_x=338){width="400"}

图7.2 欺骗（Spoofing）。地面干扰机针对卫星上行链路，向卫星中的链路接收机发射信号。地面站和干扰机都必须位于卫星的地平线以上。

成功的截获（intercept）会使敌方接收机获得足够高质量的信号，从而恢复出重要信息。所接收的信号原本是发送给卫星地面控制站（ground control station）或其他授权接收机的。敌方接收机与信号源之间存在一条独立的链路。成功的欺骗（spoofing）则向卫星链路接收机注入足够强的信号，使卫星或其有效载荷（payload）将其误认为有效指令而予以执行。指令欺骗可能导致卫星执行终结其任务的机动动作，或将有效载荷置于不可用状态。

上行链路干扰（uplink jamming）如图7.3所示，下行链路干扰（downlink jamming）如图7.4所示。在这两种情况下，干扰机均向链路接收机发射干扰信号。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-105.jpg?height=622&width=713&top_left_y=435&top_left_x=408){width="400"}

图7.3 地面干扰机针对卫星上行链路，向卫星中的链路接收机发射信号。地面站和干扰机都必须位于卫星的地平线以上。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-105.jpg?height=616&width=878&top_left_y=1254&top_left_x=329){width="400"}

图7.4 针对卫星下行链路的干扰机向卫星地面站中的链路接收机发射信号。干扰机可位于地球表面，或位于地面站地平线以上的任何其他位置。

成功的上行链路干扰可能妨碍卫星或其有效载荷的正常功能，例如阻止卫星姿态调整或有效载荷功能选择。

成功的下行链路干扰则可能使地面站无法获知卫星上需纠正的异常状态，也可能阻止有效载荷数据向地面站的传输。

### 7.1.1 空间相关链路损耗（Space-Related Link Losses）

对卫星链路的攻击可能涉及单条链路，也可能涉及多条链路。每条链路都会受到传输损耗的影响，包括视距（LOS）损耗、大气损耗、降雨损耗，以及因天线失准或极化失配（polarization mismatch）引起的天线损耗。

### 7.1.2 截获（Intercept）

截获链路独立于预期的指令与数据链路。它从卫星链路发射机（位于卫星上或地面控制站内）指向敌方接收机。截获效果的好坏由敌方接收机中获得的信噪比（signal-to-noise ratio）来衡量。

### 7.1.3 欺骗（Spoofing）

欺骗链路由敌方发射机指向卫星链路接收机。该接收机通常位于卫星上，欺骗信号的目的是使其功能异常；但如果欺骗的目的是虚假模拟有效数据，则接收机也可能位于地面站。

### 7.1.4 干扰（Jamming）

对任何卫星链路的干扰均属于通信干扰（communication jamming）。干扰效能通常以其造成的干扰信号与有用信号功率比（即干扰/信号比，jamming-to-signal ratio，$\mathrm{J} / \mathrm{S}$）来定义。分析干扰时需考虑两条链路：一条是从合法发射机到合法接收机的链路，另一条是从干扰发射机到同一接收机的链路。通信干扰的效能取决于目标接收机是否能正确接收有用信号。在卫星链路干扰中，这通常以所达到的 $\mathrm{J} / \mathrm{S}$ 来衡量。若采用噪声干扰（noise jamming），$\mathrm{J} / \mathrm{S}$ 可低至 0 dB，但在某些情况下可能需要更高的 $\mathrm{J} / \mathrm{S}$。

通信干扰的 $\mathrm{J} / \mathrm{S}$ 由以下公式计算：

$$
J / S=E R P_{J}-E R P_{S}-L O S S_{J}+L O S S_{S}+G_{R J}-G_{R}
$$

其中：

- $J / S$ 为以分贝（dB）表示的干扰/信号比；
- $E R P_{J}$ 为干扰发射机指向目标接收机的有效辐射功率（Effective Radiated Power, ERP），单位为 $\mathrm{dBm}$；  
- $E R P_{S}$ 为有用信号发射机指向接收机的有效辐射功率，单位为 $\mathrm{dBm}$；  
- $L O S S_{J}$ 为从干扰机到目标接收机的传输损耗（dB）；
- $L O S S_{S}$ 为从合法发射机到目标接收机的传输损耗（dB）；
- $G_{R J}$ 为接收天线在干扰机方向上的增益（dB）；
- $G_{R}$ 为接收天线在合法发射机方向上的增益（dB）。

如果目标接收机使用的是全向天线（nondirectional antenna），则该公式中的最后两项相互抵消。

### 7.1.5 本章所讨论的问题

本章考虑了五种不同的情景，分别是：

- 下行链路的截获（Intercept of a downlink）；
- 上行链路的截获（Intercept of an uplink）；
- 下行链路的干扰（Jamming of a downlink）；
- 上行链路的干扰（Jamming of an uplink）；
- 任意卫星链路的电子防护（Electronic protection of any satellite link）。

所有这些情景都必须考虑卫星是否位于相关地面设备的地平线以上。注意，表3.3中提供了一个详尽的表格，列出了不同卫星周期对应的地平线距离及相关基础计算。当你运用本章所介绍的内容解决实际问题时，该表格将非常方便。在该表中，$p(\min )$ 表示卫星的轨道周期（单位：分钟），$rng(\mathrm{~km})$ 表示卫星与地面发射机或接收机之间的链路传播距离（单位：公里），$dist$（km）表示星下点（Sub-Satellite Point, SVP）与地面发射机或接收机之间的地表距离（单位：公里）。

## 7.2 下行链路截获（Downlink Intercept）

在本节讨论中，我们假设易受攻击的卫星运行在距地球表面300 km高的圆轨道上。其星下点（Sub-Satellite Point, SVP）位于东经 100°、北纬 40°。截获站位于地球表面东经 102°、北纬 42°处。

该卫星下行链路在2 GHz频段使用一个100 W（50 dBm）的发射机。请注意，这仅是一个用于计算的数值；我们并不关心现实中是否有卫星曾使用过此类发射机。

首先，我们假设卫星下行链路和截获站均使用各向同性天线（isotropic antennas），即天线增益为0 dB。随后，我们将把天线改为定向天线（directional antennas）进行分析。

我们需要计算以下几个重要参数：

- 卫星到截获站之间的距离（range）是多少？
- 从卫星看截获站的仰角（elevation）是多少？
- 从截获站看卫星的仰角是多少？

### 7.2.1 从卫星到截获站的地心角（Geocentric Angle）

图7.5展示了地球表面上由北极点、卫星星下点（SVP）和敌方接收站构成的一个球面三角形。该三角形的三条边均为地球表面上的大圆弧段。在地球上的球面三角形中，每条边的长度以其两个端点之间的地心角（geocentric angle）表示；每个角的大小则定义为相邻两边所在平面之间的地心角。因此，球面三角形的边和角均以角度表示。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-108.jpg?height=598&width=1040&top_left_y=1327&top_left_x=215){width="400"}

图7.5 由北极点、星下点（SVP）和敌方接收站构成的球面三角形，可用于计算卫星天线指向敌方站的方位角，以及卫星与敌方站之间的地心角。

边 \(a\) 为卫星星下点与截获站之间的地心角。 边 \( b = 90^{\circ} - \) 星下点纬度。边 \( c = 90^{\circ} - \) 截获站纬度。角 \(A\) 为星下点与截获站之间的经度差。

在图7.5中：

- 边 \( a = 90^{\circ} - 40^{\circ} = 50^{\circ} \)  
- 边 \( b = 90^{\circ} - 42^{\circ} = 48^{\circ} \)  
- 角 \( A = 2^{\circ} \)

根据球面余弦定理（spherical law of cosines for sides）：

$$
\begin{aligned}
\cos a & =(\cos b)(\cos c)+(\sin b)(\sin c)(\cos A) \\
& =\left(\cos 50^{\circ}\right)\left(\cos 48^{\circ}\right)+\left(\sin 50^{\circ}\right)\left(\sin 48^{\circ}\right)\left(\cos 2^{\circ}\right) \\
& =(0.643)(0.669)+(0.766)(0.743)(0.999) \\
& =0.430+0.569=0.999
\end{aligned}
$$

因此，边 \( a = \arccos(0.999) \approx 2.56^{\circ} \)。

### 7.2.2 卫星到截获站的距离（Range）

现在考虑图7.6。这是一个由卫星、地心和截获站构成的平面三角形。边 \(d\) 为卫星到截获站的传播距离（即所求范围）。边 \( e \) 为地球半径（\( R_E \)）加上卫星高度（\(H\)）。边 \(f\) 为地球半径。角 \(D\) 与图7.5球面三角形中计算出的边 \(a\) 相同，即地心角。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-110.jpg?height=653&width=730&top_left_y=246&top_left_x=369){width="400"}

图7.6 卫星发射机与地面截获接收机之间的传播距离，可通过由卫星位置、接收机位置和地心构成的平面三角形计算得出。

角 \(D\) 为 \(2.56^{\circ}\)，与图7.5中球面三角形的边 \(a\) 相同。
边 \( e \) 为 \( 6,671\,\mathrm{km} \)。
边 \(f\) 为 \( 6,371\,\mathrm{km} \)。
平面三角形边的余弦定理为：

$$
\begin{aligned}
d^{2} & =e^{2}+f^{2}-2 e f \cos D \\
& =(6,671 \,\text{km})^{2}+(6,371 \,\text{km})^{2}-2(6,671)(6,371) \cos 2.56^{\circ} \\
& =44,502,241 + 40,589,641 - 84,916,880 \,\text{km}^{2} \\
& =175,002 \,\text{km}^{2} \\
d & =\sqrt{175,002 \,\text{km}^{2}} \\
& =418 \,\text{km}
\end{aligned}
$$


继续分析图7.6，我们希望计算从卫星到截获站的仰角，以及从截获站到卫星的仰角。已知边 \(d\) 和角 \(D\)，因此可使用平面三角形的正弦定理：

$$
\begin{aligned}
& \sin D / d=\sin E / e=\sin F / f \\
& \sin E=e \sin D / d=6671 \sin \left(2.56^{\circ}\right) / 418=6671(0.0493) / 418=.713 \\
& \arcsin (.787)=45.5^{\circ}
\end{aligned}
$$

但角 E 大于 $ 90^{\circ} $，因此角 E（卫星相对于地球中心的仰角，elevation of the satellite above the center of the Earth）$=180^{\circ}-45.5^{\circ}=134.5^{\circ}$。从拦截点（intercept site）观测，卫星相对于地平线的仰角（elevation above the horizon）为 $45.5^{\circ}$。

$$
\begin{aligned}
& \sin F / 6,371=\sin 2.56^{\circ} / 418=0.0447 / 418=0.000,107 \\
& \sin F=(0.000,107)(6,371)=.681
\end{aligned}
$$

因此，角 F（拦截点相对于地球中心的仰角，elevation of the intercept site above the center of the Earth）$=42.9^{\circ}$

星下点（SVP）到截获站之间的地表距离由下式给出：

$$
\begin{aligned}
& \left(\text { Angle } D / 360^{\circ}\right)(2 \pi \times \text { Radius of the Earth }) \\
& =\left(2.56^{\circ} / 360^{\circ}\right)(2 \pi \times 6371 \mathrm{~km})=285 \mathrm{~km}
\end{aligned}
$$

在确定拦截链路性能时，我们将使用这三个数值中的两个（拦截站点到卫星的链路距离以及卫星在地平线上的仰角）。

### 7.2.3 卫星是否位于截获站的地平线以上？

现在考虑图7.7。该图展示了一个由卫星、地平点（horizon point）和地心构成的平面直角三角形。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-112.jpg?height=719&width=1120&top_left_y=246&top_left_x=162){width="400"}

图7.7 卫星到地平线的距离可通过由卫星、地平线上某点和地心构成的平面直角三角形确定。

其中：

- 角 \( J = 90^{\circ} \)，表示从地平点看地心到卫星的夹角；  
- 角 \( K \) 为卫星到地平点的地心角（geocentric angle）；
- 角 \( M \) 为从卫星看地心到地平点的夹角；
- 边 \( j \) 为地心到卫星的距离（\( R_E + H \)）；  
- 边 \( k \) 为卫星到地平点的直线距离；
- 边 \( m \) 为地心到地平点的距离（即地球半径 \( R_E \)）。

由于这是一个平面直角三角形（plane right triangle），因此边 $j^{2}=$ 边 $k^{2}+$ 边 $m^{2}$。

$$
\begin{aligned}
\text{边 } k & = \sqrt{j^2 - m^2} \\
& = \sqrt{6671^2 - 6371^2} = \sqrt{44,502,241 - 40,589,641} \\
& = \sqrt{3,912,600} \\
& = 1978 \,\mathrm{km}
\end{aligned}
$$


该距离即为信号传播至地平线的路径长度，因此截获站远在卫星地平线覆盖范围之内。

角 \(K\) 可通过以下公式计算（基于平面三角形边的余弦定理）：

$$
\begin{aligned}
\cos K & =\left(j^2+m^2-k^2\right) / 2 j m \\
& =\left(6671^2+6371^2-1978^2\right) / 2 \times 6671 \times 6371 \\
& =(44,502,241+40,589,641-3,912,484) / 85,001,882 \\
& =81,179,398 / 85,001,882 \\
& =0.955
\end{aligned}
$$

因此，角 $\mathrm{K}= \arccos(0.955)=17.2^{\circ}$

星下点（SVP）到地平线的地球表面距离由下式给出：

$$
\begin{aligned}
&\left(\text { Angle } K / 360^{\circ}\right)(2 \pi \times \text { Radius of the Earth })\\
&=\left(17.2^{\circ} / 360^{\circ}\right)(2 \pi \times 6,371 \mathrm{~km})=1,913 \mathrm{~km}
\end{aligned}
$$


因此，截获站完全处于从星下点（SVP）算起的地平线可视范围内。。

### 7.2.4 截获站接收到的下行链路信号强度

在忽略大气损耗、降雨损耗、极化失配损耗以及其他若干重要因素的前提下，接收信号功率由以下公式给出：

$$
P_{R}=E R P-(32.4+20 \log F+20 \log d)
$$


其中，\(P_{R}\) 为截获站接收到的信号功率（单位：dBm）；\( ERP \) 为卫星发射的有效辐射功率（Effective Radiated Power, ERP），单位为 dBm；\(F\) 为链路传输频率，单位为兆赫（MHz）；\(d\) 为链路距离，单位为公里（km）。

$$
\begin{aligned}
P_{R} &= 50 - 32.4 - 20 \log (2000) - 20 \log (418) \\
&= 50 - 32.4 - 66.0 - 52.4 \\
&= -100.8 \,\mathrm{dBm}
\end{aligned}
$$


由于此处假设收发天线均为各向同性天线（即增益为 0 dB），该信号强度是否足够取决于接收机的类型及其工作带宽。在某些高灵敏度、窄带接收系统中，-100.8 dBm 的信号可能已足以被有效截获和解调。

### 7.2.5 使用定向天线的截获（Intercept with Directional Antennas）

现在，我们将通过引入定向天线（directional antennas）、若干额外的损耗因素、信号调制方式以及接收机灵敏度，显著增加该截获问题的复杂性。

我们仍使用相同的卫星：易受攻击的卫星运行在距地球表面300 km高的圆轨道上，其星下点（SVP）位于东经 100°、北纬 40°。卫星的地面控制站位于地球表面东经 103°、北纬 44°。另有一处敌方截获站位于地球表面东经 102°、北纬 45°。卫星下行链路在2 GHz频段使用一个100 W（50 dBm）的发射机。请注意，这仅是一个用于计算的数值，并不代表任何特定卫星或截获站的实际参数。

本节讨论中包含若干示意图，用于说明卫星与地面位置之间的相对几何关系。请注意，图中所示角度并未按实际比例绘制，而是被放大以便标注。

我们将为卫星下行链路和敌方地面拦截站均配备定向天线。卫星上的发射天线为 3 米抛物面天线。卫星地面站和地面拦截站均配备 2 米抛物面天线。首先，我们需要确定这些天线各自的增益和 3dB波束宽度。

各天线的主瓣增益（boresight gain）可通过以下公式计算：

$$
G = -42.2 + 20 \log D + 20 \log F
$$


其中：\( G \) 为天线主瓣增益，单位为 dBi；\( D \) 为天线直径，单位为米（m）；\( F \) 为工作频率，单位为兆赫（MHz）。

对于卫星天线：

$$
\begin{aligned}
G &= -42.2 + 20 \log (3) + 20 \log (2000) \\
  &= -42.2 + 9.5 + 66 = 33.3 \,\mathrm{dBi}
\end{aligned}
$$


对于地面站天线和侦收天线，

$$
\begin{aligned}
& G=-42.2+20 \log (3)+20 \log (2000) \\
& G=-42.2+6+66=29.8 \,\mathrm{dBi}
\end{aligned}
$$


各天线的3-dB波束宽度可由下式求得：

$$
\alpha=\operatorname{Antilog}[(86.8-20 \log D-20 \log F) / 20]
$$


其中，$\alpha$ 为以度为单位的3-dB波束宽度，$D$ 为天线直径（单位：米），$F$ 为工作频率（单位：兆赫）。

对于卫星天线，

$$
\begin{aligned}
& \alpha=\operatorname{Antilog}[(86.8-20 \log (3)-20 \log (2000)) / 20] \\
& \alpha=\operatorname{Antilog}[(86.8-9.5-66) / 20]=3.7^{\circ}
\end{aligned}
$$


对于侦收站和地面控制站天线，

$$
\alpha=\operatorname{Antilog}[(86.8-6-66) / 20]=5.4^{\circ}
$$


### 7.2.6 相对于地面控制站的角度

现在我们计算从卫星指向其地面控制站的观测角（look angles）。图7.8展示了一个由北极点、星下点（SVP）和卫星地面控制站构成的球面三角形。该三角形的参数如下：

- 角 $\mathrm{A}=$ 卫星与地面站之间的经度差 $=3^{\circ}$。
- 角 B 为从卫星指向地面站的方位角。
- 边 $\mathrm{c}=90^{\circ}$ 减去星下点（SVP）的纬度 $=50^{\circ}$。
- 边 $\mathrm{b}=90^{\circ}$ 减去地面站的纬度 $=46^{\circ}$。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-115.jpg?height=604&width=1040&top_left_y=1291&top_left_x=248){width="400"}

图7.8 由北极点、星下点（SVP）和地面站构成的球面三角形，可用于计算卫星天线指向地面站的方位角，以及卫星与地面控制站之间的地心角。

根据球面三角形边的余弦定理：

$$
\begin{aligned}
\cos a & = \cos b \cdot \cos c + \sin b \cdot \sin c \cdot \cos A \\
& = \cos(46^\circ) \cdot \cos(50^\circ) + \sin(46^\circ) \cdot \sin(50^\circ) \cdot \cos(3^\circ) \\
& = (0.695)(0.643) + (0.719)(0.766)(0.999) \\
& = 0.446 + 0.550 + 0.996
\end{aligned}
$$


因此，边 \( a = \arccos(0.997) \approx 5.13^\circ \)。
这就是星下点与地面控制站之间的地心角（geocentric angle）。

注意：该角的正弦值为 \( \sin(5.13^\circ) \approx 0.089 \)。

将球面余弦定理重新整理，可求解角 \( B \)（即卫星天线指向地面站的方位角）：

$$
\begin{aligned}
\cos B & =(\cos b-\cos a \times \cos c) /(\sin a \times \sin c) \\
& =[(.695)-(.996)(.643)] /(.089)(.766)=.055 / .068=.809
\end{aligned}
$$


角 \( B = \arccos(0.809) \approx 36.02^{\circ} \)。
这是卫星天线为对准地面控制站所需指向的方位角（azimuth）。

接下来，我们利用图7.9计算从卫星观测地面控制站的仰角（elevation）。该图是一个由卫星、地面控制站和地心构成的平面三角形。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-117.jpg?height=744&width=1070&top_left_y=245&top_left_x=222){width="400"}

图7.9 卫星天线相对于星下点（nadir）的仰角及卫星到地面站的距离可通过该平面三角形计算得出。

- 角 \( F \) 与图7.8中的边 \( a \) 相同，即 \( 5.13^{\circ} \)；
- 边 \( e \) 为地球半径加卫星高度 \( = 6371\,\mathrm{km} + 300\,\mathrm{km} = 6671\,\mathrm{km} \)；
- 边 \( d \) 为地球半径 \( = 6371\,\mathrm{km} \)。

根据平面三角形的余弦定理：

$$
\begin{aligned}
\text{边 } f^{2} & = e^{2} + d^{2} - 2 e d \cos F \\
& = 6671^{2} + 6371^{2} - 2(6671)(6371)\cos(5.13^{\circ}) \\
& = 44,502,241 + 40,589,641 - 84,661,397 \\
& = 430,485\,\mathrm{km}^{2}
\end{aligned}
$$


（注：原文计算结果为 \( 446,732 \,\mathrm{km}^2 \)，但按数值重新核算应为约 \( 430,485 \,\mathrm{km}^2 \)，此处保留原文表述以忠实于原文。）

边 \( f = \sqrt{446,732} \approx 668\,\mathrm{km} \)。这就是卫星到其地面控制站的链路距离。

现在，我们可利用平面三角形的正弦定理求解角 \( D \)，即从卫星观测地面站的仰角。需注意，此处的仰角是指从地心方向向上测量的角度。

$$
\sin D = \frac{d \cdot \sin F}{f} = \frac{6371\,\mathrm{km} \cdot \sin(5.13^{\circ})}{668\,\mathrm{km}} \approx \frac{6371 \cdot 0.0894}{668} \approx 0.853
$$


但此处存在数值矛盾：若 \( \sin D = 0.853 \)，则 \( D \approx \arcsin(0.853) \approx 58.5^{\circ} \)；而原文写作 \( \arcsin(0.0756) = 58.3^{\circ} \)，显然不一致。根据上下文逻辑及常规几何关系，应为：

$$
\sin D \approx 0.853 \quad \Rightarrow \quad D = \arcsin(0.853) \approx 58.5^{\circ}
$$


然而，为忠实于原文表述，我们保留其文字如下：

角 \( D = \arcsin(0.853) \approx 58.3^{\circ} \)。

> 原文为： \( Angles D = \arcsin(.0756)= \ 58.3^{\circ} \)

这是从卫星观测到的地面控制站仰角。

### 7.2.7 相对于敌方截获站的角度

现在我们计算从卫星指向敌方截获站的观测角（look angles）。图7.10展示了一个由北极点、星下点（SVP）和截获站构成的球面三角形。该三角形的参数如下：

- 角 \( J \)：卫星与截获站之间的经度差 \( = |102^\circ - 100^\circ| = 2^\circ \)；
- 角 \( K \)：从卫星到截获站的方位角；
- 边 \( m = 90^\circ - \) SVP 纬度 \( = 90^\circ - 40^\circ = 50^\circ \)；
- 边 \( k = 90^\circ - \) 截获站纬度 \( = 90^\circ - 45^\circ = 45^\circ \)。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-118.jpg?height=592&width=1078&top_left_y=248&top_left_x=197){width="400"}

图7.10 北极点、星下点（SVP）与截获站之间的球面三角形可用于计算截获站相对于卫星下行链路天线主瓣（boresight）的偏角。

根据球面三角形边的余弦定理：

$$
\begin{aligned}
\cos j & = \cos m \cdot \cos k + \sin m \cdot \sin k \cdot \cos J \\
& = \cos(50^\circ) \cdot \cos(45^\circ) + \sin(50^\circ) \cdot \sin(45^\circ) \cdot \cos(2^\circ) \\
& = (0.642)(0.707) + (0.766)(0.707)(0.999) \\
& = 0.454 + 0.541 = 0.995
\end{aligned}
$$

因此，边 \( j = \arccos(0.995) \approx 5.73^\circ \)。
这是星下点与截获站之间的地心角。注意：该角的正弦值为 \( \sin(5.73^\circ) \approx 0.099 \)。

将球面余弦定理重新整理，可解出角 \( K \)（即卫星天线指向截获站的方位角）：

$$
\begin{aligned}
\cos K & = \frac{\cos k - \cos j \cdot \cos m}{\sin j \cdot \sin m} \\
& = \frac{0.707 - (0.995)(0.642)}{(0.099)(0.766)} \\
& = \frac{0.707 - 0.639}{0.0758} \\
& = \frac{0.068}{0.0758} \approx 0.910
\end{aligned}
$$

角 \( K = \arccos(0.910) \approx 24.5^\circ \)。
这是卫星天线为对准截获站所需指向的方位角。

接下来，我们利用图7.11计算从卫星观测截获站的仰角。该图是一个由卫星、截获站和地心构成的平面三角形。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-119.jpg?height=728&width=1060&top_left_y=1230&top_left_x=224){width="400"}

图7.11 卫星天线相对于星下点（nadir）的仰角及卫星到地面站的距离可通过该平面三角形计算得出。

- 角 \( P \) 与图7.10中的边 \( j \) 相同，即 \( 5.73^{\circ} \)；
- 边 \( r \) 为地球半径加卫星高度 \( = 6371\,\mathrm{km} + 300\,\mathrm{km} = 6671\,\mathrm{km} \)；
- 边 \( q \) 为地球半径 \( = 6371\,\mathrm{km} \)。

根据平面三角形的余弦定理：

$$
\begin{aligned}
\text{边 } p^{2} & = r^{2} + q^{2} - 2 r q \cos P \\
& = 6671^{2} + 6371^{2} - 2(6671)(6371)\cos(5.73^{\circ}) \\
& = 44,502,241 + 40,589,641 - 84,577,164 \\
& = 514,718\,\mathrm{km}^{2}
\end{aligned}
$$

边 \( p = \sqrt{514,718} \approx 717\,\mathrm{km} \)。
这是卫星到截获站的链路距离。

现在可利用平面三角形的正弦定理求解角 \( Q \)，即从卫星观测截获站的仰角（注意：仰角是从地心方向向上测量的角度）：

$$
\sin Q = \frac{q \cdot \sin P}{p} = \frac{6371\,\mathrm{km} \cdot \sin(5.73^{\circ})}{717\,\mathrm{km}} \approx \frac{6371 \cdot 0.0998}{717} \approx 0.887
$$

角 \( Q = \arcsin(0.887) \approx 62.5^{\circ} \)。
这是从卫星观测到的截获站仰角。

现在汇总两条下行链路的相关角度数据：

- **下行链路接收机**（地面控制站）**相对于卫星的方向**：
  
  - 方位角 \( = 36.0^{\circ} \)；
  - 仰角 \( = 58.3^{\circ} \)。

- **截获接收机相对于卫星的方向**：
  
  - 方位角 \( = 24.5^{\circ} \)；
  - 仰角 \( = 62.5^{\circ} \)。

下链路天线瞄准轴（downlink antenna boresight）与拦截点（intercept site）之间的方位角差为 $\Delta A Z=24.5^{\circ}-36.0^{\circ}=11.5^{\circ}$。

下链路天线瞄准轴与拦截点之间的仰角差为 $\Delta E L=62.5^{\circ}-58.3^{\circ}=4.2^{\circ}$。

从下链路瞄准轴指向拦截点的方向偏移角（offset angle）由图 7.12 中的球面直角三角形（spherical right triangle）确定。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-121.jpg?height=530&width=770&top_left_y=246&top_left_x=380){width="400"}

图7.12 该球面直角三角形位于以卫星下行链路天线为中心的单位球面上，由截获站和地面站构成，其形状由从卫星观测到的方位角差和仰角差定义。

根据第2.3节所述的纳皮尔法则（Napier's rules），边 \( cc \) 的余弦等于边 \( aa \) 与边 \( bb \) 余弦的乘积：

- 边 \( aa = \Delta az = 11.5^{\circ} \)，\( \cos aa = 0.980 \)；
- 边 \( bb = \Delta el = 4.2^{\circ} \)，\( \cos bb = 0.997 \)。

因此，$\cos cc = (0.980)(0.997) = 0.977$，由此可得边 $\mathrm{cc} = 12.3^{\circ}$。  
该角度远大于天线波束宽度（antenna beamwidth），因此可采用平均旁瓣隔离度（average sidelobe isolation）20 dB 来估算下链路天线在指向拦截天线方向上的增益。于是，下链路天线在拦截接收机方向上的增益比其瞄准轴（boresight）增益低 20 dB，即 $33.3 \,\mathrm{dB} - 20 \,\mathrm{dB} = 13.3 \,\mathrm{dB}$。

### 7.2.8 截获站接收信号功率

由于仰角很高，大气衰减和降雨衰减均可忽略不计，因此链路损耗仅为视距（LOS）传播损耗。

接收功率由以下公式计算：

$$
P_{R}=P_{T}+G_{T}(\text{指向接收机})-32.44-20 \log d-20 \log F+G_{R}
$$


其中：  
- \( P_R \) 为截获站接收机接收到的功率，单位为 dBm；  
- \( P_T \) 为下行链路发射机功率，\( 100\,\mathrm{W} = 50\,\mathrm{dBm} \)；  
- \( G_T \) 为发射天线在截获站方向的增益，\( = 13.3\,\mathrm{dBi} \)；  
- \( d \) 为卫星与截获站之间的链路距离，\( = 717\,\mathrm{km} \)；  
- \( F \) 为链路频率，\( = 2\,\mathrm{GHz} = 2000\,\mathrm{MHz} \)；  
- \( G_R \) 为截获站接收天线增益，\( = 29.8\,\mathrm{dBi} \)。

代入数值计算：

$$
\begin{aligned}
P_{R} & = P_{T} + G_{T}(\text{指向接收机}) - 32.4 - 20 \log d - 20 \log F + G_{R} \\
& = 50\,\mathrm{dBm} + 13.3\,\mathrm{dBi} - 32.4 - 20 \log(717) - 20 \log(2000) + 29.8\,\mathrm{dBi} \\
& = 50 + 13.3 - 32.4 - 57.1 - 66 + 29.8 \\
& = -62.4\,\mathrm{dBm}
\end{aligned}
$$


### 7.2.9 截获的下行链路信号质量如何？

接收机的最小可检测信号（Minimum Detectable Signal, MDS）由下式给出：

$$
MDS = kTB + NF
$$

其中：

- \( MDS \) 为最小可检测信号，单位为 dBm；
- \( kTB \) 为接收机中的热噪声电平，其值等于 \( -114\,\mathrm{dBm} + 10 \log(\text{带宽}/1\,\mathrm{MHz}) \)；  
- \( NF \) 为接收机系统噪声系数（Noise Figure），单位为 dB。

若截获接收机的带宽为 10 MHz，噪声系数为 5 dB，则其 MDS 为：

$$
kTB + NF = -114\,\mathrm{dBm} + 10 \log(10) + 5\,\mathrm{dB} = -114 + 10 + 5 = -99\,\mathrm{dBm}
$$


此时，接收到的信号信噪比（Signal-to-Noise Ratio, \( S/N \)）为：

$$
S/N = -62.4\,\mathrm{dBm} - (-99\,\mathrm{dBm}) = 36.6\,\mathrm{dB}
$$


这是一个质量极高的截获信号。

## 7.3 上行链路截获（Intercepting Uplinks）

截获卫星上行链路（uplinks）是指接收从地面站发送至卫星的信号。除非截获站距离地面站极近，否则只能通过在卫星地面站上空飞行的（可能是无人）飞机从上方进行探测，如图7.13所示。需要注意的是，该飞机必须位于地面站的本地地平线以上。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-123.jpg?height=721&width=1168&top_left_y=248&top_left_x=182){width="400"}

图7.13 一架敌方机载接收机可截获卫星或其有效载荷的上行链路。

为评估截获质量，必须获知飞机与地面站之间的距离，以及卫星链路接收天线的旁瓣隔离度（sidelobe isolation）。由于地面站天线指向卫星，截获飞机将处于该天线的旁瓣区域，天线增益显著降低。若假设飞机不在卫星上行链路天线的主波束内，则可直接采用其标称的平均旁瓣增益衰减值，而不必使用精确的天线方向图数据。

在构建此问题时，需指定飞机的位置：包括地面站的经纬度，以及飞机相对于地面站的经纬度和高度。

我们从图7.14开始分析。飞机星下点（SVP）、地面站和北极点构成一个球面三角形。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-123.jpg?height=590&width=1065&top_left_y=1138&top_left_x=232){width="400"}

图7.14 北极点、飞机星下点（SVP）与地面站之间构成一个球面三角形。

- 边 \( c = 90^\circ - \) 飞机SVP的纬度；  
- 边 \( b = 90^\circ - \) 地面站位置的纬度；  
- 角 \( A \) 为飞机与地面站之间的经度差。

利用球面三角形边的余弦定理，可计算飞机到地面站的地心角（geocentric angle）：

$$
\text{边 } a = \arccos \left[ (\cos b)(\cos c) + (\sin b)(\sin c)(\cos A) \right]
$$


接下来考虑图7.15，它是由飞机、地面站和地心构成的一个平面三角形。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-124.jpg?height=544&width=906&top_left_y=1384&top_left_x=279){width="400"}

图7.15 飞机到地面站的距离可通过该平面三角形计算得出。

- 边 \( d = \) 地球半径 + 地面站海拔高度（通常可近似为地球半径 \( R_E \)）；  
- 边 \( e = \) 地球半径 + 飞机飞行高度；  
- 角 \( F \) 与图7.14中的边 \( a \) 相同；  
- 边 \( f \) 为飞机到地面站的直线距离（即所求链路距离）。

利用平面三角形边的余弦定理，链路距离计算如下：

$$
\text{边 } f = \sqrt{d^{2} + e^{2} - 2 d e \cos F}
$$


代入具体数值：

- 地面站位于海平面，北纬 45°、东经 100°；
- 飞机位于北纬 46°、东经 101°，飞行高度为 3 km；
- 上行链路发射频率为 5 GHz；
- 上行链路发射功率为 100 W（即 +50 dBm）；
- 地面站上行天线为直径 3 m 的抛物面天线，采用圆极化（circular polarization）；
- 卫星地面天线的平均旁瓣电平比主瓣（boresight）增益低 20 dB；
- 飞机上的截获有效载荷天线为背腔螺旋天线（cavity-backed spiral），采用匹配的圆极化，增益为 3 dBi。

首先计算飞机到地面站的地心角：

$$
\begin{aligned}
& \arccos \left[ \left(\cos 45^{\circ}\right)\left(\cos 44^{\circ}\right) + \left(\sin 45^{\circ}\right)\left(\sin 44^{\circ}\right) \cos\left(1^{\circ}\right) \right] \\
& = \arccos \left[ (0.7071)(0.7193) + (0.7071)(0.6947)(0.9998) \right] \\
& = \arccos \left[ 0.5086 + 0.4911 \right] \\
& = \arccos(0.9997) \approx 1.403^{\circ}
\end{aligned}
$$


根据平面余弦定理，链路距离为：

$$
\begin{aligned}
f &= \sqrt{6371^{2} + 6374^{2} - 2 \cdot 6371 \cdot 6374 \cdot \cos(1.403^{\circ})} \\
  &= \sqrt{40,589,641 + 40,627,876 - 81,193,143} \\
  &= \sqrt{24,374} \approx 156\,\mathrm{km}
\end{aligned}
$$


此即截获链路的传播距离。

由于上行链路频率为 5 GHz，发射天线为直径 3 m 的抛物面天线，其增益可由下式计算：

$$
\begin{aligned}
Gain &= -42.2 + 20 \log(\text{直径（米）}) + 20 \log(\text{频率（MHz）}) \\
           &= -42.2 + 20 \log(3) + 20 \log(5000) \\
           &= -42.2 + 9.5 + 74 = 41.3\,\mathrm{dBi}
\end{aligned}
$$

该飞机将位于一个比瞄准轴增益（boresight gain）低 20 dB 的旁瓣（sidelobe）中，因此指向拦截接收机的有效天线增益为 21.3 dBi。于是，在发射功率为 $50\,\mathrm{dBm}$ 的条件下，指向飞机的上行链路（uplink）有效辐射功率（ERP, Effective Radiated Power）为 $50\,\mathrm{dBm} + 21.3\,\mathrm{dBi} = 71.3\,\mathrm{dBm}$。

截获接收机处的接收功率由下式计算：

$$
P_{R} = ERP_{T} - 32.4 - 20 \log d - 20 \log F + G_{R}
$$

其中：

- \( P_R \) 为接收功率（dBm）；
- \( ERP_T \) 为上行发射机的有效辐射功率（dBm）；
- \( d \) 为地面站与截获飞机之间的距离（km）；
- \( F \) 为上行发射频率（MHz）；
- \( G_R \) 为截获接收机天线增益（dBi）。

代入数值：

$$
\begin{aligned}
P_{R} &= 71.3 - 32.4 - 20 \log(156) - 20 \log(5000) + 3 \\
      &= 71.3 - 32.4 - 43.8 - 74 + 3 \\
      &= -75.9\,\mathrm{dBm}
\end{aligned}
$$


这是一个相当强的信号。由于飞机位于地面站的地平线以上，因此成功实现了上行链路截获。当然，这一结论假设截获飞机被允许在卫星地面站上空飞行而不被击落。

## 7.4 下行链路干扰（Jamming Downlinks）

对卫星下行链路的干扰（jamming）是指向地面站发射干扰信号。除非干扰发射机距离地面站极近，否则只能通过在卫星地面站上空飞行的（可能是无人）飞机从上方实施干扰，如图7.16所示。需要注意的是，该飞机必须位于地面站的本地地平线以上。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-127.jpg?height=636&width=1168&top_left_y=248&top_left_x=182){width="400"}

图7.16 一架敌方机载干扰机可干扰任意卫星下行链路。

由于我们在第7.3节中已经完成了从飞机计算距离的复杂工作，现在我们直接使用同一架飞机来分析对下行链路的干扰。为方便起见，我们将飞机和地面站置于相同位置，保持天线配置不变，并使用相同频率进行干扰。实际上，上行链路和下行链路频率应略有不同，但为简化计算，此处统一使用5 GHz。

已知参数如下：

- 干扰发射机的有效辐射功率（ERP）为 10 W（即 40 dBm）；
- 干扰机到地面站的距离为 156 km；
- 卫星运行在高度为 1,000 km 的轨道上，其星下点（SVP）位于北纬 55°、东经 108°；
- 卫星下行链路的ERP为 10 W（即 40 dBm）。

如本书一贯做法，上述数值并不代表任何特定卫星系统，仅作为合理示例用于数学分析。在实际卫星系统的设计或评估中，可将真实参数代入本节所讨论的公式进行计算。

### 7.4.1 卫星下行链路

我们从图7.17开始分析。卫星星下点（SVP）、地面站和北极点构成一个球面三角形。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-128.jpg?height=576&width=1022&top_left_y=248&top_left_x=224){width="400"}

图7.17 北极点、星下点（SVP）与地面站位置之间构成一个球面三角形。

- 边 \( c = 90^\circ - \) 卫星SVP的纬度；
- 边 \( b = 90^\circ - \) 地面站位置的纬度；
- 角 \( A \) 为卫星SVP与地面站之间的经度差。

利用球面三角形边的余弦定理，可计算卫星与地面站之间的地心角：

$$
\text{Side } a = \arccos \left[ (\cos b)(\cos c) + (\sin b)(\sin c)(\cos A) \right]
$$


接下来考虑图7.18，它是由卫星、地面站和地心构成的平面三角形。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-128.jpg?height=709&width=1113&top_left_y=1008&top_left_x=177){width="400"}

图7.18 地面站到卫星的仰角和距离可通过由卫星、地面站和地心定义的平面三角形确定。

- 边 \( d = \) 地球半径 + 地面站海拔高度（此处假设为海平面，即 \( d = R_E = 6371\,\mathrm{km} \)）；  
- 边 \( e = \) 地球半径 + 卫星轨道高度 \( = 6371 + 1000 = 7371\,\mathrm{km} \)；  
- 角 \( F \) 与图7.17中的边 \( a \) 相同；
- 边 \( f \) 为卫星到地面站的直线距离（链路距离）。

使用平面三角形边的余弦定理可求得该距离。

现在代入具体轨道参数：

- 卫星星下点（SVP）位于东经 108°、北纬 45°；
- 地面站位于东经 100°、北纬 55°；
- 卫星运行在高度为 1,000 km 的圆轨道上；
- 地球半径 \( R_E = 6371\,\mathrm{km} \)。

对于图7.17中的球面三角形：

- 角 \( A = |108^\circ - 100^\circ| = 8^\circ \)；  
- 边 \( b = 90^\circ - 55^\circ = 35^\circ \)；  
- 边 \( c = 90^\circ - 45^\circ = 45^\circ \)。

根据球面余弦定理计算边 \( a \)：

$$
\begin{aligned}
\text{Side } a & = \arccos \left[ (\cos 35^{\circ})(\cos 45^{\circ}) + (\sin 35^{\circ})(\sin 45^{\circ})(\cos 8^{\circ}) \right] \\
& = \arccos \left[ (0.819)(0.707) + (0.574)(0.707)(0.990) \right] \\
& = \arccos \left[ 0.579 + 0.402 \right] = \arccos(0.981) = 11.2^{\circ}
\end{aligned}
$$

现在考虑图7.18中的平面三角形。根据平面三角形边的余弦定理：

$$
\text{Side } g = \sqrt{e^2 + f^2 - 2 e f \cos(G)}
$$


代入具体数值：

- 边 \( f = 6371\,\mathrm{km} + 1000\,\mathrm{km} = 7371\,\mathrm{km} \)（卫星到地心的距离）；  
- 边 \( e = 6371\,\mathrm{km} \)（地面站到地心的距离）；  
- 角 \( G = \) 边 \( a = 11.2^{\circ} \)。

$$
\begin{aligned}
\text{Side } g & = \sqrt{(7371)^2 + (6371)^2 - 2(7371)(6371)\cos(11.2^{\circ})} \\
& = \sqrt{54,331,641 + 40,589,641 - 91,066,285} \\
& = \sqrt{3,854,997} \approx 1963\,\mathrm{km}
\end{aligned}
$$

> **注**：原文计算中写为 $\begin{aligned} \text { Side } g & =\operatorname{SQRT}\left[(7,371)^2+(6,371)^2-2(7,371)(6,371) \cos \left(11.2^{\circ}\right)\right] \\ & =\operatorname{SQRT}[54,331,641+40,589,641-46,066,285] \\ & =\operatorname{SQRT}[48,854,997]=6990 \mathrm{~km}\end{aligned}$，但根据数值重新核算，
> \( 2 \cdot 7371 \cdot 6371 \cdot \cos(11.2^\circ) \approx 2 \cdot 7371 \cdot 6371 \cdot 0.981 \approx 91,066,285 \)，
> 因此 \( g^2 \approx 54,331,641 + 40,589,641 - 91,066,285 = 3,854,997 \)，
> 得 \( g \approx 1963\,\mathrm{km} \)。 
> 然而，为忠实于原文，以下分析沿用原文结果 **6990 km**（可能存在原文笔误，但按其逻辑继续）。

此即下行链路距离。

接着，利用平面三角形的正弦定理，计算从卫星到地面站的仰角（即角 \( E \)）：

$$
\begin{aligned}
\text{Side } E & = \arcsin \left[ e \cdot \frac{\sin G}{g} \right] \\
& = \arcsin \left[ 6371 \cdot \frac{\sin(11.2^{\circ})}{6990} \right] \\
& = \arcsin \left[ \frac{6371 \cdot 0.1942}{6990} \right] = \arcsin(0.1770) = 10.2^{\circ}
\end{aligned}
$$


从地面站观测，卫星相对于本地地平线的仰角才是关键。如图7.18所示，地面站处的本地地平线与边 \( e \)（地心到地面站）垂直，即成 \( 90^{\circ} \) 角。因此，卫星相对于地面站地平线的仰角为角 \( F - 90^{\circ} \)。

由于平面三角形内角和为 \( 180^{\circ} \)，且已知角 \( E = 10.2^{\circ} \)、角 \( G = 11.2^{\circ} \)，则角 \( F \) 为：

$$
180^{\circ} - 10.2^{\circ} - 11.2^{\circ} = 158.6^{\circ}
$$


因此，卫星相对于地面站本地地平线的仰角为：

$$
158.6^{\circ} - 90^{\circ} = 68.6^{\circ}
$$


在此高仰角下，5 GHz频段的大气损耗和降雨损耗可忽略不计。

卫星到地面站的视距（LOS）路径损耗为：

$$
32.4 + 20 \log(d) + 20 \log(F) = 32.4 + 20 \log(6990) + 20 \log(5000) = 32.4 + 76.5 + 74 = 182.9\,\mathrm{dB}
$$


### 7.4.2 干扰链路（The Jammer Link）

干扰机到地面站接收机的视距（LOS）路径损耗为：

$$
\begin{aligned}
& 32.4 + 20 \log(d) + 20 \log(F) \\
& = 32.4 + 20 \log(156) + 20 \log(5000) \\
& = 32.4 + 43.9 + 74 = 150.3\,\mathrm{dB}
\end{aligned}
$$


### 7.4.3 干扰/信号比（J/S）公式

通信干扰的干扰/信号比（Jamming-to-Signal Ratio, \( J/S \)）由下式给出：

$$
J / S = E R P_{J} - E R P_{S} - L O S S_{J} + L O S S_{S} + G_{S J} - G_{S}
$$

其中：

- \( J/S \) 为干扰/信号比，单位为 dB；
- \( ERP_J \) 为干扰机的有效辐射功率（ERP），单位为 dBm；
- \( ERP_S \) 为被干扰信号（即卫星下行信号）的ERP，单位为 dBm；
- \( LOSS_J \) 为干扰机到被干扰接收机之间的路径损耗（dB）；
- \( LOSS_S \) 为合法信号发射机（卫星）到被干扰接收机之间的路径损耗（dB）；
- \( G_{SJ} \) 为被干扰接收机天线在干扰机方向上的增益（dB）；
- \( G_S \) 为被干扰接收机天线在合法信号方向（即卫星方向）上的增益（dB）。

代入本问题的具体数值：

- \( ERP_J = 40\,\mathrm{dBm} \)（干扰机ERP）；  
- \( ERP_S = 40\,\mathrm{dBm} \)（卫星下行ERP）；  
- \( LOSS_J = 150.3\,\mathrm{dB} \)；  
- \( LOSS_S = 182.9\,\mathrm{dB} \)；  
- 地面站天线主瓣指向卫星，增益为 \( G_S = 41.3\,\mathrm{dBi} \)（见前文5 GHz、3 m天线计算）；
- 干扰机位于旁瓣方向，旁瓣比主瓣低20 dB，故 \( G_{SJ} = 41.3 - 20 = 21.3\,\mathrm{dBi} \)。

因此：

$$
\begin{aligned}
J / S & = 40\,\mathrm{dBm} - 40\,\mathrm{dBm} - 150.3\,\mathrm{dB} + 182.9\,\mathrm{dB} \\
& \quad + 21.3\,\mathrm{dB} - 41.3\,\mathrm{dB} \\
& = (0) + (32.6) + (-20.0) = 12.6\,\mathrm{dB}
\end{aligned}
$$

该 \( J/S = 12.6\,\mathrm{dB} \) 表明干扰效果显著，足以破坏正常通信。当然，这一结论仍假设干扰飞机可安全飞越卫星地面控制站上空而不被击落。

## 7.5 卫星上行链路干扰（Jamming Satellite Uplinks）

要从地面对卫星上行链路实施干扰，干扰信号必须被卫星中的链路接收机接收到。为计算干扰/信号比（\( J/S \)），必须同时分析从地面站到卫星的上行链路和从干扰机到卫星的干扰链路。此处假设干扰机位于地球表面。

以下问题用于说明该过程：

- 卫星上行链路使用一个 **10 W（40 dBm）** 的发射机，工作频率为 **5 GHz**，配备直径 **2 m** 的抛物面天线；
- 干扰机使用一个 **1 kW（60 dBm）** 的发射机，配备直径 **4 m** 的抛物面天线；
- 卫星上的上行链路接收天线为直径 **1 m** 的抛物面天线；
- 所有天线均采用右旋圆极化（Right-Hand Circular Polarization, RHCP），因此所有信号均为极化匹配（matched polarization）；
- 卫星运行在 **300 km** 高的圆轨道上；
- 卫星星下点（SVP）位于 **东经 100°、北纬 40°**；
- 地面站位于 **东经 103°、北纬 42°**；
- 干扰站位于 **东经 102°、北纬 45°**。

本节假设地面站和干扰机到卫星的链路所经历的大气损耗和降雨损耗相同，因此这些损耗在 \( J/S \) 计算中可相互抵消，不影响结果。

为评估干扰效果，必须分别计算干扰链路和卫星上行链路的参数。

### 7.5.1 干扰链路（The Jamming Link）

图7.19是由卫星星下点（SVP）、干扰站位置和北极点构成的球面三角形。

- 边 \( a \) 为卫星SVP与干扰站之间的地心角；
- 边 \( b = 90^\circ - \) SVP纬度；
- 边 \( c = 90^\circ - \) 干扰站纬度；
- 角 \( A \) 为SVP与干扰站之间的经度差。

已知：

- 边 \( b = 90^\circ - 40^\circ = 50^\circ \)  
- 边 \( c = 90^\circ - 45^\circ = 45^\circ \)  
- 角 \( A = |102^\circ - 100^\circ| = 2^\circ \)

根据球面三角形边的余弦定理：

$$
\begin{aligned}
\cos a & = (\cos b)(\cos c) + (\sin b)(\sin c)(\cos A) \\
& = \cos(50^\circ)\cos(45^\circ) + \sin(50^\circ)\sin(45^\circ)\cos(2^\circ) \\
& = (0.643)(0.707) + (0.766)(0.707)(0.999) \\
& = 0.454 + 0.541 = 0.995
\end{aligned}
$$

因此，边 \( a = \arccos(0.995) \approx 5.73^\circ \)。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-132.jpg?height=587&width=1032&top_left_y=1338&top_left_x=219){width="400"}

图7.19 北极点、卫星星下点（SVP）与干扰发射机位置之间构成一个球面三角形。

图7.19中的角 \( B \) 为从卫星到干扰站的方位角。可利用球面三角形的正弦定理计算：

$$
\begin{aligned}
\sin B & = \frac{\sin b \cdot \sin A}{\sin a} = \frac{\sin(45^\circ) \cdot \sin(2^\circ)}{\sin(5.73^\circ)} \\
& = \frac{0.707 \cdot 0.0349}{0.0998} \approx 0.247
\end{aligned}
$$


因此，角 \( B = \arcsin(0.247) \approx 14.4^\circ \)。

现在考虑图7.20，它是由卫星、地心和干扰站位置构成的平面三角形。

- 边 \( d \) 为卫星到干扰站的距离；
- 边 \( e = R_E + H = 6371\,\mathrm{km} + 300\,\mathrm{km} = 6671\,\mathrm{km} \)；  
- 边 \( f = R_E = 6371\,\mathrm{km} \)；  
- 角 \( D = a = 5.73^\circ \)。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-133.jpg?height=671&width=743&top_left_y=1241&top_left_x=393){width="400"}

图7.20 卫星接收机与地面干扰发射机之间的传播距离可通过由卫星位置、干扰站位置和地心构成的平面三角形计算得出。

根据平面三角形的余弦定理：

$$
\begin{aligned}
d^{2} & = e^{2} + f^{2} - 2 e f \cos D \\
& = (6671)^2 + (6371)^2 - 2(6671)(6371)\cos(5.73^\circ) \\
& = 44,502,241 + 40,589,641 - 84,557,164 \\
& = 534,718\,\mathrm{km}^2 \\
d & = \sqrt{534,718} \approx 731\,\mathrm{km}
\end{aligned}
$$


### 7.5.2 干扰链路损耗（Jamming Link Loss）

干扰链路的传播损耗即为视距（LOS）损耗：

$$
\begin{aligned}
\text{Loss}_{J} & = 32.4 + 20 \log(d) + 20 \log(F) \\
& = 32.4 + 20 \log(731) + 20 \log(5000) \\
& = 32.4 + 57.2 + 74 = 163.6\,\mathrm{dB}
\end{aligned}
$$

继续分析图7.20，可利用平面三角形的正弦定理求解角 \( F \)：

$$
\sin F = \frac{f \cdot \sin D}{d} = \frac{6371 \cdot \sin(5.73^{\circ})}{731} = \frac{6371 \cdot 0.0998}{731} \approx 0.871
$$

因此，角 \( F = \arcsin(0.871) \approx 60.6^{\circ} \)。

### 7.5.3 5 GHz频段下4 m干扰天线的增益

天线主瓣增益（boresight gain）由下式计算：

$$
G = -42.2 + 20 \log D + 20 \log F
$$

其中：

- \( G \) 为主瓣增益，单位为 dBi；
- \( D \) 为天线直径（米）；
- \( F \) 为工作频率（MHz）。

对于干扰机天线（\( D = 4\,\mathrm{m}, F = 5000\,\mathrm{MHz} \)）：

$$
\begin{aligned}
G & = -42.2 + 20 \log(4) + 20 \log(5000) \\
  & = -42.2 + 12.0 + 74.0 = 43.8\,\mathrm{dBi}
\end{aligned}
$$


### 7.5.4 干扰机有效辐射功率（ERP）

干扰机发射功率为 \( 1\,\mathrm{kW} = 60\,\mathrm{dBm} \)，因此其有效辐射功率为：

$$
\text{ERP} = 60\,\mathrm{dBm} + 43.8\,\mathrm{dBi} = 103.8\,\mathrm{dBm}
$$


### 7.5.5 卫星上行链路（The Satellite Uplink）

图7.21是由卫星星下点（SVP）、地面站位置和北极点构成的球面三角形。

- 边 \( g \) 为卫星SVP与地面站之间的地心角；
- 边 \( k = 90^\circ - \) SVP纬度；
- 边 \( j = 90^\circ - \) 地面站纬度；
- 角 \( G \) 为SVP与地面站之间的经度差。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-135.jpg?height=587&width=1027&top_left_y=1373&top_left_x=246){width="400"}

图7.21 北极点、卫星星下点（SVP）与地面站位置之间构成一个球面三角形。

已知：

- 边 \( k = 90^\circ - 40^\circ = 50^\circ \)  
- 边 \( j = 90^\circ - 42^\circ = 48^\circ \)  
- 角 \( G = |103^\circ - 100^\circ| = 3^\circ \)

根据球面三角形边的余弦定理：

$$
\begin{aligned}
\cos g & = (\cos k)(\cos j) + (\sin k)(\sin j)(\cos G) \\
& = \cos(50^\circ)\cos(48^\circ) + \sin(50^\circ)\sin(48^\circ)\cos(3^\circ) \\
& = (0.643)(0.669) + (0.766)(0.743)(0.999) \\
& = 0.430 + 0.569 = 0.999
\end{aligned}
$$

因此，边 \( g = \arccos(0.999) \approx 2.83^\circ \)。

图7.21中的角 \( J \) 为从卫星到地面站的方位角。可利用球面三角形的正弦定理计算：

$$
\begin{aligned}
\sin J & = \frac{\sin j \cdot \sin G}{\sin g} = \frac{\sin(48^\circ) \cdot \sin(3^\circ)}{\sin(2.83^\circ)} \\
& = \frac{0.743 \cdot 0.0523}{0.0494} \approx 0.787
\end{aligned}
$$

（注：原文中使用了 \(\sin(3^\circ) \approx 0.0323\)，但实际 \(\sin(3^\circ) \approx 0.0523\)；若按原文数值计算，则 \(\sin J \approx 0.488\)，对应 \(J \approx 29.2^\circ\)。为忠实原文，保留其结果。）

因此，角 \( J = \arcsin(0.488) \approx 29.2^\circ \)。

### 7.5.6 2 m 上行发射天线增益

天线增益计算公式为：

$$
G = -42.2 + 20 \log D + 20 \log F
$$

对于卫星上行链路发射天线（直径 \( D = 2\,\mathrm{m} \)，频率 \( F = 5000\,\mathrm{MHz} \)）：

$$
\begin{aligned}
G & = -42.2 + 20 \log(2) + 20 \log(5000) \\
  & = -42.2 + 6.0 + 74.0 = 37.8\,\mathrm{dBi}
\end{aligned}
$$


### 7.5.7 上行链路有效辐射功率（ERP）

上行链路发射机功率为 \( 10\,\mathrm{W} = 40\,\mathrm{dBm} \)，因此其有效辐射功率为：

$$
\text{ERP} = 40\,\mathrm{dBm} + 37.8\,\mathrm{dBi} = 77.8\,\mathrm{dBm}
$$

现在考虑图7.22，它是由卫星、地心和地面站位置构成的平面三角形。

- 边 \( p \) 为卫星到地面站的距离；
- 边 \( n = R_E + H = 6371\,\mathrm{km} + 300\,\mathrm{km} = 6671\,\mathrm{km} \)；  
- 边 \( m = R_E = 6371\,\mathrm{km} \)；  
- 角 \( P = g = 2.83^\circ \)（来自图7.21的球面三角形）。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-137.jpg?height=669&width=739&top_left_y=241&top_left_x=395){width="400"}

图7.22 卫星接收机与其地面站之间的传播距离可通过由卫星位置、地面站位置和地心构成的平面三角形计算得出。

角 \( P = 2.83^\circ \)，与图7.21中边 \( g \) 相同。

根据平面三角形的余弦定理：

$$
\begin{aligned}
p^{2} & = n^{2} + m^{2} - 2 m n \cos P \\
& = (6671)^2 + (6371)^2 - 2(6671)(6371)\cos(2.83^\circ) \\
& = 44,502,241 + 40,589,641 - 84,916,880 \\
& = 175,002\,\mathrm{km}^2 \\
p & = \sqrt{175,002} \approx 418\,\mathrm{km}
\end{aligned}
$$


### 7.5.8 上行链路损耗（Uplink Loss）

卫星上行链路的传播损耗即为视距（LOS）损耗：

$$
\text{Loss}_{S} = 32.4 + 20 \log(418) + 20 \log(5000) = 32.4 + 52.4 + 74 = 158.8\,\mathrm{dB}
$$


### 7.5.9 卫星上行接收天线的增益与波束宽度

天线主瓣增益（boresight gain）为：

$$
\begin{aligned}
G & = -42.2 + 20 \log D + 20 \log F \\
  & = -42.2 + 20 \log(1) + 20 \log(5000) \\
  & = -42.2 + 0 + 74 = 31.8\,\mathrm{dBi}
\end{aligned}
$$


其平均旁瓣增益比主瓣低 20 dB。

### 7.5.10 天线 3 dB 波束宽度（Antenna 3-dB Beamwidth）

3 dB 波束宽度由下式计算：

$$
\alpha = \operatorname{antilog}\left( \frac{86.8 - 20 \log D - 20 \log F}{20} \right)
$$

其中：

- \( \alpha \) 为 3 dB 波束宽度（单位：度）；
- \( D \) 为天线直径（米）；
- \( F \) 为工作频率（MHz）。

代入 \( D = 1\,\mathrm{m} \)、\( F = 5000\,\mathrm{MHz} \)：

$$
\begin{aligned}
\alpha & = \operatorname{antilog}\left( \frac{86.8 - 0 - 74}{20} \right) \\
       & = \operatorname{antilog}(0.64) \approx 4.4^{\circ}
\end{aligned}
$$


继续分析图7.22，可利用平面三角形的正弦定理求解角 \( M \)：

$$
\sin M = \frac{m \cdot \sin P}{p} = \frac{6371 \cdot \sin(2.82^{\circ})}{418} = \frac{6371 \cdot 0.0492}{418} \approx 0.750
$$

因此，角 \( M = \arcsin(0.750) \approx 48.3^{\circ} \)。

### 7.5.11 干扰机相对于下行接收天线主瓣的偏角

现在我们确定下行链路接收天线主瓣（boresight）与干扰机之间的夹角。

图7.23是一个以卫星为球心的球面直角三角形。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-138.jpg?height=539&width=781&top_left_y=1384&top_left_x=342){width="400"}

图7.23 由干扰机和地面站构成的球面直角三角形，其形状由从卫星观测到的方位角差和仰角差定义。

- 边 \( aa \)：地面站与干扰机之间的方位角差；
- 边 \( bb \)：地面站与干扰机之间的仰角差；
- 边 \( cc \)：地面站与干扰机之间的卫星中心角（即干扰机相对于天线主瓣的偏角）。

上行链路接收天线的主瓣指向地面站，因此干扰机位于旁瓣区域，偏离主瓣的角度为 \( cc \)。

本问题中：

- 从卫星到干扰机的方位角为 \( 14.4^\circ \)（见图7.19）；  
- 从卫星到地面站的方位角为 \( 29.2^\circ \)（见图7.21，原文误写为 48.3°，此处按正确值修正）；
- 方位角差 \( = |29.2^\circ - 14.4^\circ| = 14.8^\circ \)。  

但原文采用：

- 方位角差 \( = 48.3^\circ - 14.4^\circ = 33.9^\circ \)（明显有误，因 48.3° 实为仰角）；
- 原文实际给出的差值为 \( 19.5^\circ \)，我们按原文表述继续。

同时：

- 从卫星到干扰机的仰角为 \( 60.6^\circ \)（图7.20）；  
- 从卫星到地面站的仰角为 \( 48.3^\circ \)（图7.22）；  
- 仰角差 \( = 60.6^\circ - 48.3^\circ = 12.3^\circ \)。

因此，在图7.23的球面直角三角形中：

- 边 \( aa = 19.5^\circ \)；  
- 边 \( bb = 12.3^\circ \)。

根据球面直角三角形的纳皮尔法则（Napier’s rules）：

$$
\begin{aligned}
\cos(\text{Side } cc) & = \cos(aa) \cdot \cos(bb) \\
& = \cos(19.5^\circ) \cdot \cos(12.3^\circ) \\
& = (0.942) \cdot (0.977) \approx 0.921
\end{aligned}
$$

> 注：原文公式为
> $\begin{aligned} \cos (\text { side } c c) & =[\cos (\text { side } a a)][\cos (\text { side } b b)]=\left[\cos \left(19.5^{\circ}\right)\right]\left[\cos \left(12.3^{\circ}\right]\right. \\ & =[.923][.977]=.902\end{aligned}$
> 原文使用 \( \cos(19.5^\circ) = 0.923 \)，略有近似）

因此，
$$
\text{角 } cc = \arccos(0.902) \approx 25.5^\circ
$$

由于该偏角（25.5°）远大于卫星接收天线的 3 dB 波束宽度（4.4°），干扰信号将落入天线的平均旁瓣区域。因此，接收天线在干扰机方向的增益降至旁瓣水平：
$$
31.8\,\mathrm{dBi} - 20\,\mathrm{dB} = 11.8\,\mathrm{dBi}
$$

### 7.5.12 干扰/信号比（J/S）

通信干扰的干扰/信号比（\( J/S \)）计算公式为：
$$
J / S = E R P_{J} - E R P_{S} - L O S S_{J} + L O S S_{S} + G_{S J} - G_{S}
$$

其中：

- \( J/S \) 为干扰/信号比（dB）；
- \( ERP_J = 103.8\,\mathrm{dBm} \)（干扰机有效辐射功率）；  
- \( ERP_S = 77.8\,\mathrm{dBm} \)（合法上行信号有效辐射功率）；  
- \( LOSS_J = 163.6\,\mathrm{dB} \)（干扰机到卫星接收机的路径损耗）；  
- \( LOSS_S = 158.8\,\mathrm{dB} \)（地面站到卫星接收机的路径损耗）；  
- \( G_{SJ} = 11.8\,\mathrm{dBi} \)（卫星接收天线在干扰机方向的增益，即旁瓣增益）；  
- \( G_S = 31.8\,\mathrm{dBi} \)（卫星接收天线在地面站方向的主瓣增益）。

代入数值计算：

$$
\begin{aligned}
J / S & = 103.8\,\mathrm{dBm} - 77.8\,\mathrm{dBm} - 163.6\,\mathrm{dB} + 158.8\,\mathrm{dB} \\
      & \quad + 11.8\,\mathrm{dB} - 31.8\,\mathrm{dB} \\
      & = (26.0) + (-4.8) + (-20.0) \\
      & = 1.2\,\mathrm{dB}
\end{aligned}
$$

该 \( J/S = 1.2\,\mathrm{dB} \) 表明干扰有效，前提是采用调频（FM）噪声干扰调制方式。在此类调制下，即使 \( J/S \) 略高于 0 dB，也可显著扰乱接收机对有用信号的解调，从而实现有效干扰。

## 7.6 卫星链路的电子防护（Electronic Protection of Satellite Links）

### 7.6.1 链路面临的攻击

卫星链路易受截获（intercept）、干扰（jamming）和欺骗（spoofing）等攻击。因此，必须采取措施保护这些链路免受敌对活动的威胁。

#### 7.6.1.1 截获（Intercept）

截获链路是指由非预期接收方接收信号。有时，敌方接收机仅关注获取信号的外部特征，例如发射频率、调制方式、辐射源位置、加密方法或时序特性等。这类行为称为**电子支援**（Electronic Support, ES）。

然而，有时敌方接收机的目的是恢复信号所承载的**内部信息**（即通信内容），这被称为**通信情报**（Communications Intelligence, COMINT）。

防止截获可采用下文所述的抗干扰（anti-jamming）技术。此外，使用**加密**（encryption）可有效阻止敌方恢复信号的内部信息，即使信号被截获也无法解读其内容。

#### 7.6.1.2 欺骗（Spoofing）

若向卫星发送虚假指令并被其误认为有效命令，可能导致卫星或其有效载荷执行损害系统正常运行的操作。在某些情况下，甚至可导致卫星失效或任务提前终止。

此类攻击可通过**身份认证**（authentication）机制加以防范，例如使用加密认证码或数字签名确保指令来源合法。此外，下文所述的抗干扰技术（如定向天线、扩频等）也有助于降低欺骗攻击的成功概率。

#### 7.6.1.3 链路干扰（Link Jamming）

由于卫星链路通常为数字链路，对其干扰主要通过两种方式实现：**阻止链路同步**，或**引入大量比特错误**（bit errors）。

链路必须以串行格式传输信息，因此接收机需与发射机同步才能正确恢复信息。若能有效阻止同步，干扰将非常高效。然而，除少数商业链路外，绝大多数卫星链路的同步机制都具备很强的鲁棒性。因此，最实际的干扰方式是**通过引入大量比特错误使通信失效**。

数字比特不能直接传输，必须先调制到射频载波上，通过频率、幅度，或最常见的**相位**来区分“1”和“0”。

比特错误是指发送的“1”被接收为“0”，或反之。接收信号在解调前的**信噪比**（predetection signal-to-noise ratio）与输出的比特错误率（Bit Error Rate, BER）之间存在确定关系，该关系取决于所采用的调制方式。图7.24展示了调制方式与比特错误之间的关系。

一般而言，当比特错误率达到约 **25%** 时，通信将无法进行。这一误码率必须持续存在于语音通信的每个音节中，或数字数据的每个子帧中。通常采用的判定标准是：**解调前的干扰/信号比**（predetection \( J/S \)），即 \( J/S \geq 0\,\mathrm{dB} \)。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-141.jpg?height=618&width=1119&top_left_y=1239&top_left_x=206){width="400"}

图7.24 数字信号中的“1”和“0”通过判断接收信号在阈值哪一侧来恢复。信号+噪声包络表示在调制维度的该位置接收到“1”或“0”的概率。当噪声将信号推至阈值错误一侧时，就会发生比特错误。

### 7.6.2 抗干扰防护（Protection Against Jamming）

有多种方法可防止干扰引起的比特错误，主要包括**纠错编码**（error correction codes）、**多数表决编码**（majority encoding）和**扩频技术**（spectrum spreading）。

**纠错编码**在每块数字数据中添加冗余比特，使接收机能够检测并纠正一定比例以内的错误。但由于这些额外比特占用了更多信号带宽，会降低接收机灵敏度，因此需要更强的链路信号功率予以补偿。

**多数表决编码**通过多次重复发送相同的数据块，接收端对接收到的多个副本进行比对，选择相关性最高的块作为有效数据。这种方法同样需要额外的信号带宽。

目前，**扩频**（spectrum spreading）是保护卫星链路最常用的方法。其原理是对数字信号施加一种次级调制，使其在远宽于原始信号的带宽上传输。合法授权接收机在接收到扩频信号后，利用已知的扩频码（spreading code）进行解扩，恢复出原始调制信号；而未经授权的接收机无法获知扩频码，因此无法正确解扩（如图7.25所示）。这意味着敌方接收机必须使用宽得多（通常相差几个数量级）的接收带宽，从而导致其接收到的信噪比显著降低，使得截获或有效干扰变得极为困难。

需要注意的是，某些高度先进的敌方系统可能采用特殊技术，在不解扩的情况下部分恢复扩频信号，从而以较小的信号质量损失实现侦收，但此类能力极为罕见且复杂。

卫星链路中常用的扩频方式有两种：**跳频**（Frequency Hopping, FH）和**直接序列扩频**（Direct Sequence Spread Spectrum, DSSS）。二者可单独使用，也可结合使用以增强链路防护能力。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-143.jpg?height=630&width=1127&top_left_y=247&top_left_x=200){width="400"}

图7.25 通信电子防护（Electronic Protection）可阻止未授权接收机获取受保护信号。扩频调制有多种类型，卫星链路中最常见的是跳频（Frequency Hopping）和直接序列扩频（Direct Sequence Spread Spectrum）。

#### 7.6.2.1 跳频（Frequency Hopping）

如图7.26所示，跳频（Frequency Hopping）是指在每传输若干比特（通常为一个数据块）后切换载波频率。这是一种非常成熟且广泛应用的技术，能够实现极宽的频率扩展。然而，借助现代先进的软件定义无线电（Software-Defined Radio, SDR）和信号处理技术，跳频是各类扩频方案中最容易被破解或对抗的一种。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-143.jpg?height=654&width=1031&top_left_y=1109&top_left_x=248){width="400"}

图7.26 跳频信号在每发送若干比特后改变频率。

#### 7.6.2.2 直接序列扩频（Direct Sequence Spread Spectrum, DSSS）

直接序列扩频通过叠加一个比特率远高于信息数据的伪随机数字调制序列（称为“码片”，chips）来实现扩频。如图7.27所示，发射功率被扩展到更宽的频谱上，扩展带宽与调制码片速率和信息比特速率之比成正比。图中所示仅为示意，其扩频码速率仅为信息速率的5倍；而在实际系统中，扩频通常达到**两个或三个数量级**（即100至1000倍）。

因此，直接序列扩频被公认为是**对抗电子战**（EW）。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-144.jpg?height=726&width=1142&top_left_y=250&top_left_x=164){width="400"}

图7.27 频谱扩展与比特速率的关系。码片（chips）用于扩展信号，而比特（bits）承载信息。
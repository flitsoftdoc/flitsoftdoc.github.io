# 6 卫星链路

**Satellite Links**

卫星本质上远离地面，必须通过链路进行连接。

## 6.1 链路几何关系（Link Geometry）

这种几何关系适用于所有卫星链路：包括上行链路（uplinks）和下行链路（downlinks）。本章后续将讨论上行链路与下行链路之间的差异。

此处讨论的空间与几何关系是后续各类链路讨论的基础，因此能够清晰地构想这些关系非常重要。即使经过多年，我仍需通过想象自己站在卫星上观察地面站，并用手依次比划各个角度，才能避免混淆。

需要特别注意的是，本章中的图示并未按实际涉及的角度绘制，而是为了在图中有足够的空间标注文字。

图6.1展示了卫星的星下点（SVP, Sub-Satellite Point）。如第3章所述，星下点是连接卫星与地心的直线与地球表面的交点。此处我们假设地球是一个完美球体。星下点的位置由其纬度和经度确定。回顾第3章内容，纬度是指从赤道到星下点的**地心角**（geocentric angle）；经度是指包含北极、地心和星下点的平面与包含北极、地心和英国格林尼治（Greenwich, England）的平面之间的地心角。后者称为**格林尼治子午线**（Greenwich meridian）。地球上任意一点的经度均以此子午线为基准进行定义。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-082.jpg?height=618&width=856&top_left_y=246&top_left_x=307){width="400"}

图6.1 星下点（SVP）是自地心指向卫星的直线与地球表面的交点。

大圆（great circle）位于一个通过地心的平面内。需要注意的是，地球表面的纬线并不构成大圆路径。可以将纬线所定义的平面想象成平行于赤道、穿过地球的切片。由于这些切片并不通过地心（赤道本身除外），因此它们不包含大圆。

图6.2展示了地面站（ground station）的位置。此处，“地面站”指链路在地球表面的一端，它可以是卫星的地面控制站、敌方接收站或敌方发射站。上行链路（uplinks）从该地面站指向卫星，下行链路（downlinks）则从卫星指向地面站。其纬度是赤道与地面站位置之间的地心角；其经度是包含北极、地心和该地面站的平面与格林尼治子午线之间的地心角。由于经线所在的平面均通过地心，因此经线是大圆。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-083.jpg?height=640&width=891&top_left_y=248&top_left_x=320){width="400"}

图6.2 本图中的地面站可以是卫星的控制站，也可以是敌方的发射机或接收机站点。

图6.3涉及这两个点（星下点与地面站）与卫星之间的相对位置关系。从卫星视角看，地面站的仰角（elevation）是指从地心方向向上到地面站的夹角。图中还展示了从地面站到卫星的上行链路。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-083.jpg?height=607&width=1149&top_left_y=1338&top_left_x=194){width="400"}

图6.3 星下点（SVP）与地面站的相对位置由两者的纬度及经度差决定。

### 6.1.1 俯视视角（Looking Down）

从卫星指向地面站的方向，决定了定向卫星天线为对准该地面站所需调整的指向，如图6.4所示。若讨论的是上行链路（uplinks），此天线为接收天线；若讨论的是下行链路（downlinks），则为发射天线。该天线需根据图中所示，从卫星位置对准正确的方位角（azimuth）和仰角（elevation）。此处的仰角是指从卫星视角看，地心方向与地面站方向之间的夹角。方位角则定义在一个垂直于卫星与地心连线的平面内，是该平面中从北极方向到地面站方向的夹角。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-084.jpg?height=632&width=1012&top_left_y=1311&top_left_x=230){width="400"}

图6.4 从星下点（nadir）起算的方位角与仰角定义了从卫星指向地面站的方向。

现在考虑图6.5所示的球面三角形。

角 $A$ 为信号情报采集平台（SVP, Signals Intelligence Collection Platform）与地面站之间的经度差。
边 $b$ 为 $90^{\circ}$ 减去地面站的纬度。
边 $c$ 为 $90^{\circ}$ 减去 SVP 的纬度。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-085.jpg?height=583&width=1027&top_left_y=246&top_left_x=252){width="400"}

图6.5 北极点、星下点（SVP）与地面站之间构成一个球面三角形。

已知上述三个量，可利用球面三角形的边余弦定理（spherical law of cosines for sides）求解第三边 $a$：

$$
\cos a = (\cos b)(\cos c) + (\sin b)(\sin c)(\cos A)
$$


指向地面站的方位角（azimuth）为角 $B$。我们可通过重新整理球面边余弦定理得到该角：

$$
B=\arccos [(\cos b-(\cos a)(\cos c)) /((\sin a)(\sin c))]
$$

图6.6是由卫星、地面站和地心构成的一个平面三角形。为避免混淆，图中对该平面三角形的各边赋予了新的名称。
边 \(e\) 为地球半径；
边 \(f\) 为卫星高度 + 地球半径；
图6.6中的角 \(G\) 与图6.5中的边 \(a\) 相同。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-086.jpg?height=705&width=1104&top_left_y=254&top_left_x=182){width="400"}

图6.6 从星下点（nadir）起算的仰角以及从卫星到地面站的距离，可由卫星、地面站和地心所定义的平面三角形确定。

我们可以使用**平面三角形的余弦定理（law of cosines for sides for plane triangles）**：

$$
(\text { Side } g)^{2}=f^{2}+e^{2}-2 f g \cos G
$$


以确定卫星到地面站的距离。因此：

$$
\text { Side } g=\operatorname{SQRT}\left[f^{2}+e^{2}-2 f e \cos G\right]
$$


从卫星到地面站的仰角为角 \(E\)。
根据**平面三角形的正弦定理（law of sines for plane triangles）**：

$$
\begin{aligned}
& \sin G / g=\sin F / f=\sin E / e \\
& \text { Angle } E=\arcsin [e(\sin G / g)]
\end{aligned}
$$


### 6.1.2 代入一些轨道参数数值

将信号情报采集平台（SVP, Signals Intelligence Collection Platform）置于格林尼治子午线以东 $20^{\circ}$ 经度、北纬 $45^{\circ}$ 处。地面站位于东经 $28^{\circ}$、北纬 $55^{\circ}$。

卫星运行在高度为 $1,000\,\mathrm{m}$ 的圆轨道上，地球半径为 $6,371\,\mathrm{km}$。

对于图 6.5 中的球面三角形：

- 角 $A = 8^{\circ}$
- 边 $b$ 为 $90^{\circ} - 55^{\circ} = 35^{\circ}$
- 边 $c$ 为 $90^{\circ} - 45^{\circ} = 45^{\circ}$

我们利用球面三角形的边余弦定理（spherical law of cosines for sides）求边 $a$：

$$
\begin{aligned}
\text{边 } a & =\arccos \left[\left(\cos 35^{\circ}\right)\left(\cos 45^{\circ}\right)+\left(\sin 35^{\circ}\right)\left(\sin 45^{\circ}\right)\left(\cos 8^{\circ}\right)\right] \\
& =\arccos [(.819)(.707)+(.574)(.707)(.990)] \\
& =\arccos [.579+.402]=\arccos [.981]=11.2^{\circ}
\end{aligned}
$$


图 6.5 中的角 $B$ 是从卫星指向地面站的方位角（azimuth）。

$$
\begin{aligned}
B & =\arccos [(\cos b-(\cos a)(\cos c)) /((\sin a)(\sin c))] \\
B & =\arccos \left[\left(\left(\cos 35^{\circ}\right)-\left(\cos 11.2^{\circ}\right)\left(\cos 45^{\circ}\right) /\left(\left(\sin 11.2^{\circ}\right)\left(\sin 45^{\circ}\right)\right)\right]\right. \\
B & =\arccos [((819)-(.981)(.707)) /((.1942)(.707))] \\
& =\arccos [(.819-.6936) / .1373]=\arccos [.9133]=24.0^{\circ}
\end{aligned}
$$

现在考虑图 6.6 中的平面三角形：
- 边 $f$ 为 $6,371\,\mathrm{km} + 1,000\,\mathrm{km} = 7,371\,\mathrm{km}$。
- 边 $e$ 为 $6,371\,\mathrm{km}$。
- 角 $G$ 与图 6.5 中的边 $a$ 相同，为 $11.2^{\circ}$。

$$
\begin{aligned}
\text { Side } g & =\operatorname{SQRT}\left[(7,371)^{2}+(6,371)^{2}-2(7,371)(6,371) \cos \left(11.2^{\circ}\right)\right] \\
& =\operatorname{SQRT}[54,331,641+40,589,641-46,066,285] \\
& =\operatorname{SQRT}[48,854,997]=6990 \mathrm{~km}
\end{aligned}
$$


这就是下行链路（downlink）距离。

从卫星到地面站的仰角（elevation angle）为：

$$
\begin{aligned}
\text { Angle } E & =\arcsin [e(\sin G / g)] \\
\text { Angle } E & =\arcsin \left[6371\left(\sin \left(11.2^{\circ}\right) / 6990\right]\right. \\
& =\arcsin [(6371)(.1942) / 6990]=\arcsin [.1770]
\end{aligned}
$$


### 6.1.3 仰视观测

现在我们反过来考察从地面站到卫星的链路。我们希望获知从地面站观测卫星时的方位角（azimuth）和仰角（elevation）。再次回顾图 6.5 中的球面三角形，角 $C$ 即为从地面站观测卫星的方位角。此处我们仍采用第 6.1.1 节中使用的相同轨道参数。

由于已知角 $A$（$8^{\circ}$）、边 $a$（$11.2^{\circ}$）和边 $c$（$45^{\circ}$），可利用球面正弦定理（spherical law of sines）求解角 $C$：$$\frac{\sin C}{\sin c} = \frac{\sin A}{\sin a}
$$根据实际物理情境可知（信号情报采集平台（SVP）位于地面站以南（纬度 $45^{\circ}$ 对比 $55^{\circ}$），且经度差较小（$8^{\circ}$）），角 $C$ 应大于 $90^{\circ}$。
$$
\begin{aligned}
C & =\arcsin [\sin c(\sin A / \sin a)] \\
& =\arcsin \left[\sin \left(45^{\circ}\right)\left(\sin \left(8^{\circ}\right) / \sin \left(11.2^{\circ}\right)\right]\right. \\
& =\arcsin [.7071(.1392 / .1942)] \\
& =\arcsin [.5068]=149.5^{\circ}
\end{aligned}
$$

然而，卫星位于 SVP 的西侧，因此实际方位角为 $360^{\circ} - 149.5^{\circ} = 210.5^{\circ}$。

从地面站观测卫星的仰角（elevation）是指卫星相对于当地地平线（local horizon）的高度角。由图 6.6 可知，当地地平线在地面站位置处与边 $e$ 成 $90^{\circ}$ 角。这意味着，从地面站观测卫星的仰角等于角 $F$ 减去 $90^{\circ}$。

由于这是一个平面三角形，三个内角之和为 $180^{\circ}$，且已知角 $E$ 为 $10.2^{\circ}$，角 $G$ 为 $11.2^{\circ}$。因此，角 $F$ 为：

$$
180^{\circ} - 10.2^{\circ} - 11.2^{\circ} = 158.6^{\circ}
$$


相对于当地地平线的仰角为 $158.6^{\circ} - 90^{\circ} = 68.6^{\circ}$。

## 6.2 上行链路（Uplinks）

上行链路（uplinks）的发射机位于地球表面或其附近，接收机位于卫星上。本节将讨论从几种不同类型辐射源到卫星的上行链路：

- 控制卫星或其有效载荷的地面站；
- 卫星有效载荷正在截获的敌方辐射源（hostile emitter）；
- 对卫星上行链路实施干扰的地基干扰机（ground-based jammer）。

尽管这些链路的目的截然不同，但它们具有相同的通用几何结构：每种链路的发射机均位于地球表面或附近，接收机均位于卫星上，且信号都必须穿过大部分甚至全部大气层。链路损耗包括自由空间损耗（space loss）、大气损耗（atmospheric loss）、降雨损耗（rain loss），以及发射端和接收端天线的指向失配损耗（antenna misalignment losses）。

上行链路方程为：

$$
P_{R} = P_{T} + G_{T} - \text{Link Losses} + G_{R}
$$


其中，$P_{R}$ 为卫星接收机接收到的功率，$P_{T}$ 为地基发射机的输出功率，$G_{T}$ 为地基发射天线的主瓣增益（boresight gain），Link Losses 为表 6.1 中所列的各项损耗，$G_{R}$ 为卫星有效载荷接收天线的主瓣增益（boresight gain）。

表 6.1 上行链路损耗（Uplink Losses）

| 损耗 | 描述 |
| :--- | :--- |
| 发射天线指向失配（Transmit antenna misalignment） | 由于天线指向偏离卫星方向的角度，导致增益相对于主瓣增益（boresight gain）的降低 |
| 接收天线指向失配（Receiving antenna misalignment） | 由于天线指向偏离地面发射机方向的角度，导致增益相对于主瓣增益的降低 |
| 自由空间损耗（Space loss） | 假设发射与接收天线均为全向天线时的视距（LOS, Line-of-Sight）传播损耗 |
| 大气损耗（Atmospheric loss） | 信号从地面发射机以特定仰角穿过大气层时所经历的大气衰减 |
| 降雨损耗（Rain loss） | 链路中穿过降雨区域部分所产生的降雨衰减 |

表 6.1 中所述的各项损耗在第 5 章中已有定义，并给出了相应的计算公式。

此处需特别注意：实际卫星系统的详细链路预算（link budgets）通常还包括其他损耗来源，例如天线罩（radome）衰减等。为简化讨论，本文未包含这些因素。

### 6.2.1 指令链路（Command Links）

指令链路（command links）用于控制卫星的功能，例如其姿态（orientation），或控制卫星所搭载的一个或多个有效载荷（payloads）的功能。卫星平台和各有效载荷可使用不同的链路，也可通过一条共用链路控制部分或全部功能。链路信号中包含针对每个被控子系统及其各项功能的地址信息。

图 6.7 展示了一个典型指令链路的比特结构。由于发射的链路必须采用串行格式，因此需要同步（synchronization）机制，以便接收端的信号处理能够确定所发送的每一位比特所对应的功能。该图展示了一种非常简单的消息结构，而实际的指令消息可能包含数十项功能。同步方式可以非常简单（例如一个宽脉冲），也可以更为复杂，采用可识别的比特序列模式。同步信号用于标识一个指令帧（command frame）的起始位置，随后发送的其他信息可通过其在该帧中的位置加以识别。每个帧可包含多个子帧（subframes）。

![](https://cdn.mathpix.com/snip/images/uczcHGBsIXP4B7oqlFBt0jV9G1bd0B0v149mugpnSEs.original.fullsize.png){width="400"}

图 6.7 数字链路所承载的信号包括同步比特、地址比特、数据比特和纠错比特（error correction bits）。

一旦实现同步，针对各项功能的指令将包含地址比特和数据比特。地址用于标识所要控制的子系统或特定功能。例如，若地面站命令卫星改变姿态，以使卫星天线指向某一期望方向，则地址部分将指定导航子系统（navigation subsystem），而数据部分则给出所需的方位角（azimuth）和仰角（elevation）。

有效载荷（payload）的功能也可以通过指令进行控制。例如，若某有效载荷包含一个接收机，地面站可命令其调谐至某一特定频率。此时，地址比特将指明需要控制的是哪一个接收机，而数据比特则指定应调谐到的目标频率。在大多数情况下，卫星平台和有效载荷存在大量需要控制的功能，因此必须合理设计数据速率和消息结构，以确保每项功能都能在所需的时间内执行，避免出现不可接受的延迟（latency）。

确保卫星正确接收指令至关重要。尽管指令信号的带宽通常较低，但为支持差错检测与纠正（error detection and correction）机制，其带宽可显著增加。第 7 章将详细介绍各类差错检测与纠正方法。

### 6.2.2 截获链路（Intercept Links）

若星载系统需截获敌方信号，则如图 6.8 所示，存在一条从敌方发射机（hostile transmitter）指向卫星有效载荷接收机的链路。敌方发射机可能与雷达、通信系统、广播电台或数据链相关联；可采用任意类型的调制方式；并可部署于地面或机载平台。在后续章节中，我们将基于卫星轨道、发射机特性及有效载荷能力，分析卫星截获系统所能达到的性能。但在此处，我们仅对该链路进行一般性讨论。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-091.jpg?height=695&width=1170&top_left_y=1261&top_left_x=180){width="400"}

图 6.8 截获链路（intercept link）将敌方发射机的信号传送至卫星有效载荷中的接收机。

卫星有效载荷接收机所接收到的功率由下式给出：

$$
P_{R} = P_{T} + G_{T} - \text{Link Losses} + G_{R}
$$


其中，$P_{R}$ 为卫星有效载荷接收机接收到的功率，$P_{T}$ 为敌方发射机的输出功率，$G_{T}$ 为敌方发射机的主瓣增益（boresight gain），Link Losses 为表 6.1 中所列的各项损耗，$G_{R}$ 为卫星有效载荷接收天线的主瓣增益（boresight gain）。

需要注意的是，被截获的发射机天线可能具有两个不同的增益值：一个指向其预期接收机（desired receiver），另一个指向我方卫星中的截获接收机。若目标发射机采用极宽波束天线（例如偶极子天线或鞭状天线（whip antenna）），则这两个增益可能相等。一种几何上的考虑是：若此类天线垂直架设，则在相对于地平线 $90^{\circ}$ 方向（即天顶方向）存在辐射零点（null）。这意味着，若卫星恰好位于敌方发射机正上方，卫星可能无法接收到该信号。

此外，传至卫星的信号极化方式（polarization）可能与其传至预期接收机的极化方式不同，这可能会降低卫星接收到的信号功率。在分析中，通常宜假设敌方发射机对其预期接收机采用了最佳的天线指向和极化配置。

敌方发射机与卫星的位置决定了链路距离，而天线的取向则决定了有效发射与接收天线增益以及极化损耗（polarization loss）。

第 9 章将提供包含轨道因素在内的具体示例。

## 6.3 下行链路（Downlinks）

从卫星到地面的下行链路（downlinks）可指向卫星的控制站、需要接收卫星所收集信息的其他地面接收站，也可被敌方接收机截获。此外，下行链路还可能用于对敌方接收机实施卫星干扰（即从卫星向敌方接收机发射干扰信号）。图 6.9 展示了下行链路的示意图。无论何种情况，下行链路方程均为：

$$
P_{R} = P_{T} + G_{T} - \text{Link Losses} + G_{R}
$$


![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-093.jpg?height=704&width=1168&top_left_y=248&top_left_x=182){width="400"}

图 6.9 任何从卫星发出的下行链路均将信号发送至地基接收机（ground-based receivers）。

其中，$P_{R}$ 为地基接收机接收到的功率，$P_{T}$ 为卫星发射机的输出功率，$G_{T}$ 为卫星天线的主瓣增益（boresight gain），Link Losses 为表 6.2 中所列的各项损耗，$G_{R}$ 为地基接收天线的主瓣增益（boresight gain）。

表 6.2 下行链路损耗（Downlink Losses）

| 损耗 | 描述 |
| :--- | :--- |
| 发射天线指向失配（Transmit antenna misalignment） | 由于卫星天线指向偏离地面接收机方向的角度，导致增益相对于主瓣增益的降低 |
| 接收天线指向失配（Receiving antenna misalignment） | 由于地面接收天线指向偏离卫星方向的角度，导致增益相对于主瓣增益的降低 |
| 自由空间损耗（Space loss） | 假设发射与接收天线均为全向天线时的视距（LOS, Line-of-Sight）传播损耗 |
| 大气损耗（Atmospheric loss） | 信号从地基接收机以特定仰角穿过大气层时所经历的大气衰减 |
| 降雨损耗（Rain loss） | 链路中穿过降雨区域部分所产生的降雨衰减 |

> 相关计算公式参见第 5 章。

### 6.3.1 遥测链路（Telemetry Link）

遥测链路（telemetry link）将卫星的状态与健康信息传送给其地面控制站。这些信息可包括卫星的姿态（orientation）、各分系统的运行状态，以及各有效载荷功能的状态与健康情况。此处将遥测链路视为与有效载荷下行链路（payload downlinks）相互独立的链路。卫星刚发射入轨时，该链路可用于检查所有卫星分系统的运行状况，以及接收来自指令链路（command link）发射信号的信号强度。遥测链路在将大型卫星天线对准地面站的定向过程中具有重要作用。此外，遥测链路通常采用宽覆盖波束天线（wide coverage antenna）。

### 6.3.2 数据链路（Data Link）

数据链路（data link）将卫星有效载荷所收集的信息传送到其地面控制站。此类信号的基本格式如图 6.7 中所示的指令链路格式。然而，由于有效载荷输出的信息量通常较大，数据链路的带宽可能远大于指令链路的带宽。

### 6.3.3 面向数据用户的链路（Links to Data Users）

卫星所收集的数据可能对多个用户具有价值。在此情况下，卫星可能需要将这些数据直接传输给相应用户。这些用户通常无权接收卫星所收集的全部数据；因此，典型的做法是：在地面控制站对原始数据进行编辑处理后，根据用户的请求，将处理后的数据重新上传至卫星，再由卫星转发给已授权的用户。图 6.10 展示了这类链路的工作流程。卫星向这些用户发射信号所使用的天线通常具有宽波束宽度（wide beamwidth），可覆盖从地平线到地平线的整个地球表面区域。此类链路的链路方程与本章前述上行链路和下行链路的方程一致。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-095.jpg?height=739&width=1123&top_left_y=248&top_left_x=202){width="400"}

图 6.10 卫星所收集的信息可经过处理后分发给其他用户。

### 6.3.4 干扰链路（Jamming Links）

本节讨论从卫星对地面通信链路和雷达实施干扰（jamming）的情形。由于卫星距离地面较远，此类干扰极具挑战性，但在某些特定条件下仍可实现。本书并不保证此类干扰目前已实际部署或具备现实可行性；然而，未来技术的发展可能使其成为现实，因此我们在此予以探讨。图 6.11 展示了一条从卫星到地面的干扰链路。需注意，目标接收机可位于地球表面，也可位于地球上方飞行的飞机中。与截获链路类似，进入目标接收机的接收功率仍采用相同公式计算，但此时发射功率来自卫星干扰机（satellite jammer），接收功率则位于目标接收机处：

$$
P_{R} = P_{T} + G_{T} - \text{Link Losses} + G_{R}
$$


其中，$P_{R}$ 为目标接收机接收到的功率，$P_{T}$ 为卫星干扰机的输出功率，$G_{T}$ 为干扰发射机的主瓣增益（boresight gain），Link Losses 为表 6.2 中所列的各项损耗，$G_{R}$ 为目标接收机天线的主瓣增益（boresight gain）。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-096.jpg?height=812&width=1166&top_left_y=248&top_left_x=153){width="400"}

图 6.11 星载干扰机（satellite-borne jammer）向位于地球表面或其附近的非合作目标（noncooperative target）中的接收机发射干扰信号。

本节仅给出干扰链路所适用的相关公式。包含轨道因素在内的具体示例将在第 10 章中给出。

#### 6.3.4.1 干扰地面通信链路（Jamming a Ground Communication Link）

干扰机的有效性由其在目标接收机中所产生的干扰信号与期望信号功率比（J/S, jammer-to-signal ratio）决定。图 6.12 显示了目标接收机试图接收的发射机（对我方而言属于敌方）。J/S 定义为：目标接收机从干扰机接收到的功率，除以从其期望信号源（此处为敌方发射机）接收到的功率。需要注意的是，目标接收机的天线可能具有两个不同的增益值：一个指向其期望的发射机，另一个指向我方卫星中的干扰机。若目标接收机采用极宽波束覆盖天线（例如偶极子天线或鞭状天线（whip antenna）），则这两个增益可能相等。若目标接收机采用定向天线，则通常应假定其已对准期望信号发射机，并采用匹配的极化方式。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-097.jpg?height=798&width=1166&top_left_y=248&top_left_x=184){width="400"}

图 6.12 卫星通信干扰机所实现的 J/S 取决于干扰链路和敌方通信链路二者。

所实现的 J/S 由下式给出：

$$
\begin{aligned}
& J / S=P_J+G_J-\text { Link Losses }{ }_J+G_{R J} \\
& -\left[\begin{array}{l}
P_T+G_T-\text { Atmospheric and Rain Losses in Atmosphere } \\
- \text { Applicable Link Losses }+G_R
\end{array}\right]
\end{aligned}
$$

其中：
- $J / S$ 为干扰信号与期望信号功率比（单位：dB）；
- $P_{J}$ 为卫星干扰机输出功率（单位：dBm）；
- $G_{J}$ 为干扰发射机的主瓣增益（boresight gain，单位：dBi）；
- $\text{Link Losses}_{J}$ 为表 6.2 中针对干扰链路所列的各项损耗；
- $\text{Applicable Link Losses}$ 为影响被干扰链路的大气以外的传播损耗（参见第 4 章）；
- $G_{RJ}$ 为目标接收机天线在干扰机方向上的增益（单位：dBi）；
- $P_{T}$ 为敌方发射机输出功率（单位：dBm）；
- $G_{T}$ 为敌方发射机的主瓣增益（单位：dBi）；
- $G_{R}$ 为目标接收机天线在其期望信号方向上的主瓣增益（单位：dBi）。

如第 4.3 节所述，目标通信链路的损耗取决于所适用的链路传播模型。该模型可能是视距（LOS）、双线（two-ray）或多刃绕射（knife edge diffraction）模型，具体取决于工作频率、链路距离、仰角及周围地理环境。

#### 6.3.4.2 干扰地面雷达（Jamming Ground Radars）

图 6.13 展示了从卫星干扰地基雷达（ground-based radar）所涉及的链路。需注意，该地基雷达（我们称之为目标雷达（target radar））正在跟踪某一距离上的目标，并接收来自该目标的镜面回波（skin return）。雷达天线的主瓣（boresight）指向该目标。卫星发射的干扰信号虽被雷达接收机接收，但由于雷达天线并未对准卫星，因此干扰信号是通过雷达天线的旁瓣（sidelobe）接收的，而旁瓣增益远低于主瓣增益。干扰机的有效性以其所能实现的干扰信号与雷达回波功率比（J/S, jammer-to-signal ratio）来衡量。此处的 J/S 定义为：雷达接收到的干扰信号功率与接收到的目标镜面回波功率之比。需要注意的是，尽管雷达信号可能采用其他传播模型，但大多数雷达采用视距（LOS, Line-of-Sight）传播方式。因此，本讨论中采用 LOS 模型。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-098.jpg?height=814&width=1146&top_left_y=248&top_left_x=162){width="400"}

图 6.13 卫星雷达干扰机所实现的 J/S 取决于干扰链路和敌方雷达链路二者。

我们假设卫星干扰天线对准目标雷达，而目标雷达天线则对准其跟踪目标。

所实现的 J/S 由以下公式给出，该公式忽略了干扰链路和雷达链路中的降雨与大气损耗：

$$
J / S = E R P_{J} - E R P_{S} + 71 + 40 \log R_{T} - 20 \log R_{J} + G_{S} - G_{M} - 10 \log R C S
$$


其中：  
- $J / S$ 为实现的干扰信号与雷达回波功率比（单位：dB）；  
- $E R P_{J}$ 为卫星干扰机的有效辐射功率（effective radiated power，单位：dBm）；  
- $R_{T}$ 为目标雷达与其跟踪目标之间的距离（单位：km）；  
- $E R P_{S}$ 为目标雷达的有效辐射功率（单位：dBm）；  
- $G_{S}$ 为目标雷达天线在卫星方向上的旁瓣增益（sidelobe gain，单位：dBi）；  
- $G_{M}$ 为目标雷达天线主瓣的主轴增益（main beam boresight gain，单位：dBi）；  
- $RCS$ 为目标雷达所跟踪目标的雷达散射截面（radar cross-section，单位：$\mathrm{m}^{2}$）。

由于来自卫星的信号可能经历显著的大气和降雨损耗，且卫星干扰天线可能存在指向失配，因此需对上述 J/S 公式进行如下修正。该修正量 $\Delta J / S$ 应加到前述公式计算结果上：

$$
\Delta J / S = \text{Target Radar Atmospheric Loss (in dB)} \\
+ \text{Target Radar Rain Loss (in dB)} \\
- \text{Satellite Atmospheric Loss (in dB)} \\
- \text{Satellite Rain Loss (in dB)} \\
- \text{Satellite Jamming Antenna Misalignment Loss (in dB)}
$$


上述各项损耗的定义及其计算公式见第 4 章和第 5 章。

## 6.4 敌方链路（Hostile Links）

本章已描述了与卫星及其有效载荷运行相关的各类链路。此外，还存在敌方链路（hostile links）。例如，若敌方接收机用于截获卫星的任意下行链路（downlink），则其链路结构如图 6.14 所示。同样，任何指向卫星的上行链路（uplink）也可能被截获。然而，由于上行链路的发射机位于地面，除非干扰机非常靠近被干扰的地面接收站，否则此类干扰机必须部署在空中平台（airborne platforms）上。指向这些截获接收机的链路如图 6.15 所示。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-100.jpg?height=745&width=1148&top_left_y=246&top_left_x=160){width="400"}

图 6.14 敌方接收机可截获卫星下行链路。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-100.jpg?height=697&width=1166&top_left_y=1118&top_left_x=151){width="400"}

图 6.15 空中敌方接收机可截获卫星或有效载荷的上行链路。

针对卫星的上行链路和下行链路也可实施干扰，每种干扰均涉及一条对应的干扰链路。上行干扰链路示意图见图 6.16，下行干扰链路示意图见图 6.17。

这些链路的详细分析将在第 7 章中作为链路脆弱性（link vulnerability）讨论的一部分予以阐述。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-101.jpg?height=748&width=1159&top_left_y=408&top_left_x=184){width="400"}

图 6.16 敌方地基干扰机可干扰任意卫星上行链路。

![](https://cdn.mathpix.com/cropped/2025_11_03_ca5f3467e496c4c25007g-101.jpg?height=647&width=1141&top_left_y=1285&top_left_x=193){width="400"}

图 6.17 空中敌方干扰机可干扰任意卫星下行链路。
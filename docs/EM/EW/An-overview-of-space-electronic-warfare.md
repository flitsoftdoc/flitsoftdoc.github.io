# 空间电子战概述

白皮书 | 版本 02.00 | Tim Fountain 与 Leander Humbert  
罗德与施瓦茨（ROHDE&SCHWARZ）

---

## 摘要

本文旨在为读者提供关于太空中的电子战（Electronic Warfare, EW）或电磁战（Electromagnetic Warfare）的总体概览，介绍空间领域的生态系统，以及空间电子战的攻防措施。本文首先简要回顾了空间领域、卫星轨道及卫星通信的基本原理。接着，讨论了卫星通信（satcom）各分段及电磁频谱在军事中的应用。随后，本文回顾了与空间电子战相关的进攻、防御与网络作战（cyber operations）基础，并列举了部分实际系统案例。在解决方案部分，论文介绍了一系列可应用于空间电子战的关键技术，包括链路预算（link budgeting）、通信监测（communications monitoring）、信号分析（signal analysis）、载波下载波检测（carrier-under-carrier detection）、干扰追踪（interference hunting）、短时事件捕获（short-duration event capture）、手持式干扰追踪（handheld interference hunting）以及高带宽记录（high bandwidth recording）以捕获长期事件。

本文所呈现的全部信息均来自公开可获取的资料来源。

> “所有军队都倾向于占据高地而非低地，偏好阳处而非阴处。对于陡峭的高地，如果你比对手先到，应当占据那片高而阳光充足的地方，并在那里等待他爬上来。”  
> —— 孙子，《孙子兵法》

---

## 1 概述

空间被全球公认为是经济成功、国家安全和社会福祉的关键要素。同时，它也是大多数国家军队认可的作战领域。例如，2019年美国太空军（US Space Force）的成立，凸显了美国国防部（Department of Defense, DoD）对空间领域与传统军种并列的重要性。

电子战（EW）是一种在复杂、竞争性环境中成功行动的关键且被验证有效的能力。在空间领域，电子战具有变革性潜力，因为其非动能（non-kinetic）的防护方式可避免产生额外的太空碎片，这一点对于安全的空间作战尤为关键。

与地面环境相比，空间提供了更为广阔的电磁环境。在地面环境中，大气效应、地形、植被以及地球曲率等因素共同限制了电磁波的传播。而在空间中，这些限制被消除，从而开启了全新的感知、通信、力量防护与投送能力。这些新的作战维度也带来了技术和战略上的突袭机会。由于空间电子战通常与卫星及其通信链路相关，因此需要注意地球大气层与空间距离等因素会抵消纯空间传输的部分优势，并在很大程度上决定当前技术的可实现性。

随着各国不断发展其太空能力，频谱优势（spectrum superiority）在空间中与地面作战同样重要。空间电子战面临的主要挑战是必须在严苛环境下跨越整个电磁频谱进行操作。这将推动对新型电子战技术、方法与系统的需求，以覆盖更宽的频谱范围和带宽。

---

## 2 空间领域生态系统

空间领域的生态系统如图1所示。图中间的方块展示了最常与太空活动相关的主要方向，包括：

- 研发、科学与天文学，例如国际空间站（International Space Station, ISS）
- 地球观测，例如气象卫星
- 定位、导航与授时系统（Position, Navigation and Timing, PNT），例如全球导航卫星系统（GNSS）
- 通信，例如铱星（Iridium）系统，以及卫星电视（如 DirecTV）
- 载人航天

图1展示了空间领域的复杂性及其承载的多样化需求。左侧为民用空间应用，右侧为军事应用。

![](https://cdn.mathpix.com/snip/images/gPep__-EoR6YLMFUSpBqyJPNgy4dQEcWfmwyYRzbI88.original.fullsize.png){width="800"}
 

---

### 2.1 轨道与分段

在讨论卫星与空间电子战之前，必须简要介绍卫星的典型轨道与分段（segments）。表1给出了不同卫星轨道的概览。每种轨道都有其独特特征、优点与局限。

#### 2.1.1 低地球轨道（Low Earth Orbit, LEO）卫星

低地球轨道（LEO）卫星是商业小卫星创新的重点方向。大多数LEO大型星座被统称为“新空间”（NEWSPACE）或“小卫星”（SMALLSAT），以反映其物理尺寸小的特征。顾名思义，这些卫星距离地球较近，约为1200英里，因此其地表覆盖范围较小，需要大量卫星实现全球覆盖。例如，SpaceX的星链（StarLink）星座最终将超过10000颗卫星。

由于轨道较低，LEO卫星在覆盖目标区域时所需的发射功率较低，通信延迟（latency）也显著小于中地球轨道（MEO）或地球同步轨道（GEO）卫星。然而，LEO卫星会因大气阻力逐渐脱轨（deorbit）坠回地球。其他挑战包括需要在卫星间建立星间链路（crosslink）以实现数据传输，以及地面站与卫星通信的时间窗口较短。

#### 2.1.2 中地球轨道（Mid Earth Orbit, MEO）卫星

中地球轨道（MEO）卫星位于1200至22000英里之间。MEO轨道穿过两层带有高能粒子的范艾伦辐射带（Van Allen belts），这些粒子可能损坏卫星电子设备。位于约12600英里高度的半同步轨道（semi-synchronous orbit）卫星拥有12小时轨道周期，每天在赤道上空经过相同的两个点。这种可预测的轨道被全球导航卫星系统（GNSS）广泛采用，如GPS、GLONASS、Galileo与北斗（BeiDou），能够提供稳定、低延迟的通信连接。但MEO卫星的缺点在于需使用双天线跟踪系统以保持连续连接。

#### 2.1.3 高椭圆轨道（Highly Elliptical Orbit, HEO）卫星

高椭圆轨道（HEO）卫星采用高偏心率的椭圆轨道，包括“闪电”（Molniya）轨道（以苏联Molniya通信卫星命名）和“Tundra”轨道。HEO轨道的优势在于，当卫星处于远地点（apogee）附近时，其在地球上方的滞留时间较长，似乎在高纬度地区“悬停”不动。该特性使HEO非常适合用于高纬度通信。例如，美国的Sirius XM卫星广播系统采用倾斜的Tundra轨道，使两颗卫星长期覆盖北美上空，第三颗卫星在24小时周期内快速掠过南部地区。

#### 2.1.4 地球同步轨道（Geostationary Orbit, GEO）卫星

地球同步轨道（GEO）卫星位于约22000英里高度的地球同步轨道上，与地球保持相对固定的位置。因此，地面站的天线无需动态跟踪。单颗GEO卫星可覆盖约地球表面积的三分之一。然而，该距离也带来较高的信号损耗与通信延迟。此外，由于GEO卫星均位于赤道上方同一圆环轨道，轨道槽位有限，导致需求极高。

表1：不同卫星轨道概览

| 轨道 | 距离（英里） | 优点 | 缺点 | 示例 |
| :--- | :--- | :--- | :--- | :--- |
| LEO | 1200 | - 全球覆盖<br>- 低延迟 | - 需频繁在卫星间切换通信<br>- 实现全覆盖需大量卫星 | StarLink, Iridium |
| MEO | 1200–22000 | - 全球覆盖<br>- 轨迹可预测 | - 需在卫星间切换通信 | GPS, Galileo, SpaceLink |
| HEO | 远地点约25000 | - 极区覆盖<br>- 需卫星数量较少 | - 需频繁切换通信<br>- 距离变化大<br>- 经受范艾伦辐射带影响<br>- 延迟变化大 | SiriusXM, QZSS |
| GEO | 22000 | - 地面设备固定不动<br>- 单颗卫星可覆盖地球三分之一 | - 极区覆盖有限<br>- 信号路径损耗大<br>- 延迟高 | DirecTV, MUOS, AEHF |

图2：不同卫星轨道的示意图  
来源：美国国防情报局（US Defense Intelligence Agency）[1]  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-08.jpg?height=545&width=771&top_left_y=220&top_left_x=551){width="500"}
 

图3：地球覆盖范围与卫星轨道关系
  
![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-08.jpg?height=273&width=938&top_left_y=968&top_left_x=551){width="600"}
 

---

### 2.2 卫星通信概述

如图4所示，卫星生态系统主要由两大部分组成：空间段（space segment）和地面段（earth segment），其中后者又包括地面部分（ground segment）与用户部分（user segment）。以下分别说明：

#### 2.2.1 发射段（Launch segment）

发射段涉及将卫星送入目标轨道的全部活动。其技术包括火箭与发射设施。发射场选址取决于目标轨道类型。例如，大多数GEO卫星通常从赤道附近地区发射，如法属圭亚那库鲁（Kourou）的圭亚那航天中心（Guiana Space Center）。

#### 2.2.2 空间段（Space segment）

空间段由卫星或卫星星座组成，包括相关设备，如天线与转发器（transponder）、姿态控制系统、热管理系统、跟踪与遥测控制系统（Tracking, Telemetry & Control, TT&C）、电源与太阳能阵列、载荷与平台总线。

#### 2.2.3 用户段（User segment）

用户段由卫星服务的最终用户或消费者组成，可位于陆地、海洋或空中。用户设备通过与卫星通信执行诸如通信、成像、定位和授时等功能。

图4：卫星生态系统的各个组成部分  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-09.jpg?height=768&width=1338&top_left_y=220&top_left_x=549){width="400"}
 


## 3 空间电子战的定义

北约（NATO）将电子战/电磁战（Electronic/Electromagnetic Warfare, EW）定义为：“一种利用电磁能量（无论主动或被动）以提供态势感知（situational awareness）并产生进攻与防御效果的军事行动。”  电子战属于电磁频谱（Electromagnetic Spectrum, EMS）范围内的作战形式，其核心是通过军事手段运用电磁能量，以防止或削弱敌方对电磁频谱的有效使用，同时保障友方的使用。

图5：电磁频谱中的电磁作战  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-10.jpg?height=857&width=1185&top_left_y=616&top_left_x=551){width="600"}
 

电子战跨越四个作战领域：

- 海上（Maritime）  
- 陆地（Land）  
- 空中（Air）  
- 太空（Space）  

如图5所示。另一种从军事角度展示的电子战领域见图6，其刻意强调了当今电磁频谱作战（Electromagnetic Spectrum Operations, EMSO）的复杂性。通过EMSO实现主导权是决定军事行动成败的关键因素之一。

图6：当今军事环境中的电子战  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-11.jpg?height=722&width=1185&top_left_y=220&top_left_x=551){width="700"}
 

电子战由三个主要部分构成：

- 电子攻击（Electronic Attack, EA）  
- 电子防护（Electronic Protect, EP）  
- 电子支援（Electronic Support, ES）  

---

### 3.1 电子攻击（Electronic Attack, EA）

电子攻击是指战略性地使用电磁能或定向能武器（directed energy weapons）对敌方电子基础设施实施攻击，以干扰、拒止、削弱、摧毁或欺骗通信系统。其手段包括威胁分析与响应，以及信号干扰（jamming）、欺骗（spoofing）、定向能、激光与射频武器（RF weapons）等对抗措施。

---

### 3.2 电子防护（Electronic Protect, EP）

电子防护涉及保护本国人员、设施与装备免受电子攻击影响。通过网络与多光谱射频/红外（Radio Frequency/Infrared, RF/IR）工具进行威胁抑制，检测、分析并响应来自电子攻击的影响。

---

### 3.3 电子支援（Electronic Support, ES）

电子支援利用射频传感器与系统检测、截获、识别并跟踪电磁辐射源，以识别威胁、收集目标与信号情报（SIGINT）数据，并将信息传递给作战规划人员。

正如前文所述，空间只是电子战的另一个作战领域，但具有若干独特差异。空间电子战通常与卫星及其通信链路相关，这些链路统称为卫星通信（satcom）。

---

## 4 进攻性空间电子战

进攻性空间电子战是指在太空领域对对手实施电子攻击的行为。此类攻击可分为“五D”原则：

- 干扰（Disrupt）  
- 拒止（Deny）  
- 降级（Degrade）  
- 欺骗（Deceive）  
- 毁伤（Destroy）  

对抗手段包括信号干扰、欺骗、定向能、激光与射频武器。

干扰（Jamming）是一种电子攻击形式，通过在与目标卫星或接收机工作频段相同的频带内发射干扰信号，从而破坏射频通信。干扰是暂时性、非破坏性的——当干扰源关闭后，通信将恢复正常。

欺骗（Spoofing）则是另一种电子攻击方式，即攻击者生成虚假信号。例如，当欺骗攻击针对卫星下行链路（downlink）数据时，可能向地面接收系统注入虚假或错误数据。劫持卫星遥测、跟踪与控制（Telemetry, Tracking and Control, TT&C）链路并注入伪造数据，是另一种已知的干扰方式。一旦TT&C链路被成功欺骗，攻击者在理论上可控制该卫星。防御欺骗的主要对策是加密（encryption），用于识别虚假数据注入。

---

### 4.1 上行干扰（Uplink Jamming）

如图7所示，上行干扰干扰地面站或用户终端发往卫星的信号。干扰信号通常是宽带噪声或频率调制连续波（Frequency Modulated Continuous Wave, FM-CW），与目标上行信号具有相同中心频率与带宽，并被发射至卫星。其目的是混淆卫星转发器（transponder），使其无法区分真实信号与干扰信号，从而导致下行信号受损。

上行干扰需要较高射频功率，以足够幅度抵达卫星转发器，从而产生混淆效果。该比率被称为干扰信号比（Jammer-to-Signal Ratio, J/S）。上行干扰会使所有接收者的信号质量下降，这种效果有时并非预期。此外，所有干扰行为都具有高可见性（在射频频谱中），可能导致对方进行测向定位与动能反制。

图7：上行干扰  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-12.jpg?height=456&width=819&top_left_y=2029&top_left_x=543){width="400"}
 

---

### 4.2 下行干扰（Downlink Jamming）

如图8所示，下行干扰破坏卫星向地面或空中接收机发送的传输。干扰信号（通常类型与上行干扰相同）模拟下行信号的频率，从而阻止地面用户接收卫星信号。与上行干扰相比，下行干扰所需射频功率相对较低。干扰源可以是地面或空中平台，取决于目标。

下行干扰要求干扰源与目标接收机保持视距（Line of Sight, LOS），在战区环境中可能存在困难。同样，干扰器的高射频可见性会导致其被敌方测向与定位，从而引发动能反制。

图8：下行干扰  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-13.jpg?height=456&width=819&top_left_y=702&top_left_x=546){width="400"}
 

---

### 4.3 星间链路干扰（Crosslink Jamming）

星间链路通信（crosslink communications）是指两颗卫星间的数据交换，可采用射频或光学方式。例如，SpaceX的星链（StarLink）卫星使用光学星间链路通信。  
如图9所示，在星间干扰中，敌方卫星可部署于适当位置，以干扰两颗友方卫星间的链路信号。所有卫星必须保持相互视距。使用定向天线或相控阵天线（phased array antennas）可降低敌方干扰的有效性。

光学链路干扰难度更高，因为敌方卫星的光学干扰装置必须与目标光束在空间上高度对齐。由于光束极为狭窄且定向性强，实施有效干扰非常困难。此外，将敌方卫星及时定位到干扰位置在操作上也具有相当挑战性。

图9：星间干扰  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-13.jpg?height=582&width=859&top_left_y=1897&top_left_x=546){width="400"}
 

---

### 4.4 遥测、跟踪与指令链路干扰（TT&C Jamming）

如图10所示，遥测、跟踪与指令（Telemetry, Tracking and Command, TT&C）干扰针对的是TT&C信号。干扰可作用于地面操作中心链路或卫星的TT&C接收机。  
TT&C信号通常不属于通信载荷部分，且常使用独立频率。与载荷信号相比，其带宽更窄，因此可能更易受干扰。TT&C链路受扰的后果可能极其严重，甚至导致卫星脱轨或偏离目标轨道。干扰还可能因失去定时与控制信号而使主载荷通信失败。  
由于TT&C链路一般加密，欺骗其信号的难度更高。地面干扰TT&C链路需保持与操作中心的视距（LOS），所需功率较低；而针对卫星的TT&C干扰需与卫星保持LOS并具更高功率。

图10：TT&C 干扰  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-14.jpg?height=499&width=685&top_left_y=855&top_left_x=551){width="400"}
 

---

### 4.5 卫星运行中的其他进攻性攻击形式

#### 4.5.1 光学攻击（Optical Attacks）

光学攻击使用高功率激光照射侦察卫星的成像传感器（image sensor），使其致盲或损伤。激光可来自地面或空间平台。其功率与目标距离决定攻击造成的损伤是暂时性的还是永久性的。当功率足够高时，激光甚至可破坏卫星结构。  
地面激光攻击难度极高，原因包括所需能量巨大、需精确跟踪高速移动的卫星，以及大气散射与像差等因素。

#### 4.5.2 太空基进攻性攻击（Space-based Offensive Attacks）

太空基反卫星（Anti-Satellite, A-SAT）作战形式多样，如图11所示。示例包括：高功率微波（High Power Microwaves, HPM）禁用或摧毁卫星、射频干扰与激光攻击（前述4.5.1节）、化学喷雾、可实施动能破坏的机器人杀伤载具（robotic kill vehicles），以及能捕获或损坏其他卫星的机械臂系统。

图11：太空基反卫星（A-SAT）作战  
来源：美国国防情报局（US Defense Intelligence Agency）[1]  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-15.jpg?height=760&width=879&top_left_y=220&top_left_x=551){width="400"}
 

---

#### 4.5.3 网络进攻性攻击（Cyber Offensive Attacks）

卫星通信系统（satcom systems）的主要功能是实现网络数据传输，因此自然成为网络攻击的目标。网络进攻性攻击的核心理念是：通过这些网络破坏、拒止、降级或摧毁计算机及其网络上的信息，或直接摧毁网络本身。此类攻击主要针对地面段（ground segment）及TT&C链路。

主要形式包括：

- 计算机网络利用（Computer Network Exploitation, CNE）：通过错误配置或易受攻击的网络技术及钓鱼手段入侵地面站网络  
- 通过云基础设施后门（backdoor）进行攻击  
- 数据破坏（data corruption），无论静态存储或传输中  
- 供应链攻击（supply chain attacks），在软件、工具或通用组件中植入恶意程序  
- 使用未打补丁、过时或遗留的商用现货软件（Commercial Off-The-Shelf, COTS）

此外，网络进攻行动还包括虚假信息（misinformation）、假消息（disinformation）、宣传（propaganda）等欺骗手段。

2017年，一位美国高级军官公开表示，网络攻击是“首要反空间威胁（No.1 counter-space threat）”。美国国家情报总监詹姆斯·克拉珀（James R. Clapper）亦持相同观点（Pollpeter 等）。

---

#### 4.5.4 动能攻击（Kinetic Attacks）

虽然动能攻击不严格属于电子攻击，但为完整性起见在此讨论。动能攻击可通过直接上升反卫星导弹（Direct Ascent Anti-Satellite, DA-ASAT）实现，即从地面发射导弹拦截或在近距离引爆目标卫星。另一种方式是轨道共轨反卫星武器（Co-Orbital ASAT），即在相似轨道部署武器，靠近目标后实施爆炸。

动能攻击通常不被首选，因为会产生太空碎片，危及其他航天器（包括友方与中立目标）。  
例如，2007年中国在西昌卫星发射中心发射了一枚DF-21多级弹道导弹，摧毁了质量约$0.75 \mathrm{t}$（1650磅）的FY-1C极轨气象卫星。该卫星运行速度约$8 \mathrm{km/s}$（约17000英里/时）。此次摧毁产生约10000个碎片，其中超过2800个至今仍在轨运行，对太空安全构成重大威胁。NASA持续监测这些碎片，如图12所示。

来源：[4]  
图12：FY-1C 碎片轨道  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-16.jpg?height=604&width=881&top_left_y=928&top_left_x=549){width="400"}
 

---

### 4.5.5 导航战（Navigation Warfare, NAVWAR）

导航战是空间电子战的一种特定形式，指通过攻防手段保障友方定位、导航与授时（Positioning, Navigation and Timing, PNT）资产的可用性，同时阻止敌方使用PNT信息。  
NAVWAR最常应用于全球导航卫星系统（GNSS），包括GPS、GLONASS、Galileo、北斗（Beidou）与QZSS/SBAS。大多数导航战活动涉及对地面资产的干扰与欺骗。军事系统依赖导航卫星进行机动、打击、协调与通信；而民用PNT应用涵盖航空、陆运与海运导航、电网同步、金融交易、空中交通管理、铁路安全、气象监测、地震预警以及应急响应协调等领域。

导航战早已不再是理论假设。  
例如，2017年6月，黑海区域约有20艘船只报告GPS异常，其位置显示与实际相差数英里，疑似遭受欺骗攻击。研究者还发现，俄罗斯总统府与莫斯科克里姆林宫周边常出现GNSS信号异常，推测俄方在总统出现地区实施GNSS欺骗，这也常波及附近GNSS用户。此外，北约演习期间，挪威领海内的GNSS异常导致两艘舰船相撞；而在叙利亚的俄军GNSS欺骗干扰了距约212公里外的以色列特拉维夫本·古里安机场的飞行运行。

图13：俄罗斯黑海地区的欺骗活动  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-17.jpg?height=520&width=889&top_left_y=215&top_left_x=549){width="400"}
 


#### 4.5.6 GNSS 干扰的形式

##### 粗暴式 GNSS 干扰（Brute-force GNSS Jamming）

在世界上某些争夺激烈的地区，如朝鲜半岛和黑海东部，GNSS信号被故意拒止是一种常见现象。拒止GNSS的方式是使用本地强信号覆盖GNSS的工作频段（如L1、L2或L5波段），从而压制来自太空的GNSS信号。常用的干扰信号包括：宽带高斯噪声、宽带相位/频率调制、宽带扩频信号、窄带扫频脉冲、窄带扫频连续波（CW）以及宽带连续CW信号。这类“蛮力”拒止服务的行为较容易被检测，同时，地面干扰发射机也相对容易被测向定位（geolocate）。

---

##### GPS 欺骗（GPS Spoofing）

GNSS欺骗攻击试图通过广播虚假的GNSS信号来欺骗接收机，这些伪造信号的结构与真实信号相似，也可能是将其它时间或地点截获的真实信号重新广播。这些伪造信号可能被修改，以使接收机计算出错误的位置，或虽然位置正确但时间错误。

一种常见的欺骗形式称为“牵引攻击”（carry-off attack）：攻击者首先广播与目标接收机所观测到的真实信号同步的伪造信号，然后逐渐提升伪信号功率，诱使接收机从真实信号“跟随”到伪信号。据推测，2011年12月在伊朗东北部被捕获的洛克希德RQ-170无人机事件即是此类攻击所致。

另一个著名的“概念验证”案例发生于2013年6月，得克萨斯大学奥斯汀分校Cockrell工程学院的一组航空航天工程学生使用伪造GPS信号误导豪华游艇“White Rose of Drachs”偏离航线。学生在船上逐渐增强伪信号功率，覆盖真实GPS星座信号，从而成功改变了游艇的航向。

欺骗攻击可根据信号相关性与功率分为非重叠、重叠与相对功率三类。

---

##### 非重叠型（Non-overlapped）

在此类攻击中，伪造信号的码相位与载波相位未与真实信号同步，伪造信号与真实信号的相关峰（correlation peaks）不重叠。在“冷启动”（cold start）状态下，如果伪信号功率高于真实信号，则接收机的捕获算法可能被欺骗。若信号处于跟踪阶段，接收机只会感知交叉模糊函数的主峰区，因此当伪信号延迟或多普勒频移不匹配时，可能不影响跟踪。

---

##### 重叠型（Overlapped）

更复杂的欺骗攻击会使伪信号与真实卫星信号的码相位与多普勒频率同步。在重叠攻击中，伪信号与真实信号的相关峰可叠加并改变相关曲线形状，产生建设性或破坏性干涉。这种攻击通常由基于接收机的伪信号发生器（receiver-based spoofer）实现，攻击者掌握目标接收机的时间、可见卫星、位置及参数信息。检测重叠型欺骗攻击较为困难，因为由欺骗信号造成的失真往往表现为多径误差。

---

##### 相对功率型（Relative Power）

伪造信号相对于真实信号的相对射频功率是欺骗接收机的关键因素。伪信号与真实信号之间的功率差显著影响欺骗干扰的有效性与误差范围。要基于相对功率识别欺骗攻击十分困难，因为需要掌握欺骗者的传播通道特性、天线增益模式及其方向。

---

##### 导航战（NAVWAR）防护措施

- 通过监测与服务质量测量检测干扰/欺骗  
- 当GNSS/GPS不可用时，使用替代定位、导航与授时系统（Alternate PNT, A-PNT）  
- 采用高稳定度保持时钟（Hold-over clocks）维持时间精度  
- 使用受控辐射方向图天线（Controlled Radiation Pattern Antennas, CRPA）以最小化地面干扰  
- 美国国防部（DoD）及其盟友使用具备GPS M码（M-code）的军事用户设备（MGUE），可自主检测干扰与欺骗  
- GPS Block III卫星具备波束成形（beam forming）能力，可将信号对干扰比（S/J）提高约+20 dB，实现“区域军事防护”（regional military protection）

---

### 4.6 进攻性空间电子战的作战挑战

在常规地面干扰场景中，理想情况是将干扰器尽量靠近目标布置。而在太空环境中，这通常不可行。卫星轨迹虽可预测，却难以操控，因此问题转化为如何让足够的功率到达目标。然而，由于自由空间损耗（free space loss）和距离巨大，地面上行干扰与星间干扰均需极高发射功率。

接收功率与距离平方成反比（$1/R^2$）。以GPS为例，其在地表接收到的射频信号功率极低。GPS卫星轨道高度约20000公里，发射功率约45瓦，频率为1575.43 MHz（L1波段）。卫星天线增益通常为12 dBi，接收机天线增益约为4 dBi。按自由空间损耗模型计算，接收功率为−120 dBm；再考虑天线、连接器及大气损耗后，接收功率约为−125 dBm。GPS信号带宽约2 MHz，噪声功率为−110 dBm。传统GPS使用直接序列扩频调制（direct spread-spectrum modulation），带来约43 dB的处理增益，因此总体上信号可在−153 dBm下被恢复。实际操作中，信号需留有裕量，常见接收功率门限为获取阶段$>-135 \mathrm{dBm}$、跟踪阶段$>-147 \mathrm{dBm}$。如此微弱的信号表明，即使功率较低的地面干扰也能轻易奏效，只需很小的干扰比（J/S）。

此外，干扰器必须与敌方地面段保持视距（LOS）并靠近部署，这在战区环境中极具风险。由于干扰源位置相对固定，敌方可使用传统测向技术对其定位，并可能发起动能反制，包括使用反辐射导弹（Anti-Radiation Missiles, ARM）对干扰源实施打击。

最后，获取关于敌方资产的可操作情报（actionable intelligence）始终是一项艰巨任务。

---

## 5 防御性空间电子战

本节将讨论防御性空间电子战及干扰抑制技术。

---

### 5.1 天线（Antennas）

#### 5.1.1 定向天线（Directional Antennas）

应对干扰的最佳方法之一是限制干扰信号对接收天线的影响。传统方式是使用定向天线，即在特定方向上具有高增益的天线。例如，Yagi天线（见图15）即为典型的定向天线，其辐射方向图如图14所示。另一种常见的高定向性天线是抛物面天线（parabolic dish, 图17），常用于卫星通信。其辐射方向图（图16）具有主瓣（major lobe）沿传播方向，并伴有若干较小的副瓣。通过这种反射结构，可实现极窄波束。

图14：Yagi天线辐射方向图  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-20.jpg?height=744&width=1255&top_left_y=990&top_left_x=543){width="400"}
 

图15：Yagi天线  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-20.jpg?height=216&width=714&top_left_y=1962&top_left_x=554){width="400"}
 

图16：抛物面天线辐射方向图  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-21.jpg?height=302&width=1222&top_left_y=196&top_left_x=549){width="400"}
 

图17：抛物面天线工作原理  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-21.jpg?height=480&width=585&top_left_y=667&top_left_x=554){width="400"}
 

**定向天线的优点：**

- 成本低  
- 定向性强  
- 相较相控阵天线通常具有更高增益  
- 无需复杂信号处理  

**定向天线的缺点：**

- 需机械转向  
- 波束方向变化缓慢  
- 仅支持单波束  
- 对主瓣外信号不敏感（在部分场景下也可视为优点）

---

#### 5.1.2 相控阵天线（Phased Array Antennas）

第二类防御天线为相控阵天线，它利用时空自适应处理（Space-Time Adaptive Processing, STAP）形成干扰抑制零点（null）。相控阵由大量二维排列的天线单元组成，每个单元接收不同相位与功率的信号，通过电子方式实现波束控制。电子扫描较机械扫描灵活，维护需求低。通常，天线阵列配合反射板以抑制背瓣。

发射信号经相位控制模块调节辐射方向。当主波束垂直于阵面时效果最佳；若主方向偏离过大，会导致副瓣数量与强度增加，并降低有效辐射面积。

**相控阵天线的优点：**

- 可实现高增益与强副瓣抑制  
- 波束方向变化迅速  
- 波束机动性高  
- 支持任意空间扫描  
- 可选择驻留时间  
- 可多波束并行，实现多功能作业  
- 局部单元失效不影响整体系统  

**相控阵天线的缺点：**

- 扫描范围有限（方位与俯仰最大约 $120^{\circ}$）  
- 波束扫描时方向图变形  
- 频率机动性较低  
- 结构复杂（含计算机、移相器与辐射单元总线）  
- 成本高  

在GPS干扰抑制中，一种特定类型的天线称为**受控辐射方向图天线（Controlled Radiation Pattern Antenna, CRPA）**。其利用自适应波束控制调整接收方向图，在干扰方向形成零点。CRPA天线通过空间滤波（spatial filtering）抑制特定方向信号，同时保留其他方向信号的接收能力。


#### 5.1.3 其他技术（Other Technologies）

一种常用的干扰抑制方法是采用**频率捷变技术（frequency agile techniques）**，即信号通过在一组离散频率间改变载波来实现移动或“跳频（frequency hopping）”。跳频频率方案由发射机和接收机通过伪随机比特序列（Pseudo Random Bit Sequence, PRBS）预先确定。跳频的一个主要挑战是确保发射机与接收机的跳频同步。首先，发射机与接收机需要高精度时钟以维持时间同步；其次，它们需要同步跳频节奏。一种常见的方法是确保发射机在固定时间周期内使用全部信道。接收机则可以通过选择随机信道并监听该信道上的有效数据来发现发射机。发射机的数据可通过特定的数据序列进行识别，该序列在该信道数据段中极不可能自然出现。数据段还可以利用校验和（checksum）进行完整性检测与进一步识别。发射机和接收机可以使用固定表或伪随机序列生成跳频模式。一旦同步，它们即可维持通信。

干扰者可采用**宽带干扰（wideband jamming）**，又称**弹幕干扰（barrage jamming）**，通过白噪声覆盖跳频通信信道的所有频率“槽位”来实现干扰。由于干扰器的宽带特性，这种方式需要极高的干扰功率。其他针对跳频信号的干扰技术包括**不精确跟随干扰（imprecise follower jamming）**、**部分频带干扰（partial band jamming）**以及**高效扫频干扰（effective sweeper jamming）**。

最后，**数据加密（encryption）**至关重要，因为它不仅能防止第三方拦截，还能在干扰环境下检测潜在的数据退化或损坏。

---

## 6 空间电子战技术（Technologies for Space Electronic Warfare）

本节将回顾可用于空间电子战（space EW）的关键技术，包括：链路预算（link budgeting）、通信监测（communications monitoring）、信号分析（signal analysis）、载波下载波检测（carrier-under-carrier detection）、干扰追踪（interference hunting）、短时事件捕获、手持式干扰追踪以及高带宽记录以捕获长期事件。

---

### 6.1 卫星链路规划（Satellite Link Planning）

卫星链路规划可用于理解卫星通信链路（satcom link）的整体预算，以及评估干扰的潜在影响和所需的干扰功率。  
R\&S ${ }^{®}$ **GSASLP卫星链路规划器（satellite link planner）**是一款卫星通信分析与优化软件解决方案，涵盖现代卫星通信的所有方面。R\&S ${ }^{®}$ GSASLP支持卫星系统设计、传输规划和转发器（transponder）使用优化等主要环节。  
它能够精确建模天气条件与大气效应，同时涵盖透明载荷（transparent payload）中所有相关卫星通信频段（如C、X、Ku、Ka等）上的射频传输损伤。  
例如，由互调（intermodulation）与功率窃取（power robbing）引起的主要信号损伤，均可被精确建模并与厂商数据及在轨测试验证结果进行比对。

---

#### 6.1.1 链路预算计算与优化（Link Budget Calculation and Optimization）

R\&S ${ }^{®}$ GSASLP可帮助工程师仿真并建模转发器失真对卫星载波的影响，从而量化专用信号失真在任务规划或载荷设计中造成的载噪比（C/N）损失或容量退化。  
该工具的链路预算计算基于一系列国际公认方法与国际电信联盟（ITU）的推荐标准。

---

#### 6.1.2 卫星网络规划与优化（Satellite Network Planning and Optimization）

使用R\&S ${ }^{®}$ GSASLP的系统可对地面站进行参数建模，例如发射与接收天线增益、最大等效全向辐射功率（Effective Isotropic Radiated Power, EIRP）及输出功率。  
此外，用户还可通过管理可用卫星、转发器及其覆盖范围，对空间段进行建模。  
R\&S ${ }^{®}$ GSASLP内置庞大的卫星与覆盖数据库，极大简化用户工作。

---

#### 6.1.3 路线规划与卫星载荷优化（Route Planning and Satellite Payload Optimization）

R\&S ${ }^{®}$ GSASLP支持移动卫星通信（mobile satcom）场景的路线规划。根据既定路线和数据速率需求，软件可依据数据速率要求、转发器波束覆盖整个路径的能力及目标频段（C、X、Ku、Ka）等标准搜索最优转发器。

---

#### 6.1.4 R\&S ${ }^{®}$ GSASLP主要功能（Key Features）

- 复杂多载波场景的链路预算分析  
- 转发器射频损伤建模（互调、功率窃取、增益压缩）  
- 链路预算与转发器优化以最小化功率/带宽消耗  
- 地面站设备与天线管理  
- 天线覆盖图可视化  
- 卫星信标接收分析  
- 邻星干扰（Adjacent Satellite Interference, ASI）计算  
- 按ITU推荐标准计算天气损伤  
- 移动VSAT、机载通信（SOTM）及无人机（UAV）操作路线规划与优化  
- 衰减覆盖分析  
- 载波随时间与频率的规划  
- 自适应图形用户界面与定制化解决方案  
- 数据导入/导出、地理定位与卫星覆盖可视化  
- 大型卫星调制解调器数据库（SCPC、Mesh、DTH、军用CDMA/DSSS）

图18：卫星链路规划器天线覆盖图可视化  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-24.jpg?height=548&width=1031&top_left_y=349&top_left_x=549){width="400"}
 

图19：非线性化行波管放大器（Traveling Wave Tube Amplifier, TWTA）在单载波与多载波模式下的输入/输出回退（IBO/OBO）曲线及增益关系  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-24.jpg?height=542&width=1034&top_left_y=1103&top_left_x=546){width="400"}
 

> ${ }^{1)}$ IBO/OBO表示转发器输入回退/输出回退（Input/Output Back-Off）  
> ${ }^{2)}$ TWTA表示行波管放大器（Traveling Wave Tube Amplifier）

---

### 6.2 通信系统监测（Communications System Monitoring）

R\&S ${ }^{®}$ **GSACSM通信系统监测软件（communications system monitoring）**是一款用于远程频谱监测与信号分析的卫星监控软件（satmon）。  
它结合了传统频谱分析仪功能、陷波系统及先进信号检测与识别算法。现代化的自适应图形界面（GUI）便于实现干扰识别或卫星转发器分析等应用。

---

##### 6.2.1 远程频谱监测（Remote Spectrum Monitoring）

R\&S ${ }^{®}$ GSACSM可通过远程连接与频谱分析仪通信，支持用户在全球范围内访问设备。  
可同时监测单个或多个设备，并允许多用户同时监控同一设备。系统支持独立应用模式与服务器/客户端架构。

---

##### 6.2.2 卫星转发器监测（Satellite Transponder Monitoring）

R\&S ${ }^{®}$ GSACSM可自主扫描转发器信号并识别载波（如DVB-S、DVB-S2、DVB-CID）。  
通过持续扫描与分析信号，可提取符号率、调制方式、前向纠错率（FEC）、载噪比（C/N）及频率偏移等详细信息，并识别干扰信号。

---

##### 6.2.3 载波内载波检测（Carrier-in-Carrier Detection, CiC）

R\&S ${ }^{®}$ GSACSM可执行载波内载波检测任务，这是现代VSAT系统的重要特性之一。  
支持配对载波多址（Paired Carrier Multiple Access, PCMA）检测、信号识别及下层信号分析。

---

**R\&S ${ }^{®}$ GSACSM主要功能：**

- 多通道功率测量、历史记录与告警捕获  
- 传统软件频谱分析功能  
- 自适应图形用户界面与定制化解决方案  
- 自动检测识别地面与卫星信号（GSM、DECT、DVB-S、DVB-S2）  
- 自动检测识别PCMA与时分多址（TDMA）信号  
- 自动检测识别下层载波信号与DVB-CID信号  
- 支持多远程频谱分析仪同时操作  
- 支持低带宽低延迟远程监测连接  

图20：信号检测与识别  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-25.jpg?height=575&width=891&top_left_y=1326&top_left_x=549){width="400"}
 

---

**R\&S ${ }^{®}$ GSACSM支持的Rohde & Schwarz监测设备包括：**

- R\&S ${ }^{®}$ TSME6超紧凑测试扫描仪  
- R\&S ${ }^{®}$ NRQ6选择性功率传感器  
- R\&S ${ }^{®}$ FPS/FSW/FSV/FSVA信号与频谱分析仪  
- R\&S ${ }^{®}$ FPL1000信号与频谱分析仪  
- R\&S ${ }^{®}$ ESMD/ESME宽带监测接收机  
- R\&S ${ }^{®}$ MSR200宽带接收机  
- R\&S ${ }^{®}$ EM200数字紧凑型接收机  
- R\&S ${ }^{®}$ MSR4多用途卫星接收机  



### 6.3 R\&S ${ }^{®}$ MSR4 多用途卫星接收机（Multipurpose Satellite Receiver）

R\&S ${ }^{®}$ **MSR4** 是一款硬件监测接收机（hardware monitoring receiver），可提供4个接收通道，频率范围为500 MHz至3 GHz，每个输入通道具有200 MHz的I/Q带宽。  
此外，R\&S ${ }^{®}$ MSR4 还配备2个发射通道，频率范围900 MHz至2.5 GHz，用于信号回放。  
该设备设计用于与外部上变频器（upconverter）和下变频器（downconverter）协同工作，结构紧凑，仅占用1个机架单元（1 RU）高度。  
其核心是具备认知能力的软件定义无线电（Software Defined Radio, SDR），可独立运行通信监测服务器（CSM server），无需额外计算硬件。

图21：R\&S ${ }^{®}$ MSR4 多用途卫星接收机  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-26.jpg?height=216&width=1333&top_left_y=570&top_left_x=549){width="400"}
 

---

### 6.4 信号分析（Signal Analysis）

信号分析仪（signal analyzer），或称频谱分析仪（spectrum analyzer），在空间电子战（space EW）的诸多环节中具有重要作用。  
频谱分析仪是一种宽带仪器，用于获取、分析、显示及解调射频信号（RF signals），其可用于：

- 干扰信号的跟踪、记录、显示与监控  
- 同时分析时间–频率与幅度域中的干扰效应  
- 感兴趣信号的解调  
- 通过流式接口记录目标信号  
- 自动化监测上行与下行链路  

R\&S ${ }^{®}$ **FSW** 是高性能频谱分析仪的典型代表。  
它支持高达8.3 GHz的内部I/Q分析带宽、800 MHz的实时带宽与1 GHz的流式带宽，调谐中心频率范围为9 kHz至90 GHz。  
FSW具有极宽的动态范围，可跟踪微弱信号，并内置前置选择器（preselector）以抑制带外信号。

图22：R\&S ${ }^{®}$ FSW 信号与频谱分析仪  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-26.jpg?height=571&width=897&top_left_y=1682&top_left_x=549){width="400"}
 

---

#### 6.4.1 调制分析（Modulation Analysis）

R\&S ${ }^{®}$ **FSW-K70矢量信号分析选件（Vector Signal Analysis, VSA）**专为R\&S ${ }^{®}$ FSW设计，用于分析数字调制单载波信号（digitally modulated single carrier）至比特级别。  
其清晰的操作结构简化了测量流程，即使在多种分析工具下仍易于操作。  
FSW-K70选件支持最长64,000符号的分析长度，信号分析带宽可达8.3 GHz。

**支持的调制格式包括：**

- FSK系列：2FSK、4FSK至64FSK  
- MSK、GMSK、DMSK  
- BPSK、π/2-BPSK、π/2-DBPSK、QPSK、偏移QPSK（O-QPSK）  
- DQPSK、π/4-DQPSK、$3π/4$-QPSK、8PSK、D8PSK、$3π/8$-8PSK、π/8-D8PSK  
- QAM系列：16QAM、32QAM、64QAM、128QAM、256QAM、512QAM、1024QAM、2048QAM、4096QAM  
- APSK系列：16APSK（DVB-S2）、32APSK（DVB-S2）  
- ASK系列：2ASK、4ASK  
- π/4-16QAM（EDGE）、−π/4-32QAM（EDGE）、SOQPSK  

---

#### 6.4.2 卫星通信链路监测（Monitoring of Satellite Communications Links）

结合R\&S ${ }^{®}$ FSW，R\&S ${ }^{®}$ **FSW-K70M多调制分析选件（multi-modulation analysis option）**与R\&S ${ }^{®}$ **FSW-K70P误码率测量选件（BER PRBS measurements option）**可用于验证卫星通信链路的完整性。

##### DVB-S2X调制分析（DVB-S2X Modulation Analysis）

FSW-K70M选件支持对DVB-S2X信号的分析，能检测帧起始、解调信号头部与有效载荷部分，并显示星座图及相关调制分析参数。

##### 非编码误码率（Uncoded Bit Error Rate）

R\&S ${ }^{®}$ **FSW-K70P**误码率（Bit Error Rate, BER）伪随机二进制序列（Pseudo Random Binary Sequence, PRBS）测量选件是FSW-K70选件的扩展，  
可测量PRBS数据的原始BER（最高至PRBS23）。此外，它还支持基于用户自定义比特序列的BER测量。

---

### 6.5 信号生成（Signal Generation）

信号发生器（signal generator），尤其是射频矢量信号发生器（RF Vector Signal Generator, VSG），用于通过任意数字调制射频信号创建逼真的射频环境。  
VSG在空间电子战（space EW）中的主要用途包括：

- 生成参考载荷信号（如DVB-S2X）  
- 生成逼真的干扰信号以评估系统抗干扰能力  
- 结合宽带射频功率放大器与天线发射真实干扰信号  
- 生成非标准波形以支持专有调制方案研究与验证  
- 多通道RF信号生成，实现合法信号与干扰信号共存  

R\&S ${ }^{®}$ **SMW200A** 是高性能VSG的代表，具备以下特性：

- 频率范围：100 kHz至67 GHz  
- 可选双射频通道（100 kHz至44 GHz）  
- 通道绑定输出最高可达4 GHz调制射频信号  
- 内部基带下的I/Q调制带宽高达2 GHz  
- 支持所有主要数字通信标准  
- 可选集成衰落模拟器（fading simulator），带宽达800 MHz  
- 支持多种关键MIMO模式（$3×3, 4×4, 8×4, 4×8, 4×2×2$）

图23：R\&S ${ }^{®}$ SMW200A 矢量信号发生器  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-28.jpg?height=456&width=887&top_left_y=180&top_left_x=551){width="400"}
 

---

### 6.6 短时事件与干扰（Short-Term Events and Interference）

捕获短时干扰事件需要具备**实时频谱分析（Real-Time Spectrum Analysis, RTSA）**能力的频谱分析仪。  
RTSA通过专用FPGA处理器实现，每秒执行超过2,343,750次快速傅里叶变换（FFT），用于触发并可视化瞬态信号。  
R\&S ${ }^{®}$ FSW可在最短460纳秒事件持续时间下实现100%截获概率（Probability of Intercept, POI）。

图24：R\&S ${ }^{®}$ FSW短时信号持续显示（Persistence Display）  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-28.jpg?height=558&width=883&top_left_y=1017&top_left_x=549){width="400"}
 

由于此类信号具有高度瞬态特征，FSW提供两种专用触发机制以实现捕获：  
- **频率掩模触发（Frequency Mask Trigger）：** 设定频率–幅度上下掩模，超出掩模的信号将被捕获。  
- **概率掩模触发（Probability Mask Trigger）：** 最多可应用于4个区域，当信号概率超过阈值时触发。

图25：频率掩模触发  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-28.jpg?height=561&width=884&top_left_y=2034&top_left_x=551){width="400"}
 

图26：概率掩模触发  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-29.jpg?height=553&width=876&top_left_y=177&top_left_x=554){width="400"}
 

---

### 6.7 射频功率测量（RF Power Measurement）

射频功率传感器（RF power sensor）可通过USB或LAN接口实现远程、自动化的射频信号电平监测，既可位于天线馈点，也可部署于中间节点。  
其测量结果具备可追溯性与校准性，且操作简便。传感器在测量过程中不影响驻波比（Standing Wave Ratio, SWR），并具备低插损与优异互调特性。  
其应用包括监测中频（IF）与射频（RF）功率水平以确保系统正常运行，以及进行长期趋势监测以预测潜在故障。  
Rohde & Schwarz功率计还可直接测量多载波信号的总功率，这在卫星通信应用中尤为实用。

图27：卫星通信中的功率传感器应用  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-29.jpg?height=446&width=1228&top_left_y=1369&top_left_x=549){width="400"}
 

---

### 6.8 手持式干扰追踪（Handheld Interference Hunting）

手持式干扰追踪用于定位干扰源位置，无论其为故意干扰（如电子压制）还是意外干扰（如错误发射的射频源）。  
便携式接收机与定向手持天线为现场操作员提供轻便灵活的干扰定位解决方案。  
便携式测向仪可在短时发射情况下执行方位测量。干扰追踪系统的核心是手持频谱分析仪，例如R\&S ${ }^{®}$ **Spectrum Rider FPH**。

**R\&S ${ }^{®}$ Spectrum Rider FPH主要特性：**

- 频率范围：5 kHz–44 GHz  
- 电池续航时间：6小时  
- 优异的射频性能：DANL典型值−163 dBm，三阶截取点（TOI）+10 dBm  
- 支持带地理定位地图的干扰测向与信号强度分析  
- 配备高性能宽带定向天线  
- 便携轻量：2.5 kg（5.5磅）

图28：R\&S ${ }^{®}$ Spectrum Rider FPH 手持频谱分析仪  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-30.jpg?height=636&width=658&top_left_y=928&top_left_x=540){width="400"}
 

图29：R\&S ${ }^{®}$ Spectrum Rider FPH 显示地理参考干扰图像  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-30.jpg?height=537&width=886&top_left_y=1727&top_left_x=549){width="400"}
 

---

### 6.9 射频记录、分析与回放（RF Recording, Analysis and Playback）

R\&S ${ }^{®}$ **IRAPS™集成记录、分析与回放系统（Integrated Record, Analysis and Playback System）**是一种基于商用现货设备（Commercial Off-The-Shelf, COTS）的高带宽射频记录与回放解决方案。  
IRAPS™可用于捕获长时间射频事件并在受控环境下回放，也可配置为在卫星通信系统（satcom system）的上行、下行与测控链路（TT&C）中触发并记录异常事件。  
此外，该系统还能捕获、记录与分析系统间交互，例如干扰机与卫星链路之间的相互作用。

IRAPS™系统由R\&S ${ }^{®}$ FSW频谱分析仪、R\&S ${ }^{®}$ SMW矢量信号发生器及SigPro处理系统组成。  
SigPro运行记录、回放与分析软件，即ZoomOut。  
ZoomOut软件可使操作员在时间、频率与幅度维度上观察RF频谱的每个采样点。  
R\&S ${ }^{®}$ IRAPS™支持1 GHz端到端记录与回放，录制时间最长可达6小时。

图30：R\&S ${ }^{®}$ IRAPS™ 系统配置  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-31.jpg?height=505&width=886&top_left_y=882&top_left_x=549){width="400"}
 

图31：ZoomOut软件捕获线性调频（chirp）信号  

![](https://cdn.mathpix.com/cropped/2025_10_11_36d2f0ed18d7bea7f356g-31.jpg?height=563&width=881&top_left_y=1550&top_left_x=549){width="400"}
 


## 7 结论（Conclusion）

空间电子战（Space Electronic Warfare, Space EW）是一个复杂且新兴的作战领域，具有众多独特的作战挑战。  
在太空中实现不受限制的作战能力，为军事、商业与民用活动提供了关键支撑。  
传统的太空进入成本壁垒正在迅速降低，使得更多国家和更广泛的商业活动得以开展。  
这些进步带来了新的机遇，但同时也带来了对空间与地面通信、导航、气象及侦察活动的新风险。  
各国政府已认识到基于太空作战的优势，正在采取措施以最大化自身利益，并制定策略削弱对手的能力。

上世纪60年代，太空竞赛（Space Race）正式开启。  
60年后的今天，新一轮竞赛正围绕着对太空环境及其地面支援体系的控制展开。  
在这场新的太空竞赛中，最前沿的竞争领域是——对电磁域（electromagnetic domain）控制权的无形较量。



## Rohde \& Schwarz（罗德与施瓦茨）

罗德与施瓦茨（Rohde & Schwarz）技术集团是全球推动“更安全与更互联世界”愿景的先驱之一，  
其领先的测试与测量（test & measurement）、技术系统（technology systems）、网络与网络安全（networks & cybersecurity）解决方案为全球用户提供了坚实支持。  
该集团成立于85年前，总部位于德国慕尼黑，是全球工业与政府客户值得信赖的合作伙伴。  
作为一家独立企业，罗德与施瓦茨在全球70多个国家设有广泛的销售与服务网络。

官网： [www.rohde-schwarz.com](https://www.rohde-schwarz.com)





# AEP-84 Volume  I

北约联盟工程出版物AEP-84

## AEP-84 和 STANAG 4586 之间的关系

*   **STANAG 4586 是北约（NATO）一项顶级的标准化协议**。它的目标是为北约联合/多军种环境下无人机系统（UAS）的互操作性定义架构、接口、通信协议、数据元素和消息格式。遵守 STANAG 4586 将提高北约联合/多军种的任务灵活性和效率。
*   **AEP-84（北约联盟工程出版物）是 STANAG 4586 协议下的具体实施或详细技术文件**。它详细阐述了 STANAG 4586 所需的标准。
    *   **AEP-84 Volume I** 于2017年4月发布，其颁布记录在 STANAG 4586 中。它包含了支持光电/红外 (EO/IR)、合成孔径雷达 (SAR)、通信中继以及武器载荷等在数据链接口 (DLI) 上的消息。
    *   **AEP-84 Volume II** 也于2017年4月发布，其颁布同样记录在 STANAG 4586 中。Volume II 在 Volume I 的基础上进行了更新和改进，例如增加了对 MISB 标准的引用、更新了 STANAG 7085 兼容数据链的消息，以及通过通用路由定义（CRD）的扩展实现了可互操作的任务规划。Volume II 的数据元素结构允许与 Volume I 的数据元素直接映射，从而实现两者系统组件之间的互操作性。
*   AEP-84 Volume I 和 Volume II 都详细说明了无人机控制系统（UCS）中接口的标准要求，包括数据链接口（DLI）、指挥与控制接口（CCI）和人机界面（HCI）。
*   **遵守 AEP-84 文件中的标准，有助于实现 STANAG 4586 定义的互操作性级别（LOI）**。特别是，遵守 STANAG 4586（包括AEP-84及引用的其他标准）能够实现 Level 2 或更高级别的互操作性。这意味着 AEP-84 是实现 STANAG 4586 互操作性目标的具体指导文件。
*   STANAG 4586 由一个多国维护支持团队 (CST) 持续维护和更新，以修正错误、吸取经验教训并整合新要求。AEP-84 不同卷和版本（例如 Volume I Edition A Version 1 和 STANAG 4586 Edition 4 Using AEP-84 Volume II）之间的版本号差异也进一步表明 AEP-84 是 STANAG 4586 的具体实施版本。

## 第一章 介绍

### 1.1 目标

本协议的目的是促进现有及未来无人机系统（UAS）在北约联合/联合服务环境中的互操作性。互操作性是必需的，因为它将显著增强部队的作战能力。互操作性将通过共享资产和共同利用UAS生成的信息，提高灵活性和效率以完成任务目标。其目标是实现UAS中地面段（如UCS）、空中段（如无人机（UA））以及指挥、控制、通信、计算机与情报（C4I）段在北约联合/联合环境中的互操作性。仅遵守本协议并不等同于实现各种UAS之间的完全互操作性。具体而言，本协议不涉及平台和/或传感器操作员的熟练程度，也不定义实现完全互操作性所需的作战概念（CONOPs）。互操作性级别3-5假设有支持非本单位负责的UA及其载荷操作的作战概念。规范的标准UCS接口的实施还将促进不同类型UAS集成到北约联合/联合服务战场环境中。本文所指定的标准化将支持遗留及未来UAS的互操作性。

### 1.2 协议

参与国家同意在其各自的UAS中全部或部分实施本文所呈现的标准，以实现预期的互操作性级别（LOI）。

### 1.3 参考文件

下列标准化协议（STANAG）、军事标准（MILSTD）、国际电信联盟（ITU）建议和国际标准（IS）通过本文中的引用构成本STANAG的条款。发布时，所示版本为有效版本。所有建议和标准均可能修订，基于本STANAG的协议各方被鼓励考虑应用最新版本的STANAG、MILSTD、ICAO文件、ITU建议和以下IS。北约标准办公室（NSO）维护当前有效STANAG的登记。

| AAP-6 (V) - 定义                                               |
| :------------------------------------------------------------- |
| ADatP-3 - 北约消息文本格式系统（Formets）- Formets（Conformets）概念 |
| AEDP-2 - 北约ISR互操作性架构                                   |
| AEDP-4 - STANAG 4545，北约次级影像格式（NSIF）实施指南         |
| APP 11 - 北约消息目录（NMC）                                   |
| 国际电话电报咨询委员会（CCITT）v.42bis 调制解调器标准，支持28.8 kbps错误更正与压缩 |
| 通用路径定义（CRD ICD 2.0.2.0）                               |
| 数字特征分析数据（DFAD）                                       |
| ECMA Script 脚本语言（ECMA Script 262）                        |
| 电子工业协会（EIA）RS-170                                     |
| 文件传输协议（FTP），IETF，RFC 959                             |
| 超文本传输协议（HTTP）版本1.1，IETF RFC 2616                   |
| ICAO文件 - 空中规则与空中交通服务，文档4444-RAC/501            |
| 电气和电子工程师协会（IEEE）网络标准802                        |
| 互联网协议（IP）（IPv4（RFC 791, 792, 919,922, 1112））        |
| IPv6（RFC 2460-4, 2375, 2236）                                 |
| ISO/DIS 9241-3 - 视觉显示需求                                  |
| ISO/DIS 9241-8 - 显示颜色要求                                  |
| ISO/工作文档 9241-9 - 非键盘输入设备                           |
| ISO/DIS 9241-10 - 对话原则                                     |
| ISO/工作文档 9241-12 - 信息展示                                 |
| ISO/CD 9241-13 - 用户指导                                       |
| ISO/DIS 9241-14 - 菜单对话                                     |
| ISO/CD 9241-16 - 直接操作对话                                   |
| ISO/CD 13406-2 - 平板显示器                                    |
| 国际标准化组织/国际电工委员会 ECMAScript语言规范 - ISO/IEC 16262 |
| MIL-STD-2525B - 通用作战符号                                   |
| MIL-STD-2401 - 世界大地测量系统-84（WGS-84）                    |
| 北约C3技术架构（NC3TA）/版本7（全部5卷）                       |
| 北约数据政策2000 - 12.20-00                                   |
| 网络时间协议（V3），1992年4月9日，NTP（RFC-1305）              |
| 电影与电视工程师协会（SMPTE）170 M                             |
| STANAG 1059 地理实体字母代码                                   |
| STANAG 3150 编目 - 统一供应分类系统                             |
| STANAG 3151 编目 - 统一物项识别系统                             |
| STANAG 3377 AR（第6版）- 空中侦察情报报告表                   |
| STANAG 3809 数字地形高程数据（DTED）交换标准                   |
| STANAG 4250 北约开放系统互联参考模块-第1部分总述               |
| STANAG 4545 北约次级影像格式（NSIF）                           |
| STANAG 4559 北约标准影像库接口（NSILI）                        |
| STANAG 4575 北约高级数据存储接口（NADSI）                      |
| STANAG 4607 北约地面移动目标指示格式（NGMTIF）                 |
| STANAG 4609 北约数字动态图像标准                               |
| STANAG 7023 空中侦察初级影像数据标准                           |
| STANAG 7024 影像空中侦察录音带标准                             |
| STANAG 7074 数字地理信息交换标准（DIGEST）                     |
| STANAG 7085 影像系统互操作数据链路                             |
| STDI-0002，美国国家影像与制图局，“国家影像传输格式（NITF）受控扩展（CE）汇编”，CMETAA支持数据扩展。 |
| 传输控制协议（TCP）（IETF STD 7） RFC 793 (TCP)                |
| 美国消息文本格式（USMTF）                                      |
| 用户数据报协议（UDP）（IEN 88, RFC 768, 1122）                 |
| 可变消息格式（VMF）                                           |

### 1.4 概述

本AEP-84第一卷的大纲如下：

- 第1章 - 介绍
- 第2章 - AEP-84第一卷中使用的术语和定义
- 第3章 - 提供关于通过标准化核心UCS（CUCS）与无人机（UA）、CUCS与外部C4I系统之间接口实现UAS互操作性的顶层描述。它还规定了CUCS应向UAS操作员提供的人机界面（HCI）需求。描述了支持这些接口的标准功能UCS架构需求，并指向后续3章详细说明STANAG 4586所需标准。同时列出了实现UAS互操作性所需的其他STANAG、标准和协议，并提供了其实施的一些考虑。
- 第4章 - 数据链接口（DLI）
- 第5章 - 指挥控制接口（CCI）
- 第6章 - 人机界面（HCI）

### 1.5 协议细节

STANAG 4586定义了体系结构、接口、通信协议、数据元素、消息格式，并识别相关STANAG，遵守这些要求是操作和管理多个遗留及未来无人机在复杂北约联合/联合服务作战环境中的前提。UCS体系结构涵盖核心UCS以处理无人机通用/核心流程、数据链接口（DLI）以支持遗留及未来UAS操作、指挥控制接口（CCI）用于无人机及载荷数据传播以支持遗留及演进的北约C4I系统和架构，以及支持与UAS操作员接口的人机界面（HCI）需求。定义了五个互操作性级别以满足作战需求。AEP-84第一卷包含支持电光/红外（EO/IR）、合成孔径雷达（SAR）、通信中继及装备（如武器、载荷等）的消息，跨越DLI。随着载荷的增加，STANAG将相应更新以包含这些载荷。指挥控制接口采用来自北约FORMETS、ADatP-3 Build 11的适用消息。随着该系统被基于位的消息格式替代，本STANAG也将相应更新。此外，本STANAG支持北约空军武器组（NAFAG）北约ISR互操作性架构（NIIA），其遵循NIIA指定标准。

### 1.6 第一版变更

基于加拿大资助的STANAG 4586第一版通过模拟环境的验证工作结果，PG/35专家组（ST）在北约工业咨询组（NIAG）研究组73（S/G 73）支持下进行进一步分析，以及来自支持UAS开发的国家项目和产业的反馈，第一版的变更已被ST识别、分析并达成一致，并提交各国审查和批准。变更内容包括：

- 互操作性级别定义修订，分离载荷控制（LOI 3）与无人机控制（LOI 4）
- 人机界面（HCI）重新定义为核心无人机控制系统（CUCS）能力需求，而非像DLI或CCI那样的接口
- HCI指导已移至STANAG 4586实施指南
- 支持UCS组件（如核心UCS和无人机特定模块（VSM））配置定义的额外消息和字段已加入DLI
- 修正技术和管理错误，编辑修改以澄清要求

### 1.7 STANAG维护与更新

STANAG 4586将由STANAG管理者，在多国管理支持团队（CST）支持下进行维护和更新，以修正潜在错误、纳入经验教训改进和新需求。CST对该STANAG持续高度关注。新版本发布后，将持续收集反馈以指导后续版本。实施经验对CST极具价值，应反馈给STANAG 4586管理者John Mayer先生，PEO (U&W) CSI，电子邮件：john.e.mayer1@navy.mil。


## 第二章 术语和定义

### 1. 缩略语和缩写

本协议中使用以下缩略语：

| 缩略语 | 英文全称 | 定义 |
| :--- | :--- | :--- |
| A | A |  |
| ACCS | Army Command and Control System (US) / Air Command and Control System (NATO) | 美国陆军指挥控制系统 / 北约空中指挥控制系统 |
| Accel | Acceleration | 加速度 |
| ACK | Acknowledge | 确认 |
| ACM | Airspace Control Means | 空域控制手段 |
| ACO | Airspace Control Order | 空域控制命令 |
| ADatP-3 | Allied Data Publication - 3 | 盟军数据出版物 - 3 |
| ADS | Automatic Dependent Surveillance | 自动相关监视 |
| ADU | Air Defence Unit | 防空单位 |
| AGL | Above Ground Level | 地面以上高度 |
| AMPS | Aviation Mission Planning System | 航空任务规划系统 |
| AMPN | Amplification | 放大 |
| ANSI | American National Standards Institute | 美国国家标准协会 |
| AOA | Angle Of Attack | 攻角（迎角） |
| AOI | Area Of Interest | 关注区域 |
| AP | Allied Publication / Alliance Publication | 盟军出版物 / 联盟出版物 |
| API | Application Program(ming) Interface | 应用程序接口 |
| ASCII | American Standard Code for Information Interchange | 美国信息交换标准代码 |
| ASM | Air Space Management | 空域管理 |
| ASW | Anti-Submarine Warfare | 反潜战 |
| ATC | Air Traffic Control | 空中交通管制 |
| ATP | Allied Tactical Publication | 盟军战术出版物 |
| ATR | Automatic Target Recognition | 自动目标识别 |
| ATS | Air Traffic Services | 空中交通服务 |
| B | B |  |
| BDA | Battle Damage Assessment | 战损评估 |
| BER | Bit Error Rate | 误码率 |
| BIT | Built-in-Test | 内置测试 |
| BITE | Built-in-Test Equipment | 内置测试设备 |
| BLOS | Beyond Line of Sight | 超视距 |
| BOM | Bit-Oriented Message | 位导向消息 |
| C | C |  |
| C2 | Command and Control | 指挥与控制 |
| C4I | Command, Control, Communications, Computers and Intelligence | 指挥、控制、通信、计算机与情报 |
| CBIT | Continuous Built-in-Test | 连续内置测试 |
| CBRN | Chemical, Biological, Radiological and Nuclear | 化学、生物、放射性和核 |
| CCI | Command & Control Interface | 指挥与控制接口 |
| CCISM | Command and Control Interface Specific Module | 指挥与控制接口专用模块 |
| CDL | Common Data Link | 通用数据链 |
| CDT | Control Data Terminal | 控制数据终端 |
| CEN | European Standardisation Organisation | 欧洲标准化组织 |
| CEP | Circular Error Probability | 圆形误差概率 |
| CFOV | Centre Field of View | 视场中心 |
| CG | Centre of Gravity | 重心 |
| CGS | Common Ground Segment / Common Ground Station / Common Ground System | 通用地面段 / 通用地面站 / 通用地面系统 |
| CIRC | Circular | 圆形 |
| CJTF | Combined Joint Task Force | 联合联合特遣部队 |
| CL | Connectionless | 无连接 |
| Cm | Centimetres | 厘米 |
| CO | Connection Oriented | 面向连接 |
| COE | Common Operating Environment | 通用操作环境 |
| CONOPS | Concept of Operations | 作战概念 |
| COP | Common Operational Picture | 共同作战图像 |
| CORBA | Common Object Request Broker Architecture | 通用对象请求代理架构 |
| COTS | Commercial-Off-The-Shelf | 商业现货产品 |
| CR | Communications Relay | 通信中继 |
| CRD | Common Route Definition | 通用路线定义 |
| CRT | Cathode Ray Tube | 阴极射线管 |
| CUCS | Core UA Control System | 核心无人机控制系统 |
| D | D |  |
| DC | Direct Current | 直流电 |
| DCE | Distributed Computing Environment | 分布式计算环境 |
| DCM | Data Link Control Module | 数据链控制模块 |
| DIGEST | Digital Geographic Information Exchange Standard | 数字地理信息交换标准 |
| DII | Defence Information Infrastructure | 国防信息基础设施 |
| DII/COE | Defence Information Infrastructure / Common Operating Environment | 国防信息基础设施 / 通用操作环境 |
| DIN | Deutsche Institut fur Normung | 德国标准化学会 |
| DL | Data Link | 数据链 |
| DLI | Data Link Interface | 数据链接口 |
| DoD | Department of Defence | 国防部 |
| DTED | Digital Terrain Elevation Data | 数字地形高程数据 |
| E | E |  |
| ECM | Electronic Counter Measures | 电子对抗措施 |
| EIA | Electronic Industries Association | 电子工业协会 |
| EIA/IS | EIA Interim Standard | EIA 临时标准 |
| ELINT | Electronic Intelligence | 电子情报 |
| EMCON | Emission Control | 发射控制 |
| EO | Electro-Optical | 电光 |
| EO/IR | Electro Optical / Infrared | 电光 / 红外 |
| EP | External pilot | 外部飞行员 |
| ERF | Ego-Referenced Frame | 自我参照坐标系 |
| ERS | Emergency Recovery System | 紧急恢复系统 |
| ESM | Electronic Support Measures | 电子支援措施 |
| ETA | Estimated Time of Arrival | 预计到达时间 |
| ETSI | European Telecommunications Standards Institute | 欧洲电信标准协会 |
| EW | Electronic Warfare | 电子战 |
| F | F |  |
| FLIR | Forward Looking Infrared | 前视红外线 |
| FOB | Forward Operations Base | 前进作战基地 |
| FOV | Field of View | 视场 |
| FT | Flight Termination | 飞行终止 |
| FTP | File Transfer Protocol | 文件传输协议 |
| G | G |  |
| GMT | Greenwich Mean Time | 格林尼治标准时间 |
| GMTI | Ground Moving Target Indicator | 地面运动目标指示器 |
| GOTS | Government Off-The-Shelf | 政府现货产品 |
| GPS | Global Positioning System | 全球定位系统 |
| GUI | Graphical User Interface | 图形用户界面 |
| H | H |  |
| HALE | High Altitude, Long Endurance | 高空长航时 |
| HCl | Human Computer Interface | 人机接口 |
| HF | High Frequency | 高频 |
| HSI | Hyperspectral Imagery | 高光谱成像 |
| HL | Hand Launched | 手抛式 |
| HTML | Hyper Text Mark-up Language | 超文本标记语言 |
| HTTP | Hypertext Transfer Protocol | 超文本传输协议 |
| Hz | Hertz, cycles per second | 赫兹，周期每秒 |
| I | I |  |
| I/O | Input / Output | 输入 / 输出 |
| IA | International Agreement | 国际协议 |
| ICAO | International Civil Aviation Organisation | 国际民航组织 |
| ID | Identification | 身份识别 |
| IDD | Interface Design Description / Interface Definition Document | 接口设计说明 / 接口定义文档 |
| IEA | Information Exchange Agreements | 信息交换协议 |
| IEC | International Enterprise Committee / International Electrotechnical Commission | 国际电工委员会 |
| IEEE | Institute of Electrical and Electronics Engineers | 电气电子工程师协会 |
| IER | Information Exchange Requirements | 信息交换需求 |
| IES | Imagery Exploitation System | 图像利用系统 |
| IETF | Internet Engineering Task Force | 互联网工程任务组 |
| IFF | Identification Friend or Foe | 识别友军或敌军 |
| IL | Image Library | 图像库 |
| INS | Inertial Navigation System | 惯性导航系统 |
| IP | Internet Protocol / Internal Pilot | 互联网协议 / 内部飞行员 |
| IPS | Image Print Services | 图像打印服务 |
| IPX | NetWare Transport Protocol | NetWare 传输协议 |
| IR | Infrared | 红外 |
| IRS | Interface Requirements Specifications | 接口需求规范 |
| ISAR | Inverse Synthetic Aperture Radar | 逆合成孔径雷达 |
| ISDN | Integrated Services Digital Network | 综合业务数字网 |
| ISG | Industry Support Group | 行业支持组 |
| ISO | International Organisation for Standardisation | 国际标准化组织 |
| ISO/CD | Committee Draft of ISO | ISO 委员会草案 |
| ISO/DIS | Draft International Standard of ISO | ISO 国际标准草案 |
| ISR | Intelligence, Surveillance, Reconnaissance | 情报、监视与侦察 |
| ISTAR | Intelligence, Surveillance, Target Acquisition and Reconnaissance | 情报、监视、目标获取与侦察 |
| ITDP | International Technology Demonstration Program | 国际技术示范计划 |
| ITU | International Telecommunication Union | 国际电信联盟 |
| ITU-T(SB) | International Telecommunications Union - Telecommunications (Standardisation Bureau) | 国际电信联盟 - 电信（标准化局） |
| J | J |  |
| JFACC | Joint Force Air Component Commander | 联合空中兵力指挥官 |
| JFC | Joint Force Commander | 联合兵力指挥官 |
| JPEG | Joint Photographic Experts Group | 联合图像专家组 |
| JSH | JASA Standards Handbook | JASA 标准手册 |
| JSWG | JASA Standards Working Group | JASA 标准工作组 |
| JTA | Joint Technical Architecture | 联合技术架构 |
| JTF | Joint Task Force | 联合特遣部队 |
| JTFC | Joint Task Force Commander | 联合特遣部队指挥官 |
| K | K |  |
| Kilo | 1,000 | 一千 |
| Km | Kilometres | 千米 |
| L | L |  |
| L&R | Launch and Recovery | 发射与回收 |
| L-16 | Link-16 (TADIL-J message standard) | Link-16 (TADIL-J 消息标准) |
| LIDAR | Light Detection And Ranging | 激光探测与测距 |
| LAN | Local Area Network | 局域网 |
| LAS | Local Access Subsystem | 本地接入子系统 |
| LB | Land-Based | 陆基 |
| LCD | Liquid Crystal Display | 液晶显示器 |
| LOI | Level of Interoperability | 互操作级别 |
| LOS | Line of Sight | 视距 |
| LRF | Laser Range Finder | 激光测距仪 |
| M | M |  |
| MAV | Micro Air Vehicle | 微型无人机 |
| Mb | Megabit | 兆比特 |
| MB | Megabyte | 兆字节 |
| Mb/s | Megabits per second | 兆比特每秒 |
| MB/s | Megabytes per second | 兆字节每秒 |
| Met | Meteorological | 气象 |
| MGRS | Military Grid Reference System | 军事网格参考系统 |
| MIJI | Meaconing, Intrusion, Jamming, and Interference | 信号掩蔽、入侵、干扰和干扰 |
| MIL | Military | 军用 |
| MIL-STD | Military Standard | 军用标准 |
| MIME | Multipurpose Internet Mail Extension | 多用途互联网邮件扩展 |
| MIN | Minimum | 最小 |
| MMP | Modular Mission Payload | 模块化任务载荷 |
| MMS | Manufacturing Messaging Specification | 制造消息规范 |
| MOA | Memorandum of Agreement | 协议备忘录 |
| MOTS | Military Off-The-Shelf | 军用现货产品 |
| MOU | Memorandum of Understanding | 谅解备忘录 |
| MP | Mission Planning / Mission Planner | 任务规划 / 任务规划员 |
| MPEG | Motion Pictures Experts Group | 动态影像专家组 |
| MPO | Mission Planning Operator / Mission / Payload Operator | 任务规划操作员 / 任务 / 载荷操作员 |
| MPS | Metres per second | 米每秒 |
| MSE | Mobile Subscriber Equipment | 移动用户设备 |
| Msg | Message | 消息 |
| MSI | Multi-Spectral Imagery | 多光谱成像 |
| MSK | Minimum Shift Keying | 最小移频键控 |
| MSL | Mean Sea Level | 平均海平面 |
| MTF | Message Text Formats | 消息文本格式 |
| MTI | Moving Target Indicator | 运动目标指示器 |
| N | N |  |
| N/A | Not Applicable | 不适用 |
| NATO | North Atlantic Treaty Organisation | 北大西洋公约组织 |
| NBC | Nuclear, Biological and Chemical | 核、生物和化学 |
| NC3TA | NATO C3 Technical Architecture | 北约C3技术架构 |
| NCIS | NATO Common Interoperability Standards | 北约通用互操作标准 |
| NCOE | NATO Common Operating Environment | 北约通用操作环境 |
| NCSP | NC3 Common Standards Profile | NC3 通用标准配置文件 |
| Near RT | Near Real Time | 近实时 |
| NED | NATO Effective Date | 北约生效日期 |
| NIIA | NATO ISR Interoperability Architecture | 北约ISR互操作架构 |
| NIMP | NATO Interoperability Management Plan | 北约互操作管理计划 |
| NIIRS | National Imagery Interpretation Rating Scale | 国家图像解释等级标准 |
| NIPD | NATO Interoperability Planning Document | 北约互操作规划文件 |
| NITF | National Imagery Transmission Format | 国家图像传输格式 |
| NITFS | National Imagery Transmission Format Standard | 国家图像传输格式标准 |
| Nm | Nanometre | 纳米米 |
| NNAG | NATO Naval Armaments Group | 北约海军军备组 |
| NOSIP | NATO Open System Interconnection Profile | 北约开放系统互联配置文件 |
| NOTS | NATO Off-The-Shelf | 北约现货产品 |
| NRT | Non-Real Time | 非实时 |
| NSE | Non Standard Equipment | 非标准设备 |
| NSIF | NATO Secondary Imagery Format | 北约次级图像格式 |
| NSIL | NATO Standard Image Library | 北约标准图像库 |
| NSILI | NATO Standard Image Library Interface | 北约标准图像库接口 |
| NSO | NATO Standardization Office | 北约标准化办公室 |
| NSR | NATO Staff Requirements | 北约参谋需求 |
| NTF | Network File Server | 网络文件服务器 |
| NTIS | NATO Technical Interoperability Standards | 北约技术互操作标准 |
| NTSC | National Transmission Standards Committee | 国家传输标准委员会 |
| O | O |  |
| OPFOR | Opposing Force | 敌对部队 |
| OPS | Operations | 作战 |
| OSE | Open System Environment | 开放系统环境 |
| OSI | Open System Interconnection (model) | 开放系统互联（模型） |
| OTH | Over The Horizon | 超视距 |
| OTH-T | Over The Horizon - Targeting | 超视距 - 目标指示 |
| P | P |  |
| PDF | Portable Document Format | 便携式文档格式 |
| PDU | Power Distribution Unit | 电力分配单元 |
| PG/35 | Project Group 35 | 项目组35 |
| PO | Payload Operator | 载荷操作员 |
| Pyld | Payload | 载荷 |
| Q | Q |  |
| QoS | Quality of Service | 服务质量 |
| R | R |  |
| Rad | Radians | 弧度 |
| RAID | Redundant Array of Inexpensive / Independent Disks | 独立冗余磁盘阵列 |
| RECCEXRE | Reconnaissance Exploitation Report | 侦察利用报告 |
| RF | Radio Frequency | 无线频率 |
| RFC | Request for Comment | 征求意见稿 |
| ROS | Relief on Station / Rules of Safety | 站点救援 / 安全规则 |
| RP | Route Plan | 路线计划 |
| Rpt | Report | 报告 |
| RT | Real Time | 实时 |
| RTP | Real Time Protocol / Real Time Processor | 实时协议 / 实时处理器 |
| Rx | Receive | 接收 |
| S | S |  |
| SA | Situational Awareness | 情境感知 |
| SALUTE | Size, Activity, Location, Unit, Time, Equipment | 规模、活动、位置、单位、时间、装备 |
| SAR | Synthetic Aperture Radar / Search And Rescue | 合成孔径雷达 / 搜救 |
| SATCOM | Satellite Communications | 卫星通信 |
| SB | Sea-based | 海基 |
| SEC | Seconds | 秒 |
| SED | Signal External Descriptor | 信号外部描述符 |
| SIGINT | Signals Intelligence | 信号情报 |
| SINCGARS | Single Channel Ground and Airborne Radio System | 单通道地面和空载无线电系统 |
| SMPTE | Society of Motion Picture and Television Engineers | 电影与电视工程师协会 |
| SMTP | Simple Mail Transfer Protocol | 简单邮件传输协议 |
| SNR | Signal to Noise Ratio | 信噪比 |
| SSR | Secondary Surveillance Radar | 二次监视雷达 |
| ST | Specialist Team | 专家组 |
| STANAG | (NATO) Standardization Agreement | （北约）标准化协议 |
| T | T |  |
| TBD | To Be Defined | 待定义 |
| TCDL | Tactical Common Data Link | 战术通用数据链 |
| TCP/IP | Transfer Control Protocol / Internet Protocol | 传输控制协议 / 互联网协议 |
| Tgt | Target | 目标 |
| TV | Television | 电视 |
| TX | Transmit | 发送 |
| U | U |  |
| UA | Unmanned Aircraft | 无人机 |
| UAV | Unmanned Aerial Vehicle / Uninhabited Aerial Vehicle | 无人航空器 / 无人飞行器 |
| UAS | Unmanned Aircraft System | 无人航空系统 |
| UB | Unified Build | 统一构建 |
| UCAV | Unmanned / Uninhabited Combat Aerial Vehicle | 无人战斗航空器 |
| UDP | User Datagram Protocol | 用户数据报协议 |
| UES | UA Exploitation System | 无人机利用系统 |
| UHF | Ultra High Frequency | 超高频 |
| UI | User Interface | 用户界面 |
| UJTL | Universal Joint Task List | 通用联合任务列表 |
| UPS | Uninterruptible Power Supply | 不间断电源 |
| URL | Uniform Resource Locator | 统一资源定位符 |
| USIS | United States Imagery Standards | 美国图像标准 |
| USMTF | United States Message Text Formatting | 美国消息文本格式 |
| UTC | Universal Time Coordinated | 协调世界时 |
| UTM | Universal Transverse Mercator | 通用横轴墨卡托投影 |
| V | V |  |
| VCR | Video Cassette Recorder | 视频录像机 |
| VDL | VHF Data Link | 超高频数据链 |
| VDT | Vehicle Data Terminal | 无人机数据终端 |
| VDU | Visual Display Unit | 可视显示单元 |
| VHF | Very High Frequency | 特高频 |
| VISP | Video Imagery Standards Profile | 视频图像标准配置文件 |
| VMAP | Vector Map | 矢量地图 |
| VMF | Variable Message Format | 可变消息格式 |
| VSM | Vehicle Specific Module | 无人机专用模块 |
| W | W |  |
| WAN | Wide Area Network | 广域网 |
| WAS | Wide Area Subsystem | 广域子系统 |
| WGS-84 | World Geodetic System - 84 | 世界大地测量系统-84 |
| WIMP | Windows, Icons, Mouse and Pull-down / pop-up (menus) | 窗口、图标、鼠标和下拉 / 弹出（菜单） |
| WP | Waypoint | 航路点 |
| WRF | World-Referenced Frame | 世界参照坐标系 |
| X | X |  |
| XML | Extended Mark-up Language | 可扩展标记语言 |
| Y | Y |  |
| Z | Z |  |




### 2. 术语和定义

本协议中使用以下术语和定义：

| 术语                                                         | 定义                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| Advisories<br>通知                                           | 一种提醒，要求机组人员知晓但不要求立即关注或立即采取行动。   |
| Air Reconnaissance<br>空中侦察                               | 通过空中目视观察或利用机载传感器收集情报信息。               |
| Air Traffic Control (ATC)<br>空中交通管制                    | 提供以下目的的服务：a）防止飞机之间以及机动区内飞机与障碍物之间的碰撞；b）加快和维持有序的空中交通流动。 |
| Aircraft Handover<br>飞机接管                                | 将飞机控制权从一个管控机构转移到另一个管控机构的过程。       |
| Alert<br>警报                                                | 一种或组合信号，通知机组存在警告、注意或通知状态，并可能告知警告、注意或通知状态的性质。 |
| Allied Data Publication - 3 (ADatP-3)<br>盟军数据出版物-3    | 北约消息文本格式系统（FORMETS）为标准化的字符导向消息文本格式（MTF）提供规则、结构和词汇，可用于手动和计算机辅助操作环境。FORMETS在盟军数据出版物第3号（ADatP-3）中有规范。 |
| Altitude<br>高度                                             | 从平均海平面测量的某一水平面、点或视为点的物体的垂直距离。与无人机操作最相关的术语有： <br> - 绝对高度：飞机正上方直接测量的高度。 <br> - 临界高度：飞机或吸气式制导导弹停止正常性能的高度。 <br> - 真正高度：从平均海平面测量的飞机高度。 |
| Analysis<br>分析                                             | 在情报处理中，对信息进行审查以识别重要事实供后续解释的情报循环阶段。 |
| Automated Take-off and Landing<br>自动起降                   | 无人机在完成规划和飞行前准备并获准发射后，通过单一命令发射的能力。包括解除固定装置释放无人机、无人机飞向第一个航路点的飞行，以及无人机在停放位置距离着陆点不小于100米时，通过单一命令着陆并固定的能力。 |
| Battle Damage Assessment (BDA)<br>战损评估                   | 评估所有空中攻击（例如炸弹、火箭、扫射等）对目标的影响。     |
| Byte<br>字节                                                 | 八个bit。                                                    |
| Cassette<br>胶卷盒                                           | 摄影中可重装的容器，用于未曝光或已曝光的感光材料，可在有光条件下从相机或暗房设备中取出。 |
| Cautions<br>注意                                             | 一种提醒，表示潜在危险情况，要求机组立即知晓但不要求立即采取行动。 |
| Chemical Monitoring<br>化学监测                              | 持续或周期性地确定化学剂是否存在的过程。                     |
| Classification<br>分类                                       | 识别接触目标的独特特征，以区分军事和商业目标并确定其类别和类型。 |
| Command and Control<br>指挥与控制                            | 正式指挥官对指定部队行使权力和指挥以完成任务。               |
| Command and Control Interface (CCI)<br>指挥与控制接口        | 无人机控制系统核心与外部C4I系统之间的接口，规定了通过通用标准接口实现数据交换的要求。 |
| Command and Control Interface Specific Module (CCISM)<br>指挥与控制接口专用模块 | CCI与不兼容C4I系统之间的软件和/或硬件转换，作为无人机系统与特定“客户”（一个或多个C4I系统）之间连接的组成部分，功能从简单格式转换到适配C4I需求的用户特定应用。 |
| Command and Control Information System<br>指挥与控制信息系统 | 集成的系统，包括 doctrine、程序、组织结构、人员、设备、设施及通信，为各级授权提供及时充分的数据以计划、指导和控制活动。 |
| Commonality<br>通用性                                        | 两个或多个国家或同一国家不同军种通用的可互换物品。           |
| Communications Plan<br>通信计划                              | 覆盖所有通信方面的总体计划，包括数据链计划。                 |
| Compatibility<br>兼容性                                      | 产品、过程或服务在特定条件下共同使用以满足相关要求且无不可接受干扰的适用性。 |
| Component<br>组件                                            | 物流中具有特定功能的部件或部件组合，只能作为整体安装或更换。 |
| Compression<br>压缩                                          | 以更少位数传输相同数据量的能力。包括多种技术，如CCITT传真压缩标准（Group 3）、调制解调器数据通信压缩标准（CCITT V.42bis）、文件压缩格式（ARC、ZIP）等，广泛应用于备份、电子表格和数据库。某些数据如位图图形可压缩至原尺寸极小部分。 |
| Concept of Operations<br>作战概念                            | 指挥官为完成任务而选择的明确简洁的行动方针陈述。             |
| Continuous Strip Imagery<br>连续条带影像                     | 沿飞行线长度连续不断的地形条带影像。                         |
| Control Data Terminal<br>控制数据终端                        | 数据链元件，包含无人机内的无人机数据终端（VDT）和地面或空中（如指挥与控制飞机）上的控制数据终端（CDT）。CDT与VDT的连接是实现2至5级互操作性的前提。 |
| Controlled Airspace<br>管制空域                              | 定义尺寸的空域，向管制航班提供空中交通管制服务（如需要管制机构批准或协调，某些机动被禁止或限制，或需监督）。 |
| Core UCS (CUCS)<br>无人机控制系统核心                        | 为无人机操作员提供执行所有任务阶段的功能，支持DLI、CCI和HCI要求，提供高分辨率计算机生成的图形用户界面，使合格操作员能控制不同类型无人机及其载荷。 |
| Countermeasures<br>对抗措施                                  | 利用设备和/或技术削弱敌方活动作战效能的军事科学形式。        |
| Damage Assessment<br>损害评估                                | 确定攻击对目标的影响。                                       |
| Data Communication<br>数据通信                               | 根据协议在功能单元之间传输信息。                             |
| Data Link<br>数据链                                          | 实现数据传输和接收的地点间连接手段。                         |
| Data Link Interface (DLI)<br>数据链接口                      | 无人机专用模块（VSM）与UCS核心的接口，标准化消息和格式，支持多种无人机与北约标准控制站间通信。 |
| Data Link Plan<br>数据链计划                                 | 可用链路的细节，包括使用的频段和频率，与航路点相关联并提供操作员提示的行动细节。 |
| Dispensing Payloads<br>释放载荷                              | 无人机任务目标中释放的物体，包括武器投放或远程传感器部署等。 |
| Electromagnetic Spectrum<br>电磁频谱                         | 电磁辐射频率范围，从零到无穷大。                             |
| Electronic Warfare (EW)<br>电子战                            | 利用电磁频谱的军事行动，包括电磁发射的搜索、截获、识别，使用电磁能量（含定向能）削弱敌方电磁频谱使用，以及保障友军有效使用。 |
| Emergency Recovery Plan<br>紧急恢复计划                      | 失联等故障发生时，无人机需自动执行安全规则（ROS）恢复行动，由任务规划阶段选择。ROS因应紧急行动优先级不同而异，UCS操作员通过任务规划应用选择安全方案（如预设恢复路线）。 |
| Encoding<br>编码                                             | 将信息或数据从一种系统、格式或信号转换到另一种。             |
| Exercise<br>演习                                             | 为训练和评估而执行的军事机动或模拟战时行动，涵盖规划、准备和执行，可为联合、联合兵种或单一军种演习。 |
| Field of View<br>视场                                        | 摄影中，摄像机镜头透视中心（后主点）两侧射线夹角，不同于视角。 |
| Formatted Message Text<br>格式化消息文本                     | 由多组按特定顺序组成的词，每组由标识符和特定类型信息组成，按照北约消息文本格式规则编码排列，支持手动和自动处理。 |
| Frame<br>画面                                                | 摄影中连续照片序列中的单张曝光。                             |
| Free Form Message Text<br>自由格式消息文本                   | 无规定格式的词语，便于快速起草及手动处理。                   |
| Functional Architecture<br>功能架构                          | 定义以下功能元素和接口： <br> - 核心UCS（CUCS） <br> - 数据链接口（DLI） <br> - 指挥与控制接口（CCI） <br> - 无人机专用模块（VSM） <br> - 指挥与控制接口专用模块（CCISM） |
| Fusion<br>融合                                               | 将来自多个来源或机构的情报和/或信息整合为统一图像，初始信息来源不再明显。 |
| Handover<br>接管                                             | 无人机及/或载荷从一个UCS转移到另一个UCS及/或数据链控制的转移行为。 |
| Human Computer Interface (HCI)<br>人机接口                   | 定义UCS应支持的操作员功能和交互需求，满足CCI和DLI对CUCS的人机接口要求，支持特定CCISM或VSM显示需求。 |
| Hyperspectral Imagery (HSI)<br>高光谱影像                    | 同时使用数百或数千个离散光谱带获取的物体影像。               |
| Image<br>图像                                                | 由按行列索引的二维像素矩阵组成。                             |
| Imagery<br>影像                                              | 通过电子或光学手段在胶片、电子显示设备或其他媒介上再现的对象集合。 |
| Imagery Exploitation<br>影像利用                             | 包括处理与显示、组装影像包、识别、解释、测量、信息提取、报告编制（含标注影像）及信息传播的循环。 |
| Integration<br>集成                                          | 组合模块并确保其在环境中正确运行，互不影响且符合标准，但不等同于互操作性，主要保证系统按设计运行。 |
| Intelligence<br>情报                                         | 关于外国、敌对或潜在敌对势力及其资源或行动区域的信息加工产物，亦指产生该产物的活动和相关组织。 |
| Interaction<br>交互                                          | 两个或多个系统/子系统间的单向或双向数据交换。                |
| Interface<br>接口                                            | (1) 两设备或系统间的连接定义，包括电路类型、数量、功能及信号的类型、形式和内容，机械细节可能包含其中；(2) 共享边界；(3) 两个或多个指挥与控制系统、子系统或其他实体间的信息流边界；(4) 系统间信息流通边界，支持互操作性；(5) 两个或多个不同电路或系统的相互关联过程；(6) 用户终端设备与商业通信服务设施间的连接点。 |
| Interoperability<br>互操作性                                 | 盟军及合适情况下伙伴及其他国家部队在执行任务时进行训练、演习和有效协同的能力。 |
| Joint<br>联合                                                | 形容词，描述至少两个军种参与的活动、行动和组织。             |
| Laser Designator<br>激光指示器                               | 发射激光束用于标记特定地点或目标的设备。                     |
| Laser Range-Finder<br>激光测距仪                             | 使用激光能量测定设备与目标间距离的装置。                     |
| LIDAR<br>激光雷达                                            | “光探测与测距”的缩写，使用光束替代传统微波进行大气监测、跟踪和探测的系统。 |
| Meaconing<br>信号掩蔽                                        | 接收无线电信标信号并在同频率重新广播以干扰导航的系统，使飞机或地面站获得错误方位。 |
| Metadata<br>元数据                                           | 关于数据的数据，通常指资源的结构化描述，用于支持资源描述与发现、信息资源管理、长期保存及保持上下文和真实性。可能涉及技术细节，如与软件硬件环境相关或数字化参数记录，涵盖数字及非数字资源。 |
| Mission Plan<br>任务计划                                     | 无人机飞行的路线规划、载荷规划、数据链规划（含频率规划）及紧急恢复规划（安全规则）。 |
| Modularity<br>模块化                                         | 使用一个系统的子系统或组件在另一个系统中正常工作的能力，子系统级接口定义充分。 |
| Motion Imagery<br>动态图像                                   | 含元数据的图像序列，作为标准动态图像格式的离散对象管理并按时间顺序显示。 |
| Moving Map Display<br>移动地图显示                           | 显示中无人机符号固定，地图或图表在其下移动，模拟无人机水平移动。 |
| Moving Target Indicator (MTI)<br>运动目标指示器              | 雷达显示，仅显示运动目标，通过记忆电路输出减去静止目标信号。 |
| Multispectral Imagery (MSI)<br>多光谱影像                    | 在多个离散光谱带同时获取的物体影像。                         |
| National Transmission Standards Committee (NTSC)<br>国家传输标准委员会 | 美国1953年实施的首个彩色电视广播系统标准，采用EIA RS-170和SMPTE 170 M-1994格式，适用于带元数据的影像。帧率30fps，525行/帧，2:1隔行扫描，广泛用于北美及日本等亚洲国家。 |
| Native System<br>本地系统                                    | 构成唯一无人机系统的所有组件。                               |
| NATO ISR Interoperability Architecture (NIIA)<br>北约ISR互操作架构 | 定义ISR传感器系统互操作性STANAG的架构，载于AEDP-2。          |
| NATO OSI Profile Strategy (NOSIP)<br>北约OSI配置策略         | 现已合并至NC3TA的互操作策略。                                |
| NATO Standardization Agreement (NATO STANAG)<br>北约标准化协议 | 多国成员采用相同或类似军事装备、弹药、物资及作战、后勤和管理程序的协议，由北约标准化办公室发布。 |
| NC3 Common Standards Profile (NCSP)<br>NC3通用标准配置文件   | 所有北约C3系统采购必须遵守的最低通信和信息技术标准集合。     |
| NC3 Technical Architecture (NC3TA)<br>NC3技术架构            | NC3架构框架的技术标准视图。                                  |
| Near Real Time<br>近实时                                     | 数据或信息延迟仅限于电子通信和自动处理时间，无显著延迟。     |
| Network<br>网络                                              | (1) 三个或以上通信实体及一个或多个节点的互联；(2) 执行特定功能的电子组件组合。 |
| Open Systems Interconnect Model<br>开放系统互联模型          | 定义于ISO/IEC 7498-1。                                       |
| Order of Battle<br>战斗序列                                  | 军事力量的识别、实力、指挥结构及部署。                       |
| Passive<br>被动                                              | 监视中不发射可被探测能量的动作或设备。                       |
| Payload<br>载荷                                              | 无人机携带用于完成任务的传感器、武器、箔条、宣传单及机载系统等。 |
| Payload Plan<br>载荷计划                                     | 传感器使用详情，或多载荷情况下装载传感器详情。包含航路点预设传感器操作及动作提示，供载荷装载和航路计划展示。涵盖载荷配置（类型、镜头大小）、影像提取（分辨率要求）、及操作指令（如EO/IR和SAR载荷的变焦、俯仰角、对焦等）。 |
| Primary Data<br>原始数据                                     | 直接从传感器接收的数据。                                     |
| Primary Imagery<br>原始影像                                  | 未加工的原始影像数据，可能含传感器端初步处理及辅助数据。     |
| Processed Imagery<br>处理后影像                              | 格式化为像素格式、去除异常并转换为后续使用格式的影像。       |
| Protocol<br>协议                                             | (1) 功能单元通信行为的语义和语法规则集；(2) 分层通信架构中实现功能互操作的正式程序集合。协议可涵盖网络部分、服务类型或管理程序。 |
| Real Time<br>实时                                            | 数据或信息仅因电子通信时间产生延迟，无可察觉延迟。           |
| Reconnaissance<br>侦察                                       | 通过目视或其他探测手段获取敌方活动和资源信息，或获取特定区域气象、水文特征数据的任务。 |
| Recovery<br>回收                                             | 飞机返航及着陆过程，如需飞行后收纳，则包含甲板固定和处理。   |
| Resolution<br>分辨率                                         | 传感器系统在特定条件下可分辨的最小细节。                     |
| Route Plan<br>航线计划                                       | 无人机的航路点序列及辅助系统指令（如灯光、IFF/SSR、防冰）和紧急操作指令。包括地面滑行或飞行模式，依据UCS和无人机系统复杂度采用序列航路点或带距离和方位信息的“种子”航路点。 |
| Scalability<br>可扩展性                                      | 使系统规模和能力可根据用户需求调整的特性。                   |
| Search and Rescue<br>搜救                                    | 利用航空器、水面艇、潜艇、专用救援队和设备寻找并救助陆地或海上遇险人员。 |
| Secondary Imagery<br>二级影像                                | 由原始影像或二级影像进一步处理得到的影像或影像产品。         |
| Sensor<br>传感器                                             | 通过能量或粒子发射、反射或改变检测、指示及/或记录对象和活动的设备。 |
| Shall<br>必须                                                | 强制性遵守。                                                 |
| Should<br>建议                                               | 建议遵守。                                                   |
| Signals Intelligence<br>信号情报                             | 描述通信情报和电子情报的通用术语，不区分二者或表示融合情报。 |
| Software<br>软件                                             | 计算机程序、程序集及相关文档，如编译器、库例程、手册和电路图。 |
| STANAG<br>标准化协议                                         | 北约标准化协议，参见北约标准化协议定义。                     |
| Standardisation<br>标准化                                    | 制定并实施概念、原则、程序和设计，以实现并维护操作、程序、物资、技术及管理领域的兼容性、互换性或通用性，达到互操作性。 |
| Storage<br>存储                                              | a) 数据的任何形式保留，通常为有序检索和记录；b) 由电子、电静或电气硬件或其他元件组成，数据可输入和输出的装置。 |
| Surveillance<br>监视                                         | 通过视觉、听觉、电子、摄影或其他手段对空域、地面或水下区域、地点、人员或物体的系统观察。 |
| Synthetic Aperture Radar (SAR)<br>合成孔径雷达               | 利用传感器运动的频移（多普勒效应）生成比仅靠雷达波束宽度和脉冲长度更高分辨率图像的系统。因时间和气象条件限制少，且地形和目标对雷达频率响应独特，补充光学成像能力。 |
| System Architecture<br>系统架构                              | 定义与信息交换相关的关键节点、电路、网络、作战平台的物理连接、位置和标识，指定系统性能参数。根据技术架构标准构建以满足作战架构需求。 |
| Target<br>目标                                               | a) 计划由军事力量夺取或摧毁的地理区域、建筑或设施；b) 情报中指针对的国家、区域、设施、机构或个人。 |
| Target Acquisition<br>目标获取                               | 以足够细节检测、识别和定位目标，以有效使用武器。越来越多地用于侦察，作为搜索和定位活动的对象，支持情报数据或直接引导武器系统。 |
| Targeting<br>目标定位                                        | 报告无人机载荷探测目标的位置（包括速度和方向），以经纬度（及高度）或相对于某点的坐标表示，精度满足武器火控要求。 |
| Technical Architecture<br>技术架构                           | 规定构件安排、相互作用和依赖的最低规则集合，确保符合特定需求。确定系统服务、接口、标准及其关系，为工程规范提供框架。 |
| Tracking<br>跟踪                                             | 通过雷达、光学或其他手段准确定位和更新目标位置（地理坐标）。 |
| Unmanned Aircraft System (UAS)<br>无人机系统                 | 包括无人机、模块化任务载荷、数据链、发射和回收设备、任务规划和控制站、数据利用站及后勤支持。 |
| Variable Message Format (VMF)<br>可变消息格式                | 用于需要可变位导向消息的系统间通信。                         |
| Vehicle Data Terminal<br>无人机数据终端                        | 数据链元件，包括无人机内的无人机数据终端（VDT）和地面或空中（如指挥与控制飞机）上的控制数据终端（CDT）。CDT与VDT的连接是实现2至5级互操作性的前提。 |
| Vehicle Specific Module (VSM)<br>无人机专用模块                | 位于DLI和无人机子系统之间的功能，作为标准DLI数据格式和协议与特定无人机之间的桥梁，支持本STANAG兼容。 |
| Video Imagery<br>视频影像                                    | 含元数据的图像序列，以标准动态图像格式收集、管理并按时间顺序显示，属于动态图像子集。 |
| Warnings<br>警告                                             | 指示危险状况，需立即采取行动以防止生命损失、设备损坏或任务失败的提醒。 |
| Waypoint<br>航路点                                           | 定义为经纬度的无人机航线点，通常含高度。                     |
| Waypoint Control<br>航路点控制                               | 使用定义点（经纬度/高度）实现无人机（无人机、传感器、武器、释放载荷、机载系统等）半自主或人工介入控制以完成特定动作的方法。 |

## 第三章 总体描述

### 目录

1 引言 

1.1 STANAG 4586 目标 

1.2 假设与约束 

1.3 AEP-84 第一卷结构 

2 互操作性概念 

2.1 概述  

2.2 无人机系统互操作性现状

2.3 互操作性级别 

3 无人机控制系统（UCS）功能架构

3.1 核心UCS需求 

3.2 数据链接口（DLI）

3.3 指挥与控制接口（CCI）

3.4 人机接口（HCI）

4 UCS 通信与信息技术协议及标准 

4.1 数据交换/通信协议及标准

4.2 可选功能标准

4.3 与其他STANAG的符合性

### 图表清单

图3-1 无人机系统元素

图3-2 当前无人机系统操作示例 

图3-3 无人机系统互操作性架构

图3-4 UCS功能架构 

### 1 引言

#### 1.1 STANAG 4586 目标

1. 无人机（UA）已成为帮助联合部队指挥官（JFC）实现多种战区、作战和战术目标的宝贵资产。各种国家部署的无人机之间实现最佳协同，需要紧密协调和快速调配可用无人机资产的能力，相互控制无人机及其载荷的能力，以及在不同指挥层级快速传播所得信息的能力。这要求所使用的无人机系统（UAS）具备互操作性。

2. 目前，许多无人机系统尚未完全实现互操作性。NIIA中定义的接口为符合相关STANAG标准、符合7085标准的数据链和NC3TA指定通信协议的数字传感器的ISR系统提供了1级和2级的互操作性。

3. 当前或“遗留”无人机系统由各国单独设计和采购，系统元素通常独特且系统专用，系统元素之间无标准接口。这导致各种无法互操作的“烟囱式”系统。虽然硬件和软件的通用性可实现互操作性，并可能在经济上具有优势，但通用性并非强制要求。

4. 为实现无人机系统的互操作性，需对关键系统接口和功能实施标准。这些标准载于多个现有或新兴的北约STANAG及通常采用的商业标准文件中。本STANAG会引用并列出相关标准。具体的作战需求和批准的作战概念（CONOPS）将决定或驱动特定无人机系统所需实现的互操作性级别（LOI）（见第2.3节定义）。

5. STANAG 4586的目标是规定为实现各无人机系统CONOPS所要求的、且可行的互操作性级别，应实施的接口规范[UCS 0001]。这通过在无人机控制系统（UCS）中实现标准接口，以便与不同无人机及其载荷，以及不同C4I系统通信来完成。标准接口的实施还将促进不同来源组件的集成以及遗留系统的互操作性。

6. STANAG 4586中标明为强制的标准应整体实施，以实现所需的互操作性级别[UCS 0002]。假设航空安全法规要求对由不同无人机系统资产联合操作形成的新组合进行认证。符合STANAG 4586将简化该过程，并可能提前认证无人机系统组合。

7. 基于此，符合STANAG 4586的无人机系统将增强北约联合/联合兵种的灵活性和效率，通过资产共享和无人机系统生成信息的共用，助力完成任务目标。

#### 1.2 假设与约束

本STANAG基于以下假设和约束制定：

- 系统元素（如核心无人机控制系统（CUCS）、数据链接口（DLI）、无人机专用模块（VSM）、指挥与控制接口（CCI）、指挥与控制接口专用模块（CCISM））无需共址。
- STANAG要求独立于国家作战概念（CONOPS）制定，因此本STANAG无意定义或暗示具体CONOPS。
- 本STANAG涉及与空域管理机构的接口，以协调无人机在受控空域的运行，但不涵盖或暗示运行无人机所需的整体要求和认证。
- 无人机及载荷控制的关键（硬）实时需求应分配给VSM功能[UCS 0003]。只要满足STANAG 4586对相关消息的延迟要求及系统需求，近实时需求可分配给CUCS。
- 无人机系统的可扩展性独立于本STANAG内容。

#### 1.3 AEP-84 第一卷结构

前两章分别介绍引言和术语定义。第三章提供互操作性目标的总体描述及通过标准化CUCS与无人机、CUCS与外部C4I系统、CUCS与无人机系统操作员接口实现无人机系统互操作性的方案。描述了支持这些接口所需的标准功能UCS架构，并引用第四至六章详细说明STANAG 4586要求的标准。还列出实现无人机系统互操作性所需的其他STANAG、标准和协议，并提供实施考虑。

- 第四章阐述标准化DLI和VSM功能的方法，包含DLI所需的标准消息和协议，使CUCS能与不同无人机及载荷通信与利用，并支持第六章人机接口（HCI）规定的无人机系统操作员接口。
- 第五章展示标准化CCI和应用指挥与控制接口专用模块（CCISM）的方法，包含信息交换需求（IER）附件5-1及满足IER需求并支持第六章人机接口（HCI）规定的操作员接口的UCS ADatP-3消息实施要求附件5-2。
- 第六章描述CUCS为无人机系统操作员提供的人机接口（HCI）需求与服务。

### 2 互操作性概念

#### 2.1 概述

1. 无人机系统可分为五个独立元素，如图3-1所示。无人机元素包括机体、推进系统及无人机与飞行管理所需的航空电子设备。载荷元素由载荷包组成，可为安装于无人机上的传感器系统及相关记录设备，或弹药（如武器系统）及其控制/反馈机制，或两者兼有。如图所示，数据链元素包括无人机内的无人机数据终端和可位于地面、水下或空中平台的控制数据终端。无人机系统的控制通过UCS和数据链元素实现。虽然图中显示为无人机地面组件的一部分，UCS及相关数据链终端可位于任一平台（例如另一空中平台）。UCS具备生成、加载和执行无人机任务的功能，并向各类C4I系统分发可用信息数据产品。图3-1显示无人机指挥控制、载荷指挥控制及产品的通用路径，这些功能可能通过独立数据链完成。发射与回收元素具备无人机发射与回收功能。

2. 发射与回收元素针对各无人机具有独特性，UCS通过其无人机专用模块（VSM）（见第3章UCS功能架构）支持此无人机特异性。

<img src="https://cdn.mathpix.com/cropped/2025_07_17_c3ddec59b5857ee129e1g-041.jpg?height=903&width=1126&top_left_y=1256&top_left_x=468" width=500/>

图3-1 无人机系统元素  

#### 2.2 无人机系统互操作性现状

1. 当前无人机系统多为“烟囱式”系统，使用独特的数据链、通信协议和消息格式连接UCS与无人机及UCS与外部C4I系统。结果，传感器数据传播多为间接方式（例如从UCS到利用系统再到用户）。图3-2展示了联合北约行动中的无人机系统操作示例。  
2. 图示无人机系统均采用独特数据链及UCS，并使用独特数据/消息格式连接无人机与UCS，以及UCS与C4I节点。动态联合协同作战要求近实时任务分配/再分配和侦察数据传播以支持战术指挥官，这些需求可能无法由“烟囱式”无人机系统满足。

<img src="https://cdn.mathpix.com/cropped/2025_07_17_c3ddec59b5857ee129e1g-042.jpg?height=875&width=1038&top_left_y=733&top_left_x=486" width=400/>

图3-2 当前无人机系统操作示例

#### 2.3 互操作性级别

1. 下列表述了符合STANAG标准的无人机系统互操作性级别定义：

- 级别1：间接接收无人机相关数据  
- 级别2：直接接收ISR/其他数据，“直接”指UCS与无人机直接通信时接收无人机数据  
- 级别3：在直接接收ISR/其他数据基础上，控制和监控无人机载荷  
- 级别4：控制和监控无人机本体（不含发射与回收）  
- 级别5：控制和监控无人机（级别4），加上发射与回收功能  

2. 对于搭载多个载荷的无人机，级别2监控和级别3控制可按载荷划分。级别4互操作性仅指无人机本体，不含载荷控制（级别3）。同时控制无人机及其载荷的CUCS即实施级别3和级别4控制。  
3. 以上互操作性级别可通过标准化无人机系统元素间以及UCS与外部C4I系统间接口实现。前提是整体系统架构也标准化，支持这些标准接口实现。为实现互操作性，UCS架构和接口应支持遗留及新无人机系统的通信协议和消息格式[UCS 0004]。此外，级别2及以上互操作性（级别2、3、4、5）需使用可与无人机数据终端（VDT）互操作的控制数据终端（CDT），例如CDT与VDT的连接是实现级别2、3、4和5互操作性的前提。  
4. 如图3-3所示，已有或新兴的多个适用于无人机系统的标准化协议（STANAG）存在，为数据链互操作（STANAG 7085）、载荷与无人机元素间的数字传感器数据（STANAG 7023、4545、4607、4609）及机载记录设备（STANAG 7024、4575）提供标准。  
5. 目前无标准定义UCS与无人机（含发射与回收功能）通过CDT的接口。尽管STANAG 5500 ADatP-3定义了任务分配和状态报告的标准消息目录，但无人机系统尚无具体消息和字段使用的统一标准/协议。此外，针对无人机系统操作员应呈现何种信息及操作员所需熟练程度的定义也无相关标准/协议。  
6. STANAG 4586标准化这些接口，符合本STANAG及其引用标准的无人机系统可实现2级及以上互操作性。对于使用数字成像载荷和符合STANAG 7085数据链的1级或2级系统，仅需符合NIIA标准，无论地面组件是UCS还是其他ISR利用设施。实现特定互操作性级别所需的接口要求（消息或显示参数）详见第3至6章。  
7. 因此，实现期望无人机互操作性的方案基于符合现有标准或制定新标准，涵盖：
- 提供UCS与无人机间连接和互操作性的数据链系统，兼容遗留及未来系统[UCS 0005]。STANAG 7085规定了满足需求的数据链系统。需要加密的用户应参照NAFAG第四空军组和北约国际军事参谋部（IMS）制定的互操作加密标准。目前尚无用于需备用数据链或战术无人机的数据链标准，需开发。  
- 通过数据链传输至UCS及/或机载记录设备的载荷/传感器数据格式。STANAG 7023（空中侦察原始影像数据标准，含非影像传感器如电子支援措施）、STANAG 4545（北约二级影像格式）、STANAG 4607（北约GMTI格式）及STANAG 4609（北约数字动态图像格式）提供标准格式。  
- 机载传感器数据记录设备，若需，STANAG 7024（影像空中侦察磁带记录标准）及STANAG 4575（北约高级数据存储接口，NADSI）分别为宽带磁带及其他先进介质（如固态、RAID）记录设备和格式提供标准。  
- UCS与数据链系统（如DLI）、与指挥控制系统（如CCI）接口，以及支持无人机系统操作员的人机接口（HCI）顶层需求。STANAG 4586定义了UCS架构及接口需求。  
- 虽非本STANAG范围，尚需制定操作指南或标准，定义操作员为达到期望互操作性级别所需的最低熟练度。  

<img src="https://cdn.mathpix.com/cropped/2025_07_17_c3ddec59b5857ee129e1g-043.jpg?height=809&width=998&top_left_y=852&top_left_x=529" width=500/>

图3-3 无人机系统互操作性架构  

### 3 UCS 功能架构

1. 支持未来及遗留无人机系统互操作性的UCS功能架构如图3-4所示。

<img src="https://cdn.mathpix.com/cropped/2025_07_17_c3ddec59b5857ee129e1g-045.jpg?height=920&width=1363&top_left_y=585&top_left_x=329" width=500/>

图3-4 UCS功能架构  
2. 该架构建立了以下功能元素和接口：

- 核心UCS（CUCS）  
- 数据链接口（DLI）  
- 指挥与控制接口（CCI）  
- 无人机专用模块（VSM）  
- 指挥与控制接口专用模块（CCISM）  

3. 本STANAG并未试图定义CUCS的详细设计或实现，除指定功能架构应支持DLI和CCI集成外，并建议遵循相关北约STANAG和软件指南。鉴于技术变化，本STANAG未定义具体通用操作环境（COE），仅规定操作环境应支持/集成指定网络/传输协议并支持指定用户应用。  
4. 未来及遗留无人机系统将通过遵守此架构及相关STANAG实现互操作性。DLI应支持遗留和未来无人机及所有无人机技术（如固定翼、旋翼等）及所有作战目的（监视、侦察、作战）[UCS 0006]。未来无人机应采用符合STANAG 7085的数据链系统。对不符合者（无论未来还是遗留系统），应提供兼容VDT的CDT以实现2级及以上互操作性[UCS 0007]。  
5. 同理，CCI接口应支持遗留和未来C4I系统（如盟军指挥与控制系统ACCS）[UCS 0008]。核心UCS与外部C4I节点间接口应兼容用于支持外部任务分配和传感器数据传播的通信系统基础设施[UCS 0009]。这通过采用北约C3技术架构（NC3TA）中定义的通信标准实现，详见第4章。NC3TA旨在提供北约通信的整体框架，北约所有未来通信和信息系统均需遵循该标准。  
6. 引入无人机专用模块（VSM）概念，提供各无人机所需的专有通信协议、接口时序及数据格式。VSM还负责DLI协议和消息格式与无人机特定需求的必要“转换”。由于VSM可能针对每架无人机独特，通常由无人机制造商提供。若无人机系统使用非STANAG 7085兼容数据链（如提供超视距连接的低频段链路，例如卫星通信数据链），则必须提供对应的非兼容数据链CDT，并通过VSM DLI功能与UCS接口，或CDT应具备接收和处理DLI指定的数据链控制和状态消息能力。VSM功能可部署于无人机和/或地面。关键（硬）实时功能和接口应通过VSM实现[UCS 0010]。近实时功能和接口可基于数据延迟需求由CUCS或VSM实现。  
7. 新无人机加入互操作无人机系统池时，可能需在现有UCS中引入并验证相应的新VSM功能。仅当新无人机需地面VSM功能时才需如此。若现有UCS包括符合7085标准的CDT并实现STANAG 4586定义的数据链管理功能，且新无人机直接实现DLI消息并配备符合7085标准的VDT，则不需单独地面VSM。  
8. 指挥与控制接口专用模块（CCISM）功能类似于VSM，负责封装CCI数据及兼容/互操作UCS与C4I系统间物理通信链路的必要转换。CCISM可部署于UCS并与其共址，或部署于连接的C4I节点。UCS架构应支持CCISM集成[UCS 0011]。  
9. 应为无人机系统操作员提供标准参数集，用于操作/监控分配给他的无人机，包括与空域管理机构的接口。尽管不同符合STANAG 4586的UCS显示可异，但CUCS必须满足第6章规定的人机接口（HCI）要求。为此，建议开发CUCS时遵循标准相关文档（SRD）AEP-84.1《STANAG 4586实施指南》中的HCI指南。  
10. DLI和CCI应通过消息实现[UCS 0012]。除支持第4章定义的通用消息集外，CUCS应支持“远程显示”功能[UCS 0013]。远程显示功能支持CUCS控制和监控VSM提供的“无人机专用”信息，后者无通用接口。支持该“远程显示”功能的、在CUCS上以未修改状态安装且兼容已识别操作系统的服务详见第4章。信息交换框架支持信息在同平台进程间、不同平台进程间甚至不同软件产品和操作系统间流动。  
11. VSM开发者可自由选择实现方法，通过识别的服务实现CUCS与VSM间所需信息交换。此方法关注以有效显示无人机特定状态信息并有效控制无人机特定功能为目的的信息交换。

#### 3.1 核心UCS需求

1. CUCS应提供用户界面，使合格无人机操作员能够执行无人机任务的所有阶段[UCS 0014]。应支持DLI、CCI和HCI的要求[UCS 0015]。CUCS应提供高分辨率计算机生成的图形用户界面，使合格操作员能够控制不同类型无人机及载荷。  
2. 根据适用的互操作性级别及支持的载荷，CUCS应提供：

- 接收、处理和分发无人机及载荷数据的功能；任务规划；载荷监控与控制；无人机监控与控制；数据链监控与控制  
- 支持未来新增无人机及载荷能力的开放软件架构  
- 为无人机操作员提供完成计算机通信、任务分配、任务规划、任务执行与监控、数据接收、处理和分发的必要工具  
- 承载VSM和CCISM功能的能力  

#### 3.2 数据链接口（DLI）

CUCS与无人机系统VSM元素间的DLI接口定义见第4章。它使CUCS能够生成和理解第4章详细的无人机及载荷控制和状态特定消息。该标准消息集及协议设计为独立于无人机及载荷类别（如EO/IR）。此外，DLI规定了处理和显示无人机专用消息的机制。

#### 3.3 指挥与控制接口（CCI）

1. CCI接口定义于第5章，连接C4I系统/节点与CUCS。  
2. 标准消息集及协议设计为独立于C4I系统/节点，避免对C4I系统施加额外要求。UCS提供商和相应C4I用户应联合确定为实现UCS与特定C4I系统兼容所需的CCISM功能。第5章详细规定消息内容和格式。支持CCI接口的网络和通信应符合NC3TA标准[UCS 0016]。NC3TA为北约通信提供整体框架，确保军事指挥、控制和通信系统间互操作。NC3TA战略旨在实现互操作性，最大化商业现货（COTS）利用并减少非标准系统扩散。北约所有未来通信和信息系统均须符合该标准。

#### 3.4 人机接口（HCI）

第6章规定CUCS应支持的操作员显示和输入需求[UCS 0017]。第6章明确CUCS的要求，不对人因工程（如显示器数量、手控装置、开关等）提出设计要求。第6章虽未具体定义显示数据格式，但明确CUCS须提供的功能，以便合格无人机系统操作员有效操作无人机系统[UCS 0018]。HCI需求还涵盖CCI和DLI对CUCS显示和操作交互的要求。


### 4 UCS 通信与信息技术协议及标准

1. 无人机（UA）与C4I系统应能跨越由多个子网络构成的路由网络互操作，其中无人机被视为整个网络的终端元素（或终端子网络）。这允许无人机和C4I系统的物理组件位于网络的任何位置。UCS与C4I系统之间的信息电子交换应符合北约指挥、控制、通信（NC3）技术架构（TA）第4卷，NC3通用标准配置文件（NCSP），AC/322(SC/5)WP/31(REV 1)附件4规定的要求 [UCS 0019]。
2. NCSP是包含这些系统、其通信和计算机及其与其他（北约、国家或相关民用）系统接口的现行和强制标准及标准配置文件的单一配置文件，支持北约任务中关键的联合/联合互操作性，包括联合联合特遣部队（CJTF）概念。NCSP适用于所有北约指挥和控制信息系统（C2IS）及管理信息系统（MIS），包括其内外部接口，这些系统电子产生、使用或交换信息。
3. NCSP规定了所有北约指挥、控制和通信（C3）系统采购必须遵守的最低通信和信息技术标准集合。为协助未来C3系统及现有系统重大升级的规划和开发，还包含一套新兴标准。未来北约C3系统预期支持联合与联合行动，因此国家对本文件规定的强制标准的承诺将显著促进北约与国家C3系统间实现所需互操作性的程度。实现期望目标所需互操作性程度将由作战需求决定，并载于适用的作战概念（CONOPs）中。
4. 需注意的是，实现北约系统内部互操作性可能所需的互操作级别与实现北约系统与国家系统间外部互操作性所需的不同。标准选择侧重于强制外部互操作关键标准，主要基于在商业市场具有强大支持的商业开放系统技术。系统若使用特定服务，必须采用NCSP规定的相关强制标准（如需某服务/接口，应按关联强制标准实现）。若超出NCSP规定范围需使用其他标准，应为附加、补充且不与NCSP强制标准冲突[UCS 0020]。必要时，遗留标准可按需逐案实施。新兴标准为利用新技术而需制定的标准，预计随着标准实现成熟和达成国家共识，将提升为强制标准。
5. NCSP文件将这些标准组织于NC3TA北约技术参考模型第2卷定义的十一项服务领域：

- 用户界面  
- 数据管理  
- 数据交换  
- 图形  
- 通信  
- 操作系统  
- 国际化  
- 系统管理  
- 安全  
- 分布式计算  
- 软件工程  


#### 4.1 数据交换/通信协议及标准

##### 4.1.1 数据交换服务

为实现互操作性，UCS至少应实现以下NCSP强制标准：

###### 4.1.1.1 地理信息 [UCS 0021]

- 数字地理信息交换标准（DIGEST版本1.2a），STANAG 7074:1998。  
- 数字地形高程数据（DTED）地理信息交换标准，STANAG 3809。  
- 数字特征分析数据（DFAD）。  
- 世界大地测量系统-84（WGS-84），军事标准2401。

###### 4.1.1.2 通信服务 [UCS 0022]

为实现互操作性，UCS至少应实现以下通信领域的NCSP强制标准：

**4.1.1.2.1 互联网协议（IP）IPv4 (RFC 791, 792, 919, 922, 1112) / IPv6 (RFC 2460-4, 2375, 2236)**

UCS架构将遵循其所在国防社区选定的IP版本。短期内需支持当前IP版本[IPv4, RFC 791]。随着数字化发展，未来军方可能采用新IP版本[IPv6, RFC 1883]以克服IPv4的局限。IPv6增加地址空间，重组协议头，增强安全性、吞吐量、延迟、误码率及成本表现。

**4.1.1.2.2 传输控制协议（TCP）(IETF STD 7) RFC 793**

1. 传输控制协议（TCP）[RFC 761]提供面向连接的可靠字节流服务。TCP为双向协议，无消息概念，帧结构需应用层添加。TCP含确认机制，确保字节正确按序传输，实现流量控制。  
2. 选用TCP/IP协议是因其能提供符合北约数字化倡议的端到端网络和传输通信一致性。

**4.1.1.2.3 用户数据报协议（UDP）IEN 88, RFC 768, 1122**

用户数据报协议（UDP）仅提供最低限度的非保证数据报传输，允许应用直接访问IP层数据报服务。UDP适用于不需TCP服务级别或需多播、广播等TCP不支持通信的应用。

**4.1.1.2.4 超文本传输协议（HTTP）版本1.1，IETF RFC 2616**

HTTP应为网页浏览的主要协议。网页浏览提供通用且强大的信息共享机制。HTTP及相关应用用于索引、访问和传输处理信息。通过现成软件可提供网页服务器搜索功能。C4I用户需浏览器（如Netscape或Internet Explorer）、页面统一资源定位符（URL）及通信连接以访问信息。

**4.1.1.2.5 文件传输协议（FTP），IETF，RFC 959**

文件传输协议（FTP）用于传输处理信息。可辅助HTTP传输文件，但需额外支持文件服务器信息索引。文件传输至C4I系统后，由C4I负责提供处理应用。

**4.1.1.2.6 网络时间协议（NTP）版本3，1992年4月9日，RFC-1305**

1. 网络时间协议（NTP）为CUCS与VSM（空中或地面）之间的客户端/服务器关系。此处不详细解释NTP，详见RFC 1305及Sun Microsystems相关资料。本段概述CUCS将使用的NTP客户端/服务器能力以控制和维护VSM时钟。  
2. CUCS需提供UTC参考源以供NTP服务器守护进程使用。  
3. 有两种NTP时间同步方案，推荐采用xntp选项（相较于ntpdate）。需ntp.conf文件为NTP服务器守护进程提供配置。  
4. 在NTP协议中，客户端和服务器的指定嵌入初始化过程，由操作系统低层定义，对应用层透明。  
5. 初始化结果为客户端和服务器可分别指定为CUCS或VSM。  
6. 详见RFC 1305了解该过程。  
7. NTP时间服务器使用UDP与客户端通信。协议为无连接，无额外开销，不影响TCP/IP通信。该通信无需在STANAG DLI中记录。  
8. 该协议提供10毫秒精度，1毫秒分辨率。

#### 4.2 可选功能标准

若欲在UCS实现额外服务领域（如数据交换）及服务类别（如视频和音频交换），应使用NCSP强制标准。

#### 4.3 与其他STANAG的符合性

虽然STANAG 4586为实现无人机指挥控制互操作性强制性标准，但以下ISR接口标准是为解决ISR各水平和垂直架构间接口需求，涵盖物理（如有线、磁带等）及电磁链路：

- 3809 - 数字地形高程数据（DTED）地理信息交换标准  
- 4545 - 北约二级影像格式  
- 4559 - 北约标准图像库接口（NSILI）（如需图像库接口）  
- 4575 - 北约高级数据存储接口（NADSI）（如需高级存储）  
- 4607 - 北约GMTI数据格式（新兴标准）  
- 4609 - 北约数字动态图像标准  
- 4633 - 电子情报通用消息格式（ECMF）（草案）  
- 5500 - 北约消息文本格式系统（FORMETS）ADatP-3版本11  
- 7023 - 空中侦察原始影像数据标准  
- 7024 - 影像空中侦察（数字磁带存储）（如需磁带存储）  
- 7074 - 数字地理信息交换标准（DIGEST版本2.1）  
- 7149 - 北约消息目录（NMC）- APP-11  

为增强无人机互操作性和灵活性，建议UCS也符合以下STANAG：

- 3377 AR（第6版）- 空中侦察情报报告表格  
- 4250 - 北约开放系统互联参考模块  
- 7085 - 成像系统互操作数据链  
- STANAG 7085数字点对点附件（兼容通用数据链（CDL）/战术通用数据链（TCDL）规范）  

## 第四章 数据链接接口

### 目录  

1 引言  

1.1 范围  

1.2 第一章概述  

1.3 DLI总体概述  

1.4 无人机专用模块功能  

1.5 接口  

1.6 按互操作级别定制  

1.7 接口数据表示理念  

2 按任务阶段的系统功能需求  

3 消息分发标准  

3.1 引言  

3.2 需求  

3.3 消息处理方法  

4 消息格式  

4.1 通用消息格式  

4.2 无人机及载荷专用消息格式  

5 其他接口  

5.1 模拟视频接口  

5.2 数字图像数据接口  

### 图清单  

图4-1：DLI在无人机/UCS概念中的作用  

图4-2：DLI在CDT/UCS概念中的作用  

图4-3：VSM的作用  

图4-4：DLI接口内容高级示意  

图4-5：位编号示例（2字节字段）

图4-6：生成无人机专用显示的典型场景  

图4-7：消息封装结构  

图4-8：消息属性  

图4-9：盘旋模式  

图4-10：CUCS CDT连接  

图4-11：CUCS VSM CDT连接  

图4-12：共享数据链  

图4-13：循环动作  

图4-14：自动高度变化动作  

图4-15：盘旋模式  

图4-16：跨多条消息的消息数据分布 

图4-17：CBRN示例如何链接到STANAG 4586消息  

图4-18：CUCS与VSM之间的消息序列  

图4-19：载荷消息封装结构  

图4-20：消息流量  

### 表格清单  

表4-1：所有者ID表  

表4-2：按任务阶段区分的通用与无人机专用功能  

表4-3：STANAG 4586文档版本  

表4-4：封装错误  

表4-5：消息摘要与属性  

表4-6：条件载荷消息组  

表4-7：条件数据记录器消息组  

表4-8：条件载荷舱门消息组  

表4-9：条件数据链控制消息组  

表4-10：消息#1：CUCS授权请求  

表4-11：无人机类型ID  

表4-12：消息#20：无人机ID  

表4-13：消息#21：VSM授权响应  

表4-14：消息#40：无人机配置命令  

表4-15：消息#41：盘旋配置  

表4-16：消息#44：无人机灯光  

表4-17：消息#45：发动机命令  

表4-18：消息#46：飞行终止命令  

表4-19：消息#47：相对路线/航路点绝对参考命令  

表4-20：消息#49：无人机操作模式和转向命令  

表4-21：高度/空速源消息  

表4-22：航向源消息  

表4-23：消息#100：无人机配置

表4-24：消息#101：惯性状态

表4-25：消息#102：空地相对状态

表4-26：消息#103：机体相对感知状态

表4-27：消息#104：无人机操作状态

表4-28：消息#105：发动机操作状态

表4-29：消息#106：无人机操作模式报告

表4-30：消息#107：无人机灯光状态

表4-31：消息#108：飞行终止模式报告

表4-32：消息#109：模式偏好报告

表4-33：消息#110：起点-终点-下一个航路点状态

表4-34：消息#111：盘旋配置报告

表4-35：消息#112：相对路线/航路点绝对参考报告

表4-36：消息#200：载荷转向命令

表4-37：消息#201：EO/IR/激光载荷命令

表4-38：消息#202：SAR载荷命令

表4-39：消息#203：弹药管理系统命令

表4-40：消息#204：通信中继命令

表4-41：消息#205：载荷数据记录器控制命令

表4-42：消息#206：载荷舱门命令

表4-43：消息#207：地形数据更新

表4-44：消息#208：CBRN载荷命令

表4-45：消息#209：CBRN载荷配置命令

表4-46：消息#210：CBRN载荷详细信息请求

表4-47：消息#211：存储容量管理请求

表4-48：消息#212：CBRN载荷显示配置命令

表4-49：消息#213：载荷扫描窗口配置命令

表4-50：消息#300：载荷配置

表4-51：消息#301：EO/IR配置状态

表4-52：消息#302：EO/IR/激光操作状态

表4-53：消息#303：SAR操作状态

表4-54：消息#304：弹药管理系统状态

表4-55：消息#305：通信中继状态

表4-56：消息#306：载荷数据记录器状态

表4-57：消息#307：无人机载荷/记录器配置

表4-58：消息#308：载荷舱门状态

表4-59：消息#309：CBRN探测

表4-60：消息#310：CBRN载荷配置状态

表4-61：消息#311：CBRN载荷操作状态

表4-62：消息#312：载荷扫描窗口操作状态

表4-63：消息#313：CBRN载荷详细信息响应

表4-64：消息#314：CBRN载荷详细信息估计响应

表4-65：消息#400：数据链设置消息

表4-66：消息#401：数据链控制命令

表4-67：消息#402：支架配置消息

表4-68：消息#403：支架控制命令

表4-69：消息#404：数据链分配请求

表4-70：消息#500：数据链配置/分配消息

表4-71：消息#501：数据链状态报告

表4-72：消息#502：数据链控制命令状态

表4-73：消息#503：支架状态报告

表4-74：消息#600：无人机数据链切换协调

表4-75：消息#700：交接状态报告

表4-76：消息#800：任务传递命令

表4-77：消息#801：无人机航线

表4-78：消息#802：无人机位置航路点

表4-79：消息#803：无人机盘旋航路点

表4-80：消息#804：载荷动作航路点

表4-81：消息#805：机体动作航路点

表4-82：消息#806：无人机专用航路点

表4-83：消息#900：任务上传/下载状态

表4-84：消息#1000：子系统状态请求

表4-85：消息#1001：子系统状态详细请求

表4-86：消息#1100：子系统状态警报

表4-87：消息#1101：子系统状态报告

表4-88：消息#1200：字段配置请求

表4-89：消息#1201：显示单元请求

表4-90：消息#1202：CUCS资源报告

表4-91：消息#1203：配置完成

表4-92：消息#1300：字段配置整数响应

表4-93：消息#1301：字段配置双精度响应

表4-94：消息#1302：字段配置枚举响应

表4-95：消息#1303：字段配置命令

表4-96：消息#1304：VSM服务报告消息

表4-97：消息#1305：字段配置无符号响应

表4-98：消息#1306：无人机转向配置

表4-99：消息#1400：消息确认

表4-100：消息#1402：计划消息更新命令

表4-101：消息#1403：通用信息请求消息

表4-102：消息#1500：IFF/SSR代码命令

表4-103：消息#1501：IFF/SSR位置识别命令

表4-104：消息#1502：IFF密钥控制命令

表4-105：消息#1503：IFF/SSR内建测试命令

表4-106：消息#1600：IFF/SSR状态报告

表4-107：消息#1800：弹药专用信息请求

表4-108：消息#1801：传输武器配置数据文件

表4-109：消息#1802：构建弹药库存

表4-110：消息#1803：主弹药控制

表4-111：消息#1804：中止释放/发射

表4-112：消息#1805：准备弹药

表4-113：消息#1806：主武器控制

表4-114：消息#1807：选择武器包

表4-115：消息#1808：武器射控

表4-116：消息#1809：准备回收

表4-117：消息#1810：引信控制

表4-118：消息#1811：制导传感器控制

表4-119：消息#1812：武器激光控制

表4-120：消息#1813：弹药抛弃

表4-121：消息#1814：弹药库存状态请求

表4-122：消息#1815：修改目标

表4-123：消息#1816：发布密钥

表4-124：消息#1817：释放后引信武器延时

表4-125：消息#1818：远程指示器位置

表4-126：消息#1819：动态武器包控制

表4-127：消息#1820：动态武器包弹药请求

表4-128：消息#1821：初始化动态武器包

表4-129：消息#1822：挂架控制

表4-130：消息#1823：机载控制

表4-131：消息#1824：次级弹药控制

表4-132：消息#1825：弹药增长预留

表4-133：消息#1826：修改盘旋

表4-134：消息#1827：地理区域控制

表4-135：消息#1830：CUCS装载配置响应

表4-136：消息#1831：LAR规划请求

表4-137：消息#1900：短信状态

表4-138：消息#1901：弹药专用信息响应

表4-139：消息#1902：弹药库存状态

表4-140：消息#1903：主弹药状态

表4-141：消息#1904：次级弹药状态

表4-142：消息#1905：武器包状态响应

表4-143：消息#1906：武器包状态

表4-144：消息#1907：制导传感器跟踪状态

表4-145：消息#1908：制导传感器状态

表4-146：消息#1909：武器发射决策辅助区域报告

表4-147：消息#1911：引信状态

表4-148：消息#1912：武器激光状态

表4-149：消息#1913：挂架状态

表4-150：消息#1914：主机载状态

表4-151：消息#1915：次级机载状态

表4-152：消息#1916：修改目标状态

表4-153：消息#1917：弹药增长状态

表4-154：消息#1919：修改盘旋状态

表4-155：消息#1920：地理区域状态

表4-156：消息#1924：密钥状态

表4-157：消息#1925：弹药专用信息响应

表4-158：消息#1926：CUCS装载配置

表4-159：短信次级状态

表4-160：摘要表

表4-161：消息#2000：IP地址和端口分配请求

表4-162：消息#2001：无人机IP披露消息

表4-163：版本号

表4-164：通用产品传输消息类型

表4-165：可选头

表4-166：消息#1700：按序列请求通用信息消息

表4-167：消息#1701：GPT否定确认配置

表4-168：消息#1702：GPT产品传输速率

表4-169：消息#1703：GPT中止产品传输

表4-170：消息#1704：GPT暂停产品传输

表4-171：消息#1705：GPT恢复产品传输

表4-172：消息#1741：ATP-45 (E) CBRN4

表4-173：消息#1742：日志

表4-174：消息#1743：放射性/核详细传感器测量

表4-175：消息#1744：化学/生物详细传感器测量


### 附件清单  

附件4-1：修改后的DLI通用消息及私人消息库——AEP-84第一卷  

附件4-2：美军第2类私人消息  

附件4-3：通用产品传输  

### 1 引言

#### 1.1 范围

1. 《盟军工程出版物（AEP）-84》第一卷第四章规定了CUCS与无人机专用模块（VSM）接口的详细要求。本文档中该接口统称为数据链接口（DLI）。  
2. 第四章旨在通过指定该接口的标准消息集和数据格式，支持北约各成员国实现任意兼容CUCS与任意兼容UAS（通过其VSM）之间的无人机互操作性，同时支持处理无人机专用数据需求。

#### 1.2 概述

本章定义了UCS的DLI元素。DLI提供一套用于处理无人机和载荷专用消息的通用消息和机制。第一章包含以下部分：

- 第1节 引言  
- 第2节 按任务阶段的系统功能需求  
- 第3节 消息分发标准  
- 第4节 消息格式  
- 第5节 其他接口  

#### 1.3 数据链接口 (DLI) 总体概述

1. 在制定DLI消息集时，已考虑了广泛的无人机及控制系统需求。DLI应为无人机/数据链与CUCS元素之间的接口【DLI 0001】。DLI提供标准消息和格式，实现各种无人机与符合STANAG 4586的无人机控制系统间的通信。该关系或架构见图4-1。

<img src="https://cdn.mathpix.com/cropped/2025_07_17_c3ddec59b5857ee129e1g-061.jpg?height=1169&width=1448&top_left_y=398&top_left_x=321" width=500/>

图4-1：DLI在无人机/UCS概念中的作用  
2. 图4-1中有四架无人机。无人机支持三种不同层次的DLI作为其原生语言。完全支持DLI接口的无人机不需要单独的VSM。无人机可部分支持DLI消息，需VSM提供剩余DLI接口功能。极端情况下，无人机可能无法支持任何DLI消息，所有DLI功能由VSM提供。本标准大部分内容涉及VSM，但当DLI功能为无人机原生时，VSM对DLI的接口和测试需求应归于无人机【DLI 0342】。

3. 图4-2涉及控制数据终端（CDT）DLI接口。为展示功能流程，无人机DLI消息与CDT DLI消息分开表示。与无人机类似，CDT可能理解DLI消息，无需独立VSM。即使无人机需VSM，CDT也可能不需。CDT可需VSM，而无人机不需。两者均需VSM时，可由单一物理VSM或两个独立VSM支持。标准大部分指向VSM，但当DLI功能为控制数据链原生时，VSM对DLI接口和测试需求应归于数据链【DLI 0343】。

<img src="https://cdn.mathpix.com/cropped/2025_07_17_c3ddec59b5857ee129e1g-062.jpg?height=499&width=1484&top_left_y=296&top_left_x=286" width=500/>

图4-2：DLI在CDT/UCS概念中的作用  
4. 标准中分配给VSM的需求可由无人机或CDT执行，届时所有分配给VSM的需求应相应分配给无人机或CDT【DLI 0344】。  
5. 每个VSM应执行将无人机特定数据格式转换为符合DLI的消息的功能【DLI 0002】。每种无人机类型具有潜在独特的VSM（通常由无人机制造商提供）。VSM功能位置可在无人机和/或无人机控制系统内。CUCS不得包含支持无人机和CDT操作所需的实时进程【DLI 0003】。使用非STANAG 7085兼容数据链的系统（如BLOS/SATCOM）中，VSM CDT功能应作为隔离接口，使无人机系统CDT接口兼容STANAG 4586，无需修改无人机或数据链【DLI 0004】。  
6. CUCS应使用DLI生成并理解通用无人机和载荷消息【DLI 0005】。制定标准消息集和协议以实现无人机/数据链与CUCS功能间通信，是构建互操作CUCS架构的关键。文中定义的消息与无人机和载荷无关。  
7. CUCS与无人机/控制数据终端间通过“消息”作为主要信息传输手段。此消息结构旨在传递CUCS与无人机/CDT间的控制和状态信息，避免两者间产生依赖。消息传递通用数据集，CUCS与无人机/CDT（本地主机）均可操作这些数据。该方法允许CUCS处理来自无人机/CDT的数据，并将数据传输至独立位置。  
8. CUCS与无人机/CDT间的第二通信方式是使用“服务”传递信息。该服务允许无人机/CDT影响CUCS上的HCI，类似浏览器访问网页以本地显示远程主机数据。无人机/CDT驱动的显示包括非标准“数据”消息集内的数据展示，允许操作员通过无人机/CDT与无人机交互以选择选项、操作模式及其他无人机专用动作。CUCS无能力更改或使用本地机器上“远程显示”的内容。  
9. 本章旨在定义无人机/CDT/CUCS通信的DLI通用消息结构。无人机/CDT上的“远程服务”采用现有消息协议和标准，以促进无人机专用接口定义。无人机专用机制详述于本章后续部分。  
10. 本章定义的消息集包括以下控制和状态消息：

- 无人机  
- 载荷  
- 数据链  
- 警告与注意  

11. 消息集包含无人机与载荷无关的无人机数据，接口标准无需为特定无人机或载荷做更改。此外，消息集包括通过UCS HCI生成系统专用显示的能力。  
12. DLI有两大组成部分。第一部分是设计为无人机与载荷无关的通用消息集，支持CUCS功能及通用无人机数据需求。第二部分是支持从无人机/CDT向CUCS传递无人机专用信息的机制，以远程显示无人机专用信息。“服务”方法允许向UCS系统添加新无人机专用元素，甚至新增无人机，而无需修改CUCS软件组件。  
13. VSM功能可驻留于与CUCS相同、不同或远程硬件，只要能提供消息接口（含传感器数据）所需带宽。本章意图非规范硬件，而是详细规范DLI以实现互操作性。

14. 图4-3展示了CUCS、VSM与DLI间关系的另一视图。图中，实时处理分配给与无人机保持闭环控制的VSM。此外，VSM还提供与数据链子系统的命令和状态接口。相比之下，CUCS执行“非实时”功能，即系统不绑定于特定延迟规范，而是满足第4节表4-5中规定的各种功能和消息的最大延迟要求。这一关键区别预设系统具有合理自动化水平。需要与人工操作员实时交互的功能，将直接通过VSM接口实现。

<img src="https://cdn.mathpix.com/cropped/2025_07_17_c3ddec59b5857ee129e1g-064.jpg?height=846&width=1495&top_left_y=311&top_left_x=246" width=500/>

图4-3：VSM的作用  

#### 1.4 无人机专用模块功能

1. 在UCS系统架构中，无人机专用模块（VSM）应负责以下非无人机或CDT部分的功能：

- 将CUCS使用的表示（DLI定义消息）转换为无人机专用表示，反之亦然【DLI 0006】。  
- 作为无人机专用数据（如无人机配置与性能限制）和方法（如更新无人机专用操作员显示的程序例程）的存储与服务中心【DLI 0007】。  
- 必要时，打包和解包数据链数据以优化传输带宽【DLI 0008】。  
- 管理控制和监视数据链操作所需接口【DLI 0009】。  
- 管理控制和监视相关无人机发射与回收（L/R）系统所需接口【DLI 0010】。

2. VSM为连接CUCS元素与UAS间DLI接口的无人机专用功能。VSM应通过保持与无人机及其载荷的闭环控制和通信，使用无人机特定协议、时序及编码方式，隔离CUCS免受无人机接口特殊性的影响【DLI 0011】。VSM还应直接控制与无人机关联的数据链（若有）【DLI 0012】。  
3. 多数情况下，VSM作为CUCS系统组件存在。设想VSM为嵌入式处理单元，解释数据链控制/状态消息，接口控制数据终端（CDT）以初始化及操作数据链，打包向无人机传输/接收数据，并执行地面实时控制（如对移动着陆平台上无人机着陆的闭环控制、紧急恢复等）。VSM也是CUCS系统架构中，为遗留UAS实现STANAG 4586兼容且对无人机设计影响最小的迁移路径组件。

#### 1.5 接口

##### 1.5.1 物理接口

1. DLI（图4-3示意）可由多个物理接口组成。至少应有一条全双工双向数字数据接口，为以下通信提供通路：

- 发送至无人机、载荷、数据链及VSM的命令【DLI 0019】  
- 发送至UAS各元素的环境数据【DLI 0020】  
- 来自无人机、载荷、数据链及VSM的状态信息【DLI 0021】  
- 来自无人机的数字载荷数据——视数据速率和带宽，数字载荷数据可能需在特定DLI实现中包含独立物理接口【DLI 0022】

2. 若需与空中交通管制（ATC）进行语音通信，超出本STANAG范围。  
3. 本STANAG设想数据采用全数字媒介，模拟数据接口不属于DLI范围。若无人机以模拟格式传输影像或其他传感器数据，VSM应提供模拟至数字转换（“帧抓取”）服务【DLI 0023】。为避免C4I系统需模拟视频时模拟-数字-模拟不必要转换，VSM应为显示器或外部馈入（通过CCISM）提供专用物理接口【DLI 0024】。  
4. CUCS与VSM间物理接口因VSM实际位置而异。VSM可驻留地面作为UCS一部分和/或无人机子系统。当VSM接口至CUCS时，物理接口应支持TCP/IP和UDP/IP协议（如Ethernet（IEEE 802）—10Base2、10BaseT、100BaseT、1000BaseT、光纤等）【DLI 0025】。VSM随后接口数据链，采用STANAG 7085规定的标准。VSM驻留无人机时，接口至数据链VDT部分定义于STANAG 7085。CDT/VSM应支持DLI兼容的CUCS接口【DLI 0027】。

<img src="https://cdn.mathpix.com/cropped/2025_07_17_c3ddec59b5857ee129e1g-065.jpg?height=1020&width=1414&top_left_y=1506&top_left_x=258" width=500/>

图4-4：DLI接口内容高级示意  

##### 1.5.2 系统延迟与实时接口考虑

1. 在飞行器控制系统中，设计者通常应考虑所有延迟来源，以确保满意的操纵性能和系统稳定性。这一点在采用手动控制飞机的无人系统（UAS）中尤为重要。在此类系统中，关键关注点是无人机与操作者控制及显示之间的总延迟，因为这一属性将强烈影响系统在手动控制下的性能。
2. 在UCS架构中，实时的无人机及数据链控制功能（如需要）由VSM管理。CUCS执行非实时处理，DLI并未规定VSM与CUCS之间交换的固定或最大延迟。尽管消息传递可被保证，但延迟不能保证，因此通过DLI传递信号的实时性能不被保证。一般而言，DLI物理介质将具备足够高的数据速率，以支持合理速率的人机交互控制和显示数据需求。然而，由于DLI介质可能同时被多个VSM共享，消息速率和总带宽可能会变化，且不应被依赖。
3. 构建符合UCS的系统时，有多种可能的方法：

- VSM自主执行所有实时功能，支持控制和显示所需的数据交换被设计为非实时性质。在此方法中，呈现给用户的控制和显示不依赖于特定延迟。延迟变化被管理以不影响显示的可读性或控制的性能。例如，控制杆滤波器中的积分器可能使用动态积分时间，以避免跨越DLI的数据传输时序变化。
- 系统设计利用DLI和CUCS中测得的吞吐量，使用近实时技术，避免显著延迟，但包含特殊机制以感知并适应过高延迟。此方法存在一定风险，因为CUCS硬件配置可变，某些配置可能不支持特定功能或方法。
- 某些手动控制和显示至关重要，将以无明显延迟（等时）处理。在这种情况下，处理在VSM中执行，设备接口由VSM直接管理，逻辑上或物理上不通过DLI。该方法可能被缺乏自主操作能力的遗留系统和无人机使用。

4. 若VSM置于无人机内部，则CDT应具备符合DLI的接口并自主执行数据链的实时控制【DLI 0029】。

#### 1.6 按互操作级别定制

各种消息集的适用性随互操作级别变化。例如，无人机转向命令不适用于第1至第3级互操作（LOI，详见第3章）。CUCS应过滤消息，仅响应和发送当前活跃LOI适用的消息【DLI 0030】。相关对应表见表4-5“消息摘要及属性”，定义了每条消息的适用性。

#### 1.7 接口数据表示理念

接口数据表示的创建方法概述于以下小节。消息生成的一般需求被识别，每条消息的详细定义见第4节。建议在新消息规范中尽可能遵守这些需求。

##### 1.7.1 字节顺序、位编号与浮点数

1. 字节顺序应为最高有效字节优先（大端序）【DLI 0031】。位编号从最低有效位开始计数，起始为0，称为LSB 0。

<img src="https://cdn.mathpix.com/snip/images/90ze3CHGLo46V0Nsn5dblRvfovUxoXkr7getSwDpDWo.original.fullsize.png" width=500/>

图4-5：位编号示例（2字节字段）

2. 浮点数应符合IEEE二进制浮点数算术标准，ANSI/IEEE标准754-1985，美国电气电子工程师协会，1985年8月【DLI 0032】。

##### 1.7.2 单位

1. 由于未来可能涉及多种无人系统，且UCS规划的互操作性具国际性质，DLI中消息类型的开发理念应尽可能使用公制单位（SI，ISO/IEC 80000）【DLI 0033】。DLI仅为CUCS与VSM之间的系统内部表示，任何为便于人工阅读或习惯（如m/s转节）所需的转换，应在相应用户界面执行。
2. 所有地固定位参考应以相对于WGS-84椭球体的纬度-经度系统表示，单位为弧度，使用双精度浮点数【DLI 0034】。其他系统表示（如UTM）应在使用点转换【DLI 0035】。所有时间应使用自1970年1月1日起的秒数表示，采用IEEE双精度浮点数，基于协调世界时（UTC）【DLI 0036】。
3. 所有角度参数应以弧度表示【DLI 0037】。方位角应从真北顺时针测量【DLI 0038】。高程应以局部水平面为参考，正值指向天顶【DLI 0039】。
4. 以兆比特（或兆字节）指定的数据量，应定义为$1,000,000$字节（或比特），而非$2^{20}(1024 \times 1024)$【DLI 0040】。（参考：国际标准IEC 60027-2修订2，电工用字母符号——第2部分：电信与电子学，1999年1月）

##### 1.7.3 命令数据打包方法

打包数据的总体目标是在最小化消息头开销与最大化消息集模块化之间取得平衡。此外，还意图将数据分类为逻辑消息组合，例如无人机状态时，区分惯性数据、机体相对数据及风相对数据。命令与状态数据分为不同消息组，区分上行消息与下行消息。一般需确认回执的数据与无需确认的状态信息分开。最后，尝试避免同一数据出现在多个消息中，以防止不一致。

##### 1.7.4 无人机特定数据展示理念

1. 通过本文件第4节识别的通用DLI消息集，要求能够控制和监视无人机。通用消息集提供合格操作员通过通用控制面板和对话框控制和监视大部分无人机功能的能力。VSM需支持所有适用于其开发无人机的格式化DLI消息。通用消息集中适用于无人机的所有数据元素因此对CUCS可用，且可按需显示在通用显示器中，并允许合格操作员控制通用无人机功能。
2. 无人机可能需要的某些控制和监视需求未包含在通用DLI消息集中，因为它们不适用于所有无人机。因此，应具备为这些无人机特定功能提供额外操作员显示和控制的能力【DLI 0041】。该能力称为“远程显示”能力或“无人机特定”机制。
3. DLI使VSM能在CUCS上显示信息，例如：

- 无人机特定显示显示状态
- 无人机特定显示允许选择控制选项和模式
- 无人机特定显示独立于CUCS能力，除指定的通用服务（如VSM能力变化不应受CUCS能力限制）
- 无人机特定显示由CUCS控制
- 无人机特定显示信息通过DLI接口传递
- 无人机特定数据意图应被保持

4. 重要的是，CUCS不知道无人机特定参数的预期用途，且无法操作这些参数。无人机特定数据在CUCS显示器上被“远程显示”。这些显示的内容和布局由VSM控制，因而针对特定无人机量身定制。VSM进程控制特定无人机功能，并通过这些远程显示提供相关状态信息。

###### 1.7.4.1 无人机特定显示服务

为满足本节中识别的远程显示需求，应支持以下服务【DLI 0042】。显示格式由VSM决定。以下服务为CUCS平台支持所有VSM互操作性的最低要求，以及VSM平台为互操作性应支持的最大允许范围【DLI 0043】：

* Web浏览器服务应兼容：

  * [http://www.w3.org/TR/REC-CSS1](http://www.w3.org/TR/REC-CSS1)
    层叠样式表，第1级
    W3C推荐 1996年12月17日，修订于1999年1月11日
  * [http://www.w3.org/TR/REC-DOM-Level-1](http://www.w3.org/TR/REC-DOM-Level-1)
    文档对象模型（DOM）第1级规范
    版本1.0
    W3C推荐 1998年10月1日
  * [http://www.w3.org/TR/html4](http://www.w3.org/TR/html4)
    HTML 4.01规范
    W3C推荐 1999年12月24日
  * [http://www.ecma-international.org/publications/files/ecma-st/Ecma-262.pdf](http://www.ecma-international.org/publications/files/ecma-st/Ecma-262.pdf)
    参考为Jscript或JavaScript
    ECMA Script 262或ISO/IEC 16262 第3版 1999年12月【DLI 0044】
* Java小程序机制应兼容：

  * Sun Microsystems兼容JRE V1.1或更高版本【DLI 0045】
    Java小程序机制应集成于Web浏览器服务中【DLI 0345】。
* X服务器服务应兼容：

  * X11R6 X窗口系统第6版
    [http://www.x.org](http://www.x.org) 【DLI 0046】

###### 1.7.4.2 无人机专用显示请求与呈现

1. 无人机专用（远程）显示由CUCS通过通用格式化DLI消息集提供的机制向VSM发起请求。  
2. 远程显示理念为：通用控制面板应先于远程显示呈现给操作员【DLI 0047】，且CUCS应已获得指定无人机的控制授权【DLI 0048】。为启动VSM远程显示传输，CUCS应向VSM发送消息#1202 CUCS资源报告【DLI 0049】。VSM在接收该消息后，应传送所需无人机专用控制面板【DLI 0050】。CUCS资源报告提供VSM远程显示的传输和定位细节。  
3. CUCS需包含浏览器、X窗口显示能力和Java运行环境，符合1.7.4.1节无人机专用显示服务要求。CUCS负责远程服务的正向控制，包括安全设置【DLI 0051】。CUCS须确保选用适当服务支持远程显示。以浏览器服务为例，要求浏览器具备足够的安全设置，防止未请求窗口弹出；可能具备隐藏关闭按钮、禁止调整远程显示窗口大小等能力。  
4. 无人机专用显示可用于请求更多无人机专用显示。新显示应在消息#1202分配资源或请求窗口内呈现【DLI 0052】。操作员发起VSM远程显示的第二方法为通过STANAG 4586消息#1001子系统状态详细请求的“子系统状态报告参考”字段。这保证操作员必须请求所有远程面板显示，从而保持对显示的正向控制。  
5. VSM不得通过消息#1100或#1101启动远程显示，除非CUCS资源报告已发送至VSM【DLI 0053】。  
6. VSM应通过消息#1202 CUCS资源报告中指示的远程服务向CUCS传送远程显示【DLI 0054】。该机制提供第二层安全保障，确保远程显示在CUCS预期位置显示，避免覆盖关键数据。  
7. 详见4.1.7.3节消息#1202 CUCS资源报告的附加要求。  
8. 图4-6展示使用子系统参考报告生成远程显示的示意。通用显示会向操作员指出发动机#2故障警告及需在CUCS显示屏放置无人机专用显示。该附加信息通常为无人机特有，通用消息集未涵盖。  
9. 图4-6中，通用显示向操作员提供发动机#2故障通用警告。警示器闪烁提示发动机警告状态存在，并告知可请求更详细显示。操作员点击警示器后，触发通过通用消息机制向VSM请求发动机#2详细状态信息。随后VSM通过无人机专用机制将信息传送至CUCS，CUCS以受控方式向操作员显示该信息。
10. 无人机专用机制支持为特定无人机创建CUCS显示，无需在通用显示中呈现特定无人机数据，避免显示界面杂乱。该机制也消除CUCS需维护庞大且难以更新的多种无人机显示库的需求。此理念中，VSM负责提供详细系统管理所需信息，该信息在操作员需用前保持隐藏。

<img src="https://cdn.mathpix.com/cropped/2025_07_17_c3ddec59b5857ee129e1g-071.jpg?height=1001&width=1363&top_left_y=299&top_left_x=232" width=500/>

图4-6：生成无人机专用显示的典型场景


##### 1.7.5 无人机、数据链和CUCS识别（ID）编号

1. 每条消息应包含指定正在通信的无人机和CUCS的识别（ID）编号的字段【DLI 0055】。某些消息还包含数据链ID和VSM ID。VSM ID用于那些可能需要在与无人机、有效载荷或数据链连接之前，在CUCS与VSM之间传输的消息中。编号的目的是唯一标识任意组合的多个CUCS、无人机和数据链的任意实体，这些实体都可能与同时控制零个或多个无人机的VSM交互。控制零个无人机的VSM可能需要在接收来自另一STANAG 4586地面站的无人机交接之前与CUCS建立连接。
2. ID编号应为4字节数字【DLI 0056】。第一个（最高有效）字节应为该CUCS或无人机的拥有者ID【DLI 0057】。STANAG 4586的管理方可自行分配拥有者ID并识别相关的拥有者ID管理机构。255（十六进制FF）为保留编号【DLI 0059】。剩余三个字节应根据拥有者ID管理机构确定的程序和协议分配，确保在役设备的唯一ID编号【DLI 0060】。
3. 下表为各拥有者ID分配的整数。未来分配或更改请联系4586管理方。

| 所有者ID                         | 分配编号 |
| :------------------------------- | :------- |
| BELGIUM（比利时）                | 002      |
| BULGARIA（保加利亚）             | 003      |
| CANADA（加拿大）                 | 004      |
| CZECH REPUBLIC（捷克）           | 005      |
| DENMARK（丹麦）                  | 006      |
| ESTONIA（爱沙尼亚）              | 007      |
| FRANCE（法国）                   | 008      |
| GERMANY（德国）                  | 009      |
| GREECE（希腊）                   | 010      |
| HUNGARY（匈牙利）                | 011      |
| ICELAND（冰岛）                  | 012      |
| ITALY（意大利）                  | 013      |
| LATVIA（拉脱维亚）               | 014      |
| LITHUANIA（立陶宛）              | 015      |
| LUXEMBOURG（卢森堡）             | 016      |
| NETHERLANDS（荷兰）              | 017      |
| NORWAY（挪威）                   | 018      |
| POLAND（波兰）                   | 019      |
| PORTUGAL（葡萄牙）               | 020      |
| ROMANIA（罗马尼亚）              | 021      |
| SLOVAKIA（斯洛伐克）             | 022      |
| SLOVENIA（斯洛文尼亚）           | 023      |
| SPAIN（西班牙）                  | 024      |
| TURKEY（土耳其）                 | 025      |
| UNITED KINGDOM（英国）           | 026      |
| UNITED STATES（美国）            | 027      |
| PfP（伙伴国家）                  |          |
| ALBANIA（阿尔巴尼亚）            | 100      |
| ARMENIA（亚美尼亚）              | 101      |
| AUSTRIA（奥地利）                | 102      |
| AZERBAIJAN（阿塞拜疆）           | 103      |
| BELARUS（白俄罗斯）              | 104      |
| CROATIA（克罗地亚）              | 105      |
| FINLAND（芬兰）                  | 106      |
| GEORGIA（格鲁吉亚）              | 107      |
| IRELAND（爱尔兰）                | 108      |
| KAZAKHSTAN（哈萨克斯坦）         | 109      |
| KYRGYZSTAN（吉尔吉斯斯坦）       | 110      |
| REPUBLIC of MOLDOVA（摩尔多瓦）  | 111      |
| RUSSIAN FEDERATION（俄罗斯联邦） | 112      |
| SWEDEN（瑞典）                   | 113      |
| SWITZERLAND（瑞士）              | 114      |
| TAJIKISTAN（塔吉克斯坦）         | 115      |
| TURKMENISTAN（土库曼斯坦）       | 116      |
| UKRAINE（乌克兰）                | 117      |
| UZBEKISTAN（乌兹别克斯坦） |   118    |
| Other（其他）              |   119    |
| Israel（以色列）           |   118    |

表 4-1 拥有者ID表

4\. 每个符合STANAG 4586的无人机、数据链和CUCS应在各自类型内被分配唯一的系统ID【DLI 0062】。三种类型（无人机、数据链、CUCS）中不同类型的设备可能存在相同的ID编号，但应尽量避免。如果跨类型共享编号，应遵循成员国的相关程序【DLI 0063】。

5\. 在实体不是“无人机”的情况下（例如飞艇、杆装传感器和“外挂”自包含任务包），该实体被视为无人机（尽管其LOI 4/5功能非常有限或不存在）。这些实体或平台应由拥有者ID管理机构分配无人机ID【DLI 0485】。

6\. 本文档及配套实施指南中，ID编号将以用冒号分隔的单个十六进制字节表示（例如10:4E\:F3:06）。编号FF\:FF\:FF\:FF保留为广播ID，指代所有无人机或所有CUCS【DLI 0064】；编号FF:00:00:00保留为空ID【DLI 0065】。0.xx.xx.xx保留为描述未具体实例化的逻辑无人机的逻辑ID【DLI 0346】，该逻辑ID由VSM制造商定义。

7\. 每个符合STANAG 4586的设备应负责维护其ID编号的永久记录，并能在请求时提供其ID编号【DLI 0066】。对于未分配ID的无人机和数据链系统，所使用的VSM应维护设备与分配ID编号的对应关系【DLI 0067】。

8\. VSM接收到广播请求ID的CUCS授权请求消息（消息#1，见4.1.1.1节）时，应至少响应一个VSM授权响应消息（消息#21，见4.1.1.3节），如果VSM可控制多种无人机/有效载荷类型/子类型组合，则可响应多个。当VSM未连接至无人机/有效载荷时，无人机ID字段应填充唯一的逻辑无人机ID【DLI 0068】，并应报告至多等同于VSM可控制/监控的无人机实体数量的逻辑ID【DLI 0347】。

### 2 按任务阶段划分的系统功能需求

DLI数据内容由CUCS与VSM之间通信的功能需求决定。DLI数据元素所对应的通用功能及无人机/有效载荷特定功能在第4节详细描述。功能按无人机任务阶段分类。在每个任务阶段中，功能被标识为通用（对所有无人机和有效载荷类型一致）或无人机特定。大多数无人机特定功能因程序或数据内容不同，需CUCS和VSM交互确定其实现方式。下表描述了无人机任务各阶段的功能。

| 任务阶段             | 通用功能                                                     | 无人机特定功能                                               |
| :------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 任务前               | 可互操作的任务规划<br>任务计划/验证上传过程<br>通用内置测试（BIT）<br>任务开始/否决 | 无人机可用性<br>飞行计划验证<br>失联策略<br>无人机特定BIT<br>有效载荷配置验证及BIT检查<br>任务前检查与初始化<br>已下载任务计划验证<br>UCS/无人机通信<br>时钟同步（无人机和UCS） |
| 起飞                 | 本地空中交通管制通信<br>完成检查表验证<br>UCS/无人机通信验证<br>起飞许可获取 | 地面交通模式/计划执行<br>地面操作安全约束监测<br>发射<br>中止序列管理 |
| 进入/退出            | 任务执行监测<br>激活主动发射源（如雷达）                     | 无人机特定交接数据管理                                       |
| 主要任务区（目标区） | 通用有效载荷控制<br>有效载荷数据处理<br>任务执行监测<br>系统状态概要信息 | 详细系统状态监测<br>有效载荷特定控制与监测<br>有效载荷特定数据处理 |
| 接近/着陆            | 空管协调<br>执行恢复程序                                     | 接近飞行路径获取与维持<br>执行着陆序列<br>执行滑行序列<br>关闭/安全检查表及程序执行 |
| 任务后报告           | 任务执行总结报告                                             | 无人机维护状态报告                                           |
| 独立于阶段的飞行中   | UCS间无人机交接管理<br>任务执行监测<br>任务阶段监测<br>通用健康与状态监测及预警<br>动态飞行路径重新规划<br>多架（可能不同）无人机控制<br>数据记录/缓冲<br>CDT控制、状态与初始化 | 详细健康与状态监测<br>失联策略执行与监测<br>操作员控制模式管理<br>跨子系统持续内置测试（CBIT）<br>差分GPS修正 |

表 4-2 按任务阶段的通用与无人机特定功能对比

### 3 消息分发标准

#### 3.1 引言

1. 核心无人机控制系统（CUCS）的主要目标之一是提供多种不同无人机平台和C4I系统中通用的功能集。CUCS的部分功能包括提供与各国C4I系统的连接、为具备相应训练背景的合格用户提供标准控制和显示、提供标准运维显示以及为战场态势感知和任务管理提供共通基础。然而，为了真正实现不同无人机平台和多样外部地面系统之间的互操作，CUCS应有一致的方式从外部系统获取输入并输出信息。必须建立一种通用“语言”，既足够稳健以支持全方位功能，又灵活适应快速变化的技术环境。DLI特别解决此问题，作为无人机特定系统与CUCS之间的接触点【DLI 0069】。
2. 提供进程间（及处理器间）通信的通用方法是“消息传递”技术。在消息传递系统中，为共同目的服务的数据被聚合为结构化包，由发送方和接收方共同理解。所需的仅是消息传输系统、确保正确传输和资源分配管理的机制，以及标准化的数据打包和格式定义。如果提供了常用功能库，系统集成将以较低成本和较少团队互动实现良好鲁棒性。适当定义时，此技术可在应用中灵活、详尽且稳健。若定义为开放标准，还能保证不同系统间的互操作。
3. 本节定义了CUCS内消息内容和处理方法。一般而言，进程间通信应作为消息事务实现，数据以半双工方式从一个进程传递到另一个进程【DLI 0070】。
4. 进程内部的数据通信可由开发者选择管理方式，只要符合良好软件工程实践。进程内任务间互操作完全由开发者控制，因为性能限制可能不允许消息系统开销。

#### 3.2 需求

消息处理结构至少应包括以下要素：

* 标准信息的结构化数据格式和内容定义【DLI 0072】。
* 针对CUCS内支持多种系统类型的通用功能所需信息，开发了一组消息，详细定义了变量、数值、数据格式和消息内位置，以便按一致方案高效处理信息。该结构不应被无人机或系统特定“包袱”所拖累，仅涵盖通用目的内容【DLI 0443】。
* 传输非结构化数据的机制【DLI 0073】。
* 某些信息需在无人机与支持平台特定功能的地面处理元素间交换。通用消息方案应能传递CUCS未知格式和内容但需通过的数据信息【DLI 0444】。
* 管理任何类型消息传输的机制【DLI 0074】。
* 支持多种消息类型，并定义区分类型以正确处理的机制【DLI 0445】。此外，UAS将有多条信息通道用于系统组件间通信，消息系统必须能管理多源多目标跨多通信通道的信息传递。
* 管理多条（可能冗余）通信通道与多进程间通信的机制【DLI 0075】。
* 此需求具有多种形式。数据可能需跨多个通道复制以实现冗余，可能需要单进程私有通信或多进程广播通信。为保证互操作性和可移植性，消息传输和路由方式应独立于物理传输机制（如以太网、专用串口、Unix套接字）和传输协议（TCP/IP或UDP，取决端口）【DLI 0076】。
* 对不断扩展的消息类型集合进行分类管理和变更追踪的机制【DLI 0077】。
* 无人机技术快速发展，静态系统定义将很快过时。应支持持续演进的消息类型集合【DLI 0078】。该目录不仅支持消息类型定义，还应支持处理新旧消息类型的开源方法库【DLI 0079】。

#### 3.3 消息处理方法

##### 3.3.1 消息封装信息

1. 每条消息应采用图4-7定义的消息封装结构【DLI 0080】。报头含消息处理软件管理消息传输与分发至相应实体的信息。报尾含校验和，用于识别传输错误。下文逐项说明封装内各数据项及其在消息处理系统中的作用。

<img src="https://cdn.mathpix.com/snip/images/YY3FVx9ESRc7aiGhfT_VNZl7wsML6fI8IBjzWY0_Cz8.original.fullsize.png" width=500/>

图4-7 消息封装结构

2\. 特别说明：除非另有说明，下述所有报头项均为32位无符号整数【DLI 0081】。消息实例编号可由应用调用核心库函数按序生成。消息实例ID应保证在同一任务中不重复使用【DLI 0082】，但因ID使用频率和任务时长可能无限制，开发者需确保任何ID重用不会导致接收进程含义歧义【DLI 0083】。（例如，可通过为重用消息打上日期时间标签来管理）

###### 3.3.1.1 接口定义文档（IDD）版本

每条消息应包含定义其结构的接口定义文档（IDD）版本号【DLI 0084】。版本号应置于固定10字节字段内，以ASCII字符的空结尾字符串表示【DLI 0085】。版本管理用于错误检测函数验证格式一致性【DLI 0086】。表4-3为当前分配的IDD版本。

| STANAG 4586文档版本        | IDD版本号 |
| :------------------------- | :-------- |
| 第1版                      | "1"       |
| 草案第2版                  | "2"       |
| 草案第2版，勘误1           | "3"       |
| 草案第2版，勘误2           | "4"       |
| 草案第2版，勘误3           | "5"       |
| 草案第2版，勘误4           | "6"       |
| 草案第2版，勘误5           | "7"       |
| 第2版                      | "8"       |
| 第2版，版本1               | "9"       |
| 第2版，版本2               | "10"      |
| 第2版，版本3               | "11"      |
| 第2版，版本4               | "12"      |
| 第4版，AEP-84卷I版A，版本1 | "12"      |

表4-3 STANAG 4586文档版本


###### 3.3.1.2 消息实例标识符

实例标识符应唯一标识给定类型的每个消息实例【DLI 0087】。实例标识符被系统用来协调流数据，并在应用层识别丢失的特定类型消息。实例标识符号码不得重复使用，除非消息体中提供了避免标识符歧义的其他规定【DLI 0088】。

###### 3.3.1.3 预留

###### 3.3.1.4 消息类型

消息类型是与下述定义消息类型关联的整数值。消息类型应从1递增编号至n，n为小于2000的整数，代表最高批准的消息类型【DLI 0089】。预计标准消息类型数量将增加，北约将成立委员会维护标准消息列表的配置控制。对于无人机特定消息（私有），类型编号应在2000至最大整数之间【DLI 0090】。

###### 3.3.1.5 消息长度

1. 长度应为32位无符号整数，表示“消息数据”中的字节数【DLI 0091】。长度应为1至514之间的任意数【DLI 0092】。
2. 注意，IPv4下UDP协议保证最小数据报尺寸为576字节，所有实现必须支持。减去IPv4头部20字节和UDP头部8字节，剩余548字节为保证互操作性的数据报最大数据量。因此，任何单条消息或多消息数据报不得超过此数据限制【DLI 0348】。减去消息封装大小34字节，单条消息最大长度为514字节，且数据报中无空间放入其他消息。打包多个消息到同一数据报时应特别注意。

###### 3.3.1.6 流ID

流ID的目的是为共享单一通信通道的多个进程之间分离数据流，以及从单一源到多个目的地的消息提供手段。未来能力。

###### 3.3.1.7 消息属性

消息属性是一个带有两个子字段的位图字段。最高有效位用于指示是否应确认接收该消息【DLI 0507】。当该位为“1”时，应发送确认；为“0”时，不发送确认【DLI 0508】【DLI 0509】。其余31位保留供未来使用。

| 无确认 $=$  0 <br> 确认 $=1$ | 预留供未来使用                                      |
| :------------------------------ | :------------------------------------------------- |
| 31                              | 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 09 08 07 06 05 04 03 02 01 00 |

图4-8：消息属性

###### 3.3.1.8 预留

###### 3.3.1.9 校验和

校验和用于判断消息传输或处理过程中的错误存在【DLI 0101】。校验和为4字节无符号整数，通过对消息中除校验和外的所有数据按字节无符号二进制加法计算，并截断至4字节【DLI 0102】。

###### 3.3.1.10 封装错误

包含一个或多个封装错误的消息应当视为未接收（即忽略）【DLI 0451】。当消息中发现封装错误时，接收组件无须处理该数据报中的其余消息。封装错误详见下表4-4。

| 错误名称            | 描述                                                           | 响应                         |
| :------------------ | :------------------------------------------------------------ | :--------------------------- |
| 不支持的IDD         | IDD被设置为未知或不支持的版本。                                | 忽略此DLI消息。              |
| 长度不正确          | 消息长度设置为0，超过514，或超过数据报大小限制。                | 忽略此DLI消息。              |
| 校验和不正确        | 校验和值与第3.3.1.9节定义的不符。                             | 忽略此DLI消息。              |

表4-4：封装错误

### 4 消息格式

#### 4.1 通用消息格式

1. 消息摘要及属性表（表4-5）以及本节中各个数据元素的描述定义了为了通过DLI实现所需无人机北约互操作级别（LOI）必须实现的消息【DLI 0103】。无论无人机类型如何，某些信息必须定期从无人机传递至控制系统，如位置、姿态、一般无人机健康状态、运行状态等【DLI 0104】。控制系统还将拥有一组通用命令和对无人机的请求，如无人机或有效载荷操作命令。本节主要目的是定义无人机特定功能与符合STANAG 4586的CUCS实现中通用显示及控制功能之间通过DLI通信的通用消息结构集。本章旨在提供一个可扩展的结构和初步消息定义集，以适应无人机技术的发展。

2. 通用消息集的目标是为CUCS提供一组通用显示所需的标准信息。也为无人机特定消息类型做出规定。制造商可根据其设计需要提供任何数量的信息，无论是否与通用消息类型冗余。然而，为保证与CUCS功能的互操作性，必须支持通用消息类型，尽管并非每个应用都需包含所有数据元素【DLI 0105】。接收进程应执行范围检查并妥善处理越界值【DLI 0106】。越界值、无效数据和不支持的消息不得对CUCS/VSM产生不良影响【DLI 0107】。
   
3. 下述第4.1.1节详述的所有消息均以时间戳开头。DLI消息的第一个字段是时间戳，指示消息创建时间，不一定是数据当前或准确的时间。对于未知延迟可能造成问题的数据，建议在私有消息中也包含“有效时间”，指示数据的有效时刻。
   
4. 在表4-5中，每种消息类型用右侧四列中的几个属性标识。第一属性为“推送/拉取”。推送消息定期或基于事件传送，无需请求即可发送。拉取消息为响应请求而传送。此机制用于确保数据链带宽不被无用数据浪费。
   
5. 第二属性（“来源”）标识消息发出实体（CUCS或VSM）。
   
6. 表中的第三属性为LOI。LOI将格式化DLI消息与CUCS对无人机及/或其有效载荷的控制级别关联，因此基于指定LOI定义消息实现需求。LOI 2消息是控制站用于监控无人机及其有效载荷状态所必需的消息。然而，能接收其他STANAG兼容数字有效载荷数据（如STANAG 4545、7023、4609）及相关辅助数据（指向、位置）的地面站，在不接收格式化LOI 2 DLI有效载荷消息的情况下，即为STANAG 4586 LOI 2兼容，例如这些地面系统对LOI 2而言消息是可选的。表4-5中LOI 2条目对无上述兼容数字有效载荷数据的系统是强制性的。当无人机未授权某CUCS访问其信息，且该CUCS已发现该无人机时，只有用于发现和配置的消息（#20、21、300、301、500、1203、1300-1303、1400-1403）及下载任务计划（800-806、900）应由无人机使用监控CUCS的CUCS ID发送【DLI 0486】。所有其他消息（如#101、110、302）应使用控制无人机/有效载荷/数据链的CUCS ID；若无CUCS控制该子系统，无人机将CUCS ID设置为FF:FF:FF:FF【DLI 0487】。
   
7. LOI 3消息用于控制可能装载于无人机上的有效载荷。LOI 4消息用于控制和监控无人机，但不具备发射或回收能力。因发射与回收具无人机特性，LOI 5不通过通用STANAG 4586消息实现，应通过VSM及无人机特定机制/消息实现【DLI 0109】。因此，LOI 5无定义的格式化DLI消息。表中指明了每种会话类型必须支持的LOI，但配置和设置期间，任何LOI 2消息均可发送，即使VSM尚未授予LOI会话。注意，唯一例外是消息#49确实提供了LOI 4/5字段的控制。VSM将在授权LOI情况下配置消息#49“选择飞行路径控制模式”。
   
8. 此外，低级LOI授权的CUCS可通过通用信息请求或安排消息更新命令请求通常与高级LOI相关的特定状态消息。若VSM不支持高级LOI，可选择忽略该请求。
   
9.  表中“Y”表示CUCS必须支持且无人机/数据链/VSM可支持的消息。“-”表示CUCS不发送，且无人机/数据链/VSM可发送的消息。
    
10. 第四属性体现在“允许最大延迟（毫秒）”列，定义了HCl与DLI接口间最大传输延迟。

11. 注意：在AEP-84第一卷的开发过程中，表4-5中标识的消息已根据其功能（例如，系统标识消息、飞行器指令与状态消息、载荷指令与状态消息）进行分组和编号。该领域的最终修改之一是重新定义编号系统，为每个功能消息组分配编号范围（例如，飞行器指令与状态消息编号范围为40至199）。为了便于将此消息编号方案与CST维护团队及其支持的国家工业成员熟悉的先前方案关联，表4-5的第1列和第2列提供了必要的信息。

12. 所有数据链接接口（DLI）通用消息均应通过配置为使用UDP组播的端口传输 [DLI 0184]。UDP组播使多个进程（VSM和CUCS）能够在单一IP地址和端口号上相互通信。由于UDP不保证传输可靠性，需确认接收的消息应使用消息确认（消息#1400）进行确认 [DLI 0185]。标记为“推送”（Push）类型的消息可无需确认地通信，允许传输流媒体和临时数据（如周期性的无人机状态数据），此类数据不需要且不期望重传。标记为“拉取”（Pull）类型的消息是对查询的响应，消息本身即为确认。UDP组播的“拉取”类型消息使多个CUCS能够通过监控受其他CUCS控制的无人机和载荷的查询/响应事务，实现彼此以及与多个VSM的同步。然而，如果响应延迟可能成为问题，可能需要确认收到生成拉取类型消息的请求。在这种情况下，消息头中的消息确认位应被用于满足此类确认要求 [DLI 0186]。

13. 默认条件为推送类型消息不需要确认，拉取类型消息即构成其响应请求的确认 [DLI 0187]。

14. 载荷和无人机子系统已开发出一组通用消息，用于常见无人机载荷及其子系统。CUCS和/或VSM不必支持不适用于其系统配置的通用载荷消息或无人机子系统消息。但若通用载荷或子系统消息适用于该无人机系统，应支持对应格式的DLI消息 [DLI 0189]。

15. 在载荷配置消息（消息#300）中已确定一组通用载荷类型。与每种载荷类型相关的通用DLI消息见表4-6。

| 载荷类型                | 必需消息                                              | 适用LOI    | 消息类型          |
| :--------------------- | :--------------------------------------------------- | :--------- | :---------------- |
| 所有LOI 2及3           | 消息#300：载荷配置                                   | 2及3       | 配置              |
| EO/IR及固定载荷        | 消息#301：EO/IR配置状态                              | 2及3       | 配置              |
|                        | 消息#302：EO/IR/激光操作状态                        | 2及3       | 状态              |
|                        | 消息#200：载荷指令                                  | 3          | 指令              |
|                        | 消息#201：EO/IR/激光载荷指令                        | 3          | 指令（模式）      |
| SAR                    | 无配置消息                                           |            | 配置              |
|                        | 消息#303：SAR操作状态                               | 2及3       | 状态              |
|                        | 消息#200：载荷指令                                  | 3          | 指令              |
|                        | 消息#202：SAR载荷指令                               | 3          | 指令（模式）      |
| 可投放（存储）载荷      | 无配置消息：消息#304：存储管理系统状态消息，消息#203：存储管理系统指令 | 2及3       | 状态              |
|                        |                                                      | 3          | 指令              |
| 通信中继               | 无配置消息                                           |            | 配置              |
|                        | 消息#305：通信中继状态                              | 2及3       | 状态              |
|                        | 消息#204：通信中继指令                              | 3          | 指令              |
| CBRN                   | 消息#209：CBRN载荷配置指令                          | 3          | 配置              |
|                        | 消息#212：CBRN载荷显示配置指令                      | 3          | 配置              |
|                        | 消息#309：CBRN探测消息                              | 2及3       | 状态              |
|                        | 消息#310：CBRN载荷配置状态                          | 2及3       | 状态              |
|                        | 消息#311：CBRN载荷操作状态                          | 2及3       | 状态              |
|                        | 消息#313：CBRN载荷详细信息响应                      | 2及3       | 状态              |
|                        | 消息#314：CBRN载荷详细信息估计响应                  | 2及3       | 状态              |
|                        | 消息#208：CBRN载荷指令                              | 3          | 指令              |
|                        | 消息#210：CBRN载荷详细信息请求                      | 2及3       | 指令              |
|                        | 消息#211：存储容量管理请求                          | 3          | 指令              |
| CBRN远程               | 消息#209：CBRN载荷配置指令                          | 3          | 配置              |
|                        | 消息#212：CBRN载荷显示配置指令                      | 3          | 配置              |
|                        | 消息#213：载荷扫描窗口配置指令                      | 3          | 配置              |
|                        | 消息#309：CBRN探测消息                              | 2及3       | 状态              |
|                        | 消息#310：CBRN载荷配置状态                          | 2及3       | 状态              |
|                        | 消息#311：CBRN载荷操作状态                          | 2及3       | 状态              |
|                        | 消息#312：载荷扫描窗口操作状态                      | 2及3       | 状态              |
|                        | 消息#313：CBRN载荷详细信息响应                      | 2及3       | 状态              |
|                        | 消息#314：CBRN载荷详细信息估计响应                  | 2及3       | 状态              |
|                        | 消息#208：CBRN载荷指令                              | 3          | 指令              |
|                        | 消息#210：CBRN载荷详细信息请求                      | 2及3       | 指令              |
|                        | 消息#211：存储容量管理请求                          | 3          | 指令              |

表4-6：条件载荷消息组

16. 已为无人机系统识别出一组通用无人机子系统。若无人机装备了其中某子系统，应使用与该子系统相关的通用DLI消息，如表4-7和表4-8所示 [DLI 0190]。

| 类型     | 必需消息                                                    | 适用LOI           | 消息类型             |
| :------- | :---------------------------------------------------------- | :---------------- | :------------------- |
| 记录仪   | 消息#307：无人机载荷/记录仪配置 <br> 消息#306：载荷数据记录仪状态 <br> 消息#205：载荷数据记录仪控制指令 | 3 <br> 2及3 <br> 3 | 配置 <br> 状态 <br> 指令 |

表4-7：条件数据记录仪消息组

| 类型       | 必需消息                         | 适用LOI | 消息类型 |
| :---------: | :------------------------------ | :------ | :-------- |
| 载荷舱     | 消息#206：载荷舱指令            | 3       | 指令      |

表4-8：条件载荷舱门消息组

17. 已为符合STANAG 7085标准的数据链定义了一组通用控制消息。若使用STANAG 7085兼容数据链，必须支持表4-9中标识的消息 [DLI 0350]。所有数据链均应支持数据链分配和状态消息（消息#404和#500），无论数据链类型如何 [DLI 0351]。

| 类型       | 必需消息                        | 适用LOI     | 消息类型     |
| :--------- | :----------------------------- | :---------- | :----------- |
| 数据链     | 消息#400：数据链设置           | 2、3、4/5   | 配置         |
|            | 消息#401：数据链控制指令       | 2、3、4/5   | 指令         |
|            | 消息#402：支架配置消息         | 2、3、4/5   | 配置         |
|            | 消息#403：支架控制指令         | 2、3、4/5   | 指令         |
|            | 消息#501：数据链状态报告       | 2、3、4/5   | 状态         |
|            | 消息#502：数据链控制指令状态   | 2、3、4/5   | 状态         |
|            | 消息#503：支架状态报告         | 2、3、4/5   | 状态         |

表4-9：条件数据链控制消息组

18. 目前尚未定义涵盖其他载荷（例如电子对抗、武器投放、电子战、自卫载荷）的通用指令和状态消息格式。携带此类载荷的无人机应使用上述无人机专用消息机制 [DLI 0191]。本STANAG未来版本将随着此类载荷在各类无人机平台上的广泛应用，纳入相应的标准控制和状态消息。

19. 注意：下表中非私有消息的数据类型应符合以下定义：

- Character(n) — 长度为“n”字节的ASCII字符数据，包括空字符终止符 [DLI 0192]  
- Integer(n) — 带符号整数，n为1、2或4字节（负数采用二补码表示） [DLI 0193]  
- Float — IEEE格式浮点数（4字节） [DLI 0194]  
- Double — IEEE双精度浮点数（8字节） [DLI 0195]  
- Unsigned(n) — 无符号整数，n为1、2或4字节 [DLI 0196]

20. 注意：私有消息可能使用上述未定义的其他数据类型。

21. 此外，具有“保留”值的数据范围不得被CUCS或VSM使用 [DLI 0197]。具有“VSM特定”值的数据范围可由VSM用于支持STANAG定义值不涵盖的功能。某些指令消息中使用位图以允许消息多重寻址，如请求子系统状态时。每个被寻址实体应接受请求，并可针对该实体发送独立的状态消息，或按具体消息规定响应 [DLI 0352]。位图在STANAG 4586中以“Units = Bitmapped”形式指明。

22. 消息中的每个字段均有唯一标识符（Unique ID）。一旦字段被分配唯一ID，无论字段在消息中位置是否变动，该ID均保持不变。唯一ID提供了一种独立于消息和字段位置的引用方式，确保字段移动时引用不受影响。

23. 各DLI消息表中的“范围”栏仅在其限制不同于类型定义时提供范围说明。若无类型隐含的范围外的限制，应填写“无限制”（不可留空）。例如，若类型为Unsigned 1，支持完整1字节无符号整数范围（$0 \leq x \leq 255$），则无需指定范围说明。此举可减少规范冗余，同时突出字段值限制所在，便于开发和测试。该栏名称可进一步细化为“范围限制”。

24. 限定为可打印字符范围的Character(n)数据类型，应仅包含ASCII码范围$0 \times 20-0 \times 7E$内的字符（包括字母、数字、标点、空格及少数符号），并以空字符（0x00）结尾 [DLI 0525]。


#### 4.2  **系统ID信息 (System ID Messages)**
这类信息用于在CUCS（控制与监视单元）和VSM（载具特定模块）/UA（无人机）之间建立和验证连接 。它们处理授权请求、身份识别和授权响应，是确保正确控制和监视关系的基础 。


* **信息 #1: CUCS 授权请求 (CUCS Authorisation Request)**
        此消息由一个CUCS（控制与监视单元）发送给VSM（载具特定模块）或UA（无人机），目的是请求与VSM或UA建立特定LOI（互操作等级）的连接，或者在未指定LOI的情况下发现可用连接 。

* **信息 #20: 载具ID (Vehicle ID)**
        此消息由VSM/UA发送给CUCS，用于识别无人机的身份 。当内容（如载具ID、任务ID或ATC呼号）发生变化时，VSM/UA应发送此消息 。

* **信息 #21: VSM 授权响应 (VSM Authorisation Response)**
        此消息由VSM/UA发送，作为对从CUCS收到的授权请求消息（信息 #1）的回应 。它告知CUCS其请求的LOI和功能是否被批准，以及是否有其他CUCS正在控制该UA/有效载荷 。

---


#### 4.3  **飞行载具命令与状态信息 (Flight Vehicle Command and Status Messages)**
该类别包括从CUCS发送到飞行器的命令以及从飞行器返回的状态报告 。命令涵盖了飞行器的配置、操作模式、灯光、发动机控制和飞行终止等 。状态信息则报告飞行器的惯性状态、相对空气/地面状态、机体感知状态、运行状态和发动机状态，为操作员提供全面的飞行态势感知 。

* **信息 #40: 载具配置命令 (Vehicle Configuration Command)**
        此消息用于根据需要将UA初始化到其当前状态，通常是在为发射做准备时 。当UA配置发生变化时，CUCS会向VSM发送此消息 。

* **信息 #41: 悬停配置 (Loiter Configuration)**
        用于命令UA在处于“悬停飞行模式”时必须使用的悬停模式（如圆形、跑道形等） 。

* **信息 #44: 无人机灯光 (Unmanned Aircraft Lights)**
        此消息由CUCS用于控制UA的各种灯光（如导航灯、闪光灯等）的开关状态 。

* **信息 #45: 发动机命令 (Engine Command)**
        此消息由CUCS用于控制UA发动机的启停等操作 。

* **信息 #46: 飞行终止命令 (Flight Termination Command)**
        为CUCS提供向VSM发出飞行终止命令的方式 。为实现终止，此消息需发送两次，一次用于“准备”（arm），第二次用于“执行”（execute） 。

* **信息 #47: 相对航线/航点绝对参考命令 (Relative Route/Waypoint Absolute Reference Command)**
        CUCS使用此消息来识别相对航线及其关联航点的绝对参考系统，主要用于支持移动平台（如舰船）的发射和回收，以及可重复使用的“航线模板”（如搜索模式） 。

* **信息 #49: 载具操作模式与转向命令 (Vehicle Operating Mode and Steering Command)**
        此消息用于控制载具的操作模式（如航点、悬停）和飞行矢量（如高度、速度、航向） 。它定义了系统的行为方式以及如何解释命令 。

* **信息 #100: 载具配置 (Vehicle Configuration)**
        用于指定载具的特性，主要用于飞行计划目的 。它指明了载具当前的特性，如制造商指定的型号或基于当前负载的性能参数（如最佳巡航速度、总重等） 。

* **信息 #101: 惯性状态 (Inertial States)**
        用于向CUCS发送UA当前的惯性状态，包括位置（经纬高）、速度、加速度、姿态（滚转、俯仰、航向）和角速率等 。

* **信息 #102: 空气与地面相对状态 (Air and Ground Relative States)**
        用于从UA向CUCS发送与空气和地面相关的当前状态参数，如攻角、侧滑角、真空速、指示空速、风速、气压高度等 。

* **信息 #103: 机体相对感知状态 (Body-Relative Sensed States)**
        用于向CUCS发送UA机体坐标系下的直接感知状态，如三轴加速度和角速率 。这些数据可能需要以更高的频率传输，用于控制相关功能 。

* **信息 #104: 载具运行状态 (Vehicle Operating States)**
        用于报告UA在飞行中的当前运行状态，包括被指令的高度、速度、航向、油门设置、襟翼角度、起落架状态等 。

* **信息 #105: 发动机运行状态 (Engine Operating States)**
        用于报告指定发动机的运行状态 。对于多引擎UA，每个引擎都需要一条独立的消息 。

* **信息 #106: 载具操作模式报告 (Vehicle Operating Mode Report)**
        用于报告由信息 #49所命令的载具操作模式 。

* **信息 #107: 载具灯光状态 (Vehicle Lights State)**
        由VSM用于向CUCS报告UA灯光的当前状态 。

* **信息 #108: 飞行终止模式报告 (Flight Termination Mode Report)**
        用于报告在VSM设置的飞行终止命令及其当前状态 。

* **信息 #109: 模式偏好报告 (Mode Preference Report)**
        VSM使用此消息向CUCS报告VSM处的高度模式、速度模式和航向模式的状态 。

* **信息 #110: 从-到-下一个航点状态 (From-To-Next Waypoint States)**
        用于报告UA在某些飞行模式下正在飞离的（From）、正在飞往的（To）以及下一个将要飞往的（Next）航点信息 。

* **信息 #111: 悬停配置报告 (Loiter Configuration Report)**
        VSM/UA使用此消息报告UA在悬停飞行模式下正在使用的悬停模式和配置 。

* **信息 #112: 相对航线/航点绝对参考报告 (Relative Route/Waypoint Absolute Reference Report)**
        VSM/UA使用此消息来识别UA当前为其加载的相对航线所使用的绝对参考系统 。

---

#### 4.4 **有效载荷命令与状态信息 (Payload Command and Status Messages)**
由于无人机通常作为有效载荷系统的载体，该组信息旨在为CUCS提供以互操作方式命令和监控各种有效载荷（如光电/红外传感器、合成孔径雷达、挂载管理系统、通信中继和CBRN探测器）操作状态的方法 。

* **信息 #200: 有效载荷转向命令 (Payload Steering Command)**
        用于操纵位于消息中指定站号的任何可操纵有效载荷，并命令支持这些功能的有效载荷的“视场”和“对焦” 。

* **信息 #201: EO/IR/激光有效载荷命令 (EO/IR/Laser Payload Command)**
        用于命令光电/红外/激光有效载荷，但指向、手动对焦和视场（变焦）命令除外，这些由信息 #200处理 。

* **信息 #202: SAR 有效载荷命令 (SAR Payload Commands)**
        用于指示VSM为合成孔径雷达（SAR）有效载荷生成所有命令，但不包括指向和视场命令 。

* **信息 #203: 挂载管理系统命令 (Stores Management System Command)**
        由CUCS用于命令位于指定站号的挂载管理系统 。

* **信息 #204: 通信中继命令 (Communications Relay Command)**
        由CUCS用于命令位于指定站号的通信中继设备 。

* **信息 #205: 有效载荷数据记录器控制命令 (Payload Data Recorder Control Command)**
        用于命令平台上的有效载荷数据存储设备（记录器）进入指定的状态（如录制、停止、回放等） 。

* **信息 #206: 有效载荷舱命令 (Payload Bay Command)**
        用于控制每个有效载荷舱门（打开/关闭） 。

* **信息 #207: 地形数据更新 (Terrain Data Update)**
        由CUCS用于传达特定位置的地形高程数据 。

* **信息 #208: CBRN 有效载荷命令 (CBRN Payload Command)**
        由CUCS发送给VSM，指示一个化学、生物、放射性及核（CBRN）有效载荷站执行给定的操作或功能，例如开始采样 。

* **信息 #209: CBRN 有效载荷配置命令 (CBRN Payload Configuration Command)**
        由CUCS发送给VSM，指示给定的CBRN有效载荷站配置其参数，例如设置灵敏度等级 。

* **信息 #210: CBRN 有效载荷详细信息请求 (CBRN Payload Detailed Info Request)**
        由CUCS发送给VSM，从给定的有效载荷站请求可用的存储信息，例如日志、详细的传感器测量数据（光谱）等 。

* **信息 #211: 存储容量管理请求 (Storage Capacity Management Request)**
        由CUCS用于命令位于指定站号的存储管理系统（例如存档或删除数据） 。

* **信息 #212: CBRN 有效载荷显示配置命令 (CBRN Payload Display Configuration Command)**
        由CUCS发送给VSM，指示给定的CBRN有效载荷站配置其显示参数，例如设置显示对比度 。

* **信息 #213: 有效载荷扫描窗口配置命令 (Payload Scan Window Configuration Command)**
        由CUCS发送给VSM，指示给定的有效载荷站（特别是CBRN防区外探测器）配置其扫描窗口参数 。

* **信息 #300: 有效载荷配置 (Payload Configuration)**
        用于按载具站号识别有效载荷配置 。此消息在初始启动和配置变更时提供配置信息 。

* **信息 #301: EO/IR 配置状态 (EO/IR Configuration State)**
        用于向CUCS定义光电/红外（EO/IR）有效载荷的配置信息，如型号、图像尺寸、视场范围等 。

* **信息 #302: EO/IR/激光操作状态 (EO/IR/Laser Operating State)**
        用于按站向CUCS报告EO/IR/激光有效载荷的当前操作状态 。

* **信息 #303: SAR 操作状态 (SAR Operating State)**
        用于按站向CUCS报告合成孔径雷达（SAR）的操作状态 。

* **信息 #304: 挂载管理系统状态 (Stores Management System Status)**
        用于向CUCS报告挂载管理系统的状态 。

* **信息 #305: 通信中继状态 (Communications Relay Status)**
        用于向CUCS报告通信中继设备的状态 。

* **信息 #306: 有效载荷数据记录器状态 (Payload Data Recorder Status)**
        用于报告平台有效载荷数据存储设备（记录器）的状态 。

* **信息 #307: 载具有效载荷/记录器配置 (Vehicle Payload/Recorder Configuration)**
        由VSM用于识别UA的有效载荷与记录器之间的连接配置，并发送给CUCS 。

* **信息 #308: 有效载荷舱状态 (Payload Bay Status)**
        用于返回有效载荷舱门的状态（打开/关闭） 。

* **信息 #309: CBRN 探测 (CBRN Detection)**
        由VSM用于报告来自给定CBRN有效载荷站的基本污染相关测量值 。

* **信息 #310: CBRN 有效载荷配置状态 (CBRN Payload Configuration State)**
        由VSM发送给CUCS，报告给定CBRN有效载荷站的配置状态 。

* **信息 #311: CBRN 有效载荷操作状态 (CBRN Payload Operating State)**
        由VSM发送给CUCS，报告给定CBRN有效载荷站的操作状态，如电池寿命、GPS位置等 。

* **信息 #312: 有效载荷扫描窗口操作状态 (Payload Scan Window Operating State)**
        由VSM发送给CUCS，报告给定有效载荷扫描窗口的配置和操作状态 。

* **信息 #313: CBRN 有效载荷详细信息响应 (CBRN Payload Detailed Info Response)**
        VSM对“下载”类型的详细信息请求（信息 #210）的响应，提供所请求的信息 。

* **信息 #314: CBRN 有效载荷详细信息估算响应 (CBRN Payload Detailed Info Estimate Response)**
        VSM对“估算”类型的详细信息请求（信息 #210）的响应，提供预期文件数量和总大小的估算值 。

---


#### 4.5 **数据链路信息 (Data Link Messages)**
这类信息允许CUCS控制数据链路并接收其状态 。它包括用于设置和控制数据链路与天线基座的命令和状态消息，并支持无人机控制权的交接 。

* **信息 #400: 数据链路设置消息 (Data Link Set Up Message)**
        用于设置VDT（载具数据终端）和/或CDT（控制数据终端）通信设备的组件参数 。

* **信息 #401: 数据链路控制命令 (Data Link Control Command)**
        向VSM发送指令，以命令VDT和/或CDT通信设备的组件 。

* **信息 #402: 基座配置消息 (Pedestal Configuration Message)**
        用于配置CDT天线基座的位置（经纬高） 。

* **信息 #403: 基座控制命令 (Pedestal Control Command)**
        向VSM发送指令，以命令天线基座的组件（如指向、转速） 。

* **信息 #404: 数据链路分配请求 (Data Link Assignment Request)**
        CUCS用于请求或释放对特定数据链路ID的控制权，以便与特定载具通信 。

* **信息 #500: 数据链路配置/分配消息 (Data Link Configuration/Assignment Message)**
        响应信息 #404，向CUCS提供VSM或网络上的数据链路配置，并报告数据链路的控制可用性 。

* **信息 #501: 数据链路状态报告 (Data Link Status Report)**
        由VSM向CUCS发送关于VDT和/或CDT通信设备状态的信息 。

* **信息 #502: 数据链路控制命令状态 (Data Link Control Command Status)**
        从VSM发送到CUCS，报告对数据链路组件的命令指令的执行状态 。

* **信息 #503: 基座状态报告 (Pedestal Status Report)**
        由VSM向CUCS发送关于VDT和/或CDT天线基座状态的信息 。

* **信息 #600: 载具数据链路转换协调消息 (Vehicle Data Link Transition Coordination Message)**
        在从一个UCS数据链路切换到另一个时，用于建立新的数据链路配置 。

* **信息 #700: 交接状态报告 (Handover Status Report)**
        用于报告控制权交接过程的状态（进行中、成功、失败） 。

---

#### 4.6 **任务信息 (Mission Messages)**
这些信息支持在UA和CUCS之间传输任务计划 。任务信息可以在飞行前和飞行中发送至UA或从UA接收，涵盖了任务的传输控制、航线定义以及各类航点（位置、悬停、有效载荷动作、机体动作）的详细设置 。

* **信息 #800: 任务传输命令 (Mission Transfer Command)**
        用于控制UA与CUCS之间整个任务计划的传输（上传/下载）和存储 。

* **信息 #801: UA 航线 (UA Route)**
        用于为一系列航点（信息 #802）定义的无人机航线指定一个类型（如发射、进近、飞行、应急） 。

* **信息 #802: UA 位置航点 (UA Position Waypoint)**
        由CUCS用于定义要上传到VSM/UA的单个航线或一系列航线中的位置航点 。

* **信息 #803: UA 悬停航点 (UA Loiter Waypoint)**
        用于定义UA在到达某个航点后将执行的悬停动作的特性（如时间、模式、半径） 。

* **信息 #804: 有效载荷动作航点 (Payload Action Waypoint)**
        由CUCS定义，当UA开始飞向指定航点时，将执行的有效载荷动作（如传感器开关、指向模式等） 。

* **信息 #805: 机体动作航点 (Airframe Action Waypoint)**
        由CUCS定义，当UA开始飞向指定航点时，将执行的机体动作（如开关灯光、数据链路） 。

* **信息 #806: 载具特定航点 (Vehicle Specific Waypoint)**
        用于定义当UA飞向航点时将执行的载具特定动作，或传递无法映射到通用航点的通用航线定义（CRD）消息 。

* **信息 #900: 任务上传/下载状态 (Mission Upload/Download Status)**
        用于提供从VSM到CUCS的任务上传或下载的状态（进行中、完成、中止） 。

---

#### 4.7 **子系统状态信息 (Subsystems Status Messages)**
该通用消息集包含用于CUCS状态显示的摘要健康和状态信息 。它旨在为控制台提供整体健康摘要数据，通常使用颜色代码（绿=正常，黄=警告，红=危险）进行提示，而不是传达详细的、特定于配置的诊断信息 。

* **信息 #1000: 子系统状态请求 (Subsystem Status Request)**
        由CUCS用于向VSM请求一个或多个子系统（如发动机、电气、导航等）的状态信息 。

* **信息 #1001: 子系统状态详情请求 (Subsystem Status Detail Request)**
        当CUCS需要关于特定子系统状态报告的更多详细信息时，使用此消息进行请求 。

* **信息 #1100: 子系统状态警报消息 (Subsystem Status Alert Message)**
        由VSM用于向CUCS创建一个子系统状态警报，并可设置优先级（如警告、紧急）和警报文本 。

* **信息 #1101: 子系统状态报告 (Subsystem Status Report)**
        由VSM/UA/CDT/VDT用于生成并发送子系统状态报告，响应信息 #1000的请求 。

---

#### 4.8 **通用配置信息 (General Configuration Messages)**
这些消息用于CUCS和VSM之间的配置过程 。CUCS可以使用这些消息请求特定LOI（互操作等级）的配置参数，定义显示单位，并报告其资源 。VSM则响应这些请求，提供关于其支持的DLI（数据链路接口）字段的详细配置信息，如数值范围、支持的枚举值和可用性 。

* **信息 #1200: 字段配置请求 (Field Configuration Request)**
        CUCS使用此消息来启动或中止从VSM、载具或数据链路传输关于DLI消息中特定字段的配置参数信息 。

* **信息 #1201: 显示单位请求 (Display Unit Request)**
        CUCS使用此消息来指定VSM/UA等在远程显示中应使用的单位（如米/英尺，节/米每秒） 。

* **信息 #1202: CUCS 资源报告 (CUCS Resource Report)**
        用于向VSM/UA传达CUCS中可用于管理远程显示的资源（如浏览器、显示窗口大小和位置） 。

* **信息 #1203: 配置完成 (Configuration Complete)**
        VSM/UA/数据链路或CUCS使用此消息来表明所有请求的配置消息已发送完毕或CUCS的配置已完成 。

* **信息 #1300: 字段配置整数响应 (Field Configuration Integer Response)**
        VSM/UA响应配置请求，为整数类型参数定义支持级别、有效范围、显示范围以及警告/告警的阈值 。

* **信息 #1301: 字段配置双精度响应 (Field Configuration Double Response)**
        VSM/UA响应配置请求，为浮点/双精度类型的参数定义支持级别、有效范围、显示范围以及警告/告警的阈值 。

* **信息 #1302: 字段配置枚举响应 (Field Configuration Enumerated Response)**
        VSM/UA响应配置请求，为枚举或位字段类型的参数定义支持的特定值及其对应的文本描述，特别是用于扩展载具特定的枚举值 。

* **信息 #1303: 字段配置命令 (Field Configuration Command)**
        VSM/UA响应配置请求，报告特定的命令字段或其枚举值是否受支持，以及当前是否可用（可控） 。

* **信息 #1304: VSM 服务报告消息 (VSM Services Report Message)**
        VSM/UA/CDT/VDT向CUCS传达其提供的远程显示服务，例如主页URL和FTP位置 。

* **信息 #1305: 字段配置无符号响应 (Field Configuration Unsigned Response)**
        VSM/UA响应配置请求，为无符号类型的参数定义支持级别、有效范围、显示范围以及警告/告警的阈值 。

* **信息 #1306: 载具转向/操作模式配置 (Vehicle Steering/Operating Mode Configuration)**
        VSM发送此消息以定义特定载具操作模式下重要转向控制参数的可用性及其初始值 。

---

#### 4.9 **杂项信息类型 (Miscellaneous Message Types)**
该类别包含不属于其他特定功能分组的通用或辅助性消息 。这包括用于确认消息接收的**消息确认（#1400）** 、用于请求周期性数据更新的**调度消息更新命令（#1402）** ，以及用于请求单个消息的**通用信息请求（#1403）** 。

* **信息 #1400: 消息确认 (Message Acknowledgement)**
        用于确认收到了在消息头中指定需要确认的消息 。

* **信息 #1402: 调度消息更新命令 (Schedule Message Update Command)**
        用于请求以给定的频率（周期性地）发送指定的消息，将“拉”（Pull）类型的消息变为“推”（Push）类型 。

* **信息 #1403: 通用信息请求消息 (Generic Information Request Message)**
        用于请求VSM、UA、数据链路或CUCS发送指定的单个消息 。

---

#### 4.10 **IFF/SSR 命令与状态信息 (IFF/SSR Command and Status Messages)**
这类信息用于控制和报告机载敌我识别（IFF）和二次监视雷达（SSR）应答器的状态 。消息涵盖了设置模式代码、启动位置识别（I/P）、控制加密密钥以及发起内置测试（BIT）等功能 。

* **信息 #1500: IFF/SSR 代码命令 (IFF/SSR Code Command)**
        由CUCS发送，用于设置敌我识别（IFF）和二次监视雷达（SSR）的各种模式代码和启用状态 。

* **信息 #1501: IFF/SSR 位置识别命令 (IFF/SSR Identification of Position Command)**
        指示机载应答器传输其位置识别（I/P）信号，即“Ident”功能 。

* **信息 #1502: IFF 密钥控制命令 (IFF Key Control Command)**
        用于控制机载应答器的加密密钥设置和命令（如模式4/5密钥的保持和清零） 。

* **信息 #1503: IFF/SSR BIT 命令 (IFF/SSR BIT Command)**
        用于命令启动应答器的内置测试（BIT） 。

* **信息 #1600: IFF/SSR 状态报告 (IFF/SSR Status Report)**
        用于向CUCS报告IFF/SSR的当前状态，包括各模式代码、启用状态和测试结果 。

---

#### 4.11 **武器命令与状态信息 (Weapons Messages)**
该信息类别提供了对机载武器系统进行详细控制和状态监控的功能 。它包括从武器配置、清单建立、目标修改到主武器保险、武器包选择、发射控制、引信设置和抛弃等一系列命令，并配有相应的状态响应消息 。

* **信息 #1800: 挂载特定信息请求 (Store Specific Information Request)**
        用于需要挂载寻址的请求，弥补了通用信息请求（#1403）在寻址能力上的不足，以查询特定挂载的状态 。

* **信息 #1801: 传输武器配置文件 (Transfer Weapons Configuration Data File)**
        通知UA武器配置数据文件的位置（URI） 。

* **信息 #1802: 建立挂载清单 (Build Store Inventory)**
        命令UA识别已安装的挂载，并根据配置数据进行验证 。

* **信息 #1803: 主要挂载控制 (Primary Store Control)**
        执行未被其他功能特定消息覆盖的通用挂载控制，如电源状态、启动内置测试等 。

* **信息 #1804: 中止释放/发射 (Abort Release/Launch)**
        命令UA中止指定挂载的释放或发射过程 。

* **信息 #1805: 准备挂载 (Prepare Store)**
        命令UA为一次交战准备一个特定的挂载 。

* **信息 #1806: 主武器保险控制 (Master Arm Control)**
        命令UA在其挂载管理系统（SMS）中启用或禁用主武器保险状态，这是启动交战序列的起始消息 。

* **信息 #1807: 选择武器包 (Select Weapon Package)**
        命令UA选择一个在配置数据中定义的特定武器包，通常作为目标交战序列的一部分 。

* **信息 #1808: 武器开火控制 (Weapon Fire Control)**
        命令UA发射当前选定的武器 。

* **信息 #1809: 为回收做准备 (Prepare For Recovery)**
        命令UA为回收做准备，提示其保护机密信息并将整个系统置于安全状态以备降落 。

* **信息 #1810: 引信控制 (Fuze Control)**
        为选定的武器命令引信功能，如引信模式和延迟时间 。

* **信息 #1811: 导引头传感器控制 (Seeker Sensor Control)**
        处理选定挂载的导引头和传感器控制功能 。

* **信息 #1812: 武器激光控制 (Weapon Laser Control)**
        控制选定挂载的关键激光参数 。

* **信息 #1813: 抛弃挂载 (Jettison Store)**
        命令UA抛弃一个特定的挂载 。

* **信息 #1814: 挂载清单状态请求 (Store Inventory Status Request)**
        命令UA系统发送其管理的所有挂载的清单状态 。

* **信息 #1815: 修改目标命令 (Modify Target Command)**
        用于修改一个目标的信息 。

* **信息 #1816: 发布密钥 (Publish Key)**
        设置当前任务相关的“开火”、“主武器保险”和“抛弃”命令所需的安全密钥值 。

* **信息 #1817: 从释放开始的引信解锁延迟 (Fuze Arm Delay From Release)**
        出于安全考虑，此独立消息用于发送从武器释放到引信解锁的延迟时间 。

* **信息 #1818: 远程指示器位置 (Remote Designator Position)**
        指定远程激光指示器的位置 。

* **信息 #1819: 动态武器包控制 (Dynamic Weapon Package Control)**
        处理动态的、由用户在任务时定义的武器包，准备接收后续消息来定义包内武器类型 。

* **信息 #1820: 动态武器包挂载请求 (Dynamic Weapon Package Store Request)**
        将武器类型分配给动态武器包，并指定其在包内的开火顺序 。

* **信息 #1821: 初始化动态武器包 (Initialize Dynamic Weapon Package)**
        使UA初始化当前动态武器包中定义的所有挂载 。

* **信息 #1822: 挂架控制 (Rack Control)**
        执行通用的挂架和炸弹架控制功能 。

* **信息 #1823: 挂载架控制 (Carriage Control)**
        执行通用的挂载系统特定控制功能 。

* **信息 #1824: 次要挂载控制 (Secondary Store Control)**
        启动挂载控制的测试和模拟功能 。

* **信息 #1825: 挂载增长预留 (Store Growth Provision)**
        将多个挂载特定的用户定义功能（增长预留功能）集中在一条消息中发送 。

* **信息 #1826: 修改武器悬停命令 (Modify Weapon Loiter Command)**
        修改武器的任务悬停参数 。

* **信息 #1827: 地理区域控制 (GeoZone Control)**
        执行地理区域（GeoZone）控制，如定义禁飞区或交战区 。

* **信息 #1830: CUCS 挂载配置响应 (CUCS Load Out Configuration Response)**
        由CUCS在发现和配置过程中使用，确认收到挂载配置并确认其有效性 。

* **信息 #1831: LAR 规划请求 (LAR Planning Request)**
        CUCS提供目标和攻击路径信息，请求UA计算并报告发射可接受区（LAR），用于攻击路线规划时的态势感知 。

* **信息 #1900: SMS 主要状态 (SMS Primary Status)**
        报告挂载管理系统（SMS）的主要状态条件，可作为对多个命令的响应 。

* **信息 #1901: 清单状态响应 (Inventory Status Response)**
        此消息指示将要跟随的挂载清单状态消息（#1902）的数量 。

* **信息 #1902: 挂载清单状态 (Store Inventory Status)**
        报告单个挂载的清单状态，作为#1901消息的子消息发送 。

* **信息 #1903: 主要挂载状态 (Primary Store Status)**
        在需要特定挂载状态时传输，报告其主要状态信息，作为多个命令的响应 。

* **信息 #1904: 次要挂载状态 (Secondary Store Status)**
        携带比主要状态消息频率更低的信息，报告挂载的次要状态 。

* **信息 #1905: 武器包状态响应 (Weapon Package Status Response)**
        作为一系列武器包状态子消息（#1906）的前导消息，响应#1807命令 。

* **信息 #1906: 武器包状态 (Weapon Package Status)**
        将一个特定的挂载映射到一个武器包，作为#1905消息的子消息发送 。

* **信息 #1907: 导引头传感器跟踪状态 (Seeker Sensor Track Status)**
        包含来自挂载的导引头和传感器跟踪状态信息 。

* **信息 #1908: 导引头传感器状态 (Seeker Sensor Status)**
        包含与导引头和传感器指向及距离信息相关的状态 。

* **信息 #1909: 武器发射决策辅助区域报告 (Weapon Launch Decision Aid Region Report)**
        UA用此消息报告决策辅助区域（如LAR, WFP），以增强操作员态势感知，成功使用特定武器 。

* **信息 #1911: 引信状态 (Fuze Status)**
        从UA向CUCS传达所选武器的引信状态 。

* **信息 #1912: 武器激光状态 (Weapon Laser Status)**
        从UA向CUCS传达所选武器的激光状态 。

* **信息 #1913: 挂架状态 (Rack Status)**
        包含挂架和炸弹架的状态 。

* **信息 #1914: 主要挂载架状态 (Primary Carriage Status)**
        报告挂载系统特定的主要状态 。

* **信息 #1915: 次要挂载架状态 (Secondary Carriage Status)**
        报告通用的挂载系统特定状态，频率低于主要状态 。

* **信息 #1916: 修改目标状态 (Modify Target Status)**
        确认或报告报告挂载的当前目标信息 。

* **信息 #1917: 挂载增长预留状态 (Store Growth Status)**
        用于报告挂载增长预留功能的状态 。

* **信息 #1919: 修改武器悬停状态 (Modify Weapon Loiter Status)**
        报告武器任务悬停的状态 。

* **信息 #1920: 地理区域状态 (GeoZone Status)**
        这是地理区域控制（#1827）的状态消息 。

* **信息 #1924: 密钥状态 (Key Status)**
        确认收到#1816（发布密钥）和#1808（武器开火控制）消息，并报告密钥有效性 。

* **信息 #1925: 挂载特定信息响应 (Store Specific Information Response)**
        指示将要跟随的挂载特定响应消息的数量 。

* **信息 #1926: CUCS 挂载配置 (CUCS Load Out Configuration)**
        在发现和配置过程中，UA用于向正在获取控制权的CUCS传输挂载配置标识符 。

* **信息 #1927: SMS 次要状态 (SMS Secondary Status)**
        携带比SMS主要状态更新频率更低的信息 。



#### 4.12 **私有信息 (Private Messages)**
此类消息用于处理标准通用消息未涵盖的载具和有效载荷特定功能 。VSM设计者可以使用特定的显示服务来格式化这些消息，而CUCS则提供显示这些特定数据和信息（例如在浏览器窗口中）的服务 。

* **信息 #2000: IP 地址和端口分配请求 (IP Address and Port Assignment Request)**
        由 CUCS 发送给 CDT 或 UA，请求更改其用于通信的 IP 地址和/或端口 。

* **信息 #2001: UA IP 披露消息 (UA IP Disclosure Message)**
        由 UA 发送，用于通知 CUCS 其数据上行和下行链路中存在的数据流（如 DLI、音频、视频）及其连接方式（URI） 。

#### 附件4-1：UV通用数据链接接口（DLI）修改消息及私有消息库 - AEP-84 第一卷

这些“非必需”私有消息旨在辅助无人机系统（UAS）以及其他无人无人机（UV）平台的用户。汇总表列出了从CST成员处捕获的所有消息。实际消息见下述各类无人无人机类型表。由于某些消息可用于多种无人无人机类型，CST编辑者将单个消息放置在其认为最合适的建议无人无人机类型表中。汇总表中最后4列之一的“$X$”标识了实际消息在下方无人无人机类型表中的位置。“\*”表示该消息可能适用于该无人无人机类型。

## 第五章 指挥与控制接口

### 目录  

1 引言

1.1 范围

2 功能需求

2.1 一般需求

2.2 UCS 配置

2.3 任务规划

2.4 无人机控制

2.5 操作员控制与监视

2.6 有效载荷控制与监视

2.7 警告、注意与通知

2.8 通信管理

### 图表目录

图5-1：UCS接口功能架构

图5-2：CCI数据类型

表格目录

表5-1：空中交通管制消息

表5-2：无人机可用性

表5-3：有效载荷可用性

表5-4：VDT可用性

表5-5：运行状态数据

表5-6：UCS可用性数据

表5-7：发射系统可用性

表5-8：回收系统可用性

表5-9：CDT可用性

表5-10：其他单位资源可用性数据

表5-11：有效载荷与传感器类型及CCI输出

表5-12：ADatP-3 任务消息

表5-13：ADatP-3 空域管制消息

表5-14：ADatP-3 通用战场图像消息

表5-15：ADatP-3 任务依赖数据消息

表5-16：ADatP-3 CBRN数据消息

表5-17：ADatP-3 火炮目标情报消息

表5-18：ADatP-3 气象数据消息

表5-19：ADatP-3 任务报告消息

表5-20：ADatP-3 空中段状态及作战能力消息

表5-21：ADatP-3 地面段状态及作战能力消息

表5-22：影像标准

表5-23：ADatP-3 CBRN数据消息

表5-24：ADatP-3 任务结果消息

表5-25：ADatP-3 通用消息

附件目录

附件5-1：信息交换需求

附件5-2：ADatP-3 Build 11 消息实现需求

附件5-3：UAS LOI ADatP-3 Build 11 需求


### 1 引言

#### 1.1 范围

1. 盟军工程出版物（AEP）-84卷I第5章规定了核心无人机（UA）控制系统（CUCS）与指挥、控制、通信、计算机及情报（C4I）系统之间的指挥与控制接口（CCI）。
2. CCI的标准化旨在通过实施一套通用接口标准，使北约国家能够实现无人系统（UAS）与C4I用户之间的互操作性。标准CCI应促进北约无人系统无缝集成至各层次联合联合C4I基础设施中。
3. 第5章的目的是规范所有需与CUCS通信的外部系统在指挥、控制以及数据传输与接收方面的标准。这些标准将促成所有现有（遗留系统）与未来UAS及指定C4I系统之间的互操作性。本章规范CUCS内实现的标准，不对C4I系统施加要求。

#### 1.2 CCI总体概述

1. CCI是CUCS与外部C4I系统之间的接口。它规定了CUCS与所有C4I终端用户之间通过通用标准接口进行通信时应采用的数据需求。图5-1展示了UCS功能架构中的CCI位置。
2. 所有需在CUCS与外部C4I系统间正式交换的数据或信息，应依据本章规定的标准定义【CCI 0001】。
3. CCI涵盖在无人机任务各阶段CUCS与C4I系统间双向交换的所有消息与数据类型，包括：

- 飞行前：任务指令消息、战术态势、环境数据、一般任务限制及任务计划。
- 飞行中：状态与服务消息、有效载荷数据、进展报告。
- 飞行后：状态与服务消息、有效载荷数据、飞行后利用报告、任务报告。

4. 所有通过CCI传递的数据格式由本章定义，但UCS实现或连接的C4I系统可使用其他格式，前提是格式转换符合CCI定义：

- UCS实现可保持自身可能非标准的内部数据表示以提升处理效率，但仍符合CCI标准。第5章允许CUCS开发者确定必须生成或接受以满足CCI兼容性的数据。

5. 许多C4I系统，尤其是遗留系统，可能不直接符合本章指定的CCI标准。为避免CCI中标准数量的激增及对大量国家或联合C4I系统的修改，CCI与不兼容C4I系统之间将需要转换软/硬件。该转换模块称为指挥与控制接口专用模块（CCISM），如图5-1所示。CCISM可作为特定UCS实现的一部分，用以连接CUCS与特定UAS“客户”（例如一个或多个C4I系统）。CCISM的复杂度可从简单格式或协议转换器到用户特定应用，以适配特定C4I需求。

6. CCISM主要用于与非直接兼容STANAG 4586标准、协议或物理层的遗留C4I系统通信。未来开发的C4I系统预计将符合STANAG 4586，则无需中间CCISM即可直接连接。

7. 本章不涉及CUCS与CCISM间信息交换所需硬件，也不涉及CCISM本身的架构与设计。具体CCISM功能的设计、开发及部署责任由UAS或相关C4I项目办公室承担。

8. 还需认识到，UCS与C4I系统间部分通信将通过语音或电子邮件进行。鉴于这些方式本质上缺乏结构化，故超出本STANAG范围，但须符合第3章所述北约C3技术架构（NC3TA）要求，以确保通信可行。

<img src="https://cdn.mathpix.com/cropped/2025_07_17_c3ddec59b5857ee129e1g-478.jpg?height=927&width=1363&top_left_y=516&top_left_x=352" width=500/>

图5-1：UCS接口功能架构

#### 1.3 第五章概述

第5章分为以下部分：

- 第1节：引言——提供CCI架构的一般介绍及系统简要概述。
- 第2节：CCI数据描述——识别并描述CUCS与C4I系统间交换的数据，侧重于CCI中传输信息的描述，不涉及数据格式。
- 第3节：CCI数据表示——定义CCI实现中应采用的数据格式。本章涵盖消息格式、文件格式、数据交换标准、适用传输媒介及协议。
- 附件5-1：信息交换需求——列出CCI与外部系统通信的信息交换需求。
- 附件5-2：盟军数据出版物-3（ADatP-3）消息实现需求——列出需通过CCI传输的ADatP-3消息子集，这些消息属STANAG 7149北约消息目录。
- 附件5-3：无人机互操作级别（LOI）ADatP-3需求——将ADatP-3消息分配到各互操作级别，适合时分配到最低级别。



#### 1.4 信息交换需求

信息交换需求（IERs）定义了CUCS与各类C4I系统以及其他CUCS之间需交换的通用数据类型、数据重要性、接收与发送节点及数据格式，以支持操作用户的任务需求。本章附件5-1提供的IERs识别了CUCS与外部C4I系统间为实现基于无人系统作战概念（CONOPS）所需可行互操作级别（LOI）而必须进行的信息交换。满足这些需求的消息识别与定义见本章第2节和第3节。

#### 1.5 CCI数据类型

1. 图5-2展示了CUCS与外部C4I系统间交换的IERs顶层结构。附件5-1提供了这些顶层IERs的进一步细分。

<img src="https://cdn.mathpix.com/cropped/2025_07_17_c3ddec59b5857ee129e1g-479.jpg?height=786&width=1475&top_left_y=1606&top_left_x=256" width=500/>

图5-2：CCI数据类型

2. 这些数据类型在本章第2节中描述，概述如下：  
- 指令任务——从相应任务授权机构接收的无人机任务指令消息。  
- 空中交通管制（ATC）——当无人机需穿越民用空域时，应从民用或军用航空当局发送或接收的数据。  
- 辅助数据——无人机任务规划与执行所需的支持信息，未定义于其他数据区，包括战术态势、目标数据库、已利用的影像及环境数据。  
- 任务计划——针对特定任务生成的计划。  
- 任务进展——无人机任务执行中的状态。  
- 资源可用性——无人系统各子组件状态。  
- 有效载荷/传感器数据——来自无人机有效载荷的数据，可为原始、处理或利用后的数据。  
- 目标数据——用于目标定位的近实时目标位置信息。  
- 任务报告——任务结果相关信息。

#### 1.6 CCI中无人机LOI的实现

1. 为使UCS实现达到所需的互操作级别（LOI）1至5，CCI必须指定实现某一LOI及以上所必需的不同数据类型。本章第3节及附件5-1和5-2中规定了相关要求。
2. 然而，这不涵盖某些国家及/或北约针对不同类型无人系统的作战概念中可能覆盖的数据类型例外。例如，第3.3节指出ATC消息为达到LOI 4和5的强制要求。但对于永不使用民用空域的无人机，如短程战术无人机，虽仍需达到LOI 4，但此要求可能不适用。操作程序将依各国和北约具体要求有所不同，故超出本STANAG范围。因此，本章中涉及LOI的“强制”用语应理解为“前提是操作程序要求交换该类型数据”【CCI 0002】。

#### 1.7 CCI标准选择策略

1. 第1.5节中各数据类型标准的选择策略为：

- 确认各种STANAG及北约其他出版物中规定的现有北约标准。  
- 在无此类北约标准时，确定适用于该数据类型的其他军用或商用标准。  
- 分析候选标准以确保满足所有类型无人系统的要求。  
- 在存在选择余地时（如ADatP-3消息选择），明确所选项目（例如标准已被配置化）。

2. 优先采用现有北约标准。在某些情况下，针对部分数据类型存在未来可能适用的标准，但因其尚未最终确定或可能变化，当前不予明确规定。在此情况下，采用现有标准（如ADatP-3），未来计划切换至新标准。

### 2 CCI数据描述

#### 2.1 引言

本节描述CUCS与C4I系统之间交换的各类数据类型，若C4I系统与指定的CUCS格式和标准不兼容，交换可能通过CCISM进行。

#### 2.2 UCS任务指令

1. 预计CUCS将接收并响应任务指令、预先规划的任务计划及需动态重新任务（上传至无人机后的预先规划任务变更）的任务计划变更。对任务指令的响应将是一个任务计划，可通过CCI接口传递至指挥控制结构的更高层级以进行冲突解决和批准。（任务计划详见2.5节。）
2. STANAG 5500第4版和STANAG 7149中定义的ADatP-3任务消息适用于UCS内的无人机任务指令。假设UCS任务规划器设计支持多无人机操作（两架或以上无人机同时飞行），因此CUCS应能接收多任务指令。
3. 在某些UCS中，尤其是小型系统，任务指令可能通过语音或电子邮件接收。这些方式超出本STANAG范围，但电子邮件应用应符合第3章规定的NC3TA的NC3通用标准配置文件（NCSP）【CCI 0003】。
4. CCI还应支持无人机的动态重新任务能力（例如航线或有效载荷计划的变更）【CCI 0004】，此类变更可能在操作各阶段发生。

##### 2.2.1 任务指令

1. 最常见的无人系统任务指令方式是使用适用于所有空中任务（有人与无人）、多国多军种联合行动的空中任务指令（ATO）。
2. ATO是一个ADatP-3消息，可能非常庞大复杂，达数百页，且并非全部适用于无人系统。还有其他ADatP-3消息不属于ATO，但可用于指令单个无人系统或有效载荷，如电子战请求/任务消息（EWRTM）。此类任务消息完整列表见3.2.1节。

##### 2.2.2 空域管制

1. 空域管理（ASM）指结构化空域及调度其使用的活动。军用空域管理系统通过指定空域管制手段（ACM）对空域体积、表面及线条以及空域分区使用规则进行结构化。特定时期批准的ACM通过ADatP-3空域管制令（ACO）发布。ACO基于其他空中指挥控制系统（ACCS）、非ACCS三军单位、民用要求及空域请求，以及对该空域使用施加的限制。
2. ACO允许通过高度层、地理区域及监视系统实现各类飞机（有人、无人、固定翼、旋翼）的分离。ACO定义了特定期间内空域的结构，以及24小时ACO周期内不同空中行动对该空域划分的使用。
3. 因此，任务规划中，UCS需依ACO定义无人机航线限制。

#### 2.3 空中交通管制（ATC）

1. 当无人机，特别是远程战略无人机，需穿越受控空域时，必须向民航当局提交飞行计划。
2. 国际民航组织（ICAO）发布文件规定飞行前、中、后需向ATC当局提交的所有消息内容。该文件为《空中规则及空中交通服务》（DOC 4444-RAC/501），现为第十三版，1996年出版。
3. 消息可通过语音通道、纸质表格或电子方式发送。语音和纸质表格超出CCI范围，仅考虑电子消息。ICAO指定两种电子消息：空中交通服务（ATS）和自动相关监视（ADS）消息。ADS消息由飞行平台通过数据链发送至覆盖该空域的ATS单位，故不适用UCS，亦不予考虑。但为符合ICAO规定，无人机应携带IFF/SSR设备（例如S模式IFF）。
4. ATS消息内容及格式见上述ICAO文件附录3。本STANAG不强制使用这些消息，因部分无人系统（如小型无人机）无需，但若特定系统生成，应使用ICAO格式。
5. ATS消息类型列于表5-1：

| 类别 | 消息类型 | 描述 |
| :--- | :--- | :--- |
| 紧急 | 警报 | 包含紧急情况描述 |
|  | 无线电通信故障 |  |
| 已提交飞行计划及相关更新 | 已提交飞行计划 |  |
|  | 修改 | 飞行计划变更 |
|  | 取消 | 取消飞行计划 |
|  | 延误 | 出发延迟 |
|  | 起飞 | 实际起飞时间 |
|  | 到达 | 实际到达时间 |
| 协调（注） | 当前飞行计划 | 飞行计划及边界点预计时间 |
|  | 预计时间 | 边界点预计时间 |
|  | 协调 | 协调数据修改 |
|  | 接受 | 接受当前飞行计划、预计时间或协调消息 |
|  | 逻辑确认 | 计算机间确认 |
| 补充 | 请求飞行计划 |  |
|  | 请求补充飞行计划 |  |
|  | 补充飞行计划 | 燃油续航、可用频率、飞机标识等，与无人机无关内容 |

表5-1：空中交通管制消息  
注：协调消息用于飞行过程中从一个ATC中心移交控制至下一个中心。

#### 2.4 辅助数据

##### 2.4.1 通用战场态势

1. 敌我战术态势可在C4I系统与UCS间交换。此信息通过进出消息承载。了解敌我部队位置有助于UCS操作员理解任务背景并优化飞行计划。反过来，UCS可利用图像利用结果更新本地战术态势（生成与观察目标相关的战术符号），并通过情报网络或上级指挥层级导出。
2. 战术态势信息应通过相关ADatP-3消息获得并报告，特别是敌方态势报告（ENSITREP）和我方态势报告（OWNSITREP）【CCI 0006】。

##### 2.4.2 任务相关数据

某些战术态势信息可通过特定于特定任务和/或有效载荷的附加ADatP-3消息获取。例如，Meaconing、入侵、干扰及干扰（MIJI）警告报告，提供危险电子战（EW）情况信息。此类消息完整列表见3.4.2节。

##### 2.4.3 化学、生物、放射性和核（CBRN）

CBRN态势通过一组特定CBRN报告处理，所有战场单位均接收（见3.4.3节）。CUCS需要此类报告作为危险警告及CBRN有效载荷任务规划依据。

##### 2.4.4 火炮目标

UCS支持火炮作战，如目标获取及火力支援。需在UCS与火炮网络间交换信息。为此，存在特定ADatP-3消息，如火炮目标情报-目标信息请求（ATI.TIR），用于一次性或持续请求目标信息；另如火炮目标情报-火炮目标报告（ATI.ATR）消息，作为对ATI.TIR的响应报告。

##### 2.4.5 气象数据

任务规划可能需气象数据，包括风向风速、能见度、显著当前及预报天气、湍流程度、云量、云底高度、云顶高度、温度及气压。可通过3.4.5节列出的ADatP-3消息或国际气象数据获取。

##### 2.4.6 影像产品

1. 操作员需读取与作战区相关的影像及影像产品，来自外部C4I系统。辅助材料可能用于详细任务规划或影像利用。预计访问这些影像产品将通过多国或联盟国家持有的多个影像库（IL）。STANAG 4559，即北约标准影像库接口（NSILI），旨在标准化影像库访问。
2. CUCS可连接网络，允许通过STANAG 4559规定的软件接口从外部IL传输文件至CUCS。
3. 操作员登录外部IL（登录超出STANAG 4559范围）后，NSILI仅规定与IL的查询和读取事务。影像产品写入IPL的机制由IPL所有者定义，超出STANAG 4559及4586范围。如需向北约可发布IL存入影像数据，CUCS应遵循该国家IL及提供此功能的外部C4I系统定义的协议。通常此协议为将影像文件数据通过FTP传输至网络可访问的预配置目录。
4. NSILI规定影像产品以STANAG 4545格式交付。多数情况下通过局域网交付，NSILI亦允许其他媒介交付。若通过磁带交付，媒介应符合STANAG 7024，数据存储为STANAG 4545格式。UCS实现中需配备符合STANAG 7024的磁带读取设备。

#### 2.5 任务计划

##### 2.5.1 一般考虑

1. 无人系统任务规划包括航线规划、有效载荷规划、数据链规划（含频率规划）及无人机紧急恢复规划（安全规则）。这四部分综合构成任务计划。
2. 生成任务计划所需数据通常远超上述内容，还需详细了解当前阶段及边界线、交战区域、危险区、防空单位（ADU）及管控措施信息。此信息已涵盖于本文件辅助数据章节。
3. 预先规划任务亦可通过C4I接口以其他无人机规划系统开发的任务计划形式提供。
4. 任务规划器还需UCS控制无人机的性能模型以计算燃油消耗、爬升率等。性能模型包含于第4章数据链接口所述的无人机特定模块（VSM）中。
5. 任务规划器可能具备雷达遮蔽、视距评估及显示航点与航线间冲突及相互可视性的能力。此类计算需了解ADU/雷达特性及其他用户计划。
6. 指示器作战规划还需激光代码和关键字的协调/执行手段。
7. UCS（HCI）应具备按需以纸质或电子形式提供任务计划或其组成部分的能力。任务规划器输出还可能包括加载无人机的指令打印件（如燃油类型与数量、传感器/指示器设置及通信频率）。

##### 2.5.2 任务计划传播

1. 任务计划需在不同时间发送给不同接收者，包括：

- 任务授权机构，在生成任务计划后立即进行空域冲突解决与批准。  
- 通过数据链接口（DLI）发送给能自主执行任务计划的无人机。  
- 通过DLI发送给另一UCS实现无人机控制权移交。

2. 理想情况下，任务计划数据的每次传输应使用相同数据格式。但并非所有接收者需完整任务计划，对于这些系统可提取必要部分。UCS间传输要求UCS能接收任务计划。
3. ATC不包含在接收者列表内，因已有适用于UCS任务计划格式的民用飞行计划格式（见2.3节）。

##### 2.5.3 航线规划

1. 航线规划可由UCS执行或由外部机构传入。外部机构可为总部、另一UCS或中间级别单位。总部传来的航线规划可能需在前沿作战基地（FOB）中队内加入附加战术信息，以适应当前战场态势。指令可能十分详细，涉及具体目标信息，或是侦察、情报、监视及目标获取（RISTA）类行动，仅指定作战区。来自另一UCS的航线规划可能为无人机控制权移交操作的详细路线及指令，或为供其他操作员使用的规划。
2. 航线规划由一组航点组成。航点可能携带不同参数，决定抵达航点时的动作。飞行模式可整合为一系列顺序航点，或作为带有距离和方位信息的“种子”航点，具体依UCS与无人系统的复杂程度而定。

##### 2.5.4 有效载荷规划

有效载荷规划包含特定有效载荷使用细节。规划细节纳入有效载荷计划，并关联至航线中的航点。

##### 2.5.5 数据链规划

数据链规划包含链路、频段及频率细节（例如本章3.2.1节任务指令）。数据链规划需由C4I初始分配（如通过OPTASK LINK消息），并生成一组由任务规划器使用的配置数据。该配置数据发送至DLI进行数据链配置（详见第4章数据链控制命令）。

##### 2.5.6 紧急恢复计划

发生数据链丢失等故障时，无人机需自动执行称为安全规则（ROS）的恢复动作。ROS在任务规划阶段选择。ROS依据紧急行动优先级相较任务执行的权重而异。UCS操作员通过任务规划应用选择适当安全场景（如定义预编程恢复路线）。

#### 2.6 控制权移交

本节删除。

#### 2.7 任务进展

此数据主要用于向更高指挥层通报任务进展，包括无人机位置、机载设备状态、燃油水平及任务目标完成情况。ADatP-3消息任务报告（MISREP）结合伴随文本扩展（AMPN）用于报告此信息。

#### 2.8 资源可用性

CCI具备提供及接收无人系统子组件状态和作战能力的功能，涵盖无人系统的空中段与地面段，详见下文段落。


##### 2.8.1 空中段状态

无人系统空中段的状态及作战能力包括与无人机（UA）、有效载荷及空中数据链相关的数据。以下类型数据将纳入资源可用性报告流程：

###### 2.8.1.1 无人机

| 分配的无人机总数 |  |  |
| :--- | :--- | :--- |
| 无人机类型（针对每种类型重复） | 该类型无人机数量 |  |
|  | 尾号（针对该类型每架无人机重复） | 无人机配置 |
|  |  | 无人机状态（见2.8.1.4） |
|  |  | 无人机作战状态（见下文） |

表5-2：无人机可用性  
无人机作战状态包括：

- 空中——执行任务中  
- 地面警戒——准备飞行并执行任务  
- 空中警戒——飞行中等待任务  

###### 2.8.1.2 有效载荷

| 有效载荷总数 |  |  |
| :--- | :--- | :--- |
| 有效载荷类型（针对每种类型重复） | 该类型有效载荷数量 |  |
|  | 有效载荷ID（针对每个有效载荷重复） | 有效载荷配置 |
|  |  | 有效载荷状态（见2.8.1.4） |
|  |  | 无人机尾号 |

表5-3：有效载荷可用性

###### 2.8.1.3 无人机数据终端（VDT）

| VDT总数 |  |  |
| :--- | :--- | :--- |
| VDT类型（针对每种类型重复） | 该类型VDT数量 |  |
|  | 状态（针对每种类型重复） | 主链路状态（见2.8.1.4） |
|  |  | 备用链路状态（见2.8.1.4） |

表5-4：VDT可用性

###### 2.8.1.4 状态表

该表显示用于2.8.1和2.8.2节表中状态条目的状态数据

| 完全可操作 |  |
| :--- | :--- |
| 限制性操作 | 原因/限制 |
|  | 预计恢复完全操作时间 |
| 不可操作数量 | 原因 |
|  | 预计恢复完全操作时间 |

表5-5：运行状态数据

##### 2.8.2 地面段状态

无人系统地面段的状态及作战能力包括与UCS、发射系统、回收系统、控制数据链及维护翻新系统相关的数据。以下类型数据将纳入资源可用性报告流程：

###### 2.8.2.1 UCS

| 支持无人机操作的UCS数量 |  |  |
| :--- | :--- | :--- |
| UCS ID（针对每个UCS重复） | UCS配置（含支持的无人机类型及LOI） |  |
|  | UCS状态 | （见2.8.1.4） |
|  | CCI传播能力 | 支持的C4I产品 |
|  |  | 支持的C4I系统 |

表5-6：UCS可用性数据

###### 2.8.2.2 发射系统

| 支持无人机操作的发射系统数量 |  |  |
| :--- | :--- | :--- |
| 发射系统ID（针对每个发射系统重复） | 发射系统配置（含支持的无人机类型） |  |
|  | 发射系统配置（含支持的无人机类型） |  |
|  | 状态 | （见2.8.1.4） |

表5-7：发射系统可用性

###### 2.8.2.3 回收系统

| 支持无人机操作的回收系统数量 |  |  |
| :--- | :--- | :--- |
| 回收系统ID<br>（针对每个回收系统重复） | 回收系统配置（含支持的无人机类型） |  |
|  | 状态 | （见2.8.1.4） |

表5-8：回收系统可用性

###### 2.8.2.4 控制数据终端（CDT）

| CDT可用数量 |  |  |
| :--- | :--- | :--- |
| CDT类型（针对每种类型重复） | CDT类型可用数量 |  |
|  | 链路状态（针对每种类型重复） | 主链路（见2.8.1.4） |
|  |  | 备用链路（见2.8.1.4） |

表5-9：CDT可用性

###### 2.8.2.5 维护与翻新系统

| 可更换单元类型（针对每种类型重复） | 各类型持有数量 |
| :--- | :--- |
| 燃料可用性 |  |
| 执行维护的人员可用性 |  |

表5-10：其他单位资源可用性数据


#### 2.9 有效载荷/传感器数据

##### 2.9.1 概述

1. 传感器数据可根据无人机和传感器类型以多种格式从空中平台接收。CUCS通过CCI向C4I系统传输数据时，将尽可能采用现有国际标准（北约或商业标准），以减少CCI及接收C4I系统中使用的格式数量。传感器技术变化迅速，无法涵盖所有现有及未来有效载荷类型，因此目前仅考虑最常见的传感器类型；若特定UCS实现的传感器数据格式与CCI要求不符，可能需进行格式转换。
2. 本版本AEP-84卷中涵盖的有效载荷类型、通过CCI可能的传感器输出及当前标准成熟度概述见下表5-11。  
注：若特定UAS不支持某有效载荷类型（如GMTI、ELINT等），支持该UCS仍可符合STANAG 4586，无需实现该有效载荷相关需求。

| 有效载荷类型 | 传感器类型 | CCI输出 | 适用标准 |
| :--- | :--- | :--- | :--- |
| 影像 | EO/IR/MSI/HSI电视摄像机 | 动态/静态图像 | STANAG 4545, 7023, 4609 |
|  | EO/IR/MSI/HSI线扫传感器 | 连续图像/静态图像 | STANAG 4545, 7023 |
|  | EO/IR/MS/HS定帧传感器 | 静态图像 | STANAG 4545, 7023 |
|  | 合成孔径雷达（SAR） | 斑点 | STANAG 4545, 7023 |
|  |  | 扫掠（区域搜索） | STANAG 4545, 7023 |
|  | 雷达运动目标指示器（MTI） | 向量数据 | STANAG 4607 |
| 信号情报（SIGINT） |  | 信号数据 | STANAG 4633 |
|  | 电子情报（ELINT/ESM） | 传播报告 | STANAG 4633 |
|  |  | 信号数据 | 待定 |
|  | 通信情报（COMINT） | 传播报告 | 待定 |
| 电子战（EW） | 干扰器 | 无 | 不适用 |
| 化学、生物、放射性及核（CBRN） | 探测器 | 传播报告 | STANAG 2103（CBRN 4） |
| 激光指示器/测距仪 | 不适用 | 无 | 不适用 |
| 通信中继 | 不适用 | 无 | 不适用 |
| 武器/弹药 | 不适用 | 无 | 不适用 |

表5-11：有效载荷与传感器类型及CCI输出

3. 认可需从特定无人机有效载荷接收未处理（原始）传感器数据（如未处理SAR），可能需传输至外部系统（如用于利用）。此类数据可能为专有非标准格式，故超出CCI标准范围，本章不再考虑。
4. 下述描述提供通过CCI传播数据的有效载荷类型。

##### 2.9.2 影像

###### 2.9.2.1 电光影像

电光影像包括可见光、红外及多光谱/高光谱影像。多光谱与高光谱影像由电磁谱不同部分的多幅图像组成。

**2.9.2.1.1 数字静态影像**

**2.9.2.1.1.1 定帧**

定帧影像为预定义尺寸的单幅矩形图像。静态影像可为单独图像，也可结合注释、符号及描述文字。影像尺寸仅受传感器特性限制。STANAG 7023与4545分别为此类有效载荷的控制标准。

**2.9.2.1.1.2 扫描**

扫描影像通常由线扫传感器产生，形成连续条带。此时，完整图像长度不定，且根据平台航线、传感器视角等覆盖不规则路径。STANAG 7023与4545分别为此类有效载荷的控制标准。

**2.9.2.1.2 动态影像**

**2.9.2.1.2.1 模拟视频**

模拟视频为许多遗留无人系统提供的产品，也为某些遗留C4I系统所需输入。若C4I系统需模拟视频，应直接从VSM获取（若模拟视频为无人机至VSM的直接输出），或在格式和/或协议转换需要时通过CCISM获取【CCI 0008】。需注意，依据CCISM设计，模拟视频可由CCISM以任何国际标准格式输出，并可根据视频影像标准配置文件（VISP）标准9709及推荐实践971，包含以闭字幕格式编码的遥测元数据。  
（注：CUCS需处理数字视频，但无处理模拟视频要求。若无人机传入模拟视频，可直接由VSM分发给C4I系统，VSM亦会根据STANAG 4609将其转为数字视频供CUCS处理。若无人机传入数字视频，CUCS可处理；若C4I系统需模拟视频，则需CCISM将CUCS处理的数字视频转换为所需模拟视频。）

**2.9.2.1.2.2 数字动态影像**

数字动态影像将按STANAG 4609规范由CCI输出。

###### 2.9.2.2 雷达

**2.9.2.2.1 合成孔径雷达（SAR）**

1. 平台或CUCS处理的SAR数据将使用与EO/IR图像相同标准通过CCI传输。
2. 可能存在需在外部地面站进行SAR处理的系统（可能为遗留系统），因此需CUCS传输未处理数据。正如前述，此类非标准数据超出CCI标准范围，直到相关标准定义完成。

**2.9.2.2.2 地面运动目标指示器（GMTI）**

1. 处理后的GMTI数据提供运动目标位置与速度，构成目标向量集。
2. GMTI数据将依STANAG 4607传输。

##### 2.9.3 信号情报（SIGINT）

###### 2.9.3.1 电子情报（ELINT）

CUCS将处理SIGINT数据及基于处理结果生成的报告。合作的空中平台需融合数据生成SIGINT信息，该融合可在CUCS内部进行。因此，该数据应在CUCS间传输。CUCS可生成SIGINT报告，通过CCI传输至用户。

**2.9.3.1.1 电子支援措施（ESM）**

ESM数据源自敌方电子信号分析，因无统一传输标准，本版CCI标准未包含。如未来制定相关标准，将纳入CCI。

###### 2.9.3.2 通信情报（COMINT）

未来能力。

##### 2.9.4 电子战

未来能力。

##### 2.9.5 化学、生物、放射性及核（CBRN）

无人机可搭载多种CBRN探测器。CBRN检测结果将通过标准CBRN 4报告（见3.9.4节）通过CCI传输，前提是该报告所需信息由平台或CUCS生成。未处理CBRN测量数据可采用其他格式，如ANSI N42.42（美国国家辐射探测器数据格式标准）。

##### 2.9.6 其他有效载荷类型

###### 2.9.6.1 激光指示器/测距仪

未来能力。

###### 2.9.6.2 通信中继

未来能力。

###### 2.9.6.3 武器/弹药

未来能力。


#### 2.10 目标数据

本版CCI未包含通过CCI传输的近实时目标数据。目标报告需指挥官批准目标并发布开火授权。作战概念（CONOPS）正在制定中，该问题或在STANAG 4586未来版本中处理。

#### 2.11 任务报告

1. CUCS将向各类C4I系统提供基于有效载荷的产品，包括但不限于有效载荷报告、任务状态、任务进展及任务报告。此类信息可能需在无人机飞行期间例行提供、任务完成时、按需或达到特定阈值时提供。
2. 选定C4I系统可接收下列一种或多种报告：

- 传感器处理及/或利用生成的报告  
- 任务状态报告。在任何紧急或意外任务事件中，ADatP-3通用信息消息（GENINFOMSG）可用于提供现有ADatP-3消息文本格式无法表达的信息。此为特殊消息，仅用于不可预见或计划的异常情况，不应用于常规报告，且非旨在替代第2.8节描述的现有消息。  
- 任务进展报告。ADatP-3消息MISREP用于报告任务结果及情报关切事项，也可用于重传和/或扩展飞行中报告。  
- 任务最终报告。任务完成时提供。

3. 多种ADatP-3消息报告（见第3.11节）将根据需要用于上述报告类型。

#### 2.12 通用消息

STANAG 5500、北约格式ADatP-3及STANAG 7149包含大量消息。其中若干消息与UCS指挥控制整体功能及作战任务完成相关（如涵盖和平期至战争期及其他军事行动的作战环境），但不适合归入先前讨论的消息类别。适用于UCS操作但未在前述章节标识的消息列于第3.12节。

### 3 CCI数据表示

#### 3.1 引言

本节定义第2节所述数据类型应使用的标准。若某ADatP-3消息为强制项，详见附件5-2中该消息及适用LOI的完整描述。部分ADatP-3消息为可选项，具体CUCS可根据需求包含，为完整性所列。CUCS应具备向操作员显示下述定义所有接收消息的能力【CCI 0163】。本版STANAG 4586中，强制ADatP-3消息解释为ADatP-3 Build 11版本消息【CCI 0009】。

#### 3.2 UCS任务指令

##### 3.2.1 任务指令

为实现任务指令功能，CUCS应能处理下列ADatP-3消息类型：

| 索引 | 标识符 | 格式名称 |
| :--- | :--- | :--- |
| A033 | FM.CFF | 火力任务-呼叫火力【CCI 0010】 |
| A034 | FM.SUB | 火力任务-后续调整【CCI 0011】 |
| A035 | FM.MTO | 火力任务-发给观察员消息【CCI 0012】 |
| A036 | FM.FMC | 火力任务-火力任务指挥【CCI 0013】 |
| A080 | FRAGO | 临时命令【CCI 0014】 |
| F004 | AIRTASK | 空中任务【CCI 0015】 |
| F015 | AIRALLOC | 空中分配消息【CCI 0016】 |
| F043 | RESPONSE | 空中支援响应【CCI 0017】 |
| F058 | ATO | 空中任务指令【CCI 0018】 |
| J017 | IFFPROD | 识别友机程序【CCI 0019】 |
| J050 | ORBATTOA LAN-AIR | 战斗序列权力转移消息-陆空【CCI 0020】 |
| J051 | ROEIMPL | 交战规则实施【CCI 0021】 |
| J060 | ROEAUTH | 交战规则授权【CCI 0022】 |
| J065 | EWSTOPJAM | 电子战停止干扰消息【CCI 0023】 |
| J066 | EWRTM | 电子战请求/任务消息【CCI 0024】 |
| J070 | WCO | 武器控制令【CCI 0025】 |
| J076 | ACTWARN | 激活警告消息【CCI 0026】 |
| J077 | ACTREQ | 激活请求消息【CCI 0027】 |
| J078 | ACTORD | 激活命令消息【CCI 0028】 |

| 索引 | 标识符 | 格式名称 |
| :--- | :--- | :--- |
| J079 | LASERWARN | 激光目标标记警告消息【CCI 0029】 |
| N010 | OPTASK.ASUW | 反舰作战任务指令【CCI 0030】 |
| N017 | OPTASKLINK | 任务指令数据链【CCI 0031】 |
| N023 | GREEN | 海上单位执行命令【CCI 0032】 |
| N028 | OPTASK AIR | 有机飞行器任务指令【CCI 0033】 |
| N067 | OPTASK COMMS | 通信任务指令【CCI 0034】 |
| N068 | OPTASK EW | 电子战任务指令【CCI 0035】 |

表5-12：ADatP-3任务消息

##### 3.2.2 空域管制

为满足所需LOI，CUCS应能处理下列ADatP-3消息类型以完成空域管制功能：

| 索引 | 标识符 | 格式名称 |
| :--- | :--- | :--- |
| A069 | SPRT.ACA | 支持空域协调令【CCI 0036】 |
| F011 | ACO | 空域管制令【CCI 0037】 |
| F012 | ACMREQ | 空域管制手段请求【CCI 0038】 |

表5-13：ADatP-3空域管制消息

#### 3.3 空中交通管制

对于在受控空域飞行的无人机及LOI 4和5，ATS消息应按ICAO文件《空中规则及空中交通服务》（Doc 4444-RAC/501）附录3格式化【CCI 0039】，见2.3节摘要。

#### 3.4 辅助数据

##### 3.4.1 通用战场态势

CUCS应能处理下列ADatP-3消息类型以完成通用战场态势：

| 索引 | 标识符 | 格式名称 |
| :--- | :--- | :--- |
| A026 | ENSITREP | 敌方陆军态势报告【CCI 0040】 |
| A031 | OWNSITREP | 我方陆军态势报告【CCI 0041】 |
| A032 | ORBATLAND | 陆军战斗序列【CCI 0042】 |
| A071 | SYS.RFR | 系统-报告请求【CCI 0043】 |
| F001 | AIRINTREP | 空中情报报告【CCI 0044】 |
| F006 | FAM | 友军空中机动【CCI 0045】 |

| 索引 | 标识符 | 格式名称 |
| :--- | :--- | :--- |
| F032 | ORBATAIR | 空军战斗序列【CCI 0046】 |
| J009 | FIRSTHOSTILEACT | 首次敌对行动报告【CCI 0047】 |
| J015 | MARINTSUM | 海上情报摘要【CCI 0048】 |
| J016 | MARINTREP | 海上情报报告【CCI 0049】 |
| J019 | AIRATTACKWARN | 空中攻击警报【CCI 0050】 |
| J038 | GEOSITREP | 地理态势报告【CCI 0051】 |
| J071 | TRACKREP | 目标轨迹报告【CCI 0052】 |
| J111 | INTSUM | 情报摘要【CCI 0053】 |

表5-14：ADatP-3通用战场态势消息

##### 3.4.2 任务相关数据

CUCS应能处理下列ADatP-3消息类型以提供任务相关数据：

| 索引 | 标识符 | 格式名称 |
| :--- | :--- | :--- |
| A058 | ATI.ATR | 火炮目标情报-火炮目标报告【CCI 0054】 |
| A059 | ATI.TIR | 火炮目标情报-目标信息请求【CCI 0055】 |
| A070 | SPRT.GEOM | 支持-战场几何【CCI 0056】 |
| J005 | COMSPOT | 通信侦察报告【CCI 0057】 |
| J006 | INCSPOTREP | 事件侦察报告【CCI 0058】 |
| J018 | MIJIWARNREP | MIJI警告报告【CCI 0059】 |
| J072 | COVREP | 武器覆盖报告【CCI 0060】 |
| J073 | SENSCOVREP | 传感器覆盖报告【CCI 0061】 |
| J110 | INTREP | 情报报告【CCI 0062】 |
| N003 | JAMWARN | 干扰警告【CCI 0063】 |
| N025 | LOCATOR | 海上部队定位器【CCI 0064】 |

表5-15：ADatP-3任务相关数据消息

##### 3.4.3 CBRN

CUCS应能处理下列ADatP-3消息类型以提供CBRN数据：

| 索引 | 标识符 | 格式名称 |
| :--- | :--- | :--- |
| J171 | CBRN 6 BIO | CBRN 6生物报告【CCI 0065】 |
| J159 | CBRN 6 CHEM | CBRN 6化学报告【CCI 0164】 |
| J185 | CBRN 6 NUC | CBRN 6核报告【CCI 0165】 |

| 索引 | 标识符 | 格式名称 |
| :--- | :--- | :--- |
| J177 | CBRN 6 RAD | CBRN 6放射性报告【CCI 0166】 |
| J178 | CBRN SITREP | CBRN态势报告【CCI 0066】 |
| J168 | CBRN 3 BIO | CBRN 3生物报告【CCI 0067】 |
| J156 | CBRN 3 CHEM | CBRN 3化学报告【CCI 0167】 |
| J182 | CBRN 3 NUC | CBRN 3核报告【CCI 0168】 |
| J174 | CBRN 3 RAD | CBRN 3放射性报告【CCI 0169】 |
| J028 | CBRN BWR | CBRN基本风报告【CCI 0068】 |
| J061 | CBRN EDR | CBRN有效下风报告【CCI 0071】 |
| J169 | CBRN 4 BIO | CBRN 4生物报告【CCI 0069】 |
| J157 | CBRN 4 CHEM | CBRN 4化学报告【CCI 0170】 |
| J183 | CBRN 4 NUC | CBRN 4核报告【CCI 0171】 |
| J175 | CBRN 4 RAD | CBRN 4放射性报告【CCI 0172】 |
| J170 | CBRN 5 BIO | CBRN 5生物报告【CCI 0070】 |
| J158 | CBRN 5 CHEM | CBRN 5化学报告【CCI 0173】 |
| J184 | CBRN 5 NUC | CBRN 5核报告【CCI 0174】 |
| J176 | CBRN 5 RAD | CBRN 5放射性报告【CCI 0175】 |
| J020 | CBRN CDR | CBRN化学/生物下风报告【CCI 0176】 |

表5-16：ADatP-3 CBRN数据消息

##### 3.4.4 火炮目标情报

CUCS应能处理下列ADatP-3消息类型以支持火炮目标情报报告：

| 索引 | 标识符 | 格式名称 |
| :--- | :--- | :--- |
| A058 | ATI.ATR | 火炮目标情报-火炮目标报告【CCI 0072】 |
| A059 | ATI.TIR | 火炮目标情报-目标信息请求【CCI 0073】 |

表5-17：ADatP-3火炮目标情报消息

##### 3.4.5 气象数据

CUCS应能处理下列ADatP-3消息类型以协调气象数据：

| 索引 | 标识符 | 格式名称 |
| :--- | :--- | :--- |
| A062 | MET.TA | 气象-目标获取【CCI 0074】 |
| A060 | MET.CM | 气象-计算机【CCI 0075】 |
| A061 | MET.RFM | 气象-气象请求【CCI 0076】 |

表5-18：ADatP-3气象数据消息

##### 3.4.6 影像产品

1. CUCS应通过CCI访问外部影像产品库，接口应符合STANAG 4559【CCI 0077】。
2. CUCS应能以STANAG 4545格式传输及接收影像产品（如与影像产品库间）【CCI 0078】。若采用磁带交付，磁带读取设备应符合STANAG 7024（将由STANAG 4575取代）。
3. 此能力大体独立于LOI，故为可选项。但若系统需访问影像产品库以获取辅助信息，使用STANAG 4559为强制。


#### 3.5 任务计划

1. 完整的任务计划需包括航线计划、有效载荷计划、数据链计划及应急恢复计划。目前尚无国际标准完全定义这四项内容，但美国正在推进通用航线定义（CRD）规范，涵盖航线计划和有限的有效载荷计划。CRD规范作为参考附录包含在STANAG 4586中，未来也将在北约官网发布，届时将提供网址。
2. CUCS应支持以CRD格式向C4I系统或其他UCS发送和接收任务计划【CCI 0080】。若某C4I系统不兼容CRD格式但需使用该格式，应通过CCISM进行格式转换【CCI 0081】。LOI 4级需支持任务计划传输接收功能，LOI 3级推荐支持【CCI 0082】。
3. ROS（安全规则）很可能包含在VSM（第4章）中，原因有两点：

- 场景通常针对特定无人机类型，依赖其能力等因素  
- 并非所有现有无人机均实现ROS  

因此本文件未提出ROS标准。  
（注：假设应急恢复计划不通过C4I系统交换。）

#### 3.6 控制交接

本节已删除。

#### 3.7 任务进展

CUCS应能处理ADatP-3消息F031，任务报告（MISREP），用于报告任务进展【CCI 0088】。适当时，MISREP应包含AMPN消息集，报告标准MISREP消息集未涵盖的数据【CCI 0089】。

| 索引 | 标识符 | 格式名称 |
| :--- | :--- | :--- |
| F031 | MISREP | 任务报告 |

表5-19：ADatP-3任务报告消息

#### 3.8 资源可用性

##### 3.8.1 空中段状态

CUCS应能处理下列ADatP-3消息类型，提供空中段状态及作战能力：

| 索引 | 标识符 | 格式名称 |
| :--- | :--- | :--- |
| J002 | ASSESSREP | 指挥官评估报告【CCI 0091】 |
| J029 | AIRSTAT | 进攻武器系统及防空状态报告【CCI 0092】 |
| J082 | LOGASSESSREP | 物流评估报告【CCI 0093】 |
| J083 | LOGUPDATE | 物流更新报告【CCI 0094】 |
| J095 | SITREP | 态势报告【CCI 0095】 |
| J099 | CISSITREP | 通信信息系统态势报告【CCI 0096】 |

表5-20：ADatP-3空中段状态及作战能力消息

##### 3.8.2 地面段状态

CUCS应能处理下列ADatP-3消息类型，提供地面段各组成部分状态及作战能力：

| 索引 | 标识符 | 格式名称 |
| :--- | :--- | :--- |
| A010 | LOGSITLAND | 陆军后勤态势报告【CCI 0097】 |
| J002 | ASSESSREP | 指挥官评估报告【CCI 0098】 |
| J029 | AIRSTAT | 进攻武器系统及防空状态报告【CCI 0099】 |
| J082 | LOGASSESSREP | 物流评估报告【CCI 0100】 |
| J083 | LOGUPDATE | 物流更新报告【CCI 0101】 |
| J095 | SITREP | 态势报告【CCI 0102】 |
| J099 | CISSITREP | 通信信息系统态势报告【CCI 0103】 |

表5-21：ADatP-3地面段状态及作战能力消息

#### 3.9 有效载荷/传感器数据

##### 3.9.1 概述

本节规定通过CCI传输无人机ISR有效载荷数据所用标准。  
注：若特定UAS不支持某有效载荷类型（如GMTI、ELINT等），支持该UCS仍可符合STANAG 4586，无需实现该有效载荷相关需求。

##### 3.9.2 影像情报（IMINT）

表5-22所列标准用于CCI间交换影像数据。当UCS接收有效载荷数据且C4I系统需该数据时，UCS应具备向C4I系统分发有效载荷数据的能力。

| 标准 | 影像类型 |
| :--- | :--- |
| STANAG 4545 | 静态EO/IR【CCI 0104】、MSI/HSI【CCI 0105】及SAR【CCI 0106】 |
| STDI-0002 | STANAG 4545元数据控制扩展【CCI 0107】 |
| STANAG 7023 | 静态EO/IR【CCI 0108】、MSI/HSI【CCI 0109】及SAR【CCI 0110】 |
| STANAG 4607 | 地面运动目标指示器【CCI 0111】 |
| STANAG 4609 | 动态EO/IR【CCI 0112】、MSI/HSI【CCI 0113】 |

表5-22：影像标准

###### 3.9.2.1 静态影像

所有数字静态影像将通过CCI使用STANAG 4545或7023传输。对所有静态影像类型，使用STDI-0002记录影像元数据（使用STANAG 4545时）。但若使用STANAG 7023，影像元数据将按其规范捕获。

###### 3.9.2.2 数字动态影像

1. STANAG 4609规定数字动态影像的标准压缩（MPEG-2）及元数据捕获方法。动态影像（无论模拟或数字采集）应按STANAG 4609通过CCI传输至需数字动态影像的C4I系统【CCI 0115】。
2. 若外部CCI节点需模拟影像，VSM或CCISM应提供有效载荷影像向相应CCI节点所需格式的必要转换（如有）【CCI 0116】，详见2.9.2.1.2.1节。

###### 3.9.2.3 多/高光谱

多光谱和高光谱影像由电磁谱不同部分的多幅图像组成。虽非当前UCS要求，但STANAG 7023和4545分别为该类有效载荷的控制标准。

###### 3.9.2.4 合成孔径雷达（SAR）

1. SAR图像应按STANAG 4545或7023规范通过CCI传输【CCI 0117】。
2. SAR辅助文本文件应包含STANAG 4545及STDI-0002中定义的支持数据，即国家影像和制图局《国家影像传输格式（NITF）控制扩展汇编（CE）》CMETAA支持数据扩展【CCI 0118】。

###### 3.9.2.5 地面运动目标指示器（GMTI）

STANAG 4607规定GMTI数据的通用标准格式。GMTI数据应按STANAG 4607通过CCI传输【CCI 0119】。

##### 3.9.3 电子情报（ELINT）

1. ELINT数据及相关报告应符合STANAG 4633 ELINT通用消息格式（ECMF）（草案）要求【CCI 0120】。
2. ESM数据源自敌方电子信号分析，应符合STANAG 4633（草案）【CCI 0121】。

##### 3.9.4 化学、生物、放射性及核（CBRN）

CUCS应能处理以下ADatP-3消息以报告CBRN有效载荷数据。注意，CBRN态势报告不包含在内，因预计由多源分析后在UCS外生成（CBRN态势报告见3.4.3节）。

| 索引 | 标识符 | 格式名称 |
| :--- | :--- | :--- |
| J166 | CBRN 1 BIO | CBRN 1生物报告【CCI 0122】 |
| J154 | CBRN 1 CHEM | CBRN 1化学报告【CCI 0177】 |
| J180 | CBRN 1 NUC | CBRN 1核报告【CCI 0178】 |
| J172 | CBRN 1 RAD | CBRN 1放射性报告【CCI 0179】 |
| J020 | CBRN CDR | CBRN化学/生物下风报告【CCI 0123】 |
| J171 | CBRN 6 BIO | CBRN 6生物报告【CCI 0124】 |
| J159 | CBRN 6 CHEM | CBRN 6化学报告【CCI 0180】 |
| J185 | CBRN 6 NUC | CBRN 6核报告【CCI 0181】 |
| J177 | CBRN 6 RAD | CBRN 6放射性报告【CCI 0182】 |
| J167 | CBRN 2 BIO | CBRN 2生物报告【CCI 0125】 |
| J155 | CBRN 2 CHEM | CBRN 2化学报告【CCI 0183】 |
| J181 | CBRN 2 NUC | CBRN 2核报告【CCI 0184】 |
| J173 | CBRN 2 RAD | CBRN 2放射性报告【CCI 0185】 |
| J168 | CBRN 3 BIO | CBRN 3生物报告【CCI 0126】 |
| J156 | CBRN 3 CHEM | CBRN 3化学报告【CCI 0186】 |
| J182 | CBRN 3 NUC | CBRN 3核报告【CCI 0187】 |
| J174 | CBRN 3 RAD | CBRN 3放射性报告【CCI 0188】 |
| J028 | CBRN BWR | CBRN基本风报告【CCI 0127】 |
| J061 | CBRN EDR | CBRN有效下风报告【CCI 0130】 |
| J169 | CBRN 4 BIO | CBRN 4生物报告【CCI 0128】 |
| J157 | CBRN 4 CHEM | CBRN 4化学报告【CCI 0189】 |
| J183 | CBRN 4 NUC | CBRN 4核报告【CCI 0190】 |
| J175 | CBRN 4 RAD | CBRN 4放射性报告【CCI 0191】 |
| J170 | CBRN 5 BIO | CBRN 5生物报告【CCI 0129】 |
| J158 | CBRN 5 CHEM | CBRN 5化学报告【CCI 0192】 |
| J184 | CBRN 5 NUC | CBRN 5核报告【CCI 0193】 |
| J176 | CBRN 5 RAD | CBRN 5放射性报告【CCI 0194】 |

表5-23：ADatP-3 CBRN数据消息

##### 3.9.5 其他有效载荷类型

###### 3.9.5.1 激光指示器/测距仪

未来能力。

#### 3.10 目标数据

近实时目标数据格式可能包含于未来版本第5章。

#### 3.11 任务报告

CUCS应能处理下列ADatP-3消息，报告任务结果：

| 索引 | 标识符 | 格式名称 |
| :--- | :--- | :--- |
| A046 | OBSREP | 障碍报告【CCI 0131】 |
| A088 | RBTRECCEREP | 道路、桥梁或隧道侦察报告【CCI 0132】 |
| A092 | GAPRECCEREP | 缝隙侦察报告【CCI 0133】 |
| A100 | OBSRECCEREP | 障碍侦察报告【CCI 0134】 |
| F031 | MISREP | 任务报告【CCI 0135】 |
| J064 | EWMSNSUM | 电子战任务摘要【CCI 0136】 |
| J101 | COMPASSESSREP | 合规性评估报告【CCI 0137】 |
| J103 | RECCEXREP | 侦察利用报告【CCI 0138】 |
| N024 | PURPLE | 海上任务摘要报告【CCI 0139】 |

表5-24：ADatP-3任务结果消息

#### 3.12 通用消息

存在若干消息不适合前述任何消息类别，但与UCS功能相关，且可能支持特定LOI。附件5-2定义其强制或可选状态。CUCS应能处理下列ADatP-3消息：

| 索引 | 标识符 | 格式名称 |
| :--- | :--- | :--- |
| A009 | PRESENCE | 存在报告【CCI 0140】 |
| A027 | LOGASREQ | 物流协助请求【CCI 0141】 |
| A028 | LOGASRESP | 物流协助响应【CCI 0142】 |

| 索引 | 标识符 | 格式名称 |
| :--- | :--- | :--- |
| A057 | MAPREQ | 地图请求【CCI 0143】 |
| A072 | SYS.RRM | 系统回复消息【CCI 0144】 |
| F087 | MOVEREQ | 移动请求【CCI 0145】 |
| F088 | MWO | 移动警告令【CCI 0146】 |
| F089 | MEO | 移动执行令【CCI 0147】 |
| F090 | MCR | 移动完成报告【CCI 0148】 |
| J001 | MSGCORRCANX | 消息更正或取消【CCI 0149】 |
| J003 | GENINFOMSG | 通用信息消息【CCI 0150】 |
| J012 | SARIR | 搜救事件报告【CCI 0151】 |
| J013 | SARREQ | 搜救请求【CCI 0152】 |
| J021 | INTREQ | 情报请求【CCI 0153】 |
| J052 | ROEREQ | 交战规则请求【CCI 0154】 |
| J092 | EVENTREP | 事件报告【CCI 0155】 |
| J112 | CIINTREP | 反情报及安全报告【CCI 0156】 |
| J113 | CIINTSUM | 反情报及安全摘要【CCI 0157】 |
| J114 | SUPINTREP | 补充情报报告【CCI 0158】 |
| J115 | CISUPINTREP | 反情报及安全补充报告【CCI 0159】 |
| N033 | SATVULREP | 卫星脆弱性报告【CCI 0160】 |

表5-25：ADatP-3通用消息


### 附件5-1：信息交换要求

本节包含施加于UCS上的信息交换要求，因此也适用于CCI。CCI（不包括DLI）代表UCS的外部接口。

**注:**

注1指的是信息交换要求（IER）中的产品/动作列。“Tx”表示该功能/产品由UCS发送，“Rx”表示该功能/产品由UCS接收。


注2指的是信息交换要求（IER）中的理由（UJTL#）列。


以下提供了本文档中所识别的各个通用联合任务列表（UJTL）编号的描述。

| ST 2.2.1 | 收集战区战略态势信息 |
| :--- | :--- |
| ST 2.4.2.2 | 提供战区当前情报 |
| ST 2.4.2.4 | 为战区规划与执行提供目标情报 |
| ST 5.1.4 | 监控全球及战区战略态势 |
| OP 1.2.5 | 在联合行动区开展进攻行动 |
| OP 1.3.2 | 促进作战部队机动作战 |
| OP 2.1.3 | 制定作战收集计划 |
| OP 2.2 | 收集与共享作战信息 |
| OP 2.2.1 | 收集作战态势信息 |
| OP 2.2.3 | 收集与评估气象海洋信息（METOC） |
| OP 2.2.5 | 收集目标信息 |
| OP 2.4 | 产生作战情报并编制情报产品 |
| OP 2.4.2.1 | 为联合行动区提供预警与提示 |
| OP 2.4.2.2 | 为联合行动区提供当前情报 |
| OP 2.4.2.4 | 为联合行动区提供目标情报 |
| OP 2.5 | 传播与整合作战情报 |
| OP 2.5.3 | 为联合行动区计划者和决策者提供近实时情报 |

**注:**

OP 3.1.3 制定作战目标  
OP 3.1.6.1 评估作战目标的战损情况  
OP 5.1.4 维护作战信息和部队状态  
OP 5.1.5 监控战略态势  
OP 5.2 评估作战态势  
OP 5.2.1 审查当前态势  
TA 1.2.2 开展联合空降作战  
TA 2.2 获取并评估情报信息  
TA 3.1 处理目标  
TA 5.1 获取和传递信息，维护状态与部队报告  
TA 5.2.1 建立、操作和维护基础通信  

注3指的是信息交换要求（IER）中的LOI列，表示UCS的运行互操作等级（LOI）。

**无人机控制系统（UCS）指挥控制接口（CCI）**

**—信息交换要求（IER）矩阵—**

**内容略：详见 p5-32 至 p5-43**

主要包括七大内容模块，共同构成了CCI信息交换要求矩阵，明确了UCS在不同任务领域与各类外部系统之间的数据类型、消息标准、格式、节点、关键性及时效，为实现STANAG 4586下的全流程互操作提供了完整规范。

1. **维护与翻新系统（Maintenance & Refurbishing Systems）**
2. **载荷/传感器数据（Payload/Sensor Data）**
3. **目标数据（Target Data）**
4. **战场几何（Battlefield Geometry）**
5. **侦察报告（Reconnaissance Reports）**
6. **战损评估报告（Battle Damage Assessment Reports）**
7. **杂项（Miscellaneous，包括网络、语音、图像产品库接口等）**

以下是《附件 5‑1 CCI 信息交换要求（IER）矩阵》中各个子表的概述及其用途：

1. **维护与翻新系统（Maint. and Refurb Sys）**
   - **内容综述**：列出了维护与翻新系统所需交换的信息项，包括产品/动作（Maintenance & Refurb Sys）、对应的UJTL任务序号、适用LOI、采用标准（ADatP‑3）、消息格式、发送/接收节点、关键信息与时效要求等。
   - **用途**：定义UCS与维护/翻新系统之间就可用资源与状态的上报与请求，保证维修周期与备件供应的及时协调。
2. **载荷/传感器数据（Payload/Sensor Data）**
   - **内容综述**：按载荷类型（如EO/IR实时动图、静幅图像、SAR、GMTI、MSI/HSI、ELINT/ESM、CBRN、COMINT等）逐条列出：
     - 任务需求（UJTL 编号）、适用LOI
     - 强制使用的国际/北约标准（STANAG 4609、7023、4545、4607、4633等）
     - 数据格式（MPEG‑2、NITF、MTI 矢量等）
     - 发送/接收节点、是否关键及时效（秒到小时不等）
   - **用途**：统一UCS向上级C4I系统提供各类传感器原始或处理后数据的格式、协议和时限要求，确保多种载荷数据能互操作与实时利用。
3. **目标数据（Target Data）**
   - **内容综述**：包括“任务状态”（Mission Status）和“目标采集坐标”（Target, Collection Coordinate）两类数据：
     - 对应的UJTL任务、适用LOI
     - 使用ADatP‑3消息或SMTP文本消息
     - 发送/接收节点、关键性及时效（分钟至小时或秒级）
   - **用途**：规范UCS向指挥节点上报当前任务执行状态和目标探测信息，支持实时打击与任务反馈。
4. **战场几何（Battlefield Geometry）**
   - **内容综述**：以ADatP‑3战场几何（SPRT.GEOM）消息形式，交换进攻通道、射击区等地理要素；指出关联UJTL任务、LOI和时效要求。
   - **用途**：为UCS与作战指挥系统共享战场结构与目标区域，辅助路径规划与火力部署。
5. **侦察报告（Recon Rpts）**
   - **内容综述**：定义各类侦察总结报告（Mission Summary、Communications、EW等），采用ADatP‑3战术消息格式，包含UJTL、LOI和时效要求。
   - **用途**：规范UCS向指挥层提交综合侦察结果（文字、图像或视频），支持情报融合与决策。
6. **战损评估报告（Battle Damage Reports）**
   - **内容综述**：指定在目标破坏后上报战损评估的格式（战术消息、影像、视频），关联UJTL任务编号及LOI，指出时效（分钟到小时）。
   - **用途**：对打击效果进行及时评估，帮助上级调整火力任务或后续行动。
7. **杂项（MISCELLANEOUS）**
   - **LAN 连接**
     - **内容**：规定UCS与C4I系统间以太网标准（IEEE 802.3）、协议（TCP/IP、SMTP、FTP等）承载文本、影像、语音、视频和数据。
     - **用途**：保证UCS网络接口的物理与协议互操作性。
   - **图像产品库接口（IPL/IL Interface）**
     - **内容**：采用STANAG 4559（NSILI）标准，通过CORBA访问外部图像产品库中的NITF文件。
     - **用途**：支持UCS动态检索和获取外部影像资料，用于任务规划和影像利用。
   - **数字语音（Digital Voice）**
     - **内容**：使用H.323/VoIP标准，在UCS与C4I节点间分发实时语音。
     - **用途**：在需要时为指挥官或传感器操作员提供可靠的实时语音通信通道。



### 附件5-2：ADatP-3 第11版消息实现要求

1. 本附件表格包含适用于UCS的ADatP-3第11版消息列表。每条消息均有标识，功能或用途摘要及适用的LOI说明。
2. 索引参考号 — 本列包含ADatP-3中的索引参考号，同时指示UCS的发送（Tx）或接收（Rx）要求。
3. MTF标识符 — 本列包含ADatP-3中列出的消息文本格式标识符。
4. MTF名称 — 本列包含ADatP-3中列出的消息文本格式名称。
5. 功能或用途 — 本列包含ADatP-3中列出的功能或用途。
6. LOI — 本列包含与每条消息相关的适用LOI。该数字表示消息为强制执行的最低LOI等级。低于该等级则为可选实现（详见1.6节CCI中UAS LOI的实现说明）。
7. 备注 — 本列包含一般备注及相关的第3章和第5章段落交叉引用（如适用）。

| 索引参考号 | MTF 标识符 | MTF 名称 | 功能或用途 | LOI | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| A009 (发送) | PRESENCE | 存在报告 | 用于向指挥官通报其责任区域内军事组织部署情况。报告涵盖指挥官指挥下的组织及非指挥组织。 | 可选 | 第3.12节 一般消息 |
| A010 (发送) | LOGSITLAND | 陆军后勤态势报告 | 用于向上级总部提供单位或编队后勤态势、能力及缺陷/盈余的评估。 | 可选 | 第3.8.2节 资源可用性，地面段状态 |
| A026 (收发) | ENSITREP | 敌军陆军态势报告 | 用于报告和通报敌军情况，包括位置、活动、边界、状态、兵力编成（ORBAT）及隶属关系。 | 2,3,4,5 | 第3.4.1节 附带数据，战场总体态势 |
| A027 (发送) | LOGASREQ | 后勤援助请求 | 陆军用于请求后勤援助。 | 可选 | 第3.12节 一般消息 |
| A028 (接收) | LOGASRESP | 后勤援助响应 | 陆军用于响应后勤援助请求。 | 可选 | 第3.12节 一般消息 |
| A031 (收发) | OWNSITREP | 自军陆军态势报告 | 报告影响自军及下属单位态势、部署、状态和兵力编成的因素。 | 2,3,4,5 | 第3.4.1节 附带数据，战场总体态势 |
| A032 (接收) | ORBATLAND | 陆军兵力编成顺序报告 | 通知北约主要指挥官和平时期及危机、战争期间陆军兵力编成变化，确保操作规划使用最新信息。 | 4,5 | 第3.4.1节 附带数据，战场总体态势 |
| A033 (发送) | FM.CFF | 火力任务-火力呼叫 | 发送初始火力效果请求及/或开火命令。 | 3 | 第3.2.1节 任务分配 |
| A034 (发送) | FM.SUB | 火力任务-后续调整 | 发送更新的网格位置，重复火力效果和/或终止任务。 | 3 | 第3.2.1节 任务分配 |
| A035 (收发) | FM.MTO | 火力任务-观测员信息 | 回应目标火力呼叫时，向观测员传递信息。 | 3 | 第3.2.1节 任务分配 |
| A036 (发送) | FM.FMC | 火力任务-火力命令 | 向火力单位或观测员发送火力任务命令。 | 3 | 第3.2.1节 任务分配 |
| A046 (收发) | OBSREP | 障碍报告 | 向指挥链上报障碍物情况。 | 2,3,4,5 | 第3.11节 任务报告 |
| A057 (收发) | MAPREQ | 地图请求 | 提交地图覆盖请求。 | 可选 | 第3.12节 一般消息 |
| A058 (收发) | ATI.ATR | 炮兵目标情报-目标报告 | 根据持续请求或单次查询发送目标信息，建立或删除目标信息。 | 2,3,4,5 | 第3.4.2节 附带数据，任务相关 |
| A059 (接收) | ATI.TIR | 炮兵目标情报-目标信息请求 | 请求目标信息，作为单次查询或持续请求。 | 2,3,4,5 | 第3.4.2节 附带数据，任务相关 |
| A060 (接收) | MET.CM | 气象计算机数据 | 传输计算机气象数据。 | 2,3,4,5 | 第3.4.4节 附带数据，气象 |
| A061 (收发) | MET.RFM | 气象支援请求 | 请求气象支援。 | 2,3,4,5 | 第3.4.4节 附带数据，气象 |
| A062 (收发) | MET.TA | 气象目标获取 | 传输用于目标获取的气象数据。 | 2,3,4,5 | 第3.4.4节 附带数据，气象 |
| A069 (收发) | SPRT.ACA | 支援-空域协调区 | 建立或删除空域协调区（ACA）。 | 4,5 | 第3.2.2节 空域管制 |
| A070 (收发) | SPRT.GEOM | 支援-战场几何形状 | 建立或删除战场几何形状（如进攻通道、进攻轴、目标区域、射击区），支持陆战作战和火力计划。 | 2,3,4,5 | 第3.4.2节 附带数据，任务相关 |
| A071 (收发) | SYS.RFR | 系统-报告请求 | 建立或删除弹药状态报告、火力单位状态报告、射击地点、战场几何形状、友军位置、火力计划目标列表等请求。 | 2,3,4,5 | 第3.4.1节 附带数据，战场总体态势 |
| A072 (收发) | SYS.RRM | 系统应答消息 | 用于传输对接收消息的回复。 | 1,2,3,4,5 | 第3.12节 一般消息 |
| A080 (接收) | FRAGO | 片段命令 | 在完整命令发布前下达关键部分操作命令；为不需完整命令的指挥官提供具体指令；提供完整命令摘要；及时变更现有命令或提供快速移动作战行动指令。 | 1,2,3,4,5 | 第3.2.1节 任务分配 |
| A088 (收发) | RBTRECCEREP | 道路、桥梁或隧道侦察报告 | 报告路线段道路、桥梁或隧道技术侦察结果。 | 2,3,4,5 | 第3.11节 任务报告 |
| A092 (收发) | GAPRECCEREP | 缺口侦察报告 | 报告缺口穿越地点侦察结果。 | 2,3,4,5 | 第3.11节 任务报告 |
| A100 (收发) | OBSRECCEREP | 障碍侦察报告 | 报告敌方或友方现有或计划障碍的侦察结果。 | 2,3,4,5 | 第3.11节 任务报告 |
| F001 (接收) | AIRINTREP | 空中情报报告 | 通知SHAPE及ACE指挥官非北约空军编成位置、部署、状态等重要信息变化。 | 4,5 | 第3.4.1节 附带数据，战场总体态势 |
| F004 (接收) | AIRTASK | 空中任务 | 用于战术空中支援任务，包括陆地和海上作战支援。 | 2,3,4,5 | 第3.2.1节 任务分配 |
| F006 (接收) | FAM | 友军空中活动 | 通知相关单位非战术海上空中支援范围内民用和军用空中活动。 | 可选 | 第3.4.1节 附带数据，战场总体态势 |
| F011 (接收) | ACO | 空域管制令 | 向下属单位发布空域管理和管制具体详细命令。 | 4,5 | 第3.2.2节 空域管制 |
| F012 (收发) | ACMREQ | 空域管制手段请求 | 请求未来空域管制令中指定特定空域管制手段。 | 4,5 | 第3.2.2节 空域管制 |
| F015 (接收) | AIRALLOC | 空中分配消息 | 通知下属单位、编队和任务机构分配的空中力量。 | 2,3,4,5 | 第3.2.1节 任务分配 |
| F031 (收发) | MISREP | 任务报告 | 报告任务结果及情报兴趣事项，重传及/或扩充飞行中报告。 | 2,3,4,5 | 第3.7节及3.11节 任务进展及任务报告 |
| F032 (接收) | ORBATAIR | 空军兵力编成顺序报告 | 通知北约主要指挥官和平及危机战争时期空军编成变化，确保最新信息用于作战规划。 | 4,5 | 第3.4.1节 附带数据，战场总体态势 |
| F043 (发送) | RESPONSE | 空中支援响应 | 接受、拒绝或否决空中支援请求，也可支持或说明请求优先级。 | 4,5 | 第3.2.1节 任务分配 |
| F058 (接收) | ATO | 空中任务令 | 用于空中任务分配、跨部队任务指派，也用于部门内任务分配。 | 2,3,4,5 | 第3.2.1节 任务分配 |
| F087 (收发) | MOVEREQ | 部队调动请求 | 单位或更高级别请求执行陆基单位部署。 | 可选 | 第3.12节 一般消息 |
| F088 (接收) | MWO | 部队调动预警令 | 任务机构发出陆基单位预期部署预警。 | 可选 | 第3.12节 一般消息 |
| F089 (接收) | MEO | 部队调动执行令 | 任务机构命令陆基单位部署。 | 可选 | 第3.12节 一般消息 |
| F090 (收发) | MCR | 部队调动完成报告 | 陆基单位报告部署完成情况。 | 可选 | 第3.12节 一般消息 |
| J001 (收发) | MSGCORRCANX | 消息更正或取消 | 用于取消消息及/或更正先前发送消息信息。 | 1,2,3,4,5 | 第3.12节 一般消息 |
| J002 (收发) | ASSESSREP | 指挥官评估报告 | 向上级指挥官通报指挥官关注区域的态势/行动、整体态势评估及拟采取措施。 | 可选 | 第3.8.1及3.8.2节 资源可用性，空中及地面段状态 |
| J003 (收发) | GENINFOMSG | 一般信息消息 | 仅用于提供无法用现有MTF格式提供的信息。该消息用于特殊、不可预见情况，不应用于常规替代现有消息。 | 可选 | 第3.12节 一般消息 |
| J005 (收发) | COMSPOT | 通信状况报告 | 报告实际或预期通信中断，包括搬迁及电磁管制(EMCON)情况。 | 2,3,4,5 | 第3.4.2节 附带数据，任务相关 |
| J006 (收发) | INCSPOTREP | 事件速报 | 提供对作战有直接影响的重要事件时效信息。 | 2,3,4,5 | 第3.4.2节 附带数据，任务相关 |
| J007 (收发) | CBRN 1 | CBRN 1报告 | 提供观察者初报的基本数据。 | 2,3,4,5 | 第3.9.5及3.9.11节 传感器数据，CBRN及任务报告 |
| J009 (接收) | FIRSTHOSTILEACT | 首次敌对行为报告 | 快速向北约主要指挥部提供敌方/对抗力量首次敌对行为信息，以便及时反应。 | 1,2,3,4,5 | 第3.4.1节 附带数据，战场总体态势 |
| J012 (发送) | SARIR | 搜救事件报告 | 报告可能需要搜救行动的任何情况。 | 可选 | 第3.12节 一般消息 |
| J013 (接收) | SARREQ | 搜救请求 | 请求部队参与搜救任务。 | 4,5 | 第3.12节 一般消息 |
| J015 (接收) | MARINTSUM | 海事情报摘要 | 提供北约海域非北约部队活动定期摘要信息。 | 1,2,3,4,5 | 第3.4.1节 附带数据，战场总体态势 |
| J016 (接收) | MARINTREP | 海事情报报告 | 提供北约海域非北约部队活动时效性预警信息。 | 4,5 | 第3.4.1节 附带数据，战场总体态势 |
| J017 (接收) | IFFPROD | IFF程序 | 向友军提供有效的IFF模式及代码及其有效时间。 | 4,5 | 第3.2.1节 任务分配 |
| J018 (收发) | MIJIWARNREP | MIJI预警报告 | 用于和平及危机期间，警告北约国家、指挥部及部队有关敌对、友军（无意）或未知来源的有害电子战情况。 | 1,2,3,4,5 | 第3.4.2节 附带数据，任务相关 |
| J019 (接收) | AIRATTACKWARN | 空袭警报 | 警告友军即将遭受敌方空袭。可配合全球预警（GEW）或局部预警（LEW）自动防空系统生成消息。 | 1,2,3,4,5 | 第3.4.1节 附带数据，战场总体态势 |
| J020 (接收) | CBRN CDR | CBRN 化学/生物下风报告 | 相关机构每6小时发布化学危险区预测所需气象数据，覆盖连续3个2小时周期，最近6小时或更长时间。 | 1,2,3,4,5 | 第3.9.5及3.11节 传感器数据，CBRN及任务报告 |
| J021 (收发) | INTREQ | 情报请求 | 标准化北约军事当局和部队请求情报信息的方法。 | 2,3,4,5 | 第3.12节 一般消息 |
| J022 (收发) | CBRN 6 | CBRN 6消息 | 传递CBRN事件详细信息。 | 2,3,4,5 | 第3.4.3及3.9.5节 附带数据，CBRN及传感器数据 |
| J023 (接收) | CBRN 2 | CBRN 2报告 | 传递CBRN1报告的评估数据。 | 1,2,3,4,5 | 第3.9.5节 传感器数据，CBRN |
| J024 (接收) | CBRN SITREP | CBRN态势报告 | 传递CBRN态势信息。 | 2,3,4,5 | 第3.4.3节 附带数据，CBRN |
| J026 (收发) | CBRN 3 | CBRN 3报告 | 传递预测污染和危险区域的即时预警。 | 1,2,3,4,5 | 第3.4.3及3.9.5节 附带数据，CBRN及传感器数据 |
| J028 (收发) | CBRN BWR | CBRN 基本风速报告 | 报告地表至$30,000\,m$高度以$2,000\,m$增量的风向和风速，覆盖最近6小时或更长时间。 | 可选 | 第3.4.3及3.9.5节 附带数据，CBRN及传感器数据 |
| J029 (发送) | AIRSTAT | 进攻武器系统及防空态势报告 | 向SHAPE通报进攻空军、海军直升机及巡逻机、防御武器系统态势。 | 4,5 | 第3.8.1及3.8.2节 资源可用性，空中及地面段状态 |
| J033 (收发) | CBRN 4 | CBRN 4报告 | 报告检测数据及勘察结果。 | 2,3,4,5 | 第3.4.3及3.9.5节 附带数据，CBRN及传感器数据 |
| J034 (收发) | CBRN 5 | CBRN 5报告 | 传递实际污染区信息。 | 2,3,4,5 | 第3.4.3及3.9.5节 附带数据，CBRN及传感器数据 |
| J038 (接收) | GEOSITREP | 地理态势报告 | 在紧张和战争时期，向下级指挥部通报ACE范围内地理态势。首报通知地图服务严重短缺和紧急需求。后续报告保持信息更新以支持总部评估、计划和协调。 | 可选 | 第3.4.1节 附带数据，战场总体态势 |
| J050 (接收) | ORBATTOALAND-AIR | 陆空兵力编成权力移交消息 | 报告或指令国家间及北约内的作战指挥权（OPCOM）和控制权（OPCON）移交。通常确认ACTWARN和ACTREQ消息中的权力委托请求。 | 可选 | 第3.2.1节 任务分配 |
| J051 (接收) | ROEIMPL | 交战规则实施 | 实施和/或取消具体交战规则。 | 3,4,5 | 第3.2.1节 任务分配 |
| J052 (收发) | ROEREQ | 交战规则请求 | 请求授权实施具体交战规则。 | 可选 | 第3.12节 一般消息 |
| J060 (接收) | ROEAUTH | 交战规则授权 | 北大西洋理事会/防务规划委员会授权实施或取消具体交战规则。 | 3,4,5 | 第3.2.1节 任务分配 |
| J061 (接收) | CBRN EDR | CBRN 有效下风报告 | 提供核爆炸后辐射落尘区预测的有效下风数据，包含最近6小时或更长时间内的特定风速和风向，涵盖多达7个选定武器当量。 | 2,3,4,5 | 第3.4.3及3.9.5节 附带数据，CBRN及传感器数据 |
| J064 (收发) | EWMSNSUM | 电子战任务总结 | 总结重要电子战任务及进攻电子战资产状态。 | 3,4,5 | 第3.11节 任务报告 |
| J065 (接收) | EWSTOPJAM | 电子战停止干扰消息 | 立即终止电子对抗资产的干扰任务。 | 3 | 第3.2.1节 任务分配 |
| J066 (接收) | EWRTM | 电子战请求/任务消息 | 任务分配组件指挥官执行联合电子战计划及支持组件电子战行动。 | 3,4,5 | 第3.2.1节 任务分配 |
| J070 (接收) | WCO | 武器控制命令 | 下达短程防空武器控制新命令。 | 4,5 | 第3.2.1节 任务分配 |
| J071 (收发) | TRACKREP | 目标跟踪报告 | 按轨迹编号报告飞机移动。 | 2,3,4,5 | 第3.4.1节 附带数据，战场总体态势 |
| J072 (接收) | COVREP | 武器覆盖报告 | 通知其他编队短程防空武器覆盖情况。 | 4,5 | 第3.4.2节 附带数据，任务相关 |
| J073 (接收) | SENSCOVREP | 传感器覆盖报告 | 通知其他编队短程防空传感器覆盖情况。 | 4,5 | 第3.4.2节 附带数据，任务相关 |
| J076 (接收) | ACTWARN | 激活预警消息 | 通知国家、军队总部、多国指挥部及其他指挥部可能激活应急计划、待命部队、特种监视任务或其他特殊军力需求。 | 1,2,3,4,5 | 第3.2.1节 任务分配 |
| J077 (收发) | ACTREQ | 激活请求消息 | 向北约军事委员会请求激活应急计划、待命部队、特种监视任务等权限。 | 可选 | 第3.2.1节 任务分配 |
| J078 (接收) | ACTORD | 激活命令消息 | 激活应急计划、待命部队、特种监视任务或其他军力需求。 | 1,2,3,4,5 | 第3.2.1节 任务分配 |
| J079 (收发) | LASERWARN | 激光目标标记预警消息 | 确认激光目标标记装置的激活安排。 | 3,4,5 | 第3.2.1节 任务分配 |
| J082 (收发) | LOGASSESSREP | 后勤评估报告 | 标准化向上级总部通报指挥部后勤状态及整体评估的方法，并提供后勤态势及拟采取措施。 | 可选 | 第3.8.1及3.8.2节 资源可用性，空中及地面段状态 |
| J083 (收发) | LOGUPDATE | 后勤更新报告 | 动态更新北约指挥官关于国家部队装备及消耗品库存信息变动。 | 可选 | 第3.8.1及3.8.2节 资源可用性，空中及地面段状态 |
| J092 (收发) | EVENTREP | 事件报告 | 向北约总部及成员国通过多国指挥链提供和平支持行动中重要事件、趋势及活动信息。 | 1,2,3,4,5 | 第3.12节 一般消息 |
| J095 (收发) | SITREP | 态势报告 | 向欧洲盟军最高司令提供己方兵力能力、当前及解放作战态势信息。 | 1,2,3,4,5 | 第3.8.1及3.8.2节 资源可用性，空中及地面段状态 |
| J099 (收发) | CISSITREP | 通信信息系统态势报告 | 定期报告本单位通信与信息系统状态，支持作战及演习。 | 1,2,3,4,5 | 第3.8.1及3.8.2节 资源可用性，空中及地面段状态 |


| 索引参考号 | MTF 标识符 | MTF 名称 | 功能或用途 | LOI | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| J101 (收发) | COMPASSESSREP | 合规性评估报告 | 用于向多国指挥官（MNCS）和北约总部提供有关各方对指定“安全”区、禁区或分隔区遵守情况的信息，报告中可能包括评估内容。 | 1,2,3,4,5 | 第3.11节 任务报告 |
| J103 (收发) | RECCEXREP | 侦察利用报告 | 用于报告空中侦察任务中通过传感器数据解读得到的结果。 | 1,2,3,4,5 | 第3.11节 任务报告 |
| J110 (收发) | INTREP | 情报报告 | 用于即时传播可能对当前和即将进行的行动与计划产生重大影响的关键信息。 | 1,2,3,4,5 | 第3.4.1节 附带数据，战场总体态势 |
| J111 (接收) | INTSUM | 情报摘要 | 定期向收件人通报军事及相关政治/经济情报和评估，指出潜在敌军能力、准备状态、军事姿态、活动、意图、目标及行动方案在和平、非战争行动和战争时期的变化。 | 1,2,3,4,5 | 第3.4.1节 附带数据，战场总体态势 |
| J112 (收发) | CIINTREP | 反情报与安全报告 | 用于即时传播可能对当前或计划行动及规划产生重大影响的反情报与安全信息。 | 可选 | 第3.12节 一般消息 |
| J113 (收发) | CIINTSUM | 反情报与安全摘要 | 定期向收件人通报当前反情报与安全情况，并评估敌对情报机构或颠覆组织带来的威胁。 | 可选 | 第3.12节 一般消息 |
| J114 (接收) | SUPINTREP | 补充情报报告 | 向所有收件人提供长期收集的非时效性情报综合回顾或特定主题的详细情报研究。 | 可选 | 第3.12节 一般消息 |
| J115 (接收) | CISUPINREP | 反情报与安全补充报告 | 提供长期收集的所有反情报数据综合回顾，包括反情报态势发展趋势评估，也可用于对一项或多项具体反情报项目的综合评审。 | 可选 | 第3.12节 一般消息 |
| N003 (收发) | JAMWARN | 干扰警告 | 发布有关本方干扰行动的警告。 | 1,2,3,4,5 | 第3.4.2节 附带数据，任务相关 |
| N010 (接收) | OPTASK ASUW | 反水面作战任务分配 | 发布反水面作战的详细任务和指令。 | 3,4,5 | 第3.2.1节 任务分配 |
| N017 (接收) | OPTASK LINK | 任务数据链 | 提供有关战术数据链操作的详细指令。 | 2,3,4,5 | 第3.2.1节 任务分配 |
| N023 (接收) | GREEN | 海军单位执行命令 | 任务分配给海上巡逻、监视和反潜作战单位。 | 1,2,3,4,5 | 第3.2.1节 任务分配 |
| N024 (收发) | PURPLE | 海军任务总结报告 | 提供任务或事件的全面总结。 | 3,4,5 | 第3.11节 任务报告 |
| N025 (收发) | LOCATOR | 海军力量定位报告 | 报告在海洋环境中作业的水面、水下、空中或特定感兴趣单位。 | 2,3,4,5 | 第3.4.2节 附带数据，任务相关 |
| N028 (接收) | OPTASK AIR | 机载有机构任务分配 | 由作战指挥官（OTC）或授权代表发布所有有机航空器的详细任务和指令，通常由OTC或空中协调员发布。 | 3,4,5 | 第3.2.1节 任务分配 |
| N033 (接收) | SATVULREP | 卫星脆弱性报告 | 发布对卫星侦察脆弱期的通告及卫星监视对抗措施。 | 可选 | 第3.12节 一般消息 |
| N067 (接收) | OPTASK COMMS | 通信任务分配 | 发布现行通信计划及相关指令。 | 2,3,4,5 | 第3.2.1节 任务分配 |
| N068 (接收) | OPTASK EW | 电子战任务分配 | 发布电子战的详细任务和指令。 | 3,4,5 | 第3.2.1节 任务分配 |

---

### 附件 5-3：UAS LOI ADatP-3 BUILD 11 要求

#### 互操作等级 1（LOI 1）

| 索引参考号 | MTF 标识符 | MTF 名称 |
| :--- | :--- | :--- |
| A072 | SYS.RRM | 系统应答消息 |
| A080 | FRAGO | 片段命令 |
| J001 | MSGCORRCANX | 消息更正或取消 |
| J009 | FIRSTHOSTILEACT | 首次敌对行为报告 |
| J015 | MARINTSUM | 海事情报摘要 |
| J018 | MIJIWARNREP | MIJI预警报告 |
| J019 | AIRATTACKWARN | 空袭警报 |
| J020 | CBRN CDR | CBRN 化学/生物下风报告 |
| J167 | CBRN 2 BIO | CBRN 2 生物报告 |
| J155 | CBRN 2 CHEM | CBRN 2 化学报告 |
| J181 | CBRN 2 NUC | CBRN 2 核报告 |
| J173 | CBRN 2 RAD | CBRN 2 放射性报告 |
| J168 | CBRN 3 BIO | CBRN 3 生物报告 |
| J156 | CBRN 3 CHEM | CBRN 3 化学报告 |
| J182 | CBRN 3 NUC | CBRN 3 核报告 |
| J174 | CBRN 3 RAD | CBRN 3 放射性报告 |
| J028 | CBRN BWR | CBRN 基本风速报告 |
| J061 | CBRN EDR | CBRN 有效下风报告 |
| J169 | CBRN 4 BIO | CBRN 4 生物报告 |
| J157 | CBRN 4 CHEM | CBRN 4 化学报告 |
| J183 | CBRN 4 NUC | CBRN 4 核报告 |
| J175 | CBRN 4 RAD | CBRN 4 放射性报告 |
| J076 | ACTWARN | 激活预警消息 |
| J078 | ACTORD | 激活命令消息 |
| J092 | EVENTREP | 事件报告 |
| J095 | SITREP | 态势报告 |
| J099 | CISSITREP | 通信信息系统态势报告 |
| J101 | COMPASSESSREP | 合规性评估报告 |
| J103 | RECCEXREP | 侦察利用报告 |
| J110 | INTREP | 情报报告 |
| J111 | INTSUM | 情报摘要 |
| N003 | JAMWARN | 干扰警告 |
| N023 | GREEN | 海军单位执行命令 |


#### 互操作等级 2（LOI 2）

包含所有低级别LOI消息，外加以下消息（详见第1.6节《CCI中UAS LOI实施》备注）：

| 索引参考号 | MTF 标识符 | MTF 名称 |
| :--- | :--- | :--- |
| A026 | ENSITREP | 敌方陆军态势报告 |
| A031 | OWNSITREP | 我方陆军态势报告 |
| A046 | OBSREP | 障碍物报告 |
| A058 | ATI.ATR | 火炮目标情报-火炮目标报告 |
| A059 | ATI.TIR | 火炮目标情报-目标信息请求 |
| A060 | MET.CM | 气象-计算机数据 |
| A061 | MET.RFM | 气象-气象请求 |
| A062 | MET.TA | 气象-目标获取 |
| A070 | SPRT.GEOM | 支持-战场几何数据 |
| A071 | SYS.RFR | 系统-报告请求 |
| A088 | RBTRECCEREP | 道路、桥梁或隧道侦察报告 |
| A092 | GAPRECCEREP | 间隙侦察报告 |
| A100 | OBSRECCEREP | 障碍侦察报告 |
| F004 | AIR TASK | 空中任务 |
| F015 | AIRALLOC | 空中分配信息 |
| F058 | ATO | 空中任务指令 |
| J005 | COMSPOT | 通信突发报告 |
| J006 | INCSPOTREP | 事件突发报告 |
| J021 | INTREQ | 情报请求 |
| J071 | TRACKREP | 目标轨迹报告 |
| J166 | CBRN 1 BIO | CBRN 1 生物报告 |
| J154 | CBRN 1 CHEM | CBRN 1 化学报告 |
| J180 | CBRN 1 NUC | CBRN 1 核报告 |

| 索引参考号 | MTF 标识符 | MTF 名称 |
| :--- | :--- | :--- |
| J172 | CBRN 1 RAD | CBRN 1 放射性报告 |
| J171 | CBRN 6 BIO | CBRN 6 生物报告 |
| J159 | CBRN 6 CHEM | CBRN 6 化学报告 |
| J185 | CBRN 6 NUC | CBRN 6 核报告 |
| J177 | CBRN 6 RAD | CBRN 6 放射性报告 |
| J178 | CBRN SITREP | CBRN 态势报告 |
| J170 | CBRN 5 BIO | CBRN 5 生物报告 |
| J158 | CBRN 5 CHEM | CBRN 5 化学报告 |
| J184 | CBRN 5 NUC | CBRN 5 核报告 |
| J176 | CBRN 5 RAD | CBRN 5 放射性报告 |
| N017 | OPTASK LINK | 任务数据链 |
| N025 | LOCATOR | 海军力量定位报告 |
| N067 | OPTASK COMMS | 任务通信 |

---

#### 互操作等级 3（LOI 3）

包含所有低级别LOI消息，外加以下消息（详见第1.6节《CCI中UAS LOI实施》备注）：

| 索引参考号 | MTF 标识符 | MTF 名称 |
| :--- | :--- | :--- |
| A033 | FM.CFF | 火力任务-开火请求 |
| A034 | FM.SUB | 火力任务-后续调整 |
| A035 | FM.MTO | 火力任务-观察员消息 |
| A036 | FM.FMC | 火力任务-火力任务指令 |
| F031 | MISREP | 任务报告 |
| J051 | ROEIMPL | 交战规则实施 |
| J060 | ROEAUTH | 交战规则授权 |
| J064 | EWMSNSUM | 电子战任务总结 |
| J065 | EWSTOPJAM | 电子战停止干扰消息 |
| J066 | EWRTM | 电子战请求/任务消息 |
| J079 | LASERWARN | 激光目标标记警告消息 |
| N010 | OPTASK ASUW | 反水面作战任务分配 |
| N024 | PURPLE | 海军任务总结报告 |
| N028 | OPTASK AIR | 机载有机构任务分配 |
| N068 | OPTASK EW | 电子战任务分配 |

---

#### 互操作等级 4 和 5（LOI 4 & 5）

包含本附件中LOI 1和2表中所有消息，外加以下消息（详见第1.6节备注）：

| 索引参考号 | MTF 标识符 | MTF 名称 |
| :--- | :--- | :--- |
| A032 | ORBATLAND | 陆军兵力序列 |
| A069 | SPRT.ACA | 支持-空域协调区 |
| F001 | AIRINTREP | 空中情报报告 |
| F011 | ACO | 空域控制令 |
| F012 | ACMREQ | 空域控制手段请求 |
| F031 | MISREP | 任务报告 |
| F032 | ORBATAIR | 空军兵力序列 |
| F043 | RESPONSE | 空中支援响应 |
| J013 | SARREQ | 搜救请求 |
| J016 | MARINTREP | 海事情报报告 |
| J017 | IFFPROD | 识别友军程序 |
| J029 | AIRSTAT | 进攻武器系统和防空态势报告 |
| J051 | ROEIMPL | 交战规则实施 |
| J060 | ROEAUTH | 交战规则授权 |
| J064 | EWMSNSUM | 电子战任务总结 |
| J066 | EWRTM | 电子战请求/任务消息 |
| J070 | WCO | 武器控制令 |
| J072 | COVREP | 武器覆盖报告 |
| J073 | SENSCOVREP | 传感器覆盖报告 |
| J079 | LASERWARN | 激光目标标记警告消息 |
| N010 | OPTASK ASUW | 反水面作战任务分配 |
| N024 | PURPLE | 海军任务总结报告 |
| N028 | OPTASK AIR | 机载有机构任务分配 |
| N068 | OPTASK EW | 电子战任务分配 |

## 第六章 人机控制界面

### 目录

1 引言 

1.1 范围 

2 功能需求 

2.1 一般需求 

2.2 无人机控制站（UCS）配置

2.3 任务规划 

2.4 无人机控制 

2.5 操作员控制与监控 

2.6 载荷控制与监控

2.7 警告、注意和通知 

2.8 通信管理 

### 图表目录 

图6-1. 无人机控制站功能架构

### 1 引言

#### 1.1 范围

1. 盟军工程出版物（AEP）-84 第一卷第6章规定了控制无人机系统站（CUCS）应支持的不同互操作性等级的人机界面（HCl）需求。如图3-1所示，HCl是CUCS的一个组成部分。第6章规定的需求将有助于无人机的互操作性。  
2. HCl需求应促进北约无人机系统（UAS）无缝集成到联合北约战场基础设施中，涵盖五个互操作性等级（LOI）。  
3. 第6章确立了无人机控制站（UCS）所显示信息的一般要求。需求详细描述了UCS应允许操作员执行的功能和交互。  
4. 第6章规定了对UCS施加的需求，但不涉及人体因素（HF）和人体工程学的任何要求。HCl遵循北约C3技术架构的NC3通用标准配置文件（NCSP）。  
5. 尽管部分HCl将在CUCS中以物理形式实现，第6章并未对设计提出任何要求。这意味着HCl的实现不受尺寸、形式或所用组件的限制。读者可参阅STANAG 4586实施文档，获取关于集成HCl功能需求的推荐方法，以下为部分示例。示例1：HCl可以是在庇护所内的双工作站，为高空长航时（HALE）无人机提供所需的高功能性；而用于操作微型无人机（亦称MAV）的便携式小型设备（手持电脑）也可视为HCl实现。示例2：对于海上UCS，可能存在一个提供LOI 5功能的HCl，而船上其他部分可能仅需较低等级的功能（LOI 1或2），因此可能需要不同的HCl。  
6. 本章中，所有需求（包括强制性的“应当”（shall）和建议性的“应该”（should）语句）均标明了适用的互操作性等级（LOI）。这有助于明确CUCS应符合哪些需求，以实现所需的互操作性等级。





<img src="https://cdn.mathpix.com/cropped/2025_07_17_c3ddec59b5857ee129e1g-542.jpg?height=909&width=1363&top_left_y=379&top_left_x=324" width=500/>  



图3-1. 无人机控制站功能架构  

### 2 功能需求

1. 本节提供了一组人机界面（HCI）的强制性需求和建议，以实现北约成员国无人机资产之间的用户互操作性。这些需求分为以下几个部分：

- 2.1 一般需求  
- 2.2 无人机控制站（UCS）配置  
- 2.3 任务规划  
- 2.4 无人机控制  
- 2.5 操作员控制与监控  
- 2.6 载荷控制与监控  
- 2.7 警告、注意和通知  
- 2.8 通信管理  

功能需求陈述之后，将列出适用的互操作性等级（LOI）。  
2. 在以下章节中，“合格操作员”指由操作系统用户（如美国空军）确定具备执行指定功能资格的系统操作员。由于这是操作需求，因此获取/开发组织不会且不能对其进行测试/验证，且该需求不必作为组件和系统测试的一部分进行验证。

#### 2.1 一般需求

操作员应能够输入并与无人机系统（UAS）及相关C4I系统同步时间 [HCI 0001]。此项适用于LOI 1、2、3、4和5。

#### 2.2 无人机控制站配置

1. HCl应为操作员提供生成、接收、显示、编辑和发送STANAG 4586中定义的、适用于所需互操作等级（LOI）的消息类型的能力 [HCl 0002]。此项适用于LOI 1、2、3、4和5。  
2. 操作员应能够全局更改测量单位（例如，从英制单位切换到公制单位，或从经纬度切换到通用横轴墨卡托投影（UTM）或军事网格参考系统（MGRS））[HCI 0003]。此项适用于LOI 1、2、3、4和5。

#### 2.3 任务规划

1. 任务规划包括任务订单/空中任务授权（MO/ATO）中所有阶段的规划方面（例如，无人机、载荷、数据链和通信的飞行前和飞行中阶段）。对于具备任务规划生成功能的CUCS，HCl应允许合格操作员创建、编辑和保存任务规划 [HCl 0004]。对于CUCS外部制定的任务规划，HCl应允许合格操作员导入、查看和保存任务规划 [HCl 0005]。此项适用于LOI 3、4和5。  
2. HCl应允许合格操作员在飞行前或飞行中任何时间更新（无需上传）当前任务规划 [HCl 0006]。此项适用于LOI 3、4和5。HCl应提供合格操作员从无人机下载任务规划的能力 [HCl 0021]。此项适用于LOI 4和5。  
3. HCl应提供合格操作员向无人机上传任务规划的能力 [HCl 0007]。此项适用于LOI 4和5。

#### 2.4 无人机控制

1. HCl应提供用于控制和监控无人机所有支持飞行模式的控制和显示界面 [HCl 0008]。此项适用于LOI 4和5。  
2. 操作员应能够将无人机控制权（接管）交给另一个具备资格的UCS操作员，并根据第4章（数据链接口，DLI）定义的机制监控接管状态 [HCI 0009]。此项适用于LOI 4和5。

#### 2.5 操作员控制与监控

HCl应提供图像显示功能，使操作员能够查看来自外部C4I来源的图像文件 [HCl 0010]。此项适用于LOI 1、2和3。

#### 2.6 载荷控制与监控

1. CUCS内定义的载荷控制HCI功能应尽可能针对载荷类型进行通用设计，而非针对具体载荷。载荷类型包括：

- 成像传感器（被动）（包括可见光和红外波段、高光谱和多光谱传感器）  
- 成像传感器（雷达/主动传感器）（包括机载雷达、合成孔径雷达（SAR）和运动目标指示器（MTI））  
- 激光类载荷（如激光测距仪、激光目标指示器）  
- 通信中继（CR）  
- 投放类载荷（包括武器、人道援助、无人地面传感器、浮标）

2. HCl应提供足够的控制和显示界面，控制仅经当前CUCS验证的载荷及其所有相关功能 [HCl 0011]。此项适用于LOI 3。  
3. HCl应提供足够的控制和显示界面，监控仅经当前CUCS验证的载荷及其所有相关功能 [HCl 0012]。此项适用于LOI 2和3。  
4. 合格操作员应能根据第4章（数据链接口，DLI）定义的机制，将无人机载荷的控制权传递给或接收自其他控制系统，并监控载荷控制状态 [HCl 0013]。此项适用于LOI 3。  
5. 对于产生动态图像的载荷，操作员应具备动态图像显示功能 [HCl 0014]。此项适用于LOI 2和3。  
6. 投放类载荷指任务目标中从无人机释放的物品，包括武器释放或遥感传感器部署等。载荷的释放机制应明确标识并清晰标注给操作员 [HCl 0015]。此项适用于LOI 3。  
7. 应设置安全联锁，防止操作员意外释放载荷 [HCl 0016]。此项适用于LOI 3。  
对于多次投放载荷，应向操作员指示剩余使用次数 [HCl 0017]。此项适用于LOI 2和3。

#### 2.7 警告、注意和通知

警告、注意和通知用于提醒操作员任何异常或关键状况。HCl应提供显示和管理警告、注意和通知的能力，如第3章所定义 [HCl 0018]。此项适用于LOI 2、3、4和5。

#### 2.8 通信管理

1. 通信管理控制UCS与无人机之间的通信链路，包括支持特定载荷（如通信中继载荷）所需的额外天线或数据链路。它为CUCS操作员提供配置数据链路及调整无人机数据终端（VDT）和控制数据终端（CDT）多项参数的能力。尽管大多数数据链参数由CUCS控制，一些特定数据链功能需通过数据链接口（DLI）控制，详见第4章：数据链接口。  
2. HCl应为操作员提供打开和控制CUCS与外部机构之间通信链路的能力，包括 [HCl 0019]：
- 通过战场通信接口（CCI）连接C4I系统  
- 通过语音和数据链路连接空中交通管制  
- 无人机数据终端（VDT）/控制数据终端（CDT）

此项适用于LOI 1、2、3、4和5。  
3. CUCS应提供天线/数据链路状态显示 [HCl 0020]。该显示不必与无人机控制/监控显示分开。此项适用于LOI 2、3、4和5。






# 1. 引言

与其起源的每月教程文章一样，本书旨在提供对广泛、重要且引人入胜的电子战（EW）领域的高层次概览。以下是关于本书的一些总体说明：

- 本书并非为该领域的专家而写，但希望其他领域的专家以及电子战子领域的专家也能从中受益。
- 本书旨在易读。技术资料（与普遍看法相反）无需枯燥也能有用。
- 在水平、风格和内容上与专栏保持一致。但内容经过重新组织，以便作为一本书使用。大多数专栏已被编排到逻辑顺序的章节中。当一个专栏涵盖两个或多个主题时，内容已被移至各自合适的章节。

本书中的技术资料力求准确而非精确。大多数情况下，公式精确到 1 dB——这对于大多数系统级设计工作来说已经足够。即便在需要更高精度时，几乎所有资深系统工程师也会先用 1 dB 精度的基本方程计算一遍，然后再交给计算机专家进一步逼近所需精度。高度精确的数学问题在于，人容易陷入细节并犯下数量级的错误。这些错误有时源于错误的假设（更常见的是错误表述的问题）。数量级的错误会让你（以及可能的上司）陷入大麻烦，值得避免。

当你用本书中的简单 dB 形式方程把问题算到 1 dB 时，你会迅速得到一组近似答案。然后你可以退一步思考，这些答案是否合理。将结果与其他类似问题的结果比较……或者仅凭常识判断。在这一点上， revisiting 假设或澄清问题表述会很容易。随后，当你投入大量资源（计算设施、人力、资金以及——或许还有——胃酸）去完成详细计算时，结果第一次（或接近第一次）算对的概率就大大增加。

### 本书的范围

本书涵盖了系统层面的电子战大多数射频（$RF$）方面。这意味着它更多讲述硬件和软件“做什么”，而不是具体“如何做”。它避免复杂数学，假设读者具备代数和一些三角知识，并刻意避免使用微积分。

### 更详细的信息

有许多推荐的更详细的电子战资料来源，包括教材、专业期刊和技术杂志。下面的清单远非完整，但它是一个合理的起点，也是撰写 EW 101 文章所用的参考资料集合。这些参考书有的复杂，有的对初学者（以及那些离开学校已久的人）相当友好，但它们都包含了与电子战相关的坚实且有用的信息。

通用电子战教材：

- 《Electronic Warfare》，D. Curtis Schleher（Artech House）
- 《Introduction to Electronic Defense Systems》，Filippo Neri（Artech House）
- 《Electronic Warfare》，David Hoisington（Lynx）
- 《Applied ECM》（三卷本），Leroy Van Brunt（EW Engineering, Inc.）

更具体电子战主题的书籍：

- 《Radar Vulnerability to Jamming》，Robert Lothes、Michael Szymanski 和 Richard Wiley（Artech House）
- 《Electronic Intelligence: The Interception of Radar Signals》，Richard Wiley（Artech House）
- 《Radar Cross Section》，Eugene Knott、John Shaeffer 和 Michael Tuley（Artech House）
- 《Introduction to Radar Systems》，Merrill Skolnik（McGraw-Hill）
- 《Introduction to Airborne Radar》，George Stimson（SciTech）

关于新调制体制的书籍：

- 《Spread Spectrum Communications Handbook》，Marvin Simon 等（McGraw-Hill）
- 《Detectability of Spread-Spectrum Signals》，Robin 和 George Dillard（Artech House）
- 《Spread Spectrum Systems with Commercial Applications》，Robert Dixon（Wiley）
- 《Principles of Secure Communication Systems》，Donald Torrieri（Artech House）

电子战手册：

- 《International Countermeasures Handbook》（Horizon House）
- 《EW Handbook》（Journal of Electronic Defense）

与电子战相关的杂志：

- *Journal of Electronic Defense*
- *IEEE Transactions on Aerospace and Electronic Systems*（来自 IEEE AES 工作组）
- *Signal Magazine*
- *Microwave Journal*
- *Microwaves*

### 关于电子战的一般性说明

电子战被定义为一门艺术与科学，其目的在于：为己方保留电磁频谱的使用权，同时拒止敌方使用。电磁频谱当然从直流一直到光（甚至更远）。因此，电子战覆盖整个射频频谱、红外频谱、光学频谱以及紫外频谱。

如图 1.1 所示，电子战传统上分为：

- 电磁支援措施（ESM）——电子战的接收部分；
- 电磁对抗措施（ECM）——用于干扰雷达、军事通信和红外制导武器运行的干扰、箔条和热焰弹；
- 电磁反对抗措施（ECCM）——在雷达或通信系统设计或运行中用于对抗 ECM 效果的措施。

反辐射武器（ARW）和定向能武器（DEW）传统上不被视为电子战的一部分，尽管人们早已明白它们与电子战关系密切。它们被区分为武器。

近几年，许多（但不是所有）国家对电子战领域的子分类进行了重新定义，如图 1.2 所示。当前（NATO 内）认可的定义为：

- 电子战支援（ES）——即旧的 ESM；
- 电子攻击（EA）——包含旧的 ECM（干扰、箔条和热焰弹），也包括反辐射武器和定向能武器；
- 电子防护（EP）——即旧的 ECCM。

ESM（或 ES）与信号情报（SIGINT）有所区分，后者包括通信情报（COMINT）和电子情报（ELINT）——尽管所有这些领域都涉及接收敌方信号。区别（随着信号复杂度的提升愈发模糊）在于接收信号的目的不同。

![](https://cdn.mathpix.com/cropped/2025_09_07_d9928404347d8040d6e0g-04.jpg?height=367&width=1058&top_left_y=1801&top_left_x=283)  
图 1.1 电子战传统上分为 ESM、ECM 和 ECCM。反辐射武器不属于 EW。

![](https://cdn.mathpix.com/cropped/2025_09_07_d9928404347d8040d6e0g-05.jpg?height=475&width=784&top_left_y=278&top_left_x=353)  
图 1.2 当前 NATO 的电子战定义将 EW 分为 ES、EA 和 EP。EA 现在包括反辐射和定向能武器。

- COMINT 接收敌方通信信号，以从这些信号所承载的信息中提取情报。
- ELINT 接收敌方非通信信号，以确定敌方电磁系统的细节，从而制定对抗措施。因此，ELINT 系统通常在较长时间内收集大量数据，以支持详细分析。
- ESM/ES 则不同，它收集敌方信号（无论是通信还是非通信），目的在于立即对这些信号或与其相关的武器采取行动。接收的信号可能会被干扰，或者其信息可能被传递给杀伤性响应系统。接收信号也可用于态势感知，即识别敌方部队、武器或电子能力的类型和位置。ESM/ES 通常收集大量信号数据，以支持较少但高吞吐率的处理。ESM/ES 一般仅确定存在哪些已知辐射源类型以及它们的位置。



### 如何理解电子战

作者认为，理解电子战原理（尤其是射频部分）的关键在于真正理解无线电传播理论。如果你理解了无线电信号如何传播，那么理解它们如何被截获、干扰或防护就是一个合乎逻辑的过程。没有这种理解，作者认为几乎不可能真正掌握电子战。

一旦你掌握了几个简单公式，比如单向链路方程和雷达距离方程的 dB 形式，你大概率就能在脑子里解决电子战问题（精确到 $1 \,\mathrm{dB}$）。如果达到这个程度，你在面对电子战问题时就能迅速“直击要害”。你可以快速、轻松地检验某人是否试图违反物理定律。（好吧，允许用一张随手从记事本上撕下的草纸——当你帮同事摆脱困境时，他们仍会把你看作电子战专家。）

### 进入具体内容

- 第 2 章涵盖一些数学背景：dB、链路方程和球面三角（以防你忘了）。
- 第 3 章讲解天线：类型、定义和参数权衡。
- 第 4 章讲解接收机：类型、定义、应用和灵敏度计算。
- 第 5 章讲解电子战处理：信号识别、控制机制和操作界面。
- 第 6 章讲解搜索技术、局限性和权衡。
- 第 7 章讲解低截获概率（LPI）信号，主要聚焦于 LPI 通信。
- 第 8 章讲解电子战系统中常用的各种辐射源定位技术。
- 第 9 章讲解干扰：概念、定义、局限性和公式。
- 第 10 章讲解雷达诱饵：有源和无源，包括相关计算。
- 第 11 章讲解用于概念评估、训练和系统测试的仿真。

对于那些有自己喜欢的 EW 101 专栏的人，书末附录 A 提供了专栏与章节的交叉索引，方便查阅。
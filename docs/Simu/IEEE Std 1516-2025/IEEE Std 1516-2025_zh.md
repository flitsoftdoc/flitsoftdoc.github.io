# IEEE Std 1516-2025

**IEEE建模与仿真高层体系结构（ HLA）框架与规则标准**

**IEEE计算机学会**

由仿真互操作性标准组织/标准活动委员会(SISO/SAC)制定

**IEEE Std 1516™-2025** （IEEE Std 1516-2010的修订版）

**IEEE建模与仿真（Modeling and Simulation, M&S）高层体系结构（High Level Architecture, HLA）框架与规则标准**

2025年2月14日批准

IEEE SA标准委员会

![](https://cdn.mathpix.com/snip/images/abo3Ce7-ou6_RcGZenMpgn6Jxi1M-qhv9BqKu7-VQAI.original.fullsize.png){width="200"}

## 摘要

高层体系结构（High Level Architecture, HLA）旨在为分布式建模与仿真（Modeling and Simulation, M&S）提供一种通用架构。HLA定义了一种集成方法，为相互作用的仿真系统互联提供通用框架。本标准作为高层体系结构（HLA）框架与规则的描述文件，是一系列相关HLA标准的纲领性文档。它定义了HLA及其组件，以及明确HLA联邦成员（federate）和联邦（federation）职责以确保一致实施的规则。仿真现实世界的抽象，任何单一仿真都无法满足建模与仿真社区的所有功能需求。预计技术进步将允许在HLA框架内实现新的和不同的建模与仿真（M&S）实现。本架构中包含的标准相互关联，在进行修改时需要作为产品集来考虑。每一项标准都具有独立的价值。

**关键词：** 体系结构、类属性、联邦成员（federate）、联邦（federation）、联邦执行（federation execution）、联邦对象模型（Federation Object Model, FOM）、框架、高层体系结构（High Level Architecture, HLA）、IEEE 1516™、实例属性、交互类（interaction class）、已加入联邦成员（joined federate）、对象类（object class）、对象模型模板（Object Model Template, OMT）、规则、运行时基础设施（runtime infrastructure, RTI）、仿真对象模型（Simulation Object Model, SOM）



## 翻译

IEEE共识投票流程仅对英文文件进行审查。如果IEEE标准被翻译，只有IEEE出版的英文版本才是经批准的IEEE标准。

## 人工智能系统的使用

在任何情况下，未经IEEE SA事先明确书面同意，不得将任何IEEE标准文件中的材料用于创建、训练、增强、开发、维护或贡献于任何人工智能系统。"人工智能"指任何使用人工智能、机器学习或类似技术来分析、训练、处理或生成内容的软件、应用程序或其他系统。可使用联系我们表单提交同意请求。

## 官方声明

未经IEEE SA标准委员会操作手册处理的声明，无论是书面还是口头形式，都不是，也不得被视为或推断为IEEE或其任何委员会的官方立场，也不得被视为或依赖为IEEE或IEEE SA的正式立场。在讲座、研讨会、研讨会或教育课程中，提供IEEE标准信息的人员应明确说明，演讲者的观点应被视为该个人的个人观点，而不是IEEE、IEEE SA、标准委员会或工作组的正式立场。志愿者的声明可能不代表其雇主或附属机构的正式立场。IEEE SA以外的实体发布的关于IEEE标准的新闻稿应被视为发布实体的观点，而不是IEEE或IEEE SA的正式立场。

## 对标准的意见

欢迎任何利益相关方（无论是否具有IEEE或IEEE SA会员资格）对IEEE标准文件的修订提出意见。但是，IEEE不提供对IEEE标准文件的解释、咨询信息或建议。

对文件变更的建议应以建议变更文本的形式提出，并附有适当的支持意见。由于IEEE标准代表了相关利益的共识，对意见和问题的任何回应也需要获得利益的平衡。为此，IEEE及其专业委员会和IEEE SA理事会下属小组委员会的成员无法对意见或问题提供即时回复，除非该事项之前已被处理。出于同样原因，IEEE不响应解释请求。欢迎任何希望参与评估意见或参与IEEE标准修订的人员加入相关的IEEE SA工作组。您可以使用IEEE SA myProject系统中的"兴趣"选项卡来表明对工作组的兴趣。¹ 访问该应用程序需要IEEE账户。

对标准的意见应使用联系我们表单提交。²

> ¹ 可访问：https://development.standards.ieee.org/myproject-web/public/view.html\#landing。

> ² 可访问：https://standards.ieee.org/about/contact/。

## 法律和法规

IEEE标准文件的用户应咨询所有适用的法律法规。遵守任何IEEE标准文件的规定并不构成对任何适用监管要求的遵守。标准的实施者有责任遵守或参考适用的监管要求。IEEE出版其标准并非旨在促使采取不符合适用法律的行动，这些文件也不应被解释为促使采取此类行动。

## 数据隐私

IEEE标准文件的用户应在评估和使用标准以符合适用法律法规的背景下，考虑数据隐私和数据所有权方面的问题。

## 版权

IEEE草案标准和已批准标准受美国和国际版权法保护。它们由IEEE提供，可广泛用于各种公共和私人用途。这包括在法律法规中的引用使用，以及在私人自律、标准化和促进工程实践与方法中的使用。通过让公共当局和私人用户使用和采用这些文件，IEEE及其许可方不会放弃对文件版权的任何权利。

## 影印

在支付适当的许可费用后，IEEE将授予用户有限的、非独占的许可，仅供公司或组织内部使用或个人非商业使用而影印任何个人标准的部分内容。如需安排支付许可费用，请联系Copyright Clearance Center，客户服务，222 Rosewood Drive，Danvers，MA 01923 USA；+1 978750 8400；https://www.copyright.com/。也可通过版权中心获得任何个人标准用于教育课堂使用的影印许可。

## IEEE标准文件的更新

IEEE标准文件的用户应注意，这些文件可能会通过发行新版或通过发布修正案、技术勘误或勘误表随时被替代。在任何时间点的官方IEEE文件由当前版本的文件与当时生效的任何修正案、技术勘误或勘误表组成。

每项IEEE标准至少每10年进行一次审查。当文件超过10年且未经过修订过程时，可以合理地得出结论，其内容虽然仍有一定价值，但并不能完全反映当前的技术状况。用户应注意的是，需确认自己拥有最新版本的IEEE标准。

为确定给定文件是否是当前版本以及是否已通过发布修正案、技术勘误或勘误表进行了修改，请访问IEEE Xplore或联系IEEE。³ 欲了解更多关于IEEE SA或IEEE标准开发流程的信息，请访问IEEE SA网站。

> ³ 可访问：https://ieeexplore.ieee.org/browse/standards/collection/ieee。

## 勘误表

所有IEEE标准的勘误表（如有）可在IEEE SA网站上访问。⁴ 搜索标准号和批准年份以访问已发布标准的网页。勘误表链接位于"附加资源详情"部分。勘误表也可在IEEE Xplore上获取。建议用户定期检查勘误表。

> ⁴ 可访问：https://standards.ieee.org/standard/index.html。

## 专利

IEEE标准的制定符合IEEE SA专利政策。⁵ 请注意，实现本标准可能需要使用受专利权保护的主题事项。IEEE通过发布本标准，不对与任何专利权存在或有效性相关的任何问题采取立场。如果专利权人或专利申请人已通过"接受保证书"提交了保证声明，则该声明列在IEEE SA网站上，网址为https://standards.ieee.org/about/sasb/patcom/patents.html。保证书可表明提交人是愿意还是不愿意在合理且无任何不公平歧视的条款和条件下，以合理费率或无补偿方式向希望获得此类许可的申请人授予专利许可。

> ⁵ 可访问：https://standards.ieee.org/about/sasb/patcom/materials.html。

可能存在尚未收到保证书的基本专利声明。IEEE不负责识别可能需要许可的基本专利声明，不负责对专利声明的法律有效性或范围进行调查，也不负责确定与提交保证书相关的任何许可条款或条件（如果有）或任何许可协议是否合理或非歧视。本标准的用户明确被告知，确定任何专利权的有效性和任何此类权利侵权的风险完全由其自己负责。更多信息可从IEEE标准协会获取。

## 重要通知

各行业的技术、技术应用和推荐程序随着时间不断发展。IEEE标准开发流程允许参与者审查行业、技术和实践的发展，以确定是否需要对IEEE标准进行任何更新。在此发展过程中，IEEE标准中的技术和建议可能以标准制定时未预见的方式实施。IEEE标准开发活动考虑向标准开发小组提交的研究和信息，以制定任何安全建议。其他关于安全实践、技术或技术实施变化或周边系统影响的信息也可能与实施标准期间的安全考虑相关。IEEE标准文件的实施者和用户有责任确定并遵守所有适当的安全、安保、环境、健康、数据隐私和干扰保护实践及所有适用法律法规。

## 参与者

本标准完成时，HLA 4工作组具有以下成员：

Randy Saunders，主席<br>Björn Möller，副主席<br>Katherine L. Morse，秘书

| Fredrik Antelius | Paul Houldsworth | David Ronnfeldt |
| :--- | :--- | :--- |
| Ryan Bernhold | Kyle Isakson | Jose Ruiz |
| Curtis Blais | Mikael Karlsson | Heath Rush |
| Ryan Brunton | Kyle Isakson | Kevin Seavey |
| Robert Butterfield | Mikael Karlsson | Graham Shanks |
| Andrew Ceranowicz | Patrice Le Leydour | Pierre Siron |
| Anthony Cramp | Jean Philippe Lebel | Keith Snively |
| David Drake | Björn Löfstrand | Steffen Strassburger |
| Aaron Dubois | Robert Lutz | Tom van den Berg |
| Matt Figueroa | James McCall | Leon van der Heijden |
| Rick Gaylor | Matthew McGlawn | Alexander Vankov |
| Cristian Gheorghiu | Spencer Ochsner | René Verhage |
| Peggy Gravitz | Tim Pokorny | Douglas Wood |
| Paul Gustavson |  | Simone Youngblood |

以下个人标准协会投票小组的成员对本标准进行了投票。投票者可能投票赞成、反对或弃权。

| Fredrik Antelius | James Kogler | Manfred Roza |
| :--- | :--- | :--- |
| Martin Asprusten | Reed Little | Andrey Sadovykh |
| Curtis Blais | Zeeger Lubsen | Randy Saunders |
| Shelly Blake-Plock | Robert Lutz | Stephen Schwarm |
| Anthony Cramp | James Mccall | Graham Shanks |
| Dannie Cutts | Björn Möller | Keith Snively |
| Uwe Dobrindt | Katherine L. Morse | Eugene Stoudenmire |
| David Drake | Thomas Mullins | Steffen Strassburger |
| David Fuschi | Rajesh Murthy | Tom van den Berg |
| Werner Hoelzl | Nayeem Ninad | Douglas Wood |
| Mikael Karlsson | Spencer Ochsner | Simone Youngblood |
| Piotr Karocki | Bansi Patel | Yu Yuan |
|  | Venkatesha Prasad |  |

IEEE SA标准委员会于2025年2月14日批准本标准时，委员会成员如下：

David J. Law，主席<br>Jon Walter Rosdahl，副主席 <br>Gary Hoffman，上届主席 <br>Alpesh Shah，秘书

| Sara R. Biyabani | Yousef Kimiagar | Robby Robson |
| :--- | :--- | :--- |
| Ted Burse | Joseph L. Koepfinger* | Jon W. Rosdahl |
| Stephen Dukes | Howard Li | Mark Siira |
| Doug Edwards | Xiaohui Liu | Lei Wang |
|  J. Travis Griffith | John Haiying Lu | F. Keith Waters |
| Guido R. Hiertz | Kevin W. Lu | Sha Wei |
| Ronald W. Hotchkiss | Hiroshi Mano | Philip B. Winston |
| Hao Hu | Paul Nikolich | Don Wright |

*荣誉成员

## 引言

/// note |

本引言不构成IEEE Std 1516-2025的一部分，IEEE Std 1516-2025是《IEEE建模与仿真（Modeling and Simulation, M&S）高层体系结构（High Level Architecture, HLA）框架与规则标准》。

///

本文件旨在记录高层体系结构（High Level Architecture, HLA）的国际标准。它是HLA三个相关标准之一。

本标准描述框架与规则，旨在提供HLA背后的一些基本理念，包括如何设计、使用和坚持HLA愿景的指导。

新版IEEE 1516 HLA由仿真互操作性标准组织（Simulation Interoperability Standards Organization, SISO）的HLA产品开发小组于2016年至2024年间制定。它纳入了基于该标准早期版本实际应用的许多更新。新版本的目的是更好地支持分布式仿真的开发、部署和网络中心性。

## 模式、API和文档

模式和API：IEEE特此授予一般性、免版税的许可，可出于所有目的复制、分发、展示和制作本材料的衍生作品，前提是材料的任何使用均包含以下署名："经IEEE Std 1516™-2025许可转载"。如读者需要更多信息，请联系IEEE标准协会标准知识产权经理（stds-ipr@ieee.org）。

文档：IEEE特此授予一般性、免版税的许可，可出于非商业目的复制、分发、展示和制作本材料的衍生作品，前提是材料的任何使用均包含以下署名："经IEEE Std 1516™-2025许可转载"。未经IEEE明确书面许可，不得将材料用于商业目的。如读者需要更多信息，请联系IEEE标准协会标准知识产权经理（stds-ipr@ieee.org）。

## 目录

1. 概述 ..... 11
    1.1 范围 ..... 11
    1.2 目的 ..... 11
    1.3 用词说明 ..... 11
    1.4 背景 ..... 12
    1.5 HLA与分布式仿真工程流程之间的关系 ..... 14

2. 规范性引用文件 ..... 14

3. 定义、缩略语和缩写 ..... 15
    3.1 定义 ..... 15
    3.2 缩略语和缩写 ..... 30

4. HLA规则摘要 ..... 31

5. 联邦规则 ..... 31
    5.1 规则1 ..... 31
    5.2 规则2 ..... 32
    5.3 规则3 ..... 32
    5.4 规则4 ..... 32
    5.5 规则5 ..... 33

6. 联邦成员规则 ..... 33
    6.1 规则6 ..... 33
    6.2 规则7 ..... 33
    6.3 规则8 ..... 33
    6.4 规则9 ..... 34
    6.5 规则10 ..... 34

附录A（资料性）原理说明 ..... 35
      A.1 联邦规则 ..... 35
      A.2 联邦成员规则 ..... 36

附录B（资料性）参考文献 ..... 38

# IEEE建模与仿真(M&S)高层体系结构(HLA)框架与规则标准

# 1. 概述

## 1.1 范围

本文件提供高层体系结构（High Level Architecture, HLA）的概述，定义了一系列相关的HLA文件，并根据联邦成员（federate，仿真、支持工具或真实系统接口）和联邦（federation，协同工作的联邦成员集合）所维护的职责，定义了HLA的原则。

## 1.2 目的

存在许多不同类型的仿真。每类仿真具有不断变化的应用特性，需要得到灵活支持以实现跨类别的互操作性和重用，并减少维护多种互操作方法的需求。HLA是一种通用的集成架构，旨在提供灵活的方法来满足这些互操作性和重用需求。本文件描述了定义HLA的一般原则，并阐述了适用于HLA联邦（federation）和联邦成员（federate）的一系列规则。然后对每条规则进行了描述，并提供了其纳入的理由。

## 1.3 用词说明

"shall"一词表示为符合本标准必须严格遵循的强制要求，不得偏离（shall等于is required to）。⁶⁷

"should"一词表示在几种可能性中推荐一种特别适合的方案，不提及或排除其他方案；或者表示优选但非必须的某行动方案（should等于is recommended that）。

"may"一词用于表示在本标准限制范围内允许的行动方案（may等于is permitted to）。

"can"一词用于表示可能性和能力的陈述，无论是物质的、物理的还是因果的（can等于is able to）。

> ⁶ "must"一词已被弃用，在陈述强制要求时不能使用，must仅用于描述不可避免的情况。

> ⁷ "will"一词已被弃用，在陈述强制要求时不能使用，will仅用于事实陈述。

## 1.4 背景

HLA是一种技术架构，旨在促进仿真系统和资产（如联邦管理器、数据收集器、被动查看器、真实系统和其他工具）的重用和互操作。它是在认识到建模与仿真（Modeling and Simulation, M&S）在支持各种应用方面的价值以及将M&S资产作为具有成本效益的工具管理的需求而开发的。HLA中预期的架构定义——"主要功能元素、接口和设计规则，尽可能适用于所有仿真应用，并提供可定义特定系统架构的通用框架"——是被普遍接受的，并且与IEEE提供的计算机仿真架构定义一致。

### 1.4.1 HLA标准的组成部分

HLA提供了一个通用框架，开发人员可以在其中构建和描述其仿真系统和/或资产，并与其它仿真系统和资产进行互操作。HLA由三个主要组件组成。第一个是HLA框架与规则（即本标准），它提供了一组十条规定，五条适用于联邦成员（federate，见3.1），五条适用于联邦（federation，见3.1），这些规则共同确保联邦中联邦成员的适当交互，并定义联邦成员和联邦的职责。第二个组件是一份服务规范，允许仿真相互连接、交换数据并在分布式运行时执行期间协调活动。该组件是HLA联邦成员接口规范（见IEEE Std 1516.1™-2025），它描述了称为运行时基础设施（runtime infrastructure, RTI）的底层软件基础设施的能力和操作原则，这是运行时操作所必需的。第三个组件是HLA对象模型模板（Object Model Template, OMT）规范（见IEEE Std 1516.2™-2025）。⁸ 它提供了描述对象模型（object model，见3.1）的规范，这些对象模型定义了仿真应用产生或需要的信息，并协调仿真之间的定义以产生共同的互操作数据模型。

> ⁸ 有关引用的信息见第2条。

### 1.4.2 术语

为了概述HLA框架，需要一些术语。联邦成员应用（federate application）是支持HLA接口连接到运行时基础设施（runtime infrastructure, RTI）并能够加入联邦执行（federation execution）的应用。请注意，除仿真外，联邦成员应用还可以表示真实系统的接口或支持工具（如事件记录器或性能监视器）的接口。联邦成员应用可与其他软件应用和RTI耦合。已加入联邦成员（joined federate）是联邦执行的成员，由联邦成员应用调用"加入联邦执行"服务来实现。联邦（federation）是联邦成员应用的命名集合和通用联邦对象模型（Federation Object Model, FOM），它们作为一个整体来实现某些特定目标。联邦执行（federation execution）是随时间推移的实际操作，由通过RTI互连的一组已加入联邦成员组成。

> 注——这些术语的正式定义可在所有三个HLA规范的定义条款中找到。⁹

> ⁹ 文本、表格和图中的注仅供信息参考，不包含实施标准所需的要求。

### 1.4.3 对象模型

HLA框架中有三种类型的对象模型（object model）。第一种是仿真对象模型（Simulation Object Model, SOM）。SOM是关于个别联邦成员应用可以向HLA联邦提供的信息类型以及个别已加入联邦成员（joined federate）可以从HLA联邦执行中的其他已加入联邦成员接收的信息的规范。SOM可以被视为联邦成员应用对其能力和数据接口的本地表达。SOM便于仿真重用，并为将仿真与其他参与仿真组合以实现共同目标提供了起点。第二种是联邦对象模型（Federation Object Model, FOM）。FOM是定义运行时交换的信息以实现给定联邦目标的规范。这些信息包括对象类（object class）、对象类属性、交互类（interaction class）、交互参数、管理对象模型（Management Object Model, MOM）内容和其他相关信息。第三种是MOM，它是一组预定义构造，用于支持和控制联邦执行。FOM可以从头开始开发，方法是使用将组成联邦的联邦成员应用的SOM的相关元素，或使用现有FOM或参考FOM以及这些方法的任何组合。如果使用现有SOM或FOM，重要的是要理解这些SOM/FOM中可能有些部分与联邦中的其他联邦成员应用无关，因此不会被纳入FOM。例如，舰船仿真可能对锅炉压力进行建模，但如果联邦只需要知道舰船位置，则锅炉压力可选择从FOM中删除。此外，可能需要协调仿真之间的不同单位和不同表示。对象模型模板（Object Model Template, OMT）为指定SOM和FOM提供了标准结构和一套表示约定。

### 1.4.4 服务组

联邦成员接口规范定义了联邦成员（federate）与RTI之间的功能接口。RTI以类似于分布式操作系统如何向应用提供服务的方式向已加入联邦成员（joined federate）提供服务。服务分为七个基本组，如下所示：

a) 联邦管理（federation management）：这些服务允许在整个联邦执行（federation execution）生命周期内协调联邦范围的活动。这些服务包括联邦执行的创建和销毁、联邦成员应用的加入和退出、联邦同步点以及保存和恢复操作。

b) 声明管理（declaration management）：这些服务允许已加入联邦成员指定他们将向联邦执行提供或从中接收的数据类型。此过程通过一组发布（publish）和订阅（subscribe）服务以及一些相关服务完成。

c) 对象管理（object management）：这些服务支持联邦执行中已加入联邦成员使用的对象和交互（interaction）的生命周期活动。这些服务提供对象实例（object instance）的注册和发现、更新和反射与这些对象实例关联的实例属性、删除或移除对象实例，以及发送和接收交互和其他相关服务。（注：这些术语的正式定义可在所有三个HLA规范的定义条款中找到。）

d) 所有权管理（ownership management）：这些服务用于建立特定已加入联邦成员为对象实例属性提供值的特权，以及促进在联邦执行期间将此特权（所有权）动态转移给其他已加入联邦成员。

e) 时间管理（time management）：这些服务允许已加入联邦成员使用时间逻辑概念运行，并共同维护分布式虚拟时钟。这些服务支持离散事件仿真并确保事件之间的因果顺序。

f) 数据分发管理（data distribution management, DDM）：这些服务允许已加入联邦成员进一步指定他们在联邦执行期间发送或请求接收的特定数据的分发条件（超出声明管理服务提供的条件）。RTI使用此信息以更定制的方式将数据从生产者路由到消费者。

g) 支持服务（support services）：该组包括已加入联邦成员用于执行名称到句柄和句柄到名称转换、设置咨询开关、区域（region）操作以及RTI启动和关闭等操作的各种服务。

联邦成员接口规范包括接口中所有服务语法和语义的编程语言无关定义。它还提供Java和C语言绑定。

### 1.4.5 规则

HLA规则完成了框架。它们要求使用对象模型模板（Object Model Template, OMT）和联邦成员接口规范以及良好的开发原则和实践，以确保联邦执行的正常运行。

### 1.4.6 实现独立性

HLA允许以标准化方式为各种目的开发和执行分布式仿真系统。HLA不规定特定实现，也不强制要求使用任何特定编程语言或软件。随着技术进步的出现，在HLA框架内将可能实现新的和不同的实现。

## 1.5 HLA与分布式仿真工程流程之间的关系

分布式仿真环境（如HLA联邦）的设计、开发、集成和测试本质上是一门系统工程学科。已经制定了两项推荐实践，为专门针对分布式仿真环境的系统工程提供指导，即分布式工程与执行流程（Distributed Engineering and Execution Process, DSEEP）和DSEEP多体系结构覆盖层（DSEEP Multi-Architecture Overlay, DMAO）。DSEEP为单体系结构分布式仿真环境的工程提供指导。DMAO为使用多个仿真架构的分布式仿真环境所特有的问题和解决方案提供扩展指导。

# 2. 规范性引用文件

以下引用文件对于本文件的应用是必不可少的（即，必须理解和使用，因此每个引用文件均在文本中被引用，并解释了其与本文件的关系）。对于有日期的引用，仅适用所引用的版本。对于无日期的引用，适用引用文件的最新版本（包括任何修正案或勘误表）。

IEEE Std 1516.1™-2025，IEEE建模与仿真（Modeling and Simulation, M&S）高层体系结构（High Level Architecture, HLA）联邦成员接口规范标准。¹⁰¹¹

IEEE Std 1516.2™-2025，IEEE建模与仿真（Modeling and Simulation, M&S）高层体系结构（High Level Architecture, HLA）对象模型模板（Object Model Template, OMT）规范标准。

> ¹⁰ IEEE出版物可从电气与电子工程师协会获取（http://standards.ieee.org）。

> ¹¹ 第2条中提及的IEEE标准或产品是由电气与电子工程师协会拥有的商标。

# 3. 定义、缩略语和缩写

## 3.1 定义

就本文件而言，适用以下术语和定义。未在本条款中定义的术语，应查阅IEEE在线标准词典。¹²

> ¹² IEEE在线标准词典可访问：http://dictionary.ieee.org。访问词典需要IEEE账户，可在该词典登录页面上免费创建。

**精度（accuracy）：** 仿真或联邦（federation）中属性或参数值与现实或其他选定标准或参考物之间最大偏差的度量。

**主动订阅（active subscription）：** 向运行时基础设施（runtime infrastructure, RTI）发出的对已加入联邦成员（joined federate）当前感兴趣接收的数据类型（类属性（class attribute）以及交互（interaction））的请求。RTI使用这些数据以及从其他已加入联邦成员收到的发布数据来支持以下服务：

a) 启动/停止注册

b) 开启/关闭更新

c) 开启/关闭交互

RTI还使用订阅（subscribe，和发布（publish））数据来确定如何将数据路由到需要该数据的已加入联邦成员。

**属性（attribute）：** 对象类（object class）或对象实例（object instance）的命名特征。另见：类属性（class attribute）；实例属性（instance attribute）。

**属性所有权（attribute ownership）：** 实例属性（instance attribute）的属性，赋予已加入联邦成员为其联邦执行（federation execution）提供该实例属性值的能力。另见：实例属性。

**授权器（authorizer）：** 用于在给定凭据的情况下，确定是否允许联邦成员（federate）调用特定服务集（连接、创建联邦执行、销毁联邦执行和加入联邦执行）的接口。

**可用属性（available attributes）：** 对象类（object class）的已声明属性集与该对象类的继承属性集的并集。

**可用维度（available dimensions）：**

a) 涉及对象类：与联邦对象模型(FOM)中继承维度集并联的与该对象类关联的维度。

b) 涉及属性：实例属性的可用维度是已知类的可用维度。在注册、订阅、取消订阅、带区域请求更新或获取可用维度时，可用维度是服务调用中指定的对象类的可用维度。

c) 涉及交互类：与FOM中继承维度集并联的与该交互类关联的维度。已发送交互的可用维度是"带区域发送交互"服务调用中指定的交互类的可用维度。

> 注——见IEEE Std 1516.1™-2025中的9.1。

见维度。

**可用定向交互（available directed interactions）：** 对象类（object class）的定向交互类（directed interaction class）集与该对象类的继承定向交互的并集。

**可用参数（available parameters）：** 交互类（interaction class）的已声明参数集与该交互类的继承参数集的并集。

**基础对象模型（Base Object Model, BOM）：** 概念模型、仿真对象模型（Simulation Object Model, SOM）或联邦对象模型（Federation Object Model, FOM）的组成部分，可用作开发和/或扩展仿真或联邦（federation）的构建块。

**尽力而为（best effort）：** 一种传输类型（transportation type），不提供关于交付的任何保证（消息可能无序、重复或丢失）。

**候选发现类（candidate discovery class）：** 对象实例（object instance）的已注册类（registered class，如果已订阅）。如果对象实例的已注册类未订阅，则为已加入联邦成员（joined federate）所订阅的对象实例已注册类的最近超类（nearest superclass）。候选发现类仅涉及对象实例。

**候选接收类（candidate received class）：** 交互（interaction）的已发送类（sent class，如果已订阅）。如果交互的已发送类未订阅，则为已加入联邦成员所订阅的交互已发送类的最近超类。候选接收类仅涉及交互和定向交互（directed interaction）。

**类（class）：** 具有相似属性、共同行为、共同关系和共同语义的一组项目的描述。

**类属性（class attribute）：** 由对象类（object class）指示符和属性（attribute）指示符组成的一对表示的对象类的命名特征。

**类定向交互（class directed interaction）：** 由对象类（object class）指示符和交互类（interaction class）指示符组成的一对表示的对象类的命名特征。该特征是能够将交互定向到对象类或其子类的实例的能力。

**类层次结构（class hierarchy）：** 给定域中类之间的类-子类或"is-a"关系的规范。

**关联（coadunate）：** 将对象实例（object instance）句柄（handle）和对象实例名称附加到对象实例。对象实例名称可由联邦成员（federate）具体提供或由运行时基础设施（runtime infrastructure, RTI）隐式提供。

**集合（collection）：** 一组元素，其中一个元素可能出现多次（此定义对应于数学中的多重集概念）。

**对集合（collection of pairs）：** 一组对（pair），其中多个对可能具有相同的第一组分，并且给定对可能出现多次。

**兼容的对象模型（compliant object model）：** 完全符合对象模型模板（Object Model Template, OMT）中规定的所有规则和约束的高层体系结构（High Level Architecture, HLA）联邦对象模型（FOM）或仿真对象模型（SOM）。

**受限对集合（constrained set of pairs）：** 一组对（pair），其中没有两个对具有相同的第一组分（此定义对应于数学中的函数概念）。例如，一组实例属性（instance attribute）和值对；每个实例属性最多可以有一个与其关联的值。

**实例属性的相应类属性（corresponding class attribute for an instance attribute）：** 从给定已加入联邦成员（joined federate）的视角来看，包含该实例属性的对象实例（object instance）的已加入联邦成员的已知类（known class）的类属性（class attribute），该类属性具有与实例属性相同的属性（attribute）指示符。

**类属性的相应实例属性（corresponding instance attribute for a class attribute）：** 从给定已加入联邦成员的视角来看，为以下各项：

a) 具有与类属性（class attribute）的对象类（object class）相等的已加入联邦成员已知类的对象实例的无主实例属性，且具有与类属性相同的属性指示符，或

b) 由已加入联邦成员拥有的实例属性（instance attribute），属于在拥有联邦成员处具有与类属性的对象类相等的已知类的对象实例，且具有与类属性相同的属性指示符。

**当前联邦对象模型（Current Federation Object Model, FOM）：** 在创建联邦执行（federation execution）时或由任何已加入联邦执行成员指定的FOM模块与管理对象模型（Management Object Model, MOM）和初始化模块（MOM and Initialization Module, MIM）的并集。求和运算按照IEEE Std 1516.2™-2025中的规则执行。当所有FOM模块都已提供时，当前FOM将等于FOM；在此步骤发生之前，当前FOM将是FOM的真子集。

**当前联邦对象模型（Current Federation Object Model, FOM）文档数据（Federation Document Data, FDD）：** 用于配置联邦执行的数据和信息，这些数据是创建联邦执行时或由任何已加入联邦执行的成员指定的FOM模块与管理对象模型（MOM）和初始化模块（MIM）的并集。求和运算按照IEEE Std 1516.2™-2025中的规则执行。当所有FOM模块都已提供时，当前FDD将等于FDD；在此步骤发生之前，当前FDD将是FDD的真子集。

**数据类型（data type）：** 建立数据元素的格式、分辨率（resolution）、基数和顺序性的表示约定。

**已声明属性（declared attributes）：** 联邦对象模型（FOM）中列为与对象类层次树中该对象类关联的特定对象类的类属性（class attribute）集。

**已声明定向交互（declared directed interactions）：** 联邦对象模型（FOM）中列为与对象类层次树中该对象类关联的特定对象类的类定向交互集。

**已声明参数（declared parameters）：** 联邦对象模型（FOM）中列为与交互类层次树中该交互类关联的特定交互类的参数（parameter）集。

**默认范围（default range）：** 在联邦对象模型（OMT）文档数据（FDD）中定义的维度（dimension）的范围下界（range lower bound）和范围上界（range upper bound），以[0，维度上界)表示。

**默认区域（default region）：** 由运行时基础设施（RTI）提供的多维区域（region），由在联邦对象模型（FOM）文档数据（FDD）中发现的每个维度的一个范围（range）组成。这些范围的边界是(0，范围的维度上界)。联邦成员（federate）无法引用默认区域。

> 注——见IEEE Std 1516.1™-2025中的9.1。

**删除（delete）：** 调用删除对象实例服务以消除特定对象实例（object instance）。另见：移除（remove）。

> 注——见IEEE Std 1516.1™-2025中的6.16。

**指示符（designator）：** 服务描述中引用的参数的一般视图。当服务参数（主要是标识符）由于特定编程语言或应用程序编程接口（Application Programmer's Interface, API）而具有不同视图（实现）时，此视图提高了清晰度。

**维度（dimension）：** 命名区间（range）。该区间由一对有序值定义，第一值为维度下界，第二值为维度上界。运行时基础设施（RTI）提供一个预定义区间，其下界和上界按照联邦对象模型（FOM）文档数据（FDD）的规定固定为(0，维度上界)。该区间为与RTI的所有维度相关数据的通信提供了单一基础。与RTI通信的所有归一化区间都是该区间的子集。

> 注——见IEEE Std 1516.1™-2025中的9.1。

**定向交互（directed interaction）：** 联邦成员（federate）对特定对象实例（object instance）采取的明确操作，可能对拥有该对象实例属性的联邦执行（federation execution）中的另一个联邦成员产生某些影响或影响。

**定向交互类（directed interaction class）：** 交互类（interaction class）与对象类（object class）之间的关联，其中交互类的实例可被定向到拥有该对象类属性实例的感兴趣联邦成员接收。

**发现（discover）：** 接收对特定对象实例（object instance）的发现对象实例服务调用。†¹³

> 注——见IEEE Std 1516.1-2025中的6.9。

> ¹³ 所有RTI发起的服务在服务名称后用†（剑号）表示。

**发现类（discovered class）：** 已加入联邦成员（joined federate）发现该对象实例时，该对象实例在该已加入联邦成员处的候选发现类（candidate discovery class）。另见：候选发现类。

> 注——见IEEE Std 1516.1-2025中的5.1.2。

**动态链接兼容性（Dynamic Link Compatibility, DLC）：** 能够更换API的实现而不必重新编译或重新链接使用该API的应用软件的能力。

**极小时间间隔（epsilon time interval）：** 任意两个连续逻辑时间（logical time, LT）T1和T2之间的距离（即T1和T2之间的逻辑时间集合为空）。对于本地时间的某些表示（例如浮点数），T1和T2的所有此类实例的距离可能不相同。

**异常（exception）：** 服务调用期间可能发生的任何异常情况的通知。

**故障（fault）：** 阻止整个联邦（federation）以高层体系结构（High Level Architecture, HLA）兼容方式执行的事件。

**联邦成员（federate）：** 可与或当前与联邦对象模型（FOM）文档数据（FDD）和运行时基础设施（RTI）耦合的应用。另见：联邦成员应用（federate application）；已加入联邦成员（joined federate）。

**联邦成员应用（federate application）：** 支持高层体系结构（HLA）接口连接到运行时基础设施（RTI）并能够加入联邦执行（federation execution）的应用。联邦成员应用可多次加入同一联邦执行或可加入多个联邦执行。但是，每次联邦成员应用加入联邦执行时，都会创建一个新的已加入联邦成员。另见：已加入联邦成员。

**联邦（federation）：** 联邦成员应用（federate application）的命名集合和通用联邦对象模型（FOM），它们作为一个整体来实现某些特定目标。

**联邦执行（federation execution）：** 随时间推移的实际操作，由通过运行时基础设施（RTI）互连的一组已加入联邦成员（joined federate）组成。

**联邦目标（federation objectives）：** 通过建立和执行联邦要解决的问题的陈述。

**联邦对象模型（Federation Object Model, FOM）：** 定义运行时交换的信息以实现给定联邦目标的规范。这些信息包括对象类（object class）、对象类属性、交互类（interaction class）、交互参数和其他相关信息。FOM使用一个或多个FOM模块向运行时基础设施（RTI）指定。RTI使用这些FOM模块和一个管理对象模型（MOM）和初始化模块（MIM）组装FOM，该模块由RTI自动提供，或者在创建联邦执行时（可选地）提供给RTI。

**联邦对象模型（Federation Object Model, FOM）文档数据（Federation Document Data, FDD）：** FOM中的数据和信息，由创建联邦执行服务和后续加入联邦执行服务调用使用，以配置联邦执行。

**联邦对象模型（FOM）模块（federation object model module）：** 部分FOM（包含部分或全部对象模型模板（OMT）表），用于指定FOM的模块化组件。FOM模块可能包含非其固有的但FOM模块依赖的类，即模块化组件的超类（superclass）。这些超类将以完整或框架定义的形式包含在FOM模块中。

**联邦需求（federation requirements）：** 明确标识联邦特征、约束、过程或产品的陈述，该陈述是明确的、可测试的，并且是联邦可被接受用于其预期用途所必需的。

**联邦场景（federation scenario）：** 用于在联邦执行（federation execution）中实现联邦目标的一组初始条件和重大事件的时间线。

**最终时间值（final time value）：** 时间轴（time axis）上不再有点紧随其后的点。

**句柄（handle）：** 由运行时基础设施（RTI）发源/创建的标识符，在联邦执行中唯一。

**继承属性（inherited attribute）：** 对象类（object class）的类属性（class attribute），该属性在联邦对象模型（FOM）中定义的对象类层次树中声明在该对象类的超类（superclass）中。

**继承维度（inherited dimension）：**

a) 涉及对象类：在联邦对象模型（FOM）或仿真对象模型（SOM）中定义的对象类层次树中，声明在该对象类超类（superclass）中的对象类的维度（dimension）。

b) 涉及交互类：在联邦对象模型（FOM）或仿真对象模型（SOM）中定义的交互类层次树中，声明在该交互类超类中的交互类的维度。

**继承的定向交互类（inherited directed interaction class）：** 对象类（object class）的定向交互类（directed interaction class），该类在联邦对象模型（FOM）中定义的对象类层次树中声明在该对象类的超类（superclass）中。

**继承参数（inherited parameter）：** 交互类（interaction class）的参数（parameter），该参数在联邦对象模型（FOM）中定义的交互类层次树中声明在该交互类的超类（superclass）中。

**初始时间值（initial time value）：** 时间轴（time axis）上的起始点。

**实例属性（instance attribute）：** 对象实例（object instance）的命名特征。

**交互（interaction）：** 联邦成员（federate）之间传递的显式动作，不与特定对象实例（object instance）关联，但可能对联邦执行（federation execution）中涉及的一个或多个联邦成员有意义。

**交互类（interaction class）：** 具有相似属性、共同行为、共同关系和共同语义的一组交互（interaction）的描述。

**已发送交互（sent interaction）：** 已加入联邦成员（joined federate）使用发送交互服务发送的交互（interaction）。

**已发送参数（sent parameters）：** 已发送交互（sent interaction）的参数（parameter）。

**加入联邦执行（joined federation execution）：** 已加入联邦成员（joined federate）加入联邦执行（federation execution）时所在的逻辑位置，由联邦执行名称和联邦成员名称标识。

**已加入联邦成员（joined federate）：** 已加入联邦执行（federation execution）的联邦成员（federate），由联邦成员应用（federate application）调用加入联邦执行服务创建。

**语言无关规范（Language-Independent Specification, LIS）：** 独立于任何特定编程语言的标准描述。

**最近超类（nearest superclass）：** 给定类的祖先类中距离该类最近的类。

**对象类（object class）：** 具有相似属性、共同行为、共同关系和共同语义的一组对象实例（object instance）的描述。

**对象实例（object instance）：** 对象类（object class）的特定实例，具有唯一的标识和一组属性值。

**对象实例名称（object instance name）：** 附加到对象实例（object instance）的名称，可由联邦成员（federate）明确提供或由RTI隐式分配。

**对象模型框架（object model framework）：** 用于描述对象模型（object model）的通用结构。

**对象模型模板（Object Model Template, OMT）：** 用于规范化和记录对象模型（object model）的标准格式。

**已拥有实例属性（owned instance attribute）：** 已加入联邦成员（joined federate）拥有所有权的实例属性（instance attribute）。

**成对集合（set of pairs）：** 一组有两个组分的有序对（pair）。

**被动订阅（passive subscription）：** 已加入联邦成员（joined federate）请求接收数据但不希望接收启动/停止注册、开启/关闭更新或开启/关闭交互服务调用通知的订阅。

**发布（publish）：** 已加入联邦成员（joined federate）声明将向联邦执行（federation execution）提供特定类型数据的动作。

**已发布属性（published attributes）：** 已加入联邦成员（joined federate）发布的一组属性（attribute）。

**已发布参数（published parameters）：** 已加入联邦成员（joined federate）发布的一组交互参数（parameter）。

**接收顺序（Receive Order, RO）：** 联邦成员（federate）接收交互（interaction）的顺序与其被接收的顺序相同。

**已接收交互（received interaction）：** 已加入联邦成员（joined federate）接收的交互（interaction）。

**已接收参数（received parameters）：** 已接收交互（received interaction）的参数（parameter）。

**候选接收类（candidate received class）：** 已发送交互（sent interaction）的已发送类（sent class，如果已订阅）。如果已发送类未订阅，则为已加入联邦成员（joined federate）所订阅的已发送交互类的最近超类（nearest superclass）。

**参考对象模型（reference object model）：** 可用作构建块的对象模型（object model）组件。

**区域实例化（region realization）：** 创建区域（region）的运行时表示。

**区域规范（region specification）：** 区域（region）的规范表示。

**区域模板（region template）：** 可用于创建区域（region）的规范表示。

**注册类（registered class）：** 对象实例（object instance）已注册到的类（class）。

**相关性（relevance）：** 联邦成员（federate）对数据路由的贡献。

**远程评估（remote evaluation）：** 对一个联邦成员（federate）在另一联邦成员处执行的操作进行计算评估。

**移除（remove）：** 消除对象实例（object instance）而不通知其他联邦成员（federate）。

**重复描述（repeated description）：** 在对象模型（object model）中出现多次的定义。

**请求更新（request update）：** 已加入联邦成员（joined federate）请求更新对象实例（object instance）属性（attribute）的动作。

**需求声明（requirement declaration）：** 联邦成员（federate）对特定数据的需求。

**分辨率（resolution）：** 数据类型（data type）的分辨率由该类型可表示的不同值之间的差异定义。

**范围（range）：** 由两个值定义的有序对（pair），第一个值是范围下界（range lower bound），第二个值是范围上界（range upper bound）。

**范围下界（range lower bound）：** 范围（range）中较低的边界值。

**范围上界（range upper bound）：** 范围（range）中较高的边界值。

**已获取属性（acquired attributes）：** 已加入联邦成员（joined federate）已请求更新的属性（attribute）。

**已请求参数（requested parameters）：** 已加入联邦成员（joined federate）已请求的交互参数（parameter）。

**滚动回调开关（rolling callback switch）：** 允许联邦成员（federate）在RTI中启用/禁用可选回调的开关（switch）。

**已保存属性（saved attributes）：** 在保存/恢复操作期间保存的对象实例（object instance）属性（attribute）值。

**模式（schema）：** 表示数据结构的语法规则集合。

**范围下界（range lower bound）：** 维度（dimension）中较低的值。

**范围上界（range upper bound）：** 维度（dimension）中较高的值。

**指定维度（specified dimensions）：** 在FOM中明确声明的维度（dimension）。

**发送类（sent class）：** 用于发送交互（interaction）的交互类（interaction class）。

**发送交互（sent interaction）：** 已加入联邦成员（joined federate）使用发送交互服务发送的交互（interaction）。

**服务组（service group）：** 具有共同目的的相关RTI服务集合。

**仿真对象模型（Simulation Object Model, SOM）：** 描述仿真能力及其与HLA接口的数据交换的规范。

**开始注册（start registration）：** 通知已加入联邦成员（joined federate）已创建新对象实例（object instance）的服务调用。

**停止注册（stop registration）：** 通知已加入联邦成员（joined federate）已删除对象实例（object instance）的服务调用。

**子类（subclass）：** 继承另一个类的属性和行为的类（class）。

**订阅（subscribe）：** 已加入联邦成员（joined federate）声明希望接收特定类型数据的动作。

**已订阅属性（subscribed attributes）：** 已订阅的一组属性（attribute）。

**已订阅交互类：** 已订阅的一组交互类。

**超类：** 其属性和行为被另一个类继承的类。

**开关：** 可由联邦成员设置的值，用于控制RTI行为。

**同步点：** 联邦成员在联邦执行中协调的点。

**同步集：** 同步点的集合。

**目标对象实例：** 定向交互指向的对象实例。

**第三方评估：** 一个联邦成员代表另一个联邦成员执行计算评估。

**时间戳（timestamp）：** 与数据关联的时间值。

**时间戳顺序（Timestamp Order, TSO）：** 联邦成员（federate）接收交互（interaction）的顺序由交互的时间戳（timestamp）决定。

**时间管理：** 确保联邦中时间协调一致的服务。

**开启/关闭交互：** 控制已加入联邦成员是否接收交互的服务调用。

**开启/关闭更新：** 控制已加入联邦成员是否接收属性更新的服务调用。

**拓扑独立仿真对象模型：** 不依赖于特定网络拓扑的仿真对象模型。

**特征标记：** 用于标识特定属性或特征的值。

**交易数据交换格式：** 用于交换结构化数据的格式。

**传输类型：** 指定数据传输特性的参数。

**未指定维度：** 在FOM中未明确声明的维度。

**更新：** 已加入联邦成员更新对象实例属性的动作。

**更新区域集：** 与对象实例更新关联的一组区域。

**更新速率：** 更新发生的频率。

**有效联邦成员指示符：** 标识特定联邦成员的字符串。

**有效对象实例指示符：** 标识特定对象实例的字符串。

**值更新：** 包含对象实例属性新值的数据。

**管理对象模型(MOM)：** 一组预定义的高层体系结构(HLA)构造（对象和交互类），提供以下功能：

a) 访问联邦执行操作信息

b) 深入了解已加入联邦成员和运行时基础设施(RTI)的操作

c) 控制RTI、联邦执行和各个已加入联邦成员的运行

**管理对象模型(MOM)和初始化模块(MIM)：** 联邦对象模型(FOM)的子集，包含描述高层体系结构(HLA) MOM的对象模型模板(OMT)表。MIM还包含其他预定义的HLA构造，如对象和交互根、数据类型、传输类型和维度。HLA指定标准MIM，运行时基础设施(RTI)自动将其纳入所有FOM文档数据(FDD)。标准MIM可替换为包含标准MIM及其扩展的用户提供的MIM。

**消息：** 对象实例属性值的变更、交互、定向交互或现有对象实例的删除，通常与时间轴上的特定点关联，如关联的时间戳所示。

**空指示符：** 保留用于表示可与其他所有指示符区分开的空值的指示符。保证空指示符与任何具有非空值的其他指示符比较不相等。

**对象类：** 联邦成员概念表示的基本元素，反映真实世界在适合联邦成员互操作的抽象和分辨率水平上。对象类是是一组对象实例共有一组特征的模板。这些特征对应于个别联邦成员可能发布的类属性和类定向交互，以及其他联邦成员可能订阅的属性。

**对象实例：** 对象类的唯一实例，独立于该对象类的所有其他实例。在联邦执行期间的任何时刻，高层体系结构(HLA)对象实例的状态定义为其所有实例属性值的集合。

**对象模型：** 主要通过类特征和关系定义的系统规范。高层体系结构(HLA)的对象模型概念在许多方面与面向对象文献中的常见对象模型概念相似，但不完全相同。

**对象模型框架（object model framework）：** 用于描述高层体系结构（HLA）对象模型（object model）的规则和术语。

**乐观逻辑时间（Optimistic Logical Time, OLT）：** 促进乐观时间推进的补充逻辑时间。乐观逻辑时间与联邦成员逻辑时间的更新一起在刷新队列授予服务调用中提供，作为对刷新队列请求服务调用的响应。它是刷新队列请求中提供的时间与作为对该刷新队列请求的响应传递的任何TSO消息的时间戳（timestamp）中的最小值。乐观逻辑时间表示联邦成员可以推进到的下一个逻辑时间的下界，如果在将来没有收到时间戳小于该值的TSO消息。

**乐观前瞻时间（Optimistic Lookahead, OL）：** 联邦成员（federate）如果实际被授予乐观逻辑时间（OLT）将具有的前瞻时间（lookahead）。

**顺序类型（order type）：** 运行时基础设施（RTI）对源自多个已加入联邦成员（joined federate）但传递给单个已加入联邦成员的消息进行排序的方式。定义了不同类别的服务，具有关于RTI是否以及如何对将传递给已加入联邦成员的消息进行排序的不同特性。

**范围外（out of scope）：** 对象实例（object instance）的实例属性（instance attribute），以下任一条件不成立：

a) 已加入联邦成员（joined federate）知道该对象实例。

b) 该实例属性由另一个已加入联邦成员拥有。

c) 该实例属性的相应类属性（class attribute）是以下之一：

    (1) 对象实例已知类的已订阅属性，或
    
    (2) 带区域的对象实例已知类的已订阅属性，并且拥有已加入联邦成员处的实例属性更新区域集与订阅已加入联邦成员处实例属性的相应类属性已知类的订阅区域集重叠。

> 注——见IEEE Std 1516.1™-2025中的6.1。

**重叠（overlap）：**

a) 涉及区域集：给定两个区域集，在每个集合中都有一个区域（region），使得两个区域重叠。

b) 涉及区域：给定两个区域，当且仅当对于每个维度（dimension），公共维度中的区域有公共部分时，它们至少有一个公共维度。如果两个区域没有任何公共维度，则它们不重叠。

c) 涉及范围：给定两个范围（range）（A=[a_lower, a_upper)和B=[b_lower, b_upper)），当且仅当下式成立时重叠：

    (1) a_lower = b_lower 或 (a_lower < b_upper 且 b_lower < a_upper)，或
    
    (2) 启用了宽松DDM开关（switch），RTI实现根据特定于实现的标准确定范围足够接近，以保证对一个或两个范围进行扩展解释；任何范围都不得减少。

> 注——见IEEE Std 1516.1™-2025中的9.1。

**拥有（own）：** 涉及实例属性（instance attribute）与已加入联邦成员（joined federate）之间的关系：当已加入联邦成员拥有更新实例属性值的唯一权利时。

**已拥有的实例属性（owned instance attribute）：** 由拥有已加入联邦成员（joined federate）明确建模的实例属性（instance attribute）。拥有实例属性的已加入联邦成员有责任通过运行时基础设施（RTI）向联邦（federation）提供该实例属性的值，如联邦对象模型（FOM）文档数据（FDD）中所记录。

**对（pair）：** 两个相关元素（第一组分和第二组分）的分组，其组合被视为一个实体。例如，实例属性（instance attribute）与其当前值配对。

**参数（parameter）：** 交互（interaction）的命名特征。

**数据组（passel）：** 来自更新属性值服务调用的一组属性（attribute）句柄（handle）/值对，通过反射属性值服务调用一起传递。数据组中的所有对（pair）具有相同的用户提供的标签、发送消息顺序类型、传输类型（transportation type）、接收消息顺序类型、时间戳（timestamp，如果存在）和发送区域指示符集（如果存在）。数据组是一条消息（message）。

**被动订阅（passive subscription）：** 向运行时基础设施（RTI）发出的对已加入联邦成员（joined federate）当前感兴趣接收的数据类型（对象类（object class）和属性（attribute）以及交互（interaction））的请求。然而，与主动订阅（active subscription）不同，RTI不使用此信息来安排数据传递，也不使用它来告诉发布已加入联邦成员另一个已加入联邦成员正在订阅该数据（通过启动/停止注册、开启/关闭更新或开启/关闭交互服务调用）。提供这种订阅形式是为了支持某些类型的记录器已加入联邦成员。

**升级的（promoted）：** 涉及特定已加入联邦成员（joined federate）知道的对象实例（object instance）：具有作为其已注册类（registered class）超类（superclass）的发现类（discovered class）。

> 注——见IEEE Std 1516.1™-2025中的5.1.3。

**发布（publish）：** 向联邦（federation）宣布联邦成员（federate）可以向联邦提供的信息。

**已发布的（published）：**

a) 从给定已加入联邦成员的角度涉及对象类：对象类的至少一个可用属性与对象类一起作为发布对象类属性服务调用的参数，且该参数随后未通过取消发布对象类属性服务取消发布。

> 注——见IEEE Std 1516.1™-2025中的5.1.2。

b) 从给定已加入联邦成员的角度涉及交互类：作为发布交互类服务调用的参数，且该交互类随后未跟有取消发布该交互类的取消发布交互类服务调用。

> 注——见IEEE Std 1516.1™-2025中的5.1.3。

**对象类的已发布属性：** 已成为给定已加入联邦成员针对该对象类调用发布对象类属性服务参数的类属性，这些属性随后未被取消发布（无论是单独取消还是通过取消发布整个对象类），还可能包括该对象类的HLAprivilegeToDeleteObject属性。

> 注——见IEEE Std 1516.1™-2025中的5.1.2。

**范围：** 维度的子集，由一对有序值定义，第一个值为范围下界，第二个值为范围上界。这对值定义了半开区间[范围下界, 范围上界)（即范围下界是区间中最小的成员，范围上界只是大于区间的任何成员）。

> 注——见IEEE Std 1516.1™-2025中的9.1.1。

**范围下界：** 作为范围组成部分的有序对值的第一个组分。

> 注——见IEEE Std 1516.1™-2025中的9.1。

**范围上界（range upper bound）：** 作为范围（range）组成部分的有序对（pair）值的第二个组分。

> 注——见IEEE Std 1516.1™-2025中的9.1。

**接收类（received class）：** 交互（interaction）在已加入联邦成员（joined federate）处通过接收交互服务调用或接收定向交互服务调用接收时，该交互在该已加入联邦成员处的候选接收类（candidate received class）。

> 注——见IEEE Std 1516.1™-2025中的5.1.3。

**接收参数（received parameters）：** 调用接收交互服务或接收定向交互服务时接收的参数（parameter）集。这些参数由交互的可用参数中的已发送参数的子集组成。

> 注——见IEEE Std 1516.1™-2025中的5.1.3。

**接收顺序（Receive Order, RO）：** 消息（message）无排序保证的特性。作为RO消息接收的消息将由各自的已加入联邦成员以任意顺序接收。如果在发送消息时指定了时间戳（timestamp）值，则该时间戳值将与消息一起提供，但该时间戳不影响消息接收顺序。

**反射（reflect）：** 通过调用反射属性值服务接收一个或多个实例属性（instance attribute）的新值。

> 注——见IEEE Std 1516.1™-2025中的6.11。

**反射的实例属性（reflected instance attribute）：** 在已加入联邦成员（joined federate）中表示但未明确建模的实例属性（instance attribute）。反射已加入联邦成员接受由其他联邦成员（federate）产生并通过反射属性值服务由RTI提供给它的反射实例属性的新值。

**区域（region）：** 通用术语，指区域规范（region specification）或区域实例化（region realization）。如果不使用数据分发管理（Data Distribution Management, DDM），区域参数可能会被忽略。

> 注——见IEEE Std 1516.1™-2025中的9.1。

**区域实例化（region realization）：** 与用于更新的实例属性（instance attribute）、已发送交互（sent interaction）或用于订阅的类属性（class attribute）或交互类（interaction class）关联的一组区域范围（range）。区域实例化通过以下服务从区域规范（region specification）创建：提交区域修改（仅在修改已从中派生区域实例化的区域规范时）、带区域注册对象实例、带区域关联更新、带区域订阅对象类属性、带区域订阅交互类、带区域发送交互或带区域请求属性值更新。

> 注——见IEEE Std 1516.1™-2025中的9.1.1。

**区域规范（region specification）：** 一组范围（range）。区域规范使用创建区域服务创建，区域规范的变更通过提交区域修改服务通知运行时基础设施（RTI）。

> 注——见IEEE Std 1516.1™-2025中的9.1.1。

**区域模板（region template）：** 区域模板是不完整的区域规范（region specification），其中有一个或多个维度（dimension）尚未分配范围（range）。

**注册（register）：** 调用注册对象实例服务或带区域注册对象实例服务，以创建唯一对象实例指示符。

> 注——见IEEE Std 1516.1™-2025中的6.8。

**已注册类（registered class）：** 作为注册对象实例服务调用或带区域注册对象实例服务调用的参数的对象类（object class），该调用导致为给定对象实例（object instance）创建对象实例指示符。

**标准交互类描述（regular interaction class description）：** 遵循IEEE Std 1516.2™-2025的交互类（interaction class）描述，至少包含交互类名称和发布/订阅指示符。

**标准对象类描述（regular object class description）：** 遵循IEEE Std 1516.2™-2025的对象类（object class）描述，至少包含对象类名称和发布/订阅指示符。

**移除（remove）：** 接收对特定对象实例（object instance）的移除对象实例服务调用。

> 注——见IEEE Std 1516.1™-2025中的6.15。

**重复描述（repeated description）：** 联邦对象模型（FOM）模块中与当前FOM中已可用描述名称和附加属性（attribute）相同的构造（如对象类（object class）、交互类（interaction class）、数据类型（data type）、维度（dimension））的描述。

**分辨率（resolution）：** 可区分的属性（attribute）或参数（parameter）值之间的最小可解析值。对于某些数据类型（data type），分辨率可能随幅度而变化。

**撤回（retraction）：** 联邦成员（federate）取消先前调度消息（message）的操作。消息撤回可能对预定接收该消息的联邦成员可见。撤回广泛用于经典面向事件的离散事件仿真中，以模拟抢占和中断等行为。

**运行时基础设施（Runtime Infrastructure, RTI）：** 在高层体系结构（HLA）联邦执行（federation execution）期间提供公共接口服务以进行同步和数据交换的软件。

**运行时基础设施（RTI）初始化数据（RTI Initialization Data, RID）：** 运行RTI所需的RTI供应商特定信息。如需要，RTI初始化时提供RID。

**框架交互类描述（scaffolding interaction class description）：** 遵循IEEE Std 1516.2™-2025的联邦对象模型（FOM）模块或仿真对象模型（SOM）模块中的交互类（interaction class）描述。但是，它只包含名称。框架交互类描述的名称与另一FOM/SOM模块提供的标准交互类描述的名称相同。框架交互类描述用作占位符，以表示来自其他FOM/SOM模块的类层次结构（class hierarchy），从中可以指定新的标准交互类描述。

**框架对象类描述（scaffolding object class description）：** 遵循IEEE Std 1516.2™-2025的联邦对象模型（FOM）模块或仿真对象模型（SOM）模块中的对象类（object class）描述。但是，它只包含名称。框架对象类描述的名称与另一FOM/SOM模块提供的标准对象类描述的名称相同。框架对象类描述用作占位符，以表示来自其他FOM/SOM模块的类层次结构（class hierarchy），从中可以指定新的标准对象类描述。

**发送类（sent class）：** 作为发送交互、带区域发送交互或发送定向交互服务调用的参数的交互类（interaction class），该调用启动了给定交互的发送。

> 注——见IEEE Std 1516.1™-2025中的5.1.3。

**已发送交互（sent interaction）：** 已加入联邦成员（joined federate）通过发送交互、带区域发送交互或发送定向交互服务发送并由联邦执行（federation execution）中的其他已加入联邦成员通过接收交互服务或接收定向交互服务接收的特定交互（interaction）。

**已发送参数（sent parameters）：** 作为给定交互（interaction）的发送交互、带区域发送交互或发送定向交互服务调用参数的参数（parameter）。

> 注——见IEEE Std 1516.1™-2025中的5.1.3。

**集合（set）：** 一组元素，每个元素最多出现一次（此定义对应于数学中的集合概念）。例如，一组类属性（class attribute），每个类属性属于同一对象类（object class）。

**仿真对象模型（Simulation Object Model, SOM）：** 有关个别联邦成员（federate）可向高层体系结构（HLA）联邦提供的信息类型以及个别联邦成员可从HLA联邦中其他联邦成员接收的信息的规范。SOM使用一个或多个SOM模块指定。SOM表达的标准格式便于确定联邦成员参与联邦（federation）的适用性。

**仿真对象模型（SOM）模块（simulation object model module）：** 包含部分或全部对象模型模板（OMT）表的SOM子集。SOM模块和一个可选的管理对象模型（MOM）和初始化模块（MIM）用于指定联邦成员（federate）的SOM。SOM模块包含同一SOM模块中对象类（object class）和交互类（interaction class）的所有对象类和交互类的超类（superclass）的完整或框架定义。

**指定维度（specified dimensions）：** 创建或修改区域规范（region specification）时明确提供的维度（dimension）。

> 注——见IEEE Std 1516.1™-2025中的9.1.2。

**停止发布（stop publishing）：** 采取导致曾是类已发布属性的类属性（class attribute）不再是该类的已发布属性的行动。

**子类（subclass）：** 向另一个更通用类（超类（superclass））添加额外细节（专门化）的类（class）。子类通过从其父类（最近的超类）继承属性，也继承其父类所有超类的属性。

**订阅（subscribe）：** 向联邦（federation）宣布联邦成员（federate）希望从联邦获取的信息。

**已订阅（subscribed）：**

a) 从给定已加入联邦成员（joined federate）的角度涉及对象类（object class）：具有该类的已订阅属性或带区域的该类已订阅属性（针对某个区域（region））。另见：对象类的已订阅属性；带区域的对象类已订阅属性。

b) 涉及交互类（interaction class）：是已订阅交互类或带区域的已订阅交互类（针对某个区域）。另见：已订阅交互类；带区域的已订阅交互类。

**对象类的已订阅属性（subscribed attributes of an object class）：** 已成为给定已加入联邦成员（joined federate）针对给定对象类（object class）调用订阅对象类属性服务参数的类属性（class attribute），这些属性随后未被取消订阅（无论是单独取消还是通过取消订阅整个对象类）。

> 注——见IEEE Std 1516.1™-2025中的5.1.2和5.8。

**带区域的对象类已订阅属性：** 已成为给定已加入联邦成员针对给定对象类和给定区域调用带区域订阅对象类属性服务参数的类属性，假设已加入联邦成员随后未针对该对象类和区域调用带区域取消订阅对象类属性服务。

> 注——见IEEE Std 1516.1™-2025中的9.8。

**已订阅交互类：** 从给定已加入联邦成员的角度来看，曾是订阅交互类或带区域订阅交互类服务调用参数的交互类，且该交互类随后未跟有取消订阅交互类或带区域取消订阅交互类服务调用。

> 注——见IEEE Std 1516.1™-2025中的5.1.3和5.10。

**带区域的已订阅交互类：** 从给定已加入联邦成员的角度来看，曾是带区域订阅交互类服务调用参数且该交互类和该区域随后未跟有带区域取消订阅交互类服务调用的交互类和区域。

> 注——见IEEE Std 1516.1™-2025中的9.10。

**订阅区域集：** 用于订阅类属性或用于订阅交互类的一组区域。另见：用于订阅类属性；用于订阅交互类。

**超类：** 一组属性的泛化，可由更精细（即更详细）的版本继承。在高层体系结构(HLA)应用中，一个类最多只能有一个直接超类（即只能从类层次结构的下一级继承单个类）。

**同步点：** 联邦执行序列中所有已加入联邦成员形成该点同步集并尝试到达的点，如果成功，它们将同步各自的处理。

**目标对象实例：** 定向交互指向的对象实例。

**时间推进状态：** 已加入联邦成员请求推进其时间位置与运行时基础设施(RTI)相应授予之间的间隔。已加入联邦成员只能通过以下服务之一向RTI请求时间推进来推进其时间位置：

a) 时间推进请求

b) 时间推进请求可用

c) 下一消息请求

d) 下一消息请求可用

e) 刷新队列请求

在RTI使用时间推进授予服务或刷新队列授予服务调用响应该已加入联邦成员之前，已加入联邦成员的时间位置实际上不会推进。

**时间轴（time axis）：** 离散值的有序序列，其中每个值通常表示所建模物理系统中的HLA时刻。对于时间轴上的任意两点T1和T2，如果T1 < T2，则T1表示发生在T2表示的时刻之前的时刻。序列以初始值开始（没有点小于该值），以最终值结束（没有点大于该值）。

**时间受限联邦成员（time-constrained federate）：** 可以接收时间戳顺序（Timestamp Order, TSO）消息且其时间推进受联邦执行（federation execution）中其他已加入联邦成员（joined federate）约束的已加入联邦成员。

> 注——见IEEE Std 1516.1™-2025中的8.1。

**时间管理（time management）：** 一组高层体系结构（HLA）服务，支持以与联邦需求一致的方式控制联邦执行（federation execution）中协作已加入联邦成员（joined federate）的消息排序和传递。

**时间位置（time position）：** 已加入联邦成员（joined federate）与时间轴（time axis）上某点的关联。

**时间调节联邦成员（time-regulating federate）：** 可以发送时间戳顺序（TSO）消息并约束联邦执行（federation execution）中其他已加入联邦成员（joined federate）时间推进的已加入联邦成员。

> 注——见IEEE Std 1516.1™-2025中的8.1。

**（消息或保存的）时间戳（timestamp）：** 将逻辑时间（logical time, LT）与联邦成员（federate）的活动（如更新实例属性（instance attribute）值、发送交互（interaction）和联邦保存）关联。

**时间戳顺序（Timestamp Order, TSO）：** 运行时基础设施（RTI）为使用时间管理（time management）服务和包含时间戳（timestamp）的消息的已加入联邦成员（joined federate）提供的消息排序。具有不同时戳的消息如果被传递给单个已加入联邦成员且T1 < T2，则称它们以TSO方式传递，在这种情况下M1在M2之前传递。具有相同时戳的消息将以任意顺序传递（即RTI不提供打破平局的机制）。

**令牌（token）：** 没有值的属性（attribute），传达有关哪个联邦成员（federate，如果有）拥有该属性的信息。

**传输类型（transportation type）：** 运行时基础设施（RTI）提供的在已加入联邦成员（joined federate）之间传输消息（message）的方式。定义了不同类别的服务，具有不同的特性，如交付可靠性和消息延迟。

**未指定维度（unspecified dimensions）：** 类属性（class attribute）、实例属性（instance attribute）、交互类（interaction class）或已发送交互（sent interaction）的可用维度（available dimensions）减去派生区域实例化的区域规范（region specification）的指定维度（specified dimensions）。

> 注——见IEEE Std 1516.1™-2025中的9.1.3。

**更新（update）：** 为一个或多个实例属性（instance attribute）调用更新属性值服务。

> 注——见IEEE Std 1516.1™-2025中的6.10。

**更新速率（update rate）：** 提供实例属性（instance attribute）值的速率，无论是由拥有已加入联邦成员（joined federate）向运行时基础设施（RTI）提供还是由RTI向订阅已加入联邦成员提供。

**更新区域集（update region set）：** 用于发送交互（interaction）或用于更新实例属性（instance attribute）的一组区域（region）。另见：用于发送；用于更新。

## 用于发送：

a) 涉及区域和指定交互类指示符：作为带区域发送交互服务中的参数。

b) 涉及默认区域：当指定交互类指示符作为发送交互服务中的参数时。

> 注——见IEEE Std 1516.1™-2025中的9.1。

## 用于订阅类属性：

a) 涉及区域、对象类和类属性：当类属性是该区域对象类的已订阅属性时。另见：带区域的对象类已订阅属性。

> 注——见IEEE Std 1516.1™-2025中的9.1。

b) 涉及默认区域：当指定类属性是指定类的已订阅属性时。另见：带区域的对象类已订阅属性。

> 注——见IEEE Std 1516.1™-2025中的9.1。

## 用于订阅交互类：

a) 涉及区域和交互类：当交互类是带区域的已订阅交互类时。另见：已订阅交互类。

> 注——见IEEE Std 1516.1™-2025中的9.1。

b) 涉及默认区域：当指定交互类是已订阅交互类时。另见：已订阅交互类。

> 注——见IEEE Std 1516.1™-2025中的9.1。

## 用于更新：

a) 涉及区域，该区域与指定对象实例和属性指示符一起曾用作带区域注册对象实例服务或带区域关联更新服务的参数：当该区域随后未与指定对象实例指示符一起用作带区域取消关联更新服务的参数，且已加入联邦成员随后未失去指定实例属性的所有权时。

> 注——见IEEE Std 1516.1™-2025中的9.1。

b) 涉及默认区域：当指定实例属性当前未用于与任何其他区域的更新时。

> 注——见IEEE Std 1516.1™-2025中的9.1。

**有效联邦成员指示符（valid federate designator）：** 在联邦执行（federation execution）期间由加入联邦执行服务返回给某些已加入联邦成员（joined federate）的联邦成员（federate）指示符。联邦成员不必保持为已加入联邦成员，其联邦成员指示符仍为有效联邦成员指示符。

**壁钟时间（wall-clock time）：** 由计时器（如手表或挂钟）确定的时间。

**零时间间隔（zero time interval）：** 两个相等的逻辑时间（logical time, LT）值之间的距离。当将此时间间隔加到逻辑时间T1时，结果为逻辑时间T2==T1。

## 3.2 缩略语和缩写

以下缩略语和缩写适用于本标准、IEEE Std 1516.1-2025和IEEE Std 1516.2-2025：

| 缩写 | 中文 | 英文全称 |
| :--- | :--- | :--- |
| ADT | 抽象数据类型 | Abstract Data Type |
| ABI | 应用程序二进制接口 | Application Binary Interface |
| API | 应用程序编程接口 | Application Programmer's Interface |
| BNF | 巴科斯-诺尔范式 | Backus Naur Form |
| BOM | 基础对象模型 | Base Object Model |
| DDM | 数据分发管理 | Data Distribution Management |
| DIF | 数据交换格式 | Data Interchange Format |
| DLC | 动态链接兼容性 | Dynamic Link Compatibility |
| DM | 声明管理 | Declaration Management |
| DSEEP | 分布式仿真工程与执行流程 | Distributed Engineering and Execution Process |
| DTD | 文档类型声明 | Document Type Declaration |
| FDD | FOM文档数据 | Federation Document Data |
| FOM | 联邦对象模型 | Federation Object Model |
| GALT | 最大可用逻辑时间 | Greatest Available Logical Time |
| HLA | 高层体系结构 | High Level Architecture |
| JAR | Java归档文件 | Java Archive |
| LIS | 语言无关规范 | Language-Independent Specification |
| LITS | 最小输入时间戳 | Least Incoming Timestamp |
| LRC | 本地运行时组件 | Local Runtime Component |
| LT | 逻辑时间 | Logical Time |
| LTI | 逻辑时间间隔 | Logical Time Interval |
| MIM | MOM和初始化模块 | MOM and Initialization Module |
| MOM | 管理对象模型 | Management Object Model |
| M&S | 建模与仿真 | Modeling and Simulation |
| NA | 不适用 | Not Applicable |
| OLT | 乐观逻辑时间 | Optimistic Logical Time |
| OMT | 对象模型模板 | Object Model Template |
| OO | 面向对象 | Object-Oriented |
| OOAD | 面向对象的分析与设计 | Object-Oriented Analysis and Design |
| POC | 对接人 | Point of Contact |
| RID | RTI初始化数据 | RTI Initialization Data |
| RO | 接收顺序 | Receive Order |
| RTI | 运行时基础设施 | Runtime Infrastructure |
| SOM | 仿真对象模型 | Simulation Object Model |
| TRADT | 时间表示抽象数据类型 | Time Representation Abstract Data Type |
| TSO | 时间戳顺序 | Timestamp Order |
| URI | 统一资源标识符 | Uniform Resource Identifier |
| URL | 统一资源定位符 | Uniform Resource Locator |
| WSPRC | Web服务提供商RTI组件 | Web Service Provider RTI Component |
| XML | 可扩展标记语言 | eXtensible Markup Language |

# 4. HLA规则摘要

联邦（federation）的规则如下：

(1) 联邦应具有HLA FOM（联邦对象模型，Federation Object Model, FOM），并按照HLA OMT（对象模型模板，Object Model Template, OMT）进行记录。

(2) 在联邦（federation）中，所有与仿真相关的对象实例（object instance）表示应在联邦成员（federate）中，而不是在RTI中。

(3) 在联邦执行（federation execution）期间，联邦成员之间所有FOM数据的交换应通过RTI进行。

(4) 在联邦执行期间，已加入联邦成员（joined federate）应按照HLA接口规范与RTI进行交互。

(5) 在联邦执行期间，一个实例属性（instance attribute）在任何给定时刻只能由一个已加入联邦成员拥有。

联邦成员（federate）的规则如下：

(6) 联邦成员应具有HLA SOM（仿真对象模型，Simulation Object Model, SOM），并按照HLA OMT进行记录。

(7) 联邦成员应能够按照其SOM中的规定更新和/或反射任何实例属性（instance attribute）以及发送和/或接收交互（interaction）。

(8) 联邦成员应能够按照其SOM中的规定在联邦执行期间动态转移和/或接受实例属性的所有权。

(9) 联邦成员应能够按照其SOM中的规定改变其提供实例属性更新的条件（如阈值）。

(10) 联邦成员应能够以允许它们与联邦其他成员协调数据交换的方式管理本地时间。

# 5. 联邦规则

## 5.1 规则1

联邦（federation）应具有HLA FOM（联邦对象模型，Federation Object Model, FOM），并按照HLA OMT（对象模型模板，Object Model Template, OMT）进行记录。

根据HLA交换的所有数据应记录在FOM中。FOM使用一个或多个FOM模块以及一个MOM和初始化模块（MOM and Initialization Module, MIM）指定。FOM应记录联邦成员（federate）之间关于在联邦执行（federation execution）期间使用HLA服务交换的数据以及数据交换的最小条件集（如在变化超过某值时发送更新）的协议。因此，FOM是定义联邦的基本元素。HLA不规定FOM中包含哪些数据（此项任务由联邦用户和开发者负责）。FOM应按照IEEE Std 1516.2-2025规定的格式记录，以支持新用户出于自身目的重用FOM。

## 5.2 规则2

在联邦（federation）中，所有与仿真相关的对象实例（object instance）表示应在联邦成员（federate）中，而不是在RTI中。

在HLA中，维护HLA对象实例属性值的责任应在已加入联邦成员（joined federate）中。在HLA联邦中，所有已加入联邦成员关联的实例属性（instance attribute）应由联邦成员拥有，而不是由RTI拥有。但是，RTI可以拥有与联邦MOM关联的实例属性。RTI可以使用关于实例属性和交互（interaction）的数据来支持RTI服务（如声明管理（declaration management）），但这些数据仅由RTI使用，不会被更改。

## 5.3 规则3

在联邦执行（federation execution）期间，联邦成员（federate）之间所有FOM数据的交换应通过RTI进行。

HLA联邦成员接口规范（见IEEE Std 1516.1-2025）指定了一组RTI服务接口，以根据联邦的FOM支持实例属性（instance attribute）值和交互（interaction）的协调交换。在HLA下，参与给定联邦执行的已加入联邦成员（joined federate）之间的FOM数据通信应通过RTI服务的数据交换执行。根据FOM，已加入联邦成员应向RTI标识它们将提供和需要的信息，以及与已加入联邦成员中对象实例（object instance）状态变化相对应的实例属性和交互数据。然后，RTI应在已加入联邦成员之间提供协调、同步和数据交换，以允许联邦连贯执行。

确保在正确的时间提供正确的数据以及以实质正确的方式使用数据应是已加入联邦成员的责任。RTI应确保根据已加入联邦成员声明的需求（如哪些数据、传输可靠性、事件排序）传递数据，以根据FOM在给定联邦执行中提供共享数据的公共视图。

应使用RTI服务来确保分布式应用（联邦（federation））的协调需求在联邦的所有参与者和联邦执行的整个生命周期中始终得到满足。

## 5.4 规则4

在联邦执行（federation execution）期间，已加入联邦成员（joined federate）应按照HLA接口规范与RTI进行交互。

HLA提供了联邦成员应用（federate application）与RTI之间标准接口的规范。已加入联邦成员应使用此标准接口访问RTI服务（见IEEE Std 1516.1-2025）。该规范应定义联邦成员应用如何与基础设施交互。然而，由于接口和RTI将用于需要交换具有不同特征的各种数据的广泛应用，因此接口规范不涉及要通过接口交换的特定联邦成员数据。

## 5.5 规则5

在联邦执行（federation execution）期间，一个实例属性（instance attribute）在任何给定时刻只能由最多一个已加入联邦成员（joined federate）拥有。

HLA允许不同的已加入联邦成员拥有同一对象实例（object instance）的不同属性（例如，飞机仿真可能拥有机载传感器的位置，而传感器系统模型可能拥有传感器的其他实例属性）。为确保整个联邦（federation）的数据一致性，在任何给定时刻，一个对象实例的任何给定实例属性只能由最多一个已加入联邦成员拥有。已加入联邦成员可以请求在联邦执行期间动态获取或放弃实例属性的所有权。因此，所有权可以在执行期间动态从一个已加入联邦成员转移到另一个。

# 6. 联邦成员规则

本条款描述了适用于HLA联邦成员的五条规则。每条规则纳入的理由见附录A。

## 6.1 规则6

联邦成员应具有HLA SOM，并按照HLA OMT进行记录。

HLA SOM应包括可以在联邦中公开的联邦成员的对象类、类属性和交互类。SOM使用一个或多个SOM模块以及一个可选的MIM指定。HLA不规定SOM中包含哪些数据；此项任务应由联邦成员开发者负责。SOM应按照IEEE Std 1516.2-2025规定的格式记录。

## 6.2 规则7

联邦成员应能够按照其SOM中的规定更新和/或反射任何实例属性以及发送和/或接收交互。

HLA允许已加入联邦成员将内部对象表示和交互作为联邦执行的一部分供外部使用。这些外部交互的能力应在联邦成员的SOM中记录。如果在SOM中记录，这些联邦成员能力应包括导出在联邦成员内部计算的实例属性更新值的义务，以及行使外部表示的交互（即联邦中其他联邦成员的交互）的义务。

## 6.3 规则8

联邦成员应能够按照其SOM中的规定在联邦执行期间动态转移和/或接受实例属性的所有权。

HLA允许在联邦执行期间动态转移对象实例的实例属性所有权。联邦成员的实例属性可以是拥有的或反射的，并且其所有权可以在执行期间动态获取或放弃，这些应在该联邦成员的SOM中记录。

## 6.4 规则9

联邦成员应能够按照其SOM中的规定改变其提供实例属性更新的条件（如阈值）。

HLA允许联邦成员拥有（即拥有为联邦成员中表示的对象实例的实例属性生成更新值的特权）实例属性，然后通过RTI将这些值提供给其他联邦成员。不同联邦可能规定实例属性更新的不同条件（例如，以某种指定速率，或当变化量超过指定阈值时（如高度变化超过1000英尺））。适用于联邦成员拥有的特定实例属性更新的条件应在该联邦成员的SOM中记录。

## 6.5 规则10

联邦成员应能够以允许它们与联邦其他成员协调数据交换的方式管理本地时间。

联邦设计者将把时间管理方法确定为其实现设计的一部分。联邦成员应遵守联邦的时间管理方法。

# 附录A

（资料性）

原理说明

## A.1 联邦规则

### A.1.1 规则1的理由

联邦应具有HLA FOM，并按照HLA OMT进行记录。

HLA是领域无关的，可用于支持各种用途的联邦。信息交换协议的正式化是HLA的重要组成部分。通过正式化这些协议的开发并要求将结果以通用格式记录，HLA提供了理解联邦关键元素以及协助整体或部分重用联邦的手段。重用自己的目标是HLA。此外，FOM为用于初始化联邦RTI的一些数据提供了基础。

### A.1.2 规则2的理由

在联邦中，所有与仿真相关的对象实例表示应在联邦成员中，而不是在RTI中。

HLA背后的一个基本想法是将联邦成员特定功能与通用支持基础设施分离。这一特性的必要部分是支持基础设施不具有关于正在仿真的对象的信息。如果允许相反的情况，并将关于给定应用的信息存储在支持基础设施中，则该基础设施将因此被定义为针对该特定应用定制，而不再是通用目的的。出于几个原因，联邦成员功能与联邦支持服务相分离。首先，RTI服务旨在提供跨最广泛用户范围支持联邦所需的基本可重用能力集。这些本质上是支持联邦运营、时间协调、数据分发等的协调和管理服务。因为它们适用于一系列HLA应用，所以这些服务可以作为应用的服务以最具成本效益的方式提供。其次，将RTI服务分离还有一个额外优势，即释放联邦成员，使其能够专注于其表示对象实例以满足用户或应用领域需求的主要目标。这种方法使联邦成员开发者无需在这些基本公共服务上投入时间和资源。

### A.1.3 规则3的理由

在联邦执行期间，联邦成员之间所有FOM数据的交换应通过RTI进行。

为联邦提供通用RTI服务的原因在于，提供共同的所需基本功能，以允许联邦成员之间的数据交换保持一致性。如果联邦在RTI服务套件之外交换表示共享对象实例状态变化或交互的数据，则分布式应用的一致性将被破坏。

### A.1.4 规则4的理由

在联邦执行期间，已加入联邦成员应按照HLA接口规范与RTI进行交互。

通过要求联邦成员与RTI之间采用标准化通用接口以及通用应用程序编程接口(API)，HLA允许联邦成员的独立开发和实现。联邦成员开发者可以独立工作，开发与RTI的接口，而无需考虑RTI实现，RTI开发可以在不明确考虑联邦成员开发的情况下进行。将接口与联邦成员数据交换需求分离允许在广泛的分布式M&S应用中使用通用接口规范，通过FOM机制根据特定应用需求进行定制。

### A.1.5 规则5的理由

在联邦执行期间，一个实例属性在任何给定时刻只能由最多一个已加入联邦成员拥有。

HLA还提供了在联邦执行期间将实例属性所有权从一个已加入联邦成员动态转移给另一个或让已加入联邦成员无条件放弃实例属性所有权的机制。在第二种情况下，实例属性在所有已加入联邦成员中变为"无主"，因此规则明确指出"一个实例属性在任何给定时刻只能由最多一个已加入联邦成员拥有"。已加入联邦成员可以请求获得"无主"实例属性的所有权。通过在实例属性级别定义所有权并提供在联邦执行期间移交所有权的工具，HLA提供了一套灵活的工具，用于使用各种已加入联邦成员组合来满足用户需求。

## A.2 联邦成员规则

### A.2.1 规则6的理由

联邦成员应具有HLA SOM，并按照HLA OMT进行记录。

HLA的主要目标是支持仿真的互操作性和重用。HLA通过在仿真（或更一般地，联邦成员）级别提供重用支持并允许访问这些仿真中的表示来提供此支持。

如果无法以具有成本效益的方式获取关于联邦成员中可用的对象表示的信息，就会抑制重用。SOM要求通过要求联邦成员记录其能力的最低基本显著方面来解决信息访问问题，以便轻松识别联邦成员在新联邦中的潜在应用。尽管潜在用户所需的完整信息将远超SOM内容，但提供基于重用潜力的仿真特征便于用户更有效地决定是否进一步评估仿真在其应用中的适用性。在某些情况下，如动态配置的被动订阅者，联邦成员的SOM基于当前FOM。

### A.2.2 规则7的理由

联邦成员应能够按照其SOM中的规定更新和/或反射任何实例属性以及发送和/或接收交互。

通过从一开始就设计具有将内部对象/属性/交互作为公开能力联邦成员，重用联邦成员的机制将从一开始就到位。

### A.2.3 规则8的理由

联邦成员应能够按照其SOM中的规定在联邦执行期间动态转移和/或接受实例属性的所有权。

通过内置转移和接受实例属性所有权的能力，按照HLA设计的联邦成员提供了在尽可能广泛的未来联邦中成为联邦成员的一些基本结构工具。借助此能力，可以允许为某一目的设计的联邦成员与为另一目的设计的联邦成员耦合以满足新需求。

### A.2.4 规则9的理由

联邦成员应能够按照其SOM中的规定改变其提供实例属性更新的条件（如阈值）。

通过设计和内置可以改变导出实例属性条件的能力，按照HLA设计的联邦成员提供了在尽可能广泛的未来联邦中成为联邦成员的一些基本结构工具。

### A.2.5 规则10的理由

联邦成员应能够以允许它们与联邦其他成员协调数据交换的方式管理本地时间。

HLA时间管理结构旨在支持可能依赖不同内部时间概念的联邦成员之间的互操作性。例如，某些联邦成员可能在没有任何明确的时间概念或时间流逝的情况下运行；其他联邦成员可能需要以比实时更快的速度运行；而某些联邦成员（如某些离散事件仿真）可能需要依赖整个联邦中事件的严格协调因果顺序。

HLA提供了一种单一、统一的时间管理方法，因为它提供了一个"工具箱"服务，支持（不保证）联邦以满足联邦需求和成员联邦内部时间管理策略范围的方式管理事件同步。

不同类别的联邦成员通常使用RTI服务子集来实现其机制。联邦成员不会向RTI明确指示时间流是如何管理的（例如，时间步进、事件驱动、外部时间同步、独立推进）。对时间流逝隐含的联邦成员可能不需要使用IEEE Std 1516.1-2025第8条中描述的服务。但是，联邦成员应确保其内部机制允许联邦中使用的时间管理范式（或多个范式）连贯运行。IEEE Std 1516.1-2025的8.1节讨论了联邦组合多个不同时间管理范式时的一些考虑因素。

# 附录B

（资料性）

**参考文献**

参考文献是提供额外或有用材料的资源，但不需要理解或使用这些材料来实施本标准。仅出于信息目的引用这些资源。

[B1] IEEE Std 1730™-2022，IEEE分布式仿真工程与执行流程(DSEEP)推荐实践。¹⁴¹⁵

[B2] IEEE Std 1730.1™-2023，IEEE分布式仿真工程与执行流程多体系结构覆盖层(DMAO)推荐实践。

[B3] IEEE Std 1730.2™-2022，IEEE分布式仿真验证、确认和验收/认证推荐实践：分布式仿真工程与执行流程的覆盖层。

[B4] SISO-STD-003-2006，基础对象模型(BOM)模板规范，仿真互操作性标准组织(SISO)，2006年3月。¹⁶

> ¹⁶ 本文件可从仿真互操作性标准组织获取（http://www.sisostds.org/）。

**提升世界标准**

联系我们：

Facebook: facebook.com/ieeesa
LinkedIn: linkedin.com/groups/1791118
Beyond Standards博客: beyondstandards.ieee.org
YouTube: youtube.com/ieeesa
standards.ieee.org
电话: +1 7329810060


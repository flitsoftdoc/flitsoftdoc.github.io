# 策略空间响应预言机 PSRO

## Policy Space Response Oracles: A Survey 

#### 摘要

博弈论为研究多个决策者间的互动提供了数学方法。然而，由于策略数量庞大，经典博弈论分析在可扩展性方面存在局限，难以直接应用于更复杂的场景。本综述全面概述了一个针对大型博弈的框架——策略空间响应预言机（PSRO），该框架通过将注意力集中在策略的充分子集上，有望提升可扩展性。我们首先阐述了PSRO的研究动机并提供了历史背景。随后重点探讨PSRO的策略探索问题：即在最小计算成本下，组装仍能良好表征原博弈的有效策略子集所面临的挑战。我们综述了当前提升PSRO效率的研究方向，并探讨了PSRO在不同领域的应用。最后，我们讨论了开放性问题与未来研究。

## 1 引言

近几十年来，多智能体系统的探索一直是人工智能（AI）研究的核心焦点。多智能体系统，通常被称为博弈，包含多个在共享环境中互动的决策智能体。为了理解这些智能体间的策略行为——其中一个智能体的最优行为取决于其他智能体的行为——博弈论提供了一个通过纳什均衡（NE）等解概念来定义行为稳定性的数学框架。为识别此类解，人们开发了多种均衡计算方法 [von Stengel, 2002; Savani and Turocy, 2024]，或是枚举所有均衡（参见 Avis 等人 [2010] 关于双矩阵博弈的工作），或是寻找一个样本均衡（例如，使用 Lemke-Howson 算法求解双矩阵博弈，或使用线性规划求解零和矩阵博弈 [von Stengel, 2002]）。

随着博弈规模（即玩家和策略的数量）的增长，枚举的计算可行性降低，研究重心便倾向于寻找一个样本均衡。在双人零和博弈（即两个玩家严格竞争的场景）这一特殊情况下，一个样本均衡已能提供有价值的见解：它揭示了博弈的独特价值，即第一位玩家通过采用一个足够强（均衡）策略所能保证获得的收益，而无论另一位玩家采用何种策略。然而，即便在零和场景下，许多实际应用产生的博弈规模过大，计算样本均衡（即使对最终形成的线性规划问题使用多项式时间方法）也是不可行的。本综述主要关注的正是这类超大型博弈。

作为传统均衡计算方法的替代方案，为推理此类超大型博弈，多种学习方法已被应用。将学习方法应用于博弈被称为多智能体学习 [Shoham et al., 2007]，其中最突出的方法之一是多智能体强化学习（RL）[Albrecht et al., 2024]。与传统方法相比，学习方法减少了完整表征整个博弈的需要，并通过交互式探索博弈来创建智能体。尽管学习方法对智能体的发展做出了重大贡献，但它们在博弈中面临许多固有挑战。例如，智能体间的独立学习可能导致环境非平稳，这对收敛性是一个挑战，因为每个独立学习器都面临一个可能移动的目标 [Tuyls and Weiss, 2012]。另一个挑战是博弈的非传递性，即不存在一个清晰的“更优”策略概念，因此有效的学习要求学习方案为每个智能体维持一个策略种群。此类非传递性普遍存在于各种博弈中 [Czarnecki et al., 2020; Sanjaya et al., 2022; Li et al., 2023b]。

在此背景下，策略空间响应预言机（PSRO）框架 [Lanctot et al., 2017] 作为传统博弈论均衡计算与学习的自然结合而出现。在PSRO中，一个核心概念是带有估计收益的受限博弈 ${ }^{1}$，它充当了底层完整博弈的近似。受限博弈源于在特定策略集的组合上运行的模拟。该策略集通常远小于完整博弈，因此可以使用传统均衡计算方法对受限博弈进行可行性分析。PSRO基于对当前受限博弈的分析，通过引入经由学习生成的新策略，迭代地扩展该受限博弈。

> ${ }^{1}$ 严格来说，通常受限博弈约束的是策略空间（相对于完整博弈），但其收益是“精确的”，而非估计值。相比之下，在实践中，PSRO的实现通常通过模拟（随机性可能来自环境）来估计这些收益。带有估计收益的受限博弈通常被称为经验博弈 [Wellman, 2006] 或元博弈 [Meta-game, Lanctot et al., 2017]。为简便起见，在本综述中，我们统一使用“受限博弈”这一术语，而不论收益是否为估计值。

作为大规模博弈的通用求解器，PSRO已成功应用于广泛的博弈类型和多样的应用领域，从顺序拍卖的机制设计 [Zhang et al., 2023] 到鲁棒强化学习 [Liang et al., 2023]。目前已发展出众多PSRO变体，每一种都经过调整以利用不同底层博弈的特定特性。作为其成功的一个显著例证，受PSRO启发的算法已在诸如《Barrage Stratego》[McAleer et al., 2020] 等大型博弈以及《星际争霸》[Vinyals et al., 2019] 中达到了最先进的性能，并令人信服地超越了人类专家和先前的AI系统。

尽管现有的多智能体学习综述（如 [Yang and Wang, 2020; Long et al., 2023; Albrecht et al., 2024]）已在某种程度上涵盖了PSRO及其变体，但一直缺乏像本文这样专门针对PSRO的综述。在本综述中，我们回顾了PSRO源自不同研究群体的历史发展，并将PSRO置于博弈求解方法的范畴中进行定位。随后，我们介绍了PSRO的最新进展，并重点阐述了当前及未来的研究方向。

## 2 PSRO 框架

PSRO框架融合了源自不同研究群体的思想。在规划领域，McMahan等人[2003]通过将马尔可夫决策过程中的鲁棒规划表述为一个具有庞大策略空间的零和博弈，奠定了理论基础。受优化中Bender分解法[Benders, 1962]的启发，他们提出了双 oracle（DO）算法。DO是一种迭代算法，用于求解策略数量有限的博弈。DO维护完整博弈的一个受限版本，并通过添加对当前均衡的最佳响应来迭代地扩展该受限博弈。当DO终止时，任何玩家都无法通过单方面偏离来获得额外收益，因此当前受限博弈中的均衡即为完整博弈的一个纳什均衡（NE）。在有限博弈中，DO保证能收敛到一个NE，尽管在最坏情况下受限博弈可能包含完整博弈的所有策略。此外，在适当的平局打破假设下，Zhang和Shandholm[2024]证明了DO在部分可观测随机博弈和扩展式博弈中需要指数级次数的迭代才能收敛。

与此同时，协同进化研究群体也从不同视角开发了类似方法。协同进化方法并行地演化多个（不同）物种的种群。在此设定下，没有明确的适应度函数，种群成员的适应度取决于其与其他种群成员的互动效果。协同进化的传统挑战包括性状中存在非传递循环，以及相关的“遗忘性状”问题——即某个性状在进化过程的某一时刻看似无用，但之后又变得有用。该群体探索了记忆机制和博弈表述，其中协同进化过程被设置为发现作为性状混合的NE [Angeline et al., 1993; Popovici et al., 2012]。为克服上述非传递循环和遗忘性状的障碍，人们设计了各种存档结构以促进向一系列博弈论解概念的单调收敛。例如，针对对称博弈的“纳什记忆”[Ficici and Pollack, 2003]可在发现的受限博弈中识别均衡策略。这通过并行纳什记忆（PNM）[Oliehoek et al., 2006]扩展到非对称博弈，拓宽了标准DO框架以容纳除最佳响应之外的其他oracle类型。

PSRO框架[Lanctot et al., 2017]在一篇题为《多智能体强化学习的统一博弈论方法》的论文中被提出，它将来自规划、多智能体强化学习和协同进化领域的许多上述思想统一在一个框架内，该框架还涵盖了虚拟对局[Fictitious Play, Brown, 1951]等经典博弈论学习动态。从技术上讲，PSRO在三个方面推广了DO。首先，PSRO引入了元策略求解器（MSS）的概念，它从当前受限博弈中提取一个策略组合作为下一个最佳响应目标${ }^{2}$。这使得最佳响应目标能够超越NE，将PSRO转变为一个能够泛化各种经典和现代博弈论算法的通用框架。其次，PSRO通过允许任何形式的（近似）响应oracle来推广DO，包括搜索、规划和进化算法等（如PNM和其他工作中所使用的[Oliehoek et al., 2006; Li and Wellman, 2021]）。这种推广使得在具有大量状态和动作的环境中计算最佳响应成为可能。第三，与DO相比，PSRO中策略组合的收益通过模拟进行估计。整个框架的示意图及其与DO的对比见图1。

> ${ }^{2}$ 为简便起见，我们通常对解概念和计算该解概念的MSS使用相同的术语。例如，我们可能说“纳什均衡”来表示计算NE的MSS。

我们注意到，PSRO框架可被视为经验博弈论分析（EGTA）[Wellman, 2006]的一个实例，EGTA包含一整套基于模拟构建和分析受限博弈的方法。EGTA的全面介绍可参见Wellman等人[2024]的综述。作为EGTA与PSRO联系的一个具体例子，在早期的一项EGTA工作中，Schvartzman和Wellman[2009]将表格型强化学习部署为最佳响应oracle（当时深度强化学习尚未出现），并将受限博弈的NE作为策略生成的最佳响应目标（即作为MSS）。

![](https://cdn.mathpix.com/cropped/2025_08_25_cc73c6e94ea7ff68acf9g-03.jpg?height=354&width=1421&top_left_y=178&top_left_x=349)

图1：DO框架与PSRO框架示意图。PSRO框架通过引入MSS推广了DO框架，使得最佳响应目标不再局限于NE。此外，PSRO容纳了各种RO及（近似）最佳响应oracle。


### 2.1 框架

完整博弈 $\mathcal{G}=\left(N,\left(S_{i}\right),\left(u_{i}\right)\right)$ 的标准式（或称策略式）表示是一个元组，其中 $N$ 是玩家的有限集合，每个玩家有一个非空策略集 $S_{i}$ 和一个效用函数 $u_{i}: \Pi_{j \in N} S_{j} \rightarrow \mathbb{R}$。受限博弈 $\hat{\mathcal{G}}_{S \downarrow X}=\left(N,\left(X_{i}\right),\left(\hat{u}_{i}\right)\right)$ 是完整博弈 $\mathcal{G}$ 的一个投影，玩家从受限策略集 $X_{i} \subseteq S_{i}$ 中选择策略，其效用可通过模拟进行估计。

图1左侧展示了DO应用于双矩阵博弈的特殊情况，右侧则为通用的PSRO框架。在PSRO中，每个玩家初始化为一个策略集 $X_{i}$，并通过模拟得到策略组合空间 $X$ 中所有组合的效用，从而形成初始受限博弈 $\hat{\mathcal{G}}_{S \downarrow X}$。在PSRO的每次迭代中，一个元策略求解器（MSS）会从当前受限博弈 $\hat{\mathcal{G}}_{S \downarrow X}$ 中指定一个策略组合 $\sigma \in \Delta X$ 作为下一个最佳响应目标，其中 $\Delta$ 表示集合上的概率单纯形。随后，每个玩家 $i \in N$ 独立地计算（学习）一个对其响应目标（RO）的最佳响应 $s_{i}^{\prime} \in S_{i}$。该响应目标是策略组合的函数，记为 $R O_{i}(\sigma)$。在标准PSRO中，RO可写为 $R O_{i}(\sigma)=u_{i}\left(s_{i}^{\prime}, \sigma_{-i}\right)$，通过对其关于 $s_{i}^{\prime}$ 最大化，可得到玩家 $i$ 针对其他玩家策略 $\sigma_{-i}$ 的一个最佳响应。在此过程中，其他玩家的策略 $\sigma_{-i}$ 是固定的，这使得学习玩家所处的环境是平稳的，以便计算其响应。然后，计算得到的最佳响应 $s_{i}^{\prime}$ 将被添加到该玩家在受限博弈中的策略集 $X_{i}$ 中。此过程重复进行，直到满足停止准则（例如，达到固定的迭代次数，或受限博弈NE的估计遗憾值低于某个阈值）。

### 2.2 PSRO 中的策略探索

本质上，PSRO中的博弈论分析是通过对受限博弈进行推理来完成的。期望一个受限博弈包含一个有效的策略子集以保证表示的可处理性，同时仍能在策略上很好地代表完整博弈 [Balduzzi et al., 2018]。这种以最小计算成本（即需要最少的策略）构建受限博弈的挑战被称为**策略探索问题** [Jordan et al., 2010]，它是开发PSRO方法的主要研究焦点。在PSRO中，策略探索可以通过设置MSS和RO来控制，二者具有耦合影响；我们将这种联合选择称为 **MSS-RO组合**。

给定一个特定的MSS-RO组合，策略探索的性能通常通过**遗憾**（regret）的概念来监控。玩家 $i$ 在策略组合 $\sigma$ 中的遗憾 $\rho_{i}(\sigma)$ 是该玩家在 $\sigma$ 下获得的收益与其采用最佳响应策略本可获得的收益之间的差值。形式化定义为 $\rho_{i}(\sigma)=\max _{s_{i}^{\prime} \in S_{i}} u_{i}\left(s_{i}^{\prime}, \sigma_{-i}\right)-u_{i}\left(\sigma_{i}, \sigma_{-i}\right)$。该度量反映了玩家 $i$ 从其当前在 $\sigma$ 中的混合策略单方面偏离到 $S_{i}$ 中的另一个策略所能获得的最大期望收益。在纳什均衡（NE）中，每个玩家的策略都是对其他玩家策略的最佳响应，这意味着没有玩家能通过单方面改变策略而获益。因此，一个策略组合是NE当且仅当所有玩家的遗憾均为零。此外，一个策略组合 $\sigma$ 的稳定性取决于所有玩家遗憾的聚合。基本上有两种自然的方式来聚合玩家遗憾：取遗憾的最大值或求和。具体而言，策略组合 $\sigma$ 在所有玩家上的遗憾之和，记为 $\rho(\sigma)=\sum_{i \in N} \rho_{i}(\sigma)$，被称为 **NashConv**（$\sigma$）[Lanctot et al., 2017]。$\operatorname{Nash} \operatorname{Conv}(\sigma)$ 衡量了该策略组合距离NE有多远。在两人零和博弈的背景下，$\operatorname{Nash} \operatorname{Conv}(\sigma)$ 通常被称为**可利用性**（exploitability），表示该策略组合可被对手利用的程度。第二种聚合方式是取玩家遗憾的最大值。遗憾的最大值在博弈论中比NashConv更标准，因为它直接对应于 $\epsilon$-NE 的定义（即在该策略组合中，没有玩家能通过单方面偏离获得超过 $\epsilon$ 的收益）。

在实践中，遗憾的计算需要一个精确的最佳响应oracle，这在小规模博弈中可以通过策略枚举或动态规划等方法实现。然而，在大型博弈中，计算精确的最佳响应变得不切实际。在这种情况下，会采用近似最佳响应，这提供了遗憾的一个下界。遗憾估计的准确性随着oracle质量的提高而改善。在计算资源有限的情况下，当我们无法为任何玩家找到“更好”的响应时，Oliehoek等人[2019]将得到的策略组合称为**资源受限的 $\boldsymbol{NE}$**，其解释是：“利用这些资源，我们未能反驳这是一个NE”。

### 2.3 PSRO 的强化学习视角：基于种群的训练

在PSRO中，一个受限博弈维护着一个策略种群（也称为策略，即RL智能体），并通过引入对现有种群内策略的特定分布（混合）进行响应的新策略来扩展该种群。与自我对弈（self-play）——一种标准的替代方法，其中策略直接针对自身进行训练——不同，像PSRO这样针对种群中多样化的策略集合来训练新策略，有可能增强最终策略的鲁棒性。因此，PSRO可被归类为**基于种群的训练**（population-based training）的一种变体。Albrecht等人[2024]的教科书从这个视角对PSRO提供了出色的解释。

### 2.4 本综述的组织结构

在本综述中，我们从博弈论分析的视角讨论PSRO，即给定一个特定目标，如何实施有效的策略探索。尽管策略探索的性能取决于所选择的MSS和RO之间的相互作用，但现有文献主要独立地关注MSS或RO的设置。因此，我们首先分别讨论MSS的设置（第3节）和RO的设置（第4节），以此组织我们对研究方向及相应PSRO变体的讨论。随后，在第5节，我们讨论那些研究了MSS-RO组合联合选择的工作，然后在第6节讨论如何最佳地评估此类选择对策略探索的有效性。接着，我们讨论关于提高PSRO效率的研究（第7节），探索PSRO的应用（第8节），PSRO的实现（第9节），并以开放性问题和未来研究方向（第10节）作为总结。

## 3 通过MSS进行策略探索

在先前的工作中，设置元策略求解器（MSS）是控制策略探索的主要方式。在本节中，我们讨论这些工作、它们的动机以及它们对策略探索的有效性。

### 3.1 使用标准式受限博弈的PSRO

在标准PSRO框架中，受限博弈以标准形式表示。虽然模拟通常随着时间推移通过顺序观察和决策展开，但受限博弈抽象掉了这种时间结构。

#### 使用纳什均衡及其变体作为MSS

在PSRO中，最常见的MSS目标是纳什均衡（NE），它可以基于标准式受限博弈通过各种博弈论方法计算。使用NE的PSRO本质上是使用深度强化学习来计算（近似）最佳响应的DO。因此，在关于最佳响应质量的温和假设下，使用NE的PSRO继承了DO的收敛性：在有限博弈中，只要总能以非零概率找到有益的偏离，使用NE作为MSS目标的PSRO在给定足够迭代次数后将收敛到一个NE。

**过拟合问题。** 尽管有理论上的收敛保证，但在大型博弈中实现精确收敛通常由于计算资源有限等约束而无法实现。因此，许多先前研究大型博弈中策略探索的工作都围绕着开发表现出强大实证性能（例如，在少量PSRO迭代内实现遗憾的快速收敛）的新算法。这些工作发现，阻碍良好实证性能的一个关键问题是**过拟合**。对于策略探索，过拟合可能以两种不同的方式出现。首先，策略探索可能过拟合到受限博弈的NE。由于受限博弈中的信息有限，从全局视角来看，NE可能不是一个有效的最佳响应目标（即，使用它我们可能无法为完整博弈生成非平凡的策略），而受限博弈中的其他最佳响应目标可能更有效。第二种过拟合形式涉及在一般博弈（例如，玩家数量超过两个的博弈或一般和博弈）中仅捕获一个特定的均衡，而没有充分探索整个策略空间。注意，过拟合对于任何解概念都可能是一个问题；我们在NE的背景下讨论它， specifically due to NE's prominence as the MSS target in the literature。

**防止过拟合的正则化。** 为解决过拟合问题，Lanctot等人[2017]提出了一种称为**投影复制器动态**（PRD）的MSS，它是对传统复制器动态[Taylor and Jonker, 1978]的一种改编。PRD确保在受限博弈中选择每个策略时都有一个概率下限，允许新的最佳响应不仅针对均衡支撑集内的策略进行训练，也针对支撑集外的策略进行训练。PRD可被视为一种正则化形式，以防止过拟合到受限博弈的单个精确NE。由于训练目标的多样性，PRD也提高了新策略的稳定性。

基于正则化的概念，后续研究专注于设计能通过有效正则化最佳响应目标来防止过拟合的MSS。例如，Wang等人[2019]提出了一种将NE与均匀分布相结合作为最佳响应目标的MSS，使得最佳响应针对的是混合了探索元素的NE策略。Wright等人[2019]开发了一种历史感知方法，其最佳响应目标与先前的目标相混合。在线双oracle [Dinh et al., 2022] 将PSRO与在线学习相结合，并使用在线策略组合作为最佳响应目标，这可被视为一种正则化形式。Wang和Wellman[2023b]以及Li等人[2023c]采用**量化响应均衡**（QRE）[McKelvey and Palfrey, 1995; Gemp et al., 2022]作为MSS，通过有限理性进行正则化。Wang和Wellman[2023b]采用了明确的正则化视角，并引入了**正则化复制器动态**（RRD），这是一种MSS变体，它基于遗憾标准在中间受限博弈中截断NE搜索过程。具体而言，RRD通过在受限博弈中运行RD来计算最佳响应目标，一旦当前策略组合相对于受限博弈的遗憾满足指定的遗憾阈值就停止。遗憾标准使得RRD能够支持直接控制正则化程度，并可根据特定博弈进行调整。

#### 纳什均衡之外的元策略求解器

**修正纳什均衡**  
Balduzzi等人[2019]将策略探索问题重新定义为扩大所谓"游戏版图"（gamescape）的问题，该版图描述了受限博弈所覆盖的收益空间。对于对称双玩家零和博弈，他们提出了修正纳什均衡作为元策略求解器，旨在扩展游戏版图并提升名为"有效多样性"的多样性度量。在修正纳什均衡中，最佳响应仅应用于学习玩家能够击败或战平的对手均衡策略。

**最小遗憾约束策略剖面**  
使用纳什均衡的PSRO算法中存在一个显著现象：作为评估PSRO性能指标的受限博弈纳什均衡的全局遗憾值，并不会随PSRO迭代次数增加而单调递减。在最坏情况下，全局遗憾值会持续增大直至最后一次迭代找到全局纳什均衡（具体案例可参见McAleer等人[2022b]的研究）。为解决该问题，研究者提出采用最小遗憾约束策略剖面（MRCP）[Jordan等人, 2010; Wang等人, 2022]作为元策略求解器。MRCP是指相对于全局博弈具有最小遗憾值的策略剖面³。采用MRCP作为元策略求解器的PSRO变体被称为"任意时间PSRO"，因为遗憾值会随着受限博弈的扩展而单调递减。尽管在一般博弈中计算MRCP存在困难，任意时间PSRO利用双玩家零和博弈的特性，通过针对最佳响应的遗憾最小化（RMBR）[Johanson等人, 2012]来计算MRCP。在后续研究[McAleer等人, 2022a]中，通过每次迭代向受限博弈中添加两个策略（第一个是针对MRCP的最佳响应，另一个是针对对手最新策略即上次PSRO迭代所添加策略的最佳响应）扩展了任意时间PSRO。实验表明这种改进能提升任意时间PSRO的性能。然而Wang等人[2022]指出，由于MRCP概念在任何受限博弈中都具有良好定义，任何元策略求解器都会使MRCP遗憾值单调递减，这表明仅凭单调递减MRCP遗憾值并不能证明在任意时间PSRO中使用MRCP作为元策略求解器的合理性。我们将在第6节进一步讨论策略探索的评估问题。

> ³ 在双玩家零和博弈语境中，McAleer等人[2022b]将MRCP称为最小可剥削受限分布。

**相关均衡**  
除上述问题外，Marris等人[2021]进一步指出，由于计算复杂性，纳什均衡可能并非PSRO合适的元策略求解器，甚至不能作为一般和博弈的解概念。因此他们提出使用相关均衡（CE）和粗相关均衡（CCE）作为元策略求解器，并引入了名为联合PSRO（JPSRO）的变体。由于受限博弈中存在多个（粗）相关均衡，他们选择最大化基尼不纯度的唯一（粗）相关均衡。理论分析表明JPSRO会收敛到（粗）相关均衡。Zhao等人[2023]将多样性度量与（粗）相关均衡相结合，提出了称为多样化（粗）相关均衡（DCCE）的新元策略求解器。实验证明采用DCCE的PSRO相比JPSRO及许多其他PSRO变体具有更优性能。相关研究中，团队PSRO在双团队零和博弈中通过协调装置找到了团队最大最小均衡[Celli和Gatti, 2018]——一种在团队层面定义的纳什均衡[McAleer等人, 2023]。

**博弈驱动的元策略求解器**  
除上述成熟解概念外，PSRO相关文献还研究了源自特定博弈但可泛化应用于其他博弈设置的解概念。Slumbers等人[2023]引入的风险规避均衡（RAE）即为一例，该均衡旨在管理多智能体系统中的风险。具体而言，RAE通过考量其他玩家的策略来最小化奖励的潜在方差。另一个例子是Li等人[2023c]提出的纳什议价解（NBS），这是源自议价博弈的概念作为元策略求解器。NBS可通过最大化受限博弈中玩家效用乘积来计算。

**自动化元策略求解器设计**  
与基于各种解概念和启发式方法设计元策略求解器的传统研究不同，Feng等人[2021]基于元学习提出神经自动课程（NAC），以端到端方式实现元策略求解器的自动化设计。具体而言，NAC中的元策略求解器由神经网络参数化，通过最小化最终受限博弈中元策略的遗憾值进行训练。这些受限博弈是通过采用当前元策略求解器（即当前神经网络）的PSRO，从博弈分布中采样生成的。通过这种训练机制，Feng等人[2021]证明NAC能为一系列博弈学习有效的元策略求解器。Yang等人[2021]也讨论了基于自动课程的自动化元策略求解器设计，强调在自动课程中包含行为多样性的重要性，并指出为成功现实应用设计此类自动课程面临的若干挑战。实现自动化元策略求解器设计的另一种方法是从现有元策略求解器中自适应选择以适应不同博弈或同一博弈的不同阶段。例如Li等人[2024b]应用超参数优化来学习多个元策略求解器的权重，并根据权重混合这些元策略求解器的输出作为下一个最佳响应目标。

### 3.2 基于替代博弈形式的PSRO

**扩展式博弈**  
部分PSRO变体采用扩展式而非标准式来表示受限博弈，从而为底层序贯博弈提供了包含时序行为模式与信息结构的更丰富表达。扩展式双 oracle（XDO）[McAleer等人, 2021]即为一例。XDO中的扩展式受限博弈树同样仅包含玩家策略的子集。与DO类似，其采用通过反事实遗憾最小化[Zinkevich等人, 2007]计算的纳什均衡作为元策略求解目标，而最佳响应计算将在受限博弈树的信息状态上生成新行动。需注意当某个信息状态添加新行动时，将同时添加多个策略。因此XDO的单次迭代相比DO需要更多模拟计算以评估策略剖面。周期性DO[Tang等人, 2023]通过改进受限博弈求解器的停止阈值对XDO进行了扩展。

Konicki等人[2022]的研究进一步探索了采用扩展式表示受限博弈的优势。他们证明在PSRO中使用扩展式表示时，相比利用同等模拟数据构建的标准式模型，能够更精确地逼近真实博弈。这种精度提升源于：扩展式中机会节点的模拟数据可重复使用，而标准式中每次评估策略剖面都需要重新模拟。

**平均场博弈**  
Muller等人[2022]与Wang和Wellman[2023a]将PSRO适配至平均场博弈（MFGs）。由于平均场博弈的效用函数通常不关于平均场线性化，受限平均场博弈无法显式表示。为此，Wang和Wellman[2023a]采用博弈模型学习方法[Sokota等人, 2019]——本质上是一种回归形式，通过从受限策略集及其衍生的平均场中学习效用函数。他们证明了受限平均场博弈中纳什均衡的存在性，以及PSRO在平均场博弈中向纳什均衡的收敛性。

## 4 通过响应oracle实现的策略探索

除设定元策略求解器外，学界也探索了通过建立响应oracle（RO）来指导PSRO中的策略探索。设计新型RO的主要方法是在标准RO中引入多样性度量，以增加受限博弈中的策略多样性。在众多领域的研究中[Czarnecki等人, 2020; Zahavy等人, 2023]均已证明保持策略种群多样性的重要性。

具体而言，Perez-Nieves等人[2021]提出多样化PSRO，将通过行列式点过程定义的期望基数多样性度量融入标准RO。Liu等人[2021]定义了行为多样性（BD）与响应多样性（RD）这两种不同尺度的多样性度量：BD基于不同策略给出的行动-状态覆盖距离定义，而RD衡量新策略产生的收益向量与当前受限博弈之间的距离。随后Liu等人[2022c]提出统一多样性度量以捕获多种多样性指标，并将其与标准RO结合。Yao等人[2023]发现当前用于扩展游戏版图的多样性度量未能与纳什均衡近似质量建立关联。他们通过引入种群可剥削性（PE）——本质上是MRCP的遗憾值[Wang等人, 2022]——来反映策略凸包（即受限博弈中策略的凸组合）的覆盖范围，从而将RO与纳什均衡近似质量相关联。研究证明更大的策略凸包意味着更低的PE。因此他们提出一种RO变体来扩展策略凸包，以促进策略探索。表1列出了不同多样性增强方法的具体规范。

除多样性之外，Li等人[2023c]采用蒙特卡洛树搜索（MCTS）作为最佳响应oracle，在MCTS的反向传播步骤中使用不同价值（如社会福利）更新采样路径上的节点值。这种差异化反向传播值的运用亦可视为对RO的修正。

## 5 通过联合元策略求解器-响应oracle的策略探索

一般而言，元策略求解器（MSS）与响应oracle（RO）以耦合方式共同影响策略探索。本节讨论同时调整MSS与RO的现有研究。

**$\alpha$-Rank**  
Muller等人[2020]提出采用$\alpha$-Rank[Omidshafiei等人, 2019]作为优选解概念，因其在多玩家一般和博弈中具有计算可扩展性与唯一性。为使采用$\alpha$-Rank作为MSS的PSRO收敛，他们引入了基于偏好的最佳响应oracle——该oracle本质上返回一组策略，这些策略在针对当前策略剖面的更好响应集合中能最大化$\alpha$-Rank下的概率质量。通过这种MSS-RO组合，他们证明了采用$\alpha$-Rank的PSRO会收敛到所谓的汇强连通分量，该分量描述了长期交互中的策略分布。Yang等人[2020]指出当玩家数量显著增加时，$\alpha$-Rank计算所需的马尔可夫链会变得过大，导致可扩展性问题。为应对该挑战，他们基于双oracle与随机优化开发了$\alpha$-Rank的高效实现。

**MSS与RO的联合影响研究**  
Wang与Wellman[2024]通过实证研究 explicitly 探究了MSS与RO在策略探索中的耦合影响。该研究试验了多种具有独特特性的MSS-RO组合。实验结果突显了RO在引导策略探索朝向预期目标（如更高社会福利）中的关键作用。此外他们还证明，通过精心选择MSS可进一步提升策略探索的性能。

## 6 策略探索的评估方法

除设计新颖的策略探索算法外，学界也投入大量精力研究策略探索评估的方法学问题，并提出并论证新的评估方法。在PSRO中，采用相同MSS进行策略生成与评估看似自然（多数现有PSRO探索研究即如此操作）。例如若采用纳什均衡作为策略生成的MSS，则会使用中间受限博弈的纳什均衡遗憾值作为PSRO每次迭代的性能度量。类似地，当采用均匀分布作为MSS时，策略均匀分布的遗憾值将成为性能度量指标，此时PSRO退化为虚拟博弈。

Wang与Wellman[2022]指出这种评估方法可能对MSS-RO组合的性能得出误导性结论。他们强调每个MSS-RO组合本质上会生成不同的策略序列，因此任意时间点的受限博弈都反映了不同的策略空间。不同MSS-RO组合的比较实质是在不同策略空间中进行，而简单摘要（如中间解）可能无法忠实反映这种差异。因此他们提议采用MRCP遗憾值作为评估多个MSS-RO组合性能的指标，其中MRCP是受限博弈中最接近全局纳什均衡（以遗憾值衡量）的策略剖面。这意味着策略生成所用的MSS独立于评估所用的MSS（如MRCP），在比较不同受限博弈时评估MSS应保持固定，而与生成这些博弈的MSS无关。

| 多样性度量 | 核心概念 | 多样性类型 |  | 扩展目标 |  | 兼容MSS |  |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|  |  | 行为多样性 | 响应多样性 | 游戏版图 | 策略凸包 | 纳什均衡 | $\alpha$-Rank |
| 有效多样性 [Balduzzi等人, 2019] | 修正纳什策略 |  | $\checkmark$ | $\checkmark$ |  | $\checkmark$ |  |
| 期望基数 [Perez-Nieves等人, 2021] | 行列式点过程 |  | $\checkmark$ | $\checkmark$ |  | $\checkmark$ | $\checkmark$ |
| 凸包扩展 [Liu等人, 2021] | 欧几里得投影 |  | $\checkmark$ | $\checkmark$ |  | $\checkmark$ |  |
| 占用度量失配 [Liu等人, 2021] | f-散度, 占用度量 | $\checkmark$ |  | $\checkmark$ |  | $\checkmark$ |  |
| 统一多样性度量 [Liu等人, 2022c] | 策略特征, 多样性核 |  | $\checkmark$ | $\checkmark$ |  | $\checkmark$ | $\checkmark$ |
| 策略空间多样性 [Yao等人, 2023] | Bregman散度, 序列形式 | $\checkmark$ |  |  | $\checkmark$ | $\checkmark$ |  |

表1：多样性促进方法的详细规范



## 7 训练效率的改进

PSRO中存在两个计算密集型组件：最佳响应计算与受限博弈中的收益模拟。为提升PSRO效率，学界开发了多种方法以解决这两方面的问题。

**并行化处理**  
Lanctot等人[2017]利用并行化提出深度认知层次（DCH）模型，该模型创建了一个训练层次结构，其中每个玩家针对同层级或更低层策略的受限博弈纳什均衡训练最佳响应策略（采用深度强化学习）。这种热启动式最佳响应训练相比从零开始训练显著加速了PSRO进程。受DCH启发，McAleer等人[2020]提出流水线PSRO（P2SRO）。与DCH类似，P2SRO初始化一组策略并为每个策略分配层级，随后并行地热启动训练每个策略以针对包含低层策略的受限博弈纳什均衡，从而加速PSRO的整体训练。

**样本效率提升**  
受限博弈的一个显著特征是其源自或通过模拟数据估计得到。为提高PSRO的样本效率，Smith与Wellman[2023]提出在运行PSRO的同时从模拟器学习关于博弈动态的全局模型，旨在通过查询全局模型降低模拟成本。Zhou等人[2022]针对双玩家零和博弈开发了高效PSRO（EPSRO）实现，以降低PSRO的模拟成本。其核心洞见在于：受限博弈的模拟仅用于计算最佳响应目标剖面。因此只要通过其他方式能计算最佳响应目标剖面（例如均匀分布MSS无需评估受限博弈），就无需维护完整受限博弈，从而避免不必要的模拟。

**迁移学习应用**  
迁移学习是一种将在某任务上训练的模型迁移至不同任务的机器学习技术。在PSRO中，针对不同策略生成最佳响应可视为此类任务，因此迁移学习可用于热启动训练新的最佳响应。NeuPL[Liu等人, 2022b]即运用该思想的范例，其通过共享神经网络表示策略集中的所有策略。NeuPL利用显式参数共享实现技能迁移，被证明能有效加速对对手元策略的适应过程。Liu等人[2022a]进一步推广NeuPL，通过优化针对从当前受限博弈随机采样的混合策略剖面的最佳响应，在测试时提供对多样化策略集合任意混合的近似最优性。Liu等人[2024]将NeuPL与JPSRO结合，实现了(C)CE计算中知识与PSRO的迁移。Smith等人[2023]同样利用迁移学习降低最佳响应计算中的模拟成本。其混合Oracle方法通过学习和维护针对对手纯策略的最佳响应（表示为Q值函数），随后根据元策略混合（Q值）来构建新的最佳响应。

## 8 应用领域

PSRO中的博弈论分析依赖于抽象了底层博弈结构的受限博弈。这种抽象使PSRO能够求解各类博弈或处理可被表述为博弈的问题，并在多个领域产生广泛应用。具体而言，PSRO已被应用于以下专门博弈：安全博弈[Wang等人, 2019; Wright等人, 2019; Fang, 2019; Tong等人, 2020; Xu等人, 2021; Cui和Yang, 2023]、议价博弈[Li等人, 2023c; Wang和Wellman, 2024]、Blotto上校博弈[An和Zhou, 2023]、谷歌研究足球环境[Liu等人, 2021; Song等人, 2024]、国际象棋[Zahavy等人, 2023; Li等人, 2023b]、追逃博弈[Li等人, 2023a; Li等人, 2024a]、拍卖[Li和Wellman, 2021]以及序贯拍卖机制设计[Zhang等人, 2023]——后者属于最难求解的扩展式博弈类别之一。

随着时间推移，PSRO应用已延伸至现实领域，包括卫星通信抗干扰[Zou等人, 2022]、超视距空战决策[Ma等人, 2019]、解决电力系统弹性中的功率失衡问题[Niu等人, 2021]以及组合优化中的旅行商问题[Wang等人, 2021]。其效用也体现在社交网络分析中的竞争影响力最大化策略[Ansari等人, 2019]以及选举安全防御策略开发[Yin等人, 2018]等领域。

除现实应用外，PSRO（包括双oracle方法）也被应用于可建模为博弈的领域中的新算法设计。例如PSRO框架促进了以下方向的发展：强化学习中的鲁棒策略发现[Liang等人, 2023]与策略泛化[Yang等人, 2022]、多智能体强化学习评估[Li和Wellman, 2024]、大语言模型的价值对齐[Ma等人, 2023]、公共卫生服务[Killian等人, 2023]、组合优化[Wang等人, 2024]以及图像信息发现[Giboulot等人, 2023]。

PSRO还对增强计算机视觉与结构化预测方法产生重要影响，例如通过数据增强应用于目标检测[Behpour等人, 2019a]、主动学习[Behpour等人, 2019b]、半监督多标签分类[Behpour, 2018]以及视频追踪[Fathony等人, 2018]。此外，PSRO类方法已被调整用于增强生成对抗网络（GAN）的训练[Oliehoek等人, 2019; Aung等人, 2022]。

## 9 PSRO实现方案

包含PSRO实现的两个软件库是OpenSpiel[Lanctot等人, 2019]与MALib[Zhou等人, 2023]。两者均作为综合工具集，包含多种博弈与算法，用于探索通用强化学习以及博弈中的搜索或规划。

## 10 开放研究问题

此处我们简要描述若干进一步的研究方向，更详细讨论可参阅arXiv版本。

**玩家数量可扩展性**  
在标准PSRO框架中，受限博弈以标准形式表示。随着玩家数量增加，标准形式表示会指数级扩张，导致受限博弈评估成本显著上升。虽然该问题在某些特殊博弈类型（如对称博弈）中可被缓解，但在处理极多玩家时PSRO的实用性会大幅降低。

**多重均衡问题**  
另一个重要问题涉及多重均衡的存在性与计算，尤其在一般和博弈中。当前PSRO研究主要聚焦于识别单个均衡样本，而PSRO计算多重均衡的能力仍待深入探索。

**PSRO与子博弈求解或CFR的结合**  
基于反事实遗憾最小化（CFR）和基于策略梯度的方法可能在需要精细混合决策节点的博弈中表现更优，因其能在不同博弈尺度（如定义子博弈的信息集）提供更细粒度的混合。相比之下，PSRO通常仅在博弈根节点进行混合，且仅限于受限博弈中的策略分布，可能需要大量策略才能有效实现信息集层面的混合[McAleer等人, 2021]。因此，对于无需混合的博弈环节（如复杂控制任务），使用PSRO或XDO的深度强化学习策略更为高效；而需要精细混合的决策节点则应采用基于CFR或策略梯度的技术。总体而言，可能需要构建控制混合粒度的分层PSRO结构。

**arXiv版本本章详细讨论如下：**https://arxiv.org/pdf/2403.02227  

前文概述的研究方向仍处于开放状态。接下来我们描述几个值得学界关注的进一步研究方向。

**玩家数量可扩展性**  
在标准PSRO框架中，经验博弈以标准形式表示。随着玩家数量增加，标准形式表示会指数级扩张，导致经验博弈评估成本显著上升。虽然该问题在某些特殊博弈类型（如对称博弈）中可被缓解，但在处理极多玩家时PSRO的实用性会大幅降低。一种潜在解决方案是采用博弈模型学习[Sokota等人, 2019]——本质上是效用函数回归。习得的效用函数旨在对（经验）策略空间进行外推，从而避免评估每个独立策略剖面。

另一种可行方案是使用多矩阵博弈表示。多矩阵博弈是一种多玩家博弈，每个玩家可表示为交互图中的节点。图中每条边上存在节点与其邻居进行的双矩阵博弈，每个玩家的效用即为这些双矩阵博弈收益的总和。由于具有线性表述形式，多矩阵博弈已被用于多玩家标准形式博弈的均衡计算方法中。Govindan与Wilson[2004]以及Gemp等人[2022]的研究都维护并更新了输入博弈的多矩阵近似（后者为隐式更新）。结合或提取这些方法的要素来构建基于多矩阵的经验博弈模型用于PSRO类方法，似乎具有潜在价值。

**完全并行的PSRO实现**  
最佳响应计算与经验博弈模拟均可受益于并行化。首先，玩家间的最佳响应计算具有独立性，可并行执行。其次，经验博弈中策略剖面的评估可并行化。此外，由于每个策略剖面的评估需要多次运行模拟并取平均值，这些模拟运行也可并行化。因此PSRO框架高度适合并行化处理。尽管存在这种潜力，目前尚无PSRO实现能完全利用这三个层面的并行性。

**均衡精炼**  
如第3节所述，PSRO可适配于计算各类解概念（如纳什均衡与相关均衡）。这些解通常不唯一，而博弈论中的均衡精炼领域研究如何对这些概念施加限制，使最终解更现实且能更好预测博弈的实际/应然进行方式[van Damme, 2012]。一个自然的研究方向是设计PSRO变体以计算均衡精炼。例如，采用扩展式表示的XDO自然成为开发扩展式博弈中均衡精炼方法（如寻找子博弈完美均衡）的起点。如何通过恰当选择MSS与RO使PSRO有效计算这些精炼解？

**多重均衡问题**  
另一个重要问题涉及多重均衡的存在性与计算，尤其在一般和博弈中。当前PSRO研究主要聚焦于识别单个均衡样本，而PSRO计算多重均衡的能力仍待深入探索。原则上可枚举受限博弈中的所有均衡，并分别调用最佳响应oracle进行处理。通过这种方式扩展受限博弈，可涵盖迄今收集的所有战略信息。该方法需要维护更大的受限博弈，必然要求更多计算资源，且需更高效的计算框架管理扩增的策略空间；如何最有效分配有限计算资源（在单次PSRO迭代中响应多重均衡与完成更多迭代次数之间）是一个有趣的研究问题。受限博弈中的并非所有均衡对策略探索都具有同等指导价值。我们能否提前预测这一点？

**PSRO与子博弈求解或CFR的结合**  
基于反事实遗憾最小化（CFR）和基于策略梯度的方法可能在需要精细混合决策节点的博弈中表现更优，因其能在不同博弈尺度（如定义子博弈的信息集）提供更细粒度的混合。相比之下，PSRO通常仅在博弈根节点进行混合，且仅限于受限博弈中的策略分布，可能需要大量策略才能有效实现信息集层面的混合[McAleer等人, 2021]。因此，对于无需混合的博弈环节（如复杂控制任务），使用PSRO或XDO的深度强化学习策略更为高效；而需要精细混合的决策节点则应采用基于CFR或策略梯度的技术。总体而言，可能需要构建控制混合粒度的分层PSRO结构。

此外，PSRO可与子博弈求解方法结合。子博弈求解方法（亦称搜索方法）在测试时使用额外计算资源分析并改进给定信息集上的策略，且不增加可剥削性。某些方法（如深度受限子博弈求解[Brown等人, 2018]）已通过添加最佳响应迭代扩展策略空间。将PSRO在全局博弈中学习的最佳响应与子博弈求解中用于子博弈处理的最佳响应相结合，将是一个有价值的研究方向。

**自动化超参数调优**  
超参数普遍存在于PSRO变体中，包括投影复制动力学中策略使用概率的下界[Lanctot等人, 2017]、RRD中的遗憾阈值[Wang和Wellman, 2023b]、采用均匀分布MSS的概率[Wang等人, 2019]以及多样性正则化项的权重[Perez-Nieves等人, 2021]。这些超参数通常需要针对特定博弈进行精心调试，需为不同超参数选择多次运行相同实验，成本高昂。尽管部分超参数可通过启发式方法设置（如采用简单退火方案），但如何自动高效地调优超参数仍是开放问题。具体而言：能否设计这些超参数的自动调整方案，使PSRO无需人工针对特定博弈微调即可直接应用于任意博弈？作为最新尝试，Li等人[2024b]提出学习用于超参数优化的策略，可在博弈求解过程中自动选择PSRO的最优超参数值。他们特别指出，训练良好的策略可泛化至不同博弈，从而降低PSRO应用于各类博弈时的超参数调优成本。

**结合大语言模型的PSRO**  
大语言模型（LLMs）的最新成就已引起多个研究领域的广泛关注。在多智能体系统研究中，学者们探索了将LLMs与博弈论原理结合的多种方法，各具不同目标。一个研究方向是利用博弈论方法增强LLMs能力，例如在存在其他智能体时生成战略响应[Gemp等人, 2024]，或促进与人类价值的对齐[Ma等人, 2023]。反之，LLMs也可被整合至现有博弈论框架中，扩展适用领域范围。由于PSRO提供了灵活的博弈论框架，其与LLMs双向结合的潜力值得在未来工作中关注与研究。

## Acknowledgements

We thank Marc Lanctot, Karl Tuyls, Michael P. Wellman, Yaodong Yang, and their students, for their invaluable advice on improving the survey.

## References

[Albrecht et al., 2024] S. V. Albrecht, F. Christianos, and L. Schäfer. Multi-Agent Reinforcement Learning: Foundations and Modern Approaches. MIT Press, 2024.

[An and Zhou, 2023] Z. An and L. Zhou. Double Oracle Algorithm for Game-Theoretic Robot Allocation on Graphs. arXiv:2312.11791, 2023.

[Angeline et al., 1993] P. J. Angeline, J. B. Pollack, and Others. Competitive Environments Evolve Better Solutions for Complex Tasks. In ICGA, 1993.

[Ansari et al., 2019] A. Ansari, M. Dadgar, A. Hamzeh, J. Schlötterer, and M. Granitzer. Competitive influence maximization: integrating budget allocation and seed selection. arXiv:1912.12283, 2019.

[Aung et al., 2022] A. P. P. Aung, X. Wang, R. Yu, B. An, S. Jayavelu, and X. Li. DO-GAN: A Double Oracle Framework for Generative Adversarial Networks. In CVRP, 2022.

[Avis et al., 2010] D. Avis, G. D. Rosenberg, R. Savani, and B. Von Stengel. Enumeration of nash equilibria for twoplayer games. Economic theory, 42, 2010.

[Balduzzi et al., 2018] D. Balduzzi, K. Tuyls, J. Pérolat, and T. Graepel. Re-evaluating evaluation. In NIPS, 2018.

[Balduzzi et al., 2019] D. Balduzzi, M. Garnelo, Y. Bachrach, W. Czarnecki, J. Perolat, M. Jaderberg, and T. Graepel. Open-ended learning in symmetric zero-sum games. In ICML, 2019.

[Behpour et al., 2019a] S. Behpour, K. M. Kitani, and B. D. Ziebart. ADA: Adversarial data augmentation for object detection. In WACV, 2019.

[Behpour et al., 2019b] S. Behpour, A. Liu, and B. Ziebart. Active learning for probabilistic structured prediction of cuts and matchings. In ICML, 2019.

[Behpour, 2018] S. Behpour. Arc: Adversarial robust cuts for semi-supervised and multi-label classification. In CVPR, 2018.

[Benders, 1962] J. F. Benders. Partitioning procedures for solving mixed-variables programming problems. Numerische Mathematik, 4, 1962.

[Brown, 1951] G. W. Brown. Iterative solution of games by fictitious play. Act. Anal. Prod Allocation, 13, 1951.

[Celli and Gatti, 2018] A. Celli and N. Gatti. Computational results for extensive-form adversarial team games. In AAAI, 2018.

[Cui and Yang, 2023] J. Cui and X. Yang. Macta: A multiagent reinforcement learning approach for cache timing attacks and detection. ICLR, 2023.

[Czarnecki et al., 2020] W. M. Czarnecki, G. Gidel, B. Tracey, K. Tuyls, S. Omidshafiei, D. Balduzzi, and M. Jaderberg. Real world games look like spinning tops. In NeurIPS, 2020.

[Dinh et al., 2022] L. C. Dinh, S. M. McAleer, Z. Tian, N. Perez-Nieves, O. Slumbers, D. H. Mguni, J. Wang, H. B. Ammar, and Y. Yang. Online double oracle. TMLR, 2022.

[Fang, 2019] F. Fang. Integrate learning with game theory for societal challenges. In IJCAI, 2019.

[Fathony et al., 2018] R. Fathony, S. Behpour, X. Zhang, and B. Ziebart. Efficient and consistent adversarial bipartite matching. In ICML, 2018.

[Feng et al., 2021] X. Feng, O. Slumbers, Z. Wan, B. Liu, S. McAleer, Y. Wen, J. Wang, and Y. Yang. Neural autocurricula in two-player zero-sum games. In NeurIPS, 2021.

[Ficici and Pollack, 2003] S. G. Ficici and J. B. Pollack. A game-theoretic memory mechanism for coevolution. In GECCO, 2003.

[Gemp et al., 2022] I. Gemp, R. Savani, M. Lanctot, Y. Bachrach, T. W. Anthony, R. Everett, A. Tacchetti, T. Eccles, and J. Kramár. Sample-based approximation of nash in large many-player games via gradient descent. In AAMAS, 2022.

[Giboulot et al., 2023] Q. Giboulot, T. Pevnỳ, and A. D. Ker. The non-zero-sum game of steganography in heterogeneous environments. IEEE Transactions on Information Forensics and Security, 2023.

[Johanson et al., 2012] M. Johanson, N. Bard, N. Burch, and M. Bowling. Finding optimal abstract strategies in extensive-form games. In $A A A I, 2012$.

[Jordan et al., 2010] P. R. Jordan, L. J. Schvartzman, and M. P. Wellman. Strategy exploration in empirical games. In AAMAS, 2010.

[Killian et al., 2023] J. A. Killian, A. Biswas, L. Xu, S. Verma, V. Nair, A. Taneja, A. Hegde, N. Madhiwalla, P. R. Diaz, S. Johnson-Yu, and Others. Robust planning over restless groups: engagement interventions for a largescale maternal telehealth program. In $A A A I, 2023$.

[Konicki et al., 2022] C. Konicki, M. Chakraborty, and M. P. Wellman. Exploiting extensive-form structure in empirical game-theoretic analysis. In WINE, 2022.

[Lanctot et al., 2017] M. Lanctot, V. Zambaldi, A. Gruslys, A. Lazaridou, K. Tuyls, J. Pérolat, D. Silver, and T. Graepel. A Unified Game-Theoretic Approach to Multiagent Reinforcement Learning. NIPS, 2017.

[Lanctot et al., 2019] M. Lanctot, E. Lockhart, J.-B. Lespiau, V. Zambaldi, S. Upadhyay, J. Pérolat, S. Srinivasan, F. Timbers, K. Tuyls, S. Omidshafiei, et al. Openspiel: A framework for reinforcement learning in games. arXiv preprint arXiv:1908.09453, 2019.

[Li and Wellman, 2021] Z. Li and M. P. Wellman. Evolution strategies for approximate solution of Bayesian games. In AAAI, 2021.

[Li and Wellman, 2024] Z. Li and M. P. Wellman. A metagame evaluation framework for deep multiagent reinforcement learning. In IJCAI, 2024.

[Li et al., 2023a] S. Li, X. Wang, Y. Zhang, W. Xue, J. Černỳ, and B. An. Solving large-scale pursuit-evasion games using pre-trained strategies. In $A A A I, 2023$.

[Li et al., 2023b] Y. Li, K. Xiong, Y. Zhang, J. Zhu, S. Mcaleer, W. Pan, J. Wang, Z. Dai, and Y. Yang. Jiangjun: Mastering Xiangqi by tackling non-transitivity in two-player zero-sum games. TMLR, 2023.

[Li et al., 2023c] Z. Li, M. Lanctot, K. R. McKee, L. Marris, I. Gemp, D. Hennes, P. Muller, K. Larson, Y. Bachrach, and M. P. Wellman. Combining Tree-Search, Generative Models, and Nash Bargaining Concepts in GameTheoretic Reinforcement Learning. arXiv:2302.00797, 2023.

[Li et al., 2024a] P. Li, S. Li, X. Wang, J. Cerny, Y. Zhang, S. McAleer, H. Chan, and B. An. Grasper: A generalist pursuer for pursuit-evasion problems. In AAMAS, 2024.

[Li et al., 2024b] P. Li, S. Li, C. Yang, X. Wang, X. Huang, H. Chan, and B. An. Self-adaptive psro: Towards an automatic population-based game solver. In IJCAI, 2024.

[Liang et al., 2023] Y. Liang, Y. Sun, R. Zheng, X. Liu, T. Sandholm, F. Huang, and S. McAleer. Game-theoretic robust reinforcement learning handles temporally-coupled perturbations. arXiv:2307.12062, 2023.

[Liu et al., 2021] X. Liu, H. Jia, Y. Wen, Y. Hu, Y. Chen, C. Fan, Z. Hu, and Y. Yang. Towards unifying behavioral and response diversity for open-ended learning in zerosum games. In NeurIPS, 2021.

[Liu et al., 2022a] S. Liu, M. Lanctot, L. Marris, and N. Heess. Simplex neural population learning: Anymixture bayes-optimality in symmetric zero-sum games. In ICML, 2022.

[Liu et al., 2022b] S. Liu, L. Marris, D. Hennes, J. Merel, N. Heess, and T. Graepel. NeuPL: Neural population learning. arXiv:2202.07415, 2022.

[Liu et al., 2022c] Z. Liu, C. Yu, Y. Yang, Z. Wu, Y. Li, and Others. A Unified Diversity Measure for Multiagent Reinforcement Learning. In NeurIPS, 2022.

[Liu et al., 2024] S. Liu, L. Marris, M. Lanctot, G. Piliouras, J. Z. Leibo, and N. Heess. Neural population learning beyond symmetric zero-sum games. In AAMAS, 2024.

[Long et al., 2023] W. Long, T. Hou, X. Wei, S. Yan, P. Zhai, and L. Zhang. A Survey on Population-Based Deep Reinforcement Learning. Mathematics, 11, 2023.

[Ma et al., 2019] Y. Ma, G. Wang, X. Hu, H. Luo, and X. Lei. Cooperative occupancy decision making of MultiUAV in Beyond-Visual-Range air combat: A game theory approach. IEEE Access, 8, 2019.

[Ma et al., 2023] C. Ma, Z. Yang, M. Gao, H. Ci, J. Gao, X. Pan, and Y. Yang. Red teaming game: A gametheoretic framework for red teaming language models. arXiv:2310.00322, 2023.

[Marris et al., 2021] L. Marris, P. Muller, M. Lanctot, K. Tuyls, and T. Graepel. Multi-agent training beyond zero-sum with correlated equilibrium meta-solvers. In ICML, 2021.

[McAleer et al., 2020] S. McAleer, J. B. Lanier, R. Fox, and P. Baldi. Pipeline PSRO: A scalable approach for finding approximate Nash equilibria in large games. In NeurIPS, 2020.

[McAleer et al., 2021] S. McAleer, J. B. Lanier, K. A. Wang, P. Baldi, and R. Fox. XDO: A double oracle algorithm for extensive-form games. In NeurIPS, 2021.

[McAleer et al., 2022a] S. McAleer, J. B. Lanier, K. Wang, P. Baldi, R. Fox, and T. Sandholm. Self-play psro: Toward optimal populations in two-player zero-sum games. arXiv:2207.06541, 2022.

[McAleer et al., 2022b] S. McAleer, K. Wang, M. Lanctot, J. Lanier, P. Baldi, and R. Fox. Anytime optimal psro for two-player zero-sum games. arXiv:2201.07700, 2022.

[McAleer et al., 2023] S. M. McAleer, G. Farina, G. Zhou, M. Wang, Y. Yang, and T. Sandholm. Team-PSRO for learning approximate TMECor in large team games via cooperative reinforcement learning. In NeurIPS, 2023.

[McKelvey and Palfrey, 1995] R. D. McKelvey and T. R. Palfrey. Quantal response equilibria for normal form games. Games and Economic Behavior, 10(1):6-38, 1995.

[McMahan et al., 2003] H. B. McMahan, G. J. Gordon, and A. Blum. Planning in the presence of cost functions controlled by an adversary. In ICML, 2003.

[Muller et al., 2020] P. Muller, S. Omidshafiei, M. Rowland, K. Tuyls, J. Pérolat, S. Liu, D. Hennes, L. Marris, M. Lanctot, E. Hughes, and Others. A Generalized Training Approach for Multiagent Learning. In ICLR, 2020.

[Muller et al., 2022] P. Muller, M. Rowland, R. Elie, G. Piliouras, J. Perolat, M. Lauriere, R. Marinier, O. Pietquin, and K. Tuyls. Learning Equilibria in Mean-Field Games: Introducing Mean-Field PSRO. In AAMAS, 2022.

[Niu et al., 2021] L. Niu, D. Sahabandu, A. Clark, and R. Poovendran. A game-theoretic framework for controlled islanding in the presence of adversaries. In GameSec, 2021.

[Oliehoek et al., 2006] F. A. Oliehoek, E. D. De Jong, and N. Vlassis. The parallel Nash memory for asymmetric games. In GECCO, 2006.

[Oliehoek et al., 2019] F. A. Oliehoek, R. Savani, J. Gallego, E. van der Pol, and R. Groß. Beyond local Nash equilibria for adversarial networks. In BNAIC, 2019.

[Omidshafiei et al., 2019] S. Omidshafiei, C. Papadimitriou, G. Piliouras, K. Tuyls, M. Rowland, J.-B. Lespiau, W. M. Czarnecki, M. Lanctot, J. Perolat, and R. Munos. \$\alpha\$-rank: Multi-agent evaluation by evolution. Scientific reports, 9, 2019.

[Perez-Nieves et al., 2021] N. Perez-Nieves, Y. Yang, O. Slumbers, D. H. Mguni, Y. Wen, and J. Wang. Modelling behavioural diversity for learning in open-ended games. In ICML, 2021.

[Popovici et al., 2012] E. Popovici, A. Bucci, R. P. Wiegand, and E. D. De Jong. Coevolutionary Principles, 2012.

[Sanjaya et al., 2022] R. Sanjaya, J. Wang, and Y. Yang. Measuring the non-transitivity in chess. Algorithms, 15(5):152, 2022.

[Savani and Turocy, 2024] R. Savani and T. L. Turocy. Gambit: The Package for doing Computation in Game Theory, version 16.2.0., 2024.

[Schvartzman and Wellman, 2009] L. J. Schvartzman and M. P. Wellman. Exploring large strategy spaces in empirical game modeling. In AAMAS-AMEC Workshop, 2009.

[Shoham et al., 2007] Y. Shoham, R. Powers, and T. Grenager. If multi-agent learning is the answer, what is the question? Artificial intelligence, 171, 2007.

[Slumbers et al., 2023] O. Slumbers, D. H. Mguni, S. B. Blumberg, S. M. Mcaleer, Y. Yang, and J. Wang. A gametheoretic framework for managing risk in multi-agent systems. In ICML, 2023.

[Smith and Wellman, 2023] M. O. Smith and M. P. Wellman. Co-Learning Empirical Games and World Models. arXiv:2305.14223, 2023.

[Smith et al., 2023] M. O. Smith, T. Anthony, and M. P. Wellman. Strategic knowledge transfer. JMLR, 24, 2023.

[Sokota et al., 2019] S. Sokota, C. Ho, and B. Wiedenbeck. Learning deviation payoffs in simulation-based games. In AAAI, 2019.

[Song et al., 2024] Y. Song, H. Jiang, Z. Tian, H. Zhang, Y. Zhang, J. Zhu, Z. Dai, W. Zhang, and J. Wang. An empirical study on google research football multi-agent scenarios. Machine Intelligence Research, pages 1-22, 2024.

[Tang et al., 2023] X. Tang, L. C. Dinh, S. M. Mcaleer, and Y. Yang. Regret-minimizing double oracle for extensiveform games. In ICML, 2023.

[Taylor and Jonker, 1978] P. D. Taylor and L. B. Jonker. Evolutionary stable strategies and game dynamics. Mathematical biosciences, 40, 1978.

[Tong et al., 2020] L. Tong, A. Laszka, C. Yan, N. Zhang, and Y. Vorobeychik. Finding needles in a moving haystack: Prioritizing alerts with adversarial reinforcement learning. In \$A A A I, 2020\$.

[Tuyls and Weiss, 2012] K. Tuyls and G. Weiss. Multiagent learning: Basics, challenges, and prospects. Ai Magazine, 33(3):41-41, 2012.

[Vinyals et al., 2019] O. Vinyals, I. Babuschkin, et al. Grandmaster level in StarCraft II using multi-agent reinforcement learning. Nature, 575, 2019.

[von Stengel, 2002] B. von Stengel. Computing equilibria for two-person games. In Handbook of game theory with economic applications, volume 3. Elsevier, 2002.

[Wang and Wellman, 2023a] Y. Wang and M. P. Wellman. Empirical Game-Theoretic Analysis for Mean Field Games. In AAMAS, 2023.

[Wang and Wellman, 2023b] Y. Wang and M. P. Wellman. Regularization for Strategy Exploration in Empirical Game-Theoretic Analysis. arXiv:2302.04928, 2023.

[Wang and Wellman, 2024] Y. Wang and M. P. Wellman. Generalized response objectives for strategy exploration in empirical game-theoretic analysis. In AAMAS, 2024.

[Wang et al., 2019] Y. Wang, Z. R. Shi, L. Yu, Y. Wu, R. Singh, L. Joppa, and F. Fang. Deep reinforcement learning for green security games with real-time information. In AAAI, 2019.

[Wang et al., 2021] C. Wang, Y. Yang, O. Slumbers, C. Han, T. Guo, H. Zhang, and J. Wang. A game-theoretic approach for improving generalization ability of tsp solvers. arXiv preprint arXiv:2110.15105, 2021.

[Wang et al., 2022] Y. Wang, Q. Ma, and M. P. Wellman. Evaluating strategy exploration in empirical gametheoretic analysis. In AAMAS, 2022.

[Wang et al., 2024] C. Wang, Z. Yu, S. McAleer, T. Yu, and Y. Yang. Asp: Learn a universal neural solver! IEEE Transactions on Pattern Analysis and Machine Intelligence, 2024.

[Wellman et al., 2024] M. P. Wellman, K. Tuyls, and A. Greenwald. Empirical game-theoretic analysis: A survey. arXiv preprint arXiv:2403.04018, 2024.

[Wellman, 2006] M. P. Wellman. Methods for empirical game-theoretic analysis. In \$A A A I, 2006\$.

[Wright et al., 2019] M. Wright, Y. Wang, and M. P. Wellman. Iterated deep reinforcement learning in games: History-aware training for improved stability. In ACM EC, 2019.

[Xu et al., 2021] L. Xu, A. Perrault, F. Fang, H. Chen, and M. Tambe. Robust reinforcement learning under minimax regret for green security. In UAI, 2021.

[Yang and Wang, 2020] Y. Yang and J. Wang. An overview of multi-agent reinforcement learning from game theoretical perspective. arXiv:2011.00583, 2020.

[Yang et al., 2020] Y. Yang, R. Tutunov, P. Sakulwongtana, and H. B. Ammar. \$\alpha^{\alpha}\$-rank: Practically scaling \$\alpha\$-rank through stochastic optimisation. In AAMAS, 2020.

[Yang et al., 2021] Y. Yang, J. Luo, et al. Diverse autocurriculum is critical for successful real-world multiagent learning systems. arXiv preprint arXiv:2102.07659, 2021.

[Yang et al., 2022] C. Yang, R. Wang, X. Wang, and Z. Wang. A game-theoretic perspective of generalization in reinforcement learning. arXiv preprint arXiv:2208.03650, 2022.

[Yao et al., 2023] J. Yao, W. Liu, H. Fu, Y. Yang, S. McAleer, Q. Fu, and W. Yang. Policy space diversity for non-transitive games. arXiv:2306.16884, 2023.

[Yin et al., 2018] Y. Yin, Y. Vorobeychik, B. An, and N. Hazon. Optimal defense against election control by deleting voter groups. Artificial Intelligence, 259, 2018.

[Zahavy et al., 2023] T. Zahavy, V. Veeriah, S. Hou, K. Waugh, M. Lai, E. Leurent, N. Tomasev, L. Schut, D. Hassabis, and S. Singh. Diversifying AI: Towards creative chess with AlphaZero. arXiv preprint arXiv:2308.09175, 2023.

[Zhang and Sandholm, 2024] B. H. Zhang and T. Sandholm. Exponential lower bounds on the double oracle algorithm in zero-sum games. In IJCAI, 2024.

[Zhang et al., 2023] B. Zhang, G. Farina, I. Anagnostides, F. Cacciamani, S. McAleer, A. Haupt, A. Celli, N. Gatti, V. Conitzer, and T. Sandholm. Computing optimal equilibria and mechanisms via learning in zero-sum extensiveform games. In NeurIPS, 2023.

[Zhao et al., 2023] Z. Zhao, M. Wen, Y. Wen, and Y. Yang. Open-ended learning in general-sum games: The role of diversity in correlated equilibrium. 2023.

[Zhou et al., 2022] M. Zhou, J. Chen, Y. Wen, W. Zhang, Y. Yang, Y. Yu, and J. Wang. Efficient Policy Space Response Oracles. arXiv:2202.00633, 2022.

[Zhou et al., 2023] M. Zhou, Z. Wan, H. Wang, M. Wen, R. Wu, Y. Wen, Y. Yang, Y. Yu, J. Wang, and W. Zhang. Malib: A parallel framework for population-based multiagent reinforcement learning. Journal of Machine Learning Research, 24(150):1-12, 2023.

[Zinkevich et al., 2007] M. Zinkevich, M. Johanson, M. Bowling, and C. Piccione. Regret minimization in games with incomplete information. NIPS, 2007.

[Zou et al., 2022] M. Zou, J. Chen, J. Luo, Z. Hu, and S. Chen. Equilibrium Approximating and Online Learning for Anti-Jamming Game of Satellite Communication Power Allocation. Electronics, 11(21):3526, 2022.




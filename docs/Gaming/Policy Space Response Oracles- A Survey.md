# 策略空间响应预言机（PSRO）综述

Ariyan Bighashdel , Yongzhao Wang , Stephen McAleer , Rahul Savani  and Frans A. Oliehoek 

Delft University of Technology, NL

Eindhoven University of Technology, NL

The Alan Turing Institute, UK

Carnegie Mellon University, USA

University of Liverpool, UK


#### 摘要

博弈论提供了一种数学方法，用于研究多个决策者之间的相互作用。然而，经典的博弈论分析在可扩展性方面受到限制，因为策略数量庞大，无法直接应用于更复杂的场景。本综述全面介绍了一种适用于大规模博弈的框架——策略空间响应预言机（Policy Space Response Oracles, PSRO），该框架通过关注足够的策略子集，有望提高可扩展性。我们首先阐述PSRO的研究动机并提供历史背景。随后，聚焦于PSRO中的策略探索问题：如何以最小的计算代价，组建能够很好地代表原始博弈的有效策略子集。我们回顾了当前提升PSRO效率的研究方向，并探讨了PSRO在各个领域的应用。最后，我们讨论了若干开放问题与未来研究方向。

## 1 引言

在近几十年中，多智能体系统的探索一直是人工智能（AI）研究的核心焦点。多智能体系统（通常称为博弈）由多个在共享环境中交互的决策主体组成。为了理解这些主体之间的策略行为——即一个主体的最优行为依赖于其他主体的行为——博弈论提供了一个数学框架，通过纳什均衡（Nash equilibrium, NE）等解概念来定义行为稳定性。为识别此类解，人们提出了多种均衡计算方法 [von Stengel, 2002; Savani and Turocy, 2024]，既可以枚举所有均衡（例如 Avis 等人 [2010] 在双矩阵博弈中的工作），也可以寻找一个样本均衡（如双矩阵博弈的 Lemke-Howson 算法，或零和矩阵博弈的线性规划方法 [von Stengel, 2002]）。

随着博弈规模（即参与者和策略数量）的增长，枚举的计算可行性逐渐降低，人们往往转向寻找一个样本均衡。在双人零和博弈的特殊情况下（即两个玩家完全对抗的设定），一个样本均衡已经能提供有价值的洞见：它揭示了博弈的唯一价值，即第一位玩家通过采用足够强的（均衡）策略可以保证获得的收益，而不受对手策略的影响。然而，即使在零和设定下，许多源自实际应用的博弈规模仍然过大，以至于即便使用多项式时间方法求解相应的线性规划，也无法计算样本均衡。本综述主要关注的正是这些超大规模博弈。

作为传统均衡计算方法的替代方案，为了分析此类超大规模博弈，人们应用了多种学习方法。将学习方法应用于博弈被称为多智能体学习 [Shoham et al., 2007]，其中最突出的途径是多智能体强化学习（Reinforcement Learning, RL）[Albrecht et al., 2024]。与传统方法相比，学习方法减少了对整个博弈的显式表示需求，并通过交互探索博弈来构建智能体。尽管学习方法显著推动了智能体的发展，但在博弈中仍面临诸多固有挑战。例如，**智能体间的独立学习可能使环境表现为非平稳**，这对收敛性构成挑战，因为每个学习者都面对一个潜在不断变化的目标 [Tuyls and Weiss, 2012]。另一个挑战是**博弈的非传递性**，即不存在一个清晰的“更优”策略，因此有效的学习需要学习机制为每个智能体维持一个策略族。这类非传递性在各种博弈中普遍存在 [Czarnecki et al., 2020; Sanjaya et al., 2022; Li et al., 2023b]。

在这一背景下，策略空间响应预言机（PSRO）框架 [Lanctot et al., 2017] 作为传统博弈论均衡计算与学习的自然结合应运而生。在PSRO中，一个关键概念是具有估计收益的受限博弈${ }^{1}$，它是对底层完整博弈的近似。受限博弈由在特定策略集合的组合上运行的仿真所引导。该策略集合通常远小于完整博弈，因此受限博弈可以通过传统均衡计算方法进行分析。**PSRO通过引入基于当前受限博弈分析并利用学习生成的新策略，迭代地扩展受限博弈。**

///note | note
${ }^{1}$ 严格来说，通常情况下受限博弈是对完整博弈的策略空间进行约束，但其收益是“精确”的，而不是估计值。相比之下，在实践中，PSRO的实现通常会通过仿真来估计这些收益（其随机性可能来自环境）。具有估计收益的受限博弈通常被称为经验博弈（empirical game）[Wellman, 2006] 或元博弈（meta-game）[Lanctot et al., 2017]。为简便起见，在本综述中，无论收益是否被估计，我们统一使用“受限博弈”这一术语。
///

作为一种大规模博弈的通用求解器，PSRO已成功应用于多种博弈类型和不同的应用领域，从顺序拍卖的机制设计 [Zhang et al., 2023] 到鲁棒强化学习 [Liang et al., 2023]。许多PSRO变体被提出，以充分利用不同底层博弈的特性。作为其成功的显著例子，受PSRO启发的算法在大规模博弈中达到了最先进水平，例如在Barrage Stratego [McAleer et al., 2020] 和 StarCraft [Vinyals et al., 2019] 中，这些算法显著超越了人类专家和此前的AI系统。

尽管PSRO及其变体在现有多智能体学习综述中有所涉及（如 [Yang and Wang, 2020; Long et al., 2023; Albrecht et al., 2024]），但专门的PSRO综述仍然缺乏。本综述回顾了PSRO的历史发展，它源自不同研究群体，并将PSRO置于博弈求解方法的整体格局中。随后，我们介绍PSRO的最新进展，重点强调当前与未来的研究方向。


## 2 PSRO框架

PSRO框架融合了源自不同研究群体的思想。在规划领域，McMahan 等人 [2003] 首先奠定了基础，他们将马尔可夫决策过程中的鲁棒规划形式化为一个具有庞大策略空间的零和博弈。受优化中 Bender 分解 [Benders, 1962] 的启发，他们提出了双重预言机（Double Oracle, DO）算法。DO 是一种迭代算法，用于求解有限策略博弈。它维护一个受限版本的完整博弈，并通过逐步添加对当前均衡的最佳响应来扩展该受限博弈。当 DO 终止时，任何一方都无法通过单方面偏离获得额外收益，因此当前受限博弈中的均衡即为完整博弈的纳什均衡（NE）。在有限博弈中，DO 被保证收敛到一个 NE，尽管在最坏情况下，受限博弈可能包含完整博弈中的所有策略。此外，在适当的平局打破假设下，Zhang 和 Shandholm [2024] 证明了在部分可观测随机博弈和扩展式博弈中，DO 收敛需要指数级的迭代次数。

与此同时，共进化研究群体从不同的视角发展出类似的方法。共进化方法会并行进化多个（不同）物种的种群。在这种设定下，并不存在显式的适应度函数，而是某个种群成员的适应度取决于它与其他种群成员交互的表现。共进化的传统挑战包括：特征中存在非传递性循环，以及遗忘某些在进化过程中某一阶段看似无用但后来再次变得有用的特征。研究群体探索了记忆机制和博弈建模，使共进化过程能够发现作为特征混合体的 NE [Angeline et al., 1993; Popovici et al., 2012]。为克服非传递循环和遗忘特征的问题，人们设计了各种存档结构，以促进向一系列博弈论解概念的单调收敛。例如，用于对称博弈的“Nash 记忆” [Ficici and Pollack, 2003] 能够识别受限博弈中的均衡策略。这一方法通过并行 Nash 记忆（Parallel Nash Memory, PNM）[Oliehoek et al., 2006] 扩展到非对称博弈，从而拓展了标准 DO 框架，使其能够适应超越最佳响应的其他类型预言机。

PSRO 框架 [Lanctot et al., 2017] 在题为《一种多智能体强化学习的统一博弈论方法》的论文中被提出，将规划、多智能体 RL 和共进化群体的诸多思想结合为一个统一框架，同时也涵盖了经典的博弈论学习动态，例如虚拟对弈（Fictitious Play）[Brown, 1951]。从技术角度看，PSRO 在三个方面推广了 DO。首先，PSRO 引入了元策略求解器（Meta-Strategy Solver, MSS）的概念，它从当前受限博弈中提取一个策略剖面，作为下一个最佳响应的目标${ }^{2}$。这使得最佳响应的目标不再局限于 NE，从而将 PSRO 转变为一个能够推广多种经典与现代博弈论算法的通用框架。其次，PSRO 通过允许任意形式的（近似）响应预言机推广了 DO，包括搜索、规划、进化算法等（如 PNM 和其他工作中使用的 [Oliehoek et al., 2006; Li and Wellman, 2021]）。这种推广使得在拥有大量状态和动作的环境中也能进行最佳响应计算。第三，与 DO 相比，PSRO 中的剖面收益是通过仿真估计的。见图1对整个框架的描绘，并与 DO 进行对比。

///note | note
${ }^{2}$ 为简便起见，我们常常将解概念与计算该解的MSS使用同一称谓。例如，我们可能说“纳什均衡”来指代计算NE的MSS。
///

我们注意到，PSRO 框架可以被视为经验博弈论分析（Empirical Game-Theoretic Analysis, EGTA）[Wellman, 2006] 的一个实例。EGTA 包括一系列基于仿真构建和分析受限博弈的方法。关于 EGTA 的全面介绍，可参考 Wellman 等人 [2024] 的综述。作为 EGTA 与 PSRO 联系的一个具体例子，在早期的 EGTA 工作中，Schvartzman 和 Wellman [2009] 使用表格型 RL 作为最佳响应预言机（当时深度 RL 尚不存在），并将受限博弈的 NE 作为生成策略的最佳响应目标（即 MSS）。

![](https://cdn.mathpix.com/cropped/2025_08_25_cc73c6e94ea7ff68acf9g-03.jpg?height=354&width=1421&top_left_y=178&top_left_x=349) 

图1：分别展示了 DO 和 PSRO 框架。PSRO 通过引入 MSS 推广了 DO 框架，使得最佳响应目标不再局限于 NE。此外，PSRO 能够容纳多种 RO 和（近似）最佳响应预言机。



### 2.1 框架

一个标准型（又称战略型）博弈的表示形式 $\mathcal{G}=\left(N,\left(S_{i}\right),\left(u_{i}\right)\right)$ 是一个三元组，其中 $N$ 是有限的玩家集合，每个玩家都有一个非空的策略集合 $S_{i}$，以及一个效用函数 $u_{i}: \Pi_{j \in N} S_{j} \rightarrow \mathbb{R}$。受限博弈 $\hat{\mathcal{G}}_{S \downarrow X}=\left(N,\left(X_{i}\right),\left(\hat{u}_{i}\right)\right)$ 是完整博弈 $\mathcal{G}$ 的投影，玩家从受限策略集合 $X_{i} \subseteq S_{i}$ 中选择策略，效用可以通过仿真进行估计。

图1展示了DO应用于双矩阵博弈的特殊情况（左图），以及一般的PSRO框架（右图）。在PSRO中，每个玩家会初始化一个策略集合 $X_{i}$，并通过对剖面空间 $X$ 中的策略剖面进行仿真来得到效用，从而形成一个初始的受限博弈 $\hat{\mathcal{G}}_{S \downarrow X}$。在PSRO的每一次迭代中，MSS 会从当前受限博弈 $\hat{\mathcal{G}}_{S \downarrow X}$ 中指定一个剖面 $\sigma \in \Delta X$ 作为下一个最佳响应目标，其中 $\Delta$ 表示某集合上的概率单纯形。然后，每个玩家 $i \in N$ 独立地计算（学习）一个针对其响应目标（RO）的最佳响应 $s_{i}^{\prime} \in S_{i}$。RO 是一个关于策略剖面的函数，记作 $RO_{i}(\sigma)$。在标准PSRO中，RO 可以写作 $RO_{i}(\sigma)=u_{i}\left(s_{i}^{\prime}, \sigma_{-i}\right)$，对 $s_{i}^{\prime}$ 进行最大化即可得到玩家 $i$ 针对其他玩家策略 $\sigma_{-i}$ 的最佳响应。在该过程中，其他玩家的策略 $\sigma_{-i}$ 是固定的，这使得环境对学习的玩家来说是平稳的，从而能够计算出响应。之后，该最佳响应 $s_{i}^{\prime}$ 会被加入受限博弈中的策略集合 $X_{i}$。这一过程会重复进行，直到满足某个停止条件（例如，完成固定次数的迭代，或受限博弈NE的估计遗憾低于阈值）。

### 2.2 PSRO中的策略探索

本质上，PSRO中的博弈论分析是通过推理受限博弈来完成的。一个受限博弈应当包含一个有效的策略子集，以保证表示上的可处理性，同时在战略层面仍能很好地代表完整博弈 [Balduzzi et al., 2018]。如何以最小计算代价（即所需策略最少）构建受限博弈，被描述为**策略探索问题** [Jordan et al., 2010]，这是PSRO方法发展的主要研究重点。在PSRO中，策略探索可以通过设置 MSS 和 RO 来控制，两者相互耦合，我们将它们的联合选择称为MSS-RO组合。

给定一个特定的MSS-RO组合，其策略探索性能通常通过“遗憾”（regret）的概念来监控。某个策略剖面 $\sigma$ 下玩家 $i$ 的遗憾 $\rho_{i}(\sigma)$ 定义为该玩家在 $\sigma$ 下的收益与其采用最佳响应策略所能获得的收益之间的差值。形式化定义为：  

$$
\rho_{i}(\sigma)=\max _{s_{i}^{\prime} \in S_{i}} u_{i}\left(s_{i}^{\prime}, \sigma_{-i}\right)-u_{i}\left(\sigma_{i}, \sigma_{-i}\right).
$$  

该度量反映了玩家 $i$ 通过单方面偏离当前混合策略 $\sigma$ 至 $S_{i}$ 中另一策略所能获得的最大期望增益。在NE中，每个玩家的策略都是对其他玩家策略的最佳响应，这意味着没有玩家能通过单方面改变策略获益。因此，当且仅当所有玩家的遗憾为零时，一个剖面才是NE。此外，剖面 $\sigma$ 的稳定性取决于玩家遗憾的聚合。基本上有两种方式来聚合玩家遗憾：取遗憾的最大值，或取遗憾的总和。具体来说，剖面 $\sigma$ 的遗憾总和，记作 $\rho(\sigma)=\sum_{i \in N} \rho_{i}(\sigma)$，称为 NashConv ($\sigma$) [Lanctot et al., 2017]。$\operatorname{NashConv}(\sigma)$ 衡量了策略剖面距离NE的远近。在双人零和博弈的语境中，$\operatorname{NashConv}(\sigma)$ 通常被称为可利用性（exploitability），表示对手能够利用该策略剖面的程度。另一种方式是取玩家遗憾的最大值。在博弈论中，取最大值比 NashConv 更为标准，因为它直接对应于 $\epsilon$-NE 的定义（即在该剖面中，没有玩家能够通过单方面偏离获得超过 $\epsilon$ 的收益）。

在实践中，计算遗憾需要一个精确的最佳响应预言机，这在小型博弈中可以通过策略枚举或动态规划实现。然而，在大规模博弈中，精确最佳响应的计算变得不可行。在这种情况下，会采用近似的最佳响应，从而给出遗憾的下界。预言机质量越高，遗憾估计的准确性就越高。在计算资源有限的情况下，如果无法为任何玩家找到一个“更优”的响应，Oliehoek 等人 [2019] 将得到的剖面称为**资源受限NE**，其含义是：“在给定的资源下，我们未能推翻该剖面为NE的可能性”。

### 2.3 PSRO的强化学习视角：基于种群的训练

在PSRO中，受限博弈维持着一个策略种群（也称为策略族，或RL智能体），并通过引入新的策略来扩展该种群，这些新策略是针对现有种群中某个特定分布（混合）的策略作出的响应。与“自我对弈”这一常见替代方法不同，自我对弈是直接让一个策略与自己对抗，而在PSRO中，新策略是针对种群中多样化的策略集合进行训练的，这可能增强最终策略的鲁棒性。因此，PSRO可以被归类为基于种群训练的一个变体。Albrecht 等人 [2024] 的教材从这一视角对PSRO进行了出色的阐释。

### 2.4 本综述的组织结构

在本综述中，我们从博弈论分析的角度讨论PSRO，即如何在给定目标下开展有效的策略探索。尽管策略探索的性能取决于所选择的 MSS 与 RO 之间的相互作用，但现有文献主要集中于独立地设置 MSS 或 RO。因此，我们将关于研究方向和相应PSRO变体的讨论组织如下：首先分别讨论 MSS 和 RO 的设置（第3和第4节）。然后在第5节中，我们探讨研究 MSS-RO 组合的工作；接着在第6节，讨论如何最佳评估这些选择在策略探索中的有效性。随后，我们在第7节讨论提高PSRO效率的研究，在第8节探讨PSRO的应用，在第9节介绍PSRO的实现，最后在第10节总结开放问题与未来研究方向。


## 3 通过 MSS 进行策略探索

在先前的研究中，设置元策略求解器（MSS）是控制策略探索的主要方式。在本节中，我们将讨论这些研究、其动机以及它们在策略探索中的效果。

### 3.1 基于标准型受限博弈的 PSRO

在标准的PSRO框架中，受限博弈以标准型形式表示。尽管仿真通常是通过随时间推进的序列观测和决策展开的，但受限博弈抽象掉了这种时间结构。

## 使用纳什及其变体作为 MSS

在PSRO中，最常见的MSS目标是纳什均衡（NE），它可以通过基于标准型受限博弈的各种博弈论方法进行计算。采用NE的PSRO，本质上等价于在DO中使用深度RL来计算（近似的）最佳响应。因此，若对最佳响应的质量做出温和假设，采用NE作为MSS目标的PSRO继承了DO的收敛性：在有限博弈中，只要有益的偏离总是能以非零概率被发现，随着迭代次数足够多，PSRO将收敛到一个NE。

**过拟合问题。** 尽管在理论上保证了收敛，但在大规模博弈中，由于受限于计算资源等因素，实现精确收敛往往不可行。因此，许多先前关于大规模博弈中策略探索的研究，主要集中于开发新的算法，以获得强大的经验性能（例如，在少量PSRO迭代中快速降低遗憾）。这些研究发现，阻碍良好经验性能的一个关键问题是过拟合。对于策略探索，过拟合可能以两种不同的方式出现。首先，策略探索可能会过拟合于受限博弈的NE。由于受限博弈中的信息有限，该NE从全局视角来看可能不是一个有效的最佳响应目标（即使用它时，可能无法生成在完整博弈中非平凡的策略），而受限博弈中的其他最佳响应目标可能更为有效。第二种过拟合形式则与一般博弈（例如多于两名玩家或一般和博弈）中仅捕捉到一个特定的均衡有关，而没有充分探索整个策略空间。需要注意的是，过拟合问题可能出现在任何解概念中；我们在NE的语境下讨论它，主要是因为NE在文献中作为MSS目标占据主导地位。

**防止过拟合的正则化。** 为了解决过拟合问题，Lanctot 等人 [2017] 提出了一个名为投影复制子动力学（Projected Replicator Dynamics, PRD）的MSS，它是对传统复制子动力学 [Taylor and Jonker, 1978] 的改进。PRD 确保在受限博弈中选择每个策略的概率有一个下界，从而使新的最佳响应不仅能够针对均衡支持集中的策略进行训练，还能训练那些支持集之外的策略。PRD 可以被视为一种正则化方式，用于防止响应过拟合到受限博弈的单一精确NE。由于训练目标的多样性，PRD 也提升了新策略的稳定性。

在正则化概念的基础上，后续研究集中于设计能够通过有效正则化最佳响应目标来防止过拟合的MSS。例如，Wang 等人 [2019] 提出了一个MSS，它将NE与均匀分布结合为最佳响应目标，使得最佳响应能够针对一个混合了探索元素的NE策略进行训练。Wright 等人 [2019] 提出了一个考虑历史的方式，将最佳响应目标与先前目标混合。在线双重预言机 [Dinh et al., 2022] 将PSRO与在线学习结合，并使用一个在线剖面作为最佳响应目标，这可以被视为一种正则化。Wang 和 Wellman [2023b] 以及 Li 等人 [2023c] 使用了量化响应均衡（quantal response equilibrium）[McKelvey and Palfrey, 1995; Gemp et al., 2022] 作为MSS，通过有限理性进行正则化。Wang 和 Wellman [2023b] 采取了显式的正则化视角，提出了正则化复制子动力学（Regularized Replicator Dynamics, RRD），这是一个MSS变体，它基于遗憾准则在中间受限博弈中截断NE搜索过程。具体而言，RRD通过在受限博弈中运行复制子动力学（RD）来计算最佳响应目标，一旦当前剖面相对于受限博弈的遗憾满足指定阈值，就停止搜索。遗憾准则使RRD能够直接控制正则化的程度，并可根据具体博弈进行调整。


## 超越纳什的 MSS

**修正纳什（Rectified Nash）。** Balduzzi 等人 [2019] 将策略探索问题重新表述为扩展他们称之为“博弈景观”（gamescape）的问题，该景观描述了受限博弈所覆盖的收益空间。对于对称的双人零和博弈，他们提出了修正纳什作为一种MSS，旨在扩展博弈景观并提升一种称为“有效多样性”的度量。在修正纳什中，最佳响应只针对学习玩家能够战胜或打平的对手均衡策略进行。

**最小遗憾约束剖面（MRCP）。** 在采用NE作为MSS的PSRO中，一个重要的观察是：受限博弈NE的全局博弈遗憾（作为评估PSRO性能的度量）并不会随着PSRO迭代单调下降。在最坏情况下，全局博弈遗憾会持续上升，直到最后一次迭代找到全局博弈的NE（McAleer 等人 [2022b] 给出了一个例子）。为了解决这一问题，人们提出使用最小遗憾约束剖面（Minimum-Regret Constrained Profile, MRCP）[Jordan et al., 2010; Wang et al., 2022] 作为MSS。MRCP 是相对于全局博弈遗憾最小的剖面${ }^{3}$。采用MRCP作为MSS的PSRO变体被称为“任意时刻PSRO”（anytime PSRO），因为随着受限博弈的扩展，其遗憾会单调下降。尽管在一般博弈中计算MRCP较为困难，但任意时刻PSRO利用了双人零和博弈的性质，通过针对最佳响应的遗憾最小化（RMBR）[Johanson et al., 2012] 来计算MRCP。在进一步的工作中 [McAleer et al., 2022a]，任意时刻PSRO被扩展为在每次迭代中不仅加入一个策略，而是同时加入两个：一个是对MRCP的最佳响应，另一个是对对手最新策略（即上一次PSRO迭代中添加的策略）的最佳响应。这一改进被发现能够提升任意时刻PSRO的性能。然而，Wang 等人 [2022] 指出，由于MRCP的定义在任何受限博弈中都是成立的，其遗憾会在任何MSS下单调下降，这表明在任意时刻PSRO中使用MRCP作为MSS并不能单纯因为其遗憾单调下降而得到合理性支持。我们将在第6节进一步讨论策略探索的评估。

///note | note
${ }^{3}$ 在双人零和的语境下，MRCP被McAleer 等人 [2022b] 称为“最不可利用的受限分布”。
///

**相关均衡（Correlated Equilibrium）。** 除了上述问题，Marris 等人 [2021] 进一步认为，在一般和博弈中，由于计算上的难以处理，NE可能既不是PSRO合适的MSS，也不是合适的解概念。因此，他们提出利用相关均衡（CE）和粗相关均衡（CCE）作为MSS，提出了一个变体，称为联合PSRO（Joint PSRO, JPSRO）。由于在受限博弈中可能存在多个（C）CE，他们选择唯一一个使基尼不纯度（Gini impurity）最大化的（C）CE。理论分析表明，JPSRO收敛于一个（C）CE。Zhao 等人 [2023] 将多样性度量与（C）CE结合，提出了一种新的MSS，称为多样化（粗）相关均衡（DCCE）。他们展示了采用DCCE的PSRO在性能上优于JPSRO及许多其他PSRO变体。与此相关，Team-PSRO 在双队伍零和博弈中，借助协调设备找到团队极大极小均衡 [Celli and Gatti, 2018]，即在团队层面定义的NE [McAleer et al., 2023]。

**博弈驱动的 MSS。** 除了上述已被广泛研究的解概念外，PSRO的文献还研究了其他解概念，这些概念起源于特定博弈，但也可以推广应用于其他博弈设定。其中一个例子是 Slumbers 等人 [2023] 提出的风险规避均衡（Risk-Averse Equilibrium, RAE），其目标是在多智能体系统中管理风险。具体而言，RAE 通过考虑其他玩家的策略来最小化奖励的潜在方差。另一个例子是 Li 等人 [2023c] 的工作，他们提出了纳什谈判解（Nash Bargaining Solution, NBS），该概念起源于谈判博弈，并将其作为MSS。NBS可以通过最大化受限博弈中玩家效用的乘积来计算。

**自动化 MSS 设计。** 不同于以往基于各种解概念和启发式方法设计MSS的工作，Feng 等人 [2021] 提出了基于元学习的神经自适应课程（Neural Auto-Curricula, NAC），实现了端到端的MSS自动化设计。具体而言，NAC中的MSS由神经网络参数化，该神经网络通过最小化生成的受限博弈中元策略的遗憾进行训练。这些受限博弈是通过采用当前MSS（即当前神经网络）的PSRO，在从博弈分布中采样的博弈上生成的。通过这种训练机制，Feng 等人 [2021] 展示了NAC能够为一类博弈学习出有效的MSS。Yang 等人 [2021] 也讨论了基于自适应课程的自动化MSS设计，强调了在自适应课程中引入行为多样性的重要性，并提出了在为实际应用设计此类课程时需要解决的若干挑战。另一种实现自动化MSS设计的方式是自适应地在现有MSS之间进行选择，以适应不同的博弈或博弈中的不同阶段。例如，Li 等人 [2024b] 应用超参数优化来学习多个MSS之间的权重，并基于这些权重混合MSS的输出，作为下一次的最佳响应目标。


### 3.2 基于其他博弈形式的 PSRO

**扩展式博弈（Extensive-Form Games）。** 一些PSRO变体并未采用标准型表示，而是使用扩展式表示来刻画受限博弈，从而更丰富地涵盖底层序贯博弈中动作和信息的时间模式。其中一个例子是扩展式DO（XDO）[McAleer et al., 2021]。XDO中的扩展式受限博弈树同样仅包含玩家策略的一个子集。与DO类似，XDO将NE作为MSS目标，通过反事实遗憾最小化（Counterfactual Regret Minimization, CFR）[Zinkevich et al., 2007] 进行计算，而最佳响应的计算会在受限博弈树中的信息状态生成新的动作。需要注意的是，当一个新动作被加入到某个信息状态时，会同时引入多个策略。因此，在XDO中，一次迭代隐含地需要比DO更多的仿真来进行剖面评估。Periodic DO [Tang et al., 2023] 通过改进受限博弈求解器的停止阈值，对XDO进行了扩展。

Konicki 等人 [2022] 的一项研究进一步探讨了在PSRO中利用扩展式表示受限博弈的优势。他们展示了，相较于使用相同仿真数据构建的标准型模型，采用扩展式表示能够更准确地逼近真实博弈。这种精度提升源于这样一个事实：在扩展式表示中用于建模机会节点的仿真数据可以被复用，而在标准型表示中，每次评估一个剖面时都需要重新进行仿真建模。

**均场博弈（Mean-Field Games）。** Muller 等人 [2022] 以及 Wang 和 Wellman [2023a] 将PSRO推广到均场博弈（MFGs）。由于MFG的效用函数在一般情况下对均场并不线性，因此受限MFG无法被显式表示。Wang 和 Wellman [2023a] 采用了一种博弈模型学习方法 [Sokota et al., 2019]，其本质是一种回归形式，用于学习一个效用函数，该函数定义在由受限策略集合及这些策略派生出的均场上。他们证明了受限MFG中NE的存在性，以及PSRO在MFG中收敛到NE的性质。

## 4 通过 RO 进行策略探索

除了设置MSS以外，在PSRO中建立RO来引导策略探索也被文献所探讨。设计新颖RO的一种主要方式是将多样性度量引入标准RO中，旨在增加受限博弈中策略的多样性。许多领域的研究都证明了维持一个多样化的策略种群的重要性 [Czarnecki et al., 2020; Zahavy et al., 2023]。

具体来说，Perez-Nieves 等人 [2021] 提出了多样化PSRO（diverse PSRO），该方法在标准RO中引入了期望基数（expected cardinality），这是一种通过行列式点过程定义的多样性度量。Liu 等人 [2021] 定义了行为多样性（Behavioral Diversity, BD）和响应多样性（Response Diversity, RD），分别在不同尺度上衡量多样性。BD 基于不同策略给出的动作-状态覆盖之间的距离定义，而RD 衡量新策略诱导的收益向量与当前受限博弈的距离。随后，Liu 等人 [2022c] 提出了统一的多样性度量，以捕捉多种多样性指标，并将其与标准RO结合。Yao 等人 [2023] 观察到，现有用于扩展博弈景观的多样性度量未能与NE近似质量建立联系。为此，他们通过引入种群可利用性（Population Exploitability, PE）将RO与NE近似质量关联起来。PE实质上是MRCP的遗憾 [Wang et al., 2022]，用于反映策略包络（即受限博弈中策略的凸组合）的覆盖范围。他们展示了更大的策略包络意味着更低的PE。因此，他们提出了一种扩展策略包络的RO变体，旨在促进策略探索。表1总结了不同提升多样性方法的具体细节。

除了多样性之外，Li 等人 [2023c] 使用蒙特卡洛树搜索（Monte Carlo Tree Search, MCTS）作为最佳响应预言机，在MCTS的反向传播步骤中，采用不同的取值（例如社会福利）来更新路径上的节点值。采用不同的反向传播取值也可以被视为RO的一种修改形式。


## 5 通过联合 MSS-RO 进行策略探索

总体而言，MSS 和 RO 在策略探索中具有耦合效应。本节我们讨论一些同时变动 MSS 和 RO 的先前研究。

**$\alpha$-Rank。** Muller 等人 [2020] 提出采用 $\alpha$-Rank [Omidshafiei et al., 2019] 作为首选解概念，原因在于其在多玩家一般和博弈中具有计算可扩展性和唯一性。为了使采用 $\alpha$-Rank 作为 MSS 的PSRO收敛，他们引入了基于偏好的最佳响应预言机，该预言机实质上返回一组策略，这些策略是在优于当前策略剖面的响应集合中，使得在 $\alpha$-Rank 下概率质量最大化的策略。通过该 MSS-RO 组合，他们证明了采用 $\alpha$-Rank 的PSRO收敛到所谓的“汇点强连通分量”（sink strongly-connected component），它描述了长期交互中策略的分布。Yang 等人 [2020] 指出，当玩家数量显著增加时，计算 $\alpha$-Rank 所需的马尔可夫链规模变得过于庞大，从而引发可扩展性问题。为应对这一挑战，他们基于 DO 和随机优化开发了一个高效的 $\alpha$-Rank 实现。

**研究 MSS 与 RO 的联合影响。** Wang 和 Wellman [2024] 的一项实证研究明确考察了 MSS 与 RO 在策略探索中的耦合效应。他们实验了许多具有不同特性的 MSS-RO 组合。实验结果强调了 RO 在引导策略探索达到预期目标（如更高社会福利）方面的关键作用。此外，他们展示了通过谨慎选择 MSS，还可以进一步提升策略探索的性能。

## 6 策略探索的评估

除了设计新的策略探索算法外，大量研究工作还集中在探讨评估策略探索的方法论问题，并提出和验证新的评估方法。在PSRO中，看起来很自然的一种做法是：策略生成与评估都使用相同的 MSS，这也是许多先前关于PSRO探索的工作所采用的方法。例如，如果 NE 被用作策略生成的 MSS，那么在PSRO的每次迭代中，受限博弈 NE 的遗憾就会被用作性能度量。类似地，当均匀分布被用作 MSS 时，策略均匀分布的遗憾将作为性能度量，此时PSRO等价于虚拟对弈。

Wang 和 Wellman [2022] 认为，这种评估方法可能会对 MSS-RO 组合的性能得出误导性结论。他们强调，每个 MSS-RO 组合实际上都会生成一个不同的策略序列，因此在任何时刻，受限博弈反映的都是一个独特的策略空间。不同 MSS-RO 组合之间的比较实际上是在不同的策略空间上进行的，而这种比较未必能被一个简单的中间解总结所忠实反映。因此，他们提出使用 MRCP 的遗憾作为评估指标，其中 MRCP 是受限博弈中距离完整博弈 NE（按遗憾度量）最近的剖面。换句话说，用于策略生成的 MSS 与用于评估的 MSS（例如 MRCP）是相互独立的；当比较不同的受限博弈时，评估 MSS 应该保持固定，而不论这些受限博弈是由哪种 MSS 生成的。

| 多样性度量 | 概念 | 多样性类型 |  | 扩展目标 |  | 兼容 MSS |  |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|  |  | 行为型 | 响应型 | 博弈景观 | 策略包络 | Nash | $\alpha$-Rank |
| 有效多样性 [Balduzzi et al., 2019] | 修正纳什策略 |  | $\checkmark$ | $\checkmark$ |  | $\checkmark$ |  |
| 期望基数 [Perez-Nieves et al., 2021] | 行列式点过程 |  | $\checkmark$ | $\checkmark$ |  | $\checkmark$ | $\checkmark$ |
| 凸包扩展 [Liu et al., 2021] | 欧几里得投影 |  | $\checkmark$ | $\checkmark$ |  | $\checkmark$ |  |
| 占用测度不匹配 [Liu et al., 2021] | f-散度，占用测度 | $\checkmark$ |  | $\checkmark$ |  | $\checkmark$ |  |
| 统一多样性度量 [Liu et al., 2022c] | 策略特征，多样性核 |  | $\checkmark$ | $\checkmark$ |  | $\checkmark$ | $\checkmark$ |
| 策略空间多样性 [Yao et al., 2023] | Bregman 散度，序列形式 | $\checkmark$ |  |  | $\checkmark$ | $\checkmark$ |  |

表1：促进多样性方法的具体说明。

## 7 训练效率的改进

在PSRO中，有两个部分在计算上较为耗费资源：最佳响应计算和受限博弈中的收益仿真。为提升PSRO的效率，研究人员围绕这两个方面开发了多种方法。

**并行化。** 借助并行化，Lanctot 等人 [2017] 提出了深度认知层级（Deep Cognitive Hierarchy, DCH）模型，它创建了一个训练层级，每个玩家在该层级中训练一个最佳响应策略（通过深度RL），对象是包含同层级或更低层级策略的受限博弈NE。这种方式为最佳响应训练提供了“热启动”，相比从零开始训练最佳响应，加速了PSRO。受DCH启发，McAleer 等人 [2020] 提出了流水线PSRO（Pipeline PSRO, P2SRO）。与DCH类似，P2SRO初始化一批策略，并为每个策略分配层级。然后，P2SRO并行地热启动训练每个策略，其对象是包含更低层级策略的受限博弈NE，从而加速了PSRO的整体训练。

**样本效率。** 受限博弈的一个显著特征是它们源于或基于仿真数据进行估计。为了提升PSRO的样本效率，Smith 和 Wellman [2023] 提出了在运行PSRO的同时，从仿真器中学习完整博弈的动态模型，以减少通过查询完整博弈模型的仿真开销。Zhou 等人 [2022] 为双人零和博弈开发了一种高效的PSRO（Efficient PSRO, EPSRO）实现，以减少PSRO的仿真开销。其关键洞见在于，受限博弈中的仿真仅用于计算最佳响应目标剖面。因此，只要能够通过其他方式计算最佳响应目标剖面（例如，均匀MSS不需要评估受限博弈），就无需维护完整的受限博弈，从而避免了不必要的仿真。

**迁移学习。** 迁移学习是一种机器学习技术，即将训练于一个任务的模型复用于另一个任务。在PSRO中，针对不同策略的最佳响应可以被视为此类任务，因此可以应用迁移学习来热启动新最佳响应的训练。利用这一思想的一个例子是 NeuPL [Liu et al., 2022b]，它通过共享神经网络来表示策略集合中的所有策略。NeuPL 采用显式参数共享实现技能迁移，有效加快了对手元策略的适应。Liu 等人 [2022a] 进一步推广了NeuPL，通过针对从当前受限博弈中随机采样的混合策略剖面优化最佳响应，使其在测试时对任何多样化策略集合的混合都近似最优。Liu 等人 [2024] 将NeuPL与JPSRO结合，实现了在PSRO中计算（C）CE时的知识迁移。Smith 等人 [2023] 也利用迁移学习来降低计算最佳响应的仿真成本。他们的混合预言机方法（Mixed-Oracle）通过学习并维护对手纯策略的最佳响应（表示为Q值函数），再根据元策略对Q值进行混合，从而构建新的最佳响应。

## 8 应用

PSRO中的博弈论分析依赖于受限博弈，而受限博弈抽象掉了底层的博弈结构。这种抽象使得PSRO能够求解多种博弈，或处理那些可以建模为博弈的问题，从而在不同领域产生了大量应用。具体来说，PSRO已被应用于一些特殊博弈，包括安全博弈 [Wang et al., 2019; Wright et al., 2019; Fang, 2019; Tong et al., 2020; Xu et al., 2021; Cui and Yang, 2023]、谈判博弈 [Li et al., 2023c; Wang and Wellman, 2024]、Blotto上校博弈 [An and Zhou, 2023]、Google Research Football 环境 [Liu et al., 2021; Song et al., 2024]、国际象棋 [Zahavy et al., 2023; Li et al., 2023b]、追逃博弈 [Li et al., 2023a; Li et al., 2024a]、拍卖 [Li and Wellman, 2021] 以及顺序拍卖的机制设计 [Zhang et al., 2023]，这些都是最难解决的一类扩展式博弈。

此外，PSRO 的应用逐渐扩展到现实世界领域，包括卫星通信中的抗干扰 [Zou et al., 2022]、超视距空战中的决策制定 [Ma et al., 2019]、解决电力系统韧性中的电力失衡问题 [Niu et al., 2021]，以及组合优化中的旅行商问题 [Wang et al., 2021]。PSRO的价值同样体现在社交网络分析中，用于竞争性影响力最大化策略 [Ansari et al., 2019]，以及选举安全的防御策略开发 [Yin et al., 2018]。

除了这些现实应用外，PSRO（包括DO）还被用于在能够建模为博弈的领域中设计新颖算法。例如，PSRO框架促进了在强化学习中的发展，包括鲁棒策略发现 [Liang et al., 2023] 和策略泛化 [Yang et al., 2022]，多智能体RL评估 [Li and Wellman, 2024]，大语言模型的价值对齐 [Ma et al., 2023]，公共卫生服务 [Killian et al., 2023]，组合优化 [Wang et al., 2024]，以及图像信息发现 [Giboulot et al., 2023]。

PSRO还对提升计算机视觉和结构化预测方法产生了影响，例如，通过数据增强用于目标检测 [Behpour et al., 2019a]，主动学习 [Behpour et al., 2019b]，半监督多标签分类 [Behpour, 2018]，以及视频跟踪 [Fathony et al., 2018]。此外，PSRO类方法也被改进用于提升生成对抗网络（GAN）的训练 [Oliehoek et al., 2019; Aung et al., 2022]。

## 9 PSRO的实现

包含PSRO实现的两个软件库是 OpenSpiel [Lanctot et al., 2019] 和 MALib [Zhou et al., 2023]。两者都作为综合工具包，涵盖了多种博弈和算法，用于探索通用的强化学习以及博弈中的搜索与规划。

## 10 开放研究问题

在这里，我们简要描述一些进一步的研究方向。关于这些方向的更详细讨论可以在 arXiv 版本中找到${ }^{4}$。

**玩家数量的可扩展性。** 在标准PSRO框架中，受限博弈以标准型表示。随着玩家数量的增加，标准型表示会指数级膨胀，导致评估受限博弈的成本显著增加。虽然在某些特殊博弈类型（如对称博弈）中可以缓解这一问题，但在处理大量玩家时，PSRO的实用性会下降。

**多重均衡。** 另一个重要问题与多重均衡的存在性与计算相关，特别是在一般和博弈中。目前PSRO研究主要集中于识别一个样本均衡，而PSRO计算多个均衡的能力仍未得到充分探索。

**将PSRO与子博弈求解或CFR结合。** 基于CFR和基于策略梯度的方法在某些博弈中可能表现更好，尤其是在需要在许多决策节点进行精细混合时，可以在不同的博弈尺度（例如定义子博弈的信息集）上提供更细粒度的混合。相比之下，PSRO通常只在博弈根节点进行混合，局限于受限博弈中的策略分布，可能需要许多策略才能在信息集上有效混合 [McAleer et al., 2021]。因此，对于不需要混合的博弈部分（如复杂的控制任务），使用PSRO或XDO中的深度RL策略会更高效，而在需要精细混合的决策节点，则应采用基于CFR或策略梯度的方法。总体而言，可能需要一种层级化的PSRO结构，以控制混合的粒度。



以下为更详细讨论的 [The arXiv version:](https://arxiv.org/pdf/2403.02227)  

前文所概述的研究方向仍然是开放性的。接下来，我们描述几个我们认为值得研究群体关注的进一步研究方向。

**玩家数量的可扩展性。** 在标准PSRO框架中，经验博弈以标准型表示。随着玩家数量的增加，标准型表示会指数级膨胀，从而显著增加评估经验博弈的成本。虽然在某些特殊博弈类型（如对称博弈）中可以缓解这一问题，但在处理大量玩家时，PSRO的实用性会下降。一种潜在的解决方法是采用博弈模型学习 [Sokota et al., 2019]，本质上是一种效用函数回归。所得效用函数旨在跨（经验）策略空间进行外推，从而无需评估每一个剖面。

另一种可能的方法是使用多矩阵博弈（polymatrix game）表示。多矩阵博弈是一种多玩家博弈，其中每个玩家被表示为交互图中的一个节点。在该图的每条边上，节点与其邻居进行一个双矩阵博弈，每个玩家的效用为这些双矩阵博弈收益的总和。由于其线性结构，多矩阵博弈已被用于多玩家标准型博弈的均衡计算方法中。在 Govindan 和 Wilson [2004] 以及 Gemp 等人 [2022] 的工作中，输入博弈的多矩阵近似分别被维护和更新（后者是隐式的）。这些方法中似乎存在潜力，可以结合或提取其中的元素，用于构建基于多矩阵的经验博弈模型，服务于PSRO类方法。

**完全并行化的PSRO实现。** 最佳响应计算和经验博弈仿真都可以从并行化中获益。首先，玩家之间的最佳响应计算是可并行的，因为它们相互独立。其次，经验博弈中策略剖面的评估是可并行的。此外，由于每个策略剖面的评估需要多次运行仿真并对结果取平均，这些仿真运行本身也可以并行化。因此，PSRO框架非常适合并行化。尽管具有这一潜力，目前还没有PSRO实现能够充分利用这三个方面。

**均衡细化。** 如第3节所述，PSRO可以适应于计算多种解概念，如NE和CE。这些解往往不是唯一的，而博弈论中的均衡细化研究则通过对这些解概念施加约束，使其解更具现实性，并更好地预测博弈将如何/应如何进行 [van Damme, 2012]。一个自然的研究方向是设计PSRO变体来计算均衡细化。例如，使用扩展式表示的XDO是一个自然的起点，可以在扩展式博弈中开发均衡细化方法（例如寻找子博弈完美均衡）。PSRO如何通过适当选择MSS和RO来有效计算这些细化，是一个值得探讨的问题。

**多重均衡。** 另一个重要问题与多重均衡的存在性和计算相关，特别是在一般和博弈中。目前PSRO研究主要集中于识别一个样本均衡，而PSRO计算多个均衡的能力仍未得到充分探索。原则上，可以枚举受限博弈中的所有均衡，并在每次调用最佳响应预言机时使用这些均衡。这样一来，我们将以一种涵盖迄今为止收集到的所有战略信息的方式扩展受限博弈。这种方法要求维护一个更大的受限博弈，这固然需要更多的计算资源，并需要更高效的计算框架来管理扩大的策略空间；如何在单次PSRO迭代中响应多个均衡与能够完成更多迭代之间有效分配有限计算资源，是一个有趣的研究问题。并非所有受限博弈中的均衡对引导策略探索都具有同等价值。我们能否事先预测哪些均衡更有价值？

**将PSRO与子博弈求解或CFR结合。** 基于CFR和基于策略梯度的方法在某些博弈中可能表现更好，特别是在许多决策节点需要精细混合时，这些方法可以在不同博弈尺度（例如定义子博弈的信息集）上提供更细粒度的混合。相比之下，PSRO通常只在博弈根节点进行混合，局限于受限博弈中的策略分布，可能需要许多策略才能在信息集上有效混合 [McAleer et al., 2021]。因此，对于不需要混合的博弈部分（如复杂的控制任务），使用PSRO或XDO中的深度RL策略会更高效，而在需要精细混合的决策节点，应采用基于CFR或策略梯度的方法。总体而言，可能需要一种层级化的PSRO结构，以控制混合的粒度。

此外，PSRO可以与子博弈求解方法结合。子博弈求解方法（也称为搜索方法）在测试时使用额外的计算资源来分析并改进某个信息集上的策略，而不会增加可利用性。一些方法（如深度受限子博弈求解 [Brown et al., 2018]）已经通过迭代扩展策略空间来加入最佳响应。将PSRO在完整博弈中学习到的最佳响应与子博弈求解中使用的最佳响应结合起来，值得进一步研究。

**自动化超参数调优。** 在PSRO变体中，超参数普遍存在，包括投影复制子动力学中的策略选择概率下界 [Lanctot et al., 2017]，RRD中的遗憾阈值 [Wang and Wellman, 2023b]，均匀MSS的使用概率 [Wang et al., 2019]，以及多样性正则项的权重 [Perez-Nieves et al., 2021]。这些超参数往往需要多次运行相同实验、使用不同超参数选项来进行有意的调优，这可能代价高昂。尽管其中一些超参数可以通过启发式方式设定（例如采用简单的退火方案），但如何自动且高效地调优这些超参数仍是开放问题。具体而言，能否设计一种自动调整机制，使PSRO能够直接应用于任何博弈，而无需人工针对博弈进行精细调参？作为近期的一次尝试，Li 等人 [2024b] 提出通过学习一个用于超参数优化的策略，在博弈求解过程中自动选择PSRO中的最优超参数值。此外，他们强调，一个训练良好的策略可以推广到不同博弈，从而在将PSRO应用于各种博弈时减少超参数调优的成本。

**结合大语言模型的PSRO。** 大语言模型（LLMs）的最新成果已引起各研究群体的广泛关注。在多智能体系统研究中，研究人员探索了多种将LLMs与博弈论原理结合的方法，分别服务于不同的目标。其中一个研究方向是利用博弈论方法增强LLMs的能力，例如在存在其他智能体的情况下实现战略性响应 [Gemp et al., 2024]，或促进与人类价值的对齐 [Ma et al., 2023]。相反，LLMs也可以被整合到现有的博弈论框架中，扩展其适用领域。由于PSRO提供了一个灵活的博弈论框架，其与LLM结合的潜力值得注意，并应在未来研究中进行探索。




## Acknowledgements

We thank Marc Lanctot, Karl Tuyls, Michael P. Wellman, Yaodong Yang, and their students, for their invaluable advice on improving the survey.

## Contribution Statement

Ariyan Bighashdel and Yongzhao Wang contributed equally.

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




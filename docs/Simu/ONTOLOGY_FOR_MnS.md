# ONTOLOGY FOR MODELING AND SIMULATION 

## 建模仿真中的本体论

Charles Turnitsa<br>Jose J. Padilla<br>Old Dominion University<br>Virginia Modeling, Analysis \& Simulation Center<br>Norfolk, VA 23435

Andreas Tolk<br>Old Dominion University<br>Engineering Management \& Systems Engineering<br>Norfolk, VA 23529



Proceedings of the 2010 Winter Simulation Conference


#### 摘要

本文阐述了在建模与仿真（Modeling and Simulation, M\&S）中，本体论（ontology）与其他学科的不同之处，即需要以一种明确、无歧义、且可被机器读取的形式来捕捉系统的概念模型。不同于信息系统（Information Systems）和医学（Medicine）等学科中基于需求出发的本体论应用，M\&S中的本体论不是从一组需求出发，而是基于建模者所提出的研究问题。因此，本文采用符号学三角形（semiotic triangle）来说明，不同实现的本体论实际上是不同概念模型的表征，而这些表征之间的共性取决于所提出的研究问题。本体论可用于更好地捕捉建模者的视角。本文建议在过程中引入本体论（ontological）、认识论（epistemological）和目的论（teleological）的考量。这些考量有助于更好地区分概念化，对于计算机而言，这对模型的使用、复用、可组合性以及仿真的互操作性具有重要意义。

## 1 引言

传统上，本体论表示（ontological representation），也称为本体论（ontology），是对现实世界中某一系统的规范描述。对于信息系统（information systems，而非哲学）的本体论表示，最常被引用的定义之一是“共享概念化的形式化、明确的规范”（Gruber, 1993）。在该定义中，概念化几乎存在于任何人工制品背后（无论是计算机程序、模型，还是一张图表），而其规范则会因预期用途的不同而大相径庭。此外，共享概念化的思想假设了一个共同的参照框架或视角，但这一框架或视角会因建模者而异。

本体论的用途被归纳为一个四类框架（Uschold and Jasper 1999），而这些类别也同样适用于M\&S的使用（Turnitsa and Tolk 2006）。这四类框架为：

- 基于本体论的搜索（Ontology-based search）—— 用于信息或组件的发现与选择。
- 中立创作（Neutral authoring）—— 尤其适用于系统间的数据交换。
- 作为规范的本体论（Ontology as specification）—— 用于描述某一领域的含义，以指导系统开发。
- 信息的共同访问（Common access to information）—— 比中立创作更进一步，使意义能够被传递，而不仅仅是匹配。

第一类和第二类的本体论旨在帮助自动机执行搜索与选择，以及有意义的信息交换等任务。第三类和第四类的本体论则主要生成供人类使用的人工制品：前者为系统开发提供规范，后者则用于基于知识的定义系统。然而，在整个社区中，所有四类情况都被用于展示已实现的仿真或仿真组件中的语义意义，而不是用于概念模型（Conceptual Model, CM），因为CM已被公认为M\&S应用开发的核心部分（Balci and Ormsby 2007）。例如，离散事件建模本体论（Discrete Event Modeling Ontology, DeMO）和面向组件的建模与仿真本体论（Component Oriented Simulation and Modeling Ontology, COSMO）的应用均体现了对已实现仿真的关注。

在DeMO的一次成功应用中（Silver, Hassan, and Miller 2007），该本体论被同时用于基于本体论的搜索和中立创作两类应用中。它帮助识别并连接来自医学本体论表示中的元素，并将其与离散事件系统结合。在这两种情况下，医学本体论表示和离散事件系统的人工制品都是已实现的系统。尽管这些系统的开发基于概念模型，但DeMO应用并未连接这些模型。COSMO在CODES项目中（Teo and Szabo 2007）被用作基于本体论的搜索工具，帮助定位与可组合离散事件仿真（Composable Discrete Event Simulation）所需语义相匹配的组件。同样，它被正确地用于定位和选择已实现的组件，因此所描述的是其功能效用，而不是设计过程中的建模决策和假设。

这种在建模导向与实现导向之间的区分，如前述实例所示，对于M\&S而言非常重要。

建模与仿真由两部分组成：建模位于抽象层面，而仿真位于实现层面。在建模中，我们回答“我们建模什么”；在仿真中，我们回答“我们如何建模”。为了能够进行建模，我们还需要明确“我们为什么建模”（即建模者的意图），这一点由实验框架或模型背景中提出的需求，或学术研究中的研究问题所决定。在M\&S和其他学科中，本体论都需要以计算机可理解的形式来捕捉现实。然而，在M\&S中，这一现实取决于建模者和其研究问题。换言之，本文的重点在于通过本体论支持研究问题的提出和建模过程，而不是聚焦于仿真本身。

本文的结构如下：第二部分阐述为何M\&S中的本体论应区别于其他学科的应用；第三部分提出建模者在建模过程中需要关注的若干考量，这些考量应当被纳入概念模型；第四部分展示这些考量在可组合性和互操作性上的意义；最后，第五部分给出结论与总结。


## 2 建模与仿真中的本体论

首先，作者采取了与Raubal和Kuhn（2004）相似的观点，即区分作为哲学范畴、处理存在问题的本体论（Ontology），与作为系统表示范畴、处理系统内容与知识编码的本体论（ontologies）。本文关注的是后者，这对于信息技术、建模与仿真（Modeling and Simulation, M\&S）以及系统工程等领域的研究更为合适。这一区分同样源于Guarino（1998）的建议：哲学层面使用“Ontology”（强调意向性），而将用于捕捉系统知识的方法称为“ontologies”。在本文中，我们将使用“本体论表示（ontological representation）”，或简称“本体论（ontology）”（其复数形式为ontologies；Ontology作为对现实的研究本身没有复数形式），以指代后一种意义。

### 2.1 不同的现实描述：符号学三角形

在语言学和语言元素及其意义研究中，有一个重要的思想，即符号学三角形（semiotic triangle）。这一概念由Ogden和Richards（1923）提出，源自历史上一系列类似的思想。亚里士多德区分了对象、指称对象的词语以及我们所认为的理想类型。弗雷格（Frege）提出对象（指称物, referent）的Bedeutung、概念（concept）的Sinn，以及表征该概念的符号（symbol, Zeichen）。Sowa（2000）对这些思想进行了整理。其共同点在于区分：何为真实、被观察或假设的对象；如何被感知和建模；以及如何被表征。

符号学三角形的基本思想是：当我们希望交流某个指称物时，首先需要意识到该指称物；接着形成对该指称物的概念化（conceptualization）；最后选择或创造某种符号（如词语、图像）来代表该概念化。这三个要素分别构成三角形的顶点——指称物（referent）、概念化（conceptualization）与符号（symbol）。三条连接边可以理解为：（1）概念化是否能够充分捕捉指称物；（2）符号是否正确地代表了概念化；（3）符号是否被理解为指称物的代理。虽然我们假设是在交流指称物，但实际上我们是在通过符号交流我们对其的概念化。

其在建模中的应用是：模型是对指称物的概念化，而仿真是将该概念化表达为一个可判定的系统。更进一步，概念化成为仿真的现实：指称物本身已不可及，符号、标签或标识，以及已实现的结构和能力，才是用来回答研究问题的工具。从形式上讲，这种三角形的遍历过程代表了整个“指称物-模型-仿真”的过程，有助于区分模型的抽取过程与仿真的选择过程（即两种范式的差异）。从第二或第三个节点单独来看，可以发现三角形几乎以“分形”方式存在。例如，在构建模型时，原始指称物是第一个节点，与模型相关的指称物特征的概念化是第二个节点，最后的输出（即符号）是模型本身。同样，这一过程也适用于从模型到仿真的序列。

由于概念化及选择符号来代表概念化的步骤属于认知行为，其视角与动机因人而异。因此，可以推导出：一个指称物会引发无数种可能的概念化，而每种概念化又可能对应无数种可能的符号。当这一点应用于建模与仿真范式时，就能理解为何一个指称物可被（基于建模者意图, modeler’s intent）表征为近乎无限的不同模型，而每个模型又可以由近乎无限的仿真来表征。

一个系统的本体论表示是对某一概念化的明确规范（Gruber 1993）。将系统背后的知识视为一种概念化，与符号学三角形中“从指称物到符号”的过程相一致（通过概念化）。由此可见，在M\&S领域中，建模指称物的行为产生了概念化，而根据Gruber（1993）的定义，本体论表示通常就是捕捉这种规范的手段。从这个角度来看，概念模型（conceptual model）可以被视为实现该模型的仿真的一种本体论表示。

### 2.2 研究问题

在大多数学科中，M\&S的工作重点在于通过模型实现来复制某种观测到的行为；而在M\&S学科中，更多的精力则集中在建模及如何捕捉系统以回答研究问题上。强调建模的意义在于通过限定模型仅回答某个研究问题来“界定”建模者的意图。这一区别可以通过Tolk等（2010）的示例更好地理解：

“自动取款机（Automatic Teller Machine, ATM）在某种程度上可视为真实柜员的代表，因为它能执行许多类似的交互，包括必要的输入和输出。然而在M\&S系统中，仅凭输入和输出的交互不足以识别一个指称物，因为许多指称物在抽象层面上可能具有类似的输入与输出，这使得无法明确区分概念化所指的对象。例如，一个为研究客户平均处理时间而设计的柜员概念模型与一个ATM并不相同。在这种情况下，客户与柜员可以被抽象为概率密度函数和排队系统，这可能已足以满足研究需求。答案的有效性因此高度依赖于模型的语境。换句话说，M\&S中的概念模型需要以输入输出的形式捕捉数据，捕捉消耗数据的过程，并需要一种方法通过模型固有的假设与约束来区分不同的指称物概念化。”

从上述引文可以看出，这里强调了一个差异：一方面是捕捉ATM的行为来描述它，另一方面是捕捉ATM的行为来回答某个研究问题。在这个例子中，研究问题是“研究平均处理时间”。这一思想同样适用于本体论：M\&S中的本体论是为了回答或帮助回答特定研究问题而构建的。其目标超越了对现实的传统描述，旨在捕捉对某一系统已知的信息。

值得指出的是，本节所提出的思想凸显了M\&S与其他软件工程（Software Engineering, SWE）学科的区别：在传统SWE中，产品支持的是指称物（例如，真实ATM与真实银行账户之间的软件通信）；而在M\&S中，ATM、银行及通信的模型作为概念化及其实现，才是产品本身。这正是推动在机器可读形式下通过本体论支持来捕捉概念化的原因，从而实现复用、组合及在系统体系（system-of-systems）语境中的应用。为了更好地理解如何支持概念化过程，我们将在下一节区分本体论（ontological）、认识论（epistemological）与目的论（teleological）三个方面。


## 3 M\&S中的本体论、认识论与目的论

如前所述，本体论（ontologies）在建模与仿真（Modeling and Simulation, M\&S）中的必要性在于其作为形式化规范，最终可由计算机实现。这意味着本体论不仅是对现实（模型）的明确且有目的的抽象，还附带支持仿真的优势。然而，人们对本体论在建模过程中的抽象作用常常忽视，而更侧重于将其用于感知现实的计算机实现。这一主张假设了一个客观可观察的现实，这是需要加以考虑的本体论假设。此外，本体论所表征的不仅是对现实的视角，还包括关于现实的知识，这是需要考虑其知识来源的认识论（epistemological）主张。更进一步，本体论被构建的目的往往是描述现实或回答研究问题，这是目的论（teleological）主张。由于对现实的感知受制于本体论、认识论和目的论的倾向或考量，因此在系统概念建模过程中意识到这些考量不仅有助于建立建模者的意图，还敦促在模型中明确捕捉这些内容。换句话说，本体论自带建模者的预设、信念与假设，这些应当在建模过程中以明确的方式体现出来。

### 3.1 本体论（Ontology）

本体论是对存在或“何为存在”的研究。根据Kienzle（1970），本体论关心的是现实：事物由什么构成，有多少种类，心灵与物质的关系是什么？Feibleman（1953）则指出：

“本体论是在任何有限系统集合中最广泛的系统。它必须是一个抽象的知识体系，并提出真理的主张。这种主张可以是暂时的，也可以是绝对的。它的描述术语是传统形而上学的范畴。边沁的定义认为，本体论领域是‘最高度抽象实体的领域’，指的就是这些范畴；在现代逻辑与数学体系中，我们会将这些范畴称为‘未定义项’，即构成系统公理的未被证明的命题所使用的项。没有官方的本体论，不同的本体论必须依据与其他系统相同的标准来支持其主张：一致性、完备性和适用性。理论与实践中存在竞争性的本体论，它们在抽象和具体层面都主张其各自的正当性。”

由此可见，本体论是对现实的描述。然而，在后实证主义科学的视角下，现实被认为是不可知与不可描述的，如“至高抽象实体”的案例所示，我们实际上接触的是不同的现实，它们在不同的本体论下被描述。本体论越广泛，就越接近现实，其所作出的主张也越可能被视为绝对主张。尽管每个模型的本体论自身必须保持一致，但我们不能假定所有描述同一指称物的模型本体论必然源自描述单一现实的共同本体论。它们可能存在显著差异，尤其在社会科学中（但实际上，在物理科学的微观和宏观层面也同样如此）。

从本体论角度看，我们对现实的认知可以是实质性的或过程性的（Rescher 2000）。实质性本体论关注于描述某物“是什么”，即其部分及部分之间的关系；过程性本体论则关注于描述某事“如何发生”。然而，我们最终还是以实质性术语来描述过程。这是因为我们观察“如何发生”的唯一方式，是通过观察事物如何被转化的状态，而这种转化仍然是在描述事物本身，而非转化过程本身。

### 3.2 认识论（Epistemology）

认识论是关于“我们如何获得知识”的研究。认识论信念是个体关于知识的定义、知识如何建构、如何评估、知识存在何处、知识如何产生的信念（Hofer 2002）。认识论试图回答的问题是：什么可以被视为知识？这一问题自古希腊提出以来，至今仍无定论。认识论上一个相对令人满意的知识定义是“有条件的、被证成的真信念”。这些条件强调在某些情形下，被证成的真信念不能算作知识，例如Gettier案例中，真信念的成立依赖于运气。从实用角度看，认识论关注知识的有效性，包括其来源、如何被证成，以及在何种条件下某一主张可被真正视为知识。

认识论上，我们通过经验或理性来获得知识。经验上，我们通过对应关系来获得知识：个体通过感官所感知的内容，若能被科学证明或实用地接受，即可被视为知识。理性上，我们通过一致性来获得知识：个体在头脑中创造的内容，不论是否源于观察，只要能够在一个前提体系中得到解释，就可被视为知识。这两种途径均被知识体系所接受，并各有支持者与批评者。例如，生物学家与实验物理学家主要依赖经验途径；而数学家与M\&S研究人员则更倾向于依赖理性途径。在模型概念化过程中，认识论上的约束因此可能对可组合解决方案的识别与选择具有高度相关性。

### 3.3 目的论（Teleology）

目的论是关于行动与目的的研究。根据Stacey、Griffin和Shaw（2000, p. 14），“人类行为是有目的的，因此在解释时明确说明人们如何看待这一目的非常重要。”当前，目的论一词结合了两大语境：有目的的行为以及追求目标的行为。该视角在逻辑层面上被科学哲学家们研究过。Kernohan（1987）提出，最简单的目的论法则形式为：“对于任意系统$x$，若$x$执行$\boldsymbol{B}$会导致$x$获得$\boldsymbol{G}$，则$x$之所以执行$\boldsymbol{B}$，是因为它能获得$\boldsymbol{G}$。”然而，尽管这一形式直观，但Kernohan在其论文中始终未能定义出一个没有漏洞的目的论法则。这一不可能性部分源于使用形式逻辑解释时需要无限递归，以及规避递归时出现的矛盾，或反例否定结论。

Stacey、Griffin和Shaw（2000, p. 49）提出了目的论的五种不同概念：

- 自然法则目的论（Natural Law Teleology）：其中自组织与涌现概念完全缺席，除了趋向完美之外无任何变化。
- 理性主义目的论（Rationalist Teleology）：同样没有涉及自组织，变化源于人类选择。
- 生成性目的论（Formative Teleology）：意味着一种再生产形式的自组织，但无显著转变。
- 转型性目的论（Transformative Teleology）：意味着一种悖论式的自组织，既有连续性，又具潜在的根本性转变。
- 适应性目的论（Adaptionist Teleology）：意味着一种基于偶然的竞争性最优搜索，仅在选择过程中表现为较弱的自组织。变化体现为向稳定的环境适应状态的迁移。

通过这些概念，Stacey、Griffin和Shaw提出将自组织与涌现作为组织复杂性的标准。这五种目的论位于两个极端：一种是未来状态可知，另一种是未来状态不可知。这与Rosenblueth、Wiener和Bigelow（1943）的观点一致，即目的论基于反馈可分为预测性（外推性）与非预测性（非外推性）。与认识论类似，目的论约束可能对模型的可组合性至关重要。

### 3.4 符号学三角形中的本体论、认识论与目的论

关于认识论、本体论与目的论预设或世界观的研究，曾从问题求解的角度展开（Bozkurt, Padilla, and Sousa-Poza 2007）。类似于本研究，他们认为这三者有助于确立个体的内嵌世界观。每个个体在看待现实、追求知识与确立目的时都有不同方式。现实或许是绝对的，但取决于个体所用的“透镜”，现实的感知与解释也会不同。在此语境下，这三类考量会影响本体论的创建、使用与复用，因为它们包含的要素需要由建模者显式体现。与Bozkurt, Padilla, and Sousa-Poza（2007）不同，这三类考量之间不能假设相互独立，因为它们极可能相互影响，从而影响生成的本体论。例如，本体论作为科学工具可遵循不同认识论：分类既可以基于观测到的现象，也可以基于创造的现象，分别对应经验主义与理性主义认识论。通过研究规范，每种认识论为捕捉与描述的现实提供了“真理条件”。本体论也遵循目的论考量，例如为何捕捉现实、为何回答研究问题，或为何在实现中赋予推理能力。

到目前为止，符号学三角形的焦点主要在指称物-模型的关系上，因为本体论存在于此。而实现（即从模型到仿真的关系），则是通过仿真创建实验环境的过程。在这种情况下，仿真结果能够告诉我们关于指称物的信息，而无需直接使用指称物。此时，模型随时间的执行会提供输出，这些输出可反馈到本体论表示中，以改进对现实的描述，通过回答关于现实的问题创造新的知识。这种通过理性方式生成的新知识可被纳入本体论中，用以捕捉创造的现实，并揭示关于可能未来的信息。

将本体论、认识论和目的论置于符号学三角形中，可作如下表征：

- **本体论（Ontological）**：对应三角形中的指称物与模型节点，回答“它是什么”及“它如何被描述”。在指称物节点上，是对现实的本体论视角；在概念节点上，是对现实的本体论表示。
- **认识论（Epistemological）**：存在于三角形节点之间，通过对应或一致性来回答“什么可被视为知识”。在概念化过程中回答系统的真/假命题；在实现过程中回答概念的真/假；在符号-系统的比较中回答符号的真/假与系统的真/假。
- **目的论（Teleological）**：涉及模型与仿真节点相对于指称物的关系，回答“模型与仿真的目的是什么”。在模型层面，回答驱动该模型的问题是什么；在仿真层面，回答驱动该仿真的问题是什么。

一个旨在支持研究问题求解的概念模型，需要支持潜在模型的识别、最优备选方案的选择、将这些模型组合为一致的系统体系（system-of-system），以及对执行的协调编排，因此必须将上述所有方面纳入考量。


## 4 与可组合性和互操作性的相关性

在建模过程中，本体论（ontological）、认识论（epistemological）和目的论（teleological）的考量会影响模型的使用、复用、可组合性以及仿真的互操作性。模型的可组合性（composability），如同仿真的互操作性（interoperability），并不是模型本身的固有条件，而是取决于建模问题的条件。因此，可能会存在若干不同的本体论，它们捕捉了对现实的某种视角或某一理论，并且这些理论是为了回答研究问题而设计的。这意味着，共享研究问题是实现模型组合的必要但非充分条件，更可能的情况是并不存在一个共同的出发点。为了至少在高层面上评估共性，就需要意识到上述三类考量。

从本体论角度来看，本体论关注的是对“某物是什么”以及“某物做什么”的分类。换言之，本体论以实质性的方式捕捉系统。迄今为止，还没有一种能够在“如何做”的层面上捕捉过程的本体论表示。若要在本体论表示中捕捉“如何做”，则意味着必须捕捉一个功能，而功能无法被原子句所表达。这一区别很重要，因为它表明本体论仅限于以实质性方式捕捉建模者的现实，任何关于过程的主张实际上指向的是对过程的离散化，而不是过程本身。同样重要的是，本体论是识别假设的首要途径：要么假设存在一个客观可观察的现实，要么假设现实是建模者所决定的。在任一情况下，都必须明确化这一特定假设。

从认识论角度来看，本体论在定义上具有经验主义倾向，因为其主要关注捕捉和描述可观察的现实。然而，本体论也可以捕捉已经是概念化的模型。从这个意义上说，本体论是对“被创造的现实”的概念化。这些“现实”是人为构建的，用作对真实系统的替代物——真实系统可能无法直接观察，或者其结构无法被清晰识别。例如，当理论被捕捉为模型，而这些模型通过本体论组合成一个一致的前提体系时，最终生成的本体论表示可能本身就是一个理论，或是由现有理论创造新理论的手段。

最后，从目的论角度来看，本体论作为一种有目的的创造，无论是为了描述系统，还是为了帮助回答研究问题，都包含了目的论成分，这通常假设未来状态是可知的。即便通过理性方式，本体论也受限于认知上的演绎方法，因而属于可知未来状态的一端。然而，它们确实在寻求目标的过程中具有明确目的，而这一目的引导了最终在本体论中传达什么的决策过程。重要的是，目的论的主张与建模者的意图高度相关，这种意图正是概念模型（Conceptual Model, CM）建立的基础。如前所述，这一意图与本体论和认识论考量紧密交织。

然而，本体论、认识论和目的论的考量必须被评估和捕捉，才能对复用和可组合性发挥作用。目前来看，元数据或上层本体（upper ontology）形式是执行这一任务的可能候选。

## 5 结论与总结

本文论证了在M\&S中建模本体论的重要性。与其他学科中本体论被用于描述一个假定的、客观可观察的系统不同，在M\&S中，本体论具有以下特点：

- 捕捉的是被建模者现实所涵盖的系统，这意味着可能存在许多同样正确的模型，并与多种仿真相对应。
- 根据研究问题从现实中捕捉系统，从而限定模型的范围与分辨率。
- 可以捕捉由既有理论或创造性过程产生的“被创造的现实”。
- 是足够形式化的概念模型，能够被计算机实现。
- 需要捕捉本体论、认识论和目的论考量，以支持进一步的可组合性与互操作性。

由于本体论是规范的表示形式，因此必须考虑如何使这些表示在计算机层面上能够区分。作为抽象的产物，计算机与人类不同，可能无法区分“船的模型规范”与“车的模型规范”。这种区分对于可组合性与互操作性至关重要，因为当模型和/或仿真组合在一起时，它们必须共享上下文。例如，汽车模型与船舶模型并不能互换，尽管它们可能有相似的实现。实现共享上下文的一种方法是确立共同的研究问题。另一种方法是将研究问题约束在本体论、认识论和目的论考量之下，特别是以一种形式使得计算机能够区分模型A与模型B。虽然后者是建议性的，但前者在寻求可组合性与互操作性时则是关键。

迄今为止，本体论的应用与研究重点主要集中于仿真层面（尽管并非完全如此）。本文则强调，应更多地关注M\&S的建模层面，因为正是建模层面使M\&S工程区别于传统软件工程（Software Engineering, SWE）。


## REFERENCES

Bozkurt, I., J. J. Padilla, A. Sousa-Poza. 2007. Philosophical Profile of the Individual, In Proceedings of the 19th IEEE International Engineering Management Conference (IEMC).
Feibleman J. 1953. Ontology. Baltimore, MD: Johns Hopkins Press, 1953.
Gruber, T. 1993. A Translation Approach to Portable Ontology Specifications, Knowledge Acquisition 5(2):199-220.
Guarino, N. 1998. Formal Ontology and information Systems, Published in N. Guarino, ed., Formal Ontology in Information Systems. IOS Press, Trento, Italy.
Kienzle H. J. 1970. Epistemology and Sociology. British Journal of Sociology 21(4):413-424.
Ogden C. K. and I. A. Richards. 1923. The Meaning of Meaning: A Study of the Influence of Language Upon Thought and of the Science of Symbolism. London: Routledge \& Kegan Paul.

Balci, O., and W. F. Ormsby. 2007. Conceptual modeling for designing large-scale simulations. Journal of Simulation 1(3):175-186.
Raubal M. and W. Kuhn. 2004. Ontology-Based Task Simulation. Spatial Cognition and Computation 4( 1):15-37.

Rescher N. 2000. Process Philosophy: A Survey of Basic Issues. Pittsburgh, PA: University of Pittsburgh Press.
Rosenblueth, A, N. Wiener, and J. Bigelow. 1943. Behavior, Purpose and Teleology. Philosophy of Science . 10(1):18-24.
Silver, G. A., O. Hassan, and J.A. Miller. 2007. From Domain Ontologies to Modeling Ontologies to Executable Simulation Models. In Proceedings of the 2007 Winter Simulation Conference. ed. S.G. Henderson, B. Biller, M.-H. Hsieh,. J. Shortle, J.D.Tew, and R.R. Barton. 1108-1117. Piscataway, New Jersey: Institute of Electrical and Electronics Engineers, Inc.
Stacey, R. D., D. Griffin, and P. Shaw. 2000. Complexity and Management: Fad or Radical Challenge to Systems Thinking? Routledge, Taylor and Francis Group.
Sowa, J. F. 2000. Ontology, Metadata, and Semiotics. Presented at ICCS'2000 in Darmstadt, Germany, on August 14, 2000. Published in B. Ganter \& G. W. Mineau, eds., Conceptual Structures: Logical, Linguistic, and Computational Issues, Lecture Notes in AI \#1867, Springer-Verlag, Berlin.
Teo, Y. M. and C. Szabo. 2007. CODES: An Integrated Approach to Composable Modeling and Simulation. Technical Report APSTC-TR-2007-04, Asian Pacific Science and Technology Center.
Tolk, A., S. Y. Diallo, R. D. King, J. J. Padilla and C. D. Turnitsa. 2010. Conceptual Modeling for Composition of Model-based Complex Systems. In Conceptual Modelling for Discrete-Event Simulation, ed. S. Robinson, R. Brooks, K. Kotiadis and D.-J. van der Zee, CRC Press.
Turnitsa, C. and A. Tolk. 2006. Ontology Applied - Techniques employing Ontological Representation for M\&S. In Proceedings of the 2006 Fall Simulation Interoperability Workshop.
Yilmaz, L. 2004. On the Need for Contextualized Introspective Models to Improve Reuse and Composability of Defense Simulations. Journal of Defense Modeling and Simulation 1(3):141-151.

## AUTHOR BIOGRAPHIES

CHARLES TURNITSA is a Ph.D. candidate at the Virginia Modeling Analysis and Simulation Center VMASC - at Old Dominion University. He received his B.S. in Computer Science (1991) from Christopher Newport University (Newport News, Virginia), and his M.S. in Modeling \& Simulation (2006) from ODU. His Ph.D. research under Andreas Tolk focuses on the domain of specifying process activity within dynamic ontological models for M\&S interoperability. His email address is [cturnits@odu.edu](mailto:cturnits@odu.edu).

JOSE J. PADILLA is a Post Doctoral Research Associate with the Virginia Modeling, Analysis and Simulation Center - VMASC - at Old Dominion University. He received his Ph.D. in Engineering Management from Old Dominion University. His research interests include knowledge representation, understanding within problem situations, and philosophy of science. His email address is [jpadilla@odu.edu](mailto:jpadilla@odu.edu).

ANDREAS TOLK is an Associate Professor of Engineering Management and Systems Engineering at Old Dominion University. He is also affiliated with the Virginia Modeling Analysis and Simulation Center. He holds a M.S. and Ph.D. in Computer Science from the University of the Federal Armed Forces in Munich, Germany. His research focuses on developing mathematical models supporting M\&S composability and system of systems engineering. He is a member of ACM, IEEE, SCS, SISO, MORS, NDIA, and ASEM. His email address is <atol k@odu.edu>.


# Ontology-Oriented Software Development



Jan 22, 2024

key words: Artificial Intelligence, Palantir, Palantirengineering, Palantirtech




![img](https://miro.medium.com/v2/resize:fit:1400/1*6RsUtaiGGwwwoi52yoLqsA.png){width="600"}

作者：Peter Wilczynski，Ontology 系统产品负责人  

“Show me the incentive and I’ll show you the outcome” — Charlie Munger

*“告诉我激励措施，我就能告诉你结果。” —— 查理·芒格*

## I.

作为一个行业，我们正以前所未有的速度生产软件，但这些软件对经济生产力的影响却[微乎其微](https://twitter.com/MabreyTed/status/1743754475980927455)。

这种缺乏进展根源于软件行业自身的组织方式——绝大多数人力资本都集中在开发模块化组件上，而不是将这些组件整合成能够真正影响业务成果的整体企业系统。我们贬低了集成工作，却把组件拔高为“系统”，而不是把它们恰当地理解为更大拼图中的工具性部分。数字化转型已经成为一个目标本身，而不是由有经验的从业者去完成的一段旅程，其终点应当由业务本身定义。

**我们已经迷失了方向，欺骗自己认为：因为构建单个部分更容易，就一定有人能把这些部分拼装成有价值的东西。**

这种结果导向的软件架构被优化为为风险投资者带来回报，而不是为客户实现成果；它奖励组件供应商之间的零和竞争，而不是围绕整体系统性能展开的正和合作。尽管在过去二十年里，这些独立组件得到了极大改进，但矛盾在于，这是以牺牲整个企业系统为代价的。孤立优化组件会导致跨多个割裂组件的变化越来越难以同步。结果就是：组件层面的改进并没有转化为系统层面的改进。

![img](https://miro.medium.com/v2/resize:fit:1400/1*JJ9k5MxJFpemPwLc500YfQ.png)

*在标准企业架构中，组件的改进未能转化为系统层面的改进。实际的系统性能正越来越落后于潜在的系统性能。*

尽管被卖的是“模块化”，但客户实际得到的产品是碎片化、割裂的。这样的投资非但没有提升敏捷性，反而造成了僵化的企业架构。¹ 这种技术上的僵化还会渗透到更广泛的组织文化中，造成停滞。

在 Palantir，我们的使命是实现技术驱动进步对人类的解放力量——通过赋能组织去构建定制化的软件工具，从而推动广泛的企业转型。我们很快就意识到：不存在一款单一产品能够覆盖整个经济体来实现这一使命；换言之，无法通过消化一组通用需求，再为所有客户“分发同一份软件包”来完成。定制化的软件工程必须在 *现场（in situ）* 发生。

为了让这一过程在经济上可行，我们必须构建一套技术，使得定制化企业软件开发的边际成本趋近于零。

支撑这一目标的架构就是 Palantir Ontology，在 [Akshay 的上一篇博文](https://blog.palantir.com/connecting-ai-to-decisions-with-the-palantir-ontology-c73f7b0a1a72) 中已有介绍。这一技术与其软件开发工具包（即我们称之为“Ontology SDK”或“OSDK”）一起，使得通过整合孤立组件为整体系统来*消除企业碎片化*成为可能。通过实施一个以决策为中心的本体论（decision-centric ontology），它能够统一整个IT环境中的数据、逻辑和行动要素，从而让组织终于可以创造性地思考技术资产与业务优先级之间的交集。

## II.

以一家航空公司试图减少停机时间并消除机械故障导致的延误为例。

一旦在例行的飞行前检查中出现警示灯，整个组织中的人员就会迅速开始收集应对选项。此时需要权衡复杂的决策：在安全、员工健康与客户影响之间做出真实的取舍。

这一问题是各行业普遍存在的资源分配问题的具体实例。尽管资源可以按照统计最优分布进行主动配置，但随着实际情况的变化，能否重新分配资源才是真正衡量企业敏捷性的标准：即企业能多快地对现实做出反应？

在我们假设的航班案例中，需要回答三个问题：

- 飞机是否需要停飞？
- 哪些机场有适合执行维修的零件和机务人员？
- 哪些方案能在最小化客户影响的情况下完成飞机更换？

通过飞机的 IoT 数据（每次飞行可产生超过两百万个数据点），我们需要了解这架飞机还剩多少飞行小时。为此，数据科学家可以加载 IoT 数据并运行预测性维护模型，以得到剩余使用寿命的初步估算。

假设航班可以起飞，那么我们需要立即开始规划维修。这意味着运营团队必须查明哪些机场库存有合适的零件，并将这些数据与维修人员的排班表交叉比对，找出具备资质的机务人员来执行维修。我们的目标不是推迟问题，而是立即更换飞机，使其尽快抵达能够完成维修的目的地，并且最好不影响任何乘客。

![img](https://miro.medium.com/v2/resize:fit:1400/1*DM3yARHzXr_sVqfMqahnqA.png)

*在这个例子中，我们的目标是更换飞机，使其能够抵达具备维修能力的目的地——并且不打扰客户。*

根据这些条件，我们可能识别出两个调机方案，分别使飞机降落在 IAD 或 DFW。DFW 满足所有维修约束条件，但由于机型座椅布局不同，将导致 3 名乘客被迫下机，成本约 5,000 美元，且会降低客户满意度。IAD 拥有所需的更换零件和一个空闲机库，但在飞机抵达时并无具备特定技能的机务人员；若要在一夜之间完成维修，则需要额外安排一名机务加班，增加 2,000 美元的成本。

第一个方案更简单；第二个最优方案则需要换机并协调机务——换言之，需要更多上下文与更高的自由度。

要以程序化方式找到最优方案，需要对众多数据、逻辑与行动要素进行协调编排。数据要素来自机场运营数据库、航班清单和资源管理系统；这些数据要素作为输入进入逻辑要素，用于预测影响、建模客户行为并评估风险；最后，这些逻辑要素的输出用于构建行动要素，将决策写回到相应的运营系统，并实时通知相关人员。

将这一解决方案转换为应用程序并运行在当今碎片化的企业架构之上，意味着要处理来自核心业务系统的数据，将其与 SaaS 工具及内部定制系统对齐，并跨价值链的多个环节编排行动。实现这一方案的工程师必须学习各系统的 API，与各组织的IT团队建立连接，并构建能直接与每个系统交互的应用。

这种知识——如何与系统交互、如何协调不同的数据模型、如何访问割裂的逻辑要素、如何编排行动系统——将存在于*又一个*碎片化的应用或服务中，对组织内尝试完成类似任务的其他团队不可见。尽管 API 网关在支持 API 发现方面能发挥重要作用，但程序员依旧被困在应用层中，用“粘合代码”来协调系统特定的表示。

Ontology 将这一知识集中化，并封装在一个共享系统中。该系统与 OSDK 一起，充当了更高层次的抽象，用于编写运行在统一层上的业务逻辑——这一层涵盖了关键业务概念、运营流程与现实任务。这使得从组件中心化的表示到**共享概念模型（shared conceptual model）**的转换只需进行一次，而不必在每次构建新应用时重复。

![img](https://miro.medium.com/v2/resize:fit:1400/1*QRzlM2Qsjv_MpT4pdX_Kyw.png)

*Ontology 将碎片化的数据、逻辑和行动组件连接在一个更高层次的系统中。这使得组件特定模型到共享概念模型的转换只需进行一次，而不是每次构建新应用时重复。*

而且，这种知识会快速积累；依赖以决策为中心的共享 Ontology，新应用能够复用已有的系统集成工作，新组件也可以快速接入，只需将其数据、行动和逻辑要素与现有表示对齐。²

![img](https://miro.medium.com/v2/resize:fit:1400/1*U7eKL1o4nNFweTyGTGaHhw.png)

*在有了 Ontology 的情况下，新应用可以利用现有的系统集成成果。新组件也能通过将其数据、逻辑和行动要素对齐到通用 Ontology 而快速接入。*

回到前面的案例。在 Ontology 出现之前，程序员必须找到合适的组件，并通过每个组件特定的接口、语言和/或方言与之交互。结果就是，代码本身从根本上就是“以组件为中心”的：


```
const mysql = require('mysql');
const nodemailer = require('nodemailer');
const fetch = require('node-fetch');

// Inventory database connection configuration
const dbConfig = {
  host: 'skyframe-internal',
  user: 'db_admin',
  password: process.env.DB_PASSWORD,
  database: 'skyframe'
};

// Email server configuration (example using Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'swapbot@skyframe.com',
    pass: process.env.EM_PASSWORD
  }
});

// Connect to the inventory database and query for airports with inventory
async function findAirportsWithInventory(parts) {
  const connection = mysql.createConnection(dbConfig);
  const query = "SELECT airport_code FROM inventory WHERE part_number IN (?)";
  return new Promise((resolve, reject) => {
    connection.query(query, [parts.map(part => part.partNumber)], (error, results) => {
      connection.end();
      if (error) return reject(error);
      resolve(results.map(row => new Airport(row.airport_code)));
    });
  });
}

// Connect to the database and query for swappable flights
async function findSwappableFlights(flightToSwap, aircraft, targetAirports) {
  const connection = mysql.createConnection(dbConfig);
  const query = `SELECT * FROM flights
                 WHERE departure_airport_code = ? AND aircraft_id = ? AND destination_airport_code IN (?)
                 ORDER BY departure_time ASC`;
  return new Promise((resolve, reject) => {
    connection.query(query, [flightToSwap.departureAirportCode, aircraft.id, targetAirports.map(airport => airport.id)], (error, results) => {
      connection.end();
      if (error) return reject(error);
      resolve(results.map(row => new ScheduledFlight(row)));
    });
  });
}

// Function to calculate optimal swaps by calling an external REST endpoint
async function calculateOptimalSwaps(flightToSwap, swappableFlights) {
  const requestBody = {
    flightToSwap: flightToSwap,
    swappableFlights: swappableFlights
  };

  const response = await fetch('https://skyframe-internal-gateway/api/calculateOptimalSwaps', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer Ym9zY236Ym9zY28'
    },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to calculate optimal swaps: ${error}`);
  }

  const swapOptions = await response.json();
  return swapOptions;
}

// Function to calculate maintenance and customer impact costs by calling an external REST endpoint
async function calculateImpactCosts(swapOptions) {
  const requestBody = {
    swapOptions: swapOptions
  };

  const response = await fetch('https://skyframe-internal-gateway/api/calculateImpactCosts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer Ym9zY236Ym9zY28'
    },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to calculate impact costs: ${error}`);
  }

  const impactCosts = await response.json();
  return impactCosts;
}

// Function to perform the swap operation
async function swapAircraft(targetAircraft, aircraft) {
  const requestBody = {
    targetAircraft: targetAircraft,
    aircraft: aircraft
  };

  const response = await fetch('https://skyframe-internal-gateway/api/swapAircraft', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer Ym9zY236Ym9zY28'
    },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to swap aircraft: ${error}`);
  }


  console.log(`Swapping aircraft ${targetAircraft.id} with ${aircraft.id}`);
}

// Function to send an email for swap approval (using nodemailer)
async function emailSwapsForApproval(swapOptions) {
  const mailOptions = {
    from: 'swapbot@skyframe.com',
    to: 'ground-control@skyframe.com',
    subject: 'Flight Swap Approval Required',
    text: `Approval is required for the following swap options: ${JSON.stringify(swapOptions)}`
  };

  return transporter.sendMail(mailOptions);
}

// Main function to schedule preventative maintenance
async function schedulePreventativeMaintenance(aircraft, parts) {
  try {
    // Assuming aircraft.getSchedule() and schedule.getNextFlight() are defined elsewhere
    const schedule = await aircraft.getSchedule();
    const flightToSwap = await schedule.getNextFlight();

    const targetAirports = await findAirportsWithInventory(parts);
    const swappableFlights = await findSwappableFlights(flightToSwap, aircraft, targetAirports);

    const swapOptions = await calculateOptimalSwaps(flightToSwap, swappableFlights);
    const impactCosts = await calculateImpactCosts(swapOptions);

    const cheapestOption = impactCosts.reduce((cheapest, option) =>
      option.cost < cheapest.cost ? option : cheapest,
      { cost: Number.MAX_VALUE }
    );

    // Guardrails for Options
    if (cheapestOption.cost < 1000) {
      await swapAircraft(cheapestOption.swapOption.targetAircraft, aircraft);
    } else {
      await emailSwapsForApproval(swapOptions);
    }
  } catch (error) {
    console.error('Failed to schedule preventative maintenance:', error);
  }
}
```

这是一个有意简化的示例——API 请求与响应类型被过度简化，底层逻辑与行动系统通过标准的 API 网关模式暴露，认证方式相对一致，而错误处理也极其简单。即便如此，大部分代码仍然花在直接编写函数以连接底层系统上；而主要的调度函数仅仅占整个代码量的一小部分。

相比之下，在基于本体论（ontology-oriented）的开发模型中，用于在系统间协调数据、逻辑与行动的“去碎片化代码”存在于企业的本体论之中，从而显著简化了客户端代码。³

**使用本体论软件开发工具包（Ontology Software Development Kit, [OSDK](https://www.palantir.com/docs/foundry/ontology-sdk/overview/)）**，它以 Python、Typescript 和 Java 的惯用形式暴露 Ontology 的数据、逻辑和行动要素，我们能够将大部分复杂性转移到 Ontology 本身，并暴露与实际业务概念直接对应的企业对象：


```
async function schedulePreventativeMaintenance(aircraft: Aircraft, parts: AircraftComponent[]) {
  const schedule: FlightSchedule = await aircraft.getSchedule();
  const flightToSwap: ScheduledFlight = await schedule.getNextFlight();

  const targetAirports: Airport[] = await OntologyClient.search()
    .airports()
    .filter(a => a.inventory.containsAll(parts))
    .all();

  // Find flights from the same departure location to airports with inventory
  const swappableFlights: ScheduledFlight[] = await flightToSwap.getDepartureAirport()
    .scheduledFlights()
    .filter(f => f.aircraft.airframe.exactMatch(aircraft.airframe))
    .filter(f => f.destination.isOneOf(targetAirports))
    .orderBy(f => f.departureTime.asc())
    .all();

  const swapOptions: FlightSwapOption[] = await OntologyClient.calculateOptimalSwaps(flightToSwap, swappableFlights);
  const impactCosts: SwapOptionCost[] = await OntologyClient.calculateImpactCosts(swapOptions);

  const cheapestOption = impactCosts.reduce((cheapestOption, option) =>
    option.cost < cheapestOption.cost ? option : cheapestOption,
    { cost: Number.MAX_VALUE },
  );

  // Guardrails for Options
  if (cheapestOption.cost < 1000)
    await OntologyClient.action.swapAircraft(cheapestOption.flight, aircraft);
  else
    await OntologyClient.action.emailSwapsForApproval(swapOptions);
```

正如 Brooks 在其经典论文中所言，[“没有银弹”](https://www.cs.unc.edu/techreports/86-020.pdf)：系统集成充满了必须被管理而无法被消除的本质复杂性。但通过在 Ontology 中强制使用设计模式，将这些复杂性封装起来，基于本体论的客户端代码能够在更高层次的抽象上运行。正如更高级的编程语言使程序员能够抽象掉物理计算机硬件组件的内部实现细节一样，基于本体论的方法让程序员能够抽象掉构成企业架构的软件组件的内部实现细节。

在这个示例中，程序员通过 OSDK 与这些业务概念交互，并用“业务的语言”编写代码——不是以行和列的方式，而是以“飞机（Airplanes）”、“航班计划（Flight Schedules）”和“机场（Airports）”的方式。OSDK 并不是为我们的产品提供一个通用的 API，而是提供一个工具包，用于以业务语言为业务构建 API。

![img](https://miro.medium.com/v2/resize:fit:1400/1*MlOVd7rNbkRTW_VGubF7rw.png)

## III.

软件中的更高层次抽象总是具有*颠覆性*，正如 [Clayton Christensen](https://claytonchristensen.com/key-concepts/) 精确描述的那样——它们从最简单的程序入手，但由于其底层结构优势，这种发展中的技术最终能够超越既有者。

通过 Ontology，这种跨越表现为我们在构建定制应用方面的能力得到了极大增强。任何用过低代码可视化编程工具的人都知道，这类应用总会遇到天花板。因此，选择低代码开发工具时，你实际上隐含地决定了要限制所构建解决方案的雄心。

将我们的应用构建平台建立在 Ontology 之上，改变了这种局面，主要体现在三方面：

**第一**，它让低代码应用更强大。低代码开发者可以在其低代码应用中利用基于代码的数据、逻辑和行动要素，将性能上限提升到其他低代码环境无法达到的水平。这种能力使开发者能够直接在可视化编程环境中开发业务运营应用。  

**第二**，当开发者达到低代码环境的极限时，OSDK 允许他们无缝迁移到传统的基于代码的开发环境，而无需从头重建整个应用。  

**第三**，Ontology 使得构建能够相互操作的低代码与专业代码（pro-code）应用变得容易。两种方法各有取舍：低代码工具降低了开发门槛，使应用开发更易于普及；基于代码的工具则提高了上限，使高级用户能够构建更复杂的体验。通过 Ontology 将两种方法融合，用户可以为手头的任务选择合适的工具。  

最近，我们看到 Ontology 提供的这种结构性优势同样在 [AI Platform (AIP)](https://www.palantir.com/platforms/aip/#aip-hero) 中得以体现。AIP 提供了一组面向用户的基础能力，以及用于构建定制化 AI 系统并直接部署到业务流程中的开发工具链。  

为什么我们能够如此快速地发布 AIP？  

这是因为从一个关键视角来看，AI 系统更像是应用，而不是用户——它们*直接*与 API 交互！  

![img](https://miro.medium.com/v2/resize:fit:1400/1*ZhHQ4HpgSfFvijXhtMGXSg.png)

*像应用程序（而不同于大多数人类用户）一样，AI 系统直接与 API 交互。因此，为企业构建一个完整的 AI 系统，必须有一种架构，使所有系统被去碎片化为一个共享的 API 表面。*

自计算机诞生以来，界面设计始终致力于让数字系统更易于人类使用，无论是作为用户还是程序员。在过去一个世纪里，我们从穿孔卡片转向命令行接口（CLI），再到图形用户界面（GUI），始终以人类可用性为北极星。

但随着我们进入一个人类与功能日益强大的 AI 系统直接协作以完成任务的世界，我们对“可访问性”的定义必须扩展，使自治系统能够承担越来越复杂的任务。

基于大语言模型（LLM）的系统被“塑造成我们自身的样子”；像人类一样，它们可以使用基于文本的接口，与自然语言表示的世界交互。但这种相似性具有欺骗性，并不会适用于所有 AI 系统；事实上，如今并非所有 AI 系统都是如此——例如 [AlphaStar](https://deepmind.google/discover/blog/alphastar-mastering-the-real-time-strategy-game-starcraft-ii/) 在玩《星际争霸II》时既不与像素交互，也不与语言交互。⁴

通过将应用和数据系统分解为其组成的数据、逻辑与行动要素，Ontology 提供了一个统一的、以决策为中心的企业模型。这个共享模型可以作为统一表示，通过三种不同类型的接口进行暴露：

1. 图形用户界面（GUI）：为用户提供 Ontology 的可视化表示。  
2. 应用程序接口（API）：为程序员和 AI 系统提供直接访问 Ontology 的途径。  
3. 自然语言接口（NLI）：允许人类和基于语言的 AI 系统通过自然语言与 Ontology 交互。  

正如 J. C. R. Licklider 在 [《人机共生》](https://groups.csail.mit.edu/medg/people/psz/Licklider.html) 中所言：“人类语言和计算机语言之间的根本差异可能是真正共生的最大障碍。” Palantir Ontology 是解决这一语言学挑战的技术方案：Ontology 不是把每种接口都当作独立的语言，而是作为一种单一语言，能够以图形、语言和编程形式来表达。

在企业环境中实现操作性 AI 的潜力，并不是一个 AI 问题——而是一个本体论问题。

---

¹ [《Big Ball of Mud》](https://s3.amazonaws.com/systemsandpapers/papers/bigballofmud.pdf) 发表 25 年后，论文中对企业架构现状的观察依然惊人地准确；采用新组件反而增加了系统复杂性，结果是底层的结构性问题被进一步加剧。  

² 关于这种开发风格最终结果的实例，可以参考 [Skywise Store](https://aircraft.airbus.com/en/services/enhance/skywise/skywise-store-app-editors-programme)，了解基于本体论的开发模型在实践中的样貌。  

³ 需要注意的是，数据、逻辑和行动要素的实际实现依然存在——它们只是作为明确定义的低层抽象存在。可以将 Ontology 理解为一个较为复杂的“单体代码库”（monorepo），它强制某些约定以构建更具可组合性的系统：当然，*可能*会滥用 Ontology 而再次造成碎片化，但其所强制的封装模式正是为避免这种情况而设计的。  

⁴ 从根本层面看，人类直接与物理世界交互，而间接与数字系统交互；AI 系统则直接与数字系统交互，间接与物理世界交互。因此，庞大的逻辑装置——用于在抽象概念表示与输入/输出设备（显示器、扬声器、麦克风、鼠标和键盘）所用的物理表示之间进行信息序列化与反序列化——是为人类优化接口而设计的；它并非构建面向 AI 系统接口的必要条件。我们应当预期，在极限情况下，这些系统能够直接以抽象表示进行交互，其规模将远超我们当前的想象。


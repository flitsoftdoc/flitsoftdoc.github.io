# CRC-COVLIB API Reference

**Communications Research Centre Canada**

**July 23, 2025**

CRC-COVLIB 是由加拿大通信研究中心（Communications Research Centre Canada）开发的一个用于无线覆盖预测的基础应用程序接口（API）。该库集成了多种不同的传播模型：

- Longley-Rice 传播模型，由美国国家电信与信息管理局（US National Telecommunications and Information Administration, NTIA）开发；
- 扩展 Hata（Extended-Hata, eHata）城市传播模型，也来自 NTIA；
- 国际电信联盟（International Telecommunication Union, ITU）P.1812 建议书中的传播模型实现；
- 国际电信联盟 P.452 建议书中的传播模型实现；
- CRC-MLPL，一种基于机器学习的路径损耗模型，由加拿大通信研究中心开发，使用 ITU-R 与英国 Ofcom 的公开行测数据集训练而成。[1]

本文档详细说明了 CRC-COVLIB 提供的 C++ 编程接口，但不涉及无线电波传播科学以及信号发射/接收技术的细节。

此外，CRC-COVLIB 还提供了一个 Python 封装接口，便于从 Python 语言中调用。目前尚未提供专门的 Python API 文档，但由于 Python 接口保留了原有的方法签名，因此本文件仍可作为有效的参考资料。


## Code snippet

CRC-COVLIB 库导出一个名为 `NewSimulation` 的函数，该函数返回一个实现了 `ISimulation` 接口的对象指针。通常，这个对象会首先用于设置仿真参数（例如：发射机参数、接收机参数、地形高程数据源等），随后再调用覆盖预测算法。在使用该对象完毕后，可调用其 `Release` 方法来销毁对象并释放相关资源。以下是一个使用 CRC-COVLIB 功能的简单代码示例：



```c++
#include "CRC-COVLIB.h"
using namespace Crc::Covlib;
int main(int argc, char* argv[])
{
    ISimulation* sim = NewSimulation();
    if( sim != NULL )
    {
        // 设置部分发射机参数……
        sim->SetTransmitterLocation(45.1, -75.2);

        // 选择传播模型
        sim->SetPropagationModel(LONGLEY_RICE);

        // 设置 Longley-Rice 传播模型相关的参数……
        sim->SetLongleyRiceTimePercentage(50.0);

        // 设置部分接收机参数……
        sim->SetReceiverHeightAboveGround(3.0);

        // 指定地形高程数据文件所在的目录
        sim->SetPrimaryTerrainElevDataSource(TERR_ELEV_NRCAN_CDEM);
        sim->SetTerrainElevDataSourceDirectory(TERR_ELEV_NRCAN_CDEM, "C:/Data/CDEM");
        sim->SetTerrainElevDataSamplingResolution(50);

        // 指定要进行信号估计的地理区域
        sim->SetReceptionAreaCorners(44.5, -76.0, 45.5, -74.0);

        // 选择结果类型
        sim->SetResultType(FIELD_STRENGTH_DBUVM);

        // 运行仿真（覆盖预测算法）
        sim->GenerateReceptionAreaResults();

        // 将结果输出为文本文件和栅格文件
        sim->ExportReceptionAreaResultsToTextFile("C:/temp/simResults.txt");
        sim->ExportReceptionAreaResultsToBilFile("C:/temp/simResults.bil");

        sim->Release(); // 销毁 sim 实例，释放资源
    }
    return 0;
}
```




## The Crc::Covlib namespace

除了本文件后续所描述的各种枚举类型外，`Crc::Covlib` 命名空间还包含 3 个函数。


```c++
- ISimulation* NewSimulation()
```



返回一个指向新创建对象的指针，该对象实现了 `ISimulation` 接口。

```c++
- ISimulation* DeepCopySimulation(ISimulation* sim)
```





同样创建一个实现 `ISimulation` 接口的新对象。该新对象是作为参数传入的对象的深拷贝（deep copy）。


```c++
bool SetITUProprietaryDataDirectory(const char* directory)
```





如果仿真对象（由 `NewSimulation` 和 `DeepCopySimulation` 创建）使用了 ITU-R P.1812、ITU-R P.452 或 ITU-R P.676 中的任一模型，则可能需要使用国际电信联盟（ITU）提供的数字地图文件。应使用 `SetITUProprietaryDataDirectory` 来指定这些 ITU 数字地图文件的位置。更准确地说，CRC-COVLIB 需要查找以下四个文件：


1. DN50.TXT from https://www.itu.int/dms pubrec/itu-r/rec/p/R-REC-P.1812-7-202308-I!!ZIP-E.zip
2. N050.TXT from https://www.itu.int/dms_pubrec/itu-r/rec/p/R-REC-P.1812-7-202308-I!!ZIP-E.zip
3. T_Annual.TXT from https://www.itu.int/dms pubrec/itu-r/rec/p/R-REC-P.1510-1-201706-I!!ZIP-E.zip
4. surfwv_50_fixed.txt from https://www.itu.int/dms pubrec/itu-r/rec/p/R-REC-P.2001-5-202308-I!!ZIP-E.zip

由于我们请求重新分发这些文件或将其集成至 CRC-COVLIB 源代码的提议被 ITU 礼貌地拒绝，因此这些文件需要从其官方网站下载。然而，我们获得了创建下载脚本的许可，但需满足以下三个条件：在下载过程中显示文件的原始 URL；包含一条说明，指出这些文件仅供个人使用；文件必须保留为原始的文本格式（.txt）。因此，用户可以手动安装这些文件，或者使用提供的 `install_ITU_data.py` Python 脚本进行安装。

如果 ITU 文件未提供给 CRC-COVLIB，仍可运行使用 ITU 模型的仿真。在这种情况下，系统将使用一个合理的默认值来替代本应通过数字地图文件获取的与位置相关的值（详见 `GetITUDigitalMapValue` 中关于默认值的说明）。另一种选择是显式指定用于仿真的参数值（例如，在使用 ITU-R P.1812 模型时，通过 `SetITURP1812AverageRadioRefractivityLapseRate` 或 `SetITURP1812SeaLevelSurfaceRefractivity` 来设置）。

当成功找到并读取所有四个文件时，`SetITUProprietaryDataDirectory` 将返回 `true`，否则返回 `false`。


### C++ API vs Python wrapper API

在继续介绍后续章节中 `ISimulation` 接口的各个方法之前，有必要先简要说明 Python 包装器 API 相较于 C++ API 的一些细微差异。

在 Python 中，`NewSimulation` 函数是通过 `simulation.py` 模块中 `Simulation` 类的构造函数（即 `__init__()` 方法）调用的。因此，应通过创建 `Simulation` 类的新实例来替代直接调用 `NewSimulation`。此外，也无需显式调用 `Release` 方法，因为该方法会在类的析构函数（即 `__del__()` 方法）中自动执行。

对于 `Simulation` 对象的复制，可以使用标准的 Python `copy` 模块来实现。

最后，在导入 `simulation.py` 模块时，`SetITUProprietaryDataDirectory` 会被自动调用。它将 `"crc_covlib/data/itu_proprietary/"` 目录作为输入参数，期望在该目录下找到 ITU 数字地图文件。如果未找到或无法成功读取这些文件，控制台将显示一条警告信息。

以下是一个简单的 Python 代码示例：


```python
from crc_covlib import simulation # calls SetITUProprietaryDataDirectory
import copy
if __name__ == '__main__':
    sim = simulation.Simulation() # creates new Simulation object (calls NewSimulation)
    sim.SetTransmitterLocation(45.1, -75.2)
    ...
    sim_copy = copy.deepcopy(sim) # creates a deep copy of sim
    ...
    exit() # sim object is destroyed here (Release is called on the sim object)
```


## Transmitter methods

```c++
- void SetTransmitterLocation(double Latitude_degrees, double Longitude_degrees)
- double GetTransmitterLatitude()
- double GetTransmitterLongitude()
```



设置/获取发射机的位置，单位为纬度和经度（度）。北半球的纬度必须为正值，南半球的纬度必须为负值。同样，东经为正，西经为负。纬度的有效范围为 -90 至 90 度，经度的有效范围为 -180 至 180 度。发射机位置的默认值为北纬 45 度（+45）、西经 75 度（-75）。

请注意，此处及本文档中所有提及经纬度参数的地方，所使用的坐标参考系均为 “WGS 84”。


---

- void SetTransmitterHeight(double height_meters)
- double GetTransmitterHeight()

设置/获取发射机辐射中心距地面的高度，单位为米。对于 Longley-Rice 传播模型，有效高度范围为 0.5 至 3000 米；对于 ITU-R P.1812 传播模型，有效高度范围为 1 至 3000 米；ITU-R P.452 模型未定义发射机高度的范围限制；对于 eHata 传播模型，有效高度范围为 30 至 200 米。`SetTransmitterHeight` 方法仅接受 0.5 至 3000 米之间的数值。默认值为 50 米。


---

```c++
- void SetTransmitterFrequency(double frequency_MHz)
- double GetTransmitterFrequency()
```



设置/获取发射机频率，单位为兆赫（MHz）。`frequency_MHz` 的取值需大于零，但不同的传播模型对频率范围有不同的适用性。具体来说：

- 对于 Longley-Rice 传播模型，有效频率范围为 20 至 20000 MHz；
- 对于 ITU-R P.1812 传播模型，有效频率范围为 30 至 6000 MHz；
- 对于 ITU-R P.452 传播模型，有效频率范围为 100 至 50000 MHz；
- 对于 eHata 传播模型，适用频率大约为 100 至 3500 MHz。

发射机频率的默认值为 100 MHz。


---

```c++
- void SetTransmitterPower(double power_watts, PowerType powerType=EIRP)
- double GetTransmitterPower(PowerType powerType=EIRP)
```



设置/获取发射机功率，单位为瓦特（watts）。`PowerType` 是一个枚举类型，其取值可以为以下几种之一：

TPO=1
ERP=2
EIRP=3

功率可以被指定或获取为发射功率输出值（Transmit Power Output, TPO）、有效辐射功率值（Effective Radiated Power, ERP）或等效全向辐射功率值（Effective Isotropic Radiated Power, EIRP）。所指定的功率值必须大于零。

以下是各功率类型之间的关系：


- $\operatorname{EIRP} (\mathrm{dBW})=\mathrm{TPO}(\mathrm{dBW})-\mathrm{L}(\mathrm{dB})+\mathrm{G}(\mathrm{dBi})$

- $\operatorname{EIRP}(\mathrm{dBW})=\operatorname{ERP}(\mathrm{dBW})+2.15$

其中：

- $L$ 为发射机损耗，单位为 dB（参见 `SetTransmitterLosses` 方法）；
- $G$ 为发射天线的最大增益，单位为 dBi（参见 `SetAntennaMaximumGain` 方法）。

发射机功率仅在结果类型为 `FIELD_STRENGTH_DBUVM` 和 `RECEIVED_POWER_DBM` 时被考虑（参见 `SetResultType` 方法）。

默认值为 1000 瓦的 EIRP（等效全向辐射功率）。


---

```c++
- void SetTransmitterLosses(double Losses_dB)
- double GetTransmitterLosses()
```



设置/获取与发射机相关的损耗，单位为 dB（例如电缆、连接器等造成的损耗）。该损耗应以正值输入。

当结果类型为 `PATH_LOSS_DB` 时，发射机损耗不被考虑（参见 `SetResultType` 方法）。

默认值为 0 dB。


---

```c++
- void SetTransmitterPolarization(Polarization polarization)
- Polarization GetTransmitterPolarization()
```





设置/获取发射机的极化方式。极化（Polarization）是一个枚举类型，可取以下值之一：

- `HORIZONTAL_POL = 0`（水平极化）
- `VERTICAL_POL = 1`（垂直极化）

默认值为 `VERTICAL_POL`（垂直极化）。


---

## Receiver methods
```c++
- void SetReceiverHeightAboveGround(double height_meters)
- double GetReceiverHeightAboveGround()
```


设置/获取接收机相对于地面的高度，单位为米。

各传播模型的接收机高度有效范围如下：

- 对于 Longley-Rice 传播模型，有效范围为 0.5 至 3000 米；
- 对于 ITU-R P.1812 传播模型，有效范围为 1 至 3000 米；
- 对于 ITU-R P.452 模型，未定义接收机高度的范围限制；
- 对于 eHata 传播模型，有效范围为 1 至 10 米。

`SetReceiverHeightAboveGround` 方法仅接受 0.5 至 3000 米之间的数值。

默认值为 1.5 米。

```c++
- void SetReceiverLosses(double Losses_dB)
- double GetReceiverLosses()
```


设置/获取接收机相关的损耗，单位为分贝（dB），包括电缆、连接器等造成的损耗。损耗应以正值输入。

接收机损耗仅在以下两种结果类型中被考虑：

- `TRANSMISSION_LOSS_DB`
- `RECEIVED_POWER_DBM`

（参见 `SetResultType` 方法）

默认值为 0 dB。


## Antenna methods

是否在仿真中使用天线参数，取决于其他输入参数的设定。

- 当结果类型为 `FIELD_STRENGTH_DBUVM`、`TRANSMISSION_LOSS_DB` 或 `RECEIVED_POWER_DBM` 时，将考虑**发射端**的天线参数（参见 `SetResultType` 方法）。
- 当结果类型为 `TRANSMISSION_LOSS_DB` 或 `RECEIVED_POWER_DBM` 时，将考虑**接收端**的天线参数。
- 此外，在使用 ITU-R P. 452 传播模型进行对流层散射损耗计算时，也会同时考虑发射端和接收端的天线参数。

下述所有与天线相关的方法都以 `Terminal` 类型作为输入参数。`Terminal` 是一个枚举类型，其可能的取值包括：

- `TRANSMITTER = 1`（发射端）
- `RECEIVER = 2`（接收端）

```c++
- void AddAntennaHorizontalPatternEntry(Terminal terminal, double azimuth_degrees, double gain_dB)
```


在指定的方位角（单位为度）上，为天线的水平方向图添加一个新的增益值（单位为 dB）。

`terminal` 参数用于指定该方法应用于发射端 (`TRANSMITTER`) 还是接收端 (`RECEIVER`) 的天线。`azimuth_degrees` 参数的有效范围为 0 到 359.99 度，其中 0 度应对应天线主瓣（最大增益）方向。所添加的增益值应为归一化后的值（即主瓣方向的增益为 0 dB，其他方向为负值）。如果添加的是未归一化的增益值，在添加完所有条目后，可调用 `NormalizeAntennaHorizontalPattern` 方法进行归一化处理。

默认情况下，两个端口的水平天线方向图都不包含任何条目，此时会默认认为所有方位角上的水平增益均为 0 dB。

```c++
- void AddAntennaVerticalPatternEntry(Terminal terminal, int azimuth_degrees, double eLevAngLe_degrees, double gain_dB)
```


在天线的垂直方向图中，在指定的方位角（以度为单位）和仰角（以度为单位）处添加一个新的增益值（以 dB 为单位）。

`terminal` 参数决定该方法是应用于发射端（`TRANSMITTER`）还是接收端（`RECEIVER`）的天线。`azimuth_degrees` 参数用于输入不同的垂直方向图“切片”，必须是 0 到 359 度（含）之间的整数，其中 0 度应被用于最大增益（主瓣）方向。`elevAngle_degrees` 参数必须在 -90 到 +90 度（含）之间，其中 -90 度表示天顶，0 度表示天文地平线，+90 度表示天底。增益值应为归一化的（即在最大增益方向为 0 dB，其他增益值为负）。如果将未归一化的增益值添加到方向图中，则可以在添加完所有条目后使用 `NormalizeAntennaVerticalPattern` 方法进行归一化。


在现实生活中，通常只提供二维天线方向图（一个水平面和一个垂直面）。在这种情况下，垂直天线方向图数据应当输入在 0 度（前瓣垂直切片）和可能的 180 度（后瓣垂直切片）方位角上。根据所使用的近似方法（参见 `SetAntennaPatternApproximationMethod`），模拟中可能会忽略后瓣的垂直切片。

当提供完整的三维方向图时，最好的做法可能是不使用水平方向图，而是以多个垂直切片的形式输入数据（即使用 `AddAntennaVerticalPatternEntry` 方法输入不同的方位角数据，同时不使用 `AddAntennaHorizontalPatternEntry` 方法）。此时应将近似方法设置为 `V_PATTERN_ONLY`，以获得最佳结果并确保所有切片都会被考虑。

默认情况下，两个端口的垂直天线方向图都不包含任何条目。在这种情况下，假定垂直方向图在所有角度上的增益均为 0 dB。

```c++
- void ClearAntennaPatterns(Terminal terminal, bool clearHorizontalPattern=true, bool clearVerticalPattern=true)
```



如果 `clearHorizontalPattern` 为 true，则删除天线的所有水平方向图条目；如果 `clearVerticalPattern` 为 true，则删除所有垂直方向图条目。`terminal` 参数用于指定该方法应用于发射端（TRANSMITTER）还是接收端（RECEIVER）天线。


- void SetAntennaElectricalTilt(Terminal terminal, double elecricalTilt_degrees)
- double GetAntennaElectricalTilt(Terminal terminal)

设置/获取天线的电下倾角（electrical tilt），单位为度。

`terminal` 参数用于指定该方法应用于发射端（TRANSMITTER）还是接收端（RECEIVER）天线。`electricalTilt_degrees` 参数的取值范围为 -90 到 +90 度（含端点），其中 -90 表示天顶（zenith），0 表示天文地平线（astronomical horizon），+90 表示天底（nadir）。当所需的下倾角已经包含在天线方向图中时，应将该倾角值设为 0。

默认值为两个终端的电下倾角均为 0 度。

```c++
- void SetAntennaMechanicalTilt(Terminal terminal, double mechanicalTilt_degrees, double azimuth_degrees=0)
- double GetAntennaMechanicalTilt(Terminal terminal)
- double GetAntennaMechanicalTiltAzimuth(Terminal terminal)
```


设置/获取天线的机械下倾角（mechanical tilt），单位为度。

`terminal` 参数用于指定该方法应用于发射端（TRANSMITTER）还是接收端（RECEIVER）天线。`azimuth_degrees` 参数表示将在其上应用机械下倾角的水平方向图方位角，取值范围为 0 到 359.99 度，其中 0 度通常用于最大增益方向（主瓣）。因此，`azimuth_degrees` 参数通常应设置为 0，但也可以根据需要设为其他值。

`mechanicalTilt_degrees` 参数的取值范围为 -90 到 +90 度（含端点），其中 -90 表示天顶（zenith），0 表示天文地平线（astronomical horizon），+90 表示天底（nadir）。当所需的下倾角已包含在天线方向图中时，应将该倾角值设为 0。

默认值为两个终端的机械下倾角均为 0 度。

```c++
- void SetAntennaMaximumGain(Terminal terminal, double maxGain_dBi)
- double GetAntennaMaximumGain(Terminal terminal)
```


设置/获取天线的最大增益，单位为 dBi（相对于理想各向同性辐射源的增益）。

`terminal` 参数用于指定该方法应用于发射端（TRANSMITTER）还是接收端（RECEIVER）天线。

默认值为两个终端的最大增益均为 0 dBi。

```c++
- void SetAntennaBearing(Terminal terminal, BearingReference bearingRef, double bearing_degrees)
- BearingReference GetAntennaBearingReference(Terminal terminal)
- double GetAntennaBearing(Terminal terminal)
```


设置/获取天线的方位角（bearing），单位为度，基于指定的参考方向。

`terminal` 参数用于指定该方法应用于发射端（TRANSMITTER）还是接收端（RECEIVER）天线。`BearingReference` 是一个枚举类型，可取以下值之一：

- TRUE_NORTH = 1  
- OTHER_TERMINAL = 2

`bearing_degrees` 参数的取值范围为 0 至 359.99 度。

当参考方向设置为 `TRUE_NORTH` 且方位角为 0 度时，天线主瓣将指向真北（假设在使用 `AddAntennaHorizontalPatternEntry` 和/或 `AddAntennaVerticalPatternEntry` 方法时主瓣的方向为 0 度的方位角）。方位角为 90 度时指向东，180 度指向南，270 度指向西。

当参考方向设置为 `OTHER_TERMINAL` 且方位角为 0 度时，天线主瓣将指向对端终端（即发射端的天线指向接收端，接收端的天线指向发射端）。增加方位角值将使主瓣从该方向顺时针旋转（例如，方位角为 180 度将使天线背离对端终端）。

请注意，方位角参数不影响天线的俯仰角。

![](https://cdn.mathpix.com/cropped/2025_11_12_2e8e2abdc13239d4ed3dg-13.jpg?height=557&width=1630&top_left_y=249&top_left_x=246)

TRANSMITTER 天线的默认值为相对于 TRUE_NORTH 的 0 度。  
RECEIVER 天线的默认值为相对于 OTHER_TERMINAL 的 0 度。

```c++
- double NormalizeAntennaHorizontalPattern(Terminal terminal)
- double NormalizeAntennaVerticalPattern(Terminal terminal)
```


对天线的水平或垂直方向图进行归一化处理。

`terminal` 参数用于指定该方法应用于发射端（TRANSMITTER）还是接收端（RECEIVER）天线。在使用 `AddAntennaHorizontalPatternEntry` 和/或 `AddAntennaVerticalPatternEntry` 方法添加方向图条目后，可以分别使用 `NormalizeAntennaHorizontalPattern` 和/或 `NormalizeAntennaVerticalPattern` 方法对方向图进行归一化。

归一化操作将最大增益值调整为 0 dB，并以相同的增益改变量调整所有其他条目。返回值是增益条目被修改的幅度（单位为 dB），可能为正值（当最大增益小于 0 dB 时）或负值（当最大增益大于 0 dB 时）。

请注意，调用归一化方法不会改变通过 `Get/SetAntennaMaximumGain` 访问的最大天线增益值（单位 dBi）。如果在归一化之后需要调整最大增益（dBi），必须显式调用 `SetAntennaMaximumGain` 方法。

```c++
- void SetAntennaPatternApproximationMethod(Terminal terminal, PatternApproximationMethod method)
- PatternApproximationMethod GetAntennaPatternApproximationMethod( Terminal terminal)
```


设置/获取用于根据 `HORIZONTAL` 和 `VERTICAL` 天线图计算任意方向天线增益的 `3D APPROXIMATION METHOD`（有时称为 `INTERPOLATION METHOD`）。

`terminal` 参数用于指定该方法应用于 `TRANSMITTER` 还是 `RECEIVER` 天线。`PatternApproximationMethod` 是一个枚举类型，可取以下值之一：
- `H_PATTERN_ONLY = 1`  
- `V_PATTERN_ONLY = 2`  
- `SUMMING = 3`  
- `WEIGHTED_SUMMING = 4`  
- `HYBRID = 5`  

`H_PATTERN_ONLY` 方法仅使用 `HORIZONTAL PATTERN`，而 `V_PATTERN_ONLY` 方法仅使用 `VERTICAL PATTERN`（即所有可用的 `VERTICAL SLICES`）。

`SUMMING` 方法是一种常见的近似方法，它简单地将目标方位角下的 `HORIZONTAL PATTERN GAIN`（单位 dB）与目标俯仰角下的 `VERTICAL PATTERN GAIN`（单位 dB）相加。其他方法如 `WEIGHTED_SUMMING`（参见 [3]）和 `HYBRID`（参见 [4]）更复杂但通常更精确。这些方法仅使用 `HORIZONTAL PATTERN` 和 `FRONT LOBE VERTICAL SLICE`（即在 `0` 度方位角输入的 `VERTICAL PATTERN` 数据），忽略所有其他 `VERTICAL SLICE`（包括 `BACK LOBE VERTICAL SLICE`）。这些方法通常假设图形数据已被 `NORMALIZED`（参见 `NormalizeAntennaHorizontalPattern` 和 `NormalizeAntennaVerticalPattern`）。

在生成 `SIMULATION` 结果时，是否使用天线增益取决于所选 `RESULT TYPE`（见 `SetResultType` 方法）和 `PROPAGATION MODEL`。如果需要，`HORIZONTAL PATTERN GAIN` 将基于 `TRANSMITTER` 与 `RECEIVER` 位置之间的 `GREAT-CIRCLE PATH` 方位角获取。`VERTICAL PATTERN GAIN` 所需的仰角将基于 `ITU-R P.1812` 和 `ITU-R P.452` 推荐中的 `PATH PROFILE ANALYSIS` 算法计算（即使仿真未选用 `ITU` 模型也适用）。该算法使用天线高度、`TERRAIN ELEVATION PROFILE`（若设置了 `TERRAIN ELEVATION DATA SOURCE`）和大气的 `AVERAGE RADIO-REFRACTIVITY LAPSE-RATE`。  
在 `LINE-OF-SIGHT` 条件下，仰角指向另一终端天线；否则指向 `RADIO HORIZON`（即 `TERRAIN CLEARANCE ANGLE`）。

`TRANSMITTER` 和 `RECEIVER` 的默认 `APPROXIMATION METHOD` 均为 `HYBRID`。

```c++
- double GetAntennaGain(Terminal terminal, double azimuth_degrees, double elevAngle_degrees, double receiverLatitude_degrees=0, double receiverLongitude_degrees=0)
```


获取指定方位角和俯仰角下天线的近似增益（单位为 dBi）。

`terminal` 参数用于指定该方法应用于 `TRANSMITTER` 还是 `RECEIVER` 天线。`GetAntennaGain` 使用通过 `SetAntennaPatternApproximationMethod` 指定的 `APPROXIMATION METHOD`，同时还会考虑图形、最大增益、倾斜角（`TILTS`）和方向（`BEARING`）等参数。

`azimuth_degrees` 值为 0（或 360 的任意倍数）表示正北方向（`TRUE NORTH`）。`elevAngle_degrees` 参数必须在 -90 到 +90 度之间，其中 -90 表示天顶（`ZENITH`）、0 表示天文地平线（`ASTRONOMICAL HORIZON`）、+90 表示地底（`NADIR`）。

当终端的 `BEARING REFERENCE`（见 `SetAntennaBearing`）设置为 `OTHER_TERMINAL` 时，需要提供 `RECEIVER` 的坐标，以便正确评估天线方向的影响；否则，`receiverLatitude_degrees` 和 `receiverLongitude_degrees` 不会被使用。


## Propagation model selection methods

```c++
- void SetPropagationModel(PropagationModel propagationModel)
- PropagationModel GetPropagationModel()
```



设置/获取用于生成结果的传播模型。`PropagationModel` 是一个枚举类型，可以取以下值之一：


| LONGLEY_RICE | $=0$ |
| :--- | :--- |
| ITU_R_P_1812 | $=1$ |
| ITU_R_P_452_V17 | $=2$ |
| ITU_R_P_452_V18 | $=3$ |
| FREE_SPACE | $=4$ |
| EXTENDED_HATA | $=5$ |
| CRC_MLPL | $=6$ |
| CRC_PATH_OBSCURA | $=7$ |

`LONGLEY_RICE` 对应于不规则地形模型（Irregular Terrain Model, ITM），也称为 Longley-Rice（来自 NTIA）。

`ITU_R_P_1812` 对应于建议书 ITU-R P.1812-7。

`ITU_R_P_452_V17` 对应于建议书 ITU-R P.452-17。

`ITU_R_P_452_V18` 对应于建议书 ITU-R P.452-18。

`FREE_SPACE` 对应于自由空间传输（见建议书 ITU-R P.525）。

`EXTENDED_HATA` 对应于 Extended-Hata（eHata）城市传播模型（来自 NTIA）。

`CRC_MLPL` 是加拿大通信研究中心（Communications Research Centre Canada）在 2024 年开发的基于机器学习的路径损耗模型，使用公开的 ITU-R 英国 Ofcom 传输测试数据集进行训练。[1]

`CRC_PATH_OBSCURA` 是加拿大通信研究中心在 2025 年开发的最新基于机器学习的路径损耗模型，使用公开的 ITU-R 英国 Ofcom 传输测试数据集进行训练。[2]

传播模型的默认值为 `LONGLEY_RICE`。


|  | Frequency (MHz) | Tx height (m) | Rx height (m) | Path length (km) | Terrain elevation data usage | Surface elevation data usage | Land cover data usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Longley-Rice | 20-20,000 | 0.5-3,000 | 0.5-3,000 | 1-2,000 | Yes | No | No |
| ITU-R P. 1812 | 30-6,000 | 1-3,000 | 1-3,000 | 0.25-3,000 | Yes | Yes ${ }^{1}$ | Yes ${ }^{1}$ |
| ITU-R P. 452 | 100-50,000 | N/A ${ }^{2}$ | N/A ${ }^{2}$ | N/A ${ }^{2}$ | Yes | Yes ${ }^{3}$ | Yes ${ }^{3}$ |
| Free space | N/A | N/A | N/A | N/A | Yes ${ }^{4}$ | No | No |
| eHata | 100-3,500 | 30-200 | 1-10 | 1-100 | Yes | No | No |
| CRC-MLPL | 500-6,000 ${ }^{5}$ | N/A | N/A | 0-50 | Yes ${ }^{4}$ | Yes | No |
| CRC Path Obscura | 500-6,000 ${ }^{5}$ | N/A | N/A | 0-50 | Yes | Yes | No |

/// note | 
1. 使用地表或地表覆盖数据（参见 `SetITURP1812SurfaceProfileMethod`）。
2. 可合理假设其适用范围与 ITU-R P.1812 模型相似。
3. ITU-R P.452 第17版不使用地表数据，仅可使用地表覆盖数据（参见 `SetITURP452HeightGainModelMode`）；第18版可使用地表或地表覆盖数据（参见 `SetITURP452SurfaceProfileMethod`）。
4. 仅在发射机和接收机位置使用。
5. 最佳性能频率范围为 500 至 6,000 MHz，但在最高 10,000 MHz 时仍可获得可接受的结果。
///


## Longley-Rice propagation model methods
```c++
- void SetLongleyRiceSurfaceRefractivity(double refractivity_NUnits)
- double GetLongleyRiceSurfaceRefractivity()
```


设置/获取地表折射率（surface refractivity），单位为 N 单位（N-units）。有效范围为 250 到 400 N 单位。默认值为 301 N 单位。

```c++
- void SetLongleyRiceGroundDielectricConst(double dieLectricConst)
- double GetLongleyRiceGroundDielectricConst()
```


设置/获取地面的介电常数（dielectric constant）。有效范围为 4 到 81。默认值为 15。

```c++
- void SetLongleyRiceGroundConductivity(double groundConduct_Sm)
- double GetLongleyRiceGroundConductivity()
```


设置/获取地面的导电率，单位为西门子每米（Siemens per meter）。有效范围为 0.001 到 $5\ \mathrm{S}/\mathrm{m}$。默认值为 $0.005\ \mathrm{S}/\mathrm{m}$。

```c++
- void SetLongleyRiceClimaticZone(LRClimaticZone climaticZone)
- LRClimaticZone GetLongleyRiceClimaticZone()
```


设置/获取气候带（climatic zone）。`LRClimaticZone` 是一个枚举类型，可以取以下值之一：

- `LR_EQUATORIAL = 1`
- `LR_CONTINENTAL_SUBTROPICAL = 2`
- `LR_MARITIME_SUBTROPICAL = 3`
- `LR_DESERT = 4`
- `LR_CONTINENTAL_TEMPERATE = 5`
- `LR_MARITIME_TEMPERATE_OVER_LAND = 6`
- `LR_MARITIME_TEMPERATE_OVER_SEA = 7`

默认值为 `LR_CONTINENTAL_TEMPERATE`。

```c++
- void SetLongleyRiceActivePercentageSet(LRPercentageSet percentageSet)
- LRPercentageSet GetLongleyRiceActivePercentageSet()
```


设置/获取用于路径损耗计算的百分比值集合。`Longley-Rice` 可以使用时间/位置/情境集（time/location/situation set）或置信度/可靠性集（confidence/reliability set）。`LRPercentageSet` 是一个枚举类型，可以取以下值之一：

- `LR_TIME_LOCATION_SITUATION = 1`
- `LR_CONFIDENCE_RELIABILITY = 2`

默认值为 `LR_TIME_LOCATION_SITUATION`。

```c++
- void SetLongleyRiceTimePercentage(double time_percent)
- double GetLongleyRiceTimePercentage()
```


设置/获取时间百分比（即时间可变性）。有效范围为 0.1 到 99.9。默认值为 50。该时间百分比仅在当前使用的百分比集合为 `LR_TIME_LOCATION_SITUATION` 时适用。

```c++
- void SetLongleyRiceLocationPercentage(double Location_percent)
- double GetLongleyRiceLocationPercentage()
```


设置/获取位置百分比（即位置可变性）。有效范围为 0.1 到 99.9。默认值为 50。该位置百分比仅在当前使用的百分比集合为 `LR_TIME_LOCATION_SITUATION` 时适用。

```c++
- void SetLongleyRiceSituationPercentage(double situation_percent)
- double GetLongleyRiceSituationPercentage()
```


设置/获取情境百分比（即情境可变性）。有效范围为 0.1 到 99.9。默认值为 50。该情境百分比仅在当前使用的百分比集合为 `LR_TIME_LOCATION_SITUATION` 时适用。

```c++
- void SetLongleyRiceConfidencePercentage(double confidence_percent)
- double GetLongleyRiceConfidencePercentage()
```


设置/获取置信百分比（即置信可变性）。有效范围为 0.1 到 99.9。默认值为 50。该置信百分比仅在当前使用的百分比集合为 `LR_CONFIDENCE_RELIABILITY` 时适用。

```c++
- void SetLongleyRiceReliabilityPercentage(double reLiabiLity_percent)
- double GetLongleyRiceReliabilityPercentage()
```


设置/获取可靠性百分比（即可靠性可变性）。有效范围为 0.1 到 99.9。默认值为 50。该可靠性百分比仅在当前使用的百分比集合为 `LR_CONFIDENCE_RELIABILITY` 时适用。

```c++
- void SetLongleyRiceModeOfVariability(int mode)
- int GetLongleyRiceModeOfVariability()
```


设置/获取可变性模式。可使用以下数值来表示模式：

$0=$ 单条消息模式  
1 = 偶发模式  
2 = 移动模式  
3 = 广播模式  

此外，可通过在模式上加上 10 来消除位置可变性，加上 20 来消除情境可变性。

因此，有效的模式值为 0 至 3（含），10 至 13（含），20 至 23（含），以及 30 至 33（含）。默认值为 12。

或者，也可以使用 `LRModeOfVariability` 枚举类型中的值来指定可变性模式，而不是直接使用整数。`LRModeOfVariability` 是一个枚举类型，包含以下值：

- `LR_SINGLE_MESSAGE_MODE = 0`
- `LR_ACCIDENTAL_MESSAGE_MODE = 1`
- `LR_MOBILE_MODE = 2`
- `LR_BROADCAST_MODE = 3`
- `LR_ELIMINATE_LOCATION_VARIABILITY = 10`
- `LR_ELIMINATE_SITUATION_VARIABILITY = 20`

例如：  
`SetLongleyRiceModeOfVariability(LR_MOBILE_MODE + LR_ELIMINATE_LOCATION_VARIABILITY)`


### Additional resources

关于 Longley-Rice / ITM（不规则地形模型，Irregular Terrain Model）传播模型的更多资源可参见：

https://github.com/NTIA/itm
https://its.ntia.gov/research-topics/radio-propagation-software/itm/itm/
https://udel.edu/~mm/itm/

有用的背景信息和规范发布在美国国家电信和信息管理局（NTIA）的网站上，内容涉及不规则地形模型（Irregular Terrain Model, ITM），亦称为 Donald H. Longley–Peter L. Rice 模型。

关于 Longley-Rice 传播模型的技术细节、实现指南和使用说明可通过国际电信联盟（ITU）的相关文件获取，包括 ITU-R 的建议书和报告。



## ITU-R P. 1812 propagation model methods
```c++
- void SetITURP1812TimePercentage(double time_percent)
- double GetITURP1812TimePercentage()
```


设置/获取在一年平均时间中，计算出的基本传输损耗未被超过的百分比。有效范围为 1 到 50。默认值为 50。

```c++
- void SetITURP1812LocationPercentage(double Location_percent)
- double GetITURP1812LocationPercentage()
```


设置/获取在指定位置中，计算出的基本传输损耗未被超过的百分比。有效范围为 1 到 99。默认值为 50。

```c++
- void SetITURP1812AverageRadioRefractivityLapseRate(double deLtaN_Nunitskm)
- double GetITURP1812AverageRadioRefractivityLapseRate()
```


设置/获取大气中最低1公里的平均无线电折射率递减率，单位为 N 单位/km。或者，也可以将 `deLtaN_Nunitskm` 设置为 `AUTOMATIC`。在这种情况下，该值将根据路径中心的地理位置，从 ITU 数字地图文件 `DN50.TXT` 中读取。该文件在磁盘上的位置必须通过 `SetITUProprietaryDataDirectory` 指定。默认值为 `AUTOMATIC`。

```c++
- void SetITURP1812SeaLevelSurfaceRefractivity(double N0_Nunits)
- double GetITURP1812SeaLevelSurfaceRefractivity()
```


设置/获取海平面表面折射率，单位为 N 单位。或者，也可以将 `NO_Nunits` 设置为 `AUTOMATIC`。在这种情况下，该值将根据路径中心的地理位置，从 ITU 数字地图文件 `N050.TXT` 中读取。该文件在磁盘上的位置必须通过 `SetITUProprietaryDataDirectory` 指定。默认值为 `AUTOMATIC`。

```c++
- void SetITURP1812PredictionResolution(double resolution_meters)
- double GetITURP1812PredictionResolution()
```


设置/获取预测分辨率，单位为米。预测分辨率是指变异性作用的正方形区域的边长。该值必须大于零。默认值为 100 米。

当位置百分比设置为 50 时，预测分辨率参数无效。更多细节参见 ITU-R P.1812-7 建议书附录 1 的第 4.7 和 4.9 节。

```c++
- void SetITURP1812SurfaceProfileMethod(P1812SurfaceProfileMethod method)
- P1812SurfaceProfileMethod GetITURP1812SurfaceProfileMethod()
```


设置/获取用于生成地表剖面的方法，该方法如 ITU-R P.1812-7 建议书附录 1 第 3.2.1 和 3.2.2 节所述。`P1812SurfaceProfileMethod` 是一个枚举类型，可取以下值之一：

- `P1812_ADD_REPR_CLUTTER_HEIGHT = 1`
- `P1812_USE_SURFACE_ELEV_DATA = 2`

当选择 `P1812_ADD_REPR_CLUTTER_HEIGHT` 时，地表剖面通过在地形高程值上添加代表性杂波高度来生成。该方法同时使用地形高程数据（参见 `SetPrimaryTerrainElevDataSource`）和地表覆盖数据（参见 `SetPrimaryLandCoverDataSource`）。

当选择 `P1812_USE_SURFACE_ELEV_DATA` 时，地表剖面直接使用地表高程数据生成，除了发射端和接收端的位置，这两处使用的是地形高程数据。该方法同时使用地形高程数据（参见 `SetPrimaryTerrainElevDataSource`）和地表高程数据（参见 `SetPrimarySurfaceElevDataSource`）。

对于两种方法，地表剖面中各点的间距由地形高程数据的采样分辨率决定（参见 `SetTerrainElevDataSamplingResolution`）。

地表剖面方法的默认值为 `P1812_ADD_REPR_CLUTTER_HEIGHT`。

```c++
- void SetITURP1812RepresentativeClutterHeight(P1812ClutterCategory clutterCategory, double reprHeight_meters)

- double GetITURP1812RepresentativeClutterHeight(P1812ClutterCategory clutterCategory)
```


设置/获取指定杂波类别的代表性高度（单位：米）。P1812ClutterCategory 是一种枚举类型，可以取以下值：

| P1812_WATER_SEA | $=1$ |
| :--- | :--- |
| P1812_OPEN_RURAL | $=2$ |
| P1812_SUBURBAN | $=3$ |
| P1812_URBAN_TREES_FOREST | $=4$ |
| P1812_DENSE_URBAN | $=5$ |

与每个杂波类别关联的默认代表性高度如下：

| 杂波类别 |  |  | 代表性高度（米） |
| :--- | :--- | :--- | :--- |
| P1812 | WATER SEA |  | 0 |
| P1812 | OPEN RURAL |  | 0 |
| P1812 | SUBURBAN |  | 10 |
| P1812 | URBAN | TREES FOREST | 15 |
| P1812 | DENSE | URBAN | 20 |

从发射机到接收机路径上的任意剖面所应用的杂波类别由指定的地表覆盖数据源决定。地表覆盖数据源可以使用 `SetPrimaryLandCoverDataSource` 和 `SetSecondaryLandCoverDataSource` 方法进行指定。来自数据源的地表覆盖分类需映射为 ITU-R P.1812 推荐书中的杂波类别。这可通过 `SetLandCoverClassMapping` 和 `SetDefaultLandCoverClassMapping` 方法实现。默认映射可能已经存在，具体取决于所选择的地表覆盖数据源。

或者，也可以直接将地表覆盖分类映射为代表性杂波高度，而非使用推荐书中的杂波类别（见 `SetITURP1812LandCoverMappingType`）。

用于发射机与接收机之间的地表覆盖数据采样点数量由地形高程数据的采样分辨率决定（见 `SetTerrainElevDataSamplingResolution`），因此地形高程和地表覆盖剖面中的采样数量与位置将保持一致。

当未指定地表覆盖数据源，或在某一特定位置上没有地表覆盖数据可用时，传播模型的实现将默认使用 `P1812_OPEN_RURAL` 类别。

当地表剖面方法设置为 `P1812_USE_SURFACE_ELEV_DATA`（见 `SetITURP1812SurfaceProfileMethod`）时，将不会使用杂波类别和代表性杂波高度。

有关杂波类别和代表性杂波高度的更多信息，参见 ITU-R P.1812-7 推荐书附录1的第3.2节。

```c++
- void SetITURP1812LandCoverMappingType(P1812LandCoverMappingType mappingType)
- P1812LandCoverMappingType GetITURP1812LandCoverMappingType()
```


`SetITURP1812LandCoverMappingType` 用于确定 ITU-R P.1812 传播模型如何解释已映射到地表覆盖分类的值。`P1812LandCoverMappingType` 是一个枚举类型，可以取以下值之一：
- `P1812_MAP_TO_CLUTTER_CATEGORY = 1`
- `P1812_MAP_TO_REPR_CLUTTER_HEIGHT = 2`

当设置为 `P1812_MAP_TO_CLUTTER_CATEGORY` 时，映射值被解释为 `P1812ClutterCategory` 中的杂波类别。  
当设置为 `P1812_MAP_TO_REPR_CLUTTER_HEIGHT` 时，映射值被解释为以米为单位的代表性杂波高度。  
映射值可以使用 `SetLandCoverClassMapping` 和 `SetDefaultLandCoverClassMapping` 方法进行设置或修改。

当地表剖面方法设置为 `P1812_USE_SURFACE_ELEV_DATA`（见 `SetITURP1812SurfaceProfileMethod`）时，不使用地表覆盖映射类型。

地表覆盖映射类型的默认值为 `P1812_MAP_TO_CLUTTER_CATEGORY`。

```c++
- void SetITURP1812RadioClimaticZonesFile(const char* pathname)
- const char* GetITURP1812RadioClimaticZonesFile()
```


设置/获取用于 ITU-R P.1812 无线气候区划的源文件。该文件必须为 GeoTIFF 格式，并采用 WGS 84（EPSG: 4326）坐标参考系。在每个像素处应根据无线气候区划设置以下值之一：

| 无线气候区划       | 像素值 |
| :----------------- | :----- |
| 海岸陆地（Coastal land） | 3     |
| 内陆（Inland）            | 4     |
| 海洋（Sea）              | 1     |

CRC-COVLIB 随附提供了一个名为 `rcz.tif` 的文件，该文件在“尽力而为”基础上用于判断推荐中定义的无线气候区划。需要注意的是，该文件在制作和验证过程中**未使用**推荐中提及的 ITU 数字化世界地图（IDWM）产品。

作为 `rcz.tif` 的替代，还提供了一个名为 `rcz_no_lakes.tif` 的文件，该文件未将加拿大几个最大的湖泊定义为“海洋”区域。

`pathname` 可以是相对路径或完整路径。默认值为空字符串。当未指定文件时，整个发射机到接收机路径将假定为“内陆”区域。

关于无线气候区划的更多详情，参见 ITU-R P.1812-7 推荐附录1第3.3节。

---

### Additional implementation details for ITU-R P. 1812

1) 排除项

传播模型的实现中**不包括**建筑物进入损耗（见附录1第4.8节）。

2) 对流层散射模型（Troposcatter model）

根据ITU官方网站的建议（参见：https://www.itu.int/rec/R-REC-P.1812/en），本传播模型对 ITU-R P.1812-7 的实现**回退使用了第6版推荐中的对流层散射模型**。


## ITU-R P. 452 propagation model methods
```c++
- void SetITURP452TimePercentage(double time_percent)
- double GetITURP452TimePercentage()
```


设置/获取计算得到的基本传输损耗不被超过的时间百分比。

这些方法（即 `Set/GetITURP452TimePercentage`）适用于该传播模型的所有可用版本（即第 17 与第 18 版）。

有效范围为 0.001 到 50。默认值为 50。

```c++
- void SetITURP452PredictionType(P452PredictionType predictionType)
- P452PredictionType GetITURP452PredictionType()
```


设置/获取预测类型（年平均或“最差月份”）。`P452PredictionType` 是一种枚举类型，可以取以下值：

- `P452_AVERAGE_YEAR = 1`
- `P452_WORST_MONTH = 2`

当预测类型设置为 `P452_AVERAGE_YEAR` 时，通过 `SetITURP452TimePercentage` 指定的时间百分比被解释为“在年平均中传输损耗不被超过的时间百分比”。

当预测类型设置为 `P452_WORST_MONTH` 时，通过 `SetITURP452TimePercentage` 指定的时间百分比被解释为“在最差月份中传输损耗不被超过的时间百分比”。一个等效的年平均时间百分比将按照 ITU-R P.452-17/18 建议书附录1第3.2.1节中的描述进行计算，并用于后续的计算过程。

这些方法（即 `Set/GetITURP452PredictionType`）适用于该传播模型的所有可用版本（即第 17 与 18 版）。

默认值为 `P452_AVERAGE_YEAR`。

```c++
- void SetITURP452AverageRadioRefractivityLapseRate(double deLtaN_Nunitskm)
- double GetITURP452AverageRadioRefractivityLapseRate()
```


设置/获取大气中最低 1 公里层的平均无线电折射率递减率，单位为 N 单位/km。或者，`deLtaN_Nunitskm` 可以设置为 `AUTOMATIC`。在这种情况下，该值将根据路径中心的地理位置，从 ITU 数字地图文件 `DN50.TXT` 中读取。该文件在磁盘上的位置必须通过 `SetITUProprietaryDataDirectory` 指定。

这些方法（即 `Set/GetITURP452AverageRadioRefractivityLapseRate`）适用于该传播模型的所有可用版本（即第 17 与 18 版）。

默认值为 `AUTOMATIC`。

```c++
- void SetITURP452SeaLevelSurfaceRefractivity(double NO_Nunits)
- double GetITURP452SeaLevelSurfaceRefractivity()
```


设置/获取海平面表面折射率，单位为 N 单位。或者，`NO_Nunits` 可以设置为 `AUTOMATIC`。在这种情况下，该值将根据路径中心的地理位置，从 ITU 数字地图文件 `N050.TXT` 中读取。该文件在磁盘上的位置必须通过 `SetITUProprietaryDataDirectory` 指定。

这些方法（即 `Set/GetITURP452SeaLevelSurfaceRefractivity`）适用于该传播模型的所有可用版本（即第 17 与 18 版）。

默认值为 `AUTOMATIC`。

```c++
- void SetITURP452AirTemperature (double temperature_C)
- double GetITURP452AirTemperature()
```


设置/获取空气温度，单位为摄氏度（Celsius）。或者，`temperature_C` 可以设置为 `AUTOMATIC`。在这种情况下，将使用ITU-R P.1510-1建议中的年平均地表温度。该值将根据路径中心的地理位置，从 ITU 数字地图文件 `T_Annual.TXT` 中读取。该文件在磁盘上的位置必须通过 `SetITUProprietaryDataDirectory` 指定。

这些方法（即 `Set/GetITURP452AirTemperature`）适用于该传播模型的所有可用版本（即第 17 与 18 版）。

默认值为 `AUTOMATIC`。

```c++
- void SetITURP452AirPressure(double pressure_hPa)
- double GetITURP452AirPressure()
```


设置/获取气压（也称为大气压），单位为百帕（hectopascals，hPa）。或者，`pressure_hPa` 可以设置为 `AUTOMATIC`。在这种情况下，将使用 ITU-R P.835-6 建议（附录1，第1.1节）中针对路径中心地形高度的年平均全球参考大气压值。

这些方法（即 `Set/GetITURP452AirPressure`）适用于该传播模型的所有可用版本（即第 17 与 18 版）。

默认值为 `AUTOMATIC`。

```c++
- void SetITURP452RadioClimaticZonesFile(const char* pathname)
- const char* GetITURP452RadioClimaticZonesFile()
```


设置/获取用于 ITU-R P.452 无线电气候区数据的源文件。该文件必须为 GeoTIFF 格式，使用 WGS 84（EPSG: 4326）坐标参考系，并且每个像素的数值需对应以下无线电气候区之一：

| 无线电气候区 | 像素值 |
| :--- | :--- |
| 沿海陆地（Coastal land） | 3 |
| 内陆（Inland） | 4 |
| 海洋（Sea） | 1 |

一个名为 `rcz.tif` 的文件随 `CRC-COVLIB` 提供，尽力用于确定建议中定义的无线电气候区。请注意，建议中提到的 ITU 数字化世界地图（IDWM）产品并未被用于生成或验证该 `rcz.tif` 文件。作为 `rcz.tif` 文件的替代，还提供了一个名为 `rcz_no_lakes.tif` 的文件，该文件未将加拿大最大的几个湖泊定义为“海洋”区。

`pathname` 参数可以包含相对路径或完整路径。默认值为空字符串。当未指定任何文件时，将假设整个发射机至接收机路径均为“内陆”区域。

这些方法（即 `Set/GetITURP452RadioClimaticZonesFile`）适用于该传播模型的所有可用版本（即第 17 与 18 版）。

有关无线电气候区的更多详细信息，请参见 ITU-R P.452-17/18 建议，附录1第 3.2.1 节。


```c++
- void SetITURP452HeightGainModelClutterValue(
P452HeightGainModelClutterCategory clutterCategory, P452HeightGainModelClutterParam nominalParam, double nominalValue)

- double GetITURP452HeightGainModelClutterValue(
P452HeightGainModelClutterCategory clutterCategory, P452HeightGainModelClutterParam nominaLParam)
```


设置/获取指定高度增益模型杂波类别的**名义高度（以米为单位）**或**名义距离（以千米为单位）**。`P452HeightGainModelClutterCategory` 是一个枚举类型，可以取以下值：


| P452_HGM_HIGH_CROP_FIELDS | = 13 |
| :--- | :--- |
| P452_HGM_PARK_LAND | = 19 |
| P452_HGM_IRREGULARLY_SPACED_SPARSE_TREES | = 21 |
| P452_HGM_ORCHARD_REGULARLY_SPACED | = 22 |
| P452_HGM_SPARSE_HOUSES | = 31 |
| P452_HGM_VILLAGE_CENTRE | = 32 |
| P452_HGM_DECIDUOUS_TREES_IRREGULARLY_SPACED | = 23 |
| P452_HGM_DECIDUOUS_TREES_REGULARLY_SPACED | = 24 |
| P452_HGM_MIXED_TREE_FOREST | = 27 |
| P452_HGM_CONIFEROUS_TREES_IRREGULARLY_SPACED = 25 |  |
| P452_HGM_CONIFEROUS_TREES_REGULARLY_SPACED = 26 |  |
| P452_HGM_TROPICAL_RAIN_FOREST | = 28 |
| P452_HGM_SUBURBAN | = 33 |
| P452_HGM_DENSE_SUBURBAN | = 34 |
| P452_HGM_URBAN | = 35 |
| P452_HGM_DENSE_URBAN | = 36 |
| P452_HGM_HIGH_RISE_URBAN | = 38 |
| P452_HGM_INDUSTRIAL_ZONE | = 37 |
| P452_HGM_OTHER | $=90$ |
| P452_HGM_CUSTOM_AT_TRANSMITTER | $=200$ |
| P452_HGM_CUSTOM_AT_RECEIVER | $=201$ |

`P452HeightGainModelClutterParam` 是一个枚举类型，可以取以下值：

- `P452_NOMINAL_HEIGHT_M = 1`
- `P452_NOMINAL_DISTANCE_KM = 2`

`nominalValue` 应根据所指定的 `nominaLParam` 值，分别设置为新的**名义高度（单位为米）**或**名义距离（单位为千米）**。各杂波类别的默认名义值如下表所示：


| 杂波类型（Clutter Category） | 名义高度（米） | 名义距离（千米） |
| :--- | :--- | :--- |
| P452_HGM_HIGH_CROP_FIELDS | 4.0 | 0.1 |
| P452_HGM_PARK_LAND | 4.0 | 0.1 |
| P452_HGM_IRREGULARLY_SPACED_SPARSE_TREES | 4.0 | 0.1 |
| P452_HGM_ORCHARD_REGULARLY_SPACED | 4.0 | 0.1 |
| P452_HGM_SPARSE_HOUSES | 4.0 | 0.1 |
| P452_HGM_VILLAGE_CENTRE | 5.0 | 0.07 |
| P452_HGM_DECIDUOUS_TREES_IRREGULARLY_SPACED | 15.0 | 0.05 |
| P452_HGM_DECIDUOUS_TREES_REGULARLY_SPACED | 15.0 | 0.05 |
| P452_HGM_MIXED_TREE_FOREST | 15.0 | 0.05 |
| P452_HGM_CONIFEROUS_TREES_IRREGULARLY_SPACED | 20.0 | 0.05 |
| P452_HGM_CONIFEROUS_TREES_REGULARLY_SPACED | 20.0 | 0.05 |
| P452_HGM_TROPICAL_RAIN_FOREST | 20.0 | 0.03 |
| P452_HGM_SUBURBAN | 9.0 | 0.025 |
| P452_HGM_DENSE_SUBURBAN | 12.0 | 0.02 |
| P452_HGM_URBAN | 20.0 | 0.02 |
| P452_HGM_DENSE_URBAN | 25.0 | 0.02 |
| P452_HGM_HIGH_RISE_URBAN | 35.0 | 0.02 |
| P452_HGM_INDUSTRIAL_ZONE | 20.0 | 0.05 |
| P452_HGM_OTHER | 0.0 | 0.0 |
| P452_HGM_CUSTOM_AT_TRANSMITTER | 0.0 | 0.0 |
| P452_HGM_CUSTOM_AT_RECEIVER | 0.0 | 0.0 |

是否在传输路径的任一端应用某一杂波类型及其具体类别以计算额外的杂波损耗，取决于传递给 `SetITURP452HeightGainModelMode` 方法的指定值。

这些方法（即 `Set/GetITURP452HeightGainModelClutterValue`）仅适用于传播模型第 17 版。

有关高度-增益模型中杂波类型、名义高度与距离的更多信息，请参见 ITU-R P.452-17 推荐书附录 1 第 4.5 节。


```c++
- void SetITURP452HeightGainModelMode(Terminal terminal, P452HeightGainModelMode mode)
- P452HeightGainModelMode GetITURP452HeightGainModelMode(Terminal terminal)
```


设置/获取传输路径任一端的高度-增益模型模式。`Terminal` 是一个枚举类型，可以取以下值之一：

`TRANSMITTER = 1`  
`RECEIVER = 2`

`P452HeightGainModelMode` 是一个枚举类型，可以取以下值之一：


`P452_NO_SHIELDING = 1`  
`P452_USE_CUSTOM_AT_CATEGORY = 2`  
`P452_USE_CLUTTER_PROFILE = 3`  
`P452_USE_CLUTTER_AT_ENDPOINT = 4`

`P452_NO_SHIELDING`
不会添加任何杂波损耗。


### `P452_USE_CUSTOM_AT_CATEGORY`

当模式被设置为 `P452_USE_CUSTOM_AT_CATEGORY` 并应用于路径中 `TRANSMITTER` 端时，将使用 `P452_HGM_CUSTOM_AT_TRANSMITTER` 杂波类别的名义高度和距离进行发射端站点的杂波损耗计算。  
同样地，当模式被设置为 `P452_USE_CUSTOM_AT_CATEGORY` 并应用于路径中 `RECEIVER` 端时，将使用 `P452_HGM_CUSTOM_AT_RECEIVER` 杂波类别的名义高度和距离进行接收端站点的杂波损耗计算。


### `P452_USE_CLUTTER_PROFILE`

将在发射端与接收端之间使用一个杂波类别剖面。在该剖面中，距离发射端或接收端100米范围内所出现的、具有最大名义高度值的杂波类别将被保留。随后，将使用该保留杂波类别的名义高度和距离值来进行杂波损耗的计算。


### `P452_USE_CLUTTER_AT_ENDPOINT`

将在发射端或接收端位置处找到的杂波类别的名义高度和距离值用于杂波损耗的计算。

发射端或接收端位置处，或两者之间任意路径上的高度增益模型（height-gain model）杂波类别，由所指定的地表覆盖数据源决定。地表覆盖数据源可通过 `SetPrimaryLandCoverDataSource` 与 `SetSecondaryLandCoverDataSource` 方法指定。来自这些数据源的地表覆盖类别需映射至 ITU-R P.452-17 高度增益模型杂波类别，可通过 `SetLandCoverClassMapping` 和 `SetDefaultLandCoverClassMapping` 方法实现。对于某些已选地表覆盖数据源，默认映射可能已存在。

在发射端与接收端之间所用的地表覆盖数据样本数，由地形高程数据的采样分辨率（`SetTerrainElevDataSamplingResolution` 方法）所决定，确保地形高程与地表覆盖剖面具有相同数量和位置的采样点。

当未指定任何地表覆盖数据源，或某一特定位置无可用地表覆盖数据时，传播模型实现将默认使用 `P452_HGM_OTHER` 作为杂波类别。

这些方法（即 `Set/GetITURP452HeightGainModelMode`）仅适用于传播模型的第 17 版。

该参数在传输路径两端的默认值均为 `P452_USE_CLUTTER_AT_ENDPOINT`。

---
```c++
- void SetITURP452RepresentativeClutterHeight(P452ClutterCategory clutterCategory, double reprHeight_meters)
- double GetITURP452RepresentativeClutterHeight(P452ClutterCategory clutterCategory)
```


设置/获取指定杂波类别的代表高度（单位为米）。`P452ClutterCategory` 是一个枚举类型，可取以下值：

| `P452_WATER_SEA` | $=1$ |
| :--- | :--- |
| `P452_OPEN_RURAL` | $=2$ |
| `P452_SUBURBAN` | $=3$ |
| `P452_URBAN_TREES_FOREST` | $=4$ |
| `P452_DENSE_URBAN` | $=5$ |

各杂波类别的默认代表高度如下表所示：

| 杂波类别 | 名义高度（米） |
| :--- | :--- |
| `P452 WATER SEA` | 0 |
| `P452 OPEN RURAL` | 0 |
| `P452 SUBURBAN` | 10 |
| `P452 URBAN TREES FOREST` | 15 |
| `P452 DENSE URBAN` | 20 |

沿着从发射端到接收端的路径上所适用的杂波类别，由所指定的地表覆盖数据源确定。可通过 `SetPrimaryLandCoverDataSource` 和 `SetSecondaryLandCoverDataSource` 方法指定地表覆盖数据源。数据源中的地表覆盖类别需映射至 ITU-R P.452-18 建议的杂波类别，可通过 `SetLandCoverClassMapping` 和 `SetDefaultLandCoverClassMapping` 方法实现。部分已选数据源可能已提供默认映射。

此外，也可选择将地表覆盖类别直接映射为代表杂波高度，而不是使用建议中的杂波类别（参见 `SetITURP452LandCoverMappingType`）。

发射端与接收端之间所用的地表覆盖数据样本数由地形高程数据的采样分辨率（方法 `SetTerrainElevDataSamplingResolution`）决定，以确保高程剖面与地表覆盖剖面中的采样数量和位置一致。

当未指定地表覆盖数据源或某位置无可用地表覆盖数据时，传播模型将默认使用 `P452_OPEN_RURAL` 杂波类别。

这些方法（即 `Set/GetITURP452RepresentativeClutterHeight`）仅适用于传播模型的第 18 版。

有关杂波类别与代表高度的更多信息，参见 ITU-R P.452-18 建议附录 1 第 3.2.1 节。

```c++
- void SetITURP452LandCoverMappingType(P452LandCoverMappingType mappingType)
- P452LandCoverMappingType GetITURP452LandCoverMappingType()
```


`SetITURP452LandCoverMappingType` 方法用于确定 ITU-R P.452-18 传播模型如何解释已映射至地表覆盖类别的值。`P452LandCoverMappingType` 是一个枚举类型，可取以下值：

- `P452_MAP_TO_CLUTTER_CATEGORY = 1`
- `P452_MAP_TO_REPR_CLUTTER_HEIGHT = 2`

当设置为 `P452_MAP_TO_CLUTTER_CATEGORY` 时，映射值将被解释为来自 `P452ClutterCategory` 的杂波类别；当设置为 `P452_MAP_TO_REPR_CLUTTER_HEIGHT` 时，映射值将被解释为以米为单位的代表杂波高度。映射值可通过 `SetLandCoverClassMapping` 和 `SetDefaultLandCoverClassMapping` 方法进行设置或修改。

这些方法（即 `Set/GetITURP452LandCoverMappingType`）仅适用于传播模型的第 18 版。

默认值为 `P452_MAP_TO_CLUTTER_CATEGORY`。

---
```c++
- void SetITURP452SurfaceProfileMethod(P452SurfaceProfileMethod method)
- P452SurfaceProfileMethod GetITURP452SurfaceProfileMethod()
```


在实验性场景中，ITU-R P.452-18 中描述的地形剖面（见附录 1 第 3.2.1 节的步骤 4）也可以通过直接使用地表高程数据的方式来生成，这一方法与 ITU-R P.1812-7（附录 1 第 3.2.2 节）中所提出的方式类似。`P452SurfaceProfileMethod` 是一个枚举类型，可取以下值：

- `P452_ADD_REPR_CLUTTER_HEIGHT = 1`
- `P452_EXPERIMENTAL_USE_OF_SURFACE_ELEV_DATA = 2`

当选择 `P452_ADD_REPR_CLUTTER_HEIGHT` 时，所需的剖面将通过在地形高程数据上叠加代表杂波高度的方式生成。该方法使用地形高程数据（见 `SetPrimaryTerrainElevDataSource`）和地表覆盖数据（见 `SetPrimaryLandCoverDataSource`）。

当选择 `P452_EXPERIMENTAL_USE_OF_SURFACE_ELEV_DATA` 时，剖面将直接由地表高程数据生成，唯独在距离发射端和接收端各 50 米范围内仍使用地形高程数据。该方法同时使用地形高程数据（见 `SetPrimaryTerrainElevDataSource`）与地表高程数据（见 `SetPrimarySurfaceElevDataSource`）。注意：该方法尚未被纳入 ITU-R P.452-18 建议中。

对于两种方法，地表剖面中各采样点之间的间距由地形高程数据的采样分辨率决定（见 `SetTerrainElevDataSamplingResolution`）。

这些方法（即 `Set/GetITURP452SurfaceProfileMethod`）仅适用于传播模型的第 18 版。

默认值为 `P452_ADD_REPR_CLUTTER_HEIGHT`。

---
### Additional implementation details for ITU-R P. 452

1）干扰台站与受干扰台站

在 ITU-R P.452 传播模型的语境下，`CRC-COVLIB` 中的发射端扮演**干扰方（interferer）**的角色，而接收端则为**受干扰方（interfered-with station）**。

2）包含项 / 排除项

`CRC-COVLIB` 对 ITU-R P.452 建议的实现仅对应附录 1 中第 3 节和第 4 节所述的**晴空干扰预测（clear-air interference prediction）**。该实现**不包含**第 5 节所述的**水气粒子散射干扰预测（hydrometeor-scatter interference prediction）**。

3）天线增益

$\mathrm{G}_{\mathrm{t}}$ 与 $\mathrm{G}_{\mathrm{r}}$ 的值（对应建议中的对流层散射部分）来自仿真中所指定的天线参数；若未指定任何天线参数，则默认对 $\mathrm{G}_{\mathrm{t}}$ 与 $\mathrm{G}_{\mathrm{r}}$ 均使用 $0\ \mathrm{dBi}$ 的默认值。


## Extended-Hata urban propagation model methods

- void SetEHataClutterEnvironment(EHataClutterEnvironment clutterEnvironment)
- EHataClutterEnvironment GetEHataClutterEnvironment()

设置/获取杂波环境类型。`EHataClutterEnvironment` 是一个枚举类型，可取以下值：

- `EHATA_URBAN = 24`
- `EHATA_SUBURBAN = 22`
- `EHATA_RURAL = 20`

默认值为 `EHATA_URBAN`。

```c++
- void SetEHataReliabilityPercentage(double percent)
- double GetEHataReliabilityPercentage()
```


设置/获取信号未被超越的百分比（percent）。`percent` 必须大于 0 且小于 100。默认值为 50。


### Additional resources

有关 Extended-Hata 城市传播模型的更多资料可参见：

https://github.com/NTIA/ehata


## ITU-R P. 2108 clutter loss model methods
```c++
- void SetITURP2108TerrestrialStatModelActiveState(bool active)
- double GetITURP2108TerrestrialStatModelActiveState()
```


设置/获取ITU-R P.2108推荐书（第3.2节）中用于地面路径的统计遮蔽损耗模型的激活状态。

当 `active` 设置为 `true` 时，在使用 `GenerateReceptionPointResult`、`GenerateReceptionPointDetailedResult`、`GenerateReceptionAreaResults`、`GenerateProfileReceptionPointResult` 和 `ExportProfilesToCsvFile` 方法生成结果时，将在路径损耗的基础上额外添加遮蔽损耗。要添加的遮蔽损耗值基于发射机频率、发射机与接收点之间的距离，以及通过 `SetITURP2108TerrestrialStatModelLocationPercentage` 指定的位置百分比计算得出。

该遮蔽损耗模型适用于频率范围为 0.5~67 GHz，路径长度不小于 0.25 km 的情形。当模型使用于这些有效范围之外时，将不会添加任何遮蔽损耗。

请注意，ITU推荐书还指出该模型适用于发射/接收端天线高度远低于遮蔽物高度的城市和郊区环境，并且**不应**与本身已沿路径考虑遮蔽损耗的传播模型一同使用。是否遵守这些条件由 CRC-COVLIB 的用户自行负责。

该模型的默认激活状态为 `false`。

```c++
- void SetITURP2108TerrestrialStatModelLocationPercentage(double Location_percent)
- double GetITURP2108TerrestrialStatModelLocationPercentage()
```


设置/获取地面路径中遮蔽损耗不被超过的位置百分比。有效范围为 $0.000001$ 到 $99.999999$。默认值为 $50$。


- double GetITURP2108TerrestrialStatModelLoss(double frequency_GHz, double distance_km)

获取在给定频率（GHz）、距离（km）和通过 `SetITURP2108TerrestrialStatModelLocationPercentage` 指定的位置百分比条件下，计算得到的地面路径遮蔽损耗（单位：dB）。其中，`frequency_GHz` 的有效范围为 $0.5$ 至 $67$ GHz，`distance_km` 的有效范围为 $0.25$ km 及以上。


## ITU-R P. 2109 building entry loss model methods
```c++
- void SetITURP2109ActiveState(bool active)
- double GetITURP2109ActiveState()
```


设置/获取是否启用来自 ITU-R P.2109-2 建筑物进入损耗（building entry loss）模型的激活状态。

当 `active` 设置为 `true` 时，在使用 `GenerateReceptionPointResult`、`GenerateReceptionPointDetailedResult`、`GenerateReceptionAreaResults`、`GenerateProfileReceptionPointResult` 和 `ExportProfilesToCsvFile` 方法生成结果时，将在路径损耗基础上额外添加建筑进入损耗。该进入损耗值取决于四个参数：发射机频率、进入损耗不被超过的概率（通过 `SetITURP2109Probability` 指定）、建筑类型（通过 `SetITURP2109DefaultBuildingType` 指定）以及信号在建筑外墙处的仰角。仰角由发射机和接收机天线高度以及地形剖面计算得到。

计算得到的建筑进入损耗将在每个接收点处添加一次，假设信号从室外发射至室内接收，或从室内发射至室外接收，并仅穿透一层建筑外墙。

该遮蔽损耗模型适用于频率范围 $0.08$ 至 $100$ GHz。当模型在该范围之外使用时，不添加建筑进入损耗。

默认值为 `false`。

```c++
- void SetITURP2109Probability(double probability_percent)
- double GetITURP2109Probability()
```


设置/获取建筑进入损耗不被超过的概率。有效取值范围为 $0.000001$ 至 $99.999999$。默认值为 $50$。

```c++
- void SetITURP2109DefaultBuildingType(P2109BuildingType buildingType)
- P2109BuildingType GetITURP2109DefaultBuildingType()
```


设置/获取用于计算进入损耗的建筑类型。`P2109BuildingType` 是一个枚举类型，可取以下值：

- `P2109_TRADITIONAL = 1`
- `P2109_THERMALLY_EFFICIENT = 2`

默认值为 `P2109_TRADITIONAL`。

```c++
- double GetITURP2109BuildingEntryLoss(double frequency_GHz, double elevAngle_degrees)
```


获取根据指定频率（GHz）和路径在建筑立面处的仰角（相对于水平的角度，单位为度）计算出的建筑进入损耗（单位：dB）。该计算还会考虑通过 `SetITURP2109Probability` 和 `SetITURP2109DefaultBuildingType` 指定的概率和建筑类型。

其中，`frequency_GHz` 的有效范围为 $0.08$ 至 $100$ GHz，`elevAngle_degrees` 的有效范围为 $-90$ 至 $90$ 度（含）。


## ITU-R P. 676 gaseous attenuation model for terrestrial paths methods
```c++
- void SetITURP676TerrPathGaseousAttenuationActiveState(bool active, double atmPressure_hPa=AUTOMATIC, double temperature_C=AUTOMATIC, double waterVapourDensity_gm3=AUTOMATIC)
- bool GetITURP676TerrPathGaseousAttenuationActiveState()
```


设置/获取ITU-R P.676-13建议书（附录1，第1节与第2.1节）中适用于地面路径的气体衰减模型的激活状态。该气体衰减模型适用于任意频率，最高至1000 GHz。当模型被用于该范围之外时，不会将气体衰减计入路径损耗中。

当 `active` 设置为 `true` 时，在使用 `GenerateReceptionPointResult`、`GenerateReceptionPointDetailedResult`、`GenerateReceptionAreaResults`、`GenerateProfileReceptionPointResult` 和 `ExportProfilesToCsvFile` 方法生成结果时，将会把由大气气体引起的衰减损耗加入路径损耗中。气体衰减损耗值取决于五个参数：发射机频率（通过 `SetTransmitterFrequency` 设置）、发射机与接收机之间的路径长度（自动计算）、大气压（单位：hPa）、温度（单位：${}^{\circ}\mathrm{C}$）以及水汽密度（单位：$\mathrm{g}/\mathrm{m}^3$）。上述三个环境参数可以被设置为具体数值，也可以设置为 `AUTOMATIC` 常量。

- 当 `atmPressure_hPa` 设置为 `AUTOMATIC` 时，将使用发射机与接收机中点处地形高度的年均全球参考大气压（ITU-R P.835-6，附录1，第1.1节）；
- 当 `temperature_C` 设置为 `AUTOMATIC` 时，将使用ITU-R P.1510-1建议书中提供的年平均地表温度值。该值将从ITU数字地图文件 `T_Annual.TXT` 中读取，位置为发射机与接收机的中点。文件路径需通过 `SetITUProprietaryDataDirectory` 指定；
- 当 `waterVapourDensity_gm3` 设置为 `AUTOMATIC` 时，将使用ITU-R P.2001-5建议书中规定的，年平均50%时间超过的非降雨条件下的地表水汽密度值。该值从ITU数字地图文件 `Surfwv_50_fixed.txt` 中读取，位置同样为发射机与接收机之间的中点，文件路径需通过 `SetITUProprietaryDataDirectory` 指定。

需要注意的是，某些传播模型（如 ITU-R P.452）已内建考虑气体衰减，不应与该模型同时启用，否则会导致气体衰减被重复计算。

该模型的默认激活状态为 `false`。

```c++
- double GetITURP676GaseousAttenuation(double frequency_GHz, double atmPressure_hPa=1013.25, double temperature_C=15, double waterVapourDensity_gm3=7.5)
```


根据 ITU-R P.676-13 建议书（附录1，第1节）获取气体衰减值，单位为 dB/km。必须指定频率（单位：GHz），有效范围为最高1000 GHz。还可以指定以下参数：

- 大气压（单位：hPa）；
- 温度（单位：${}^{\circ} \mathrm{C}$）；
- 水汽密度（单位：$\mathrm{g} / \mathrm{m}^{3}$）。

这些环境参数用于更精确地计算大气气体引起的衰减。

## ITU digial maps methods
```c++
- double GetITUDigitalMapValue(ITUDigitalMap map, double Latitude_degrees, double Longitude_degrees)
```


从指定的 ITU 数字地图中获取在指定地理位置的插值值。纬度值必须在 $-90$ 到 $+90$ 度之间，经度值必须在 $-180$ 到 $+180$ 度之间。

ITU 数字地图文件在磁盘上的位置必须通过 `Crc::Covlib` 命名空间中的 `SetITUProprietaryDataDirectory` 函数指定。如果 CRC-COVLIB 无法找到或读取数字地图文件，`GetITUDigitalMapValue` 将返回一个默认值（见下文）。当请求的数字地图文件缺失时，系统内部也将使用该默认值。

`ITUDigitalMap` 是一个枚举类型，可取以下值：


| ITU_MAP_DN50 | $=1$ |
| :--- | :--- |
| ITU_MAP_N050 | $=2$ |
| ITU_MAP_T_ANNUAL | $=3$ |
| ITU_MAP_SURFWV_50 | $=4$ |

ITU_MAP_DN50  
全年中值的大气最低 1 公里内的无线电折射率递减率（$\mathrm{N}$ 单位$/\mathrm{km}$）。  
默认值为 $45\ \mathrm{N}$ 单位$/\mathrm{km}$。

ITU_MAP_N050  
全年中值的海平面表面折射率（N 单位）。  
默认值为 $325\ \mathrm{N}$ 单位。

ITU_MAP_T_ANNUAL  
地表上方 2 米处的年平均地表温度（开尔文）。  
默认值为 $288.15\ \mathrm{K}$。

ITU_MAP_SURFWV_50  
在非降雨条件下，一年中有 $50\%$ 时间超过的地表水汽密度（$\mathrm{g} / \mathrm{m}^{3}$）。  
默认值为 $7.5\ \mathrm{g} / \mathrm{m}^{3}$。


## Terrain elevation data methods

- void SetPrimaryTerrainElevDataSource(TerrainElevDataSource terrainELevSource)
- TerrainElevDataSource GetPrimaryTerrainElevDataSource()
- void SetSecondaryTerrainElevDataSource(TerrainElevDataSource terrainELevSource)
- TerrainElevDataSource GetSecondaryTerrainElevDataSource()
- void SetTertiaryTerrainElevDataSource(TerrainElevDataSource terrainELevSource)
- TerrainElevDataSource GetTertiaryTerrainElevDataSource()

设置/获取地形高程数据（即地面高度）的来源。**主来源（primary source）**是 CRC-COVLIB 在尝试获取地形高程数据时优先使用的数据源；若在某位置无法从主来源获取地形高程数据，则 CRC-COVLIB 会尝试从**次来源（secondary source）**获取；若主、次来源均无法提供数据，则使用**第三来源（tertiary source）**。

当所有来源均无法提供地形高程数据时，传播模型将使用默认的**地形高程值 0 米**。

请注意：CRC-COVLIB 不对使用不同垂直基准（vertical datums）所带来的差异进行任何校正。

`TerrainElevDataSource` 是一个枚举类型，可取以下值之一：


| TERR_ELEV_NONE | $=0$ |
| :--- | :--- |
| TERR_ELEV_SRTM | $=1$ |
| TERR_ELEV_CUSTOM | $=2$ |
| TERR_ELEV_NRCAN_CDEM | $=3$ |
| TERR_ELEV_NRCAN_HRDEM_DTM | $=4$ |
| TERR_ELEV_GEOTIFF | $=5$ |
| TERR_ELEV_NRCAN_MRDEM_DTM | $=6$ |

- **TERR_ELEV_NONE**  
  无地形高程数据源。

- **TERR_ELEV_SRTM**（NASA 航天飞机雷达地形测绘任务）  
  请注意，SRTM 文件通常包含的是表面高程数据（即地面高度 + 杂波高度），但如果在目标位置没有更好的数据源，仍可“视作”地形高程数据使用。  
  文件必须解压，其在磁盘上的位置需通过 `SetTerrainElevDataSourceDirectory` 方法指定。  
  CRC-COVLIB 将在该目录及其子目录中搜索兼容文件（通常 `.hgt` 用于 1 或 3 角秒数据，`.dem` 用于 30 角秒数据）。  
  文件名必须保留经纬度起始位置信息。  
  若使用 GeoTIFF（`.tif`）格式的 SRTM 数据，应使用 `TERR_ELEV_GEOTIFF` 而非此项。

- **TERR_ELEV_CUSTOM**  
  使用通过 `AddCustomTerrainElevData` 方法提交的地形高程数据。

- **TERR_ELEV_NRCAN_CDEM**（加拿大自然资源部 / 加拿大数字高程模型）  
  可在以下地址获取兼容文件：  
  - https://ftp.maps.canada.ca/pub/nrcan%20rncan/elevation/cdem%20mnec/  
  - https://download-telecharger.services.geo.ca/pub/nrcan%20rncan/elevation/cdem%20mnec/  
  文件应解压，其磁盘路径需通过 `SetTerrainElevDataSourceDirectory` 方法指定。  
  CRC-COVLIB 将在目录及其子目录中搜索兼容的 `.tif` 文件。`.pdf`、`.xml` 等其他类型文件不被使用。  
  注意：CDEM 已属传统产品，更推荐使用中分辨率 DEM（见下方 `TERR_ELEV_NRCAN_MRDEM_DTM`）。

- **TERR_ELEV_NRCAN_HRDEM_DTM**（加拿大自然资源部 / 高分辨率 DEM / 数字地形模型）  
  可在以下地址获取兼容文件：  
  - https://ftp.maps.canada.ca/pub/elevation/dem%20mne/highresolution%20hauteresolution/dtm%20mnt/  
  - https://download-telecharger.services.geo.ca/pub/elevation/dem%20mne/highresolution%20hauteresolution/dtm%20mnt/  
  文件目录需通过 `SetTerrainElevDataSourceDirectory` 方法指定。只使用以 `dtm_` 开头的 `.tif` 文件（如：`dtm_1m_utm18_w_1_102.tif`）。  
  可使用以下工具搜索并下载 HRDEM 文件：  
  - https://search.open.canada.ca/openmap/957782bf-847c-4644-a757-e383c0057995  
  北极 DEM 镶嵌文件（使用极地立体投影坐标系）不被支持。  
  产品详情参见：  
  - https://open.canada.ca/data/en/dataset/957782bf-847c-4644-a757-e383c0057995  
  - https://open.canada.ca/data/en/dataset/Ofe65119-e96e-4a57-8bfe-9d9245fba06b

- **TERR_ELEV_GEOTIFF**  
  使用提供的 GeoTIFF 文件作为地形高程数据源。文件目录需通过 `SetTerrainElevDataSourceDirectory` 指定。  
  CRC-COVLIB 会在目录及子目录中搜索兼容 `.tif` 文件。  
  当前仅支持部分坐标参考系统，包括：  
  - WGS 84（EPSG:4326）  
  - NAD83（EPSG:4269）  
  - NAD83(CSRS)（EPSG:4617）  
  - NAD83(CSRS98)（EPSG:4140）  
  - WGS 84 / UTM zone [num]  
  - NAD83 / UTM zone [num]  
  - NAD83(CSRS) / UTM zone [num]  
  - NAD83(CSRS) / Canada Atlas Lambert（EPSG:3979）

- **TERR_ELEV_NRCAN_MRDEM_DTM**（加拿大自然资源部 / 中分辨率 DEM / 数字地形模型）  
  该产品为一个大型的云优化 GeoTIFF 文件（约 56.1 GB），下载地址：  
  - https://datacube-prod-data-public.s3.ca-central-1.amazonaws.com/store/elevation/mrdem/mrdem-30/mrdem-30-dtm.tif  
  CRC-COVLIB 可直接使用整个文件，也可提取部分区域使用。文件目录需通过 `SetTerrainElevDataSourceDirectory` 指定。  
  产品详情参见：  
  - https://open.canada.ca/data/en/dataset/18752265-bda3-498c-a4ba-9dfe68cb98da

  注：CRC-COVLIB 的 Python 包中提供了用于辅助下载 CDEM、HRDEM 与 MRDEM 提取数据的函数，位于 `crc_covlib.helper.datacube_canada` 模块中。

**默认值：**
- 主地形高程数据源：`TERR_ELEV_NONE`  
- 次地形高程数据源：`TERR_ELEV_NONE`  
- 第三地形高程数据源：`TERR_ELEV_NONE`

```c++
- void SetTerrainElevDataSourceDirectory(TerrainElevDataSource terrainElevSource, const char* directory, bool useIndexFile=false, bool overwriteIndexFile=false)
- const char* GetTerrainElevDataSourceDirectory( TerrainElevDataSource terrainElevSource)
```


设置/获取与指定地形高程数据源关联的目录路径。

对于地形高程数据源 `TERR_ELEV_NRCAN_CDEM`、`TERR_ELEV_NRCAN_HRDEM_DTM` 和 `TERR_ELEV_GEOTIFF`，可通过将参数 `useIndexFile` 设为 `true` 来使用索引文件。  
该功能适用于包含大量文件的目录，以避免 CRC-COVLIB 在每次调用 `SetTerrainElevDataSourceDirectory` 方法时都重新读取整个目录及子目录内容。启用该选项后，首次读取目录内容时会自动创建索引文件，此后将仅读取该索引文件作为信息来源。

需要注意：若目录中添加、删除或修改了文件，则必须重新生成索引文件，CRC-COVLIB 才能识别这些更改。重新生成的方法包括：

- 手动删除已有的索引文件；
- 或将 `overwriteIndexFile` 参数设为 `true`，以强制重建索引文件。

对于除上述三类之外的地形高程数据源，`useIndexFile` 和 `overwriteIndexFile` 参数无任何作用。

任意地形高程数据源的默认目录路径为**空字符串**。

```c++
- void SetTerrainElevDataSourceSamplingMethod(TerrainElevDataSource terrainELevSource, SamplingMethod sampLingMethod)

- SamplingMethod GetTerrainElevDataSourceSamplingMethod(TerrainElevDataSource terrainELevSource)
```


设置/获取指定地形高程数据源的采样方法。`SamplingMethod` 是一个枚举类型，可取以下值之一：

- `NEAREST_NEIGHBOR = 0`（最近邻插值）
- `BILINEAR_INTERPOLATION = 1`（双线性插值）

采样方法用于读取地形高程数据文件时的处理方式。  
最近邻方法只需读取一个数值，因此速度较快；而双线性插值方法需读取四个数值，因此计算更精确但开销略大。

**所有地形高程数据源的默认采样方法为 `BILINEAR_INTERPOLATION`（双线性插值）**。

```c++
- void SetTerrainElevDataSamplingResolution(double sampLingResoLution_meters)
- double GetTerrainElevDataSamplingResolution()
```


设置/获取地形高程数据的采样分辨率。每当需要计算仿真结果（场强、路径损耗、传输损耗或接收功率）时，传播模型可能需要提供从发射机到接收点的地形高程剖面。CRC-COVLIB 将根据指定的地形高程数据源，按设定的采样分辨率生成地形高程剖面。

例如，当采样分辨率设为 30 米时，生成的地形高程剖面大约每隔 30 米包含一个高程数据点。

该采样分辨率同样适用于所选传播模型所需的任何地表覆盖或地表高程剖面，以确保所有剖面中的采样点数量和位置保持一致。

**默认的地形高程数据采样分辨率为 100 米。**

```c++
- bool AddCustomTerrainElevData(double LowerLeftCornerLat_degrees, double LowerLeftCornerLon_degrees,
double upperRightCornerLat_degrees, double upperRightCornerLon_degrees,
int numHorizSamples, int numVertSamples, const float* terrainElevData_meters,
bool defineNoDataVaLue=false, float noDataVaLue=0)
```



添加自定义地形高程数据。`terrainElevData_meters` 应指向一个连续的高程值列表，列表总长度为 `numHorizSamples × numVertSamples`。这些地形高程样本被假定为沿纬度和经度方向等间距分布（单位为度）。

`terrainElevData_meters` 中的第一个高程值被认为位于指定的左下角地理位置，列表随后按水平方向优先（先横向后纵向）排列，直到填满整个由左下角到右上角所定义的矩形区域。

例如：

```c++
AddCustomTerrainElevData(45.0, -76.0, 46.0, -75.0, 4, 3, arrayOf12Floats);
```



![](https://cdn.mathpix.com/snip/images/U741D75PjA39bxhTmPnJIs-NvTYG8dQP8iMwGL6TpdQ.original.fullsize.png)

如果指定的矩形区域中的某些部分没有有效的地形高程信息，可在 `terrainElevData_meters` 中使用一个“无数据”值进行标识。若需将某个具体值视为“无数据”，应将 `defineNoDataValue` 参数设置为 `true`，并通过 `noDataValue` 参数指定该值。当 `defineNoDataValue` 设置为 `false` 时，`noDataValue` 参数将被忽略。

`AddCustomTerrainElevData` 会在仿真对象（Simulation）中分配新内存，并复制 `terrainElevData_meters` 指向的数据。因此，在调用该函数后，不再需要保留原始的 `terrainElevData_meters` 数据。复制后的数据将一直保留，直到仿真对象被销毁（通过 `Release`）或在同一仿真对象上调用 `ClearCustomTerrainElevData`。

若内存分配失败，函数返回 `false`；否则返回 `true`。

```c++
- void ClearCustomTerrainElevData()
```


移除之前通过 `AddCustomTerrainElevData` 添加的所有自定义地形高程数据，并释放相应的内存。

```c++
- double GetTerrainElevation(double Latitude_degrees, double Longitude_degrees, double noDataVaLue=0)
```


使用通过 `SetPrimaryTerrainElevDataSource`、`SetSecondaryTerrainElevDataSource` 和 `SetTertirayTerrainElevDataSource` 方法指定的地形高程数据源，在指定位置获取地形高程（单位为米）。如果在指定位置无法获取地形高程数据，则返回 `noDataValue`。


## Land cover data methods

- void SetPrimaryLandCoverDataSource(LandCoverDataSource LandCoverSource)
- LandCoverDataSource GetPrimaryLandCoverDataSource()
- void SetSecondaryLandCoverDataSource(LandCoverDataSource LandCoverSource)
- LandCoverDataSource GetSecondaryLandCoverDataSource()

设置/获取地表覆盖数据源。主数据源是 CRC-COVLIB 首先尝试从中获取地表覆盖数据的位置；若在某个位置无法从主数据源获取数据，则 CRC-COVLIB 会尝试从次级数据源获取。

根据所使用的传播模型，指定地表覆盖数据源并不总是有用。例如，Longley-Rice、eHata 和自由空间传播模型不使用任何地表覆盖数据。而 ITU-R P.1812 传播模型仅在地表剖面方法设置为 `P1812_ADD_REPR_CLUTTER_HEIGHT` 时才会使用地表覆盖数据（参见 `SetITURP1812SurfaceProfileMethod`）；ITU-R P.452-17 传播模型仅在高度增益模型模式设置为 `P452_USE_CLUTTER_PROFILE` 或 `P452_USE_CLUTTER_AT_ENDPOINT` 时使用（参见 `SetITURP452HeightGainModelMode`）；ITU-R P.452-18 传播模型则仅在地表剖面方法设置为 `P452_ADD_REPR_CLUTTER_HEIGHT` 时使用地表覆盖数据（参见 `SetITURP452SurfaceProfileMethod`）。

`LandCoverDataSource` 是一个枚举类型，可取下列值之一：


| LAND_COVER_NONE | $=200$ |
| :--- | :--- |
| LAND_COVER_GEOTIFF | $=201$ |
| LAND_COVER_ESA_WORLDCOVER | $=202$ |
| LAND_COVER_CUSTOM | $=203$ |
| LAND_COVER_NRCAN | $=204$ |

LAND_COVER_NONE  
无地表覆盖数据源。

LAND_COVER_ESA_WORLDCOVER  
兼容文件可从以下网址获取：<https://viewer.esa-worldcover.org/worldcover/>  
注意：下载需要用户账号。仅需下载 `ESA_WORLDCOVER_10M_MAP` 产品文件（无需下载 `ESA_WORLDCOVER_10M_INPUTQUALITY` 文件）。  
文件应先解压，并通过 `SetLandCoverDataSourceDirectory` 方法指定磁盘上的文件位置。  
CRC-COVLIB 将在指定目录及其子目录中搜索兼容的 `.tif` 文件。

在 ESA WorldCover 的地类与部分传播模型的杂波类别之间已定义了默认映射关系，映射如下：


| ESA WorldCover class | ITU-R P.1812 Clutter Category |
| :--- | :--- |
| 10 (Tree cover) | P1812_URBAN_TREES_FOREST |
| 50 (Built-up) | P1812_URBAN_TREES_FOREST |
| 80 (Permanent water bodies) | P1812_WATER_SEA |
| All others | P1812_OPEN_RURAL |


| ESA WorldCover class | ITU-R P. 452-17 Height-Gain Model Clutter Category |
| :--- | :--- |
| 10 (Tree cover) | P452_HGM_MIXED_TREE_FOREST |
| 20 (Shrubland) | P452_HGM_IRREGULARLY_SPACED_SPARSE_TREES |
| 40 (Cropland) | P452_HGM_HIGH_CROP_FIELDS |
| 50 (Built-up) | P452_HGM_SUBURBAN |
| All others | P452_HGM_OTHER |


| ESA WorldCover class | ITU-R P.452-18 Clutter Category |
| :--- | :--- |
| 10 (Tree cover) | P452_URBAN_TREES_FOREST |
| 50 (Built-up) | P452_URBAN_TREES_FOREST |
| 80 (Permanent water bodies) | P452_WATER_SEA |
| All others | P452_OPEN_RURAL |

默认映射关系可通过 `SetLandCoverClassMapping` 和 `SetDefaultLandCoverClassMapping` 方法进行修改。


### LAND_COVER_GEOTIFF

使用提供的 GeoTIFF 文件作为地表覆盖数据源。应使用 `SetLandCoverDataSourceDirectory` 方法指定文件在磁盘上的位置。CRC-COVLIB 将在指定目录及其所有子目录中搜索兼容的 *.tif 文件。目前仅支持以下几种坐标参考系统：

- "WGS 84"（EPSG:4326）
- "NAD83"（EPSG:4269）
- "NAD83(CSRS)"（EPSG:4617）
- "NAD83(CSRS98)"（EPSG:4140）
- "WGS 84 / UTM zone [num]"
- "NAD83 / UTM zone [num]"
- "NAD83(CSRS) / UTM zone [num]"
- "NAD83(CSRS) / Canada Atlas Lambert"（EPSG:3979）


### LAND_COVER_CUSTOM

使用通过调用 `AddCustomLandCoverData` 方法提交的地表覆盖数据。


### LAND_COVER_NRCAN

该产品由一个大型的 *tif 文件（1.96 GB）构成，可通过以下链接获取：https://open.canada.ca/data/en/dataset/ee1580ab-a23d-4f86-a09b-79763677eb47，点击“2020 Land Cover of Canada”链接。

文件在磁盘上的位置应通过 `SetLandCoverDataSourceDirectory` 方法指定。

NRCAN 的地表覆盖分类与部分传播模型的杂波类别之间存在默认映射关系，具体如下：

| NRCAN 类别 | ITU-R P.1812 杂波类别 |
| :--- | :--- |
| 1（温带或亚极地针叶林） | P1812_URBAN_TREES_FOREST |
| 2（亚极地针叶林） | P1812_URBAN_TREES_FOREST |
| 5（温带或亚极地阔叶落叶林） | P1812_URBAN_TREES_FOREST |
| 6（温带或亚极地落叶林） | P1812_URBAN_TREES_FOREST |
| 17（城市） | P1812_URBAN_TREES_FOREST |
| 18（水体） | P1812_WATER_SEA |
| 其他所有类别 | P1812_OPEN_RURAL |

---

| NRCAN 类别 | ITU-R P.452-17 高度增益模型杂波类别 |
| :--- | :--- |
| 1（温带或亚极地针叶林） | P452_HGM_CONIFEROUS_TREES_IRREGULARLY_SPACED |
| 2（亚极地针叶林） | P452_HGM_CONIFEROUS_TREES_IRREGULARLY_SPACED |
| 5（温带或亚极地阔叶落叶林） | P452_HGM_DECIDUOUS_TREES_IRREGULARLY_SPACED |
| 6（温带或亚极地落叶林） | P452_HGM_DECIDUOUS_TREES_IRREGULARLY_SPACED |
| 8（温带或亚极地灌木丛） | P452_HGM_IRREGULARLY_SPACED_SPARSE_TREES |
| 15（农田） | P452_HGM_HIGH_CROP_FIELDS |
| 17（城市） | P452_HGM_URBAN |
| 其他所有类别 | P452_HGM_OTHER |

---

| NRCAN 类别 | ITU-R P.452-18 杂波类别 |
| :--- | :--- |
| 1（温带或亚极地针叶林） | P452_URBAN_TREES_FOREST |
| 2（亚极地针叶林） | P452_URBAN_TREES_FOREST |
| 5（温带或亚极地阔叶落叶林） | P452_URBAN_TREES_FOREST |
| 6（温带或亚极地落叶林） | P452_URBAN_TREES_FOREST |
| 17（城市） | P452_URBAN_TREES_FOREST |
| 18（水体） | P452_WATER_SEA |
| 其他所有类别 | P1812_OPEN_RURAL |

默认映射关系可使用 `SetLandCoverClassMapping` 和 `SetDefaultLandCoverClassMapping` 方法进行修改。

主地表覆盖数据源的默认值为 `LAND_COVER_NONE`，次要地表覆盖数据源的默认值亦为 `LAND_COVER_NONE`。

```c++
- void SetLandCoverDataSourceDirectory(LandCoverDataSource LandCoverSource, const char* directory, bool useIndexFile=false, bool overwriteIndexFile=false)
- const char* GetLandCoverDataSourceDirectory(LandCoverDataSource LandCoverSource)
```


设置/获取与指定地表覆盖数据源相关联的目录。

对于地表覆盖数据源 `LAND_COVER_ESA_WORLDCOVER` 和 `LAND_COVER_GEOTIFF`，可以通过将 `useIndexFile` 参数设置为 `true` 来使用索引文件。这在目录中包含大量文件时非常有用，可避免 CRC-COVLIB 每次调用 `SetLandCoverDataSourceDirectory` 方法时都读取整个目录及其子目录的内容。

启用此选项后，将在首次读取目录内容时创建一个索引文件，之后只读取该索引文件来获取信息。注意，当目录内的文件被添加、删除或修改后，需要重新生成索引文件，以便 CRC-COVLIB 识别这些更改。这可以通过手动删除索引文件，或将 `overwriteIndexFile` 参数设置为 `true` 来实现。

对于上述未提及的数据源类型，`useIndexFile` 和 `overwriteIndexFile` 参数无效。

任何地表覆盖数据源的默认目录值为空字符串。
```c++
- bool AddCustomLandCoverData(
double LowerLeftCornerLat_degrees, double LowerLeftCornerLon_degrees, double upperRightCornerLat_degrees, double upperRightCornerLon_degrees, int numHorizSamples, int numVertSamples, const short* landCoverData, bool defineNoDataVaLue=false, float noDataVaLue=0)
```


添加自定义地表覆盖数据。`LandCoverData` 应指向一个包含 `numHorizSamples × numVertSamples` 个地表覆盖类别值的连续数组。假定这些地表覆盖类别样本沿纬度和经度方向均匀分布（即以度为单位进行间距测量）。

`LandCoverData` 所指向的第一个地表覆盖类别值被假定位于指定的左下角地理位置。该数组的数据顺序应先按水平方向排列，然后向上延伸，直到右上角地理位置。例如：

```c++
AddCustomLandCoverData(45.0, -76.0, 46.0, -75.0, 4, 3, arrayOf12Shorts);
```



![](https://cdn.mathpix.com/snip/images/FeuOZVbIWhmFR5MkVEwNyIhBwPWMMbXxug1MwX4GFaw.original.fullsize.png)

如果指定矩形区域的部分区域没有有效的地表覆盖信息，可以在 `LandCoverData` 中使用一个“无数据”值进行标识。若需要将 `LandCoverData` 中的某个特定数值解释为“无数据”，应将参数 `defineNoDataValue` 设置为 `true`，并通过参数 `noDataValue` 指定该数值。当 `defineNoDataValue` 设置为 `false` 时，`noDataValue` 将被忽略。

`AddCustomLandCoverData` 会在 `Simulation` 对象中分配新的内存，并复制 `LandCoverData` 所指向的数据。因此，在调用 `AddCustomLandCoverData` 之后，无需保留原始的 `LandCoverData` 数据。复制的数据将在 `Simulation` 对象被销毁（通过 `Release`）或调用该对象的 `ClearCustomLandCoverData` 方法时被释放。

当内存分配失败时返回 `false`，否则返回 `true`。

```c++
- void ClearCustomLandCoverData()
```


移除此前通过 `AddCustomLandCoverData` 添加的所有自定义地表覆盖数据，并释放相应的内存。

```c++
- int GetLandCoverClass(double Latitude_degrees, double Longitude_degrees)
```


使用通过 `SetPrimaryTerrainElevDataSource` 和 `SetSecondaryTerrainElevDataSource` 方法指定的地表覆盖数据源，在指定位置获取地表覆盖类别 ID。如果在该位置无法获取任何地表覆盖数据，则返回 -1。

```c++
- void SetLandCoverClassMapping(LandCoverDataSource LandCoverSource, int sourceClass, PropagationModel propagationModel, int modeLVaLue)
- int GetLandCoverClassMapping(LandCoverDataSource LandCoverSource, int sourceClass, PropagationModel propagationModel)
```


在仿真中使用地表覆盖数据时，地表覆盖类别 ID 需要映射为当前选定传播模型可用的值。`SetLandCoverClassMapping` 方法用于指定地表覆盖源的类别 ID 与传播模型可用值之间的映射关系。

对于 ITU-R P.1812 和 ITU-R P.452-18 传播模型，地表覆盖类别 ID 可以映射为**杂波类别（clutter categories）**或**代表性杂波高度（代表性障碍物高度，以米为单位）**。

例如，将 ESA WorldCover 中的“永久水体”类别（ID 80）映射为 ITU-R P.1812 模型的 “water/sea” 杂波类别，可使用以下命令：

`SetLandCoverClassMapping(LAND_COVER_ESA_WORLDCOVER, 80, ITU_R_P_1812, P1812_WATER_SEA)`

或者，若需将“永久水体”类别（ID 80）映射为代表性杂波高度 0 米，可使用以下命令：

`SetLandCoverClassMapping(LAND_COVER_ESA_WORLDCOVER, 80, ITU_R_P_1812, 0)`

指定的 `modelValues` 是解释为杂波类别还是代表性杂波高度，由 `SetITURP1812LandCoverMappingType`（对于 P.1812）或 `SetITURP452LandCoverMappingType`（对于 P.452-18）方法来决定。

对于 ITU-R P.452-17 传播模型，地表覆盖类别 ID 始终映射为该模型的高度增益模型（height-gain model）杂波类别。

```c++
- void SetDefaultLandCoverClassMapping(LandCoverDataSource LandCoverSource, PropagationModel propagationModel, int modelValue)
- int GetDefaultLandCoverClassMapping(LandCoverDataSource LandCoverSource, PropagationModel propagationModel)
```


设置/获取指定地表覆盖数据源与传播模型之间的默认映射关系（该默认值用于映射所有未通过 `SetLandCoverClassMapping` 显式指定的地表覆盖类别 ID）。

例如，调用以下函数：

`SetDefaultLandCoverClassMapping(LAND_COVER_ESA_WORLDCOVER, ITU_R_P_1812, P1812_OPEN_RURAL)`

表示：对于 ESA WorldCover 数据源中所有未通过 `SetLandCoverClassMapping` 显式映射的地表覆盖类别 ID，默认映射为 ITU-R P.1812 模型中的 “open/rural”（开阔/乡村）杂波类别。

如前所述，`modelValue` 的含义取决于映射方式的设置：
- 若使用 `SetITURP1812LandCoverMappingType`（用于 P.1812）或 `SetITURP452LandCoverMappingType`（用于 P.452-18）设置为“代表性杂波高度”，则 `modelValue` 表示单位为米的高度值；
- 若设置为“杂波类别映射”，则 `modelValue` 表示对应的杂波类别。

对于 ITU-R P.452-17 模型，`modelValue` 始终应解释为模型定义的高度增益模型杂波类别。

```c++
- void ClearLandCoverClassMappings(LandCoverDataSource LandCoverSource, PropagationModel propagationModel)
```


删除指定地表覆盖数据源与传播模型之间的所有地表覆盖类别映射关系。该操作会清除通过 `SetDefaultLandCoverClassMapping` 和 `SetLandCoverClassMapping` 所建立的所有映射。

```c++
- int GetLandCoverClassMappedValue(double Latitude_degrees, double Longitude_degrees, PropagationModel propagationModeL)
```


该方法首先从通过 `SetPrimaryLandCoverDataSource` 和 `SetSecondaryLandCoverDataSource` 方法指定的地表覆盖数据源中获取地表覆盖类别 ID。随后，它根据通过 `SetLandCoverClassMapping` 和 `SetDefaultLandCoverClassMapping` 指定的映射关系，或通过已有的默认映射，返回与之对应的传播模型可用值。如果无法获取地表覆盖数据，或无法应用任何映射，则返回 -1。


## Surface elevation data methods

- void SetPrimarySurfaceElevDataSource(SurfaceElevDataSource surfaceElevSource)
- SurfaceElevDataSource GetPrimarySurfaceElevDataSource()
- void SetSecondarySurfaceElevDataSource(SurfaceElevDataSource surfaceElevSource)
- SurfaceElevDataSource GetSecondarySurfaceElevDataSource()
- void SetTertiarySurfaceElevDataSource(SurfaceElevDataSource surfaceElevSource)
- SurfaceElevDataSource GetTertiarySurfaceElevDataSource()

设置/获取地表高程数据源（即地面高度 + 杂波高度，二者不加区分）。主数据源是 CRC-COVLIB 获取某一位置地表高程数据时首先尝试使用的数据源；若主数据源无法获取该位置的地表高程数据，则会尝试使用次要数据源；若主、次数据源均无法提供有效数据，则使用第三数据源。若三者均无法获取任何地表高程数据，则传播模型将使用默认值 0 米。请注意，CRC-COVLIB 不会对不同垂直基准（vertical datums）间的差异进行任何校正。

根据所选传播模型，指定地表高程数据源未必总是必要的。以下模型**不使用地表高程数据**：

- Longley-Rice 模型
- eHata 模型
- 自由空间（free space）模型
- ITU-R P.452-17 模型

以下模型**在特定配置下**才会使用地表高程数据：

- ITU-R P.1812 模型：仅当表面剖面方法设为 `P1812_USE_SURFACE_ELEV_DATA` 时使用（参见 `SetITURP1812SurfaceProfileMethod`）
- ITU-R P.452-18 模型：仅当表面剖面方法设为 `P452_EXPERIMENTAL_USE_OF_SURFACE_ELEV_DATA` 时使用（参见 `SetITURP452SurfaceProfileMethod`）

`SurfaceElevDataSource` 是一个枚举类型，可取以下值：


| SURF_ELEV_NONE | $=100$ |
| :--- | :--- |
| SURF_ELEV_SRTM | $=101$ |
| SURF_ELEV_CUSTOM | $=102$ |
| SURF_ELEV_NRCAN_CDSM | $=103$ |
| SURF_ELEV_NRCAN_HRDEM_DSM | $=104$ |
| SURF_ELEV_GEOTIFF | $=105$ |
| SURF_ELEV_NRCAN_MRDEM_DSM | $=106$ |

**SURF_ELEV_NONE**  
无地表高程数据源。

**SURF_ELEV_SRTM（NASA 航天飞机雷达地形测绘任务，Shuttle Radar Topography Mission）**  
兼容的 1 角秒分辨率文件可从以下网站获取：  
- https://lpdaac.usgs.gov/products/srtmgl1v003/  
- https://lpdaac.usgs.gov/products/nasadem_hgtv001/  
- https://dwtkns.com/srtm （$30\mathrm{~m}$ 分辨率）  
- https://step.esa.int/auxdata/dem/SRTMGL1/  

兼容的 3 角秒分辨率文件可从以下网站获取：  
（原文未提供具体链接）

兼容的 30 角秒分辨率文件可从以下网站获取：  
- https://lpdaac.usgs.gov/products/srtmgl30v021/  
- https://web.archive.org/web/20170124235811/https://dds.cr.usgs.gov/srtm/version2_1/SRTM30/  
- http://www.webgis.com/terr_world.html  

这些文件在使用前必须解压，并通过 `SetSurfaceElevDataSourceDirectory` 方法指定在磁盘上的位置。CRC-COVLIB 会在指定目录及其子目录中搜索兼容的文件（1 与 3 角秒分辨率通常使用 `.hgt` 扩展名，30 角秒数据通常使用 `.dem` 扩展名）。  
文件名中必须保留起始位置的纬度和经度信息。  

注意：若使用来源于 SRTM 的 GeoTIFF (`.tif`) 格式文件，则应将数据源指定为 `SURF_ELEV_GEOTIFF`，而非 `SURF_ELEV_SRTM`。


### SURF_ELEV_CUSTOM

**SURF_ELEV_CUSTOM**  
使用通过 `AddCustomSurfaceElevData` 方法提交的自定义地表高程数据。

---

**SURF_ELEV_NRCAN_CDSM**（加拿大自然资源部 / 加拿大数字地表模型，Canadian Digital Surface Model）  
兼容文件可从以下网址获取：  
- https://ftp.maps.canada.ca/pub/nrcan_rncan/elevation/cdsm_mnsc/  
- https://download-telecharger.services.geo.ca/pub/nrcan_rncan/elevation/cdsm_mnsc/  

文件应先解压，并通过 `SetSurfaceElevDataSourceDirectory` 方法指定其在磁盘上的位置。CRC-COVLIB 将在指定目录及其子目录中搜索兼容的 `.tif` 文件。其他文件类型（如 `.pdf`、`.xml`）可能存在但不会被使用。  

**注意**：CDSM 为遗留产品，更推荐使用中等分辨率数字高程模型（MRDEM），见 `SURF_ELEV_NRCAN_MRDEM_DSM`。

---

**SURF_ELEV_NRCAN_HRDEM_DSM**（加拿大自然资源部 / 高分辨率数字地表模型，High Resolution Digital Surface Model）  
兼容文件可从以下网址获取：  
- https://ftp.maps.canada.ca/pub/elevation/dem_mne/highresolution_hauteresolution/dsm_mns/  
- https://download-telecharger.services.geo.ca/pub/elevation/dem_mne/highresolution_hauteresolution/dsm_mns/  

磁盘上文件的位置应使用 `SetSurfaceElevDataSourceDirectory` 方法进行设置。CRC-COVLIB 会在指定目录及其子目录中搜索兼容的 `.tif` 文件。可用的文件名应以 `dsm_` 开头（例如：`dsm_1m_utm18_w_1_102.tif`）。  

此外，还可使用以下工具进行搜索和下载 HRDEM 文件：  
- https://search.open.canada.ca/openmap/957782bf-847c-4644-a757-e383c0057995  

**注意**：不支持使用极地立体北坐标系统（polar stereographic North coordinate system）的 ArticDEM 镶嵌文件。  

更多产品信息详见：  
- https://open.canada.ca/data/en/dataset/957782bf-847c-4644-a757-e383c0057995  
- https://open.canada.ca/data/en/dataset/Ofe65119-e96e-4a57-8bfe-9d9245fba06b  


### SURF_ELEV_GEOTIFF

**SURF_ELEV_GEOTIFF**  
使用提供的 GeoTIFF 文件作为地表高程数据源。应使用 `SetSurfaceElevDataSourceDirectory` 方法指定磁盘上文件的位置。CRC-COVLIB 将在该目录及其子目录中搜索兼容的 `.tif` 文件。

当前仅支持以下几种坐标参考系统（CRS）：
- "WGS 84"（EPSG:4326）
- "NAD83"（EPSG:4269）
- "NAD83(CSRS)"（EPSG:4617）
- "NAD83(CSRS98)"（EPSG:4140）
- "WGS 84 / UTM zone [num]"
- "NAD83 / UTM zone [num]"
- "NAD83(CSRS) / UTM zone [num]"
- "NAD83(CSRS) / Canada Atlas Lambert"（EPSG:3979）

---

**SURF_ELEV_NRCAN_MRDEM_DSM**（加拿大自然资源部 / 中等分辨率数字高程模型 / 数字地表模型）  
该产品为一个大型的云优化 GeoTIFF 文件（55.6 GB），可从以下地址获取：  
https://datacube-prod-data-public.s3.ca-central-1.amazonaws.com/store/elevation/mrdem/mrdem-30/mrdem-30-dsm.tif  

CRC-COVLIB 可直接使用整个文件，或提取所需区域数据。无论哪种方式，均需使用 `SetSurfaceElevDataSourceDirectory` 方法指定文件在磁盘上的位置。  

更多产品详情请参阅：  
https://open.canada.ca/data/en/dataset/18752265-bda3-498c-a4ba-9dfe68cb98da  

**注意**：CRC-COVLIB 提供的 Python 包包含用于辅助下载 CDEM、HRDEM 和 MRDEM 提取区域数据的函数，位于 `crc_covlib.helper.datacube_canada` 模块中。

---

**默认值：**  
- 主地表高程数据源默认值为 `SURF_ELEV_NONE`  
- 次级地表高程数据源默认值为 `SURF_ELEV_NONE`  
- 第三级地表高程数据源默认值为 `SURF_ELEV_NONE`

```c++
- void SetSurfaceElevDataSourceDirectory(SurfaceElevDataSource surfaceELevSource, const char* directory, bool useIndexFile=false, bool overwriteIndexFile=false)
- const char* GetSurfaceElevDataSourceDirectory(
SurfaceElevDataSource surfaceELevSource)
```


设置/获取与指定地表高程数据源关联的目录。

对于以下地表高程数据源：`SURF_ELEV_NRCAN_CDSM`、`SURF_ELEV_NRCAN_HRDEM_DSM` 和 `SURF_ELEV_GEOTIFF`，可以通过将 `useIndexFile` 参数设置为 `true` 来使用索引文件。这在目录中包含大量文件的情况下尤为有用，可避免每次调用 `SetSurfaceElevDataSourceDirectory` 方法时 CRC-COVLIB 都需读取整个目录及其子目录内容。

当首次读取目录内容时，该选项会创建一个索引文件，之后仅读取该单一索引文件作为信息来源。

**注意：**如果在使用索引文件的目录中添加、移除或修改了目录或文件，必须重新生成该索引文件，CRC-COVLIB 才能识别更改。可通过手动删除索引文件或将 `overwriteIndexFile` 参数设置为 `true` 实现。

对于上述未提及的数据源类型，`useIndexFile` 和 `overwriteIndexFile` 参数无效。

**默认值：**任何地表高程数据源的目录默认值为空字符串。

```c++
- void SetSurfaceElevDataSourceSamplingMethod(
SurfaceElevDataSource surfaceELevSource, SamplingMethod sampLingMethod)

- SamplingMethod GetSurfaceElevDataSourceSamplingMethod(
SurfaceElevDataSource surfaceELevSource)
```


设置/获取指定地表高程数据源的采样方法。`SamplingMethod` 是一个枚举类型，可取以下值之一：

- `NEAREST_NEIGHBOR = 0`（最近邻法）
- `BILINEAR_INTERPOLATION = 1`（双线性插值法）

该采样方法适用于读取地表高程数据文件的过程。

- 最近邻法只需从文件中读取一个数值，速度较快；
- 双线性插值法则需读取四个值进行插值计算，通常精度更高但计算量略大。

**默认采样方法为**：对所有地表高程数据源，默认使用 `BILINEAR_INTERPOLATION`。

```c++
- void SetSurfaceAndTerrainDataSourcePairing(bool usePairing)
- bool GetSurfaceAndTerrainDataSourcePairing()
```


设置/获取地表高程数据源与地形高程数据源之间配对使用的状态。

当 `usePairing` 设置为 `true` 时，地表高程和地形高程数据源将按顺序进行配对使用：
- 主地表高程数据源 与 主地形高程数据源 配对；
- 次地表高程数据源 与 次地形高程数据源 配对；
- 第三地表高程数据源 与 第三地形高程数据源 配对。

这将形成最多三个数据源对。**在启用配对的情况下**，某一位置要使用其地表高程数据，则必须**同时**具备该配对源的地形高程数据；反之亦然。如果某一位置在配对中的任一数据缺失，则该对的两个数据均视为缺失。

例如，若当前配置如下，并启用了配对功能：


|  | Surface elevation data source | Terrain elevation data source |
| :--- | :--- | :--- |
| Primary | SURF_ELEV_NRCAN_HRDEM_DSM | TERR_ELEV_NRCAN_HRDEM_DTM |
| Secondary | SURF_ELEV_NRCAN_CDSM | TERR_ELEV_NRCAN_CDEM |
| Tertiary | SURF_ELEV_NONE | TERR_ELEV_NONE |

例如，当我们尝试获取位置 $(\text{纬度}=45, \text{经度}=-75)$ 的地表高程时，CRC-COVLIB 将首先尝试从 HRDEM DSM 产品（作为主数据源）中获取该位置的地表高程。同时，它也将尝试从 HRDEM DTM 产品中获取该位置的地形高程。如果该位置的地表或地形高程中任意一个无法获取，CRC-COVLIB 将继续尝试使用次要和第三数据源，以相同方式依次查找，直到能从同一对数据源中成功获取地表和地形高程数据为止。如果仍无法获取，则会返回 0 米或上下文中指定的 “无数据” 值，作为地表高程。

该配对选项可以确保本应配套使用的地表与地形高程数据产品不会与其他产品混合使用，从而保障结果的精确性。例如，在使用同时依赖地表与地形高程数据的传播模型时，这一机制尤为有用。

不过在实际使用中，如果所用数据产品本就完全覆盖相同区域（如 HRDEM DSM 文件与 HRDEM DTM 文件区域完全一致），则不一定需要启用配对选项。

**默认情况下，配对功能为关闭（false）。**

```c++
- bool AddCustomSurfaceElevData(
double LowerLeftCornerLat_degrees, double LowerLeftCornerLon_degrees,
double upperRightCornerLat_degrees, double upperRightCornerLon_degrees,
int numHorizSamples, int numVertSamples, const float* surfaceElevData_meters,
bool defineNoDataVaLue=false, float noDataValue=0)
```



添加自定义地表高程数据。`surfaceElevData_meters` 应指向一个连续的地表高程值列表，总数量为 $ \text{numHorizSamples} \times \text{numVertSamples} $。这些地表高程样本被假定为沿纬度和经度方向均匀分布（单位为度）。`surfaceElevData_meters` 所指向的第一个地表高程值被认为处于指定的左下角地理位置。之后的列表应先按水平方向依次排列，再向上垂直排列，直至填满指定的右上角地理范围。例如：

```c++
AddCustomSurfaceElevData(45.0, -76.0, 46.0, -75.0, 4, 3, arrayOf12Floats);
```



![](https://cdn.mathpix.com/snip/images/_NQ2jXCoAofcFfakI41YC0GwFfKMk4u0Wm-FKrmT4FM.original.fullsize.png)

如果指定矩形区域的某些部分没有有效的地表高程信息，可以在 `surfaceElevData_meters` 中使用一个“无数据”（"no data"）值来表示。如果需要将 `surfaceElevData_meters` 中的某个特定值解释为“无数据”，应将 `defineNoDataValue` 参数设置为 `true`，并通过 `noDataValue` 参数指定该数值。当 `defineNoDataValue` 设置为 `false` 时，`noDataValue` 将被忽略。

`AddCustomSurfaceElevData` 会在 `Simulation` 对象中分配新的内存，并将 `surfaceElevData_meters` 指向的数据复制到其中。因此，在调用 `AddCustomSurfaceElevData` 之后，无需保留原始的 `surfaceElevData_meters` 数据。复制的数据会一直保留，直到该 `Simulation` 对象被销毁（通过 `Release`），或者对同一 `Simulation` 对象调用 `ClearCustomSurfaceElevData`。

如果内存分配失败，则返回 `false`，否则返回 `true`。

```c++
- void ClearCustomSurfaceElevData()
```


移除此前通过 `AddCustomTerrainElevData` 添加的所有自定义地表高程数据，并释放相应的内存。
```c++
- double GetSurfaceElevation(double Latitude_degrees, double Longitude_degrees, double noDataVaLue=0)
```


使用通过 `SetPrimarySurfaceElevDataSource`、`SetSecondarySurfaceElevDataSource` 和 `SetTertiraySurfaceElevDataSource` 方法指定的地表高程数据源，在给定位置获取地表高程（单位：米）。  
如果在指定位置无法获取任何地表高程数据，则返回 `noDataValue`。


## Reception area methods
```c++
- void SetReceptionAreaCorners(double LowerLeftCornerLat_degrees, double LowerLeftCornerLon_degrees, double upperRightCornerLat_degrees, double upperRightCornerLon_degrees)
- double GetReceptionAreaLowerLeftCornerLatitude()
- double GetReceptionAreaLowerLeftCornerLongitude()
- double GetReceptionAreaUpperRightCornerLatitude()
- double GetReceptionAreaUpperRightCornerLongitude()
```


设置/获取接收区域的位置。接收区域是一个矩形网格，由多个接收点组成。在调用 `GenerateReceptionAreaResults` 方法时，将在这些接收点上计算仿真结果（场强、路径损耗、传输损耗或接收功率）。

```c++
- void SetReceptionAreaNumHorizontalPoints(int numPoints)
- int GetReceptionAreaNumHorizontalPoints()
- void SetReceptionAreaNumVerticalPoints(int numPoints)
- int GetReceptionAreaNumVerticalPoints()
```


设置/获取接收区域中水平/垂直方向的接收点数量。接收区域中的接收点总数等于水平点数乘以垂直点数。当水平或垂直方向的点数发生变化时，接收区域中可能已有的数据将被清零。

`numPoints` 的取值必须大于或等于 2。默认值为水平点数和垂直点数均为 60（即总共 3600 个接收点）。


## Result type selection methods
```c++
- void SetResultType(ResultType resultType)
- ResultType GetResultType()
```


设置/获取仿真的结果类型。`ResultType` 是一个枚举类型，可取以下值之一：


| FIELD_STRENGTH_DBUVM | $=1$ |
| :--- | :--- |
| PATH_LOSS_DB | $=2$ |
| TRANSMISSION_LOSS_DB | $=3$ |
| RECEIVED_POWER_DBM | $=4$ |

通过调用以下任一方法生成仿真结果：`GenerateReceptionPointResult`、`GenerateReceptionPointDetailedResult`、`GenerateReceptionAreaResults`、`GenerateProfileReceptionPointResult` 和 `ExportProfilesToCsvFile`。

路径损耗（dB）由传播模型计算，并可能由其他损耗模型（如瓦片、建筑物等）补充。其他结果的计算方式如下：

- 场强（$\mathrm{dB} \mu \mathrm{V} / \mathrm{m}$）计算公式为：  
  $\mathrm{Field\ Strength} = P_{\mathrm{tx}} - L_p + G_{\mathrm{tx}} - L_{\mathrm{tx}} + 137.21 + 20\log_{10}(f)$

- 传输损耗（$\mathrm{dB}$）计算公式为：  
  $\mathrm{Transmission\ Loss} = L_p - G_{\mathrm{tx}} + L_{\mathrm{tx}} - G_{\mathrm{rx}} + L_{\mathrm{rx}}$

- 接收功率（$\mathrm{dBm}$）计算公式为：  
  $\mathrm{Received\ Power} = P_{\mathrm{tx}} - L_p + G_{\mathrm{tx}} - L_{\mathrm{tx}} + G_{\mathrm{rx}} - L_{\mathrm{rx}}$

其中参数含义为：

- $P_{\mathrm{tx}}$：发射功率输出（dBm）  
- $L_p$：传播损耗或路径损耗（dB）  
- $G_{\mathrm{tx}}$：发射天线增益（dBi）  
- $G_{\mathrm{rx}}$：接收天线增益（dBi）  
- $L_{\mathrm{tx}}$：发射端损耗（dB）  
- $L_{\mathrm{rx}}$：接收端损耗（dB）  
- $f$：频率（GHz）

默认的结果类型为 `FIELD_STRENGTH_DBUVM`（以 $\mathrm{dB} \mu \mathrm{V} / \mathrm{m}$ 为单位的场强）。


## Coverage display fills methods
```c++
- void AddCoverageDisplayFill(double fromValue, double toVaLue, int rgbColor)
```


添加新的覆盖图显示填充（coverage display fill）。在为已定义的接收区域生成结果后，可以使用 `ExportReceptionAreaResultsToMifFile` 或 `ExportReceptionAreaResultsToKmlFile` 方法将结果以可视化形式导出为矢量文件。

在生成的覆盖图中，结果值处于 `fromValue` 与 `toValue` 之间的区域将使用指定的 `rgbColor` 进行着色。不同填充之间的数值范围可以重叠。

默认情况下，仿真中包含三个覆盖图填充区间：

- (45, 60, 0x5555FF)
- (60, 75, 0x0000FF)
- (75, 100, 0x000088)

其中颜色为 RGB 十六进制表示法。

```c++
- void ClearCoverageDisplayFills()
```


删除所有覆盖图显示填充（coverage display fills）。该操作将移除仿真中先前通过添加操作定义的所有颜色填充区域，使得导出的可视化文件中不再包含任何默认或自定义的结果着色区域。

```c++
- int GetCoverageDisplayNumFills()
```


获取当前已定义的覆盖图显示填充（coverage display fills）的数量。

```c++
- double GetCoverageDisplayFillFromValue(int index)
- double GetCoverageDisplayFillToValue(int index)
- int GetCoverageDisplayFillColor(int index)
```


获取指定索引处的覆盖图显示填充（coverage display fill）详情。  
索引为从零开始，必须在 $0$ 到 $GetCoverageDisplayNumFills() - 1$ 的范围内。


## Computing and accessing results methods
```c++
- double GenerateReceptionPointResult(double Latitude_degrees,
double Longitude_degrees)
```


返回指定位置处根据当前仿真参数计算得出的结果（场强、路径损耗、传输损耗或接收功率）。

```c++
- ReceptionPointDetailedResult GenerateReceptionPointDetailedResult(
double Latitude_degrees, double Longitude_degrees)
```


返回一个结构体，包含指定位置处基于当前仿真参数计算的结果（场强、路径损耗、传输损耗或接收功率）以及其他计算值。

ReceptionPointDetailedResult 结构体包含以下成员：


```c++
double result;
double pathLoss_dB;
double pathLength_km;
double transmitterHeightAMSL_m;
double receiverHeightAMSL_m;
double transmitterAntennaGain_dBi;
double receiverAntennaGain_dBi;
double azimuthFromTransmitter_degrees;
double azimuthFromReceiver_degrees;
double elevAngleFromTransmitter_degrees;
double elevAngleFromReceiver_degrees;
```



pathLength_km 的值表示发射机和接收机之间的大圆距离。transmitterHeightAMSL_m 和 receiverHeightAMSL_m 的高度值单位为米，表示相对于平均海平面的高度。这些高度由天线相对于地面的高度与从地形高程数据源中获得的地形高程值之和构成（若已指定数据源）。

与 GenerateReceptionPointResult 不同，GenerateReceptionPointDetailedResult 始终计算天线增益，即使所选结果类型的计算并不需要天线增益。该方法还提供用于获取天线方向图增益的方位角和俯仰角的计算值。方位角以真北为参考；俯仰角以局部地平线为参考，其中 -90 表示天顶，0 表示天文地平线，+90 表示天底。俯仰角的计算基于中等折射率条件，并使用天线高度及通信两端之间的地形剖面（如果仿真中指定了一个或多个地形高程数据源）。在视距条件下，俯仰角的计算方向是朝向另一端天线；否则，俯仰角将朝向无线电地平线（即地形遮挡角）。


```c++
- double GenerateProfileReceptionPointResult(
double Latitude_degrees, double Longitude_degrees, int numSamples, const double* terrainElevProfile,
const int* LandCoverCLassMappedVaLueProfiLe=NULL,
const double* surfaceElevProfile=NULL,
const ITURadioClimaticZone* ituRadioCLimaticZoneProfile=NULL)
```



返回在指定位置基于当前仿真参数计算得到的结果（场强、路径损耗、传输损耗或接收功率）。不同于使用 SetPrimaryTerrainElevDataSource、SetSecondaryTerrainElevDataSource 和 SetTertiaryTerrainElevDataSource 方法所指定的地形高程数据源，此方法使用作为参数传入的地形高程剖面。

同样，可以指定一个地表覆盖映射值剖面。该剖面中的值必须是被选中传播模型能直接识别的映射值。对于 ITU-R P.1812 和 ITU-R P.452-18 传播模型，这些值可以是遮蔽类型（即定义在 P1812ClutterCategory 或 P452ClutterCategory 类型中的值），也可以是以米为单位的代表性遮蔽高度，具体取决于通过 SetITURP1812LandCoverMappingType 或 SetITURP452LandCoverMappingType 所设定的解释方式。对于 ITU-R P.452-17，仅允许使用高度增益模型的遮蔽类型（即定义在 P452HeightGainModelClutterCategory 类型中的值）。

此外，还可以指定一个地表高程剖面。该剖面可能被 ITU-R P.1812 和 ITU-R P.452-18 模型使用，取决于所选的地表剖面方法（见 SetITURP1812SurfaceProfileMethod 和 SetITURP452SurfaceProfileMethod）。

最后，还可以指定一个 ITU 无线电气候区剖面。此剖面被 ITU-R P.1812 及 ITU-R P.452（两个版本）传播模型使用。ITURadioClimaticZone 是一个枚举类型，可取以下值之一：
- ITU_COASTAL_LAND = 3 （沿海陆地）
- ITU_INLAND = 4 （内陆）
- ITU_SEA = 1 （海洋）

当某个剖面设置为 NULL（包括 terrainELevProfile，也可与其他剖面一样设置为 NULL）时，如传播模型需要，将从通常的主/次/第三数据源中提取其样本。对于 ITU 无线电气候区剖面，其样本将使用通过 SetITURP1812RadioClimaticZonesFile 或 SetITURP452RadioClimaticZonesFile 指定的文件获取（如果模型要求使用该剖面）。

latitude_degrees 和 longitude_degrees 表示接收点的位置。numSamples 表示 terrainELevProfile、LandCoverClassMappedValueProfile、surfaceElevProfile 和 ituRadioClimaticZoneProfile 中每个非 NULL 剖面包含的样本数量（即如果指定了多个剖面，它们必须包含相同数量的样本）。地形和地表高程样本的单位均为米。


### - void GenerateReceptionAreaResults()

在当前仿真参数下，为当前定义的接收区域内部计算结果（场强、路径损耗、传输损耗或接收功率）。`GenerateReceptionAreaResults` 方法的执行时间可能会因仿真参数而有很大差异，例如地形高程数据的采样分辨率和接收区域中接收点的数量。

调用此方法后，之前在同一个仿真对象上通过调用 `GenerateReceptionAreaResults` 所生成的结果将不再可访问。

```c++
- int GetGenerateStatus()
```


`GetGenerateStatus` 方法返回与上一次调用以下任一结果生成方法相关联的状态值：

- `GenerateReceptionPointResult`
- `GenerateReceptionPointDetailedResult`
- `GenerateProfileReceptionPointResult`
- `GenerateReceptionAreaResults`
- `ExportProfilesToCsvFile`

该状态值可以与 `GenerateStatus` 枚举类型中定义的不同标志值进行比对，以判断哪些状态标志适用。

`GenerateStatus` 是一个枚举类型，定义了以下标志值（flag values）：


| STATUS_OK | $=$ | 0 |
| :--- | :--- | ---: |
| STATUS_NO_TERRAIN_ELEV_DATA | $=$ | 1 |
| STATUS_SOME_TERRAIN_ELEV_DATA_MISSING | $=$ | 2 |
| STATUS_NO_LAND_COVER_DATA | $=$ | 4 |
| STATUS_SOME_LAND_COVER_DATA_MISSING | $=$ | 8 |
| STATUS_NO_ITU_RCZ_DATA | $=$ | 16 |
| STATUS_SOME_ITU_RCZ_DATA_MISSING | $=$ | 32 |
| STATUS_NO_SURFACE_ELEV_DATA | $=$ | 64 |
| STATUS_SOME_SURFACE_ELEV_DATA_MISSING | $=$ | 128 |

当 `GetGenerateStatus` 返回 0（STATUS_OK）时，则不适用其他状态值。  
否则可以使用按位与操作符（&）对返回值进行检查，以确定适用的状态值。例如：


```c++
int status = sim->GetGenerateStatus();
if( (status & STATUS_SOME_TERRAIN_ELEV_DATA_MISSING) != 0 )
    cout << "Some terrain elevation data could not be obtained!" << endl;
```



标志值说明：

**STATUS_SOME_TERRAIN_ELEV_DATA_MISSING**  
当该标志被触发时，表示至少有一个地形高程值无法从任何地形高程数据源（主、次、第三）中获取。

**STATUS_NO_TERRAIN_ELEV_DATA**  
当该标志被触发时，表示完全无法从任何地形高程数据源（主、次、第三）中获取地形高程数据。这可能意味着未设置地形高程数据源目录或目录设置错误。也可能是接收区域未与任何地形高程数据文件的覆盖区域重叠。

**STATUS_SOME_LAND_COVER_DATA_MISSING**  
当该标志被触发时，表示至少有一个土地覆盖值无法从任何土地覆盖数据源（主、次）中获取。

**STATUS_NO_LAND_COVER_DATA**  
当该标志被触发时，表示完全无法从任何土地覆盖数据源（主、次）中获取土地覆盖数据。这可能意味着未设置土地覆盖数据源目录或目录设置错误，也可能是接收区域未与任何土地覆盖数据文件的覆盖区域重叠。另一种可能是不存在土地覆盖数据源与所选传播模型之间的映射。然而，当所选传播模型不使用土地覆盖数据时，该类标志不会被触发。

**STATUS_SOME_SURFACE_ELEV_DATA_MISSING**  
当该标志被触发时，表示至少有一个地表高程值无法从任何地表高程数据源（主、次、第三）中获取。

**STATUS_NO_SURFACE_ELEV_DATA**  
当该标志被触发时，表示完全无法从任何地表高程数据源（主、次、第三）中获取地表高程数据。这可能意味着未设置地表高程数据源目录或目录设置错误，也可能是接收区域未与任何地表高程数据文件的覆盖区域重叠。当所选传播模型不使用地表高程数据时，该类标志不会被触发。

**STATUS_SOME_ITU_RCZ_DATA_MISSING**  
当该标志被触发时，表示至少有一个ITU无线电气候区值无法从使用 `SetITURP1812RadioClimaticZonesFile` 或 `SetITURP452RadioClimaticZonesFile` 指定的源文件中获取。

**STATUS_NO_ITU_RCZ_DATA**  
当该标志被触发时，表示完全无法从使用 `SetITURP1812RadioClimaticZonesFile` 或 `SetITURP452RadioClimaticZonesFile` 指定的源文件中获取任何ITU无线电气候区值。当所选传播模型不使用无线电气候区数据时，该类标志不会被触发。

最后，请注意：如果所有对应的数据源均设置为 NONE，则一般不会触发任何标志，因为此时 CRC-COVLIB 被指示不查找任何数据。

```c++
- double GetReceptionAreaResultValue(int xIndex, int yIndex)
```


一旦调用了 `GenerateReceptionAreaResults` 方法，就可以通过调用 `GetReceptionAreaResultValue` 方法获取接收区域内指定索引处接收点的计算结果。  
`xIndex` 必须是一个整数，范围为 0 到接收区域中水平接收点数量减 1；  
`yIndex` 必须是一个整数，范围为 0 到接收区域中垂直接收点数量减 1。  
当索引超出有效范围时，返回值为 0。

```c++
- void SetReceptionAreaResultValue(int xIndex, int yIndex, double value)
```


设置或修改接收区域中指定索引处接收点的结果值。  
`xIndex` 必须是一个整数，范围为 0 到接收区域中水平接收点数量减 1；  
`yIndex` 必须是一个整数，范围为 0 到接收区域中垂直接收点数量减 1。

```c++
- double GetReceptionAreaResultValueAtLatLon(double Latitude_degrees, double Longitude_degrees)
```


一旦调用了 `GenerateReceptionAreaResults` 方法，即可调用该方法以获取接收区域中指定地理位置处的计算结果。  
该结果是通过对接收区域中最邻近的接收点的已计算结果进行插值获得的。  
当指定位置在接收区域之外时，返回值为 0。

```c++
- double GetReceptionAreaResultLatitude(int xIndex, int yIndex)
- double GetReceptionAreaResultLongitude(int xIndex, int yIndex)
```


获取接收区域中指定索引处接收点的纬度/经度坐标（单位为度）。  
`xIndex` 必须是从 0 到接收区域中水平点数减 1 的整数；  
`yIndex` 必须是从 0 到接收区域中垂直点数减 1 的整数。  
当索引超出有效范围时，返回值为 0。

```c++
- bool ExportReceptionAreaResultsToTextFile(const char* pathname, const char* resultsColumnName=NULL)
```


在调用 `GenerateReceptionAreaResults` 方法之后，可以调用该方法将接收区域的结果写入文本文件中。  
该文件将包含所有接收点的位置（纬度和经度）以及其对应的结果（场强、路径损耗、传输损耗或接收功率）。  
`pathname` 应为一个字符串，包含要创建或覆盖的文件名，可选包含完整路径或相对路径。  
`resultsColumnName` 可用于指定文件标题行中结果列的列名；若未指定，则使用默认列名。  
当文件成功创建或覆盖时返回 `true`，否则返回 `false`。

```c++
- bool ExportReceptionAreaResultsToMifFile(const char* pathname, const char* resultsUnits=NULL)
```


在调用 `GenerateReceptionAreaResults` 方法之后，可以调用该方法将接收区域结果写入一个 MIF（MapInfo Interchange File）矢量文件，并生成其对应的 MID 文件以存储属性信息。  
MIF 文件将基于定义好的覆盖显示填充（coverage display fills）提供结果的图形化表示。  
`pathname` 应为一个字符串，包含要创建或覆盖的 MIF 文件名，可选包含完整路径或相对路径。  
`resultsUnits` 可用于修改结果的默认计量单位（当使用 `SetReceptionAreaResultValue` 修改了接收区域内容，并赋值使用的单位与所选结果类型默认单位不一致时，这一参数将很有用）。  
当 MIF 与 MID 两个文件均成功创建或覆盖时返回 `true`，否则返回 `false`。  
MIF 文件可通过大多数地理信息系统（GIS）软件进行展示。

```c++
- bool ExportReceptionAreaResultsToKmlFile(const char* pathname, double fillOpacity_percent=50, double lineOpacity_percent=50, const char* resultsUnits=NULL)
```


在调用 `GenerateReceptionAreaResults` 方法之后，可以调用该方法将接收区域结果写入一个 KML（Keyhole Markup Language）矢量文件。  
KML 文件将基于定义好的覆盖显示填充（coverage display fills）提供结果的图形化表示。  
`pathname` 应为一个字符串，包含要创建或覆盖的 KML 文件名，可选包含完整路径或相对路径。  
`fillOpacity_percent` 和 `lineOpacity_percent` 参数可用于设置多边形填充与轮廓线的默认不透明度，取值范围为 0（完全透明）至 100（完全不透明）。  
`resultsUnits` 可用于修改结果的默认计量单位（当使用 `SetReceptionAreaResultValue` 修改了接收区域内容，并赋值使用的单位与所选结果类型默认单位不一致时，这一参数将很有用）。  
当文件成功创建或覆盖时返回 `true`，否则返回 `false`。  
KML 文件可通过 Google Earth 以及大多数地理信息系统（GIS）软件进行查看。

```c++
- bool ExportReceptionAreaResultsToBilFile(const char* pathname)
```


在调用 `GenerateReceptionAreaResults` 方法之后，可以调用该方法将接收区域结果写入一个 BIL（Band Interleaved by Line）栅格文件，同时生成其关联的 HDR（头文件）与 PRJ（投影文件）。  
BIL 文件将包含与接收区域中每个接收点对应的结果值。  
`pathname` 应为一个字符串，包含要创建或覆盖的 BIL 文件名，可选包含完整路径或相对路径。  
当三个文件均成功创建或覆盖时，返回 `true`，否则返回 `false`。  
BIL 文件可通过大多数地理信息系统（GIS）软件进行查看。

```c++
- bool ExportReceptionAreaTerrainElevationToBilFile(const char* pathname, int numHorizontalPoints, int numVerticalPoints, bool setNoDataToZero=false)
```


将接收区域（通过 `SetReceptionAreaCorners` 指定）所覆盖区域内的地形高程数据导出为一个 BIL（Band Interleaved by Line）栅格文件，并生成对应的 HDR（头文件）和 PRJ（投影文件）。  
该方法会使用通过 `SetPrimaryTerrainElevDataSource`、`SetSecondaryTerrainElevDataSource` 和 `SetTertiaryTerrainElevDataSource` 设定的地形高程数据源，导出 `numHorizontalPoints × numVerticalPoints` 个点的数据。

当 `setNoDataToZero` 设置为 `true` 时，若无法从地形高程数据源获取数据，则使用 $0$ 米作为默认值；否则使用“无数据”值。

当三个文件均成功创建或覆盖时，返回 `true`，否则返回 `false`。  
BIL 文件可通过大多数地理信息系统（GIS）软件进行查看。

```c++
- bool ExportReceptionAreaLandCoverClassesToBilFile(const char* pathname, int numHorizontalPoints, int numVerticalPoints, bool mapValues)
```


将接收区域（通过 `SetReceptionAreaCorners` 指定）所覆盖区域内的地表覆盖类型（land cover class）数据导出为一个 BIL（Band Interleaved by Line）栅格文件，并生成对应的 HDR（头文件）和 PRJ（投影文件）。  
该方法会使用通过 `SetPrimaryLandCoverDataSource` 和 `SetSecondaryLandCoverDataSource` 设定的地表覆盖数据源，导出 `numHorizontalPoints × numVerticalPoints` 个点的数据。

当 `mapValues` 设置为 `true` 时，在导出之前会应用地表覆盖类别与当前选定传播模型（通过 `SetPropagationModel` 指定）之间的所有已定义映射。  
关于地表覆盖类别映射的更多信息，可参考 `SetLandCoverClassMapping` 和 `SetDefaultLandCoverClassMapping`。

当三个文件均成功创建或覆盖时，返回 `true`，否则返回 `false`。  
BIL 文件可通过大多数地理信息系统（GIS）软件进行查看。

```c++
- bool ExportReceptionAreaSurfaceElevationToBilFile(const char* pathname, int numHorizontalPoints, int numVerticalPoints, bool setNoDataToZero=false)
```


将接收区域（通过 `SetReceptionAreaCorners` 指定）所覆盖区域内的表面高程（surface elevation）数据导出为一个 BIL（Band Interleaved by Line）栅格文件，并生成对应的 HDR（头文件）和 PRJ（投影文件）。  
该方法会使用通过 `SetPrimarySurfaceElevDataSource`、`SetSecondarySurfaceElevDataSource` 和 `SetTertiarySurfaceElevDataSource` 指定的表面高程数据源，导出 `numHorizontalPoints × numVerticalPoints` 个点的数据。

当 `setNoDataToZero` 设置为 `true` 时，若无法从表面高程数据源获取数据，则使用 0 米作为缺省值。否则，使用特定的“无数据”值。

当三个文件均成功创建或覆盖时，返回 `true`，否则返回 `false`。  
BIL 文件可通过大多数地理信息系统（GIS）软件进行查看。

```c++
- bool ExportProfilesToCsvFile(const char* pathname, double Latitude_degrees, double Longitude_degrees)
```


根据当前仿真参数，计算从发射机位置到指定接收点（`Latitude_degrees` 和 `Longitude_degrees`）路径上的仿真结果（场强、路径损耗、传输损耗或接收功率）。  
该路径上的结果剖面（result profile）及其它相关剖面（如地形高程、地表覆盖等）随后将被导出为一个 CSV（逗号分隔值）文件。

`pathname` 应为包含待创建或覆盖的 CSV 文件名称的字符串，可包含完整或相对路径。

当文件成功创建或覆盖时，返回 `true`，否则返回 `false`。

每个剖面中点的数量由通过 `SetTerrainElevDataSamplingResolution` 方法指定的采样分辨率决定。


## Concurrency

可以安全地并行调用不同 `Simulation` 类实例的方法。  
然而，不应假设可以安全地并行调用同一个实例的方法。


## References

[1] J. Ethier, M. Châteauvert. "Machine Learning-Based Path Loss Modeling With Simplified Features," in IEEE Antennas and Wireless Propagation Letters, vol. 23, no. 11, pp. 3997-4001, 2024. Preprint on arXiv: https://arxiv.org/abs/2405.10006

[2] J. Ethier, M. Châteauvert, R. G. Dempsey, A. Bose. "Path Loss Prediction Using Machine Learning with Extended Features," January 2025. Preprint on arXiv: https://arxiv.org/pdf/2501.08306

[3] Thiele, Lars \& Wirth, T \& Börner, Kai \& Olbrich, Michael \& Jungnickel, Volker \& Rumold, Juergen \& Fritze, Stefan. (2009). Modeling of 3D field patterns of downtilted antennas and their impact on cellular systems.

[4] T. G. Vasiliadis, A. G. Dimitriou and G. D. Sergiadis, "A novel technique for the approximation of 3-D antenna radiation patterns," in IEEE Transactions on Antennas and Propagation, vol. 53, no. 7, pp. 2212-2219, July 2005, doi: 10.1109/TAP.2005.850752.

## Contact information

For any question regarding this document or CRC-COVLIB, you may contact the main author at: martin-pierre.lussier@ised-isde.gc.ca

## Personal thanks

Thanks to Jérôme Blais-Morin for his contribution to CRC-COVLIB's original version and to Doris Camiré for her support to this project. Thanks to Bernard Doray for many insightful comments and suggestions. Thanks to Dr. Pierre Bouchard for expert guidance on ITU recommendations. Thanks to Mathieu Châteauvert and many other CRC colleagues/students for feedback on using CRC-COVLIB.

Also thanks to Dr. Ivica Stevanovic. CRC-COVLIB's implementation of the ITU-R P. 1812 and ITU-R P. 452 propagation models were tested using validation profiles and result files from Dr. Stevanovic.

Thanks to everyone at the NTIA who worked on developing propagation models and who contributed in making the source code available.

Thanks to the Lord my God, The Father, The Son \& The Holy Spirit, for everything.
Martin-Pierre




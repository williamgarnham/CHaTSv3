import GraphContainer from "./GraphContainer";

const data = require("../fixtures/data.json");

const PageContainer = () => {
  return (
    <div>
      <div>Current Temperature and Humidity</div>
      <div>
        <>{data[data.length - 1].temp}°C </>
        <>{data[data.length - 1].hum}%</>
      </div>
      <div>
        <h2>Temperature</h2>
        <GraphContainer data={data} graphType={"temp"} />
      </div>
      <div>
        <h2>Humidity</h2>
        <GraphContainer data={data} graphType={"hum"} />
      </div>
    </div>
  );
};

export default PageContainer;

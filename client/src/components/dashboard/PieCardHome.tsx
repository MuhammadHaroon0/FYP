import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { RiPieChart2Line } from "react-icons/ri";
ChartJS.register(ArcElement, Tooltip, Legend);

interface PieCardProps {
  data: { name: string; value: number; color: any }[];
}

const PieChartHome: React.FC<PieCardProps> = ({ data }) => {
  const data1 = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: "Votes",
        data: data.map((item) => item.value),
        backgroundColor: ["#0074BF", "#009BFF", "#B0E0FF", "#D9F0FF"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div
      className="flex items-center justify-between py-6 px-8 border-[1px] border-[#EBEBEB] rounded-2xl max-md:flex-col max-md:items-center max-md:gap-3"
      style={{ boxShadow: "0px 15px 30px -4px #0E0A2214" }}
    >
      <div className=" w-[50%] h-full flex flex-col justify-between gap-4 max-md:w-full max-md:items-center ">
        <div className="flex items-center gap-1">
          <p className="max-md:text-[12px]">Interactions by Purpose</p>{" "}
          <RiPieChart2Line color="#939393" />
        </div>
        <div className="w-[50%]">
          <Pie data={data1} options={options} />
        </div>
      </div>
      <div className="max-md:grid max-md:grid-cols-2 max-md:gap-3">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex items-center gap-1 ">
              <div className=" py-1 px-2 bg-[#F0F0F0] rounded-[30px] flex items-center gap-3 ">
                <div
                  style={{ backgroundColor: item.color }}
                  className={`w-2 h-2 rounded-[50%] shrink-0 max-md:w-1 max-md:h-1`}
                ></div>
                <div className="shrink-0 max-md:text-[10px] ">{item.name}</div>
              </div>
              <div className="text-[32px] max-md:text-[12px]">
                {item.value}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartHome;

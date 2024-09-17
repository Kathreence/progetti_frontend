import React from "react";

// Component for the legend
const Legend = () => {
  return (
    <div>
      <h2>Prezzi</h2>
      <table border="1">
        <tr>
          <th className="ch">*</th>
          <td>Chiuso/Non disponibile</td>
        </tr>
        <tr>
          <th className="bs">.</th>
          <td>Bassa stagione</td>
        </tr>
        <tr>
          <th className="ms">.</th>
          <td>Media stagione</td>
        </tr>
        <tr>
          <th className="as">.</th>
          <td>Alta stagione</td>
        </tr>
      </table>
    </div>
  );
};

// Component for rendering a single month's table
const MonthTable = ({ month, data }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th></th>
          <th>LU</th>
          <th>MA</th>
          <th>ME</th>
          <th>GIO</th>
          <th>VE</th>
          <th>SA</th>
          <th>DO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th rowSpan={data.length}>{month}</th>
          {data.slice(0, 1).map((week) =>
            week.map((day, i) => (
              <td key={i} className={day.class}>
                {day.date}
              </td>
            ))
          )}
        </tr>
        {data.slice(1, data.length).map((week, index) => (
          <tr key={index}>
            {week.map((day, i) => (
              <td key={i} className={day.class}>
                {day.date}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Main component
function Stagioni() {
  // Example data for one month (January)
  const gennaioData = [
    [
      { date: "", class: "" },
      { date: "1", class: "as" },
      { date: "2", class: "as" },
      { date: "3", class: "bs" },
      { date: "4", class: "bs" },
      { date: "5", class: "bs" },
      { date: "6", class: "bs" },
    ],
    [
      { date: "7", class: "bs" },
      { date: "8", class: "bs" },
      { date: "9", class: "bs" },
      { date: "10", class: "bs" },
      { date: "11", class: "bs" },
      { date: "12", class: "bs" },
      { date: "13", class: "bs" },
    ],
    // More data here...
  ];

  return (
    <main>
      <Legend />
      <MonthTable month="GENNAIO" data={gennaioData} />
      Add other months here
    </main>
  );
}

export default Stagioni;

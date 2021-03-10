import { renderData, prepareData } from "./solution";
import payload from "../fixtures/payload.json";
import output from "../fixtures/output.json";

describe(`prepareData`, () => {
  it(`consolidates the data correctly`, () => {
    expect(prepareData(payload)).toEqual(output);
  });
});

describe(`renderData`, () => {
  it(`renders the output correctly`, () => {
    const example = [
      {
        "flight_number": 62,
        "mission_name": "Iridium NEXT Mission 6",
        "payloads_count": 2
      },
      {
        "flight_number": 72,
        "mission_name": "CRS-16",
        "payloads_count": 1
      },
      {
        "flight_number": 64,
        "mission_name": "CRS-15",
        "payloads_count": 1
      },
      {
        "flight_number": 60,
        "mission_name": "TESS",
        "payloads_count": 1
      },
      {
        "flight_number": 59,
        "mission_name": "CRS-14",
        "payloads_count": 1
      }
    ];

    const expected = [
      `[`,
      `  {`,
      `    "flight_number": 62,`,
      `    "mission_name": "Iridium NEXT Mission 6",`,
      `    "payloads_count": 2`,
      `  },`,
      `  {`,
      `    "flight_number": 72,`,
      `    "mission_name": "CRS-16",`,
      `    "payloads_count": 1`,
      `  },`,
      `  {`,
      `    "flight_number": 64,`,
      `    "mission_name": "CRS-15",`,
      `    "payloads_count": 1`,
      `  },`,
      `  {`,
      `    "flight_number": 60,`,
      `    "mission_name": "TESS",`,
      `    "payloads_count": 1`,
      `  },`,
      `  {`,
      `    "flight_number": 59,`,
      `    "mission_name": "CRS-14",`,
      `    "payloads_count": 1`,
      `  }`,
      `]`
    ].join("\n");

    document.body.innerHTML = `<pre id="out"></pre>`;
    renderData();
    expect(document.getElementById("out").innerHTML).toEqual(expected);
  });
});

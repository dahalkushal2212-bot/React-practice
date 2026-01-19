// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch(`https://api.forexrateapi.com/v1/latest?base=${currency}&apikey=demo`)
//       .then((res) => res.json())
//       .then((res) => setData(res[currency]));
//   }, [currency]);
//   return data;
// }
// export default useCurrencyInfo;

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(
     "https://api.forexrateapi.com/v1/latest?api_key=c06e9258d5a23799f8a265ed346adf43"
    )
      .then((res) => res.json())
      .then((res) => {
        if (res && res.rates) {
          setData(res.rates);
        }
      })
      .catch((error) => console.error("Currency API Error:", error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

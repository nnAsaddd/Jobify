import { useEffect, useState } from "react";

const useStore = (store: any, callback: any) => {
  const result = store(callback);
  const [data, setData] = useState();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

export default useStore;

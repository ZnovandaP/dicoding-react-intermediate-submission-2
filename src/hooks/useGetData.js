/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import * as React from 'react';

const useGetData = (ApiGetNotes) => {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);

    ApiGetNotes.then((response) => {
      setIsLoading(false);
      setData(response.data);
      setIsSuccess(true);
      if (response.error) {
        setIsError(true);
      }
    }).catch((_) => {
      setIsError(true);
    });
  }, []);

  return {
    data, isLoading, isSuccess, isError,
  };
};

export default useGetData;

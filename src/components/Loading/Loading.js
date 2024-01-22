import { Puff } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <Puff
      height="100"
      width="100"
      radius={1}
      color="#cf2121"
      ariaLabel="puff-loading"
      wrapperStyle={{ position: 'fixed', top: '41%', left: '46%' }}
      wrapperClass=""
      visible={true}
    />
  );
}


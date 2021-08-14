import React from 'react';
import ReactLoading from 'react-loading';

import  './styles.scss';

const Loading: React.FC = () => {
  return (
    <div className='loadingContainer'>
      <ReactLoading type={'bars'} color={'#5429cc'} height={'20%'} width={'20%'} />
    </div>
  );
}

export default Loading;
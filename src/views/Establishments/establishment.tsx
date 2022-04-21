import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { AuthStore } from '@store';
import { Typography, Button } from '@mui/material';
import { useSocket } from '@utils';

const Estabelecimento = () => {
  const navigate = useNavigate();
  const { establishmentId } = useParams();
  const { user, establishments } = AuthStore.useState(s => s);
  const [establishment, setEstablishment] = useState<any>(null);
  
  const socket = useSocket();

  useEffect(() => {
    if (establishmentId && +establishmentId > 0 && establishments.length > 0) {
      const _e = establishments.find(e => e.id === +establishmentId);
      if (_e) {
        setEstablishment(_e);
        socket.instatiate(+establishmentId);

        setTimeout(() => socket.setEntrance(+establishmentId), 3000);
        setTimeout(() => socket.add(), 4000);
        setTimeout(() => socket.add(), 5000);
        setTimeout(() => socket.add(), 6000);
        setTimeout(() => socket.subtract(), 7000);
        setTimeout(() => socket.add(), 8000);
        setTimeout(() => socket.subtract(), 9000);
      }
      else
        navigate(-1);
    }

  }, [establishmentId, establishments]);

  return (
    <>
      <Typography variant="h4">{establishment?.tradeName}</Typography>
    </>
  );
};

export default Estabelecimento;
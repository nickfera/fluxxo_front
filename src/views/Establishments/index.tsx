import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthStore } from '@store';
import { Typography, Button } from '@mui/material';
import MUIDataTable from 'mui-datatables';

const Establishments = () => {
  const navigate = useNavigate();

  const { establishments } = AuthStore.useState(s => s);

  return (
    <>
      {establishments.length > 0
        ? (
          <MUIDataTable
            title="Estabelecimentos"
            columns={[
              { name: 'corporateName', label: 'Razão Social', options: { filter: false, sort: false }, },
            ]}
            data={establishments}
            options={{
              download: false,
              filter: false,
              print: false,
              selectableRows: 'none',
              viewColumns: false,
              onRowClick: (rowData, rowMeta) => {
                navigate(`/estabelecimentos/${establishments[rowMeta.dataIndex].id}`);
              }
            }}
          />
        ) : (
          <div>
            <Typography sx={{ mb: 1 }}>Você ainda não possui nenhum estabelecimento.</Typography>
            <Button
              variant="outlined"
              color="primary"
            >
              Adicionar um estabelecimento
            </Button>
          </div>
      )}
    </>
  );
};

export default Establishments;
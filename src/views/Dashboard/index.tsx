import React, { useEffect, useState } from 'react';
import { AuthStore } from '@store';
import { Typography, Button } from '@mui/material';
import MUIDataTable from 'mui-datatables';

const Dashboard = () => {
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

export default Dashboard;
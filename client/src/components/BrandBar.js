import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

const BrandBar = observer(() => {
  const { device } = useContext(Context)
  return (
    <div className='d-flex'>
      {device.brands.map(brand =>
        <Card
          style={{ cursor: 'pointer' }}
          onClick={() => device.setSelectedBrand(brand)}
          className='p-2'
          border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
          key={brand.id}>
          {brand.name}
        </Card>
      )}
    </div>
  );
});


export default BrandBar;
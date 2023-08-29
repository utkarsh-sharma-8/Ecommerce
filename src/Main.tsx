import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppNavigator from './AppNavigator';
import { addMyProducts } from './redux/MyProductSlice';

let items = [
  {
    id: 1,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
  {
    id: 2,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
  {
    id: 3,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
  {
    id: 4,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
  {
    id: 5,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
  {
    id: 6,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
  {
    id: 7,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
  {
    id: 8,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
  {
    id: 9,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
  {
    id: 10,
    name: 'Asus Tough Gaming',
    price: 60000,
    description:
      'Geared for serious gaming and real-world durability, the TUF Gaming A15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest AMD Ryzen 7 CPU and GeForce GTX 1650 Ti GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays 144Hz.',
    image:
      'https://th.bing.com/th/id/OIP.EkV5JL1J_14th8ppMMtrnwEsDi?pid=ImgDet&rs=1',
    qty: 0,
  },
];

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    items.map(item => {
      dispatch(addMyProducts(item));
    });
  }, []);
  return <AppNavigator />;
};

export default Main;

import classNames from 'classnames';
import type { FC } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaPlay,FaShoppingCart, FaUser } from "react-icons/all";

import * as styles from './Icon.styles';

type Props = {
  type: string;
  width: number;
  height: number;
  color: string;
};

export const Icon: FC<Props> = ({ color, height, type, width }) => {
  let Icon = FaUser;
  switch (type) {
    case 'FaShoppingCart':
      Icon = FaShoppingCart;
      break;
    case 'FaUser':
      Icon = FaUser;
      break;
    case 'FaArrowLeft':
      Icon = FaArrowLeft;
      break;
    case 'FaArrowRight':
      Icon = FaArrowRight;
      break;
    case 'FaPlay':
      Icon = FaPlay;
      break;
    case 'FaCheckCircle':
      Icon = FaCheckCircle;
      break;
    default:
      console.log('Icon type not found');
      break;
  }

  return (
    <span className={classNames(type, styles.container({ color, height, width }))}>
      <Icon />
    </span>
  );
};

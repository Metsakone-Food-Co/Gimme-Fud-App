import { useEffect, useState } from 'react';
import { useParams,Outlet,Link} from 'react-router-dom'
import CoursesService from '../services/CoursesService'
import CustomCoursesService from '../services/CustomCoursesService'

export default function ShoppingCartComponent() {

  const result = useParams();
  console.log(result);
  return (
    <div>ShoppingCartComponent</div>
  )
}

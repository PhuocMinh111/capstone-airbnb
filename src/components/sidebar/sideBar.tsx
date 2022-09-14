import React from 'react';
import styled from 'styled-components';
import {openSidebar,closeSidebar} from '../../store/reducers/navBarReducer'
import {useSelector,useDispatch} from 'react-redux'
import type {RootState} from '../../store/store'
import { FaTimesCircle } from 'react-icons/fa';

const SideBar = () => {
    const isSidebarOpen = useSelector((state:RootState) => state.navbar.isSideBarOpen)
    
    const dispatch= useDispatch();
    
    return <Wrapper style={isSidebarOpen ? {transform:"translateX(0)"} : undefined} className={`transition-all
    sm:hidden bg-black p-3`}>
        <button   onClick={()=>{dispatch(closeSidebar())}} >
            <FaTimesCircle className='text-white float-right text-2xl'/>
             </button>
        
    </Wrapper>
    
}
const Wrapper = styled.div`
width:100%;
z-index:1000;
transform:translateX(-100%);
position:absolute;
top:0;
left:0;
height:100vh;
`

export default SideBar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../AppStyles.module.css';
import MobileNavigation from './MobileNavigation';

const Header = () => {
  return (
    <div>
      <div className={styles.main_Header}>
        <div className={styles.main_Header_Top}>
          <div>
            <NavLink to='/home' className={styles.main_Header_Logo}>
              <div className={styles.main_Header_Logo_Top}>The</div>
              <div className={styles.main_Header_Logo_Bottom}>Siren</div>
            </NavLink>
          </div>
          <div>
            <MobileNavigation />
          </div>
        </div>
        <div className={styles.main_Header_Bottom}>
          <div>
            <NavLink
              to='/home'
              className={styles.main_Header_Items}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : 'black',
                  backgroundColor: isActive ? 'black' : 'white',
                };
              }}
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              to='/categoryPage/Bollywood'
              className={styles.main_Header_Items}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : 'black',
                  backgroundColor: isActive ? 'black' : 'white',
                };
              }}
            >
              Bollywood
            </NavLink>
          </div>
          <div>
            <NavLink
              to='/categoryPage/Technology'
              className={styles.main_Header_Items}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : 'black',
                  backgroundColor: isActive ? 'black' : 'white',
                };
              }}
            >
              Technology
            </NavLink>
          </div>
          <div>
            <NavLink
              to='/categoryPage/Hollywood'
              className={styles.main_Header_Items}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : 'black',
                  backgroundColor: isActive ? 'black' : 'white',
                };
              }}
            >
              Hollywood
            </NavLink>
          </div>
          <div>
            <NavLink
              to='/categoryPage/Fitness'
              className={styles.main_Header_Items}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : 'black',
                  backgroundColor: isActive ? 'black' : 'white',
                };
              }}
            >
              Fitness
            </NavLink>
          </div>
          <div>
            <NavLink
              to='/categoryPage/Food'
              className={styles.main_Header_Items}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'white' : 'black',
                  backgroundColor: isActive ? 'black' : 'white',
                };
              }}
            >
              Food
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
import React from 'react';
import {
    Link
  } from "react-router-dom";

import MenuItem from './MenuItem';

import ammoData from '../data.json';
import mapData from '../map-data.json';

const ammoTypes = [...new Set(ammoData.data.map((ammoData) => {
    return ammoData.type
}))].sort();

function Menu() {    
    return <div
            className="menu" 
        >
            
            <Link
                className = "branding"
                to = '/'
            >
                Tarkov Tools
            </Link>
            <div
                className = "submenu-wrapper"
            >
                <Link
                    to = '/ammo/'
                >
                    Ammo
                </Link>
                <ul>
                {ammoTypes.map(ammoType => 
                    <MenuItem
                        displayText = {ammoType}
                        key = {ammoType}
                        to = {`/ammo/${ammoType}`}
                    />
                )} 
                </ul>
            </div>
            <div
                className = "submenu-wrapper"
            >
                Maps
                <ul>
                {mapData.map(map => 
                    <MenuItem
                        displayText = {map.displayText}
                        key = {map.key}
                        to = {`/map/${map.key}`}
                    />
                )} 
                </ul>
            </div>
            <div
                className = "submenu-wrapper"
            >
                <Link
                    to = '/loot-tier/barter-items'
                >        
                    Loot tiers
                </Link>
                <ul>
                    <MenuItem
                        displayText = {'Barter Items'}
                        to = {`/loot-tier/barter-items`}
                    />
                    <MenuItem
                        displayText = {'Keys'}
                        to = {`/loot-tier/keys`}
                    />
                </ul>
            </div>
            <a 
                className = {'external-link'}
                href="https://developertracker.com/escape-from-tarkov/"
            >
                Dev tracker    
            </a>
            <a 
                className = {'external-link last-link'}
                href="https://www.patreon.com/kokarn"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Patreon"
                    role="img"
                    viewBox="0 0 512 512"
                >
                    <rect
                        width="512"
                        height="512"
                        rx="15%"
                        fill="#052d49"
                    />
                    <circle cx="310" cy="223" r="113" fill="#fff"/>
                    <path fill="#f96854" d="M165 410V110h-56v300"/>
                </svg>  
                Support me  
            </a>
            
    </div>;
}

export default Menu;



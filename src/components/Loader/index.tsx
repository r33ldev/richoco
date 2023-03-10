export default `
html,body{
display: block;
overflow:hidden;
height:100vh;
width:100vw
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    top: 0%;
    left: 0%;
    // transform: translate(-50%, -50%);
    display: flex;
    background: #f8fafb!important;
    left: 0,
    right: 0;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;

}

    
    svg {
        font-family: Russo One, sans-serif;
        position: absolute; 
        width: 100%; height: 100%;
    }
    svg text {
        text-transform: uppercase;
        animation: stroke 5s infinite alternate;
        stroke-width: 2;
        stroke: #365fa0;
        font-size: 140px;
        letter-spacing: 0.1em;
    }
    @keyframes stroke {
        0%   {
            fill: rgba(72,138,20,0); stroke: rgba(54,95,160,1);
            stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
        }
        70%  {fill: rgba(72,138,20,0); stroke: rgba(54,95,160,1); }
        80%  {fill: rgba(72,138,20,0); stroke: rgba(54,95,160,1); stroke-width: 3; }
        100% {
            fill: #1f4561; stroke: rgba(54,95,160,0); 
            stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 1;
        
    }
}
`;

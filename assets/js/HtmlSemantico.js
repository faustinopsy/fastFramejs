import * as elementTypes from "./componentes/TiposElementos.js";

const estiloPadrao = {
    border: '2px solid black',
    'box-sizing': 'border-box', 
};

const header = {
    tipo: elementTypes.HEADER,
    style: {
        ...estiloPadrao,
        background: 'lightblue',
        textAlign: 'center',
        height: '100px', 
    }
};

const nav = {
    tipo: elementTypes.NAV,
    style: {
        ...estiloPadrao,
        display: 'flex', 
        'flex-wrap': 'wrap',
        alignItems: 'center', 
        height: '50px', 
    }
};

const ul = {
    tipo: elementTypes.UL,
    style: {
        ...estiloPadrao,
        'list-style': 'none',
        paddingLeft: '0',
        margin: '0', 
        flex: '1', 
    }
};

const li = {
    tipo: elementTypes.LI,
    style: {
        ...estiloPadrao,
        flex: '1', 
    }
};

const a1 = {
    tipo: elementTypes.A,
    style: {
        ...estiloPadrao,
        'text-decoration':'none',
    },
    href: '#',
    textContent: 'Home',
};
const a2 = {
    tipo: elementTypes.A,
    style: {
        ...estiloPadrao,
        'text-decoration':'none',
    },
    href: '#',
    textContent: 'Sobre',
};
const a3 = {
    tipo: elementTypes.A,
    style: {
        ...estiloPadrao,
        'text-decoration':'none',
    },
    href: '#',
    textContent: 'Contato',
};

const main = {
    tipo: elementTypes.MAIN,
    style: {
        ...estiloPadrao,
        display: 'flex', 
        background: 'lightyellow',
        height: 'auto',
    }
};

const article = {
    tipo: elementTypes.ARTICLE,
    style: {
        ...estiloPadrao,
        background: 'lightgreen',
        display: 'flex', 
        'flex-wrap': 'wrap',
        width: '70%',
        height: '100%', 
    }
};

const section1 = {
    tipo: elementTypes.SECTION,
    style: {
        ...estiloPadrao,
        background: 'lightcoral',
        width: '50%',
        height: '300px',
    }
};

const section2 = {
    tipo: elementTypes.SECTION,
    style: {
        ...estiloPadrao,
        background: 'lightsalmon',
        width: '50%',
        height: '300px',
    }
};

const aside = {
    tipo: elementTypes.ASIDE,
    style: {
        ...estiloPadrao,
        background: 'lightpink',
        width: '30%',
        height: '300px',
    }
};

const footer = {
    tipo: elementTypes.FOOTER,
    style: {
        ...estiloPadrao,
        background: 'lightgray',
        clear: 'both',
        height: '60px',
    }
};

export {header, nav, ul, li, a1, a2, a3, main, section1, section2, article, aside, footer};

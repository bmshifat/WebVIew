//BM Shifat v1.0.0
//shifat8m@gmail.com@gmail.com

 module.exports = [
    {
        label: 'Web',
        submenu: [
            {label : 'Home', click : () => { require('./main')("home") }},
            {role : 'quit'},
        ]
    },

    {
        label: 'About',
        submenu: [
           
            {label : 'V1.0.0', click : () => { require('./main')("about") }},
            {label : 'Developer', click : () => { require('./main')("dev") }},

        ]
    },

]
import "../node_modules/react/umd/react.production.min.js"; // Грижи се за DOM дървото и създаването на елементи
import "../node_modules/react-dom/umd/react-dom.production.min.js"; // Грижи се да вземе тези React елементи и да ги аплайне в истинският DOM

const rootDomElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootDomElement);

// const reactHeading = React.createElement("h1", {}, "Hello from JSX");
// const reactSecondHeading = React.createElement("h2",{},"The best syntax ever!");
// const headerEelement = React.createElement(
//   "header",
//   { className: "site-header" },
//   reactHeading,
//   reactSecondHeading,
// );


// const Footer =  () =>{
//     return React.createElement(
//         'div', 
//         {className: 'site-footer'},
//         React.createElement(
//             'p',
//             {},
//             'All rights reserved'
//         ),
//      );
// }; 

// const Footer = () =>(
//     <div className = 'site-footer'>
//         <p>All rights reserved &copy;</p>
//     </div>
// );

// none JS component

function FooterText(){
    return  React.createElement('p', {}, 'All rights reserved');
}
function Footer(){
    return React.createElement(
        'div', 
        {className: 'site-footer'},
        React.createElement(FooterText), // подава се children, който не е директно елемент,а е компонент
    );

   
}
 // JSX
// function Footer(){
//     return(
//         <div className = 'site-footer'>
//             <FooterText/>
//         </div>
//     );
// }


const headerJSX = (
    <div>
         <header className = "site-header">
        <h1>Hello from JSX!</h1>
        <h2>The best syntax ever!</h2>

        <p>something else here</p>
    </header>
    <Footer />
    </div>
   
);

root.render(headerJSX); // render() -> функция, което казва "Отиди в ДОМ-а"

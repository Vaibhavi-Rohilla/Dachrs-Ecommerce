import React from 'react'
import "./Footer.scss"

const Footer = () => {
    return (
        
        <div className="Footer">
            <div className="FooterTable">
                <div className="FooterInfo">
                    <h1>BE IN TOUCH WITH US</h1>
                    <input type="text" placeholder="Enter anything here"></input>
                    <h1><span>JOIN US</span></h1>
                    <ul >
                    <li><a href="/"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></a></li>
                    <li><a href="/"><i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a></li>
                    <li><a href="/"><i class="fa fa-instagram fa-lg" aria-hidden="true"></i></a></li>
                    <li><a href="/"><i class="fa fa-github fa-lg" aria-hidden="true"></i></a></li>

                    </ul>

                </div>
                <table >
                <tbody>
                    <tr>
                    <th>CATEGORIES</th>
                    <th>INFORMATION</th>
                    <th>USEFUL LINKS</th>
                    <th>CONTACT US</th>
                    </tr>
                    <tr>
                    <td><a href="/">Men</a></td>
                    <td><a href="/">About Us</a></td>
                    <td><a href="/">Terms & Conditions</a></td>
                    <td>Sector 21 Gurgaon</td>
                    </tr>
                    <tr>
                    <td><a href="/">Women</a></td>
                    <td><a href="/">Contact Us</a></td>
                    <td><a href="/">Return & Exchange</a></td>
                    <td>1800 999 2121</td>
                    </tr>
                    <tr>
                    <td><a href="/">Accessories</a></td>
                    <td></td>
                    <td><a href="/">Privicy Policy</a></td>
                    <td>hello@littletags.com</td>
                    </tr>
                    
                    </tbody>
                </table>
                
    </div>
    </div>
   
    
    )
}

export default Footer

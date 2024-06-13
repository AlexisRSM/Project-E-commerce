import '../Navbar.css';
function Navbar() {
    return (
        <div id='navBar'>
            <div id='topHalf'>
                <div id='logoWrapper'>
                    <img id='logo' src="http://www.userlogos.org/files/logos/ArkAngel06/Amazon.png" />
                </div>
                <input type="text" placeholder="Give me all your money" />
                <img id='backToSchool' src="http://blog.neurogistics.com/wp-content/uploads/2014/08/Back-To-School-Special-Banner.jpg" alt="" />

            </div>{/*  */}




            <div id='bottomHalf'>
                <div id='depart/*  */ment'>Departments</div>
                <div id='sections'>
                    <div className="section">Your Amazon.com</div>
                    <div className="section">Today's Deals</div>
                    <div className="section">Gift Cards & Registry</div>
                    <div className="section">Sell</div>
                    <div className="section">Help</div>
                </div>
                <div id='accountStuff'>
                    <div className="section">Your Account</div>
                    <div className="section">Try Prime</div>
                    <div className="section">Lists</div>
                    <div className="section">Cart</div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
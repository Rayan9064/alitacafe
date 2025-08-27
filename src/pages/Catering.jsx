import React from "react";

export default function Catering() {
  return (
    <div className="site-wrapper">
      <main id="page" className="container" role="main">
        <article className="sections" id="sections">
          <section className="page-section full-bleed-section layout-engine-section background-width--full-bleed section-height--custom content-width--wide horizontal-alignment--center vertical-alignment--middle white">
            <div className="content-wrapper" style={{paddingTop: "5vh", paddingBottom: "5vh"}}>
              <div className="content">
                <h1 style={{whiteSpace: "pre-wrap"}}>Catering Inquiries</h1>
                <h4><span className="sqsrte-text-color--darkAccent">Please place your order with at least 48 hrs notice. Thank you!</span></h4>
                <p><em>Baked fresh every morning</em></p>
                <hr />
                <h2>Menu</h2>
                <div className="menu-wrapper menu-style-classic">
                  <div className="menus">
                    <div className="menu js-menu" style={{display: "block"}}>
                      <div className="menu-section">
                        <div className="menu-items">
                          <div className="menu-item"><span className="menu-item-price-top"><span className="currency-sign">$</span>21</span><div className="menu-item-title">Buttermilk Biscuits</div><div className="menu-item-description">(1/2 dozen)</div><div className="menu-item-price-bottom"><span className="currency-sign">$</span>21</div></div>
                          <div className="menu-item"><span className="menu-item-price-top"><span className="currency-sign">$</span>27</span><div className="menu-item-title">Chorizo Cheddar Biscuits</div><div className="menu-item-description">(1/2 dozen)</div><div className="menu-item-price-bottom"><span className="currency-sign">$</span>27</div></div>
                          <div className="menu-item"><span className="menu-item-price-top"><span className="currency-sign">$</span>25.50</span><div className="menu-item-title">Gluten-free Biscuits</div><div className="menu-item-description">(1/2 dozen)</div><div className="menu-item-price-bottom"><span className="currency-sign">$</span>25.50</div></div>
                          <div className="menu-item"><span className="menu-item-price-top"><span className="currency-sign">$</span>19.50</span><div className="menu-item-title">Chocolate Chip Cookies</div><div className="menu-item-description">(1/2 dozen)</div><div className="menu-item-price-bottom"><span className="currency-sign">$</span>19.50</div></div>
                          <div className="menu-item"><span className="menu-item-price-top"><span className="currency-sign">$</span>15</span><div className="menu-item-title">Gluten-free Ginger Molasses Cookies</div><div className="menu-item-description">(1/2 dozen)</div><div className="menu-item-price-bottom"><span className="currency-sign">$</span>15</div></div>
                          <div className="menu-item"><span className="menu-item-price-top"><span className="currency-sign">$</span>26</span><div className="menu-item-title">Banana Bread</div><div className="menu-item-description">(1 loaf serves 7-10 people)</div><div className="menu-item-price-bottom"><span className="currency-sign">$</span>26</div></div>
                          <div className="menu-item"><span className="menu-item-price-top"><span className="currency-sign">$</span>15</span><div className="menu-item-title">Vegan Gluten-free Brownie Bites</div><div className="menu-item-description">(1/2 dozen) *contains applesauce*</div><div className="menu-item-price-bottom"><span className="currency-sign">$</span>15</div></div>
                          <div className="menu-item"><span className="menu-item-price-top"><span className="currency-sign">$</span>15</span><div className="menu-item-title">Mini Corn Muffins</div><div className="menu-item-description">(1/2 dozen)</div><div className="menu-item-price-bottom"><span className="currency-sign">$</span>15</div></div>
                          <div className="menu-item"><span className="menu-item-price-top"><span className="currency-sign">$</span>35</span><div className="menu-item-title">Lemon Olive Oil Cake</div><div className="menu-item-description">(1 cake serves 7-10 people)</div><div className="menu-item-price-bottom"><span className="currency-sign">$</span>35</div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2>Drinks</h2>
                <div className="menu-wrapper menu-style-classic">
                  <div className="menus">
                    <div className="menu js-menu" style={{display: "block"}}>
                      <div className="menu-section">
                        <div className="menu-items">
                          <div className="menu-item"><span className="menu-item-price-top"><span className="currency-sign">$</span>35</span><div className="menu-item-title">Coffee Carafe</div><div className="menu-item-description">96 oz. serves approx. 12 people *includes cups, milk, sugar</div><div className="menu-item-price-bottom"><span className="currency-sign">$</span>35</div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p>*Special Menu Items and Assortments are available on a case-by-case basis. Please message us with any questions, modifications or specific requests!</p>
                <hr />
                <h2>Order Form</h2>
                <form className="sqs-site-style-form form-wrapper">
                  <fieldset className="form-item fields name required">
                    <legend className="title">Name <span className="required" aria-hidden="true">*</span></legend>
                    <div className="field first-name">
                      <label className="caption">
                        <input className="field-element field-control" name="fname" type="text" maxLength="30" required />
                        <span className="caption-text">First Name</span>
                      </label>
                    </div>
                    <div className="field last-name">
                      <label className="caption">
                        <input className="field-element field-control" name="lname" type="text" maxLength="30" required />
                        <span className="caption-text">Last Name</span>
                      </label>
                    </div>
                  </fieldset>
                  <div className="form-item field email required">
                    <label className="title">Email <span className="required" aria-hidden="true">*</span></label>
                    <input className="field-element" name="email" type="email" required />
                  </div>
                  <fieldset className="form-item fields phone required">
                    <legend className="title">Phone <span className="required" aria-hidden="true">*</span></legend>
                    <div className="field text three-digits">
                      <label className="caption">
                        <input className="field-element" type="text" maxLength="3" required />
                        <span className="caption-text">(###)</span>
                      </label>
                    </div>
                    <div className="field text three-digits">
                      <label className="caption">
                        <input className="field-element" type="text" maxLength="3" required />
                        <span className="caption-text">###</span>
                      </label>
                    </div>
                    <div className="field text four-digits">
                      <label className="caption">
                        <input className="field-element" type="text" maxLength="4" required />
                        <span className="caption-text">####</span>
                      </label>
                    </div>
                  </fieldset>
                  <fieldset className="form-item fields date required">
                    <legend className="title">I would like to pick-up my order on: <span className="required" aria-hidden="true">*</span></legend>
                    <div className="field month two-digits">
                      <label className="caption">
                        <input className="field-element" type="text" maxLength="2" required />
                        <span className="caption-text">MM</span>
                      </label>
                    </div>
                    <div className="field day two-digits">
                      <label className="caption">
                        <input className="field-element" type="text" maxLength="2" required />
                        <span className="caption-text">DD</span>
                      </label>
                    </div>
                    <div className="field year four-digits">
                      <label className="caption">
                        <input className="field-element" type="text" maxLength="4" required />
                        <span className="caption-text">YYYY</span>
                      </label>
                    </div>
                  </fieldset>
                  <div className="form-item field textarea required">
                    <label className="title">Order & Message: <span className="required" aria-hidden="true">*</span></label>
                    <textarea className="field-element" rows="4" required></textarea>
                  </div>
                  <div className="form-button-wrapper form-button-wrapper--align-center">
                    <input className="button sqs-system-button sqs-editable-button sqs-button-element--primary" type="submit" value="Submit" />
                  </div>
                </form>
              </div>
            </div>
          </section>
          <footer className="sections" id="footer-sections">
            <section className="page-section full-bleed-section layout-engine-section background-width--full-bleed section-height--small content-width--wide horizontal-alignment--center vertical-alignment--middle white">
              <div className="content-wrapper">
                <div className="content">
                  <h4 style={{textAlign: "center", whiteSpace: "pre-wrap"}}>Location</h4>
                  <p style={{textAlign: "center", whiteSpace: "pre-wrap"}}><a href="https://www.google.com/maps/place/Alita+Cafe/@40.7120966,-73.9413597,15z/data=!4m5!3m4!1s0x0:0xf4831962c089f472!8m2!3d40.7120966!4d-73.9413597">797 Grand Street<br />Brooklyn, NY 11211</a></p>
                  <h4 style={{textAlign: "center", whiteSpace: "pre-wrap"}}>Hours</h4>
                  <p style={{textAlign: "center", whiteSpace: "pre-wrap"}}>Monday — Friday: <br />7am — 2pm<br />Saturday & Sunday: <br />8am — 3pm</p>
                  <h4 style={{textAlign: "center", whiteSpace: "pre-wrap"}}>Contact</h4>
                  <p style={{textAlign: "center", whiteSpace: "pre-wrap"}}><a href="mailto:drink@alitacafe.com">drink@alitacafe.com</a><br /><a href="tel:9293970002">(929) 397-0002</a></p>
                </div>
              </div>
            </section>
          </footer>
        </article>
      </main>
    </div>
  );
}

import React from "react";
import "./TermsAndCondtion.css";
import MetaData from "../component/layouts/MataData/MataData";
import TermsImage from "../Image/about/tc.jpg";
const TermsAndConditionsPage = () => {
  return (
    <div className="terms-container">
      <MetaData title="Terms and Conditions" />
      <img
        src={TermsImage}
        alt="Terms and Conditions"
        className="terms-image"
      />
      <div className="terms-overlay">
        <h1 className="terms-title">TERMS AND CONDITIONS</h1>
      </div>
      <div className="terms-content">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


        </p>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </p>
        <h2>Acceptance of These Terms</h2>
        <p>
          You (“Customer”) may place orders for Products with CricketWeapon
          ("we," "our") via our website or, in certain circumstances, over the
          phone. By placing an order, you consent to these Terms and Conditions
          of Sale (“Terms”) and acknowledge that we will furnish the Products
          subject to these Terms. Any term or condition in any order or other
          form or correspondence that is inconsistent with these Terms shall be
          inapplicable and of no force and effect whatsoever, unless expressly
          agreed to in writing by CricketWeapon.
        </p>
        <h2>Orders</h2>
        <p>
          All orders are subject to CricketWeapon's acceptance. We may refuse to
          accept, cancel, or limit any order or order quantity for any reason,
          even after an order confirmation has been sent. If we cancel an order
          after you have been charged, we will refund you the charged amount.
        </p>
        <h2>Product Offering</h2>
        <p>
          All product descriptions on our website are subject to change without
          notice at our sole discretion. We reserve the right to change or
          discontinue a product at any time. While we make every effort to
          display the colors and images of the products accurately, we cannot
          guarantee that your device's display will be an exact reflection of
          the physical item.
        </p>



        <h2>Exclusivity</h2>
        <p>
          The rights, liabilities, responsibilities, and remedies with respect
          to the Products are exclusively those expressed in these Terms. The
          waivers, releases, limitations on liability, and remedies expressed in
          these Terms apply even in the event of default, negligence, breach of
          contract, strict liability, or other cause of action.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;

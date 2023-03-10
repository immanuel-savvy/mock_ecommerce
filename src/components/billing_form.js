import React from "react";

class Billing_form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="submit-page mb-4">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <h3 class="ml-0">Billing Detail</h3>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="form-group">
              <label>
                Name<i class="req">*</i>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="form-group">
              <label>
                Email<i class="req">*</i>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="form-group">
              <label>Company Name</label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="form-group">
              <label>
                Country<i class="req">*</i>
              </label>
              <select id="country" class="form-control">
                <option value="">&nbsp;</option>
                <option value="1">United State</option>
                <option value="2">United kingdom</option>
                <option value="3">India</option>
                <option value="4">Canada</option>
              </select>
            </div>
          </div>

          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="form-group">
              <label>
                Street<i class="req">*</i>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="form-group">
              <label>Apartment</label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="form-group">
              <label>
                Town/City<i class="req">*</i>
              </label>
              <select id="town" class="form-control">
                <option value="">&nbsp;</option>
                <option value="1">Punjab</option>
                <option value="2">Chandigarh</option>
                <option value="3">Allahabad</option>
                <option value="4">Lucknow</option>
              </select>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="form-group">
              <label>
                State<i class="req">*</i>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="form-group">
              <label>
                Postcode/Zip<i class="req">*</i>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="form-group">
              <label>
                Phone<i class="req">*</i>
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="form-group">
              <label>Landline</label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="form-group">
              <label>Additional Information</label>
              <textarea class="form-control ht-50"></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Billing_form;

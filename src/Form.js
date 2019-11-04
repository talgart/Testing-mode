import React from 'react'
import {Formik} from "formik";
import likes from './img/Heart.png'
import logo from "./img/Vector.png";
import {observable, runInAction} from "mobx";


class Form extends React.Component {
  @observable data=null;
  @observable id= null;

  componentWillMount() {
    let id = (this.props.match.params.id);
    localStorage.getItem('contacts') && runInAction(()=>{
      this.data = JSON.parse(localStorage.getItem('contacts'));
      this.id  = id
    })


  }

  modifyData = (values) => {
    this.data[this.id - 1].firstName = values.firstName;
    this.data[this.id - 1].lastName = values.lastName;
    this.data[this.id - 1].email = values.email;
    this.data[this.id - 1].city = values.city;
    this.data[this.id - 1].country = values.country;
    this.data[this.id - 1].phoneNumber = values.phoneNumber;
    this.data[this.id - 1].website = values.website;

    localStorage.setItem('contacts', JSON.stringify(this.data));
    alert("the data has been saved ")

  };


  render() {
    return (
      <div>
        <nav className={'nav-header'}>
          <div className="headerTool">
            <img src={logo} alt="logo" className="logo"/>
          </div>
          <ul>
            <li><a className='myContacts' href="#"> MyContacts</a></li>
          </ul>
        </nav>
        <Formik
          initialValues={{
            email: this.data[this.id - 1].email,
            firstName: this.data[this.id - 1].firstName,
            lastName: this.data[this.id - 1].lastName,
            city: this.data[this.id - 1].city,
            country: this.data[this.id - 1].country,
            phoneNumber: this.data[this.id - 1].phoneNumber,
            website: this.data[this.id - 1].website
          }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, {setSubmitting}) => {
            this.modifyData(values);
            setSubmitting(false)
          }}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
            <form onSubmit={handleSubmit}>
              <div className="info">
                <div className="column">
                    <img src={this.data[this.id - 1].image} className="images"  alt="image"/>
                </div>
                <div className="column">
                     <img src={likes} className="likes" alt="likes"/>
                </div>


             </div>
              <div className="info">
                <div className="column">
                  <p>First name </p>
                  <input
                    type="firstName"
                    name="firstName"
                    className="input-type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                  <p>City</p>
                  <input
                    type="city"
                    name="city"
                    className="input-type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                  />
                  <p>Phone number </p>
                  <input
                    type="phoneNumber"
                    name="phoneNumber"
                    className="input-type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                  />
                  <p>Website</p>
                  <input
                    type="website"
                    name="website"
                    className="input-type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.website}
                  />
                </div>
                <div className="column">

                  <p>Last name</p>
                  <input
                    type="lastName"
                    name="lastName"
                    className="input-type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                  <p>Country</p>
                  <input
                    type="country"
                    name="country"
                    className="input-type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.country}
                  />
                  <p>Email </p>
                  <input
                    type="email"
                    name="email"
                    className="input-type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <br></br>
                  {errors.email && touched.email && errors.email}
                  <button className="btn-save" type="submit" disabled={isSubmitting}>Save contact</button>


                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>

    )

  }
}


export default Form
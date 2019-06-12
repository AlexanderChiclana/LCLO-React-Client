import React, { Component } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'


const CustomForm = ({ status, message, onValidated }) => {
    let email, fname, lname
    const submit = () =>
      email &&
      fname &&
      email.value.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email.value,
        FNAME: fname.value,
        LNAME: lname.value
      })
  
    return (
      <div
    
      >
     
           <input
          ref={node => (email = node)}
          type='email'
          placeholder='Email address'
        />
        <br />
        <input
          ref={node => (fname = node)}
          type='text'
          placeholder='First name'
        />
        <br />
        <input
          ref={node => (lname = node)}
          type='text'
          placeholder='Last name'
        />
        <br />

        {status === 'sending' && 
            <div style={{ 
             width: '200px', 
             display: 'block', 
             margin: '0px auto',
            color: '#262626' }}>
            </div>}

        {status === 'error' && (
          <div
            style={{ 
                width: '200px', 
                display: 'block', 
                margin: '0px auto',
                fontWeight: '600', 
                color: 'red' }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === 'success' && (
          <div
            style={{ 
                width: '200px', 
                display: 'block', 
                margin: '0px auto',
                fontWeight: '600', 
                color: '#ff5a00' }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

        {status !== 'success' && 
        <button className="btn roundButton gradient-bg" style={{ width: '200px', display: 'block', margin: '0px auto' }} onClick={submit}>
          Join Mailing List
        </button>
        }

      </div>
    )
  }
  
  class MailingListForm extends Component {
    render() {
      const url =
        'https://brown.us20.list-manage.com/subscribe/post?u=e36efe5b4e1fe2ce16c1fd9c5&amp;id=afbdd9577d'
      return (
        <div className="col-12 col-lg-7">

        <div className="contact-form">
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </div>

        </div>
      )
    }
  }

export default MailingListForm


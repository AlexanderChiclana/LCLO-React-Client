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
        style={{
          background: '#efefef',
          borderRadius: 2,
          padding: 10,
          display: 'inline-block'
        }}
      >
        {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
        {status === 'error' && (
          <div
            style={{ color: 'red' }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === 'success' && (
          <div
            style={{ color: 'green' }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <input
          style={{ fontSize: '2em', padding: 5 }}
          ref={node => (fname = node)}
          type='text'
          placeholder='First name'
        />
        <br />
        <input
          style={{ fontSize: '2em', padding: 5 }}
          ref={node => (lname = node)}
          type='text'
          placeholder='Last name'
        />
        <br />
        <input
          style={{ fontSize: '2em', padding: 5 }}
          ref={node => (email = node)}
          type='email'
          placeholder='Your email'
        />
        <br />
        <button style={{ fontSize: '2em', padding: 5 }} onClick={submit}>
          Submit
        </button>
      </div>
    )
  }
  
  class MailingListForm extends Component {
    render() {
      const url =
        'https://brown.us20.list-manage.com/subscribe/post?u=e36efe5b4e1fe2ce16c1fd9c5&amp;id=afbdd9577d'
      return (
        <div>
          <h2>Default Form</h2>
          <MailchimpSubscribe url={url} />
          <h2>Custom Form</h2>
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
      )
    }
  }

export default MailingListForm


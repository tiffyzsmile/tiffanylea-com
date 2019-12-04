import React, { useState } from 'react';
import useForm from 'react-hook-form';
import Alert from 'components/Alert';
import Page from 'components/Page';
import Form from 'components/Form';
import TextField from 'components/Form/TextField';
import TextArea from 'components/Form/TextArea';
import { H1 } from 'components/Typography';

const Contact = () => {
  const [status, setStatus] = useState('not submitted');
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ name, email, message: content }) => {
    return fetch(
      'https://zh7bsp9bu1.execute-api.us-east-1.amazonaws.com/dev/email/send',
      {
        method: 'post',
        body: JSON.stringify({ name, email, content })
      }
    ).then(response => {
      // if response is not an error set status to submitted
      if (response.ok) {
        return setStatus('submitted');
      }
      // else set status to error
      return setStatus('error');
    });
  };

  const getError = id => {
    return errors[id] && errors[id].type;
  };

  return (
    <Page title="Contact" description="Contact">
      <H1>Contact</H1>
      <Form
        status={status}
        onSubmit={handleSubmit(onSubmit)}
        successMessage={
          <div>
            <p className="success">Your message has been sent!</p>
            <img src="/images/good-news.gif" alt="Good News!" />
          </div>
        }
        errorMessage={
          <Alert type="error">
            Woah... there was a problem. Maybe try again?
          </Alert>
        }
      >
        <TextField
          id="name"
          label="Name:"
          type="text"
          placeholder="Name"
          error={getError('name')}
          errorMessages={{
            required: 'This field is required'
          }}
          refProp={register({ required: true })}
        />
        <TextField
          id="email"
          label="Email:"
          type="email"
          placeholder="jane@gmail.com"
          error={getError('email')}
          errorMessages={{
            required: 'This field is required',
            pattern: 'Please use a valid email address'
          }}
          refProp={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <TextArea
          id="message"
          label="Message:"
          placeholder="Tell me something..."
          error={getError('message')}
          errorMessages={{
            required: 'This field is required'
          }}
          refProp={register({ required: true })}
        />
        <TextField
          id="human"
          label="What is 2+2? (Anti-spam)"
          type="text"
          placeholder="What is 2+2? (Anti-spam)"
          error={getError('human')}
          errorMessages={{
            required: 'This field is required',
            pattern: 'The answer is 4....'
          }}
          refProp={register({ required: true, pattern: /4/i })}
        />
        <input type="submit" className="submit" />
      </Form>
    </Page>
  );
};

export default Contact;
